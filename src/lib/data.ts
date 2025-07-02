import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant High-Neck Blouse',
    price: 75.0,
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    'data-ai-hint': 'elegant blouse',
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Cream', hex: '#F4F2F1' },
      { name: 'Dusty Rose', hex: '#C2A9A2' },
    ],
    description:
      'A timeless piece for any wardrobe, this high-neck blouse is crafted from a fluid silk-blend fabric. It features delicate button details and a relaxed fit.',
    details: ['Relaxed fit', 'Buttoned cuffs', 'High-neckline'],
    care: ['Dry clean only', 'Cool iron on reverse'],
  },
  {
    id: '2',
    name: 'Tailored Wide-Leg Trousers',
    price: 120.0,
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    'data-ai-hint': 'wide-leg trousers',
    category: 'Bottoms',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Midnight Blue', hex: '#003366' },
      { name: 'Beige', hex: '#D2B48C' },
    ],
    description:
      'Cut for a flattering wide-leg silhouette, these tailored trousers offer both comfort and style. The high-waisted design elongates the legs, making them a versatile choice for day or night.',
    details: ['High-waisted', 'Zip fly with hook-and-bar closure', 'Side pockets'],
    care: ['Machine wash cold', 'Tumble dry low'],
  },
  {
    id: '3',
    name: 'Flowy A-Line Midi Dress',
    price: 150.0,
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    'data-ai-hint': 'midi dress',
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Dusty Lavender', hex: '#A2A7C2' },
      { name: 'Emerald Green', hex: '#50C878' },
    ],
    description:
      'An effortlessly chic A-line midi dress made from lightweight crepe. It features a V-neckline, cinched waist, and a gently flowing skirt.',
    details: ['V-neckline', 'Elasticated waist', 'Fully lined'],
    care: ['Hand wash', 'Lay flat to dry'],
  },
  {
    id: '4',
    name: 'Classic Trench Coat',
    price: 250.0,
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    'data-ai-hint': 'trench coat',
    category: 'Jackets',
    sizes: ['S', 'M', 'L'],
    colors: [{ name: 'Classic Tan', hex: '#D2B48C' }],
    description:
      'The definitive trench coat, updated with modern proportions. Made from water-resistant cotton gabardine, it’s the perfect transitional outerwear piece.',
    details: ['Double-breasted front', 'Waist belt', 'Storm flap'],
    care: ['Dry clean only'],
  },
  {
    id: '5',
    name: 'Minimalist Leather Tote',
    price: 180.0,
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    'data-ai-hint': 'leather tote',
    category: 'Accessories',
    sizes: [],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Cognac', hex: '#9A463D' },
    ],
    description:
      'A spacious and structured tote bag crafted from genuine Italian leather. Its minimalist design ensures it will complement any outfit.',
    details: ['Magnetic closure', 'Internal zip pocket', 'Unlined'],
    care: ['Wipe clean with a damp cloth', 'Use leather conditioner'],
  },
  {
    id: '6',
    name: 'Cashmere Crewneck Sweater',
    price: 195.0,
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    'data-ai-hint': 'cashmere sweater',
    category: 'Tops',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
        { name: 'Heather Grey', hex: '#B2BEB5' },
        { name: 'Dusty Lavender', hex: '#A2A7C2' }
    ],
    description: 'Luxuriously soft and endlessly versatile, our crewneck sweater is spun from the finest Mongolian cashmere for a lightweight yet cozy feel.',
    details: ['100% Mongolian Cashmere', 'Ribbed cuffs and hem', 'Classic fit'],
    care: ['Hand wash or dry clean', 'Lay flat to dry'],
  },
  {
    id: '7',
    name: 'Cropped Denim Jacket',
    price: 98.0,
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    'data-ai-hint': 'denim jacket',
    category: 'Jackets',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
        { name: 'Vintage Wash', hex: '#6F8FAF' }
    ],
    description: 'A modern take on a classic. This denim jacket features a cropped, boxy fit and a vintage-inspired wash for a lived-in look.',
    details: ['Slightly cropped hem', 'Button front closure', 'Chest pockets'],
    care: ['Machine wash cold inside out', 'Tumble dry low'],
  },
  {
    id: '8',
    name: 'Satin Slip Skirt',
    price: 85.0,
    images: ['https://placehold.co/600x800.png', 'https://placehold.co/600x800.png'],
    'data-ai-hint': 'satin skirt',
    category: 'Bottoms',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
        { name: 'Champagne', hex: '#F7E7CE' },
        { name: 'Black', hex: '#000000' }
    ],
    description: 'Effortlessly elegant, this slip skirt is cut on the bias from lustrous satin for a beautiful drape that skims the body.',
    details: ['Midi length', 'Elastic waistband', 'Unlined'],
    care: ['Hand wash cold', 'Hang to dry'],
  }
];
