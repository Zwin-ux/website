import { CommissionTag } from "../components/CommissionCard";

export interface Commission {
  title: string;
  price: string;
  description: string;
  tag: CommissionTag;
}

export const commissions: Commission[] = [
  {
    title: "$5 Website Setup",
    price: "$5",
    description: "From zero to live. We’ll guide you from idea to launch, handle the hosting, and work side-by-side with you—no tech skills needed. Perfect for artists, small businesses, or anyone wanting a simple, beautiful site.",
    tag: "Web",
  },
  {
    title: "$10 Custom Commission",
    price: "$10",
    description: "Any tech project, your way. Need a bot, a unique web tool, or a creative automation? Pitch us your idea—big or small—and we’ll help build it.",
    tag: "Custom",
  },
  {
    title: "$15 Marketing Campaign",
    price: "$15",
    description: "A team of artists, working for you. Want to get your project noticed? We’ll craft a creative campaign—graphics, content, social media—that gets eyes on your work and helps your vision grow.",
    tag: "Marketing",
  },
];
