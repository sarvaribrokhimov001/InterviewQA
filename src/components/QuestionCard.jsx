export default function QuestionCard({ question }) {
  return (
    <article className="flex min-h-[220px] flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/10 transition hover:border-slate-700 hover:bg-slate-800/80 max-[500px]:min-h-[180px] max-[500px]:p-4">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-sm font-bold text-white max-[500px]:h-8 max-[500px]:w-8"> {question.id} </span>
        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400 font-bold max-[500px]:px-2 max-[500px]:text-[10px]"> {question.category} </span>
      </div>

      <h2 className="text-lg font-bold leading-7 text-white max-[500px]:text-base max-[500px]:leading-6"> {question.question} </h2>
    </article>
  );
}