import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltrax | Powering Innovation",
  description: "Voltrax powering future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer /> {/* ✅ Footer now inside body */}

       {/* ✅ Floating Action Buttons with SVG Icons */}
<a
  href="https://wa.me/8926813126"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
  aria-label="WhatsApp"
>
  {/* WhatsApp SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12 0a11.86 11.86 0 0 0-10.3 17.94L0 24l6.2-1.63A11.86 11.86 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 21.82c-2.03 0-4.01-.54-5.74-1.57l-.41-.24-3.67.97.98-3.58-.25-.44A9.84 9.84 0 0 1 2.18 12C2.18 6.94 6.94 2.18 12 2.18c2.63 0 5.1 1.02 6.96 2.88a9.82 9.82 0 0 1 2.88 6.94c0 5.06-4.76 9.82-9.82 9.82Zm5.36-7.36c-.3-.15-1.79-.88-2.07-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.18-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5a9.07 9.07 0 0 1-1.68-2.06c-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.23 3.08c.15.2 2.1 3.2 5.1 4.48.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.79-.73 2.05-1.44.25-.71.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35Z"/>
  </svg>
</a>

<a
  href="tel:+918926813126"
  className="fixed bottom-20 right-6 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
  aria-label="Call"
>
  {/* Phone SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.21 2.2Z"/>
  </svg>
</a>

      </body>
    </html>
  );
}
