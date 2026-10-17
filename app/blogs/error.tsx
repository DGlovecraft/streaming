"use client";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold text-red-700">
        โหลดบทความไม่สำเร็จ
      </h1>
      <p className="mt-2 text-gray-600">
        {error.message || "เกิดข้อผิดพลาดระหว่างโหลดข้อมูล"}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-5 rounded bg-blue-700 px-4 py-2 text-white"
      >
        ลองอีกครั้ง
      </button>
    </main>
  );
}
