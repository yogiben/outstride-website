# Update Testimonials from Notion Database

This script helps you update testimonials on your website by pulling data from your Notion "Coaching clients" database.

## Prerequisites

- Access to Notion "Coaching clients" database
- Notion integration token (if using API)
- Node.js and npm installed

## Process

### Step 1: Search Notion Database

Use the Notion search tool to find clients with testimonials:

```bash
# Search query: "testimonial" in "Coaching clients" database
# Database ID: 5e6e44a1-fc5a-4dda-b7f1-724d36c3d563
# Data source URL: collection://e99f745b-1c4b-4daf-9ac6-96291938ec14
```

### Step 2: Extract Testimonial Data

For each client with a testimonial, collect:

- Client name
- Role/position
- Company
- Testimonial text
- Available client images

### Step 3: Update Data File

Edit `/src/lib/data.ts` and update the `testimonials` array:

```typescript
export const testimonials: Testimonial[] = [
  // ... existing testimonials ...
  {
    id: 5, // Next available ID
    name: "Client Name",
    role: "CEO & co-founder",
    company: "Company Name",
    image: "/images/clients/client-logo1.png", // or /images/testimonial/client-photo.jpeg
    quote: "Client testimonial text here...",
  },
];
```

### Step 4: Build and Test

```bash
npm run build
npm run preview
```

## Available Image Paths

- `/public/images/clients/` - Client logos
  - `client-logo1.png`
  - `client-logo2.png`
  - `client-logo3.png`
- `/public/images/testimonial/` - Client photos
  - `ecem.jpeg`
  - `dafni.jpeg`
  - `tom.jpeg`
  - `courtney.jpeg`

## Example Testimonial Object

```typescript
{
  id: 4,
  name: "Dan",
  role: "CEO & co-founder",
  company: "Lapse",
  image: "/images/clients/client-logo1.png",
  quote: "Working with Ben has transformed how I lead and make decisions. His coaching gave me clarity, sharpened my focus, and helped me approach challenges with confidence and conviction."
}
```

## Troubleshooting

- **No testimonials found**: Check that clients have the "Testimonial" field filled in Notion
- **Image not showing**: Verify the image path exists in `/public/images/`
- **Build errors**: Check TypeScript types and ensure all required fields are present
- **Notion access**: Ensure you have permission to access the "Coaching clients" database

## Automation

For future automation, consider:

1. Creating a Notion API integration
2. Building a script to automatically sync testimonials
3. Setting up webhooks for real-time updates
