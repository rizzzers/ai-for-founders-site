"use client";

import { getAllTools } from "@/data/tools";

export default function RecosClient() {
  const tools = getAllTools();

  const grouped: Record<string, Record<string, { name: string; url: string }[]>> = {};
  tools.forEach(({ name, url, theme, category }) => {
    if (!grouped[theme]) grouped[theme] = {};
    if (!grouped[theme][category]) grouped[theme][category] = [];
    grouped[theme][category].push({ name, url });
  });

  return (
    <div className="min-h-screen bg-background text-foreground p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Recommended Tools</h1>
      {Object.entries(grouped).map(([theme, categories]) => (
        <div key={theme} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{theme}</h2>
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-medium text-muted-foreground mb-2">{category}</h3>
              <ul className="space-y-1 pl-4">
                {items.map((t) => (
                  <li key={t.name}>
                    {t.name} —{" "}
                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                      {t.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
