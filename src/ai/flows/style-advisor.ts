// 'use server';

/**
 * @fileOverview Provides personalized clothing recommendations based on user preferences and browsing history.
 *
 * - getPersonalizedRecommendations - A function that returns personalized clothing recommendations.
 * - StyleAdvisorInput - The input type for the getPersonalizedRecommendations function.
 * - StyleAdvisorOutput - The return type for the getPersonalizedRecommendations function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleAdvisorInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('A description of the users style preferences.'),
  browsingHistory: z
    .string()
    .describe('A summary of the users browsing history on the site.'),
  trendingStyles: z
    .string()
    .optional()
    .describe('Optional: Current trending styles or specific items.'),
});

export type StyleAdvisorInput = z.infer<typeof StyleAdvisorInputSchema>;

const StyleAdvisorOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A list of clothing items with descriptions, tailored to the user, based on their preferences, browsing history, and current trends.'
    ),
});

export type StyleAdvisorOutput = z.infer<typeof StyleAdvisorOutputSchema>;

export async function getPersonalizedRecommendations(
  input: StyleAdvisorInput
): Promise<StyleAdvisorOutput> {
  return styleAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleAdvisorPrompt',
  input: {schema: StyleAdvisorInputSchema},
  output: {schema: StyleAdvisorOutputSchema},
  prompt: `You are a personal style advisor for an online fashion store.

  Based on the user's stated preferences, their browsing history, and current trending styles, recommend clothing items that they might like.

  User Preferences: {{{userPreferences}}}
  Browsing History: {{{browsingHistory}}}
  Trending Styles: {{{trendingStyles}}}

  Please provide specific item recommendations with brief descriptions explaining why each item matches their style.
  Format should be in markdown.
  `,
});

const styleAdvisorFlow = ai.defineFlow(
  {
    name: 'styleAdvisorFlow',
    inputSchema: StyleAdvisorInputSchema,
    outputSchema: StyleAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
