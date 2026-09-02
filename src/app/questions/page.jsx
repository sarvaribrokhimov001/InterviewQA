"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import SearchInput from "@/components/SearchInput";
import QuestionCard from "@/components/QuestionCard";
import { interviewQuestions } from "@/data/interviewData";

export default function QuestionsPage() {
  const [search, setSearch] = useState("");

  const filteredQuestions = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return interviewQuestions;
    }

    return interviewQuestions.filter((item) => {
      return (
        item.id.toString().includes(query) ||
        item.question.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <ProtectedRoute>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 max-[500px]:px-3 max-[500px]:py-6">
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold text-slate-500"> Interview preparation </p>
          <h1 className="text-4xl font-bold text-white max-[500px]:text-3xl"> Questions </h1>
          <p className="mt-3 max-w-2xl font-bold text-slate-400 max-[500px]:text-sm max-[500px]:leading-6"> JavaScript, TypeScript, React va Next.js bo'yicha interview savollarini ko'rib chiqing 👇 </p>
        </div>

        <div className="mb-8 max-w-2xl max-[500px]:mb-6">
          <SearchInput value={search} onChange={setSearch} placeholder="Search by question, ID or technology..." />
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-500 font-bold max-[500px]:text-xs"> {filteredQuestions.length} ta savol </p>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
            <p className="text-slate-400 font-bold"> Savol topilmadi ❌ </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 max-[500px]:gap-3">
            {filteredQuestions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        )}
      </main>
    </ProtectedRoute>
  );
}