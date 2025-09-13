import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  tag: string;
  title: string;
  img: string;
  points: string[];
};

export default function ProductCard({ tag, title, img, points }: ProductCardProps) {
  return (
    <div className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition">
      <div className="relative aspect-[4/3]">
        {/* ✅ Use next/image instead of <img> */}
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
        />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-[#fdd835] text-[#204c2e] px-3 py-1 text-xs font-bold shadow">
          {tag}
        </span>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-bold text-gray-900">{title}</h4>
        <ul className="mt-3 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#28a745]" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm text-gray-500">Delivery in 3–5 days</span>
          {/* ✅ Use Link instead of <a> for internal navigation */}
          <Link
            href="#contact"
            className="inline-flex items-center rounded-xl bg-[#28a745] px-4 py-2 text-white font-semibold shadow hover:bg-[#23913f]"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
