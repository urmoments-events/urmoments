// Image optimization utilities
export const IMAGE_SIZES = {
  // Hero banner sizes
  hero: {
    desktop: "1920x800",
    mobile: "750x1000",
    sizes: "(max-width: 768px) 100vw, 100vw"
  },
  
  // Service card sizes
  serviceCard: {
    desktop: "800x600",
    mobile: "600x450",
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  },
  
  // Gallery sizes
  gallery: {
    desktop: "800x800",
    mobile: "600x600",
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  },
  
  // Testimonial sizes
  testimonial: {
    desktop: "400x400",
    mobile: "300x300",
    sizes: "(max-width: 768px) 80px, 100px"
  }
} as const;

// Get responsive image props
export function getResponsiveImageProps(
  src: string,
  type: keyof typeof IMAGE_SIZES,
  alt: string,
  className?: string
) {
  const config = IMAGE_SIZES[type];
  
  return {
    src: toPublicSrc(src),
    alt,
    fill: true,
    unoptimized: true, // Since we're using static export
    sizes: config.sizes,
    className: className || "object-cover",
    priority: type === 'hero' // Prioritize hero images
  };
}

// Get image dimensions for specific type
export function getImageDimensions(type: keyof typeof IMAGE_SIZES) {
  return IMAGE_SIZES[type];
}

// Original toPublicSrc function
export function toPublicSrc(src: string): string {
  if (src.startsWith("http")) return src;
  if (src.startsWith("/")) return src;
  return `/assets/${src}`;
}


