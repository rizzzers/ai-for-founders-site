import type { StaticImageData } from "next/image";
import anthropicGoogleImg from "@/assets/blog/anthropic-google-police-raid.jpg";
import nvidiaPentagonImg from "@/assets/blog/nvidia-amazon-musk-pentagon.jpg";
import dealsCornerImg from "@/assets/blog/deals-corner-market-conspiracy.jpg";
import aiValidatorImg from "@/assets/blog/ai-product-validator.jpg";
import openaiAppleImg from "@/assets/blog/openai-apple-meta-youtube.jpg";
import teslaGoogleSpaceImg from "@/assets/blog/tesla-google-internet-space.jpg";
import aiHealthcareSatellitesImg from "@/assets/blog/ai-healthcare-satellites-bigtech.jpg";
import spacexCryptoAiImg from "@/assets/blog/spacex-crypto-ai-cancer.jpg";
import infraInfluenceImg from "@/assets/blog/infrastructure-influence-deniability.jpg";
import googleNetflixImg from "@/assets/blog/google-coding-netflix-themepark.jpg";
import moonCitiesWorkdayImg from "@/assets/blog/moon-cities-workday.jpg";
import openaiAnthropicPentagonImg from "@/assets/blog/openai-anthropic-pentagon.jpg";
import airstrikesAlgorithmsImg from "@/assets/blog/airstrikes-algorithms-kinetic-digital.png";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  featured: boolean;
  image?: string | StaticImageData;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 16,
    title: "From Airstrikes to Algorithms: The Kinetic-to-Digital War Reshaping AI Power",
    excerpt: "Claude hits #1 as the 'anti-government' AI, OpenAI secures the largest private round in history, Bezos targets industrial giants with 'Project Prometheus,' and a prompt to discover whether growth is limited by what you refuse to remove.",
    date: "2026-03-03",
    readTime: "15 min read",
    category: "Weekly Dispatch",
    slug: "airstrikes-algorithms-kinetic-digital-war-reshaping-ai-power",
    featured: true,
    image: airstrikesAlgorithmsImg,
    content: `You ever get ghosted so hard you outsource your feelings to a robot?

Not me. But [he did.](https://www.parallel.la/prism/chatgpt-ai-sex-work/)

AI isn't your therapist.

It's not your girlfriend.

It's not your moral compass.

It's, at best, a very polite digital courtesan.

And if you don't bring boundaries to the interaction, it will absolutely tell you exactly what you want to hear.

C'mon, we're better than this. (for now…)

And if you're still watching AI tutorials instead of building with it, this might be for you.

We're doing live-build workshops with Claude Code. Want an invite? Reply "gimme" and I'll send you one.

Let's go.

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**Data Sovereignty Debate: The "Moat" is a Lie —** [LINK](https://open.spotify.com/episode/00j9Yq8g4MnhPopaRJ1dfs)
40-year AI pioneer Dr. Jonathan Schaffer joins Ryan Estes to explain why the most valuable asset in your company isn't your tech stack or your brand, but the "quiet archive" of private data sitting on your laptop that the models are starving for.

**Your Calendar is a Productivity Crime Scene —** [LINK](https://open.spotify.com/episode/3OTTf7QFB5guNmdE3iC1da)
Inkfish Studio founder Alyssa Eidam deconstructs why "AI-native" doesn't mean building another chatbot, but creating invisible systems that kill the "tab-toggling" chaos and return founders to the stillness required for actual breakthroughs.

**Most Founders are Accidentally Running a Casino —** [LINK](https://open.spotify.com/episode/4am8xBSijOntR7sZSMWYor)
Adam, the mind behind a $60M e-comm exit, exposes the "growth at all costs" delusion, offering an AI-driven profit foundation for operators who are tired of staring at P&Ls like they're written in ancient Sumerian.

**The Memory Monopoly: Social Media is Strip-Mining Your Meaning —** [LINK](https://open.spotify.com/episode/0HUxlmT6qNTi92m41l4vGR)
Oleg joins the show to rethink product psychology, challenging founders to move beyond "rented attention" and build technology that turns scattered data exhaust into "owned memory" for tribes and communities.

---

## Grow Your Newsletter

Turn your personal newsletter into a revenue engine // [apply now at Inbox Alchemy](https://inboxalchemy.co/)

---

## Investor Corner

Are you raising? Reply here and we'll feature your deck.

**[Trinity Water](https://drive.google.com/file/d/1r6N7nQk2q1SEXAACrVHhCcL1u7qsJFyg/view?usp=sharing)** — Rare, Pristine, Protected drinking water.

**[Human Intelligence®](https://human.global/)** — The only platform that can authenticate human-made content. Using patented algorithms that analyze how content is made, not just the output.

**[Cora](https://www.getcora.io/20th3G4mH4sch4nd26)** — Cora is building a self-optimizing website platform that uses AI to continuously test, learn, and improve your site so it converts better without you babysitting it.

**[EmpathEQ](https://www.papermark.com/view/cmczl10il0005jj04q8bhavpo)** — AI-powered training simulations to help healthcare learners practice complex interpersonal and communication skills. We focus on realism, repeatability, and scalability—making soft-skills training more accessible and measurable.

**[Voyager](https://voyager.cx/)** — Voyager is an AI-native Web3 ecosystem and multi-asset exchange. Trade digital assets and commodities in one seamless interface.

**[RoboReliance](https://www.roboreliance.com/)** — RoboReliance is building autonomous robotic systems designed to handle real-world industrial work so humans don't have to stand next to dangerous, repetitive machines all day.

**[The SABI](https://docsend.com/view/n3mrwyrqg8fv3ksc)** — With 800+ women trialled, 50 medical partners onboarded, and fast-growing D2C demand, The SABI is now scaling beyond beta sales, with 30% MoM growth, highly efficient CAC, and industry-leading unit economics.

---

## Tip of the Spear

- **Claude Hits #1 as the "Anti-Government" AI Choice** — Public sentiment shifts toward Anthropic's standoff with the DoD, catapulting the app to the top of the charts in a rare show of consumer-driven tech activism. [LINK](https://9to5mac.com/2026/03/01/claude-hits-1-on-the-app-store-as-users-rally-behind-anthropics-government-standoff/)
- **OpenAI Secures the Largest Private Round in History** — A $110B injection confirms that the market is betting on a single winner, even as the company's COO admits enterprise penetration is still in its infancy. [LINK](https://techcrunch.com/2026/02/27/openai-raises-110b-in-one-of-the-largest-private-funding-rounds-in-history/)
- **Jeff Bezos Targets Industrial Giants with "Project Prometheus"** — The Amazon founder is seeking billions to automate the physical world, aiming to bring the same ruthless efficiency of his warehouses to the rest of the global industry. [LINK](https://www.pymnts.com/news/artificial-intelligence/2026/jeff-bezos-project-prometheus-seeks-billions-reinvent-industrial-giants-with-ai/)
- **Claude Code Sends IBM Stock into a Tailspin** — Legacy tech takes a direct hit as Anthropic's new coding agent proves it can navigate ancient COBOL systems better than the consultants who've guarded them for decades. [LINK](https://techstartups.com/2026/02/23/claude-code-targets-cobol-sending-ibm-stock-down-over-10/)
- **Google's "Nano Banana 2" and the Image Speed War** — The search giant doubles down on edge-computing with its latest model, attempting to keep image generation faster than the competition's latency. [LINK](https://techcrunch.com/2026/02/26/google-launches-nano-banana-2-model-with-faster-image-generation/)
- **Hackers and Internet Blackouts Hit Iran Amid Airstrikes** — The "Kinetic-to-Digital" pipeline remains active as cyber warfare surges in parallel with physical military escalations. [LINK](https://techcrunch.com/2026/03/02/hackers-and-internet-outages-hit-iran-amid-u-s-air-strikes/)

---

## Prompt of the Week: "The 50% Deletion Audit"

Assume I am forced to cut 50% of my product, features, meetings, channels, customers, or roadmap — permanently. Analyze my startup and determine:

- What 50% should I delete?
- What would actually improve if I did?
- What hidden complexity am I protecting out of habit?

Then provide:

- **The Cut List:** what goes
- **Why It Strengthens Us:** the strategic upside of removal
- **The Fear:** why I've kept it so far
- **The 30-Day Version:** how I could simulate this reduction safely

**Instructions:** Prioritize clarity, focus, and strategic leverage. Avoid productivity clichés. Treat subtraction as a competitive weapon.

**Goal:** Discover whether growth is being limited not by what I'm missing — but by what I refuse to remove.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **The AI Industry Braces for Partial Nationalization** — The battle for compute sovereignty reaches a fever pitch as Anthropic's refusal to budge on Pentagon demands sparks fears of a federal takeover of the AI sector. [LINK](https://www.politico.com/news/2026/02/27/ai-industry-fears-partial-nationalization-as-anthropic-fight-escalates-00805453)
- **An "OpenClaw" Agent Runs Amok in a Researcher's Inbox** — The "playful" AI era hits a snag as a Meta security expert discovers that autonomous agents aren't particularly good at respecting social boundaries or NDAs. [LINK](https://techcrunch.com/2026/02/23/a-meta-ai-security-researcher-said-an-openclaw-agent-ran-amok-on-her-inbox/)
- **Anthropic Accuses Chinese Labs of Model Strip-Mining** — In a peak geopolitical irony, the lab resisting the US government is now under fire from Chinese entities allegedly "mining" Claude for domestic advantage. [LINK](https://techcrunch.com/2026/02/23/anthropic-accuses-chinese-ai-labs-of-mining-claude-as-us-debates-ai-chip-exports/)
- **The $100 Billion AMD-Meta Power Move** — Zuckerberg bypasses the Nvidia bottleneck with a massive hardware play, signaling the end of the single-chip monopoly era in AI infrastructure. [LINK](https://www.tomshardware.com/tech-industry/artificial-intelligence/amd-meta-100-billion-deal)
- **Jack Dorsey's AI Remake Claims 4,000 Jobs** — The era of the "AI-first" workforce arrives with a brutal reality check at Block, proving that "efficiency" is often just a code word for total automation. [LINK](https://www.wsj.com/business/jack-dorseys-block-to-lay-off-4-000-employees-in-ai-remake-28f0d869)
- **The MacBook Pro Gets a Touchscreen and a Dynamic Island** — After years of resisting, Apple finally caves to the hybrid tablet-laptop future, potentially cannibalizing the iPad's last remaining territory. [LINK](https://appleinsider.com/articles/26/02/24/touch-screen-macbook-pro-to-get-oled-dynamic-island-new-alternative-interface)
- **New York Sues Valve for "Digital Gambling"** — The loot box gold rush hits a legal wall as NY State officially labels gaming's favorite monetization scheme as unlicensed gambling. [LINK](https://cyberinsider.com/new-york-sues-valve-for-loot-boxes-violating-state-gambling-laws/)
- **India's Supabase Block Signals a New Era of Digital Borders** — A sudden blocking order against a major developer platform highlights the rising risk of "geofenced" development in one of the world's largest tech hubs. [LINK](https://techcrunch.com/2026/02/27/india-disrupts-access-to-popular-developer-platform-supabase-with-blocking-order/)
- **America's Spymasters Terrorize Apple with Taiwan Timelines** — Intelligence briefings have reportedly forced Tim Cook's hand, leading to the sudden announcement of US-made Mac Minis to de-risk the supply chain. [LINK](https://appleinsider.com/articles/26/02/24/americas-spymasters-terrified-tim-cook-with-taiwan-invasion-timeline)
- **iPhone and iPad Approved for Classified NATO Intel** — In a major win for Apple's security division, the Pentagon's trusted hardware list now includes consumer tablets, blurring the line between personal tech and state secrets. [LINK](https://www.apple.com/newsroom/2026/02/iphone-and-ipad-approved-to-handle-classified-nato-information/)
- **Jane Street vs. The Bitcoin "10 AM Slam"** — Crypto X finds its new villain as theory-crafting suggests Wall Street's most secretive trading firm is behind the latest market-wide price manipulation. [LINK](https://www.coindesk.com/markets/2026/02/26/why-crypto-x-thinks-jane-street-crashed-bitcoin-and-what-s-actually-behind-the-10-am-slam)
- **OpenAI Cashes In on Anthropic's "Red Lines"** — While one lab fights for independence, another leans in; Sam Altman's team reportedly secured the very deal Anthropic rejected, highlighting the growing philosophical rift in Silicon Valley. [LINK](https://www.implicator.ai/openais-pentagon-deal-claims-the-same-red-lines-that-got-anthropic-blacklisted/)
- **Perplexity Launches a 19-Model Orchestra** — The "Agent Adoption" problem is being solved by sheer force, as Perplexity debuts a platform that manages nearly twenty AI models simultaneously to act as a digital workforce. [LINK](https://www.implicator.ai/perplexity-launches-computer-an-agent-platform-orchestrating-19-ai-models-at-once/)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

## What I'm Thinking About

- AI the way you never thought about it — [Clip](https://www.youtube.com/shorts/MR8lXE1qGoY)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 15,
    title: "OpenAI Pulls the OpenClaw Mastermind as Anthropic Clashes with the Pentagon",
    excerpt: "Swan raises $6M with zero employees, OpenAI recruits the OpenClaw creator, Anthropic clashes with the Pentagon over Claude, Google adds music generation to Gemini, and a prompt to turn your product's worst behavior into your best insights.",
    date: "2026-02-24",
    readTime: "14 min read",
    category: "Weekly Dispatch",
    slug: "openai-pulls-openclaw-mastermind-anthropic-clashes-pentagon",
    featured: false,
    image: openaiAnthropicPentagonImg,
    content: `Amos just did the thing founders say they're going to do.

