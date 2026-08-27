"use client";

export default function SearchInput({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="relative w-full">
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-slate-400"
      />
    </div>
  );
}