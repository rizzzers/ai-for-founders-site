import React from "react";
import Link from "next/link";

interface MarkdownRendererProps {
  content: string;
}

/** Render a link element */
const renderLink = (linkText: string, url: string, key: string | number, bold = false) => {
  const className = "text-primary underline underline-offset-4 hover:text-primary/80 transition-colors";
  const content = bold ? <strong className="font-semibold">{linkText}</strong> : linkText;
  const isInternal = url.startsWith("/");

  if (isInternal) {
    return <Link key={key} href={url} className={className}>{content}</Link>;
  }
  return (
    <a key={key} href={url} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  );
};

/** Render inline formatting: **bold**, [links](url), **[bold links](url)** */
const renderInline = (text: string): React.ReactNode[] => {
  // Match: **[text](url)**, **text**, [text](url)
  const tokenRegex = /(\*\*\[.*?\]\(.*?\)\*\*|\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, i) => {
    // Bold link: **[text](url)**
    const boldLinkMatch = part.match(/^\*\*\[(.*?)\]\((.*?)\)\*\*$/);
    if (boldLinkMatch) {
      const [, linkText, url] = boldLinkMatch;
      return renderLink(linkText, url, i, true);
    }

    // Bold (may contain links inside)
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      // Check if inner contains links
      if (/\[.*?\]\(.*?\)/.test(inner)) {
        const innerParts = inner.split(/(\[.*?\]\(.*?\))/g);
        return (
          <strong key={i} className="text-foreground font-semibold">
            {innerParts.map((p, j) => {
              const lm = p.match(/^\[(.*?)\]\((.*?)\)$/);
              if (lm) return renderLink(lm[1], lm[2], `${i}-${j}`);
              return p;
            })}
          </strong>
        );
      }
      return (
        <strong key={i} className="text-foreground font-semibold">
          {inner}
        </strong>
      );
    }

    // Link [text](url)
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, linkText, url] = linkMatch;
      return renderLink(linkText, url, i);
    }

    return part;
  });
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listBuffer: React.ReactNode[] = [];
  let listKey = 0;

  const flushList = () => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={`list-${listKey}`} className="my-4 ml-6 space-y-2 list-disc marker:text-primary/50">
          {listBuffer}
        </ul>
      );
      listBuffer = [];
      listKey++;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (trimmed === "") {
      // Don't flush list on empty lines within a list block
      return;
    }

    // List items
    if (trimmed.startsWith("- ")) {
      listBuffer.push(
        <li key={index} className="text-muted-foreground leading-relaxed">
          {renderInline(trimmed.slice(2))}
        </li>
      );
      return;
    }

    // Flush any pending list
    flushList();

    // Headings
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={index} className="text-2xl md:text-3xl font-bold mt-14 mb-6 text-foreground tracking-tight">
          {renderInline(trimmed.slice(3))}
        </h2>
      );
      return;
    }
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={index} className="text-xl md:text-2xl font-bold mt-10 mb-4 text-foreground">
          {renderInline(trimmed.slice(4))}
        </h3>
      );
      return;
    }

    // Horizontal rule
    if (trimmed.startsWith("---")) {
      elements.push(
        <hr key={index} className="border-border/30 my-10" />
      );
      return;
    }

    // Paragraph
    elements.push(
      <p key={index} className="text-muted-foreground leading-relaxed my-4">
        {renderInline(trimmed)}
      </p>
    );
  });

  // Flush remaining list
  flushList();

  return (
    <div className="prose-container max-w-none">
      {elements}
    </div>
  );
};

export default MarkdownRenderer;
