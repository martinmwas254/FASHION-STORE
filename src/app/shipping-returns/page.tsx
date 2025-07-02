import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ShippingAndReturnsPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-headline mb-4">Shipping & Returns</h1>
        <p className="text-lg text-muted-foreground">Everything you need to know about our policies.</p>
      </div>

      <Accordion type="multiple" defaultValue={['shipping', 'returns']} className="w-full">
        <AccordionItem value="shipping">
          <AccordionTrigger className="text-xl font-body">Shipping Information</AccordionTrigger>
          <AccordionContent className="prose prose-sm max-w-none prose-headings:font-headline text-muted-foreground">
            <p>We are pleased to offer complimentary standard shipping on all orders.</p>
            <h4>Processing Time</h4>
            <p>Orders are processed within 1-2 business days. You will receive a confirmation email once your order has been shipped.</p>
            <h4>Shipping Options</h4>
            <ul>
              <li><strong>Standard Shipping:</strong> 5-7 business days. (Free)</li>
              <li><strong>Expedited Shipping:</strong> 2-3 business days. ($15)</li>
              <li><strong>Overnight Shipping:</strong> 1 business day. ($30)</li>
            </ul>
            <h4>International Shipping</h4>
            <p>We currently ship to select international destinations. Shipping rates and times vary by location and will be calculated at checkout.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger className="text-xl font-body">Return Policy</AccordionTrigger>
          <AccordionContent className="prose prose-sm max-w-none prose-headings:font-headline text-muted-foreground">
            <p>We want you to be completely satisfied with your purchase. If for any reason you are not, we accept returns within 30 days of the delivery date.</p>
            <h4>Conditions for Return</h4>
            <ul>
                <li>Items must be in their original condition: unworn, unwashed, and with all tags attached.</li>
                <li>Final sale items are not eligible for return.</li>
                <li>Original shipping charges are non-refundable.</li>
            </ul>
            <h4>How to Make a Return</h4>
            <p>To initiate a return, please visit our online returns portal with your order number and email address. A prepaid shipping label will be provided for all domestic returns.</p>
            <h4>Refunds</h4>
            <p>Once we receive and inspect your return, a refund will be processed to your original form of payment within 5-7 business days.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
