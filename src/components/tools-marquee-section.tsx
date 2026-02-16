"use client";

const tools = [
  "Google Cloud",
  "n8n",
  "Voiceflow",
  "Airtable",
  "Zapier",
  "ClickUp",
  "Trello",
  "Monday.com",
  "Notion",
  "ManyChat",
  "Make",
  "WordPress",
  "PrestaShop",
  "Shoper",
  "Shopify",
  "OpenAI",
  "Claude",
  "Python",
  "Stripe",
  "Vapi",
  "ElevenLabs",
  "Google Maps API",
  "Slack",
  "Buffer",
  "Discord",
  "Microsoft",
  "Webflow",
  "HubSpot",
  "Pipedrive",
  "WooCommerce",
  "Bitrix24",
  "Supabase",
  "Hetzner",
];

const midpoint = Math.ceil(tools.length / 2);
const topRow = tools.slice(0, midpoint);
const bottomRow = tools.slice(midpoint);

function MarqueeRow({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  const loopedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-4 py-3 ${
          direction === "right" ? "animate-marquee-right" : "animate-marquee-left"
        }`}
      >
        {loopedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm md:text-base text-white/90 backdrop-blur-sm whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ToolsMarqueeSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section className={embedded ? "bg-transparent pb-3 md:pb-5" : "bg-black pb-8 md:pb-12"}>
      <div className="mx-auto w-full max-w-[1400px] px-0 md:px-4">
        <MarqueeRow items={topRow} direction="right" />
        <MarqueeRow items={bottomRow} direction="left" />
      </div>
    </section>
  );
}

