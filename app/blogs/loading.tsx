import { BlogListSkeleton } from "@/app/ui/my-skeleton";

export default function LoadingPage() {
  return (
    <main className="mx-auto max-w-6xl p-6" aria-label="กำลังโหลดรายการบทความ">
      <p className="mb-4 text-blue-700">กำลังโหลดรายการบทความ...</p>
      <BlogListSkeleton />
    </main>
  );
}
