import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex w-full items-center gap-2 overflow-x-auto pb-1 pr-1">
      <Button
        className="shrink-0 rounded-full"
        size="sm"
        variant={activeCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('all')}
      >
        All
      </Button>

      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <Button
            key={category}
            className="shrink-0 rounded-full"
            size="sm"
            variant={isActive ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
}