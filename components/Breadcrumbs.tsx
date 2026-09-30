import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase mb-6 z-10 relative px-2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {isLast || !item.href ? (
              <span className="text-[#B98135]">{item.label}</span>
            ) : (
              <>
                <Link href={item.href} className="text-gray-500 hover:text-white transition-colors">
                  {item.label}
                </Link>
                <ChevronRight size={12} className="text-gray-600" />
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}