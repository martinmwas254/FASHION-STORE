import { StyleAdvisorForm } from '@/components/StyleAdvisorForm';

export default function StyleAdvisorPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-headline mb-4">AI Style Advisor</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Unsure what to wear? Get personalized recommendations from our AI-powered stylist. Just answer a few questions to discover pieces perfect for you.
        </p>
      </div>
      <StyleAdvisorForm />
    </div>
  );
}
