"use client";

import { useCallback, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { interviewQuestions } from "@/data/interviewData";

const QUIZ_SIZE = 20;
const QUESTION_TIME = 30;

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function createQuiz() {
  return shuffle(interviewQuestions).slice(0, QUIZ_SIZE);
}

export default function QuizMode() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentOptions, setCurrentOptions] = useState([]);

  const startQuiz = useCallback(() => {
    const newQuiz = createQuiz();

    setQuizQuestions(newQuiz);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setTimeLeft(QUESTION_TIME);
    setResults([]);
    setFinished(false);
    setIsAnswered(false);

    if (newQuiz.length > 0) {
      setCurrentOptions(shuffle(newQuiz[0].options));
    }
  }, []);

  useEffect(() => {
    startQuiz();
  }, [startQuiz]);

  const currentQuestion = quizQuestions[currentIndex];
  const finishQuestion = useCallback((answer) => {
    if (!currentQuestion || isAnswered) {
      return;
    }

      const correctAnswer = currentQuestion.options[0];
      const isCorrect = answer === correctAnswer;

      const result = {
        questionId: currentQuestion.id,
        selectedAnswer: answer ?? "Time expired",
        correctAnswer,
        isCorrect,
      };

      setResults((previous) => [...previous, result]);
      setSelectedAnswer(answer);
      setIsAnswered(true);

      setTimeout(() => {
        if (currentIndex + 1 >= quizQuestions.length) {
          setFinished(true);
          return;
        }

        const nextIndex = currentIndex + 1;
        const nextQuestion = quizQuestions[nextIndex];

        setCurrentIndex(nextIndex);
        setSelectedAnswer(null);
        setTimeLeft(QUESTION_TIME);
        setIsAnswered(false);
        setCurrentOptions(shuffle(nextQuestion.options));
      }, 900);
    },
    [currentQuestion, currentIndex, isAnswered, quizQuestions]
  );

  useEffect(() => {
    if (!currentQuestion || finished || isAnswered) {
      return;
    }

    if (timeLeft <= 0) {
      finishQuestion(null);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, currentQuestion, finished, isAnswered, finishQuestion]
  );

  function handleAnswer(answer) {
    if (isAnswered) {
      return;
    }
    finishQuestion(answer);
  }

  if (!currentQuestion && !finished) {
    return (
      <ProtectedRoute>
        <Navbar />

        <main className="flex min-h-[calc(100vh-73px)] items-center justify-center">
          <p className="text-slate-400 font-bold"> Quiz loading.... </p>
        </main>
      </ProtectedRoute>
    );
  }

  if (finished) {
    const correctCount = results.filter((result) => result.isCorrect).length;
    const wrongCount = results.length - correctCount;

    return (
      <ProtectedRoute>
        <Navbar />

        <main className="mx-auto max-w-5xl px-4 py-10 max-[500px]:px-3 max-[500px]:py-6"> 
          <div className="mb-10 text-center">
            <p className="text-sm font-bold text-slate-500"> Quiz completed </p>
            <h1 className="mt-2 text-4xl font-bold max-[500px]:text-3xl"> Your Result </h1>
            <p className="mt-3 text-slate-400 font-bold"> 20 ta savol yakunlandi. </p>
          </div>

          <div className="mb-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center max-[500px]:p-4">
              <p className="text-sm text-slate-500 font-bold"> Total </p>
              <p className="mt-2 text-4xl font-bold max-[500px]:text-3xl"> {QUIZ_SIZE} </p>
            </div>

            <div className="rounded-2xl border border-emerald-900 bg-emerald-950/30 p-6 text-center max-[500px]:p-4">
              <p className="text-sm text-emerald-400 font-bold"> Correct </p>
              <p className="mt-2 text-4xl font-bold max-[500px]:text-3xl text-emerald-400"> {correctCount} </p>
            </div>

            <div className="rounded-2xl border border-red-900 bg-red-950/30 p-6 text-center max-[500px]:p-4">
              <p className="text-sm text-red-400 font-bold"> Wrong </p>
              <p className="mt-2 text-4xl font-bold max-[500px]:text-3xl text-red-400"> {wrongCount} </p>
            </div>
          </div>

          <div className="space-y-4">
            {results.map((result, index) => {
              const question = interviewQuestions.find((item) => item.id === result.questionId);

              return (
                <div key={`${result.questionId}-${index}`} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 max-[500px]:rounded-xl max-[500px]:p-4">
                  <div className="flex items-start justify-between gap-4 max-[500px]:flex-col max-[500px]:gap-3">
                    <div>
                      <p className="text-sm text-slate-500 font-bold"> Question {index + 1} · ID {result.questionId} </p>
                      <h2 className="mt-2 font-bold text-white"> {question?.question} </h2>
                    </div>

                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                      result.isCorrect ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400" }`}>
                        {result.isCorrect ? "Correct" : "Wrong"} 
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl bg-slate-950 p-4 max-[500px]:p-3">
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-bold"> Your answer </p>
                      <p className="mt-2 text-sm text-slate-300 font-bold"> {result.selectedAnswer} </p>
                    </div>

                    <div className="rounded-xl bg-slate-950 p-4 max-[500px]:p-3">
                      <p className="text-xs uppercase tracking-wide text-slate-500 font-bold"> Correct answer </p>
                      <p className="mt-2 text-sm text-emerald-400 font-bold"> {result.correctAnswer} </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <button onClick={startQuiz} className="rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-slate-200">
              Restart Quiz
            </button>
          </div>
        </main>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-10 max-[500px]:px-3 max-[500px]:py-6">
        <div className="mb-8 flex items-center justify-between max-[500px]:mb-5">
          <div>
            <p className="text-sm text-slate-500 font-bold"> Quiz Mode </p>
            <h1 className="mt-1 text-2xl font-bold max-[500px]:text-lg"> Question {currentIndex + 1} / {QUIZ_SIZE} </h1>
          </div>

          <div className={`flex h-16 w-16 items-center justify-center rounded-full border-4 max-[500px]:h-12 max-[500px]:w-12 max-[500px]:border-2 ${
            timeLeft <= 10 ? "border-red-500 text-red-400" : "border-slate-700 text-white" }`}>
              <span className="text-xl font-bold max-[500px]:text-base"> {timeLeft} </span>
          </div>
        </div>

        <div className="mb-8 h-2 overflow-hidden rounded-full bg-slate-800 max-[500px]:mb-5 max-[500px]:h-1.5">
          <div className="h-full bg-white transition-all duration-300" style={{
            width: `${
              ((currentIndex + 1) / QUIZ_SIZE) * 100
            }%`,
          }} />
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8 max-[500px]:rounded-xl max-[500px]:p-4">
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-slate-400 font-bold max-[500px]:px-2 max-[500px]:py-1 max-[500px]:text-[10px]"> ID #{currentQuestion.id} </span>
              <span className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-slate-400 font-bold max-[500px]:px-2 max-[500px]:py-1 max-[500px]:text-[10px]"> {currentQuestion.category} </span>
            </div>

            <h2 className="text-2xl font-bold leading-9 text-white max-[500px]:text-lg max-[500px]:leading-7"> {currentQuestion.question} </h2>
          </div>

          <div className="grid gap-4">
            {currentOptions.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.options[0];
              let style = "border-slate-700 bg-slate-950 hover:border-slate-500 hover:bg-slate-800";

              if (isAnswered && isCorrect) {
                style = "border-emerald-500 bg-emerald-500/20 text-emerald-300";
              }

              if (isAnswered && isSelected && !isCorrect) {
                style = "border-red-500 bg-red-500/20 text-red-300";
              }

              return (
                <button key={option} disabled={isAnswered} onClick={() => handleAnswer(option)}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${style} max-[500px]:gap-3 max-[500px]:p-3`}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-sm font-bold text-slate-300 max-[500px]:h-8 max-[500px]:w-8"> {String.fromCharCode(65 + index)} </span>
                    <span className="text-[18px] leading-6 font-bold max-[500px]:text-sm max-[500px]:leading-5"> {option} </span>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}