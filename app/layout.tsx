import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fetching Data | Next.js",
  description: "ตัวอย่างการดึงข้อมูลและแสดงผลแบบ Streaming ด้วย Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
