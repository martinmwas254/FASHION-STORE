'use server';

import { getPersonalizedRecommendations as getPersonalizedRecommendationsFlow } from '@/ai/flows/style-advisor';
import type { StyleAdvisorInput, StyleAdvisorOutput } from '@/ai/flows/style-advisor';

export async function getPersonalizedRecommendations(
  input: StyleAdvisorInput
): Promise<StyleAdvisorOutput> {
  // In a real app, you might add user authentication checks here.
  const result = await getPersonalizedRecommendationsFlow(input);
  return result;
}
