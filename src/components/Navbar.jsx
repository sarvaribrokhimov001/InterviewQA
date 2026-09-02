"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { removeToken } from "@/lib/auth";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/questions", label: "Questions" },
  { href: "/answers", label: "Answers" },
  { href: "/quizmode", label: "Quiz Mode" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    removeToken();
    setMenuOpen(false);
    router.replace("/login");
  }

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 max-[500px]:px-3 max-[500px]:py-3">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={handleLinkClick} className="text-2xl font-bold tracking-tight text-white max-[500px]:text-xl">
            Interview<span className="text-slate-400">QA</span>
          </Link>

          <nav className="hidden items-center gap-2 min-[501px]:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link key={link.href} href={link.href} className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
                  active ? "bg-white text-slate-950" : "text-slate-400 hover:bg-slate-800 hover:text-white" }`}>
                    {link.label}
                </Link>
              );
            })}

            <button onClick={handleLogout} className="ml-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-400">
              Logout
            </button>
          </nav>

          <button type="button" onClick={() => setMenuOpen((previous) => !previous)} aria-label="Toggle menu" aria-expanded={menuOpen}
            className="block rounded-lg border border-slate-700 bg-slate-900 p-2 text-white transition hover:border-slate-500 min-[501px]:hidden">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mt-3 flex flex-col gap-2 border-t border-slate-800 pt-3 min-[501px]:hidden">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
                    active ? "bg-white text-slate-950" : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}>
                  {link.label}
                </Link>
              );
            })}

            <button onClick={handleLogout} className="w-full rounded-lg border border-slate-700 px-4 py-3 text-left text-sm font-bold text-slate-300 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-400">
              Logout
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}