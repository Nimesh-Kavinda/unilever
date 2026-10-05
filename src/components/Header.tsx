import { SearchBar } from '@/components/SearchBar';

interface HeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onClearSearch: () => void;
}

export function Header({ searchValue, onSearchChange, onClearSearch }: HeaderProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm sm:px-6 lg:px-8 lg:py-7">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Internal sales lookup
          </p>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Unilever Product Finder
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Quickly find product names, system names and MRPs.
            </p>
          </div>
        </div>

        <div className="w-full lg:max-w-xl">
          <SearchBar value={searchValue} onChange={onSearchChange} onClear={onClearSearch} />
        </div>
      </div>
    </section>
  );
}