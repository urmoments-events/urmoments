# Image Update Guide - Where to Change Images

This guide shows you exactly where to update images in your urmoments website.

## 🎯 **1. Hero Banner (Main Banner)**

### **Location**: `config.json`
```json
{
  "heroBanner": {
    "image": "assets/home/image1.jpg",  // ← UPDATE THIS
    "headline": "Beautiful, stress-free party decorations",
    "subhead": "Birthdays, baby showers, and more across London",
    "points": ["Theme styling", "Set-up & clean-up", "On-time guarantee"]
  }
}
```

### **Recommended Image**:
- **Desktop**: `1920x800px`
- **Mobile**: `750x1000px` 
- **File**: `public/assets/home/hero-banner-1920x800.jpg`

### **How to Update**:
1. Add your new hero image to `public/assets/home/`
2. Update the `image` path in `config.json`
3. Example: `"image": "assets/home/hero-banner-1920x800.jpg"`

---

## 🎨 **2. Service Images**

### **Location**: `config.json` → `services` array
```json
{
  "services": [
    {
      "title": "Birthday Decorations",
      "image": "assets/services/image1.jpg",  // ← UPDATE THIS
      "description": "Theme-based styling with balloons, backdrop, and signage."
    },
    {
      "title": "Gender Reveal Decorations", 
      "image": "assets/services/image2.jpg",  // ← UPDATE THIS
      "description": "Elegant reveal moments with props and table styling."
    },
    {
      "title": "Surprise Party Decorations",
      "image": "assets/services/image3.jpg",  // ← UPDATE THIS
      "description": "Statement feature wall with ceiling decor and custom signage."
    }
  ]
}
```

### **Recommended Images**:
- **Size**: `800x600px` (4:3 ratio)
- **Files**: 
  - `public/assets/services/birthday-decorations-800x600.jpg`
  - `public/assets/services/gender-reveal-800x600.jpg`
  - `public/assets/services/surprise-party-800x600.jpg`

### **How to Update**:
1. Add service images to `public/assets/services/`
2. Update each `image` path in the services array
3. Example: `"image": "assets/services/birthday-decorations-800x600.jpg"`

---

## 🖼️ **3. Gallery Images**

### **Location**: `config.json` → `heroImages` array
```json
{
  "heroImages": [
    "assets/home/image1.jpg",    // ← UPDATE THESE
    "assets/home/image2.jpg",    // ← UPDATE THESE
    "assets/home/image3.jpeg",   // ← UPDATE THESE
    "assets/home/image4.jpg",    // ← UPDATE THESE
    "assets/home/image5.jpg",    // ← UPDATE THESE
    "assets/home/image6.jpg"     // ← UPDATE THESE
  ]
}
```

### **Recommended Images**:
- **Size**: `800x800px` (square) or `1000x750px` (4:3)
- **Files**: `public/assets/gallery/`
  - `birthday-1-800x800.jpg`
  - `gender-reveal-1-800x800.jpg`
  - `surprise-party-1-800x800.jpg`
  - `baby-shower-1-800x800.jpg`
  - `anniversary-1-800x800.jpg`
  - `celebration-1-800x800.jpg`

### **How to Update**:
1. Add gallery images to `public/assets/gallery/`
2. Update the `heroImages` array in `config.json`
3. Example: `"assets/gallery/birthday-1-800x800.jpg"`

---

## 👥 **4. Testimonial Avatars**

### **Location**: `config.json` → `testimonials` array
```json
{
  "testimonials": [
    {
      "name": "Priya S.",
      "area": "Harrow", 
      "text": "They nailed the pastel theme and handled everything end-to-end. Our guests loved it!",
      "avatar": ""  // ← UPDATE THIS
    },
    {
      "name": "Rahul & Meera",
      "area": "Wembley",
      "text": "On time, super friendly, and the backdrop looked stunning in photos.",
      "avatar": ""  // ← UPDATE THIS
    }
  ]
}
```

### **Recommended Images**:
- **Size**: `400x400px` (square)
- **Files**: `public/assets/testimonials/`
  - `customer-1-400x400.jpg`
  - `customer-2-400x400.jpg`
  - `customer-3-400x400.jpg`
  - `customer-4-400x400.jpg`

