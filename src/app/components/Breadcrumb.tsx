import { Link } from "react-router";
import { Fragment } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-12">
      {items.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <span className="text-slate-300 text-sm select-none">/</span>
          )}
          {item.href ? (
            <Link
              to={item.href}
              className="text-sm text-slate-400 hover:text-slate-700 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-sm text-slate-700 font-medium">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
