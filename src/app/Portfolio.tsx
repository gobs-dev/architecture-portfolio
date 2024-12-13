"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ProjectCategory, categories, portfolioItems } from "./portfolio-data";

type PortfolioCategory = ProjectCategory | "all";

const Portfolio = () => {
  const portfolioCategory = ["all", ...Array.from(categories)];
  const [category, setCategory] = useState<PortfolioCategory>("all");

  const portfolioList = useMemo(() => {
    if (category === "all") return portfolioItems;

    return portfolioItems.filter((item) => item.category === category);
  }, [category]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          Portofolio Kami
        </h2>
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={(value) => setCategory(value as PortfolioCategory)}
        >
          <TabsList className="w-full flex overflow-x-auto gap-1 mb-8">
            {portfolioCategory.map((cat) => (
              <TabsTrigger className="w-full flex-nowrap" value={cat} key={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          {portfolioCategory.map((category) => (
            <TabsContent
              key={category}
              value={category}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {portfolioList.map((portfolio) => (
                <Card key={portfolio.id} className="overflow-hidden">
                  <Image
                    src={portfolio.image}
                    alt={`${category} project`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <CardTitle className="text-foreground pb-2">
                      {portfolio.title}
                    </CardTitle>
                    <CardDescription>{portfolio.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
