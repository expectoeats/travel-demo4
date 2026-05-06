"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapRegister() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
}
