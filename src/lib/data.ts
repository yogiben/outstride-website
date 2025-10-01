export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dan",
    role: "CEO & co-founder",
    company: "Lapse",
    image: "/outstride-website/images/clients/dan-silvertown.jpg",
    quote:
      "Working with Ben has transformed how I lead and make decisions. His coaching gave me clarity, sharpened my focus, and helped me approach challenges with confidence and conviction.",
  },
  {
    id: 2,
    name: "Ecem",
    role: "CEO & co-founder",
    company: "TalentGrid.io",
    image: "/outstride-website/images/testimonial/ecem.jpeg",
    quote:
      "Working with Ben has been great. He helps us align on the big stuff and introduced us to some fantastic angels for our seed round.",
  },
  {
    id: 3,
    name: "Dafni",
    role: "CEO & co-founder",
    company: "Wonderpath",
    image: "/outstride-website/images/testimonial/dafni.jpeg",
    quote:
      "The team workshops bring a tremendous amount of clarity and alignment. It's too easy to get bogged down in the detail and it's really important to remember to zoom out and look at the bigger picture.",
  },
  {
    id: 4,
    name: "Tom",
    role: "CEO & co-founder",
    company: "Trevor.io",
    image: "/outstride-website/images/testimonial/tom.jpeg",
    quote:
      "First time fundraising can be pretty daunting! Ben helped demistify the process for us.",
  },
  {
    id: 5,
    name: "Courtney",
    role: "CEO & co-founder",
    company: "Paradym",
    image: "/outstride-website/images/testimonial/courtney.jpeg",
    quote:
      "The sessions helped me align the team around a clear strategy and to define the culture that the want to build.",
  },
];

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "⛰",
    title: "Vision & Strategy",
    description:
      "Figure out the big things first. Defining and aligning on the core identity and purpose of your company is crucial for success.",
  },
  {
    id: 2,
    icon: "🏆",
    title: "Culture & Values",
    description:
      "What kind of company do you want to build? Culture comes from the founders and it's important to get it right from the start.",
  },
  {
    id: 3,
    icon: "💪",
    title: "Leadership & Personal Growth",
    description:
      "A company is only as successful as its founders. Build a personal growth plan that empowers you to lead your startup through growth.",
  },
  {
    id: 4,
    icon: "🙌",
    title: "Co-founder Relations",
    description:
      "Co-founder breakup is the biggest cause of startup failure. Build a strong relationship through clear roles and honest feedback.",
  },
  {
    id: 5,
    icon: "🤖",
    title: "Product & Tech",
    description:
      "Design, build and execute. Getting this right is key to a startup's success.",
  },
  {
    id: 6,
    icon: "💸",
    title: "Fundraising",
    description:
      "Fundraising is often a complete mystery for new founders. I support on the process by advising on pitch decks and making intros to investors.",
  },
];

export interface Article {
  id: number;
  title: string;
  url: string;
  emoji: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title:
      "100 employees. 100 lessons. What I wish I'd known when starting Nuri",
    url: "https://blog.outstride.co/100-employees-100-lessons-what-i-wish-id-known-when-starting-nuri-4e8c93939421",
    emoji: "💯",
  },
  {
    id: 2,
    title: "The CTO: A start-up's hardest position",
    url: "https://blog.outstride.co/the-cto-a-start-ups-hardest-position-3a87064dfad2",
    emoji: "🤓",
  },
  {
    id: 3,
    title: "Malaria taught me to delegate",
    url: "https://blog.outstride.co/malaria-made-me-a-better-entrepreneur-a57d4c26ffd",
    emoji: "🦟",
  },
  {
    id: 4,
    title: "Why I'm moving to Chairman",
    url: "https://blog.outstride.co/why-im-moving-to-chairman-9f037ce5d562",
    emoji: "🏃",
  },
  {
    id: 5,
    title: "How to deal with cancer when running a startup",
    url: "https://blog.outstride.co/how-to-deal-with-cancer-while-running-a-startup-884cbf621bc7",
    emoji: "🦀",
  },
  {
    id: 6,
    title: "The Bitwala Story",
    url: "https://blog.outstride.co/the-bitwala-story-a9fbd2ee7408",
    emoji: "📚",
  },
];
