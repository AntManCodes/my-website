"use client";
import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    text: "We deployed 40 NOVA-1 units across our Detroit assembly line. Defect rates dropped 34% within 90 days. This isn't a prototype — it's the real thing.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "James Harrington",
    role: "VP of Operations, AutoCore Industries",
  },
  {
    text: "Our order throughput increased 280% after integrating NOVA-1 into our fulfillment center. Full ROI was evident before the end of the first quarter.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Priya Shankar",
    role: "Director of Logistics, PrimeMover Co.",
  },
  {
    text: "NOVA-1 handles our overnight supply runs and patient transport across three floors. Our nursing staff now focuses entirely on patient care — exactly as it should be.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Dr. Elena Vasquez",
    role: "Chief of Operations, MedNorth Health",
  },
  {
    text: "We were skeptical going in. After a 30-day pilot, we immediately placed a 200-unit order. The dexterity and task adaptability are unlike anything else on the market.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Marcus Webb",
    role: "CEO, Trident Manufacturing",
  },
  {
    text: "We benchmarked NOVA-1 against every major competitor. Nothing else came close in terms of total cost of ownership and real-world task reliability.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Yuki Tanaka",
    role: "Head of Automation, FujiTech Robotics",
  },
  {
    text: "NOVA-1 works 22 hours a day without complaint. We scaled our overnight operations without hiring a single additional person.",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "Sarah O'Brien",
    role: "COO, Atlas Freight Solutions",
  },
  {
    text: "The fine motor skills on NOVA-1 are remarkable. It handles circuit board assembly with precision that surpasses our most experienced technicians.",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    name: "David Kim",
    role: "Plant Manager, Korexx Electronics",
  },
  {
    text: "We deployed NOVA-1 across three facilities in the UAE. Onboarding was seamless and units were fully operational within two weeks of arrival.",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    name: "Fatima Al-Rashid",
    role: "Operations Director, Gulf Logistics Group",
  },
  {
    text: "NOVA-1 inspects hazardous sites our teams can't safely enter. It's already flagged two potential safety failures and saved us significant liability exposure.",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    name: "Tom Bellamy",
    role: "Chief Engineer, NovaBridge Construction",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="bg-background py-24 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <Badge variant="outline">Testimonials</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mt-5">
            Trusted by industry leaders
          </h2>
          <p className="text-center mt-5 opacity-75 text-muted-foreground">
            From factory floors to hospital corridors — here&apos;s what early operators are saying.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{ text: string; image: string; name: string; role: string }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                key={i}
              >
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
