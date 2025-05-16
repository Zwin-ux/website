import { CommissionTag } from "../components/CommissionCard";

export interface Commission {
  title: string;
  price: string;
  description: string;
  tag: CommissionTag;
}

export const commissions: Commission[] = [
  {
    title: "Custom Commissions",
    price: "$10–$20",
    description: "Any big-to-medium project idea you have, we’ll build it. Let’s ship your idea.",
    tag: "Custom",
  },
  {
    title: "Simple Website",
    price: "$5",
    description: "Need a personal site or landing page? We deliver it clean, fast, and styled.",
    tag: "Web",
  },
  {
    title: "Marketing Campaign",
    price: "$20",
    description: "We’ll create a meme-fueled, targeted marketing push. Strategy + assets included.",
    tag: "Marketing",
  },
];
