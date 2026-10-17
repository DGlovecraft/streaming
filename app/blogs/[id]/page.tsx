import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogs } from "@/app/lib/blogs";

type BlogDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <Link href="/blogs" className="text-blue-700 underline">
        ← ย้อนกลับไปยังรายการบทความ
      </Link>
      <article className="mt-6">
        <p className="text-sm text-gray-500">
          {[blog.category, blog.author, blog.date].filter(Boolean).join(" · ")}
        </p>
        <h1 className="mt-2 text-3xl font-bold">{blog.title}</h1>
        <p className="mt-6 whitespace-pre-line leading-7 text-gray-700">
          {blog.content}
        </p>
      </article>
    </main>
  );
}
