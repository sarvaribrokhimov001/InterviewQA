"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { removeToken } from "@/lib/auth";

const links = [
  { href: "/", label: "Home" },
  { href: "/questions", label: "Questions" },
  { href: "/answers", label: "Answers" },
  { href: "/quizmode", label: "Quiz Mode" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    removeToken();
    router.replace("/login");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          Interview<span className="text-slate-400">QA </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link key={link.href} href={link.href} className={`rounded-lg px-4 py-2 text-sm transition font-bold ${
                active ? "bg-white text-slate-950" : "text-slate-400 hover:bg-slate-800 hover:text-white" }`}>
                  {link.label}
              </Link>
            );
          })}

          <button onClick={handleLogout} className="ml-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-400">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}