# Feature Flags Documentation

This project uses a feature flags system to easily enable/disable features without code changes. All feature flags are managed in `lib/features.ts`.

## Available Features

### Core Features
- **`MULTI_STEP_FORM`** - Multi-step contact form at `/quote` (currently **disabled**)
- **`ANALYTICS`** - Plausible analytics tracking (currently **enabled**)
- **`PWA`** - Progressive Web App functionality (currently **enabled**)

### Content Features
- **`GALLERY_FILTERS`** - Category filters on gallery page (currently **enabled**)
- **`FAQ_SEARCH`** - Search functionality in FAQ section (currently **enabled**)
- **`SERVICE_DETAIL_PAGES`** - Individual service detail pages (currently **enabled**)
- **`ADD_ONS`** - Add-ons selection section (currently **enabled**)

### UI Features
- **`FLOATING_CTA`** - Floating WhatsApp/Instagram buttons (currently **enabled**)
- **`BACK_TO_TOP`** - Back to top button (currently **enabled**)

## How to Use

### Enable/Disable Features

1. Open `lib/features.ts`
2. Change the boolean values to `true` or `false`
3. Save the file
4. Rebuild and deploy

Example:
```typescript
export const FEATURES = {
  MULTI_STEP_FORM: true,  // Enable multi-step form
  ANALYTICS: false,       // Disable analytics
  PWA: true,             // Keep PWA enabled
  // ... other features
};
```

### Check Feature Status in Code

```typescript
import { isFeatureEnabled } from '@/lib/features';

// Check if a feature is enabled
if (isFeatureEnabled('MULTI_STEP_FORM')) {
  // Show multi-step form
}

// Conditional rendering
{isFeatureEnabled('FLOATING_CTA') && <FloatingCta />}
```

### Get All Enabled Features

```typescript
import { getEnabledFeatures } from '@/lib/features';

const enabledFeatures = getEnabledFeatures();
// Returns: ['ANALYTICS', 'PWA', 'GALLERY_FILTERS', ...]
```

## Current Status

| Feature | Status | Description |
|---------|--------|-------------|
| `MULTI_STEP_FORM` | ❌ Disabled | Multi-step quote form |
| `ANALYTICS` | ✅ Enabled | Plausible tracking |
| `PWA` | ✅ Enabled | Progressive Web App |
| `GALLERY_FILTERS` | ✅ Enabled | Gallery category filters |
| `FAQ_SEARCH` | ✅ Enabled | FAQ search functionality |
| `SERVICE_DETAIL_PAGES` | ✅ Enabled | Individual service pages |
| `ADD_ONS` | ✅ Enabled | Add-ons selection |
| `FLOATING_CTA` | ✅ Enabled | Floating CTA buttons |
| `BACK_TO_TOP` | ✅ Enabled | Back to top button |

## What Happens When Features Are Disabled

- **`MULTI_STEP_FORM`**: `/quote` page becomes inaccessible, navigation links are hidden
- **`ANALYTICS`**: No tracking scripts loaded, no event tracking
- **`PWA`**: No PWA meta tags, no manifest loading
- **`GALLERY_FILTERS`**: Gallery shows all images without category filters
- **`FAQ_SEARCH`**: FAQ section shows without search functionality
- **`SERVICE_DETAIL_PAGES`**: Service cards link to contact form instead of detail pages
- **`ADD_ONS`**: Add-ons section is hidden from services page
- **`FLOATING_CTA`**: Floating buttons are hidden
- **`BACK_TO_TOP`**: Back to top button is hidden

## Benefits

1. **Easy Testing**: Enable/disable features for A/B testing
2. **Gradual Rollouts**: Roll out features to specific users
3. **Emergency Disable**: Quickly disable problematic features
4. **Performance Control**: Disable heavy features when needed
5. **Maintenance**: Disable features during maintenance

## Best Practices

1. **Always check feature flags** before rendering components
2. **Update documentation** when adding new features
3. **Test both enabled/disabled states** during development
4. **Use descriptive feature names** that clearly indicate purpose
5. **Keep feature flags simple** - avoid complex conditional logic
