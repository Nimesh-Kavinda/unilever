import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import type { Product } from '@/types/product';

interface ProductDetailsDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  const imageElement = event.currentTarget;
  imageElement.onerror = null;
  imageElement.src = '/products/placeholder.svg';
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="max-w-[60%] text-right text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

export function ProductDetailsDialog({ product, open, onOpenChange }: ProductDetailsDialogProps) {
  if (!product) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>
            Quick product reference for field sales representatives.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="aspect-[4/3] bg-white">
              <img
                alt={product.name}
                className="h-full w-full object-cover"
                src={product.image}
                onError={handleImageError}
              />
            </div>
            <div className="border-t border-slate-200 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                System name
              </p>
              <p className="mt-1 break-words text-base font-semibold text-blue-700">
                {product.systemName}
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap gap-2">
              {product.category ? <Badge variant="secondary">{product.category}</Badge> : null}
              {product.size ? <Badge variant="outline">{product.size}</Badge> : null}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                MRP
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-950">
                Rs. {product.mrp.toFixed(2)}
              </p>
            </div>

            <Separator />

            <div className="rounded-2xl bg-slate-50 px-4 py-1.5">
              <DetailRow label="Product name" value={product.name} />
              <Separator />
              <DetailRow label="System name" value={product.systemName} />
              <Separator />
              <DetailRow label="MRP" value={`Rs. ${product.mrp.toFixed(2)}`} />
              {product.category ? (
                <>
                  <Separator />
                  <DetailRow label="Category" value={product.category} />
                </>
              ) : null}
              {product.size ? (
                <>
                  <Separator />
                  <DetailRow label="Size / Variant" value={product.size} />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}