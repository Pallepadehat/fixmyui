"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  IconWand,
  IconBrandGithub,
  IconArrowUpRight,
  IconSparkles,
  IconLayoutDashboard,
  IconPalette,
} from "@tabler/icons-react";
import { PricingSection } from "@/components/PricingSection";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: <IconLayoutDashboard className="w-6 h-6" />,
      title: "Smart Layout Analysis",
      description: "Get instant feedback on your UI layout and spacing",
    },
    {
      icon: <IconPalette className="w-6 h-6" />,
      title: "Color Harmony",
      description: "Ensure perfect color contrast and accessibility",
    },
    {
      icon: <IconSparkles className="w-6 h-6" />,
      title: "AI Suggestions",
      description: "Receive intelligent UI improvement recommendations",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconWand className="w-8 h-8 text-primary" />
            <span className="text-xl font-semibold text-foreground">
              FixMyUI
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Features
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Pricing
            </Button>
            <Button
              className="bg-primary/10 text-primary hover:bg-primary/20"
              onClick={() => window.open("https://github.com")}
            >
              <IconBrandGithub className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            Transform Your UI With AI Magic
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Upload your design, get instant AI-powered feedback, and transform your UI into a pixel-perfect masterpiece.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="flex items-center gap-2">
                Get Started
                <motion.span
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconArrowUpRight className="w-4 h-4" />
                </motion.span>
              </span>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 py-20 border-y">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <PricingSection />
      </div>
    </main>
  );
}
