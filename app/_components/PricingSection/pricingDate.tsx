export type PricingTier = {
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  features: string[];
};

export const pricingData: PricingTier[] = [
  {
    id: 1,
    name: "Starter Team",

    originalPrice: 99,
    currentPrice: 79,
    features: [
      "Up to 5 team members",
      "Basic collaboration tools",
      "Core development features",
      "Email support",
    ],
  },
  {
    id: 2,
    name: "Growing Business",
    originalPrice: 199,
    currentPrice: 149,
    features: [
      "Up to 15 team members",
      "Advanced workflow automation",
      "Priority support access",
      "Custom integrations",
    ],
  },
];
