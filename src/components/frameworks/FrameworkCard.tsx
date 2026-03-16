import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Framework } from "@/data/frameworks";

interface FrameworkCardProps {
  framework: Framework;
  index: number;
}

const FrameworkCard = ({ framework: fw, index }: FrameworkCardProps) => {
  return (
    <Card
      className="border-border/30 bg-card/40 backdrop-blur hover:border-primary/20 hover:bg-card/60 transition-all duration-300 group animate-fade-in-up"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <Accordion type="single" collapsible>
        <AccordionItem value="detail" className="border-none">
          <CardHeader className="pb-2">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {fw.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[10px] border-primary/25 text-primary/80 bg-primary/5"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <AccordionTrigger className="hover:no-underline py-0">
              <CardTitle className="text-base text-left leading-snug group-hover:text-primary/90 transition-colors">
                {fw.name}
              </CardTitle>
            </AccordionTrigger>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {fw.summary}
            </p>
          </CardHeader>

          <AccordionContent>
            <CardContent className="pt-2">
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                {fw.detail}
              </p>
              <Link
                href={`/podcast-grid/${fw.episode.slug}`}
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline underline-offset-4"
              >
                <ArrowRight className="h-3 w-3" />
                {fw.episode.guest} — {fw.episode.title}
              </Link>
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default FrameworkCard;
