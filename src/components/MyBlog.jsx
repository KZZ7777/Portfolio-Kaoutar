import { useState, useRef, useEffect } from "react";
import { blogs } from "../data/blogs";

export default function MyBlog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Alle unieke categorieën, ook van arrays
  const categories = [
    "All",
    ...new Set(
      blogs.flatMap(blog =>
        Array.isArray(blog.category) ? blog.category : [blog.category]
      )
    )
  ];

  // Filter blogs
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter(blog =>
          Array.isArray(blog.category)
            ? blog.category.includes(selectedCategory)
            : blog.category === selectedCategory
        );

  // Sluit dropdown bij click outside
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
    <div id="blog" className="w-full px-[12%] pt-32 pb-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo mb-12">My Blogs</h2>

      {/* Custom dropdown */}
      <div className="flex justify-center mb-10 relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-medium shadow-md focus:outline-none flex items-center gap-2 transition"
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
         <ul className="absolute mt-2 w-48 bg-white dark:bg-[#11001f]/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden z-50">
  {categories.map((cat) => (
    <li
      key={cat}
      onClick={() => {
        setSelectedCategory(cat);
        setIsOpen(false);
      }}
      className="px-4 py-2 cursor-pointer text-gray-800 dark:text-white hover:bg-gradient-to-r hover:from-[#b820e6]/20 hover:to-[#da7d20]/20 transition"
    >
      {cat}
    </li>
  ))}
</ul>

        )}
      </div>

      {/* Blogs */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-gray-300 dark:border-white/30 rounded-lg p-8 hover:shadow-lg dark:hover:shadow-white/20 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-white/70 mb-4">
              <span>📅</span>
              <span className="text-sm">{blog.date}</span>
            </div>

            <h3 className="text-2xl font-Ovo text-gray-900 dark:text-white mb-3 hover:text-blue-500">
              {blog.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(Array.isArray(blog.category) ? blog.category : [blog.category]).map(
                (cat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-[#b820e6]/20 to-[#da7d20]/20 rounded-full text-sm text-gray-800 dark:text-white"
                  >
                    {cat}
                  </span>
                )
              )}
            </div>

            <p className="text-gray-700 dark:text-white/80 leading-6 mb-6">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
