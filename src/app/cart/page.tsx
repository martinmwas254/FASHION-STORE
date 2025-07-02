import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-headline mb-8 text-center">Shopping Cart</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Your Cart is Empty</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild>
            <Link href="/#shop">Start Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
