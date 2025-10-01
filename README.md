# Outstride Website

Ben's founder coaching website built with Next.js - https://www.outstride.co

## 🚀 Tech Stack

- **Next.js 15** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Static hosting

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
npm install
```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── page.tsx        # Homepage
│   │   ├── testimonials/   # Testimonials page
│   │   ├── contact/        # Contact page
│   │   └── referrals/      # Referrals page
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   └── lib/
│       └── data.ts         # Data arrays (testimonials, services, etc.)
├── public/
│   └── images/            # Static assets
└── out/                   # Static export output (auto-generated)
```

## 🎯 Key Features

- ✅ **Static Site Generation** - Perfect SEO with pre-rendered HTML
- ✅ **React Components** - Easy content management
- ✅ **Data-driven** - Testimonials and services managed as arrays
- ✅ **GitHub Pages Ready** - Automatic deployment
- ✅ **Mobile Responsive** - Bootstrap + Tailwind CSS
- ✅ **Performance Optimized** - Fast loading times

## 📝 Content Management

### Adding Testimonials

#### Method 1: Manual Update

Edit `src/lib/data.ts`:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: 5,
    name: "New Client",
    role: "CEO",
    company: "New Startup",
    image: "/images/testimonial/new-client.jpeg",
    quote: "Amazing coaching experience!",
  },
];
```

#### Method 2: Update from Notion Database

**Command**: `npm run update-testimonials`

This process will:

1. Search your Notion "Coaching clients" database for clients with testimonials
2. Extract testimonial text and client information
3. Update the testimonials array in `/src/lib/data.ts`
4. Use appropriate client images from the `/public/images/` folder
5. Build the site to verify changes

**Manual Process**:

1. **Search Notion Database**:

   - Use Notion search tool
   - Query: "testimonial" in "Coaching clients" database
   - Filter by clients who have testimonials

2. **Extract Testimonial Data**:

   - Client name
   - Role/position
   - Company
   - Testimonial text
   - Available client images

3. **Update Data File**:

   - Open `/src/lib/data.ts`
   - Update the `testimonials` array with new data
   - Ensure proper TypeScript types

4. **Build and Test**:
   ```bash
   npm run build
   npm run preview
   ```

**Example Testimonial Object**:

```typescript
{
  id: 4,
  name: "Dan",
  role: "CEO & co-founder",
  company: "Lapse",
  image: "/images/clients/client-logo1.png", // or /images/testimonial/dan.jpeg
  quote: "Working with Ben has transformed how I lead and make decisions. His coaching gave me clarity, sharpened my focus, and helped me approach challenges with confidence and conviction."
}
```

**Available Image Paths**:

- `/public/images/clients/` - Client logos
- `/public/images/testimonial/` - Client photos

### Adding Services

Edit the `services` array in `src/lib/data.ts`:

```typescript
export const services: Service[] = [
  {
    id: 7,
    icon: "🎯",
    title: "New Service",
    description: "Description of the new service.",
  },
];
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages using GitHub Actions:

1. **Push to main branch**: Any push to the `main` branch triggers automatic deployment
2. **GitHub Actions builds**: The workflow builds the Next.js site and creates static files
3. **Auto-deploy**: The built files are automatically deployed to GitHub Pages

### Manual Testing (if needed)

If you need to test the build locally:

```bash
npm run build
npm run start  # Preview the built site locally
```

The deployment is handled by the `.github/workflows/deploy.yml` workflow file.

<!-- Trigger fresh deployment -->

## 🔧 GitHub Pages Configuration

The site is configured to work with GitHub Pages:

- Static export enabled (`output: 'export'` in `next.config.js`)
- Custom domain support (`CNAME` file)
- Jekyll disabled (`.nojekyll` file)

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Load JS**: ~106 kB
- **Static Generation**: All pages pre-rendered
- **SEO Optimized**: Meta tags, Open Graph, structured data ready

## 🎨 Styling

- **Tailwind CSS** for utility classes
- **Bootstrap** for grid system and components
- **Custom CSS** for animations and specific styling
- **Font Awesome** for icons
- **Google Fonts** (Poppins) for typography

## 📱 Responsive Design

- Mobile-first approach
- Bootstrap grid system
- Tailwind responsive utilities
- Optimized images and assets

## 🔍 SEO Features

- Server-side rendering (SSR)
- Meta tags and Open Graph
- Structured data ready
- Fast loading times
- Mobile-friendly
- Accessible markup

## 🛡️ Security

- No server-side code (static site)
- HTTPS enabled
- Secure headers
- No sensitive data exposure

## 📈 Analytics Ready

The site is ready for analytics integration:

- Google Analytics
- Facebook Pixel
- Custom tracking scripts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Deploy with `npm run deploy`
6. Submit a pull request

## 📄 License

ISC License - see package.json for details
