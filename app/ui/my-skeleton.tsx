export function BlogCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="animate-pulse rounded-lg border border-gray-200 p-4 shadow"
    >
      <div className="mb-4 h-40 rounded-md bg-gray-200" />
      <div className="mb-3 h-6 w-3/4 rounded bg-gray-200" />
      <div className="space-y-2">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
      </div>
    </div>
  );
}

export function BlogListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
}
