type FeatureCopy = {
  title: string;
  description: string;
  tone?: 'default' | 'warning' | 'danger';
};

export const onboardingSteps: FeatureCopy[] = [
  {
    title: '1. Social login',
    description: 'Google, Apple, Kakao, and Naver are supported out of the box.',
  },
  {
    title: '1-1. Allergy profile',
    description: 'Collect allergy, dietary, and language preferences after login.',
  },
  {
    title: '2. Instant camera access',
    description:
      'Returning users skip onboarding and land straight in the camera experience with history + profile shortcuts.',
  },
];

export const scanFlow: FeatureCopy[] = [
  {
    title: '3. OCR + translate',
    description:
      'Capture the ingredient label, run OCR, and translate the text to the user’s preferred language.',
  },
  {
    title: '3-1. Allergy highlighting',
    description:
      'Exact or fuzzy matches against the allergy list render in bold red to avoid risky ingredients.',
    tone: 'danger' as const,
  },
  {
    title: '3-2. Auto history',
    description: 'Every scan persists to the history list with title, ingredients, and risk notes.',
  },
];

export const savedFoods: FeatureCopy[] = [
  {
    title: '4-1. Detail view',
    description: 'Tap a saved product to review original text + dangerous ingredient highlights.',
    tone: 'warning' as const,
  },
  {
    title: '4-2. Manage history',
    description: 'Users can delete stored scans individually or clear all data.',
  },
];

export const userProfileFeatures: FeatureCopy[] = [
  {
    title: '5-1. User info',
    description: 'Edit health data, languages, and sign out from the settings sheet.',
  },
];
