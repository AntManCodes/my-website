"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Use Cases",
  heading = "One Robot. Every Industry.",
  description = "NOVA-1 is purpose-built for the world's most demanding work environments.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Manufacturing",
      content: {
        badge: "Industrial Grade",
        title: "Precision assembly at scale.",
        description:
          "NOVA-1 performs complex multi-step assembly tasks with sub-millimeter accuracy. Equipped with 12-DOF hands and force-torque sensing in every fingertip, it handles components that even skilled technicians find challenging — and does it 22 hours a day.",
        buttonText: "See Capabilities",
        imageSrc: "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?w=800&q=80",
        imageAlt: "Robotic manufacturing assembly line",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Warehousing",
      content: {
        badge: "Logistics Ready",
        title: "End-to-end warehouse automation.",
        description:
          "From picking and sorting to palletizing and loading, NOVA-1 navigates dynamic warehouse environments autonomously. It adapts in real time to changing layouts, new SKUs, and human coworkers — no fixed infrastructure required.",
        buttonText: "Explore Use Cases",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        imageAlt: "Modern logistics warehouse",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Healthcare",
      content: {
        badge: "Care Sector",
        title: "Compassionate assistance, around the clock.",
        description:
          "NOVA-1 assists medical staff with patient transport, supply logistics, and repetitive care tasks — freeing nurses and doctors to focus on what only humans can do. Certified for sterile environments and compliant with ISO 13485 medical device standards.",
        buttonText: "Learn More",
        imageSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
        imageAlt: "Modern hospital corridor",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">{heading}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">{tab.content.title}</h3>
                  <p className="text-muted-foreground lg:text-lg">{tab.content.description}</p>
                  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl w-full object-cover max-h-80"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
