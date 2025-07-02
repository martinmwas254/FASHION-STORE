'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { products } from '@/lib/data';

const allCategories = [...new Set(products.map((p) => p.category))];
const allSizes = [...new Set(products.flatMap((p) => p.sizes))];
const allColors = [...new Set(products.flatMap((p) => p.colors.map(c => c.name)))];

export function FilterSidebar() {
  return (
    <aside className="w-full lg:w-64 xl:w-72">
      <h2 className="text-xl font-headline mb-4">Filters</h2>
      <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {allCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`cat-${category}`} />
                  <Label htmlFor={`cat-${category}`} className="font-normal">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2">
              {allSizes.map((size) => (
                <div key={size} className="flex items-center justify-center">
                  <Label
                    htmlFor={`size-${size}`}
                    className="border rounded-md px-3 py-1.5 text-sm cursor-pointer has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:checked]:border-primary"
                  >
                    <Checkbox id={`size-${size}`} className="sr-only" />
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="color">
          <AccordionTrigger>Color</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-5 gap-2">
              {products.flatMap(p => p.colors).filter((c, i, a) => a.findIndex(t => t.hex === c.hex) === i).map((color) => (
                <div key={color.hex} className="flex items-center justify-center">
                   <Label htmlFor={`color-${color.name}`} className="border rounded-full p-0.5 cursor-pointer has-[:checked]:border-primary">
                    <Checkbox id={`color-${color.name}`} className="sr-only" />
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color.hex }} title={color.name}></div>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="p-1">
              <Slider defaultValue={[150]} max={500} step={10} />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>$0</span>
                <span>$500</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}
