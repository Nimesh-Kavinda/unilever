import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
     name: 'Sunlight Yellow',
    systemName: 'SUNLIGHT YELLOW 110GXX',
    mrp: 160,
    image: '/products/sunlight_yellow.webp',
    category: 'Personal Care',
    size: '110 g',
  },
  {
    id: 2,
    name: 'Viva Malted Food Drink Carton',
    systemName: 'VIVA OC 300GX 24',
    mrp: 590,
    image: '/products/viva_oc_300.webp',
    category: 'Home Care',
    size: '300 g',
  },
  {
    id: 3,
    name: 'Surf Excel With Comfort Laundry Detergent Powder 1kg',
    systemName: 'SURF W/COMFORTX1KGX15',
    mrp: 595,
    image: '/products/Surf_w_comfort1kg.webp',
    category: 'Home Care',
    size: '1 Kg',
  },
  {
    id: 4,
    name: 'Pears Naturals Rathmal Baby Soap 70g',
    systemName: 'PEARSNTRLRATHMALX70GX162',
    mrp: 165,
    image: '/products/pearsntrathmalx70g.webp',
    category: 'Personal Care',
    size: '70 g',
  },
  {
    id: 5,
    name: 'Sample Product 5',
    systemName: 'SAMPLE-SYSTEM-005',
    mrp: 275,
    image: '/products/sample-product-05.svg',
    category: 'Personal Care',
    size: '250 ml',
  },
];