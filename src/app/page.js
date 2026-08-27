"use client";

import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function HomePage() {
  return (
    <ProtectedRoute>
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold"> InterviewQA HomePage </h1>
          <p className="mt-3 text-slate-400 font-bold"> Welcome to InterviewQA </p>
        </div>
      </main>
    </ProtectedRoute>
  );
}