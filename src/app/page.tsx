'use client';

import { useState } from 'react';
import { products } from '@/lib/data';
import type { Product, FilterState } from '@/lib/types';
import { ProductCard } from '@/components/ProductCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [allProducts] = useState<Product[]>(products);

  return (
    <>
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center" style={{backgroundImage: "url('https://placehold.co/1600x900.png')"}} data-ai-hint="fashion model">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto relative z-10 text-center text-white">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-4">Style That Tells Your Story</h1>
          <p className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-8">Discover curated collections where every piece is a work of art.</p>
          <Button size="lg" asChild>
            <a href="#shop">Explore Collections</a>
          </Button>
        </div>
      </section>

      <div id="shop" className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <FilterSidebar />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-headline">All Products</h2>
              <p className="text-sm text-muted-foreground">{allProducts.length} items</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
