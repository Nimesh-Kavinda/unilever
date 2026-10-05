import { useMemo, useState } from 'react';

import { CategoryFilter } from '@/components/CategoryFilter';
import { EmptyState } from '@/components/EmptyState';
import { Header } from '@/components/Header';
import { ProductDetailsDialog } from '@/components/ProductDetailsDialog';
import { ProductGrid } from '@/components/ProductGrid';
import { Separator } from '@/components/ui/separator';
import { products as productList } from '@/data/products';
import type { Product } from '@/types/product';

const ALL_CATEGORIES = 'all';

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = useMemo(
    () =>
      Array.from(new Set(productList.map((product) => product.category).filter(Boolean))) as string[],
    []
  );

  const filteredProducts = useMemo(() => {
    const searchTerm = normalize(searchValue);

    return productList.filter((product) => {
      const categoryMatches =
        activeCategory === ALL_CATEGORIES || product.category === activeCategory;

      if (!categoryMatches) {
        return false;
      }

      if (!searchTerm) {
        return true;
      }

      const searchableFields = [
        product.name,
        product.systemName,
        product.category ?? '',
        product.size ?? '',
        String(product.mrp),
      ]
        .join(' ')
        .toLowerCase();

      return searchableFields.includes(searchTerm);
    });
  }, [activeCategory, searchValue]);

  const hasFilters = searchValue.trim().length > 0 || activeCategory !== ALL_CATEGORIES;

  function resetFilters() {
    setSearchValue('');
    setActiveCategory(ALL_CATEGORIES);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-60 bg-gradient-to-b from-blue-50 to-transparent" />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
        <Header
          searchValue={searchValue}
          onClearSearch={resetFilters}
          onSearchChange={setSearchValue}
        />

        <section className="rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-sm sm:px-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              <div className="flex items-center justify-between gap-3 lg:justify-end">
                <div className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-950">{filteredProducts.length}</span>{' '}
                  products found
                </div>

                {hasFilters ? (
                  <button
                    type="button"
                    className="text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
                    onClick={resetFilters}
                  >
                    Reset filters
                  </button>
                ) : null}
              </div>
            </div>

            <Separator />

            {filteredProducts.length > 0 ? (
              <ProductGrid
                products={filteredProducts}
                onSelectProduct={(product) => setSelectedProduct(product)}
              />
            ) : (
              <EmptyState onReset={resetFilters} />
            )}
          </div>
        </section>
      </main>

      <ProductDetailsDialog
        open={Boolean(selectedProduct)}
        product={selectedProduct}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProduct(null);
          }
        }}
      />
    </div>
  );
}

export default App;