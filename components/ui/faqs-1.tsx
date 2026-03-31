import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    id: "item-1",
    title: "What is this platform?",
    content:
      "This is a modern web platform built with beautiful UI components, designed to help you build stunning websites with ease using React, Tailwind CSS, and shadcn.",
  },
  {
    id: "item-2",
    title: "Who can benefit from using this?",
    content:
      "Founders, product teams, and agencies that want to accelerate idea validation and delivery will find this incredibly useful.",
  },
  {
    id: "item-3",
    title: "What features are included?",
    content:
      "You get a collaborative workspace with reusable UI blocks, deployment automation, interactive 3D scenes, animated components, and comprehensive analytics all in one place.",
  },
  {
    id: "item-4",
    title: "Can I customize the components?",
    content:
      "Yes. All components are fully editable and come with design systems and code scaffolding so you can tailor blocks to your brand and workflow.",
  },
  {
    id: "item-5",
    title: "Does it integrate with existing tools?",
    content:
      "Absolutely. It connects with popular source control platforms, design tools, and cloud providers to fit seamlessly into your current stack.",
  },
  {
    id: "item-6",
    title: "How do I get support?",
    content:
      "You can access detailed documentation, community forums, and dedicated customer success channels for help at any time.",
  },
  {
    id: "item-7",
    title: "How do I get started?",
    content:
      "Simply clone the repository, install dependencies with npm install, and run npm run dev to start the development server. You'll be up and running in minutes.",
  },
];

export function FaqsSection() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-7 px-4 py-24">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl">
          Here are some common questions and answers. If you don&apos;t find the answer you&apos;re looking for,
          feel free to reach out.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg"
        defaultValue="item-1"
      >
        {questions.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
          >
            <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 px-4">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-muted-foreground">
        Can&apos;t find what you&apos;re looking for? Contact our{" "}
        <a href="#" className="text-primary hover:underline">
          customer support team
        </a>
      </p>
    </div>
  );
}
