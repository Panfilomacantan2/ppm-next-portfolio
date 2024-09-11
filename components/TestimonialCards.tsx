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
  {
    quote:
      "I wanted to take a moment to commend you for your exceptional work. Your skills and dedication in programming are truly impressive. You are such a great programmer, Mr. Panfilo. Thank you for your help during the times we struggled with the system. The way you tackle complex problems, design elegant solutions, and write clean, efficient code sets a high standard for all of us. Your innovative approach and attention to detail not only enhance the quality of our projects but also inspire us as IT professionals.",
    name: "Rikkalyn Shine Cumpio Velarga",
    title: "BS Information Technology Graduate",
    image: "/clients/velarga.jpg",
  },
];
