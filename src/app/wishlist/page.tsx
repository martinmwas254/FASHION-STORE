import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function WishlistPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-headline mb-8 text-center">Your Wishlist</h1>
       <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Your Wishlist is Empty</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">Save your favorite items here to shop for them later.</p>
          <Button asChild>
            <Link href="/#shop">Explore Products</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
