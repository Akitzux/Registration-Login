
import React from "react";

type LinkItem = {
  name: string;
  url: string;
  icon: React.ElementType;
};

export default function QuickLinksCard({ links }: { links: LinkItem[] }) {
  return (
    <div className="bg-white/90 rounded-xl border shadow-sm p-5 flex flex-col gap-3">
      <h3 className="font-semibold text-foreground mb-1">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.url}
              className="flex gap-2 items-center text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="w-5 h-5" />
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