### **How to Update**:
1. Add customer photos to `public/assets/testimonials/`
2. Update each `avatar` path in testimonials
3. Example: `"avatar": "assets/testimonials/customer-1-400x400.jpg"`

---

## 🏠 **5. Service Detail Page Hero Images**

### **Location**: `config.json` → `services` array (same as service cards)
The service detail pages use the same images as the service cards, but they're displayed differently.

### **Recommended Images**:
- **Desktop**: `1920x600px` (16:5 ratio)
- **Mobile**: `750x500px` (3:2 ratio)
- **Files**: Same as service images but with different aspect ratios

---

## 📁 **Complete File Structure**

```
public/assets/
├── home/
│   ├── hero-banner-1920x800.jpg          ← MAIN BANNER
│   ├── hero-banner-mobile-750x1000.jpg   ← MOBILE BANNER
│   └── gallery-preview-800x600.jpg       ← GALLERY PREVIEW
├── services/
│   ├── birthday-decorations-800x600.jpg  ← SERVICE CARD
│   ├── gender-reveal-800x600.jpg         ← SERVICE CARD
│   └── surprise-party-800x600.jpg        ← SERVICE CARD
├── gallery/
│   ├── birthday-1-800x800.jpg            ← GALLERY IMAGE
│   ├── gender-reveal-1-800x800.jpg       ← GALLERY IMAGE
│   ├── surprise-party-1-800x800.jpg      ← GALLERY IMAGE
│   ├── baby-shower-1-800x800.jpg         ← GALLERY IMAGE
│   ├── anniversary-1-800x800.jpg         ← GALLERY IMAGE
│   └── celebration-1-800x800.jpg         ← GALLERY IMAGE
└── testimonials/
    ├── customer-1-400x400.jpg            ← TESTIMONIAL AVATAR
    ├── customer-2-400x400.jpg            ← TESTIMONIAL AVATAR
    ├── customer-3-400x400.jpg            ← TESTIMONIAL AVATAR
    └── customer-4-400x400.jpg            ← TESTIMONIAL AVATAR
```

---

## 🔧 **Step-by-Step Update Process**

### **1. Prepare Your Images**
1. Resize images to recommended dimensions
2. Optimize file sizes (use TinyPNG or similar)
3. Use descriptive filenames
4. Save in JPG format (85% quality)

### **2. Upload Images**
1. Create the folder structure in `public/assets/`
2. Upload your images to the appropriate folders
3. Ensure filenames match your config.json paths

### **3. Update Configuration**
1. Open `config.json`
2. Update the image paths to match your new files
3. Save the file

### **4. Test Your Changes**
1. Run `npm run build` to ensure everything works
2. Check the website locally with `npm run dev`
3. Verify images display correctly on mobile and desktop

---

## ⚡ **Quick Update Examples**

### **Update Hero Banner**:
```json
// In config.json
{
  "heroBanner": {
    "image": "assets/home/hero-banner-1920x800.jpg"
  }
}
```

### **Update Service Images**:
```json
// In config.json
{
  "services": [
    {
      "title": "Birthday Decorations",
      "image": "assets/services/birthday-decorations-800x600.jpg"
    }
  ]
}
```

### **Update Gallery Images**:
```json
// In config.json
{
  "heroImages": [
    "assets/gallery/birthday-1-800x800.jpg",
    "assets/gallery/gender-reveal-1-800x800.jpg",
    "assets/gallery/surprise-party-1-800x800.jpg"
  ]
}
```

---

## 🎯 **Priority Order**

1. **Hero Banner** - Most important, first thing visitors see
2. **Service Images** - Key for converting visitors to customers
3. **Gallery Images** - Shows your work quality
4. **Testimonial Avatars** - Adds trust and credibility

## 📱 **Mobile vs Desktop**

The website automatically handles responsive images:
- **Desktop**: Shows larger, higher-quality images
- **Mobile**: Shows optimized, smaller images
- **Loading**: Prioritizes hero images, lazy loads others

Your images will look great on all devices! 🎉
