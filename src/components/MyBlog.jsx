import { blogs } from "../data/blogs";

export default function MyBlog() {

    return (
        <div id="blog" className="w-full px-[12%] pt-32 pb-10 scroll-mt-20">

            <h2 className="text-center text-5xl font-Ovo mb-12">My Blogs</h2>

            <div className="space-y-6 max-w-4xl mx-auto">
                {blogs.map((blog) => (
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

                        <p className="text-sm text-gray-500 dark:text-white/60 mb-4">
                            {blog.category}
                        </p>

                        <p className="text-gray-700 dark:text-white/80 leading-6 mb-6">
                            {blog.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}