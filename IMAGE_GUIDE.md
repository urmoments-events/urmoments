# Image Guide for urmoments Website

This guide provides recommended image sizes and optimization strategies for responsive design across mobile and desktop devices.

## 📐 **Recommended Image Sizes**

### **1. Hero Banner (Home Page)**
- **Desktop**: `1920x800px` (16:6.67 ratio)
- **Mobile**: `750x1000px` (3:4 ratio)
- **Format**: JPG/WebP for photos, SVG for graphics
- **File size**: Keep under 500KB
- **Usage**: Main banner on homepage

### **2. Service Cards**
- **Aspect Ratio**: `4:3` (current setup)
- **Size**: `800x600px` or `1200x900px`
- **Format**: JPG/WebP
- **File size**: Under 200KB each
- **Usage**: Service grid on services page and homepage

### **3. Gallery Images**
- **Aspect Ratio**: `1:1` (square) or `4:3`
- **Size**: `800x800px` or `1000x750px`
- **Format**: JPG/WebP
- **File size**: Under 300KB each
- **Usage**: Gallery page and testimonials

### **4. Testimonial/Profile Images**
- **Aspect Ratio**: `1:1` (square)
- **Size**: `400x400px`
- **Format**: JPG/WebP
- **File size**: Under 100KB
- **Usage**: Customer testimonials

### **5. Service Detail Page Hero**
- **Desktop**: `1920x600px` (16:5 ratio)
- **Mobile**: `750x500px` (3:2 ratio)
- **Format**: JPG/WebP
- **File size**: Under 400KB
- **Usage**: Individual service page headers

## 🎨 **Design Guidelines**

### **Color Scheme**
- **Primary**: Rose/Pink tones (#e11d48, #f43f5e)
- **Background**: Light slate (#f8fafc, #f1f5f9)
- **Text**: Dark slate (#0f172a, #1e293b)

### **Image Style**
- **Bright and vibrant** - Event decorations should pop
- **High contrast** - Ensure text readability over images
- **Consistent lighting** - Natural, well-lit photos
- **Professional quality** - Sharp, clear images

### **Content Focus**
- **Birthday decorations** - Colorful balloons, banners, themes
- **Gender reveals** - Pink/blue themes, balloons, confetti
- **Surprise parties** - Dramatic reveals, decorations
- **Baby showers** - Soft, elegant decorations

## 📱 **Responsive Implementation**

### **Current Setup**
The website uses Next.js Image component with responsive sizing:

```typescript
// Example from ServicesGrid.tsx
<Image 
  {...getResponsiveImageProps(svc.image, 'serviceCard', svc.title, "rounded-lg object-cover")}
/>
```

### **Responsive Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Image Loading Strategy**
- **Hero images**: Priority loading (above the fold)
- **Service cards**: Lazy loading
- **Gallery images**: Lazy loading with blur placeholder

## 🛠️ **Technical Specifications**

### **File Formats**
- **JPG**: For photographs (85% quality)
- **WebP**: For better compression (if supported)
- **PNG**: For graphics with transparency
- **SVG**: For icons and simple graphics

### **Optimization Tools**
- **TinyPNG**: For compression
- **Squoosh**: Google's image optimization tool
- **ImageOptim**: For macOS users

### **Naming Convention**
```
{category}-{description}-{size}.{format}
Example: birthday-decorations-hero-1920x800.jpg
```

## 📁 **File Structure**

```
public/assets/
├── home/
│   ├── hero-banner-1920x800.jpg
│   ├── hero-banner-mobile-750x1000.jpg
│   └── gallery-preview-800x600.jpg
├── services/
│   ├── birthday-decorations-800x600.jpg
│   ├── gender-reveal-800x600.jpg
│   └── surprise-party-800x600.jpg
├── gallery/
│   ├── birthday-1-800x800.jpg
│   ├── gender-reveal-1-800x800.jpg
│   └── surprise-party-1-800x800.jpg
└── testimonials/
    ├── customer-1-400x400.jpg
    └── customer-2-400x400.jpg
```

## ⚡ **Performance Tips**

### **Loading Optimization**
1. **Use appropriate sizes** - Don't load 1920px images on mobile
2. **Compress images** - Aim for 60-80% compression
3. **Use WebP format** - 25-35% smaller than JPG
4. **Lazy load** - Only load images when needed
5. **Preload critical images** - Hero banners above the fold

### **SEO Best Practices**
1. **Descriptive alt text** - Include keywords naturally
2. **Optimized filenames** - Use descriptive names
3. **Structured data** - Include image schema markup
4. **Sitemap inclusion** - Add image sitemap

## 🔧 **Implementation Examples**

### **Hero Banner**
```typescript
<Image 
  {...getResponsiveImageProps(
    'home/hero-banner.jpg', 
    'hero', 
    'Professional event decorations in London',
    'object-cover'
  )}
/>
```

### **Service Card**
```typescript
<Image 
  {...getResponsiveImageProps(
    'services/birthday-decorations.jpg', 
    'serviceCard', 
    'Birthday Decorations',
    'rounded-lg object-cover'
  )}
/>
```

### **Gallery Image**
```typescript
<Image 
  {...getResponsiveImageProps(
    'gallery/birthday-1.jpg', 
    'gallery', 
    'Birthday party decorations',
    'rounded-lg object-cover'
  )}
/>
```

## 📊 **Quality Checklist**

- [ ] **Correct dimensions** for intended use
- [ ] **File size** under recommended limits
- [ ] **Format** appropriate for content type
- [ ] **Alt text** descriptive and SEO-friendly
- [ ] **Compression** optimized without quality loss
- [ ] **Responsive** sizing implemented
- [ ] **Loading strategy** appropriate for position
- [ ] **Accessibility** considerations met

## 🎯 **Quick Reference**

| Image Type | Desktop Size | Mobile Size | Max File Size |
|------------|--------------|-------------|---------------|
| Hero Banner | 1920x800px | 750x1000px | 500KB |
| Service Card | 800x600px | 600x450px | 200KB |
| Gallery | 800x800px | 600x600px | 300KB |
| Testimonial | 400x400px | 300x300px | 100KB |
| Service Hero | 1920x600px | 750x500px | 400KB |
