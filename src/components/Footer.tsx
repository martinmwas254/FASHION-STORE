import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-background/80 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-headline text-xl mb-4">ThreadCanvas</h3>
            <p className="text-sm text-muted-foreground">Sophistication and understated luxury for the modern wardrobe.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#shop" className="text-muted-foreground hover:text-foreground">New Arrivals</Link></li>
              <li><Link href="/#shop" className="text-muted-foreground hover:text-foreground">Tops</Link></li>
              <li><Link href="/#shop" className="text-muted-foreground hover:text-foreground">Bottoms</Link></li>
              <li><Link href="/#shop" className="text-muted-foreground hover:text-foreground">Dresses</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shipping-returns" className="text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">Join our mailing list for updates and offers.</p>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="bg-background" />
              <Button type="submit" variant="outline">Subscribe</Button>
            </form>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" /></Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ThreadCanvas. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
