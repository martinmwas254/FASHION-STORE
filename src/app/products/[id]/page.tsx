import { products } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
           <div className="grid grid-cols-1 gap-4">
            {product.images.map((src, index) => (
              <div key={index} className="bg-muted rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`${product.name} view ${index + 1}`}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                  data-ai-hint={product['data-ai-hint']}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="sticky top-24 self-start">
          <h1 className="text-4xl font-headline mb-2">{product.name}</h1>
          <p className="text-2xl font-body mb-6">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground mb-6 font-body">{product.description}</p>
          
          <div className="flex flex-col gap-4 mb-8">
            <Button size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
            </Button>
          </div>

          <Accordion type="single" collapsible defaultValue="details" className="w-full">
            <AccordionItem value="details">
              <AccordionTrigger>Details</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {product.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care">
              <AccordionTrigger>Material & Care</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {product.care.map((care, i) => <li key={i}>{care}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
