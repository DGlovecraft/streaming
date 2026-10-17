import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main className="mx-auto max-w-2xl p-8 text-center">
      <h1 className="text-2xl font-bold text-red-700">
        404 - ไม่พบบทความนี้ในระบบ
      </h1>
      <p className="mt-2 text-gray-600">
        รหัสบทความที่คุณค้นหาไม่มีอยู่จริง หรืออาจถูกลบออกไปแล้ว
      </p>
      <Link href="/blogs" className="mt-5 inline-block text-blue-700 underline">
        ย้อนกลับไปยังหน้ารายการบทความทั้งหมด
      </Link>
    </main>
  );
}
