'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getPersonalizedRecommendations } from '@/app/style-advisor/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  userPreferences: z.string().min(10, 'Please describe your style in a bit more detail.'),
  browsingHistory: z.string().min(1, 'Please select a category.'),
  trendingStyles: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function StyleAdvisorForm() {
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userPreferences: '',
      browsingHistory: '',
      trendingStyles: 'Effortless chic, minimalist, neutral palettes',
    },
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    setRecommendations('');
    try {
      const result = await getPersonalizedRecommendations(data);
      setRecommendations(result.recommendations);
    } catch (error) {
      console.error('Failed to get recommendations', error);
      setRecommendations('Sorry, I was unable to get recommendations at this time. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
            <CardTitle className="font-headline">Your Style Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="userPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe your personal style</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'I love classic, timeless pieces with a modern twist. I prefer neutral colors and high-quality fabrics. My go-to outfit is jeans and a nice blouse.'"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="browsingHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Which category are you most interested in today?</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Dresses for a wedding">Dresses for a wedding</SelectItem>
                        <SelectItem value="Casual weekend wear">Casual weekend wear</SelectItem>
                        <SelectItem value="Professional office attire">Professional office attire</SelectItem>
                        <SelectItem value="Vacation outfits">Vacation outfits</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Get My Recommendations
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="prose prose-sm max-w-none prose-headings:font-headline">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
                {isLoading && (
                    <div className="space-y-2">
                        <p>Finding the perfect look for you...</p>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary animate-pulse w-1/2"></div>
                        </div>
                    </div>
                )}
                {recommendations && (
                    <div dangerouslySetInnerHTML={{ __html: recommendations.replace(/\n/g, '<br />') }} />
                )}
                {!recommendations && !isLoading && (
                    <p className="text-muted-foreground">Your style advice will appear here.</p>
                )}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