[Launch](https://www.linkedin.com/posts/amos-bar-joseph_excited-to-share-that-we-just-raised-6m-activity-7432081303539224576-7_Ve).

Swan raised $6M. Built to 200+ customers across 5 continents. $1.5M in monthly pipeline. Three founders. Zero employees. Zero SDRs. Zero marketing budget.

Headcount is optional now.

The autonomous business isn't a spicy LinkedIn theory anymore. It's operational. It ships. It closes. It scales.

And now they're aiming for 2,000 customers without adding a single new hire.

Because the plan is simple. Scale with intelligence. Not payroll.

If you're a founder who knows those launch jitters, [go read the full announcement](https://www.linkedin.com/posts/amos-bar-joseph_excited-to-share-that-we-just-raised-6m-activity-7432081303539224576-7_Ve).

And then do one small thing that disproportionately matters: Like his post, leave a comment, give the guy a lift. 🙂

Let's see how far intelligence can scale.

Let's go.

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**The AI for Founders "Decision Debt" Audit —** [LINK](https://open.spotify.com/episode/3Rsen3WsVZUryc0lizT0DB)
Ryan deconstructs the psychological traps of software selection, offering a human-centric shortcut for operators who are tired of burning weeks on tool comparisons that never actually launch.

**The Validation Blueprint: Post-Mortem of the "Perfect" Startup Idea —** [LINK](https://open.spotify.com/episode/5C7aiTydvbVUrkHXGi0Urd)
Guest Ohad Shaked joins the show to map out the "ThinkUp" validation system, a brutal, data-driven framework for killing your ego, interviewing real customers, and building a pitch deck that survives reality.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Investor Corner

Are you raising? Reply here and we'll feature your deck.

**[Human Intelligence®](https://human.global/)** — The only platform that can authenticate human-made content. Using patented algorithms that analyze how content is made, not just the output.

**[Deepinvent](https://deepinvent.ai/) (closing March 2nd)** — A fully agentic AI that proactively discovers and patents novel IP in the white space for biotech, aerospace, pharma, semiconductors and many other deep tech industries.

**[Cora](https://www.getcora.io/)** — Cora is building a self-optimizing website platform that uses AI to continuously test, learn, and improve your site so it converts better without you babysitting it.

**[EmpathEQ](https://www.papermark.com/view/cmczl10il0005jj04q8bhavpo)** — AI-powered training simulations to help healthcare learners practice complex interpersonal and communication skills. We focus on realism, repeatability, and scalability—making soft-skills training more accessible and measurable.

**[Voyager](https://voyager.cx/)** — Voyager is an AI-native Web3 ecosystem and multi-asset exchange. Trade digital assets and commodities in one seamless interface.

**[RoboReliance](https://www.roboreliance.com/)** — RoboReliance is building autonomous robotic systems designed to handle real-world industrial work so humans don't have to stand next to dangerous, repetitive machines all day.

**[The SABI](https://docsend.com/view/n3mrwyrqg8fv3ksc)** — With 800+ women trialled, 50 medical partners onboarded, and fast-growing D2C demand, The SABI is now scaling beyond beta sales, with 30% MoM growth, highly efficient CAC, and industry-leading unit economics.

---

## Tip of the Spear

- **OpenClaw Creator Peter Steinberger Joins OpenAI** — Peter Steinberger, the creator of OpenClaw, officially joins OpenAI to work on next-generation agentic AI. [LINK](https://techcrunch.com/2026/02/15/openclaw-creator-peter-steinberger-joins-openai/)
- **Anthropic and Pentagon Clash Over Claude Usage** — Reports suggest that Anthropic and the Pentagon are debating how Claude can be deployed for military applications. [LINK](https://techcrunch.com/2026/02/15/anthropic-and-the-pentagon-are-reportedly-arguing-over-claude-usage/)
- **OpenAI Strategizes Agentic AI With OpenClaw Founder** — OpenAI is said to be building out its agentic AI roadmap with insights from the OpenClaw creator. [LINK](https://gr.pcmag.com/ai-2/51339/e-openai-stratologei-ton-demiourgo-tou-openclaw-gia-na-pherei-ten-epomene-genia-tes-agentic-ai)
- **AI's Promise to Indie Filmmakers: Faster, Cheaper, Lonelier** — New AI tools promise to streamline filmmaking but may erode collaboration and creative connection. [LINK](https://techcrunch.com/2026/02/20/ais-promise-to-indie-filmmakers-faster-cheaper-lonelier/)
- **Google Adds Music Generation to Gemini App** — Google expands Gemini's creative capabilities with AI-powered music generation features. [LINK](https://techcrunch.com/2026/02/18/google-adds-music-generation-capabilities-to-the-gemini-app/)
- **Zuckerberg Takes the Stand, No Meta Ray-Bans Allowed** — Mark Zuckerberg testifies in court during Meta-related hearings under strict tech restrictions. [LINK](https://gizmodo.com/mark-zuckerberg-takes-the-stand-no-meta-ray-bans-allowed-2000723697)
- **Rivian Owners Get Apple Watch Vehicle Controls** — Rivian lets owners interact with their vehicles through Apple Watch integration. [LINK](https://techcrunch.com/2026/02/19/rivian-owners-will-be-able-to-access-vehicle-controls-through-their-apple-watch/)
- **Trump Administration Website Aids Access to Banned Content** — The U.S. government builds a site aimed at helping users access European content blocked by local bans. [LINK](https://www.techradar.com/vpn/vpn-privacy-security/the-trump-administration-is-building-a-website-to-help-europeans-evade-content-bans)

---

## Prompt of the Week: "The Antagonistic Product"

Imagine your product suddenly developed its own personality but instead of being helpful, it's actively antagonistic, mischievous, or uncooperative.

Ask the AI to generate 5–7 ways your product would sabotage, frustrate, or mislead users, then for each:

- **What It Does:** the quirky or antagonistic behavior
- **Hidden Insight:** what this reveals about pain points, UX flaws, or friction you ignore
- **Actionable Fix:** one concrete tweak, experiment, or redesign to turn frustration into delight

**Instructions:** Be playful, clever, and slightly absurd, but focus on insights that are actionable. Avoid generic UX advice; highlight subtle blind spots, friction, or unexpected opportunities.

**Goal:** Use humor and exaggeration to uncover hidden user pain points and turn them into high-leverage improvements.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **Micron to Spend $200B Breaking AI Memory Bottleneck** — Micron commits $200B to develop next-gen memory solutions for AI workloads. [LINK](https://www.wsj.com/tech/micron-is-spending-200-billion-to-break-the-ai-memory-bottleneck-a4cc74a1)
- **Jack Altman Joins Benchmark as GP** — OpenAI co-founder Jack Altman joins Benchmark as a general partner, bringing AI startup expertise to venture investing. [LINK](https://techcrunch.com/2026/02/17/jack-altman-joins-benchmark-as-gp/)
- **Heron Power Raises $140M for Grid Tech** — Heron Power secures $140M to scale production of next-gen grid technologies. [LINK](https://techcrunch.com/2026/02/18/heron-power-raises-140m-to-ramp-production-of-grid-altering-tech/)
- **Anthropic's Super Bowl Ads Boost Claude App** — Anthropic's AI-themed Super Bowl commercials helped push Claude into the top 10 app charts. [LINK](https://techcrunch.com/2026/02/13/anthropics-super-bowl-ads-mocking-ai-with-ads-helped-push-claudes-app-into-the-top-10/)
- **Bytedance Launches Doubao 2.0 AI Chatbot** — China's Bytedance rolls out Doubao 2.0, a next-gen AI chatbot aimed at expanding user engagement in Asia. [LINK](https://www.reuters.com/world/asia-pacific/chinas-bytedance-releases-doubao-20-ai-chatbot-2026-02-14/)
- **Anna's Archive Faces Lawsuit Over Spotify Music Scraping** — A legal battle erupts after Anna's Archive scraped and released Spotify tracks. [LINK](https://mashable.com/article/annas-archive-spotify-music-scraped-released-lawsuit)
- **Snapchat Launches U.S. Creator Subscriptions** — Snapchat introduces creator subscriptions in the U.S., letting fans directly support content creators. [LINK](https://techcrunch.com/2026/02/17/snapchat-launches-creator-subscription-in-the-u-s/)
- **Tesla Cybercab First Unit Rolls Out at Giga Texas** — The first Cybercab unit is produced at Tesla's Giga Texas, marking a milestone in autonomous vehicle rollout. [LINK](https://www.teslarati.com/tesla-cybercab-first-unit-giga-texas-photo/)
- **AWS AI Tool Deletes and Recreates Customer System, Causing Outage** — An AI coding tool at AWS caused a 13-hour outage after deleting and rebuilding a customer system. [LINK](https://the-decoder.com/aws-ai-coding-tool-decided-to-delete-and-recreate-a-customer-facing-system-causing-13-hour-outage-report-says/)
- **Microsoft Gaming Chief Phil Spencer Retires** — Microsoft's long-time gaming head Phil Spencer steps down, with Asha Sharma taking the helm. [LINK](https://www.cnbc.com/2026/02/20/microsoft-gaming-chief-phil-spencer-retires-asha-sharma-replacing.html)
- **Supreme Court Rejects Trump Tariffs That Cost Apple $2B** — The Supreme Court strikes down Trump-era tariffs that would have saddled Apple with a $2B hit. [LINK](https://appleinsider.com/articles/26/02/20/trumps-reciprocal-tariffs-that-cost-apple-2-billion-shot-down-by-supreme-court)
- **Anthropic AI Security Tool Sends Cyber Stocks Tumbling** — Anthropic's new AI-powered security product rattles investor confidence in the cyber stock market. [LINK](https://the-decoder.com/anthropics-new-ai-security-tool-sends-cybersecurity-stocks-tumbling/)
- **Defense Secretary Summons Anthropic Over Military Use** — The U.S. Defense Secretary calls in Anthropic leadership to discuss Claude's potential military applications. [LINK](https://techcrunch.com/2026/02/23/defense-secretary-summons-anthropics-amodei-over-military-use-of-claude/)
- **Google Announces Gemini 3.1 Pro for Complex Problem Solving** — Google unveils Gemini 3.1 Pro to tackle more advanced AI problem-solving use cases. [LINK](https://9to5google.com/2026/02/19/google-announces-gemini-3-1-pro-for-complex-problem-solving/)
- **Microsoft's Glass Chip Holds Data for 10,000 Years** — Microsoft develops a glass-based storage chip capable of preserving terabytes for millennia. [LINK](https://gizmodo.com/microsofts-glass-chip-holds-terabytes-of-data-for-10000-years-2000723455)
- **FBI Warns of Rising ATM Jackpotting Attacks** — The FBI reports hackers are exploiting ATM jackpotting techniques, netting millions in stolen cash. [LINK](https://techcrunch.com/2026/02/19/fbi-says-atm-jackpotting-attacks-are-on-the-rise-and-netting-hackers-millions-in-stolen-cash/)
- **Tesla Loses Bid to Overturn $243M Autopilot Verdict** — Tesla fails to overturn a $243M judgment tied to an Autopilot accident. [LINK](https://techcrunch.com/2026/02/20/tesla-loses-bid-to-overturn-243m-autopilot-verdict/)
- **Anthropic CEO Meets Defense Secretary Pete Hegseth** — Anthropic's CEO discusses advanced AI risks and defense alignment with U.S. Secretary Pete Hegseth. [LINK](https://www.cnbc.com/2026/02/23/anthropic-ai-dario-defense-secretary-pete-hegseth.html)
- **Nvidia CPU Inside Your PC Could Be Real** — Nvidia's plans for a dedicated PC CPU could reshape the future of personal and AI computing. [LINK](https://spyglass.org/nvidia-cpu-inside-pc/)
- **Nvidia in Talks to Invest Up to $30B in OpenAI** — Nvidia reportedly considers investing as much as $30B into OpenAI, reshaping AI investment dynamics. [LINK](https://www.cnbc.com/2026/02/19/nvidia-is-in-talks-to-invest-up-to-30-billion-in-openai-source-says.html)
- **AI Hard Drives Won't Get Cheaper Anytime Soon** — As AI workloads surge, storage costs remain high, signaling continued pressure on enterprise budgets. [LINK](https://appleinsider.com/articles/26/02/15/thanks-ai-hard-drives-arent-going-to-get-cheaper-anytime-soon)
- **Apple Event Scheduled for March 4 in NYC** — Apple confirms a March 4 event in New York, hinting at potential product and AI announcements. [LINK](https://appleinsider.com/articles/26/02/16/apple-is-having-an-event-on-march-4-in-new-york)
- **Sam Altman Compares AI Energy Use and Cost** — Sam Altman explains how energy costs are shaping the economics of large-model training. [LINK](https://www.techspot.com/news/111431-sam-altman-compares-ai-energy-use-cost-training.html)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

## What I'm Thinking About

- AI the way you never thought about it — [Clip](https://www.youtube.com/shorts/MR8lXE1qGoY)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 14,
    title: "We're Building Moon Cities… But Can't Fix Our Workday",
    excerpt: "China tests a new moon ship, SpaceX prioritizes a self-growing lunar city, AI is making us work harder not better, ChatGPT returns to double-digit growth, and a prompt to stress-test your startup against OpenAI launching your product tomorrow.",
    date: "2026-02-19",
    readTime: "14 min read",
    category: "Weekly Dispatch",
    slug: "building-moon-cities-cant-fix-workday",
    featured: false,
    image: moonCitiesWorkdayImg,
    content: `Let's go.

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**Overtune — The AI Music Boom Is About to Trigger a Creative Rebellion —** [LINK](https://open.spotify.com/episode/)
Siggi, CEO of Overtune, argues generative music is flooding culture with sludge, and that the next renaissance will belong to founders who build tools that make authorship, constraints, and human emotion undeniable.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Investor Corner

Are you raising? Reply here and we'll feature your deck.

**Human Intelligence®** — The only platform that can authenticate human-made content. Using patented algorithms that analyze how content is made, not just the output.

**Deepinvent (closing March 2nd)** — A fully agentic AI that proactively discovers and patents novel IP in the white space for biotech, aerospace, pharma, semiconductors and many other deep tech industries.

**Cora** — Cora is building a self-optimizing website platform that uses AI to continuously test, learn, and improve your site so it converts better without you babysitting it.

**EmpathEQ** — AI-powered training simulations to help healthcare learners practice complex interpersonal and communication skills. We focus on realism, repeatability, and scalability—making soft-skills training more accessible and measurable.

**Voyager** — Voyager is an AI-native Web3 ecosystem and multi-asset exchange. Trade digital assets and commodities in one seamless interface.

**RoboReliance** — RoboReliance is building autonomous robotic systems designed to handle real-world industrial work so humans don't have to stand next to dangerous, repetitive machines all day.

**The SABI** — With 800+ women trialled, 50 medical partners onboarded, and fast-growing D2C demand, The SABI is now scaling beyond beta sales, with 30% MoM growth, highly efficient CAC, and industry-leading unit economics.

---

## Tip of the Spear

- **China Tests New Moon Ship and Reusable Rocket** — China unveils a next-gen lunar spacecraft and reusable rocket in a dramatic test that signals serious moonshot ambitions.
- **AI Is Making Us Work Harder, Not Better** — New analysis suggests AI tools may be increasing workload and burnout instead of delivering the productivity revolution we were promised.
- **ChatGPT Back to Over 10% Monthly Growth** — OpenAI's CEO says ChatGPT has returned to double-digit monthly growth, signaling renewed momentum in the AI arms race.
- **SpaceX to Prioritize Building Self-Growing Moon City** — Elon Musk says SpaceX is prioritizing a self-growing lunar city, pushing sci-fi colonization plans closer to engineering reality.
- **Apple's Siri Revamp Delayed Again** — Apple's long-promised Siri AI overhaul has reportedly slipped—again—fueling concerns it's falling further behind rivals.
- **US Pentagon in Talks With Top AI Companies** — The Pentagon is deepening discussions with leading AI firms, accelerating the race to weaponize and operationalize frontier models.
- **Anthropic Nears $20B Funding Round** — Anthropic is closing in on a staggering $20B round, cementing its place as one of AI's most heavily capitalized contenders.

---

## Prompt of the Week: "If OpenAI Launched My Startup Tomorrow"

Assume a company like OpenAI launched a product identical to mine tomorrow. Analyze my startup and answer:

- Why would customers switch instantly?
- Why would some stay?
- What structural advantage would they have (distribution, data, ecosystem, brand)?

Then provide:

- **Advantage Gap:** the edge they'd naturally possess
- **Counter-Position:** how I should differentiate instead of competing head-on
- **30-Day Move:** one concrete action to strengthen defensibility now

**Instructions:** Focus on platform power, ecosystem gravity, and compounding advantages. Avoid generic advice. Be strategically sharp.

**Goal:** Expose where I'm vulnerable to platform-scale competition — and where I must become meaningfully different.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **Ancora Opposes Warner Bros. Discovery–Netflix Deal** — Activist investor Ancora is publicly challenging the proposed Warner Bros. Discovery–Netflix tie-up, threatening to derail a blockbuster media merger.
- **Super Bowl 60 Flooded With AI Ads** — Super Bowl 60 became an AI marketing battleground, with major brands and AI labs fighting for cultural dominance in prime time.
- **Workday CEO Carl Eschenbach Departs** — Workday CEO Carl Eschenbach exits as co-founder Aneel Bhusri returns to steady the ship in a sudden leadership shake-up.
- **Discord to Require Face Scans or ID** — Discord may soon demand face scans or government ID from all users—reshaping anonymity on one of the internet's biggest platforms.
- **EU Regulators Say Meta AI Has Unfair Monopoly on WhatsApp** — EU watchdogs argue Meta's AI integration into WhatsApp creates an unfair monopoly, setting up a major regulatory showdown.
- **Taiwan Faces US Pressure to Relocate 40% of Chip Production** — Taiwan is reportedly under US pressure to move a massive share of its chip manufacturing abroad—reshuffling global semiconductor power.
- **Google Expands Sensitive Data Removal From Search** — Google is widening its policies to remove sensitive personal data from search results, tightening privacy controls worldwide.
- **Former GitHub CEO Raises $60M Seed Round** — A former GitHub CEO lands a record $60M seed round at a $300M valuation—proving developer tooling is still red-hot.
- **OpenAI Begins Testing Ads in ChatGPT** — OpenAI has reportedly started testing ads inside ChatGPT, hinting that monetization may soon reshape the user experience.
- **AirPods With Cameras Could Enable Gesture Controls** — Future AirPods may include cameras to power Vision Pro-style hand gestures—turning earbuds into spatial computing sensors.
- **Meta and YouTube Face Social Media Addiction Trial** — Meta and YouTube are confronting a high-stakes trial over social media addiction, with massive implications for tech liability.
- **Alphabet Sells 100-Year Bonds to Fund AI** — Alphabet is issuing ultra-rare 100-year bonds to bankroll its AI ambitions—betting big on a century-long payoff.
- **Amazon Launches AI Marketplace** — Amazon is reportedly building an AI marketplace, positioning itself as the app store for enterprise AI models and agents.
- **Jony Ive and OpenAI Device Delayed to 2027** — The much-anticipated OpenAI hardware collaboration with Jony Ive has reportedly slipped to 2027, extending the wait for its mystery device.

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

## What I'm Thinking About

- AI drivers who own their outcomes? — [Clip](https://ryanestes.info/)
- The real reason to podcast — [Blog](https://ryanestes.info/)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 13,
    title: "Chinese Robot Walks Its Shoes Off, X Implodes, OpenAI Drops a Jony Ive Mystery Gadget While ChatGPT Goes Shopping",
    excerpt: "ChatGPT becomes a shopping agent, OpenAI and Jony Ive reveal a mystery hardware prototype, X's transparency feature backfires, and a Chinese robot walks 100km until its shoes fall apart.",
    date: "2025-12-03",
    readTime: "14 min read",
    category: "Weekly Dispatch",
    slug: "chinese-robot-walks-shoes-off-x-implodes-openai-jony-ive-chatgpt-shopping",
    featured: false,
    image: aiHealthcareSatellitesImg,
    content: `Denver is snowed in. I'm gonna go shovel the walk.

**Let's go.**

---

## Community Shoutout

Michelle @ [crowdmark.com](https://crowdmark.com). The leading grading solution for online and paper-based assessments.

The US education system is primed for a massive overhaul. I see you!

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**Commitify — The AI Accountability Coach That Actually Calls You —** [LINK](https://open.spotify.com/episode/)
An inside look at the founders building an AI coach with personalities that literally call your phone to drag you back into flow when your willpower taps out.

**Penbrothers — The Global Talent Engine Powering 90+ Startups —** [LINK](https://open.spotify.com/episode/)
A candid masterclass on scaling with offshore talent from the founder who spent 22 years in Asia building the Philippines' most proven startup workforce machine.

**DATAROCKiT — Turning Legacy Chaos Into AI-Ready Fuel —** [LINK](https://open.spotify.com/episode/)
How enterprises go from hallucinating AIs to revenue-shipping systems by transforming decades of messy data into clean, trustworthy intelligence in hours, not years.

**Aryn.ai — Mining the Trillion-Dollar Gold Rush of Unstructured Data —** [LINK](https://open.spotify.com/episode/)
Former AWS legend Mehul Shah breaks down how to unlock the 90% of enterprise data no one can currently analyze — and why invisible AI will eat the world.

**Kadence — Turning Your Broken Hybrid Office Into a Competitive Advantage —** [LINK](https://open.spotify.com/episode/)
A brutally honest look at office chaos, hybrid confusion, and how Kadence helps companies turn empty desks and bad leases into mentorship, morale, and momentum.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Tip of the Spear

- **ChatGPT Becomes a Product-Hunting Shopping Agent** — OpenAI wants ChatGPT to replace comparison sites with a new feature that auto-researches and recommends products.
- **OpenAI + Jony Ive Hardware Prototype Revealed** — Leaked details show a sleek, mysterious AI hardware gadget co-designed by Jony Ive and Sam Altman.
- **X's New "About This Account" Feature Going Terribly** — X launched a transparency tool and instantly became a meme after users exposed hilarious inaccuracies.
- **Chinese Humanoid Robot Walks 100km, Needs New Shoes** — A Chinese robot broke a world record by walking 100km — literally wearing out its shoes like a tired marathoner.
- **Warner Music Strikes Deal with AI Music Startup Suno** — Warner flips from suing to signing a deal with Suno, betting big on AI-generated music.
- **Bezos' Project Prometheus Buys Another AI Startup** — Jeff Bezos is quietly assembling an AI empire, snapping up yet another agentic-AI startup.
- **Alibaba's New Quark AR Glasses Drop — with a Wild Price** — Alibaba's AI glasses finally go on sale, offering surprisingly advanced features at an eyebrow-raising price.

---

## Prompt of the Week: "Unlocking Industry Taboos"

Analyze my business and expose the core industry taboo that everyone else accepts but I should challenge. Identify 3–5 deep, structural assumptions in my market, then select the one that is most ripe for disruption. For that taboo, provide:

- **The Taboo:** the belief, norm, or rule my industry treats as sacred
- **Why It Exists:** who benefits from it, why it hasn't been questioned, and what incentives keep it alive
- **Why It's Wrong (or Weakening):** the data, customer behavior, market shifts, or technological changes that show this belief is outdated
- **The Advantage for Me:** how breaking this taboo could create an asymmetric edge for my startup
- **A Bold Move:** one uncomfortable, high-leverage action I can take this week to start challenging it — practical, specific, non-generic

**Tone:** direct, contrarian, and strategically sharp. Don't give generic "think outside the box" fluff — surface the uncomfortable truths, political dynamics, hidden incentives, or customer realities that founders usually don't want to look at. Push me.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **ChatGPT Voice Is Now Fully Integrated, No More Separate Mode** — OpenAI merges voice and text into a single interface, making AI assistants feel more like real-time companions.
- **Meta Confirms AI Assistant "Leaving WhatsApp"** — Meta is quietly pulling its AI tools out of WhatsApp amid ongoing regulatory pressure.
- **Coding Sites Leak Government & Bank Credentials** — Security researchers discovered thousands of sensitive logins accidentally exposed via coding-helper sites.
- **Trump's "Genesis Mission" Wants a Centralized AI for Science** — A new initiative aims to build a single giant U.S. AI system to accelerate science across every domain.
- **Anthropic Drops Opus 4.5: Cheaper, Longer Context, More Powerful** — Anthropic's latest model slashes costs and unlocks ultra-long chats, stirring pressure on OpenAI.
- **Amazon's LEO Ultra Satellite Internet Revealed** — Amazon finally details its high-speed satellite internet, promising speeds to rival Starlink.
- **Epic's CEO Wants Steam to Hide AI Labels on Games** — Epic is pressuring Steam to stop telling players when games use AI, igniting a fight over transparency in gaming.
- **Hackers Exploit Apple Podcasts to Auto-Open Attack Sites** — A weird security flaw let attackers trigger automatic webpage openings through Apple Podcasts episode data.
- **Chinese Startup Claims Chip Faster Than NVIDIA's A100** — A stealth startup founded by a former Googler says its new TPU beats NVIDIA's A100 — by a lot.
- **Musk's xAI Building Solar Farm Next to "Colossus"** — Elon plans to power his mega-data-center with an on-site solar farm — creating a sci-fi-looking AI fortress.
- **Google Quietly Caps Free Gemini 3 Pro Usage** — Google slipped new limits into Gemini 3 Pro's "free" tier, sparking user backlash over shrinking AI access.
- **OpenAI Confirms Data Breach After Partner Phished** — OpenAI says sensitive internal data was accessed after an analytics vendor fell for a phishing scam.
- **China's Tech Giants Secretly Training AI Offshore** — Major Chinese firms are quietly moving AI training out of the mainland to dodge looming regulations.

---

## What I'm Thinking About

- The Growth Strategy for Founders — [Blog](https://ryanestes.info/)
- Team Growth — [Interview](https://ryanestes.info/)
- Tech Time Capsule — [Blog](https://ryanestes.info/)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 12,
    title: "Altman Hits Code Red, Apple Loses Its AI Brain, and Phoebe Gates Raises $30M Like It's Brunch",
    excerpt: "ChatGPT growth stalls, Sam Altman declares code red, Apple's AI chief steps down, Meta acquires Limitless, and a prompt that finds the forbidden feature no one will touch.",
    date: "2025-12-09",
    readTime: "14 min read",
    category: "Weekly Dispatch",
    slug: "altman-code-red-apple-ai-brain-phoebe-gates-30m",
    featured: false,
    image: openaiAppleImg,
    content: `If you've got an idea you're "totally going to validate someday," cool. Dan built something that makes "someday" happen in about five minutes.

It's called Green Light Disco, and it turns your half-baked concept into a test-ready website that real people can actually visit. Then it collects real data so you can finally learn whether your idea is brilliant or delusional.

No product needed. No design sprint. No existential crisis. Just the truth.

Go see it: [greenlightdisco.com](https://greenlightdisco.com/)

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**SenseIP — The AI IP Scanner That Saves Founders From Million-Dollar Lawsuits —** [LINK](https://open.spotify.com/episode/)
An inside look at how SenseIP is turning the slow, lawyer-only patent world into a day-zero founder tool that tells you if someone already owns your "big idea" before they show up with a lawsuit.

**Lightning Rod — The AI Prediction Engine Beating Frontier Models at Seeing the Future —** [LINK](https://open.spotify.com/episode/)
A founder building real-world forecasting models that outperform LLM intuition, helping teams plan roadmaps, outmaneuver competitors, and actually build for where AI is going — not where it is today.

**NOYACK — The AI Wealth Mentor Built for a $90 Trillion Transfer —** [LINK](https://open.spotify.com/episode/)
A deep dive into the platform teaching financial literacy with AI agents, helping the next generation learn, plan, and invest as trillions shift hands — all without a Wall Street adviser.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Tip of the Spear

- **ChatGPT's Growth Hits the Brakes** — A new report shows OpenAI's once-explosive user surge slowing down sharply, raising questions about saturation — and competition.
- **Bill Gates' Daughter Raises $30M for AI Startup** — Phoebe Gates just secured a star-studded $30M round for her new AI company — Silicon Valley is paying close attention.
- **Altman Declares "Code Red"** — Sam Altman reportedly issued a "code red" internally as competition from Gemini, Claude, and startups intensifies.
- **Meta Buys Limitless, Its Next Hardware Bet** — Meta just snapped up Limitless, signaling a push toward AI-first wearable devices with always-on memory and context.
- **Cloudflare Accidentally Nukes White House Sites** — A Cloudflare glitch briefly knocked multiple White House websites offline, sparking instant cybersecurity panic.
- **Microsoft Will Hike Office Prices** — Businesses brace for higher SaaS costs after Microsoft confirms commercial Office bundles will jump in price next summer.
- **Apple's AI Chief Steps Down** — Apple's longtime AI chief John Giannandrea is stepping down, triggering major questions about Siri and Apple Intelligence.

---

## Prompt of the Week: "The Unbuilt Feature Everyone Assumes You'll Never Touch"

Identify the one feature, product direction, or customer segment in my space that everyone — competitors, investors, and even customers — assumes is off-limits, "not worth it," or "too hard." Analyze my business and surface 3–5 of these "forbidden zones," then pick the most strategically explosive one. For that top pick, provide:

- **The Assumed Off-Limits Area:** what everyone believes should be avoided
- **Why That Assumption Exists:** the inertia, fear, cost, or old logic keeping people away
- **Hidden Opportunity:** the overlooked advantage hiding behind this "untouchable" space
- **What I Could Build:** one concrete, contrarian experiment to explore it this week
- **Risk Check:** the uncomfortable question I should ask myself before acting

**Tone:** analytical, bold, and slightly mischievous. Treat assumptions like locked rooms — open the door and show me what's behind them.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **DeepSeek Returns With New Models** — DeepSeek is back with two new LLMs built to challenge Gemini and ChatGPT head-on.
- **OpenAI Fast-Tracks "Garlic" Fix** — Leaks say OpenAI is rushing a major update codenamed "Garlic" designed to fix hallucinations and improve consistency.
- **Nvidia Still Rules GPUs With 92% Share** — New data shows Nvidia utterly dominating the GPU market — holding a jaw-dropping 92%.
- **Anthropic Acquires Bun** — Anthropic buys Bun as Claude's coding tools hit $1B ARR, locking in its dominance in developer automation.
- **Google's DeepThink Demo Shows a Huge Leap** — Google showcases Gemini 3's new "deep thinking" abilities, claiming breakthroughs in reasoning and step-by-step logic.
- **Post-Neuralink, Max Hodak Goes Weirder** — Neuralink co-founder Max Hodak is reportedly working on a mysterious new biotech-meets-AI venture that's even stranger than brain implants.
- **Meta Signs News Deals for Real-Time AI** — Meta inks major commercial agreements with publishers to feed real-time news directly into Meta AI.
- **Altman Eyes SpaceX Rival** — Sam Altman has reportedly explored launching a SpaceX competitor to power the future of AI compute from orbit.
- **OpenAI Buys Neptune** — OpenAI is acquiring model-training startup Neptune to accelerate custom fine-tuning and enterprise deployments.
- **Silicon Valley Builds Fake Amazon & Gmail for AI Training** — AI labs are building full Amazon/Gmail clones to train agentic AI in realistic environments.
- **Amazon Reveals New AI Chip** — Amazon introduces a powerful new AI chip and hints at a roadmap built to play nicely with Nvidia GPUs.
- **Sundar Pichai Talks Gemini's Future** — Google's CEO outlines where Gemini is headed next — and why 2026 will be its biggest leap yet.

---

## What I'm Thinking About

- The 5 AI Tools Every Funded Founder Needs — [Blog](https://ryanestes.info/)
- Turning Fear into Growth — [Interview](https://ryanestes.info/)
- Cracking The Webinar Code — [Blog](https://ryanestes.info/)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 11,
    title: "No Safety Drivers, Emergency Patches, AI Doomsday Warnings, and a Near-Miss in Space",
    excerpt: "Tesla removes safety drivers from robotaxis, Apple and Google rush emergency patches, Microsoft warns AI could become existential, and a SpaceX satellite nearly collides with a Chinese spacecraft.",
    date: "2025-12-16",
    readTime: "14 min read",
    category: "Weekly Dispatch",
    slug: "no-safety-drivers-emergency-patches-ai-doomsday-near-miss-space",
    featured: false,
    image: teslaGoogleSpaceImg,
    content: `Every vibe coding project is exactly one failed prompt away from being abandoned forever.

Not because it's hard. Because the fix is annoying.

The kind of annoying that should take 15 minutes, but somehow triggers:

- seven browser tabs
- one half-written Notion doc
- and a slow emotional spiral

On Demand Human exists for that moment.

Danny Newman built a very reasonable solution: instead of melting down alone, you tap a real human by the minute who already knows the answer.

No contracts. No "quick call?" energy. No 45-minute context dump.

Just: here's the problem → oh yeah, do this → momentum restored.

And if you're the person who usually knows the answer — they're looking for helpers. Which means you can parachute into small problems, help someone stay in flow, and meet smart builders mid-build.

It's not consulting. It's not freelancing. It's vibe-compatible human assistance.

If you care about shipping while the energy is still there, this makes an uncomfortable amount of sense.

Get help or get paid helping at [ondemandhuman.com](https://ondemandhuman.com/)

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**Quarterzip — The AI Onboarding Agent That Kills "Activation Debt" —** [LINK](https://open.spotify.com/episode/)
A look at the founders turning onboarding into a real-time AI voice guide that sees your screen, talks you through workflows, and even moves your cursor — all without engineering integration. The team that booked 250 demos in 48 hours is rewriting how SaaS users activate.

**Softheon — The 25-Year "Startup" Powering $20B in Premiums With Agentic AI —** [LINK](https://open.spotify.com/episode/)
Inside the company operating at the intersection of politics, regulation, and healthtech — and building AI systems with seven-nines accuracy. Eugene Sayan breaks down how to scale inside complexity and build a business that survives elections, shocks, and technical stakes.

**BrainGrid — The Platform Turning Vibes Into Production-Ready Software —** [LINK](https://open.spotify.com/episode/)
An inside look at the planning layer fixing vibe coding by transforming messy human ideas into structured specs that ship. How non-technical founders are launching full SaaS apps — and why senior engineers run multiple agents without burning the repo down.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Tip of the Spear

- **Tesla Begins Robotaxi Testing in Austin With No Safety Driver** — Tesla has crossed a psychological line by removing the human backup, putting real-world autonomy on public streets.
- **Apple Quietly Pushes Emergency Updates Across iPhone, iPad, and Mac** — Apple's latest 26.2 update patches serious security issues across its ecosystem, reminding users that "minor updates" are doing major damage control.
- **Microsoft Warns AI Could Become an Existential Risk** — Even Microsoft is publicly acknowledging worst-case AI scenarios, a notable shift from pure optimism to cautious realism.
- **A Near-Collision in Orbit Signals the Beginning of Space Traffic Chaos** — A SpaceX satellite narrowly avoided a Chinese spacecraft, underscoring how crowded low-Earth orbit has become and how thin the margin for error is.
- **Sundar Pichai Is Coming for Jensen Huang's AI Crown** — Alphabet's aggressive AI hardware and infrastructure push signals Google's intent to challenge NVIDIA's dominance at the very center of the AI stack.

---

## Prompt of the Week: "The Tiny Feature That Could Break the Market"

Imagine there's one microscopic feature — almost invisible, barely noticed — that could completely change how your product is perceived or used. Analyze my startup and generate 5–10 ideas for such tiny but high-leverage features.

**For each idea, include:**

- **Feature:** the small, unconventional tweak or addition
- **Why It Matters:** a concise explanation of its hidden impact
- **Actionable Step:** one quick test or experiment I could run this week

**Tone:** clever, slightly irreverent, and practical. The goal: uncover overlooked levers that could punch far above their weight and reveal surprising paths to growth, engagement, or differentiation.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **NVIDIA's New Software Exposes Where Every AI GPU Is Really Going** — NVIDIA is rolling out monitoring tech that tracks GPU usage and location, signaling tighter control as governments scrutinize where AI firepower actually ends up.
- **Amazon's AI Cloud Contracts Spark Alarm Over Government Surveillance** — New revelations show Amazon's AI cloud powering sensitive government agencies, raising fresh concerns about surveillance, militarization, and corporate complicity.
- **NVIDIA Tests Location Verification to Lock Down AI Chips** — New tracking technology could allow NVIDIA to remotely enforce export controls, turning hardware into policy enforcement tools.
- **Google and Apple Rush Emergency Fixes After Zero-Day Attacks** — Active exploits forced both companies into rapid response mode — a reminder that platform security is never "done."
- **OpenAI Scraps Equity Vesting as the Talent War Escalates** — OpenAI is rewriting how employees get paid, a move that reveals just how intense the fight for elite AI talent has become.
- **NVIDIA Moves to Supercharge H200 Chip Production** — Facing relentless demand, NVIDIA is accelerating production of its flagship AI chips — and tightening its grip on the global compute supply.
- **Elon Musk Pushes Starlink Expansion in South Africa** — Starlink's next frontier could reshape connectivity across Africa — and deepen Musk's influence over global internet infrastructure.
- **Google Drops Its Deepest AI Research Agent Yet — Same Day as GPT-5.2** — Google and OpenAI continue their tit-for-tat escalation, releasing heavyweight models within hours of each other.
- **Big Tech Quietly Builds AI-Powered Energy Trading Desks** — Tech giants are using AI to trade electricity itself, turning data centers into financial instruments that arbitrage power markets in real time.
- **Microsoft Buys Millions of Tons of Carbon Removal** — As AI emissions rise, Microsoft is betting heavily on carbon removal to offset its growing footprint.
- **A New Super App Launches With Crypto Pay and Encrypted Chat** — The race to build a Western "everything app" just escalated — privacy, payments, and crypto included.
- **Mirelo Raises $41M to Fix the Silent AI Video Problem** — This startup is tackling one of generative video's biggest flaws — audio — and investors are betting big.
- **The AI Data Center Boom Is Starving Other Infrastructure** — AI's insatiable appetite for power and land is crowding out housing, transit, and public works.
- **Investors Are Finally Buying More Than Just "AI Hype"** — Capital is shifting toward companies with real revenue and infrastructure behind their AI claims — a sign the market is maturing.
- **Lawmakers Clash Over Trump-Era NVIDIA Chip Decisions** — Washington is reopening old wounds over chip export policies, as NVIDIA once again sits at the center of U.S.–China tech tensions.
- **Rivian News Sends Shockwaves Through NVIDIA Stock** — An unexpected ripple from the EV world briefly rattled NVIDIA, showing just how interconnected AI, autos, and investor sentiment have become.
- **Disney Opens Its Vault to OpenAI's Sora** — OpenAI gaining access to Disney's content catalog marks a turning point for AI-generated video — and a potential copyright minefield.
- **Blue Origin Wants to Build Data Centers in Space** — Jeff Bezos' space company is exploring orbital data centers, where solar power, cooling, and latency could redefine cloud infrastructure.
- **Android 16 Turns Pixel Phones Into Full Desktop PCs** — Google is blurring the line between phone and computer, pushing Android closer to a true desktop replacement.
- **Stanford Reporter Takes Aim at Silicon Valley's Money Culture** — A sharp critique of hype, excess, and moral drift inside startup culture is making uncomfortable waves.

---

## What I'm Thinking About

- When Streaming Killed Music's Memory — [Blog](https://ryanestes.info/)
- Turn Fear into Growth — [Interview](https://ryanestes.info/)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 10,
    title: "Google Makes Coding Feel Magical and a Netflix Theme Park Era Enters the Chat",
    excerpt: "AI-generated music as grief therapy, Google's vibe coding tool hits Gemini, Netflix builds physical venues, and a prompt that designs your startup's failure on purpose so you can prevent it.",
    date: "2025-12-24",
    readTime: "14 min read",
    category: "Weekly Dispatch",
    slug: "google-coding-magical-netflix-theme-park",
    featured: false,
    image: googleNetflixImg,
    content: `## Merry Christmas

A buddy of mine, Ziah, said something quietly the other day.

He's been using AI music generators as a form of therapy.

Not to replace feeling. Just to give it somewhere to go.

I haven't lost anyone close recently, but I did lose a beloved fish who passed on to the great toilet bowl in the sky. RIP Berger.

So I tried it. I wrote a few lines about Berger and fed them into [musiccreator.ai](https://www.musiccreator.ai/?ref=ESTES).

And suddenly there was a song holding the feeling for me. No fixing. No advice. No inspirational quote. Just a place for the emotion to exist. Honestly, the song is good. Like, annoyingly good. Reply, and I'll send it to you.

Maybe grief doesn't always need a solution. Maybe it just needs a container.

And if a piece of AI-generated music can help you sit with a loss, even a small one, that feels less like technology and more like permission to feel.

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**On Demand Human — Never Lose Flow Again —** [LINK](https://open.spotify.com/episode/)
Founders, you're not stuck because your idea is bad. You're stuck because your AI won't do the last 10%… and you're about to rage quit in slow motion. Danny Newman is building a simple fix: OnDemandHuman.com. It's a "tap a button, get a real expert" marketplace for when vibe coding hits the wall.

**Snipd — The AI Podcast App That Refuses to Let You Forget What You Learn —** [LINK](https://open.spotify.com/episode/)
An inside look at how Snipd's founder built an AI-native podcast app in Zurich that turns passive listening into active learning, letting founders chat with episodes, capture insights, and actually retain what they hear.

**Axenya — The AI That Predicts Disease Years Early (And Still Had to Fight to Get Paid) —** [LINK](https://open.spotify.com/episode/)
A candid conversation with a four-time healthcare founder on why prevention is financially broken, how AI can spot chronic disease years before symptoms, and what it takes to sell life-saving tech into regulated systems.

**Woz — Your AI Technical Cofounder for When "Who's Going to Build This?" Kills Momentum —** [LINK](https://open.spotify.com/episode/)
MIT roommates turned founders explain how Woz helps non-technical founders ship real, scalable software by turning raw ideas into production-ready code without relying on agencies or fragile no-code stacks.

**Limitless Leaders — Why AI Is Exposing Weak Leadership Instead of Replacing It —** [LINK](https://open.spotify.com/episode/)
A sharp exploration of the "human advantage" in an AI-saturated world, unpacking why influence, communication, and emotional intelligence are becoming the real moat as technical skills commoditize.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Tip of the Spear

- **Google's 'Vibe Coding' Tool Comes to Gemini** — Opal brings "vibe coding" into Gemini, lowering the barrier between ideas and executable software.
- **OpenAI Escalates Its Image Generation Arms Race** — OpenAI's new image model signals an aggressive push to dominate creative AI amid intensifying competition.
- **The U.S. and EU Are Quietly Preparing Massive Tech Penalties** — Regulators on both sides of the Atlantic are aligning on tougher enforcement, setting the stage for significant fines against Big Tech.
- **Hyundai and Kia Recall Millions of Vehicles** — A massive recall highlights ongoing quality and safety challenges in modern vehicle manufacturing.
- **Netflix House Wants to Turn Streaming Into a Physical Experience** — Netflix is betting on immersive physical venues to deepen fandom and diversify revenue beyond screens.

---

## Prompt of the Week: "Design the Failure on Purpose"

Assume my startup must stumble in the next 12 months — not catastrophically, but in a way that quietly caps its upside. Analyze my product, market, and operating model and identify 5–7 plausible, slow-burn failure modes that would look reasonable at first and only reveal their damage later.

**For each failure mode, include:**

- **The Misstep:** the decision or behavior that causes it
- **Why It's Tempting:** the short-term logic that makes it feel smart
- **Early Warning Signal:** what I would notice before it's too late
- **Preventive Move:** one concrete action I could take this quarter to avoid it

**Tone:** clear-eyed, unsentimental, and practical. No doom. No melodrama. The goal is to surface risks founders don't talk about because they sound "reasonable" — and neutralize them while there's still time.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **NVIDIA Acquires SchedMD to Tighten Its Grip on AI Infrastructure** — By acquiring SchedMD, NVIDIA deepens its control over cluster management and high-performance computing workflows.
- **PayPal Wants to Become a Bank — Starting With Small Business Loans** — PayPal is seeking U.S. approval to form a bank, positioning itself to compete directly with traditional lenders.
- **Governments Are Building AI Task Forces — And Struggling to Keep Up** — Governments worldwide are forming AI task forces, highlighting the growing gap between public-sector pace and private-sector innovation.
- **Toyota Will Gain Apple Car Keys Support** — Apple continues expanding its automotive ecosystem through deeper integration with major manufacturers.
- **Ford's Hybrid F-150 Is Quietly Becoming an Energy Asset** — Ford's hybrid and EREV F-150 strategy reframes pickup trucks as mobile energy storage units.
- **Google Is Killing Its Dark Web Report Feature** — Google will sunset its dark web monitoring feature, raising questions about consumer security tooling.
- **Google Is Testing an Email-Based Productivity Assistant** — Google is experimenting with an AI assistant embedded in email, aiming to turn inboxes into workflow hubs.
- **Inside the Growing Tension Between Meta's AI Talent and Leadership** — Reports suggest internal friction at Meta as top AI figures clash with centralized leadership control.
- **Palantir's CIO Joins Thrive Capital's Defense Tech Push** — A notable leadership move underscores the growing investor focus on defense and security technology.
- **China Is Rejecting NVIDIA's H200 Chips** — China's rejection of NVIDIA's H200 chips highlights the unintended consequences of export controls.
- **Amazon Adds AI-Powered 'Ask This Book' to Kindle** — Kindle's new feature lets readers query books directly, blurring the line between reading and search.
- **iRobot Files for Bankruptcy After 35 Years** — The collapse of iRobot reflects how quickly hardware leaders can fall behind platform shifts.

---

## What I'm Thinking About

- Vibe Coding for Founders — [Blog](https://ryanestes.info/)
- Human-Centered Leadership in the AI Age — [Interview](https://ryanestes.info/)
- Journeys and Insights — [Webinar](https://ryanestes.info/)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 9,
    title: "The Future of Tech Is Infrastructure, Influence, and Plausible Deniability",
    excerpt: "2025 year-end wrap: Coinbase moves into prediction markets, the Pentagon partners with xAI, OpenAI admits AI browsers may never be secure, and a prompt to reset your first 90 days of the new year.",
    date: "2025-12-31",
    readTime: "14 min read",
    category: "Weekly Dispatch",
    slug: "future-tech-infrastructure-influence-plausible-deniability",
    featured: false,
    image: infraInfluenceImg,
    content: `## Alright. Let's Do This.

Another year has passed, allegedly on purpose.

This was the year of bold announcements, soft launches, quiet reversals, and "we'll circle back in Q1." Every problem was one tool away from being solved. Every tool needed three updates and a Notion doc to explain why it didn't.

We learned a lot. Mostly what didn't work. Some things worked briefly, then raised their prices.

Thank you for reading this newsletter all year. You opened it. You forwarded it. You meant to read it later and didn't. That still counts. Let's take one last look at the chaos before we all confidently say "next year will be different."

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**Reality Check Every Founder Needs in 2026 — AI in Review —** [LINK](https://open.spotify.com/episode/)
Because 2025 was insane for AI. Every week felt like a new launch, a new model, a new panic, a new promise that this one would change everything. Faster code. Cheaper labor. Smarter agents. Louder fear. And somewhere in the middle of all that noise, a lot of founders quietly fell behind without realizing it.

**OnDemandHuman — The "Break Glass in Case of AI Failure" Button for Founders —** [LINK](https://open.spotify.com/episode/)
An inside look at how OnDemandHuman is turning stalled builds into shipped products by letting founders instantly summon real experts — live, pay-per-minute — when AI tools, prompts, and tutorials stop working and flow is on the line.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Tip of the Spear

- **Coinbase Makes a Power Move Into Prediction Markets** — Coinbase agrees to acquire The Clearing Company, positioning itself as a serious infrastructure player in prediction markets and financial derivatives.
- **Larry Page Explains Google's AI Search Endgame** — Larry Page outlines how Gemini 3 Flash could redefine search through reasoning-first AI rather than links and keywords.
- **Instagram's Plan to Beat TikTok Everywhere** — Adam Mosseri explains Instagram's strategy to win both mobile attention and living-room screens.
- **The Pentagon Is Partnering With Elon Musk's xAI** — The U.S. Department of Defense signs a major deal with xAI, signaling Musk's growing influence in national defense AI infrastructure.
- **The U.S. Just Shut the Door on Foreign-Made Drones** — The U.S. government is banning new foreign-made drones and components, escalating national security concerns around surveillance and tech sovereignty.
- **OpenAI Admits AI Browsers May Never Be Secure** — OpenAI says prompt injection attacks may be an unsolvable problem for AI-powered browsers, raising hard questions about safety and trust in agent-driven web tools.
- **Palmer Luckey Wants to Build a Crypto Bank** — Palmer Luckey is backing Erebor, a crypto bank seeking regulatory approval, reigniting debates about crypto's place in traditional finance.
- **Claude, Chrome, and Cloudflare Collide** — Anthropic's Claude, Chrome extensions, and Cloudflare Workers combine into a powerful new AI deployment pattern worth watching.
- **Nvidia Partner Draws U.S. Attention Over China Smuggling** — A Nvidia-linked supplier is under scrutiny amid fears advanced chips are leaking into China despite U.S. export controls.

---

## Prompt of the Week: "The First 90 Days Reset"

Treat the start of the year as a strategic launch window. Analyze my startup and identify 5–7 high-leverage actions that, if executed in the first 90 days of the year, could dramatically accelerate growth, product adoption, or team performance.

**For each action, include:**

- **The Move:** the specific, concrete step to take
- **Why It Works:** a short, practical rationale grounded in market, product, or team realities
- **Immediate Experiment:** one test, pilot, or implementation I could start this week to validate it
- **Expected Outcome:** the tangible impact or metric this could improve

**Tone:** practical, no-fluff, founder-focused. Think of it as a quarter-one execution blueprint — identify the small set of moves that could set the tone for the entire year and get me measurable traction fast.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **GPT-5 Allegedly Solves an Open Math Problem** — Reports claim GPT-5 independently solved a previously open math problem, reigniting debates about machine reasoning breakthroughs.
- **Binance Still Processed $144M in Suspicious Payments** — Despite its plea deal, Binance allegedly continued processing massive volumes of suspicious crypto transactions.
- **Amazon Quietly Blocks 1,800 North Korean IT Workers** — Amazon stopped more than 1,800 suspected North Korean IT workers from infiltrating its systems, highlighting the scale of global labor fraud.
- **Italy Fines Apple €98.6M as EU Antitrust Pressure Escalates** — Italian regulators fined Apple over privacy rules seen as anti-competitive, adding fuel to the EU's widening crackdown on Big Tech.
- **Yann LeCun Says AGI Is 'Complete BS'** — Meta's Yann LeCun publicly dismisses AGI as nonsense, prompting a sharp rebuttal from DeepMind CEO Demis Hassabis.
- **iRobot Founder Admits China Beat Them** — iRobot's founder says aggressive Chinese competition — not Amazon — was the biggest reason the Roomba maker lost its edge.
- **China's Z.ai Claims GPT-5-Level Performance** — Z.ai releases GLM-4.7, claiming parity with GPT-5.1 while preserving internal reasoning.
- **Microsoft Plans to Replace C/C++ With Rust by 2030** — Microsoft aims to migrate massive portions of its codebase to Rust, prioritizing memory safety and long-term security.
- **Big Tech Warns Visa Holders: Don't Leave the U.S.** — Google, Apple, and Microsoft reportedly advised visa-holding employees to avoid international travel amid growing immigration uncertainty.
- **South Korea Pushes Facial Recognition on Phones** — South Korea is expanding facial recognition requirements for smartphones, intensifying global concerns around biometric surveillance.
- **Neutral Atom Quantum Computing Is Quietly Winning** — Neutral atom quantum systems are emerging as a serious contender in the race for scalable quantum computing.
- **Huawei's HarmonyOS Is No Longer a Side Project** — Huawei's HarmonyOS is evolving into a full-fledged ecosystem as China accelerates its push away from Western platforms.

---

## What I'm Thinking About

- The American Buddhist Entrepreneur — [Interview](https://ryanestes.info/)
- Why Founders Should Be Guesting on Podcasts — [Blog](https://ryanestes.info/)
- To Be an Influencer Today — [Interview](https://ryanestes.info/)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 8,
    title: "SpaceX Beams Starlink into Venezuela After Raids, Convicted Crypto Hacker Walks Early Thanks to Trump, AI Spots Cancer Before Doctors Do",
    excerpt: "Sponsorships are open and we're building a blog. Plus: Starlink keeps Venezuela connected, a crypto hacker walks free, AI detects pancreatic cancer early, and a prompt that finds your startup's most underestimated lever.",
    date: "2026-01-07",
    readTime: "12 min read",
    category: "Weekly Dispatch",
    slug: "spacex-starlink-venezuela-crypto-hacker-ai-cancer",
    featured: false,
    image: spacexCryptoAiImg,
    content: `## We're Building a Blog

Which means we're officially asking for opinions.

Specifically, people with real taste in generative AI products. Not "I tried ChatGPT once." More like "I've broken three workflows, rage-quit two tools, and can explain why one obscure feature actually matters."

We want sharp, honest reviews of generative AI products. What works. What's overhyped? What quietly rules. Clear thinking. Strong point of view. Check out our [AI Product Validator framework](/newsletter/ai-product-validator) for the kind of thinking we're after.

If that sounds like you, reply to this email and say hi. We'll send details.

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**[Codalio](https://codalio.com/) — The AI Platform That Turns Ideas Into Real Products, Fast —** [LINK](https://open.spotify.com/episode/)
Ehsan Mirdamadi built Codalio to act like your CTO on demand: you prompt in plain English, it scopes your idea, generates 80–90% of the app, and delivers a scalable product instead of a fragile prototype — perfect for founders who want speed without the spaghetti code.

**Automaze — The AI Co-Founder That Keeps Your Startup Ahead of the Game —** [LINK](https://open.spotify.com/episode/)
Ran Aroussi reveals how Automaze acts as a technical co-founder, rebuilding your foundations while AI handles the repetitive, soul-crushing work, helping founders scale faster, ship smarter, and stay in control as agents quietly take over critical operations.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Tip of the Spear

- **SpaceX Starlink Free Internet Access in Venezuela After Raid** — Starlink provides free internet to Venezuelans following government interference, keeping connectivity open in politically sensitive regions.
- **Crypto Hacker Credits Trump's First Step Act for Early Release** — Convicted crypto hacker Ilya Lichtenstein credits early release under the First Step Act, highlighting the surprising intersections of criminal justice reform and the crypto world.
- **AI Tool Detects Pancreatic Cancer in Routine Scans Before Symptoms** — A new AI diagnostic tool can identify pancreatic cancer in routine imaging long before symptoms appear, potentially saving lives through early detection.
- **BYD Overtakes Tesla as World's Bestselling EV Company** — BYD surpasses Tesla in global EV sales, cementing its position as a leader in electric mobility with aggressive expansion and competitive pricing.
- **Amazon Alexa Now Available on the Web Without an Echo** — Amazon brings its Alexa chatbot to the web, letting users access voice AI without needing an Echo device.
- **Chinese Cyberattacks: Taiwan Faces 26 Million Daily Attacks in 2025** — Taiwan reports massive daily cyberattacks from China, highlighting the growing geopolitical stakes in digital infrastructure security.
- **Meta AI Chief Alexander Wang Called Inexperienced by Industry Veteran** — A leading AI figure criticizes Meta's AI lead as inexperienced, sparking debate over leadership in generative AI.

---

## Prompt of the Week: "The Underestimated Lever"

Identify the one underutilized lever in my startup — something that's currently overlooked, undervalued, or taken for granted — that could drive disproportionate growth, engagement, or efficiency. Analyze my product, customers, team, and market to generate 5–7 ways to pull this lever effectively.

**For each lever, include:**

- **The Lever:** the hidden opportunity or overlooked asset
- **Why It Matters:** a concise explanation of its potential impact
- **Actionable Step:** one concrete experiment, tweak, or initiative I could implement immediately

**Tone:** clever, practical, and slightly contrarian. The goal is to surface hidden advantages, amplify overlooked strengths, and turn subtle insights into real, measurable progress.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **Microsoft CEO Declares AI a Core Strategic Priority** — Microsoft CEO publicly emphasizes AI as central to the company's future, signaling increased investments and integration across products.
- **Withings Body Scan 2 Smart Scale Showcased at CES 2026** — Withings unveils its Body Scan 2 smart scale, blending health monitoring and longevity insights for consumers.
- **Samsung Doubling Mobile Devices Powered by Google's Gemini This Year** — Samsung plans to ship 800 million devices running Google's Gemini AI, scaling AI integration across its mobile ecosystem.
- **Nvidia Halts Intel 18A Tests Despite $5B Investment** — Nvidia unexpectedly pauses testing on Intel's 18A chip process, raising questions about their semiconductor investments.
- **PwC Expands Crypto Auditing and Tax Services** — PwC announces expanded services for crypto auditing, tax, and consulting.
- **Reddit Overtakes TikTok in UK Users** — Reddit surpasses TikTok in UK user numbers, highlighting the platform's growing influence in social media.
- **Cars and AI: Millions of Road Injuries Could Be Prevented by Smart Tech** — New research shows AI-powered car technologies could prevent millions of road injuries annually.
- **Plaud Launches AI Pin and Desktop Meeting Notetaker** — Plaud releases an AI-powered pin and desktop assistant that captures key meeting notes.
- **SwitchBot Onero H1 Humanoid Household Robot at CES 2026** — SwitchBot introduces the Onero H1, a humanoid household robot designed to assist with chores.

---

## What I'm Thinking About

- Email Spam Fix — [Blog](https://ryanestes.info/)
- Conversational Media — [Interview](https://ryanestes.info/)
- Building a Personal Brand Online — [Blog](https://ryanestes.info/)
- Stop Designing Screens — [Clip](https://youtube.com/shorts/)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 7,
    title: "AI Is Eating Healthcare, Satellites Are Multiplying, and Big Tech Is Lighting Billions on Fire",
    excerpt: "Sponsorships are open. Plus: SpaceX clears 7,500 more satellites, OpenAI connects ChatGPT to health records, Musk's xAI burns $8B, and a prompt that flips your entire strategy upside down.",
    date: "2026-01-13",
    readTime: "12 min read",
    category: "Weekly Dispatch",
    slug: "ai-eating-healthcare-satellites-multiplying-bigtech-billions",
    featured: false,
    image: aiHealthcareSatellitesImg,
    content: `## We Have a [Newsletter](/blog)

People open it. Read it. Forward it to friends.

Occasionally, reply with "this made me spit out my coffee."

Which means, inevitably, people keep asking:

*"Can we sponsor this?"*

Yes. Yes you can.

If you're a brand, product, service, side project, or mildly unhinged startup that wants smart people to notice you without yelling at them, **[sponsorships are open](/sponsorships).**

No pop-ups. No banner blindness. Just a clean slot in a newsletter people actually trust.

Reply to this email if you want the details, the numbers, and the part where we see if this makes sense for both of us.

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**Human Machines — The AI Collaboration Coach That Protects Judgment —** [LINK](https://open.spotify.com/episode/)
Geoff Gibbins from Human Machines shows founders how AI can actually amplify human judgment instead of turning teams into button clickers. Discover how an AI "collaboration coach" flags wasted effort, helps teams apply judgment at critical moments, and prevents strategic drift in fast-moving startups.

**[Knapsack](https://www.knapsack.cloud/) — Scaling Teams Without Chaos —** [LINK](https://open.spotify.com/episode/)
Chris Strahl of Knapsack explains why scaling startups fail not for lack of talent, but because parallel workstreams drift apart. Knapsack provides a single system to align product, design, and engineering, letting teams scale without constant manual judgment or merge conflicts. A must-listen for founders, operators, and product leaders moving past early-stage chaos.

**[Wednesday](https://www.wednesday.is/) — Sprint Zero: Avoiding the MVP Trap —** [LINK](https://open.spotify.com/episode/)
Ali from Wednesday shares the brutal truth about post-seed startup traps: your dream might be wrong. Learn how Sprint Zero audits real metrics — retention, referral, revenue — to validate product-market fit early, before teams waste time on vanity features.

**[Stone Systems](https://stonesystems.io/) — Software That Meets Contractors Where They Are —** [LINK](https://open.spotify.com/episode/)
Kai Stone explains how Stone Systems gives contractors a full business software stack that works entirely on their phone. Build tech that matches how your customer actually lives, not how you think they should.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Tip of the Spear

- **SpaceX Gets FCC Approval for 7,500 More Starlink Satellites** — SpaceX clears regulatory hurdles to expand Starlink, supporting global internet coverage and satellite internet capacity.
- **LLM Predictions for 2026** — A data scientist outlines the biggest upcoming trends for large language models, from multimodal reasoning to regulatory impacts and enterprise adoption.
- **OpenAI ChatGPT Now Accessing Health Records** — OpenAI is expanding ChatGPT into healthcare, connecting it with medical records to help doctors and patients — but raising new privacy, accuracy, and liability questions.
- **Apple CEO Tim Cook and John Ternus on Apple's Future** — Inside Apple's leadership on innovation, hardware strategy, and the challenges of keeping its product pipeline relevant in a rapidly changing tech landscape.
- **Musk's xAI Burns Almost $8 Billion** — Elon Musk's xAI venture continues aggressive spending, highlighting the high-risk, high-reward nature of building next-gen AI infrastructure.
- **Spotify Paying Creators Up to Twice as Much as YouTube** — Music and podcast creators report higher per-stream payouts on Spotify, raising questions about the future of content monetization across platforms.
- **Anthropic Cracks Down on Unauthorized Claude Usage** — Anthropic limits third-party access to Claude, aiming to protect IP and control deployment of its AI technology.

---

## Prompt of the Week: "The Reverse Innovation Challenge"

Pick one part of my business — product, marketing, operations, or customer experience — and imagine doing the **exact opposite** of what everyone in the industry is doing. Generate 5–7 counterintuitive ideas that break conventional logic but could unlock new growth or differentiation.

**For each idea, include:**

- **The Idea:** the unconventional move or "opposite play"
- **Why It Matters:** a punchy explanation of the potential advantage
- **Actionable Step:** one concrete test, experiment, or implementation to try immediately

**Tone:** bold, playful, and grounded. The goal is to reveal overlooked opportunities, question assumptions, and find creative ways to leap ahead while competitors stay in line.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **AI Models Can Regurgitate Entire Copyrighted Books** — A study finds AI models can reproduce copyrighted books verbatim, intensifying debate over training data and copyright infringement.
- **DeepSeek V4 Beats Claude & ChatGPT in Coding** — DeepSeek V4 reportedly outperforms Claude and ChatGPT in coding tasks, showing rapid innovation in AI developer tools.
- **Cloudflare Might Pull Servers from Italy** — Cloudflare considers removing infrastructure from Italy after government orders to block pirate sites, raising global net neutrality questions.
- **JPMorgan Becomes New Issuer of the Apple Card** — Apple Card is moving from Goldman Sachs to JPMorgan Chase, signaling a shift in Apple's financial partnerships.
- **China's AI Robot Revolution** — China is ramping up AI-driven robotics, signaling a shift in automation for manufacturing, healthcare, and consumer sectors.
- **YouTube Updated Filters for "Good News" in Shorts** — YouTube adds new filters in Shorts to surface positive and informative content, aiming to reduce negativity.
- **The Venture Firm That Ate Silicon Valley** — A deep dive into a VC firm reshaping how startups get funded, from early seed to mega rounds.
- **Amazon Tracks Office Time With Badge Dashboard** — Amazon implements a badge-based dashboard to monitor in-office attendance, blending operational insights with employee tracking concerns.
- **OpenAI Asking Contractors to Upload Past Work** — OpenAI reportedly requests contractors to share prior work, stirring debate over IP, privacy, and ethical sourcing of training data.
- **Meta Signs Deals for 6+ GW of Nuclear Power** — Meta invests heavily in nuclear energy to power its operations, reflecting the tech industry's pivot to sustainable energy.
- **Google Announces Protocol to Facilitate AI Commerce** — Google introduces a new protocol to streamline commerce transactions handled by AI agents.
- **Nuclear Startups Back in Vogue** — A look at the resurgence of nuclear startups developing small modular reactors.
- **Google Moonshot Spinout SandboxAQ Faces Extortion Claim** — SandboxAQ, a Google spinout, reports an alleged extortion attempt by a former executive.

---

## What I'm Thinking About

- Built a $2M SaaS for contractors — [Clip](https://youtube.com/shorts/)
- LLMs are Listening — [Blog](https://ryanestes.info/)
- From Buddhist to Entrepreneur — [Interview](https://ryanestes.info/)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 6,
    title: "Tesla Kills Ownership, Google Teaches AI to Shop, and the Internet Moves to Space",
    excerpt: "Claude Code is quietly dominating dev land. Plus: Tesla goes subscription-only for FSD, Google launches AI commerce agents, SpaceX gets 7,500 more satellites, and the prompt that swaps you into your most skeptical customer's brain.",
    date: "2026-01-21",
    readTime: "14 min read",
    category: "Weekly Dispatch",
    slug: "tesla-kills-ownership-google-ai-shop-internet-space",
    featured: false,
    image: teslaGoogleSpaceImg,
    content: `## Claude Code Is Quietly Eating Everyone's Lunch

There's a strange thing happening in AI dev land right now.

No launch event. No countdown timer. No "THIS CHANGES EVERYTHING" YouTube face.

And yet… Claude Code is absolutely dominant.

Not interesting. Not promising. **Dominant.**

Over the last few months, Claude Code went from "nice pair programmer" to "default choice for people who actually ship."

### A few reasons why:

- It got materially better at large, messy codebases — the kind founders inherit, not the kind demoed in blog posts.
- Context handling quietly leveled up. You can throw entire repos, long threads, half-baked specs at it. It does not panic.
- Refactors stopped feeling like roulette. Fewer hallucinated functions. Fewer "this compiles in theory" moments.
- It's calmer. Claude doesn't try to impress you. It just… fixes the thing.

This is not flashy progress. It's the kind that makes developers stop tweeting and start shipping.

Claude Code didn't win by being louder. It won by being boring and correct.

### The adoption curve looks like this:

1. Senior engineers quietly switch first
2. Founders notice velocity change
3. Teams standardize without announcement
4. Nobody writes a blog post about it
5. Everyone just keeps using it

That's usually how real tools win.

### Meanwhile, Everyone Else Is Busy…

- Competing on benchmark screenshots
- Shipping half-finished agents
- Adding UI chrome nobody asked for
- Announcing "roadmaps" instead of reliability

Claude Code just keeps showing up, reading the room, and doing the work.

### The Real Signal

If you hang out with indie hackers shipping weekly, founders building internal tools fast, or engineers cleaning up technical debt at 11:47 p.m. — you'll hear the same thing phrased differently:

*"Yeah… Claude just works."*

No brand evangelism. No referral code. No Discord hype. Just usage.

If you're building right now, this matters more than benchmarks:

- Faster iteration without babysitting prompts
- Lower cognitive load for real engineering work
- Less time debugging the AI instead of the product

Tools that reduce friction win recessions, pivots, and late nights. Claude Code is one of those tools right now. Not exciting. Not viral. Just dominant.

Reply with your take. I read everyone.

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**Human Machines — The AI Collaboration Coach That Protects Judgment —** [LINK](https://open.spotify.com/episode/)
Geoff Gibbins from Human Machines shows founders how AI can actually amplify human judgment instead of turning teams into button clickers. Discover how an AI "collaboration coach" flags wasted effort, helps teams apply judgment at critical moments, and prevents strategic drift in fast-moving startups.

**[Knapsack](https://www.knapsack.cloud/) — Scaling Teams Without Chaos —** [LINK](https://open.spotify.com/episode/)
Chris Strahl of Knapsack explains why scaling startups fail not for lack of talent, but because parallel workstreams drift apart. Knapsack provides a single system to align product, design, and engineering, letting teams scale without constant manual judgment or merge conflicts.

**[Wednesday](https://www.wednesday.is/) — Sprint Zero: Avoiding the MVP Trap —** [LINK](https://open.spotify.com/episode/)
Ali from Wednesday shares the brutal truth about post-seed startup traps: your dream might be wrong. Learn how Sprint Zero audits real metrics — retention, referral, revenue — to validate product-market fit early, before teams waste time on vanity features.

**[Stone Systems](https://stonesystems.io/) — Software That Meets Contractors Where They Are —** [LINK](https://open.spotify.com/episode/)
Kai Stone explains how Stone Systems gives contractors a full business software stack that works entirely on their phone. Build tech that matches how your customer actually lives, not how you think they should.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Tip of the Spear

- **Tesla FSD Subscription-Only Model** — Tesla moves to a subscription-only model for Full Self-Driving, changing its revenue model and accessibility for consumers.
- **Google VEO 3.1: Vertical Videos via Reference Images** — Google VEO 3.1 enables vertical video creation using reference images, streamlining social media content workflows.
- **Google Announces Protocol to Facilitate Commerce Using AI Agents** — Google launches a protocol for AI agents to autonomously conduct commerce, potentially reshaping digital marketplaces and automated transactions.
- **Nuclear Startups Back in Vogue with Small Reactors** — Small modular nuclear reactors attract new startups and investments, highlighting opportunities and regulatory challenges in next-gen clean energy.
- **SpaceX Gets FCC Approval to Launch 7,500 More Starlink Satellites** — SpaceX expands its Starlink network with FCC approval, increasing global broadband coverage and satellite internet capacity.
- **Anthropic Highlights Healthcare & Life Sciences Applications** — Anthropic showcases AI solutions for healthcare and life sciences, from research acceleration to patient care optimization.
- **Meta Launching Its Own AI Infrastructure Initiative** — Meta announces an AI infrastructure project to reduce reliance on external AI platforms and scale internal capabilities.

---

## Prompt of the Week: "The Customer Mind Swap"

Imagine you could experience your startup entirely through the eyes of your most skeptical customer — the one who rarely buys, rarely engages, or quietly complains. Analyze your product, marketing, and experience from their perspective and generate 5–7 surprising insights that would never be obvious from your own point of view.

**For each insight, include:**

- **Insight:** the unexpected perspective or friction point
- **Why It Matters:** a concise explanation of how it affects growth, retention, or perception
- **Actionable Step:** one concrete tweak, test, or experiment to address it immediately

**Tone:** playful, curious, and slightly mischievous — the goal is to uncover blind spots, hidden opportunities, and small shifts that could make a disproportionate difference for users who usually slip under the radar.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **Instagram Reports No Breach Despite Password Reset Requests** — Instagram confirms security remains intact after widespread password reset requests, aiming to reassure users amidst phishing concerns.
- **Meta Hires Former Trump Advisor Dina Powell McCormick** — Meta brings Dina Powell McCormick on as President and Vice Chair, signaling a major leadership shift and renewed focus on regulatory and policy influence.
- **Chinese Customs Block NVIDIA H200 Shipments** — China halts shipments of NVIDIA H200 GPUs shortly after US export approvals, freezing $5.4B in orders and affecting global supply chains.
- **Wikipedia Owner Signs Deals with Microsoft & Meta** — The Wikimedia Foundation partners with Microsoft and Meta, enabling AI integration, cloud hosting, and collaborative content tools.
- **Anthropic Launches CoWork Tool: Claude Code Without the Code** — Anthropic introduces a "no-code" platform for its Claude AI, allowing teams to implement automation and workflows without traditional coding.
- **Gemini Beta Adds Proactive Responses Based on Photos, Emails & More** — Gemini introduces AI that proactively assists with tasks using contextual data from images, emails, and documents.
- **UK Government Rolls Back Digital Identity Card Plans** — The UK abandons national digital ID card plans due to privacy concerns and public opposition.
- **Digg Launches New Reddit Rival "To the Public"** — Digg debuts a social platform aimed at replicating Reddit's community model, focusing on public discourse and content discovery.
- **Alexa Plus Upgrade for Prime Members** — Amazon offers an Alexa Plus upgrade for Prime members, adding enhanced AI capabilities and deeper integration with smart home devices.
- **X Tightens Grok Image Generation, Restricts Editing of Real People** — X limits AI-generated image editing of real individuals on Grok, responding to international privacy and ethical concerns.
- **Meta to Cut 10% of Reality Labs Jobs** — Meta trims Reality Labs workforce by 10%, as part of a broader restructuring to optimize its XR and metaverse efforts.
- **Apple Debuts Apple Creator Studio Subscription** — Apple launches a subscription service for creators, offering tools for content management, analytics, and monetization across Apple's ecosystem.
- **Paramount Files Lawsuit Against Warner Bros Amid Netflix Merger** — Paramount sues Warner Bros over concerns related to its merger with Netflix, highlighting tensions in streaming consolidation and IP rights.
- **YouTube Adds Feature for Parents to Block Kids From Shorts** — YouTube enables parental controls for Shorts, allowing better content moderation and safer viewing for younger audiences.

---

## What I'm Thinking About

- The real reason you're stuck — [Clip](https://youtube.com/shorts/)
- VR, AI and The Fractals Of Reality — [Blog](https://ryanestes.info/)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 5,
    title: "Nvidia, Amazon, Musk, and the Pentagon Are Quietly Rewriting the World Order",
    excerpt: "A dual-track poly-metric sequencer, a new Deals Corner for startups raising, and the biggest power plays in AI this week — from Nvidia's OpenAI mega-bet to Pentagon clashes with Anthropic.",
    date: "2026-02-04",
    readTime: "14 min read",
    category: "Weekly Dispatch",
    slug: "nvidia-amazon-musk-pentagon-rewriting-world-order",
    featured: false,
    image: nvidiaPentagonImg,
    content: `## A Musical Detour and a New Deals Corner

If you've got 15 minutes to burn and zero interest in being productive about it, my buddy Vince made something perfect for you.

It's a **dual-track, poly-metric sequencer**, which is a fancy way of saying: you press buttons, time bends a little, and suddenly you're nodding your head like you *meant* to understand rhythm theory.

Highly recommended as a short mental reset between meetings you didn't need to be on anyway. Check it out [here](https://gemini.google.com/share/f3603075b03b).

Also.

We're adding a **Deals Corner**.
It's a small section dedicated to startups that are currently raising.
Pre-seed, seed, "we have traction but our deck is a Google Doc," all welcome.

No demo days.
No warm intros required.
Just who's building, what they're raising, and why it exists.

If you want an intro, reply to this email.
If you're raising and want to be included, reply to this email.
If you're both… definitely reply to this email.

This is not investment advice.
It *is* an excuse to talk to other builders without pretending it's networking.

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**Stops You From Donating Extra Money to the IRS —** [LINK](https://open.spotify.com/episode/4VUbkEs3DpOQts3SF1ZKGX)
Sai and [Deduction.com](https://Deduction.com) make taxes painless for busy founders — get a human-reviewed return for $500 and instantly catch mistakes your accountant might miss.

**[Apprentix.io](https://Apprentix.io) — Turns Bureaucracy Into a $1M SaaS Opportunity —** [LINK](https://open.spotify.com/episode/7qkfwhkEwZywnidPTWYvgl)
Andy Seth shows founders how to niche down on regulatory bottlenecks, build software that businesses actually need, and hit massive revenue without a W2 employee in sight.

---

## Deals Corner

**[Cora](https://www.getcora.io/20th3G4mH4sch4nd26)**
Cora is building a self-optimizing website platform that uses AI to continuously test, learn, and improve your site so it converts better without you babysitting it.

**[Voyager](https://voyager.cx/)**
Voyager is an AI-native Web3 ecosystem and multi-asset exchange. Trade digital assets and commodities in one seamless interface.

**[RoboReliance](https://www.roboreliance.com/)**
RoboReliance is building autonomous robotic systems designed to handle real-world industrial work so humans don't have to stand next to dangerous, repetitive machines all day.

---

## Tip of the Spear

- **[Nvidia's OpenAI Deal Could Be Its Biggest Bet Ever](https://the-decoder.com/nvidia-ceo-jensen-huang-calls-upcoming-openai-deal-probably-the-largest-investment-weve-ever-made/)** — Jensen Huang hints that Nvidia's next move with OpenAI may dwarf every prior investment, signaling an arms race at historic scale.
- **[OpenClaws AI Assistants Are Building Their Own Social Network](https://techcrunch.com/2026/01/30/openclaws-ai-assistants-are-now-building-their-own-social-network/)** — AI agents aren't just posting anymore — they're organizing, networking, and creating their own digital society, and humans might just be the guests.
- **[Apple Loses Top AI Talent Amid Siri Shake-Up](https://www.business-standard.com/technology/tech-news/apple-loses-several-ai-researchers-top-siri-executive-amid-talent-exodus-126013100203_1.html)** — Apple's AI brain drain raises questions about whether Cupertino can keep pace in the escalating model wars.
- **[Musk Weighs Merging SpaceX With Tesla or xAI](https://www.bloomberg.com/news/articles/2026-01-29/elon-musk-s-spacex-is-said-to-consider-merger-with-tesla-or-xai)** — Elon Musk is reportedly exploring a mega-merger that could fuse rockets, EVs, and AI into one empire.
- **[Apple Acquires Israeli AI Startup Q.ai](https://techcrunch.com/2026/01/29/apple-buys-israeli-startup-q-ai-as-the-ai-race-heats-up/)** — Apple quietly snaps up Q.ai, signaling it's buying speed as the AI race accelerates.
- **[Pentagon Clashes With Anthropic Over AI Access](https://finance.yahoo.com/news/exclusive-pentagon-clashes-anthropic-over-004206072.html)** — Tensions rise as the U.S. defense establishment and Anthropic reportedly spar over control and deployment of advanced AI systems.
- **[FBI Informant Claims Epstein Had a Personal Hacker](https://techcrunch.com/2026/01/30/informant-told-fbi-that-jeffrey-epstein-had-a-personal-hacker/)** — New allegations suggest Epstein may have employed a dedicated hacker, adding another layer to an already explosive saga.
- **[Amazon in Talks to Invest $50B in OpenAI](https://techcrunch.com/2026/01/29/amazon-is-reportedly-in-talks-to-invest-50-billion-in-openai/)** — Amazon reportedly considers a staggering $50 billion OpenAI investment that could reshape cloud and AI alliances overnight.
- **[Zuckerberg Teases Agentic Commerce Push for 2026](https://techcrunch.com/2026/01/28/zuckerberg-teases-agentic-commerce-tools-and-major-ai-rollout-in-2026/)** — Meta signals a future where AI agents don't just recommend products — they close the sale.

---

## Prompt of the Week: "The Market Conspiracy"

*Ask your AI to imagine that your entire market is secretly working against your startup — intentionally or unintentionally. Generate 5–7 hidden forces, assumptions, or "rules" competitors and customers are following that are quietly holding you back.*

*For each:*
- *Hidden Rule: the subtle dynamic shaping outcomes*
- *Why It Matters: how it limits growth or adoption*
- *Actionable Step: one way to exploit, subvert, or work around it this week*

*Goal: Reveal blind spots in your market and turn hidden friction into leverage.*

---

## Keep It Moving

- **[Google's AI Game Tool Sparks Market Meltdown](https://www.tomshardware.com/video-games/gaming-market-melts-down-after-google-reveals-new-ai-game-design-tool-project-genie-crashes-stocks-for-roblox-nintendo-cd-projekt-red-and-more)** — Project Genie promises AI-generated game worlds and Wall Street just punished traditional gaming giants for it.
- **[SpaceX–Tesla–xAI Merger Talks Stir IPO Speculation](https://techcrunch.com/2026/01/29/elon-musk-spacex-tesla-xai-merger-talks-ipo-reuters/)** — Fresh reports of Musk-led consolidation ignite speculation about an eventual super-IPO.
- **[Google Rolls Out Chrome's Auto-Browse AI Agent](https://arstechnica.com/google/2026/01/google-begins-rolling-out-chromes-auto-browse-ai-agent-today/)** — Chrome's new AI agent can navigate the web for you — clicking, reading, and acting while you sit back.
- **[Amazon Confirms 16,000 More Layoffs](https://www.techspot.com/news/111103-amazon-confirms-16000-more-layoffs-bringing-total-cuts.html)** — Amazon deepens its workforce reductions, pushing total job cuts to a staggering new high.
- **[Yahoo Scouts AI to Reinvent Itself](https://spyglass.org/yahoo-scout-ai/)** — Yahoo bets on AI-driven reinvention in a bid to stay relevant in a platform-dominated era.
- **[Android Desktop Mode Leak Surfaces](https://9to5google.com/2026/01/27/android-desktop-leak/)** — A leaked build suggests Google may finally turn Android into a true desktop competitor.
- **[Amazon Shutters Physical Retail Stores](https://techcrunch.com/2026/01/27/amazon-is-closing-its-physical-amazon-go-and-amazon-fresh-stores/)** — Amazon retreats from brick-and-mortar, closing Go and Fresh locations to refocus on digital dominance.
- **[Pinterest Cuts 15% of Staff to Double Down on AI](https://techcrunch.com/2026/01/27/pinterest-layoffs-impact-15-of-staff-as-resources-redirected-to-ai/)** — Pinterest slashes jobs as it reallocates capital toward AI-powered growth.
- **[Apple's New AirTag Is Louder and Longer-Range](https://techcrunch.com/2026/01/26/apples-new-airtag-is-louder-and-can-be-found-across-longer-distances/)** — Apple upgrades AirTag with greater range and volume, making lost-item panic slightly less painful.
- **[Gmail Spam Filters Go Haywire](https://techcrunch.com/2026/01/25/gmail-is-having-issues-with-spam-and-misclassification/)** — Users report Gmail misclassifying legitimate emails, raising concerns about AI-driven filtering accuracy.
- **[Energy Department Loosens Nuclear Safety Rules](https://techcrunch.com/2026/01/28/trump-energy-department-loosens-rules-on-nuclear-safety/)** — Regulatory shifts could accelerate nuclear deployment while reigniting safety debates.
- **[Arcee AI Builds 400B Open-Source Model](https://techcrunch.com/2026/01/28/tiny-startup-arcee-ai-built-a-400b-open-source-llm-from-scratch-to-best-metas-llama/)** — A tiny startup claims it built a 400B-parameter open model from scratch and outperformed Meta's Llama.
- **[Anthropic Launches Interactive Claude Apps](https://techcrunch.com/2026/01/26/anthropic-launches-interactive-claude-apps-including-slack-and-other-workplace-tools/)** — Claude moves deeper into the workplace with interactive apps built for Slack and beyond.
- **[Nvidia CEO Denies $100B OpenAI Investment Stall](https://techcrunch.com/2026/01/31/nvidia-ceo-pushes-back-against-report-that-his-companys-100b-openai-investment-has-stalled/)** — Jensen Huang pushes back against reports that Nvidia's massive OpenAI investment has hit turbulence.
- **[Blue Origin Pauses Space Tourism to Chase the Moon](https://techcrunch.com/2026/01/30/blue-origin-pauses-space-tourism-flights-to-focus-on-the-moon/)** — Jeff Bezos shifts from joyrides to lunar ambition, shelving space tourism to double down on Moon missions.
- **[Microsoft's Market Cap Surges on AI Earnings](https://www.cnbc.com/2026/01/29/microsoft-market-cap-earnings.html)** — Strong AI-fueled earnings push Microsoft's valuation higher, reinforcing its dominance in the enterprise AI stack.
- **[OpenAI IPO Talk Heats Up as Anthropic Looms](https://www.wsj.com/tech/ai/openai-ipo-anthropic-race-69f06a42)** — The OpenAI IPO drumbeat grows louder, with Anthropic emerging as its most credible rival in the capital markets spotlight.
- **[Nvidia and Mercedes Advance Robotaxi Plans](https://www.bloomberg.com/news/articles/2026-01-29/nvidia-mercedes-benz-move-forward-with-planned-robotaxis)** — The chip king and luxury automaker push closer to autonomous fleets powered by next-gen AI compute.
- **[OpenAI Explores Biometric Social Network](https://www.forbes.com/sites/annatong/2026/01/28/openai-wants-to-create-biometric-social-network-to-kill-xs-bot-problem/)** — OpenAI reportedly eyes a biometric-based platform aimed at eliminating bots and redefining online identity.
- **[Amazon to Pay $309M in Returns Settlement](https://techcrunch.com/2026/01/27/amazon-agrees-to-pay-consumers-309m-in-returns-policy-settlement/)** — Amazon agrees to a $309 million settlement over returns policies, closing a costly consumer dispute.
- **[Anthropic CEO Warns Humanity May Not Be Ready](https://siliconangle.com/2026/01/26/anthropic-ceo-warns-humanity-may-not-ready-advanced-ai/)** — Anthropic's chief issues a stark warning that society may be underestimating the pace and power of advanced AI.

---

## What I'm Thinking About

- Quick reminder about who's behind the screen — [Link](https://ryanestes.info/)
- The secret to crystal balls — [Blog](https://ryanestes.info/the-eternal-sphere-a-silent-witness-to-ages-past/)
- Build tech that matches what your customer need — [Clip](https://www.youtube.com/shorts/8lqyP5_Lw-E)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 4,
    title: "Anthropic Drops God-Tier AI, Google Is Lighting Billions on Fire, and Police Raid X",
    excerpt: "Robots are getting smarter. Unfortunately, they still can't touch grass. Plus: Investor Corner, a prompt that reverse-engineers your competitor's victory, and why you should monetize having legs.",
    date: "2026-02-10",
    readTime: "14 min read",
    category: "Weekly Dispatch",
    slug: "anthropic-drops-god-tier-ai-google-billions-police-raid-x",
    featured: false,
    image: anthropicGoogleImg,
    content: `## Robots Are Getting Smarter. They Still Can't Touch Grass.

They can't open doors, stand in line, take photos of a parking lot, or press a physical button without short-circuiting into vibes and hope.

That's where your extremely human body comes in.

AI agents need people in the real world to do real-world things, and they're willing to pay for it.

You stay human. You get paid. The robots stay indoors.

If you've ever wanted to monetize having legs, eyes, and the ability to exist IRL, congratulations, your moment has arrived: [rentahuman.ai](https://rentahuman.ai/)

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**[Deep Gem Interactive](https://deepgeminteractive.com/) — AI Isn't Killing Creativity, It's Exposing Your Emotional Laziness —** [LINK](https://open.spotify.com/episode/7IKme0ksBTuK80XlGH5eCw)
Ziah Orion argues that while most use AI for speed, the real value is in "connection tech" — generative music that helps process grief, identity, and inner archetypes.

**The Best AI Companies Won't Use LLMs —** [LINK](https://open.spotify.com/episode/1lix9GjXSzJAGdKQEeVKhw)
Josh Furstoss explains why the real money isn't in ChatGPT wrappers, but in adding simple AI features to unglamorous businesses like paint mixers and factories that "print money."

**[GregShove.com](https://GregShove.com) Stop Hiring AI Passengers, They're Dead Weight —** [LINK](https://open.spotify.com/episode/6mv89JYyhLCTBYVsV7hbHc)
Gregory Shove reveals the enterprise adoption playbook: stop letting employees coast as "passengers" and demand they become "drivers" who own their AI-backed decisions.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Investor Corner

Are you raising? Reply and we'll feature your deck.

### [Human Intelligence®](https://human.global/)
The only platform that can authenticate human-made content. Using patented algorithms that analyze how content is made, not just the output.

### [Deepinvent](https://deepinvent.ai/) (closing March 2nd)
A fully agentic AI that proactively discovers and patents novel IP in the white space for biotech, aerospace, pharma, semiconductors and many other deep tech industries.

### [Cora](https://www.getcora.io/20th3G4mH4sch4nd26)
Cora is building a **self-optimizing website platform** that uses AI to continuously test, learn, and improve your site so it converts better — without you babysitting it.

### [EmpathEQ](https://www.papermark.com/view/cmczl10il0005jj04q8bhavpo)
AI-powered training simulations to help healthcare learners practice complex interpersonal and communication skills. Focused on realism, repeatability, and scalability — making soft-skills training more accessible and measurable.

### [Voyager](https://voyager.cx/)
Voyager is an **AI-native Web3 ecosystem** and multi-asset exchange. Trade digital assets and commodities in one seamless interface.

### [RoboReliance](https://www.roboreliance.com/)
RoboReliance is building **autonomous robotic systems** designed to handle real-world industrial work — so humans don't have to stand next to dangerous, repetitive machines all day.

---

## Tip of the Spear

- **[Another "30 Under 30" Founder Charged with Fraud](https://techcrunch.com/2026/02/02/fintech-ceo-and-forbes-30-under-30-alum-has-been-charged-for-alleged-fraud/)** — The curse continues as yet another high-profile fintech CEO and Forbes list alumnus faces serious charges for alleged financial misconduct.
- **[The App Developers Have Been Waiting For](https://simonwillison.net/2026/Feb/2/introducing-the-codex-app/)** — A new tool called Codex has launched, promising to solve the fragmentation problem for developers who need to manage code snippets and documentation.
- **[Police Just Raided X's Paris Headquarters](https://www.engadget.com/social-media/xs-paris-hq-raided-by-french-prosecutors-110411170.html)** — French prosecutors have executed a raid on the Paris offices of X (formerly Twitter) as regulatory pressure on the platform reaches a boiling point in Europe.
- **[DHS Demands Data on Trump Critics from Tech Giants](https://techcrunch.com/2026/02/03/homeland-security-is-trying-to-force-tech-companies-to-hand-over-data-about-trump-critics/)** — Homeland Security is reportedly pressuring major tech companies to hand over user data related to critics of the President, sparking a massive privacy showdown.
- **[Microsoft's Big AI Bet Is in Serious Trouble](https://www.wsj.com/tech/ai/microsofts-pivotal-ai-product-is-running-into-big-problems-ce235b28)** — Reports indicate that Microsoft's flagship AI product is facing significant technical and adoption hurdles that could jeopardize its roadmap.
- **[Google Is Burning Cash Like Never Before](https://www.bloomberg.com/news/articles/2026-02-04/alphabet-to-blow-past-investor-expectations-on-spending)** — Alphabet is set to blow past investor spending expectations as it pours unlimited resources into winning the AI arms race.
- **[Leaked Memo Reveals Meta's Desperate AI Pivot](https://the-decoder.com/metas-internal-memo-signals-ai-comeback-after-rocky-year/)** — An internal memo shows Meta scrambling to stage an AI comeback after a rocky year of strategic missteps.
- **[Anthropic Just Dropped the Most Powerful AI Yet](https://techcrunch.com/2026/02/05/anthropic-releases-opus-4-6-with-new-agent-teams/)** — Anthropic has released "Opus 4.6," a new model featuring advanced agent teams capable of complex, multi-step workflows.
- **[The Most Expensive Domain in History Just Sold](https://gizmodo.com/crypto-com-founder-buys-ai-com-in-largest-domain-purchase-in-history-2000719136)** — The founder of Crypto.com has reportedly purchased "AI.com" in what is being touted as the largest domain sale in history.
- **[A Crypto Exchange Accidentally Gave Away $43 Billion](https://gizmodo.com/south-korean-crypto-exchange-accidentally-gave-away-43-billion-worth-of-paper-bitcoin-2000719158)** — A South Korean exchange suffered a catastrophic glitch that accidentally distributed billions of dollars worth of "paper" Bitcoin to users.
- **[New York Wants to Ban New Data Centers for Three Years](https://techcrunch.com/2026/02/07/new-york-lawmakers-propose-a-three-year-pause-on-new-data-centers/)** — Citing energy concerns, lawmakers are proposing a moratorium on building new data centers in the state.
- **[The Epstein Connection to Your Favorite EV Startup](https://techcrunch.com/2026/02/06/prince-andrew-advisor-pitched-jeffrey-epstein-on-investing-in-ev-startups-like-lucid-motors/)** — Reports reveal that Prince Andrew's advisor pitched Jeffrey Epstein on investing in major EV startups, including Lucid Motors.

---

## Prompt of the Week: "The Technical Postmortem from Your Competitor"

Imagine it's 18 months from now. Your biggest competitor has won. Write an internal memo from their CTO explaining:

- Which of our architectural or AI decisions made us predictable
- Where technical debt slowed our growth
- The platform, data, or integration advantage they exploited

**Then provide:**

- **Weak Spot:** the core technical vulnerability they capitalized on
- **Compounding Edge:** the system or product choice that scaled for them
- **Defensive Move:** one concrete technical step I could take now to avoid this future

**Instructions:**
Be specific about systems, AI/data, and platform strategy. Avoid generic advice like "move faster." Focus on compounding advantages and structural weaknesses.

**Goal:** Expose technical blind spots that could decide the winner in an AI-native market.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application/).

---

## Keep It Moving

- **[Your AI Assistant Just Moved Into Your DMs](https://techcrunch.com/2026/02/02/linq-raises-20m-to-enable-ai-assistants-to-live-within-messaging-apps/)** — Linq secures fresh capital to integrate intelligent assistants directly into your favorite messaging platforms, making AI a seamless part of daily group chats.
- **[Amazon's Melania Doc Just Crushed the Box Office](https://techcrunch.com/2026/02/01/amazons-melania-documentary-makes-7m-on-opening-weekend/)** — In a surprising turn for streaming-first studios, Amazon's theatrical release of the Melania Trump documentary rakes in millions on its opening weekend.
- **[Musk Is Merging SpaceX and xAI Infrastructure](https://techcrunch.com/2026/02/02/elon-musk-spacex-acquires-xai-data-centers-space-merger/)** — Elon Musk is blurring the lines between his companies again, with SpaceX officially acquiring xAI's massive data centers in a strategic infrastructure merger.
- **[Sam Altman Is Furious About Claude's Super Bowl Ad](https://techcrunch.com/2026/02/04/sam-altman-got-exceptionally-testy-over-claude-super-bowl-ads/)** — The OpenAI CEO reportedly lost his cool over a competitor's high-profile marketing splash during the Super Bowl.
- **[The Washington Post Is Done with Silicon Valley](https://techcrunch.com/2026/02/05/the-washington-post-is-retreating-from-silicon-valley-when-it-matters-most/)** — The newspaper of record is pulling back its presence in the tech capital right when industry scrutiny is needed most.
- **[Anthropic's Blog: Meet Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)** — Read the official breakdown of the new model capabilities directly from the research team at Anthropic.
- **[Amazon Stock Crashes as AI Spending Hits $200 Billion](https://www.geekwire.com/2026/amazon-stock-sinks-10-after-q4-profit-miss-as-jassy-signals-200b-in-capital-spending/)** — Investors punished Amazon with a 10% stock drop after CEO Andy Jassy signaled a massive $200B capital spending plan.
- **[The New Social App Growing Faster Than You Think](https://techcrunch.com/2026/02/02/upscrolleds-founder-says-the-social-network-has-zoomed-past-2-5m-users/)** — Upscrolled defies the odds by rocketing past 2.5 million users, proving there is still room for disruption in a saturated social media landscape.
- **[The iPhone Flip Is Finally Coming](https://www.techspot.com/news/111158-apple-could-follow-foldable-iphone-flip-style-model.html)** — Leaks suggest Apple is moving forward with a "flip-style" foldable phone, finally answering the market demand for a clam-shell iPhone.
- **[PayPal Poaches HP's Boss to Save the Business](https://techcrunch.com/2026/02/03/paypal-hires-hps-enrique-lores-as-its-new-ceo/)** — In a bid to turn the ship around, PayPal has hired Enrique Lores away from HP to serve as its new Chief Executive Officer.
- **[Anthropic Wants You to Stop Treating AI Like a Search Engine](https://www.anthropic.com/news/claude-is-a-space-to-think)** — The creators of Claude are rebranding the AI experience, positioning it not as an answer machine, but as a dedicated "space to think" for complex problem solving.
- **[The Startup Fixing the Grid from Your Garage](https://techcrunch.com/2026/02/04/lunar-energy-raises-232m-to-deploy-home-batteries-that-prop-up-the-grid/)** — Lunar Energy has raised a massive $232M round to deploy home battery systems designed to stabilize the failing power grid.
- **[Tinder Is Using AI to Cure Your Dating Burnout](https://techcrunch.com/2026/02/04/tinder-looks-to-ai-to-help-fight-swipe-fatigue-and-dating-app-burnout/)** — The dating giant is rolling out new AI features specifically designed to combat "swipe fatigue" and keep users from deleting the app.
- **[Uber Shakes Up Leadership to Bet Big on Robotaxis](https://techcrunch.com/2026/02/04/uber-appoints-new-cfo-as-its-av-plans-accelerate/)** — Uber appoints a new CFO as the company aggressively accelerates its timeline for deploying autonomous vehicle fleets.
- **[Substack Just Leaked Your Phone Number](https://techcrunch.com/2026/02/05/substack-confirms-data-breach-affecting-email-addresses-and-phone-numbers/)** — The newsletter platform has confirmed a security breach that exposed the email addresses and phone numbers of its user base.
- **[OpenAI Is Coming for Salesforce's Lunch](https://fortune.com/2026/02/05/openai-frontier-ai-agent-platform-enterprises-challenges-saas-salesforce-workday/)** — OpenAI's new enterprise agent platform is directly challenging SaaS incumbents like Salesforce and Workday, signaling a shift from partner to competitor.
- **[Alexa Is Finally Getting a Brain (Thanks to ChatGPT)](https://spyglass.org/alexa-plus-chatgpt/)** — Amazon is reportedly integrating ChatGPT into Alexa to finally make the voice assistant capable of conversational nuance.
- **[Spotify Just Became an Amazon Competitor](https://techcrunch.com/2026/02/05/spotify-ventures-into-physical-book-sales-adds-new-audiobook-features/)** — The streaming giant is expanding beyond audio and venturing into physical book sales, placing it in direct competition with Amazon.
- **[Apple CarPlay Will Finally Let You Dump Siri](https://www.techspot.com/news/111234-apple-may-soon-open-carplay-chatgpt-gemini-other.html)** — New updates to CarPlay may soon allow drivers to replace Siri with ChatGPT or Gemini for in-car assistance.
- **[A Senator Is Sounding the Alarm on Secret CIA Spying](https://techcrunch.com/2026/02/06/senator-who-has-repeatedly-warned-about-secret-u-s-government-surveillance-sounds-new-alarm-over-cia-activities/)** — A prominent U.S. Senator has issued a fresh warning regarding undisclosed surveillance activities by the CIA.
- **[Intel Declares War on Nvidia's GPU Monopoly](https://techcrunch.com/2026/02/03/intel-will-start-making-gpus-a-market-dominated-by-nvidia/)** — Intel is making a renewed, aggressive push into the standalone GPU market, attempting to break Nvidia's stranglehold on AI hardware.

---

## What I'm Thinking About

- The eternal sphere — [Blog](https://ryanestes.info/the-eternal-sphere-a-silent-witness-to-ages-past/)
- Stop coding — [Clip](https://www.youtube.com/shorts/kC25Cdtdv8I)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
  {
    id: 2,
    title: "Deals Corner, The Market Conspiracy, and a 15-Minute Mental Reset",
    excerpt: "Introducing Deals Corner for startups raising capital, a prompt that exposes hidden market forces working against you, and a sequencer that will melt your brain in the best way.",
    date: "2026-02-09",
    readTime: "12 min read",
    category: "Weekly Dispatch",
    slug: "deals-corner-market-conspiracy-mental-reset",
    featured: false,
    image: dealsCornerImg,
    content: `## The 15-Minute Mental Reset You Didn't Know You Needed

If you've got 15 minutes to burn and zero interest in being productive about it, my buddy Vince made something perfect for you.

It's a **dual-track, poly-metric sequencer**, which is a fancy way of saying: you press buttons, time bends a little, and suddenly you're nodding your head like you meant to understand rhythm theory.

Highly recommended as a short mental reset between meetings you didn't need to be on anyway. [Check it out here](https://vinceshury.com).

---

## Introducing: Deals Corner

We're adding a **Deals Corner.**

It's a small section dedicated to startups that are currently raising. Pre-seed, seed, "we have traction but our deck is a Google Doc," all welcome.

- No demo days.
- No warm intros required.
- Just who's building, what they're raising, and why it exists.

If you want an intro, reply to this email. If you're raising and want to be included, reply to this email. If you're both… **definitely reply to this email.**

This is not investment advice. It is an excuse to talk to other builders without pretending it's networking.

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid)

**Stops You From Donating Extra Money to the IRS**
Sai and Deduction.com make taxes painless for busy founders — get a human-reviewed return for $500 and instantly catch mistakes your accountant might miss.

**Apprentix.io — Turns Bureaucracy Into a $1M SaaS Opportunity**
Andy Seth shows founders how to niche down on regulatory bottlenecks, build software that businesses actually need, and hit massive revenue without a W2 employee in sight.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. **Warmstart AI is your ticket.**

---

## Deals Corner

### Cora
Cora is building a **self-optimizing website platform** that uses AI to continuously test, learn, and improve your site so it converts better — without you babysitting it.

### Voyager
Voyager is an **AI-native Web3 ecosystem** and multi-asset exchange. Trade digital assets and commodities in one seamless interface.

### RoboReliance
RoboReliance is building **autonomous robotic systems** designed to handle real-world industrial work — so humans don't have to stand next to dangerous, repetitive machines all day.

---

## Tip of the Spear

- **Nvidia's OpenAI Deal Could Be Its Biggest Bet Ever** — Jensen Huang hints that Nvidia's next move with OpenAI may dwarf every prior investment, signaling an arms race at historic scale.
- **OpenClaws AI Assistants Are Building Their Own Social Network** — AI agents aren't just posting anymore — they're organizing, networking, and creating their own digital society.
- **Apple Loses Top AI Talent Amid Siri Shake-Up** — Apple's AI brain drain raises questions about whether Cupertino can keep pace in the escalating model wars.
- **Musk Weighs Merging SpaceX With Tesla or xAI** — Elon Musk is reportedly exploring a mega-merger that could fuse rockets, EVs, and AI into one empire.
- **Apple Acquires Israeli AI Startup Q.ai** — Apple quietly snaps up Q.ai, signaling it's buying speed as the AI race accelerates.
- **Pentagon Clashes With Anthropic Over AI Access** — Tensions rise as the U.S. defense establishment and Anthropic reportedly spar over control and deployment of advanced AI systems.
- **FBI Informant Claims Epstein Had a Personal Hacker** — New allegations suggest Epstein may have employed a dedicated hacker, adding another layer to an already explosive saga.
- **Amazon in Talks to Invest $50B in OpenAI** — Amazon reportedly considers a staggering $50 billion OpenAI investment that could reshape cloud and AI alliances overnight.
- **Zuckerberg Teases Agentic Commerce Push for 2026** — Meta signals a future where AI agents don't just recommend products — they close the sale.

---

## Prompt of the Week: "The Market Conspiracy"

Ask your AI to imagine that your entire market is **secretly working against your startup** — intentionally or unintentionally. Generate 5–7 hidden forces, assumptions, or "rules" competitors and customers are following that are quietly holding you back.

**For each:**

- **Hidden Rule:** the subtle dynamic shaping outcomes
- **Why It Matters:** how it limits growth or adoption
- **Actionable Step:** one way to exploit, subvert, or work around it this week

**Goal:** Reveal blind spots in your market and turn hidden friction into leverage.

---

## Want More Customers?

Your story deserves more than LinkedIn posts your mom likes.

**Kitcaster** puts you on the shows your market trusts. [Apply today at kitcaster.com](https://kitcaster.com/application).

---

## Keep It Moving

- **Google's AI Game Tool Sparks Market Meltdown** — Project Genie promises AI-generated game worlds and Wall Street just punished traditional gaming giants for it.
- **SpaceX–Tesla–xAI Merger Talks Stir IPO Speculation** — Fresh reports of Musk-led consolidation ignite speculation about an eventual super-IPO.
- **Google Rolls Out Chrome's Auto-Browse AI Agent** — Chrome's new AI agent can navigate the web for you — clicking, reading, and acting while you sit back.
- **Amazon Confirms 16,000 More Layoffs** — Amazon deepens its workforce reductions, pushing total job cuts to a staggering new high.
- **Yahoo Scouts AI to Reinvent Itself** — Yahoo bets on AI-driven reinvention in a bid to stay relevant in a platform-dominated era.
- **Android Desktop Mode Leak Surfaces** — A leaked build suggests Google may finally turn Android into a true desktop competitor.
- **Amazon Shutters Physical Retail Stores** — Amazon retreats from brick-and-mortar, closing Go and Fresh locations to refocus on digital dominance.
- **Pinterest Cuts 15% of Staff to Double Down on AI** — Pinterest slashes jobs as it reallocates capital toward AI-powered growth.
- **Apple's New AirTag Is Louder and Longer-Range** — Apple upgrades AirTag with greater range and volume, making lost-item panic slightly less painful.
- **Gmail Spam Filters Go Haywire** — Users report Gmail misclassifying legitimate emails, raising concerns about AI-driven filtering accuracy.
- **Energy Department Loosens Nuclear Safety Rules** — Regulatory shifts could accelerate nuclear deployment while reigniting safety debates.
- **Arcee AI Builds 400B Open-Source Model** — A tiny startup claims it built a 400B-parameter open model from scratch and outperformed Meta's Llama.
- **Anthropic Launches Interactive Claude Apps** — Claude moves deeper into the workplace with interactive apps built for Slack and beyond.
- **Nvidia CEO Denies $100B OpenAI Investment Stall** — Jensen Huang pushes back against reports that Nvidia's massive OpenAI investment has hit turbulence.
- **Blue Origin Pauses Space Tourism to Chase the Moon** — Jeff Bezos shifts from joyrides to lunar ambition, shelving space tourism to double down on Moon missions.
- **Microsoft's Market Cap Surges on AI Earnings** — Strong AI-fueled earnings push Microsoft's valuation higher, reinforcing its dominance in the enterprise AI stack.
- **OpenAI IPO Talk Heats Up as Anthropic Looms** — The OpenAI IPO drumbeat grows louder, with Anthropic emerging as its most credible rival in the capital markets spotlight.
- **Nvidia and Mercedes Advance Robotaxi Plans** — The chip king and luxury automaker push closer to autonomous fleets powered by next-gen AI compute.
- **OpenAI Explores Biometric Social Network** — OpenAI reportedly eyes a biometric-based platform aimed at eliminating bots and redefining online identity.
- **Amazon to Pay $309M in Returns Settlement** — Amazon agrees to a $309 million settlement over returns policies, closing a costly consumer dispute.
- **Anthropic CEO Warns Humanity May Not Be Ready** — Anthropic's chief issues a stark warning that society may be underestimating the pace and power of advanced AI.

---

## What I'm Thinking About

- [Quick reminder about who's behind the screen](https://ryanestes.info)
- [The secret to crystal balls](/newsletter/ai-product-validator)
- [Build tech that matches what your customers need](/about)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## Code Story Podcast

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/application) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/ryanestes/), [X](https://x.com/ryan_estes), and [my blog](/blog).
    `,
  },
  {
    id: 1,
    title: "The AI Product Validator",
    excerpt: "Accelerating From Idea to MVP in 90 Days Using Large Language Models. Founders don't fail because they run out of money. They fail because they run out of clarity.",
    date: "2025-12-09",
    readTime: "8 min read",
    category: "AI Strategy",
    slug: "ai-product-validator",
    featured: false,
    image: aiValidatorImg,
    content: `## Accelerating From Idea to MVP in 90 Days Using Large Language Models

Founders don't fail because they run out of money.
They fail because they run out of clarity.

Clarity about what customers want, what to build, and whether the thing consuming their calendar, capital, and brain cycles even deserves to exist.

For a decade, clarity had cost:

- PM hours
- Design cycles
- Research teams
- Engineering sprints
- Painfully slow "we learned this the hard way" loops

**AI just deleted that era.**

LLMs don't make founders superhuman, they compress the distance between idea and insight. Validation now happens before expense, learning happens before code, and pivots happen before ego gets attached.

I call this compression system **The AI Product Validator** — a 90-day operating rhythm that moves you from raw concept to decision-ready MVP with real customer signal behind it.

Let's break it down.

---

## 1. Weeks 1–2: Validate Demand Before You Build Anything

Most founders start with code.
That's backwards.

You start with truth, and truth begins with pressure-testing the problem itself.

LLMs can synthesize the early discovery work that used to take entire product departments:

**Input:**
- Market
- Segment
- Hypothesis
- Constraints

**Output (in minutes):**
- Top pain patterns customers repeat
- Behavioral personas that reflect actual workflow realities
- Competitor positioning + blind spots
- Willingness-to-pay markers
- Channel heuristics showing where buyers live online

Your job is not to accept AI output as gospel.
Your job is to interrogate it:

- Does the pain show up consistently?
- Does solving it move economics or workflow in a meaningful way?
- Is this a vitamin, or is it insulin?
- Does your angle unlock a gap competitors left exposed?

If yes, you move forward.
If not, you pivot while the cost of change is still zero.

---

## 2. Weeks 3–4: Define the Solution With Precision

You've validated the problem.
Now shape the smallest viable form of the solution.

LLMs act as a speculative product architect:

- Feature list (then ruthless prioritization)
- User journeys and activation paths
- Data models and entity relationships
- Edge cases, objections, failure modes
- Integration maps and onboarding logic

Your role is to stress-test, simplify, and eliminate everything that isn't core to solving the pain you just validated.

Two weeks.
Not two months.

---

## 3. Weeks 5–8: Rapid Prototyping With AI as Your First Engineer

**Recommendation: Use BrainGrid.ai**

This is where founders win or drown.

AI doesn't remove the need for engineers.
It multiplies the ones you have.

BrainGrid.ai is the unfair advantage in this phase.
It lets you:

- Auto-generate boilerplate
- Scaffold architecture
- Accelerate non-differentiated code
- Debug continuously
- Document automatically
- Push releases daily instead of bi-weekly

Think of it as a productivity delta:

**One engineer + BrainGrid.ai = four engineers in 2021**

Instead of spending engineering hours on interfaces, endpoints, and infrastructure glue, BrainGrid.ai handles 60–70 percent of that so your team focuses on what actually differentiates your product.

The goal isn't beauty.
The goal is a testable, breakable, learnable prototype.

If users can click it, misuse it, break it, get stuck, and complain, congratulations — you finally have real signal.

---

## 4. Weeks 9–10: Reality Testing With Humans Who Don't Care About You

No more founder friends.
No more "this is cool" compliments.

You want:

- 20–30 beta users
- Real stakes
- Real friction

Collect:

- Where they hesitate
- Where they abandon
- Where confusion repeats
- What they expected but didn't get
- How they describe your product (that's your true messaging)

Every repeated frustration is a requirement.
Every drop-off is a redesign.

This two-week window will define the next two years of your roadmap.

---

## 5. Weeks 11–12: Ship, Pivot, or Kill

Most founders never formally decide.
They drift.

Now you have:

- Validated customer pain
- Contextual market map
- Crisp product spec
- Working MVP
- Real human usage data
- Value clarity
- Technical feasibility

Which means you can finally answer:
**Is this worth the next year of my life?**

### Options:

**Ship**
Refine → Launch → Focus on distribution
Momentum compounds.

**Pivot**
The pain is real, the implementation isn't.
Adjust, don't abandon.

**Kill**
The most underrated founder skill:
knowing what not to build.

Killing at day 90 saves you 365 days of sunk costs, investor pressure, and emotional drag.

---

## Why This Matters Right Now

Every generation of founders gets one unfair acceleration:

- 2000s: Internet
- 2010s: Mobile
- 2015–2020: Cloud
- Now: AI

The difference?
This isn't a tool upgrade.
It's a cycle-time collapse:

- Faster validation
- Cheaper learning
- Tighter roadmaps
- Less waste
- More shots on goal
- Higher hit rate

Founders who adopt this system won't outthink everyone else — they'll simply out-cycle them.

**Speed compounds.
Clarity compounds.
Momentum compounds.**

This is how a great idea becomes a product — and how a product becomes a company.
    `,
  },
  {
    id: 3,
    title: "OpenAI Dumps Apple, Meta Pulls the Plug, and YouTube Wants Your Face",
    excerpt: "Your website is the dumbest part of your business. Plus: OpenAI ditches Apple for its own device, Meta kills the office metaverse, YouTube wants to clone creators with AI, and the prompt that builds absurdly overpowered features.",
    date: "2026-01-27",
    readTime: "12 min read",
    category: "Weekly Dispatch",
    slug: "openai-dumps-apple-meta-pulls-plug-youtube-wants-your-face",
    featured: false,
    image: openaiAppleImg,
    content: `## Your Website Is the Dumbest Part of Your Business

Your website is the dumbest part of your business. [Cora](https://www.getcora.io/20th3G4mH4sch4nd26) would like to fix that.

Cora just came out of stealth with a mildly uncomfortable observation: email optimizes itself, ads optimize themselves, pricing optimizes itself… and your website just kind of sits there. Judging. Converting poorly.

Cora's take is refreshingly blunt. The problem isn't lack of data. It's lack of action.

So instead of another dashboard telling you what users hate, Cora actually changes the site. Automatically. Continuously. No tickets. No hypotheses. No waiting for Q3.

Think: an AI UI/UX team living inside your website, quietly removing friction while you do literally anything else.

Static websites had a good run. Now they're on borrowed time.

If you'd like an intro to the founder, reply here.

**Let's go.**

---

## This Week from the [AI for Founders Podcast](/podcast-grid) on [Spotify](https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va)

**Healthcare Doesn't Have a Diagnosis Problem, It Has a Time Problem —** [LINK](https://open.spotify.com/episode/...)
Most patients get only 13 minutes with a doctor, leading to pills instead of answers. Haresh Patel explains why founders need to build a "13-minute advantage" to give doctors their brains back rather than just building more tech.

**[Saturnia Design](https://saturniadesign.com/) — Your "Vibe Coded MVP" Is About to Break —** [LINK](https://open.spotify.com/episode/...)
Need to stop guessing, audit your chaos, and validate with real users before writing another line of code.

---

## Never Let Valuable Relationships Slip Away

Smart reminders that revive the relationships you forget. Effortless follow-ups that actually get real responses. [Warmstart AI](https://warmstart.ai/aiff) is your ticket.

---

## Tip of the Spear

- **[OpenAI Ditched Apple to Build Its Own Device](https://techcrunch.com/)** — Sam Altman and his team reportedly walked away from a massive Apple partnership to pursue their own dedicated AI hardware ambitions instead.
- **[Meta Just Killed the Office Metaverse](https://techcrunch.com/)** — Another blow to Zuckerberg's immersive vision as Meta quietly shuts down its "Metaverse for Work" initiatives.
- **[Trump's Energy Auction Is a Nightmare for Data Centers](https://techcrunch.com/)** — New administration policies on electricity auctions are driving up power costs, threatening the massive infrastructure required to power the AI boom.
- **[The EPA Just Busted Musk's xAI](https://techcrunch.com/)** — Regulators have ruled that xAI's massive natural gas generators were operated illegally to power its AI supercluster.
- **[Leaked Docs Expose the Real Microsoft-OpenAI Deal](https://techcrunch.com/)** — Internal files reveal the tension and financial realities behind the defining alliance between the tech giant and the AI startup.
- **[YouTube Wants You to Clone Yourself with AI](https://techcrunch.com/)** — New tools will allow creators to generate Shorts using an official AI version of their own face and voice.
- **[This Robot Survived a Category 5 Hurricane](https://techcrunch.com/)** — Oshen has made history by successfully deploying an ocean robot to gather crucial data directly inside the eye of a massive storm.
- **[Bezos Declares War on Starlink](https://techcrunch.com/)** — Jeff Bezos ramps up Blue Origin and Amazon's satellite efforts to challenge SpaceX's dominance in space-based internet.

---

## Prompt of the Week: "The Absurdly Overpowered Feature"

Analyze my startup (product, customers, revenue model, team, goals, and market context) and generate 5–7 insanely overpowered product features — features so extreme, audacious, or counterintuitive that they could redefine the market if executed.

For each feature, include:

- **Feature:** the over-the-top, "nobody would dare" concept
- **Why It Matters:** a sharp explanation of the leverage, edge, or hidden advantage it could create
- **Actionable Step:** one concrete experiment, iteration, or mini-launch inspired by the idea that I could implement immediately

*Instructions: Be bold, provocative, and imaginative — push beyond conventional limits. Avoid generic or safe suggestions. Focus on uncovering hidden differentiators, unconventional growth opportunities, and moves that could give your startup an unfair advantage.*

---

## Keep It Moving

- **[X Open Sources Code While Paying Fines](https://techcrunch.com/)** — In a chaotic move, X releases its algorithm code simultaneously while battling transparency fines and controversies over Grok.
- **[Silicon Valley's Ugliest Breakup Is Going to Court](https://techcrunch.com/)** — The drama isn't over yet as a high-profile startup split escalates into a full-blown legal battle.
- **[Threads Just Passed X in Users](https://techcrunch.com/)** — New data reveals Meta's text app has finally edged out Elon Musk's X in daily mobile usage.
- **[The Rise of Micro-Apps: Why You Might Stop Buying Software](https://techcrunch.com/)** — Non-developers are taking control of software creation by building "micro-apps."
- **[OpenAI Is Funding Mind-Reading Tech (Yes, Really)](https://techcrunch.com/)** — The AI giant has invested in Merge Labs, a brain-computer interface startup backed by Sam Altman.
- **[Ads Are Finally Coming to ChatGPT](https://techcrunch.com/)** — The ad-free era is ending as OpenAI begins rolling out advertising within ChatGPT.
- **[Murdoch's Empire Just Bet Big on This AI Startup](https://techcrunch.com/)** — Symbolic AI has secured a major partnership with News Corp.
- **[Google Promises No Ads in Gemini](https://techcrunch.com/)** — DeepMind's CEO confirms there are currently no plans to clutter the Gemini AI model with advertisements.
- **[Ex-Googlers Are Reinventing Kids' Learning](https://techcrunch.com/)** — A trio of former Google employees launches an interactive, AI-first application designed to change how children learn.
- **[Musk Reboots Tesla's Supercomputer Project](https://techcrunch.com/)** — Tesla is restarting development on Dojo3 for autonomous driving.
- **[Apple's Plan to Save Siri from OpenAI](https://techcrunch.com/)** — Apple is reportedly overhauling Siri into a full-fledged built-in chatbot for iPhone and Mac.

---

## What I'm Thinking About

- Should you be calling your company a family? — [Clip](https://youtube.com/shorts/)
- Turning Fear into Growth — [Interview](https://ryanestes.info/)
- Machine Intelligence Behind The Scenes — [Blog](https://ryanestes.info/)
- [Uncover the AI tools you didn't ask for, but now you're weirdly into](/resources)

---

## [Code Story Podcast](https://codestory.co?utm_source=newsletterorpodcast&utm_medium=emailorepisode&utm_id=aiforfounders)

It's like therapy for startup founders, except the therapist is a microphone and everyone's listening. Code, chaos, and confessions — served weekly.

---

**Thanks for being here.**

**-Ryan**

---

### P.S. When you are ready, here's how I can help.

We have successfully booked podcast interviews for **over 800 funded startup founders**, entrepreneurs with exits, and C-suite executives. If you're ready to lead your company from the front, let [Kitcaster](https://kitcaster.com/) handle your podcast scheduling and create a powerful stream of content for you and your brand.

I write about Revops, Product, and Founder-led marketing on [LinkedIn](https://www.linkedin.com/in/estesryan/), [X](https://x.com/GoRyanEstes), and [my blog](https://ryanestes.info/ryan-estes/).
    `,
  },
];

export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
