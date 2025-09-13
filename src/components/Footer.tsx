"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left - Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/logo.png"
            alt="VoltraX Logo"
            width={80}
            height={25}
            className="object-contain mb-1"
          />
          <h3 className="text-lg font-bold">VoltraX</h3>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} VoltraX. All rights reserved.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-col items-center text-center">
          <h4 className="font-semibold mb-2 text-gray-700">Quick Links</h4>
          <div className="flex flex-col md:flex-row md:gap-3 text-xs text-gray-600">
            <a href="/#about" className="hover:text-green-600 transition py-1">About</a>
            <a href="/#contact" className="hover:text-green-600 transition py-1">Contact</a>
            <a href="/#products" className="hover:text-green-600 transition py-1">Products</a>
            <a href="/faq" className="hover:text-green-600 transition py-1">FAQ</a>
            <a href="/blog" className="hover:text-green-600 transition py-1">Blog</a>
            <a href="/privacy" className="hover:text-green-600 transition py-1">Privacy</a>
            <a href="/terms" className="hover:text-green-600 transition py-1">Terms</a>
          </div>
        </div>

        {/* Right - Social Icons */}
        <div className="flex flex-col items-center text-center">
          <h4 className="font-semibold mb-2 text-gray-700">Follow Us</h4>
          <div className="flex gap-4">
           {/* Facebook */}
<a
  href="https://www.facebook.com/voltrax.in"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition-transform"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    className="h-5 w-5 fill-gray-700"
  >
    <path d="M279.14 288l14.22-92.66h-88.91V127.77c0-25.35 
      12.42-50.06 52.24-50.06H293V6.26S259.5 
      0 225.36 0c-73.22 0-121.36 44.38-121.36 
      124.72V195.3H22.89V288h81.11v224h100.17V288z"/>
  </svg>
</a>

            {/* Instagram */}
            <a href="https://www.instagram.com/voltrax.in" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 fill-gray-700">
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM398.8,80.2A112,112,0,0,0,331.8,13.2C303.5,2.6,271.2,0,224,0S144.5,2.6,116.2,13.2A112,112,0,0,0,49.2,80.2C38.6,108.5,36,140.8,36,188v136c0,47.2,2.6,79.5,13.2,107.8a112,112,0,0,0,67,67C144.5,509.4,176.8,512,224,512s79.5-2.6,107.8-13.2a112,112,0,0,0,67-67C413.4,403.5,416,371.2,416,324V188C416,140.8,413.4,108.5,398.8,80.2ZM224,338a82,82,0,1,1,82-82A81.91,81.91,0,0,1,224,338Z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@voltrax.in" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-5 w-5 fill-gray-700">
                <path d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C465.1 64 288 64 288 64s-177.1 0-213.1 11.5c-23.7 6.3-42.3 24.9-48.6 48.6C16 160.1 16 256 16 256s0 95.9 10.3 131.9c6.3 23.7 24.9 42.3 48.6 48.6C110.9 448 288 448 288 448s177.1 0 213.1-11.5c23.7-6.3 42.3-24.9 48.6-48.6C560 351.9 560 256 560 256s0-95.9-10.3-131.9zM232 334V178l142 78-142 78z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-4 border-t border-gray-200 pt-3 text-center text-gray-500 text-xs">
        Designed & Built by{" "}
        <a href="https://betazu.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium hover:underline">
          Betazu Technologies
        </a>
      </div>
    </footer>
  );
}
