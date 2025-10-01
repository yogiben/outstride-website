# Quick Reference: Update Testimonials

## 🚀 Quick Command

```bash
npm run update-testimonials
```

## 📋 Step-by-Step Process

1. **Search Notion Database**

   - Database: "Coaching clients"
   - Query: "testimonial"
   - Look for clients with filled testimonial fields

2. **Update Data File**

   - Edit: `/src/lib/data.ts`
   - Update: `testimonials` array
   - Add new testimonial objects

3. **Build & Test**
   ```bash
   npm run build
   npm run preview
   ```

## 📝 Testimonial Object Template

```typescript
{
  id: 5, // Next available ID
  name: "Client Name",
  role: "CEO & co-founder",
  company: "Company Name",
  image: "/images/clients/client-logo1.png", // or /images/testimonial/client-photo.jpeg
  quote: "Client testimonial text here...",
}
```

## 🖼️ Available Images

**Client Logos**: `/public/images/clients/`

- `client-logo1.png`
- `client-logo2.png`
- `client-logo3.png`

**Client Photos**: `/public/images/testimonial/`

- `ecem.jpeg`
- `dafni.jpeg`
- `tom.jpeg`
- `courtney.jpeg`

## 🔍 Notion Database Info

- **Database ID**: `5e6e44a1-fc5a-4dda-b7f1-724d36c3d563`
- **Data Source URL**: `collection://e99f745b-1c4b-4daf-9ac6-96291938ec14`
- **Testimonial Field**: Look for clients with "Testimonial" property filled

## ✅ Checklist

- [ ] Found clients with testimonials in Notion
- [ ] Extracted testimonial text and client info
- [ ] Updated `testimonials` array in `data.ts`
- [ ] Used appropriate image path
- [ ] Built and tested the site
- [ ] Verified testimonials display correctly
