export default function AnswerCard({ question }) {
  return (
    <article className="flex min-h-[220px] flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/10 transition hover:border-slate-700 hover:bg-slate-800/80">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold text-white"> {question.id} </span>
        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400 font-bold"> {question.category} </span>
      </div>

      <p className="text-base leading-7 text-slate-200 font-bold"> {question.answer} </p>
    </article>
  );
}