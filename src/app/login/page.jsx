"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, saveToken } from "@/lib/auth";
import toast from "react-hot-toast";
import { errorStyle, successStyle } from "@/utils/toastStyle";

const CORRECT_USERNAME = "sarvar";
const CORRECT_PASSWORD = "sarvar123";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = getToken();

    if (token) {
      router.replace("/");
    }
  }, [router]);


function handleSubmit(event) {
  event.preventDefault();

  if (!username.trim() && !password.trim()) {
    toast.error("Username va Password kiriting !", errorStyle);
    return;
  }

  if (!username.trim()) {
    toast.error("Username kiriting !", errorStyle);
    return;
  }

  if (!password.trim()) {
    toast.error("Password kiriting !", errorStyle);
    return;
  }

  if (username !== CORRECT_USERNAME && password !== CORRECT_PASSWORD) {
    toast.error("Username va Password noto'g'ri !", errorStyle);
    return;
  }

  if (username !== CORRECT_USERNAME) {
    toast.error("Username noto'g'ri !", errorStyle);
    return;
  }

  if (password !== CORRECT_PASSWORD) {
    toast.error("Password noto'g'ri !", errorStyle);
    return;
  }

  const fakeToken = `interviewqa_${Date.now()}_${username}`;
  saveToken(fakeToken);
  toast.success("Login muvaffaqiyatli kiritildi !", successStyle);
  router.replace("/");
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white"> Interview<span className="text-slate-500">QA </span> </h1>
          <p className="mt-3 text-slate-400 font-bold"> Prepare for your technical interview </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20">
          <div className="space-y-5">
            <div>
              <label htmlFor="username" className="mb-2 block text-xl font-bold text-slate-300"> Username </label>
              <input id="username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username"
                className="w-full font-bold rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-slate-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-xl font-bold text-slate-300"> Password </label>
              <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password"
                className="w-full font-bold rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600"
              />
            </div>

            <button type="submit" className="w-full rounded-xl text-[18px] bg-white px-4 py-3 font-bold text-slate-950 transition hover:bg-slate-950 hover:text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}