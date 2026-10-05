import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  const imageElement = event.currentTarget;
  imageElement.onerror = null;
  imageElement.src = '/products/placeholder.svg';
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <button
      type="button"
      className="group block h-full text-left outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      onClick={() => onSelect(product)}
    >
      <Card className="h-full overflow-hidden transition-shadow duration-200 group-hover:shadow-md">
        <div className="aspect-[4/3] border-b border-slate-200 bg-slate-50">
          <img
            alt={product.name}
            className="h-full w-full object-cover"
            loading="lazy"
            src={product.image}
            onError={handleImageError}
          />
        </div>

        <div className="space-y-4 p-4">
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Product name
            </p>
            <h3 className="min-h-12 text-base font-semibold leading-snug text-slate-950">
              {product.name}
            </h3>
          </div>

          <div className="rounded-xl bg-slate-50 px-3 py-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
              System name
            </p>
            <p className="mt-1 break-words text-sm font-semibold leading-5 text-slate-900">
              {product.systemName}
            </p>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                MRP
              </p>
              <p className="text-lg font-bold text-blue-700">Rs. {product.mrp.toFixed(2)}</p>
            </div>

            <div className="flex flex-wrap justify-end gap-2">
              {product.category ? <Badge variant="secondary">{product.category}</Badge> : null}
              {product.size ? <Badge variant="outline">{product.size}</Badge> : null}
            </div>
          </div>
        </div>
      </Card>
    </button>
  );
}