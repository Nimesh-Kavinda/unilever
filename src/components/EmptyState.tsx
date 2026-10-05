import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-700">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M21 21l-4.3-4.3" />
          <circle cx="11" cy="11" r="7" />
        </svg>
      </div>

      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
        No products found
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
        Try searching with a different product or system name.
      </p>

      <div className="mt-6">
        <Button onClick={onReset}>Clear search and filters</Button>
      </div>
    </div>
  );
}