'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card className={cn('overflow-hidden rounded-lg group border-none shadow-none', className)}>
      <CardContent className="p-0">
        <div className="relative">
          <Link href={`/products/${product.id}`} className="block">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={600}
              height={800}
              className="object-cover w-full h-auto aspect-[3/4] transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={product['data-ai-hint']}
            />
          </Link>
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full w-9 h-9 bg-background/80 hover:bg-background"
              aria-label="Add to wishlist"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full w-9 h-9 bg-background/80 hover:bg-background"
              aria-label="Add to cart"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start p-4">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-body text-base font-medium text-foreground">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground text-sm mt-1">${product.price.toFixed(2)}</p>
      </CardFooter>
    </Card>
  );
}
