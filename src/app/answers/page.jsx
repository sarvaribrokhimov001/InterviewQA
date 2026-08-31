"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import SearchInput from "@/components/SearchInput";
import AnswerCard from "@/components/AnswerCard";
import { interviewQuestions } from "@/data/interviewData";

export default function AnswersPage() {
  const [search, setSearch] = useState("");

  const filteredAnswers = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return interviewQuestions;
    }

    return interviewQuestions.filter((item) => {
      return (
        item.id.toString().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.question.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <ProtectedRoute>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold text-slate-500"> Interview preparation </p>
          <h1 className="text-4xl font-bold text-white"> Answers </h1>
          <p className="mt-3 max-w-2xl text-slate-400 font-bold"> QuestionsPage dagi savollarning javoblari 👇 </p>
        </div>

        <div className="mb-8 max-w-2xl">
          <SearchInput value={search} onChange={setSearch} placeholder="Search by answer, question, ID or technology..." />
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-500 font-bold"> {filteredAnswers.length} ta javob </p>
        </div>

        {filteredAnswers.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
            <p className="text-slate-400 font-bold"> Javob topilmadi ❌ </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredAnswers.map((question) => (
              <AnswerCard key={question.id} question={question} />
            ))}
          </div>
        )}
      </main>
    </ProtectedRoute>
  );
}