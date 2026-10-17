# Fetching Data with Next.js

ตัวอย่างการดึงรายการบทความจาก API และแสดงผลด้วย Server Components, `Suspense`, loading skeleton, หน้ารายละเอียด และหน้า error ตามบทเรียน [it-nkc/streaming](https://github.com/it-nkc/streaming)

## ความต้องการ

- Node.js 20.19 ขึ้นไป
- npm
- การเชื่อมต่ออินเทอร์เน็ตเพื่อเรียก `https://api.vercel.app/blog`

## ติดตั้งและเริ่มใช้งาน

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) หรือไปที่ [http://localhost:3000/blogs](http://localhost:3000/blogs)

## วิธีใช้งาน

- หน้า `/blogs` แสดงรายการบทความจาก API
- เลือกชื่อบทความเพื่อเปิด `/blogs/[id]`
- ระหว่างโหลดข้อมูลจะแสดง skeleton
- หาก API โหลดไม่สำเร็จ จะแสดงหน้า error พร้อมปุ่มลองอีกครั้ง
- URL ของบทความที่ไม่มีอยู่จะแสดงหน้า 404

ข้อมูลถูกดึงจาก API โดยตรงและกำหนด revalidate ไว้ 1 ชั่วโมง หาก API ใช้งานไม่ได้ หน้าบทความจะแสดงข้อผิดพลาดแทนการแสดงข้อมูลตัวอย่าง

## ตรวจสอบโปรเจกต์

```bash
npm run lint
npm run build
```

## ส่งขึ้น GitHub

สร้าง repository เปล่าบน GitHub แล้วตั้ง remote ของตัวเอง (แทน `YOUR-USERNAME`):

```bash
git remote add origin https://github.com/YOUR-USERNAME/streaming.git
git add .
git commit -m "Implement Next.js data streaming example"
git push -u origin HEAD
```

repository นี้จัดแยกจากโปรเจกต์อื่น เพื่อให้ส่งงาน Fetching Data ได้โดยอิสระ
