import { useState, useRef, useEffect } from "react";
import { blogs } from "../data/blogs";

export default function MyBlog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    "All",
    ...new Set(
      blogs.flatMap(blog =>
        Array.isArray(blog.category) ? blog.category : [blog.category]
      )
    )
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter(blog =>
          Array.isArray(blog.category)
            ? blog.category.includes(selectedCategory)
            : blog.category === selectedCategory
        );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
  id="blog"
  className="w-full px-[12%] pt-32 pb-10 scroll-mt-20
             bg-white text-gray-900 dark:bg-[#11001f] dark:text-white transition-colors duration-300"
>
  <h2 className="text-center text-5xl font-Ovo mb-12">
    My Blogs
  </h2>

  {/* Dropdown */}
  <div className="flex justify-center mb-10 relative" ref={dropdownRef}>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="px-6 py-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-medium shadow-md flex items-center gap-2 transition"
    >
      {selectedCategory}
      <span
        className={`ml-2 transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>

    {isOpen && (
      <ul className="absolute mt-2 w-48 bg-white/90 dark:bg-[#11001f]/90 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/10 shadow-lg overflow-hidden z-50">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setIsOpen(false);
            }}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            {cat}
          </li>
        ))}
      </ul>
    )}
  </div>

  {/* Blogs */}
  <div className="space-y-8 max-w-5xl mx-auto">
    {filteredBlogs.map((blog) => (
      <div
        key={blog.id}
        className={`border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20
                    rounded-2xl p-8 
                    transition-all duration-500 
                    hover:-translate-y-1
                    grid gap-10 items-center
                    ${blog.image ? "md:grid-cols-2" : "md:grid-cols-1"}`}
      >
        {/* TEXT */}
        <div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-300 mb-4">
            <span>📅</span>
            <span className="text-sm">{blog.date}</span>
          </div>

          <h3 className="text-2xl font-Ovo mb-3">
            {blog.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {(Array.isArray(blog.category)
              ? blog.category
              : [blog.category]
            ).map((cat, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gradient-to-r 
                           from-[#b820e6]/20 to-[#da7d20]/20 
                           rounded-full text-sm"
              >
                {cat}
              </span>
            ))}
          </div>

          <p className="leading-6">
            {blog.description}
          </p>
        </div>

        {/* IMAGE (only if exists) */}
        {blog.image && (
          <div className="overflow-hidden rounded-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover object-[center_22%] transition-transform duration-500 hover:scale-105" 
            />
          </div>
        )}
      </div>
    ))}
  </div>
</div>


  );
}