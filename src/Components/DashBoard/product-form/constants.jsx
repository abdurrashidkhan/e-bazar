export const DEFAULT_MAIN_IMAGE =
  'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80';

export const DEFAULT_SPECIFICATIONS = [
  { key: 'Material', value: 'Anodized Aluminum' },
  { key: 'Warranty', value: '2 Years' },
];

export const EMPTY_BULLET = { value: '' };
export const EMPTY_SPEC = { key: '', value: '' };
export const EMPTY_VARIANT_DRAFT = {
  sku: '',
  color: '',
  size: '',
  material: '',
  price: '99.00',
  stock: '10',
};

export const SECTIONS = [
  { id: 1, label: '1. Basic Info' },
  { id: 2, label: '2. Identification' },
  { id: 3, label: '3. Taxonomy' },
  { id: 4, label: '4. Pricing & Inventory' },
  { id: 5, label: '5. Media & Specs' },
  { id: 6, label: '6. Shipping' },
  { id: 7, label: '7. Variants Sub-Schema' },
];

export const INVENTORY_STATUS_OPTIONS = [
  'In Stock',
  'Out of Stock',
  'Discontinued',
];

export const INPUT_CLS =
  'w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600';

export const MONO_INPUT_CLS = `${INPUT_CLS} font-mono`;

export const SMALL_MONO_INPUT_CLS =
  'px-2.5 py-1.5 font-mono text-xs bg-neutral-900 border border-neutral-800 rounded text-white';
