// Feature flags configuration
// Set these to true/false to enable/disable features
export const FEATURES = {
  // Multi-step contact form
  MULTI_STEP_FORM: false,
  
  // Plausible analytics
  ANALYTICS: true,
  
  // PWA functionality
  PWA: true,
  
  // Gallery filters
  GALLERY_FILTERS: false,
  
  // FAQ search
  FAQ_SEARCH: true,
  
  // Service detail pages
  SERVICE_DETAIL_PAGES: true,
  
  // Floating CTA buttons
  FLOATING_CTA: true,
  
  // Back to top button
  BACK_TO_TOP: true,
  
  // Add-ons selection
  ADD_ONS: false,
} as const;

// Type for feature names
export type FeatureName = keyof typeof FEATURES;

// Helper function to check if a feature is enabled
export function isFeatureEnabled(feature: FeatureName): boolean {
  return FEATURES[feature];
}

// Helper function to get all enabled features
export function getEnabledFeatures(): FeatureName[] {
  return Object.entries(FEATURES)
    .filter(([, enabled]) => enabled)
    .map(([feature]) => feature as FeatureName);
}
