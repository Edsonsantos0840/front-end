import Link from "next/link";
import { dashLink } from "../../content/ContentFields";

export default function CardNavDashboard() {

  const dashLinks = dashLink.map((item) => {
    return (
      <Link
        key={item.name}
        href={item.href}
        className=" flex items-center gap-2 p-1 text-sm bg-textos/90 font-medium text-textos2 rounded-xl shadow-base cursor-pointer hover:scale-105"
      >
        <span>{item.name}</span>
        {item.ico}
      </Link>
    );
  });

  return <nav className="alinha4 text-center gap-4 ">{dashLinks}</nav>;
}
