import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function SearchBar({ value, onChange, onClear }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Input
        aria-label="Search products"
        className="pr-24 pl-10"
        placeholder="Search by product name, system name, MRP, category or size"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        <SearchIcon />
      </span>
      {value ? (
        <Button
          aria-label="Clear search"
          className="absolute right-1.5 top-1/2 h-8 -translate-y-1/2 px-3"
          size="sm"
          variant="ghost"
          onClick={onClear}
        >
          Clear
        </Button>
      ) : null}
    </div>
  );
}