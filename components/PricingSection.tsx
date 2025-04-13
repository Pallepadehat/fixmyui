"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconCheck, IconCrown, IconRocket, IconUser } from "@tabler/icons-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "For individuals and small projects",
    icon: <IconUser className="w-8 h-8" />,
    features: [
      "3 projects",
      "Basic UI analysis",
      "Color contrast checking",
      "Layout recommendations",
      "Export reports",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    description: "For professional developers",
    icon: <IconCrown className="w-8 h-8" />,
    features: [
      "Unlimited projects",
      "Advanced UI analysis",
      "AI-powered suggestions",
      "Component library audit",
      "Custom brand guidelines",
      "Priority support",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large teams and organizations",
    icon: <IconRocket className="w-8 h-8" />,
    features: [
      "Everything in Pro",
      "Custom API access",
      "White-label reports",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated support",
      "Training sessions",
    ],
  },
];

export function PricingSection() {
  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent mb-4"
        >
          Simple, transparent pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/60"
        >
          Choose the plan that best fits your needs
        </motion.p>
      </div>

      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`relative bg-card rounded-3xl p-8 border ${
              plan.popular 
                ? "border-primary/50 shadow-lg shadow-primary/20" 
                : "border-border hover:border-primary/20"
            } transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-xl ${plan.popular ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-5xl font-bold text-foreground tracking-tight">{plan.price}</span>
                {plan.price !== "Free" && (
                  <span className="text-muted-foreground font-medium">/month</span>
                )}
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className={`rounded-full p-1 ${plan.popular ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                    <IconCheck className="w-4 h-4" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              className={`w-full py-6 text-lg font-medium ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
              } transition-all duration-300`}
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 