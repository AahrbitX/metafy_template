type FeatureContent = {
  title: string;
  description: string;
};

export const featuresData: Record<string, FeatureContent[]> = {
  "Small Scale": [
    {
      title: "Quick Setup",
      description:
        "Get started with our onboarding process. Perfect for small teams who need to hit the ground running.",
    },
    {
      title: "Essential Tools",
      description:
        "Access core development tools without the enterprise complexity. Ideal for focused, agile development workflows.",
    },
    {
      title: "Cost Effective",
      description:
        "Flexible pricing that scales with your team. Start small and only pay for what you need as you grow.",
    },
    {
      title: "Team Collaboration",
      description:
        "Built-in collaboration features designed for small, tight-knit teams working closely together.",
    },
    {
      title: "Simple Management",
      description:
        "Easy-to-use project management tools that don't get in the way of your development process.",
    },
    {
      title: "Direct Support",
      description:
        "Personal support access to help your small team overcome any challenges quickly.",
    },
  ],
  "Mid-sized": [
    {
      title: "Scalable Architecture",
      description:
        "Infrastructure that grows with your team, supporting multiple projects and increasing complexity.",
    },
    {
      title: "Advanced Workflows",
      description:
        "Sophisticated CI/CD pipelines and automation tools to streamline your development process.",
    },
    {
      title: "Team Management",
      description:
        "Comprehensive team management features for organizing and coordinating multiple development groups.",
    },
    {
      title: "Performance Monitoring",
      description:
        "Detailed analytics and monitoring tools to keep your growing team efficient and productive.",
    },
    {
      title: "Security Controls",
      description:
        "Enhanced security features and access controls suitable for growing organizations.",
    },
    {
      title: "Resource Optimization",
      description:
        "Tools to help optimize resource allocation and team productivity as you scale.",
    },
  ],
  "Large Scale": [
    {
      title: "Enterprise Integration",
      description:
        "Seamless integration with existing enterprise systems and workflows.",
    },
    {
      title: "Advanced Security",
      description:
        "Enterprise-grade security features including SSO, audit logs, and compliance tools.",
    },
    {
      title: "Global Deployment",
      description:
        "Support for worldwide deployment and distributed team management.",
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored solutions and customization options for specific enterprise needs.",
    },
    {
      title: "High Availability",
      description:
        "99.99% uptime guarantee with redundant systems and enterprise-level support.",
    },
    {
      title: "Compliance & Governance",
      description:
        "Built-in compliance tools and governance features for regulated industries.",
    },
  ],
  "Remote Teams": [
    {
      title: "Real-time Collaboration",
      description:
        "Synchronous collaboration tools that make remote work feel local.",
    },
    {
      title: "Global Accessibility",
      description:
        "24/7 access from anywhere with distributed server infrastructure.",
    },
    {
      title: "Communication Hub",
      description:
        "Integrated communication tools designed for distributed teams.",
    },
    {
      title: "Time Zone Management",
      description:
        "Smart features to handle time zone differences and async work.",
    },
    {
      title: "Remote Security",
      description:
        "Enhanced security features specifically designed for remote work scenarios.",
    },
    {
      title: "Virtual Workspace",
      description:
        "Digital workspace tools that keep remote teams connected and aligned.",
    },
  ],
  Community: [
    {
      title: "Open Source Support",
      description:
        "Specialized tools and features for managing open source projects.",
    },
    {
      title: "Community Engagement",
      description:
        "Built-in features for managing contributors and community interactions.",
    },
    {
      title: "Public Collaboration",
      description:
        "Tools for coordinating with external contributors and managing public repos.",
    },
    {
      title: "Documentation Tools",
      description:
        "Integrated documentation systems for maintaining project knowledge.",
    },
    {
      title: "Issue Tracking",
      description:
        "Comprehensive issue and feature request management for community input.",
    },
    {
      title: "Resource Sharing",
      description:
        "Platform for sharing resources and knowledge within the community.",
    },
  ],
};
