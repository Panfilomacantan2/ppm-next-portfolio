"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCardsComponent } from "./ui/infinite-moving-cards";

export function InfiniteMovingCards() {
  return (
    <InfiniteMovingCardsComponent
      items={testimonials}
      direction="right"
      speed="normal"
      pauseOnHover={true}
      className="border-border"
    />
  );
}

const testimonials = [
  {
    quote:
      "So the first time I messaged you about the system we were having you work on, you responded immediately, and you're easy to talk to. When we ask you to remedy something, you do it instantly. When there is something we don't understand about the system, you teach us, especially when the system was completed, and you give me step-by-step instructions. I'm not sure if you were upset with me since I asked so many questions about the system, but you still answered them all. Overall, you are performing fantastic since you are really attentive to our inquiries.",
    name: "Maria Princess J. Bartolome",
    title: "Civil Engineering Student",
    image: "/clients/bartolome.jpg",
  },
];
