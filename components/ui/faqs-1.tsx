import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    id: "item-1",
    title: "What is NOVA-1?",
    content:
      "NOVA-1 is a general-purpose humanoid robot built for real-world industrial, logistics, and care environments. Standing 5'9\" and weighing 125 lbs, it operates with 42 degrees of freedom and can carry up to 55 lbs — performing complex, dexterous tasks that previously required human labor.",
  },
  {
    id: "item-2",
    title: "How much does NOVA-1 cost?",
    content:
      "NOVA-1 starts at $29,900 per unit, with volume pricing available for fleet deployments of 10 or more. Most customers achieve full ROI within 12–18 months compared to equivalent human labor costs. Financing and multi-year leasing options are available through Nova Robotics Capital.",
  },
  {
    id: "item-3",
    title: "What tasks can NOVA-1 perform?",
    content:
      "NOVA-1 is designed for a wide range of tasks: precision assembly, pick-and-place, palletizing, quality inspection, material transport, patient assistance, and hazardous environment operations. It learns new tasks through demonstration via our intuitive teach mode, and is continuously updated over the air through Nova OS.",
  },
  {
    id: "item-4",
    title: "How does NOVA-1 learn new tasks?",
    content:
      "NOVA-1 uses a combination of imitation learning, reinforcement learning, and cloud-synced model updates. Show it a task once or twice using teach mode, and it generalizes reliably to similar variations. Fleet-wide improvements are deployed automatically — every NOVA-1 gets smarter as the network grows.",
  },
  {
    id: "item-5",
    title: "Is NOVA-1 safe to operate around human workers?",
    content:
      "Absolutely. NOVA-1 is equipped with 360° LiDAR, stereoscopic 4K cameras, and proprioceptive force sensing across every joint. It detects and avoids humans in real time, automatically reduces speed in shared workspaces, and meets ISO 10218 collaborative robot safety standards. It has logged over 200,000 hours of co-located operation without a single safety incident.",
  },
  {
    id: "item-6",
    title: "How long does the battery last and how is it recharged?",
    content:
      "NOVA-1 runs for up to 8 hours on a single charge and fully recharges in under 2 hours. For 24/7 operations, we offer hot-swap battery systems that allow units to return to the floor in under 3 minutes. Autonomous docking stations are available for fully hands-free charging.",
  },
  {
    id: "item-7",
    title: "When can I order and when does it ship?",
    content:
      "Pre-orders are open now. First production units ship to early customers in Q3 2026, with full commercial availability beginning Q1 2027. Enterprise buyers can apply for our pilot program to deploy units before the general release — contact our team to learn more.",
  },
];

export function FaqsSection() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-7 px-4 py-24">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl">
          Everything you need to know about NOVA-1. If you don&apos;t find the answer you&apos;re looking for,
          our team is happy to help.
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
