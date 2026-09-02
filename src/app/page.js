"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { interviewQuestions } from "@/data/interviewData";

export default function HomePage() {
  const questionCount = interviewQuestions.length;

  return (
    <ProtectedRoute>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 max-[500px]:px-3 max-[500px]:py-6">
        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-black/20 md:p-12 max-[500px]:rounded-2xl max-[500px]:p-5">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-bold text-slate-400 max-[500px]:px-3 max-[500px]:py-1.5 max-[500px]:text-xs">
              Technical Interview Preparation
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl max-[500px]:text-3xl max-[500px]:leading-tight"> InterviewQA bilan
              <span className="text-slate-500"> interviewga tayyorlaning </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 font-bold max-[500px]:text-sm max-[500px]:leading-6"> JavaScript, TypeScript, React va Next.js 
              bo'yicha muhim interview savollarini o'rganing, javoblarni ko'rib chiqing va Quiz Mode orqali o'z bilimingizni sinab ko'ring.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row max-[500px]:mt-6">
              <Link href="/questions" className="rounded-xl bg-white px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-slate-200 max-[500px]:px-4 max-[500px]:py-2.5 max-[500px]:text-sm">
                Savollarni ko'rish
              </Link>

              <Link href="/quizmode" className="rounded-xl border border-slate-700 bg-slate-950 px-6 py-3 text-center font-bold text-white transition hover:border-slate-500 hover:bg-slate-800 max-[500px]:px-4 max-[500px]:py-2.5 max-[500px]:text-sm">
                Quiz boshlash
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-[500px]:grid-cols-2 max-[500px]:gap-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 max-[500px]:p-4">
            <p className="text-sm font-bold text-slate-500 max-[500px]:text-[11px]"> Total Questions </p>
            <p className="mt-3 text-4xl font-bold text-white max-[500px]:text-2xl"> {questionCount} </p>
            <p className="mt-2 text-sm font-bold text-slate-500 max-[500px]:text-[10px]"> Interview savollari </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 max-[500px]:p-4">
            <p className="text-sm font-bold text-slate-500 max-[500px]:text-[11px]"> Quiz Size </p>
            <p className="mt-3 text-4xl font-bold text-white max-[500px]:text-2xl"> 20 </p>
            <p className="mt-2 text-sm font-bold text-slate-500 max-[500px]:text-[10px]"> Har bir quiz uchun </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 max-[500px]:p-4">
            <p className="text-sm font-bold text-slate-500 max-[500px]:text-[11px]"> Time </p>
            <p className="mt-3 text-4xl font-bold text-white max-[500px]:text-2xl"> 30s </p>
            <p className="mt-2 text-sm font-bold text-slate-500 max-[500px]:text-[10px]"> Har bir savol uchun </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 max-[500px]:p-4">
            <p className="text-sm font-bold text-slate-500 max-[500px]:text-[11px]"> Topics </p>
            <p className="mt-3 text-4xl font-bold text-white max-[500px]:text-2xl"> 4+ </p>
            <p className="mt-2 text-sm font-bold text-slate-500 max-[500px]:text-[10px]"> Asosiy texnologiyalar </p>
          </div>
        </section>

        <section className="mt-10 max-[500px]:mt-8">
          <div className="mb-6">
            <p className="text-sm font-bold text-slate-500"> InterviewQA imkoniyatlari </p>
            <h2 className="mt-2 text-3xl font-bold text-white max-[500px]:text-2xl"> Tayyorlanish uchun kerakli hamma narsa </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 max-[500px]:gap-3">
            <Link href="/questions" className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-600 hover:bg-slate-800 max-[500px]:p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl"> ? </div>
              <h3 className="mt-5 text-xl font-bold text-white max-[500px]:text-lg"> Questions </h3>
              <p className="mt-3 leading-7 text-slate-400 font-bold max-[500px]:text-sm max-[500px]:leading-6"> Interviewda berilishi mumkin bo'lgan savollarni ko'ring. Savollarni ID, category yoki matn bo'yicha qidiring. </p>
              <span className="mt-5 inline-block text-sm font-bold text-slate-300 transition group-hover:text-white"> Savollarni ko'rish → </span>
            </Link>

            <Link href="/answers" className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-600 hover:bg-slate-800 max-[500px]:p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl"> ✓ </div>
              <h3 className="mt-5 text-xl font-bold text-white max-[500px]:text-lg"> Answers </h3>
              <p className="mt-3 leading-7 text-slate-400 font-bold max-[500px]:text-sm max-[500px]:leading-6"> Savollarning tayyor javoblarini o'rganing va interview oldidan bilimlaringizni mustahkamlang. </p>
              <span className="mt-5 inline-block text-sm font-bold text-slate-300 transition group-hover:text-white"> Javoblarni ko'rish → </span>
            </Link>

            <Link href="/quizmode" className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-600 hover:bg-slate-800 max-[500px]:p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-xl"> ⚡ </div>
              <h3 className="mt-5 text-xl font-bold text-white max-[500px]:text-lg"> Quiz Mode </h3>
              <p className="mt-3 leading-7 text-slate-400 font-bold max-[500px]:text-sm max-[500px]:leading-6"> Tasodifiy 20 ta savolni 30 soniyadan yeching va yakunda nechta to'g'ri javob berganingizni ko'ring. </p>
              <span className="mt-5 inline-block text-sm font-bold text-slate-300 transition group-hover:text-white"> Quizni boshlash → </span>
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8 max-[500px]:mt-8 max-[500px]:p-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold text-slate-500"> Nimalarni o'rganishingiz mumkin ? </p>
              <h2 className="mt-2 text-3xl font-bold text-white max-[500px]:text-2xl"> Zamonaviy frontend texnologiyalari </h2>
              <p className="mt-4 leading-7 text-slate-400 font-bold max-[500px]:text-sm max-[500px]:leading-6"> InterviewQA Frontend Developer interviewlariga tayyorlanish 
                uchun yaratilgan. Savollar asosiy Frontend tushunchalarini takrorlash va o'z bilimlaringizni tekshirishga yordam beradi.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["JavaScript", "TypeScript", "React", "Next.js"].map((technology) => (
                <div key={technology} className="rounded-xl border border-slate-700 bg-slate-950 p-5 text-center font-bold text-white transition hover:border-slate-500 max-[500px]:p-3">
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 max-[500px]:mt-8">
          <div className="mb-6">
            <p className="text-sm font-bold text-slate-500"> Qanday foydalaniladi ? </p>
            <h2 className="mt-2 text-3xl font-bold text-white max-[500px]:text-2xl"> 3 ta oddiy qadam </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 max-[500px]:gap-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 max-[500px]:p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-slate-950"> 1 </span>
              <h3 className="mt-5 text-xl font-bold text-white max-[500px]:text-lg"> Savollarni o'rganing </h3>
              <p className="mt-3 leading-7 text-slate-400 font-bold max-[500px]:text-sm max-[500px]:leading-6"> Questions bo'limidan interview savollarini ko'rib chiqing. </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 max-[500px]:p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-slate-950"> 2 </span>
              <h3 className="mt-5 text-xl font-bold text-white max-[500px]:text-lg"> Javoblarni tekshiring </h3>
              <p className="mt-3 leading-7 text-slate-400 font-bold max-[500px]:text-sm max-[500px]:leading-6"> Answers bo'limida savollarga berilgan javoblarni o'qing va mavzularni takrorlang. </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 max-[500px]:p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-slate-950"> 3 </span>
              <h3 className="mt-5 text-xl font-bold text-white max-[500px]:text-lg"> O'zingizni sinang </h3>
              <p className="mt-3 leading-7 text-slate-400 font-bold max-[500px]:text-sm max-[500px]:leading-6"> Quiz Mode orqali random savollarga javob bering va natijangizni ko'ring. </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-white p-8 text-center md:p-12 max-[500px]:mt-8 max-[500px]:rounded-2xl max-[500px]:p-5">
          <h2 className="text-3xl font-bold text-slate-950 max-[500px]:text-2xl"> Interviewga tayyormisiz ? </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 font-bold max-[500px]:text-sm"> Hozir quizni boshlang va Frontend bo'yicha bilimlaringizni tekshirib ko'ring. </p>
          <Link href="/quizmode" className="mt-6 inline-block rounded-xl bg-slate-950 px-7 py-3 font-bold text-white transition hover:bg-slate-800 max-[500px]:px-5 max-[500px]:py-2.5 max-[500px]:text-sm">
            Start Quiz →
          </Link>
        </section>

        <footer className="py-10 text-center text-sm font-bold text-slate-600"> InterviewQA · Technical Interview Preparation </footer>
      </main>
    </ProtectedRoute>
  );
}