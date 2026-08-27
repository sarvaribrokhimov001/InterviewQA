export default function QuestionCard({ question }) {
  return (
    <article className="flex min-h-[220px] flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/10 transition hover:border-slate-700 hover:bg-slate-800/80">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold text-white"> {question.id} </span>
        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400"> {question.category} </span>
      </div>

      <h2 className="text-lg font-semibold leading-7 text-white"> {question.question} </h2>
    </article>
  );
}