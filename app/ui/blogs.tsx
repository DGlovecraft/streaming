import Link from "next/link";
import { getBlogs } from "@/app/lib/blogs";

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {blogs.map((blog) => (
        <article
          key={blog.id}
          className="rounded-lg border border-gray-200 p-4 shadow-sm"
        >
          <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-gray-100 text-gray-500">
            {blog.category || "บทความ"}
          </div>
          <h3 className="mb-3 text-lg font-semibold">
            <Link
              className="text-blue-700 hover:underline"
              href={`/blogs/${blog.id}`}
            >
              {blog.title}
            </Link>
          </h3>
          <p className="line-clamp-2 text-sm text-gray-600">{blog.content}</p>
          <p className="mt-4 text-sm text-gray-500">
            {[blog.author, blog.date].filter(Boolean).join(" · ")}
          </p>
        </article>
      ))}
    </div>
  );
}
