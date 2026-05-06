"use client";

import { LuxuryHome } from "@/components/sections/luxury-home";
import { useLenis } from "@/hooks/use-lenis";
import { useGsapRegister } from "@/hooks/use-gsap-register";

export default function HomePage() {
  useLenis();
  useGsapRegister();

  return <LuxuryHome />;
}
