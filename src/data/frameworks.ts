export interface Framework {
  name: string;
  summary: string;
  detail: string;
  episode: {
    title: string;
    slug: string;
    guest: string;
  };
  tags: string[];
}

export const frameworks: Framework[] = [
  // Ohad Shaked — Stop Building, Do This First
  {
    name: "Respect the Process",
    summary: "Validate before you execute. Fall in love with the problem, not the solution.",
    detail: "The core belief is to respect validation before execution. Separate the problem from the solution, identify the target persona, conduct structured customer interviews, track weak and strong signals, and analyze patterns before building. Founders must fall in love with the problem — not the solution.",
    episode: {
      title: "Stop Building, Do This First",
      slug: "stop-building-do-this-first",
      guest: "Ohad Shaked",
    },
    tags: ["Validation", "Strategy"],
  },
  {
    name: "Red Flag Framework",
    summary: "Clear kill signals that tell you when to walk away from a startup idea.",
    detail: "Key kill signals include: no emotional engagement with the problem, prospects redirect the conversation, they already have a satisfying solution. Additional red flags: strong incumbents with no differentiation, 5–10 interviews showing zero urgency, and no payment after 12–24 months of 'positive interest.' Validation is not polite interest — validation is money.",
    episode: {
      title: "Stop Building, Do This First",
      slug: "stop-building-do-this-first",
      guest: "Ohad Shaked",
    },
    tags: ["Validation", "Risk"],
  },
  {
    name: "Distribution Before Product",
    summary: "Build an audience before building the product. Distribution is an asset, not an afterthought.",
    detail: "Modern founders validate publicly by building an audience before building the product, posting about the problem space, testing resonance through content, gathering inbound conversations, and creating early community. Distribution is not an afterthought — it is an asset.",
    episode: {
      title: "Stop Building, Do This First",
      slug: "stop-building-do-this-first",
      guest: "Ohad Shaked",
    },
    tags: ["Marketing", "Growth"],
  },
  {
    name: "Emotional Rollercoaster Model",
    summary: "A leadership framework for navigating the euphoria and despair cycles every founder faces.",
    detail: "Every founder experiences euphoria when dashboards grow and despair when growth dips. The leadership solution includes radical transparency, shared decision-making, delegation and independence, equity alignment, and emotional design inside the product. Loneliness shrinks when ownership expands.",
    episode: {
      title: "Stop Building, Do This First",
      slug: "stop-building-do-this-first",
      guest: "Ohad Shaked",
    },
    tags: ["Leadership", "Resilience"],
  },
  {
    name: "Founder Readiness Checklist",
    summary: "The pre-fundraising checklist that reduces investor doubt and increases conviction.",
    detail: "Before raising startup funding, founders should demonstrate: completed customer interviews, market sizing clarity, competitive advantage (IP, data, network effects, domain expertise), team capability (especially technical execution), and evidence of momentum. Unchecked boxes reduce investor conviction.",
    episode: {
      title: "Stop Building, Do This First",
      slug: "stop-building-do-this-first",
      guest: "Ohad Shaked",
    },
    tags: ["Fundraising", "Validation"],
  },
  {
    name: "Roadmap Beyond Validation",
    summary: "The map extends beyond ideation into execution — from fundraising prep to agentic AI workflows.",
    detail: "The future roadmap includes fundraising preparation tools, investor CRM management, comparable company analysis, startup valuation benchmarking, MVP launch support, and marketing and sales planning. Agentic AI capabilities for competitive alerts, market updates, and automated workflows extend the map beyond ideation into execution.",
    episode: {
      title: "Stop Building, Do This First",
      slug: "stop-building-do-this-first",
      guest: "Ohad Shaked",
    },
    tags: ["Strategy", "Execution"],
  },

  // Dr. Jonathan Schafer — AI Is Quietly Stealing Your Life's Work
  {
    name: "The Data Is the Moat",
    summary: "Your competitive advantage isn't the model — it's the unique data only you own.",
    detail: "Instead of asking 'What model are you using?' ask 'What unique data do you own?' Your unstructured IP is latent product potential. Your archives are future courses, consulting offers, and proprietary tools. Your competitors cannot replicate what only exists inside your files. The defensibility is not scale — it is uniqueness. AI without proprietary data is a commodity. AI with your data is leverage.",
    episode: {
      title: "AI Is Quietly Stealing Your Life's Work",
      slug: "ai-is-quietly-stealing-your-life-s-work",
      guest: "Dr. Jonathan Schafer",
    },
    tags: ["Data", "Competitive Advantage"],
  },
  {
    name: "Personal AI Librarian",
    summary: "An AI that knows everything in your library — and only your library. Trust through constraint.",
    detail: "You create collections from subsets of your files. The AI performs a one-time deep analysis, indexes and embeds your documents locally. All answers are citation-based with no external internet contamination and no hallucinations. This solves a core founder pain: Trust.",
    episode: {
      title: "AI Is Quietly Stealing Your Life's Work",
      slug: "ai-is-quietly-stealing-your-life-s-work",
      guest: "Dr. Jonathan Schafer",
    },
    tags: ["AI Architecture", "Privacy"],
  },
  {
    name: "Privacy-First Architecture",
    summary: "Keep computation on your machine. Keep ownership. Keep agency.",
    detail: "Traditional model: upload data to the cloud, accept unknown terms of service, trade IP for convenience. Privacy-first model: keep computation on your machine, keep ownership, keep agency. This framework reframes AI as individual infrastructure — not corporate dependency.",
    episode: {
      title: "AI Is Quietly Stealing Your Life's Work",
      slug: "ai-is-quietly-stealing-your-life-s-work",
      guest: "Dr. Jonathan Schafer",
    },
    tags: ["Privacy", "AI Architecture"],
  },
  {
    name: "Preparation Over Heroics",
    summary: "Inspired by Amundsen's South Pole expedition — preparation beats bravado, process beats ego.",
    detail: "Contrasts two approaches: Scott — seat of the pants, emotional, reactive, fatal. Amundsen — methodical, prepared, calculated, survived. Applied to founders: preparation beats bravado, process beats ego, planning beats hype.",
    episode: {
      title: "AI Is Quietly Stealing Your Life's Work",
      slug: "ai-is-quietly-stealing-your-life-s-work",
      guest: "Dr. Jonathan Schafer",
    },
    tags: ["Leadership", "Strategy"],
  },
  {
    name: "Passion Over Market Signaling",
    summary: "Follow your curiosity. Talent compounds when paired with intrinsic interest.",
    detail: "When asked what he would study today — not computer science. Archeology. Follow your curiosity. AI may disrupt industries. Passion sustains long-term excellence. Talent compounds when paired with intrinsic interest.",
    episode: {
      title: "AI Is Quietly Stealing Your Life's Work",
      slug: "ai-is-quietly-stealing-your-life-s-work",
      guest: "Dr. Jonathan Schafer",
    },
    tags: ["Career", "Mindset"],
  },
  {
    name: "Founder-Led Marketing With Support",
    summary: "Knowing what you don't know is a strategic advantage — outsource where necessary.",
    detail: "Although a technical founder, Dr. Schafer embraced visibility — podcasts, professional marketing teams, data-driven go-to-market, outsourced expertise when necessary. Knowing what you do not know is a strategic advantage.",
    episode: {
      title: "AI Is Quietly Stealing Your Life's Work",
      slug: "ai-is-quietly-stealing-your-life-s-work",
      guest: "Dr. Jonathan Schafer",
    },
    tags: ["Marketing", "Growth"],
  },

  // Alyssa Eidam — She Exited in 18 Months Then Walked Away to Find Stillness
  {
    name: "Broken Systems Break Faster",
    summary: "If the underlying system is flawed, AI accelerates existing inefficiencies rather than solving them.",
    detail: "Adding AI to a broken workflow doesn't fix it — it amplifies the dysfunction. Founders should audit the system first and fix architecture before automating processes. AI is an accelerant: it makes good systems great and bad systems worse.",
    episode: {
      title: "She Exited in 18 Months Then Walked Away to Find Stillness",
      slug: "she-exited-in-18-months-then-walked-away-to-find-stillness",
      guest: "Alyssa Eidam",
    },
    tags: ["AI Architecture", "Execution"],
  },
  {
    name: "AI-Native Design",
    summary: "Integrate intelligence at the architectural level — prediction over chat, reasoning over prompts.",
    detail: "AI-native product design integrates intelligence at the architectural level, using predictive reasoning within workflows rather than adding a chatbot interface to existing software. Prediction reduces friction by delivering outcomes proactively, eliminating the need for user prompts.",
    episode: {
      title: "She Exited in 18 Months Then Walked Away to Find Stillness",
      slug: "she-exited-in-18-months-then-walked-away-to-find-stillness",
      guest: "Alyssa Eidam",
    },
    tags: ["Product Design", "AI Architecture"],
  },
  {
    name: "Exploration as Competitive Advantage",
    summary: "New stimuli and data increase creative synthesis and strategic insight.",
    detail: "Exploration introduces new stimuli and data, which increases creative synthesis and strategic insight. Rather than optimizing within known constraints, founders who explore broadly develop pattern recognition that creates asymmetric advantages.",
    episode: {
      title: "She Exited in 18 Months Then Walked Away to Find Stillness",
      slug: "she-exited-in-18-months-then-walked-away-to-find-stillness",
      guest: "Alyssa Eidam",
    },
    tags: ["Creativity", "Mindset"],
  },
  {
    name: "Three Layers of Consciousness",
    summary: "Conscious, subconscious, and unconscious forces all shape founder decision-making.",
    detail: "Conscious behavior is deliberate decision making. Subconscious influences are accessible emotional drivers. Unconscious forces are deep survival or suppressed patterns shaping behavior. Understanding all three layers gives founders greater self-awareness and leadership clarity.",
    episode: {
      title: "She Exited in 18 Months Then Walked Away to Find Stillness",
      slug: "she-exited-in-18-months-then-walked-away-to-find-stillness",
      guest: "Alyssa Eidam",
    },
    tags: ["Leadership", "Mindset"],
  },
  {
    name: "Presence as Creative Infrastructure",
    summary: "Stillness reduces cognitive overload and increases clarity in high-leverage decisions.",
    detail: "Stillness reduces cognitive overload, improves pattern recognition, and increases clarity in high-leverage decision making. Presence is not passive — it is the foundation for the kind of deep work that produces breakthrough insights.",
    episode: {
      title: "She Exited in 18 Months Then Walked Away to Find Stillness",
      slug: "she-exited-in-18-months-then-walked-away-to-find-stillness",
      guest: "Alyssa Eidam",
    },
    tags: ["Resilience", "Creativity"],
  },
  {
    name: "Design as Physical Practice",
    summary: "Embodied practice like calisthenics builds the discipline and presence that fuels creative work.",
    detail: "Physical practice — particularly bodyweight-based training emphasizing control and mobility — creates a feedback loop with creative and strategic work. The discipline of physical mastery translates directly to product design and leadership presence.",
    episode: {
      title: "She Exited in 18 Months Then Walked Away to Find Stillness",
      slug: "she-exited-in-18-months-then-walked-away-to-find-stillness",
      guest: "Alyssa Eidam",
    },
    tags: ["Mindset", "Resilience"],
  },
  {
    name: "Healthcare as Supply Chain",
    summary: "AI agents can optimize scheduling, matching, and logistics in high-demand healthcare labor markets.",
    detail: "Healthcare staffing is fundamentally a supply chain problem. AI agents can optimize scheduling, match clinicians to roles, and improve logistics in high-demand labor markets. Treating healthcare operations as supply chain unlocks efficiency gains that traditional approaches miss.",
    episode: {
      title: "She Exited in 18 Months Then Walked Away to Find Stillness",
      slug: "she-exited-in-18-months-then-walked-away-to-find-stillness",
      guest: "Alyssa Eidam",
    },
    tags: ["Healthcare", "Operations"],
  },

  // Software episode — Most Founders Pick the Wrong Tools
  {
    name: "The 'Looks Easy Online' Illusion",
    summary: "Information abundance creates false confidence. Popularity doesn't equal suitability.",
    detail: "We can shortlist a restaurant in minutes but choosing software feels like defusing a bomb. Information abundance creates false confidence. SEO rankings masquerade as expertise. Surface-level reviews ignore operational nuance. Popularity ≠ suitability. The illusion isn't lack of information — it's mistaking information for clarity.",
    episode: {
      title: "Most Founders Pick the Wrong Tools",
      slug: "most-founders-pick-the-wrong-tools",
      guest: "Ryan Estes",
    },
    tags: ["Decision Making", "Software"],
  },
  {
    name: "Non-Technical Hero's Dilemma",
    summary: "High-stakes infrastructure decisions assigned to people who aren't software evaluators.",
    detail: "In most companies, the software decision doesn't go to a CTO. It goes to the HR manager, the marketing lead, the accounting director. They carry the pressure of making a choice that affects everyone. High-stakes infrastructure decisions assigned to non-technical operators creates emotional weight and decision fatigue. The problem isn't competence — it's context.",
    episode: {
      title: "Most Founders Pick the Wrong Tools",
      slug: "most-founders-pick-the-wrong-tools",
      guest: "Ryan Estes",
    },
    tags: ["Decision Making", "Leadership"],
  },
  {
    name: "Directory vs. Human Model",
    summary: "Directories give you lists. Humans give you questions. Guidance compresses time.",
    detail: "A directory might tell you the top 10 HR tools globally. A guide might ask: 'How many employees?' 'Remote or in-office?' 'Payroll complexity?' 'What's breaking today?' Directory model: aggregated reviews, vendor rankings, feature comparisons, minimal personalization. Human-centric model: context-first conversations, workflow alignment, budget sensitivity, growth-stage awareness. Guidance compresses time. Lists expand it.",
    episode: {
      title: "Most Founders Pick the Wrong Tools",
      slug: "most-founders-pick-the-wrong-tools",
      guest: "Ryan Estes",
    },
    tags: ["Software", "Strategy"],
  },
  {
    name: "Software Fit Equation",
    summary: "Fit = Use Case + Workflow + Budget + Skill Level. The best tool is the one your team actually uses.",
    detail: "Not all 'best' tools are best for you. The right software emerges from alignment, not hype. Fit = Use Case + Workflow + Budget + Skill Level. Feature count is often irrelevant. Adoption matters more than capability. The best tool is the one your team actually uses. Fit compounds. Friction compounds faster.",
    episode: {
      title: "Most Founders Pick the Wrong Tools",
      slug: "most-founders-pick-the-wrong-tools",
      guest: "Ryan Estes",
    },
    tags: ["Software", "Execution"],
  },
  {
    name: "Momentum Preservation Principle",
    summary: "Every week spent evaluating software is a week not shipping. Decision speed is a competitive advantage.",
    detail: "Every week spent evaluating software is a week not shipping product, hiring talent, or closing deals. The hidden cost isn't the subscription — it's the stall. Decision speed is a competitive advantage. Confident choices outperform perfect ones. Analysis paralysis drains morale. Execution velocity compounds growth. Software decisions should create leverage, not delay it.",
    episode: {
      title: "Most Founders Pick the Wrong Tools",
      slug: "most-founders-pick-the-wrong-tools",
      guest: "Ryan Estes",
    },
    tags: ["Execution", "Decision Making"],
  },

  // Adam McAllinan — Congrats on the Revenue — Sorry About Your Money
  {
    name: "Profit Foundation First",
    summary: "If you don't know how much you should be spending, ads become gambling.",
    detail: "High ROAS can still mean you're losing money. Profitability is a math problem, but founders must know how to build the equation. The dangerous moment is the 'inflection spike' — when you scale spend and costs without understanding margins. Without a profit foundation, revenue growth masks cash burn.",
    episode: {
      title: "Congrats on the Revenue — Sorry About Your Money",
      slug: "congrats-on-the-revenue-sorry-about-your-money",
      guest: "Adam McAllinan",
    },
    tags: ["Profitability", "Strategy"],
  },
  {
    name: "Three-Bucket Expense Model",
    summary: "Separate fixed, variable, and advertising expenses — treat ads like controllable fuel.",
    detail: "Fixed expenses (payroll, legal, accounting) exist whether you sell or not. Variable expenses (COGS, shipping, fulfillment) are tied to revenue. Advertising gets its own bucket treated like fuel you can ramp up or down quickly. Influencer spend and unconventional ads are variable sales expenses, not fast-ramp fuel. This model gives operators clarity on what they can control.",
    episode: {
      title: "Congrats on the Revenue — Sorry About Your Money",
      slug: "congrats-on-the-revenue-sorry-about-your-money",
      guest: "Adam McAllinan",
    },
    tags: ["Operations", "Profitability"],
  },
  {
    name: "AI Can Do the Math, Not Build the Equation",
    summary: "AI is powerful at computation — but founders still need the right questions and guardrails.",
    detail: "AI can compute and synthesize well, but founders still need the right framework, definitions, and questions to turn data into correct decisions. The future is not dashboards — the future is a conversation with your business, and eventually, permission to let it act.",
    episode: {
      title: "Congrats on the Revenue — Sorry About Your Money",
      slug: "congrats-on-the-revenue-sorry-about-your-money",
      guest: "Adam McAllinan",
    },
    tags: ["AI Architecture", "Decision Making"],
  },
  {
    name: "Agentic Layer With Security Guardrails",
    summary: "Sensitive financial data needs a secure foundation — not dumped into random tools.",
    detail: "Use API constraints so an agent can only pull what it's asked for. Keep math and logic inside the core system — do not let the agent invent equations. Train the agent on a structured framework (the founder's playbook), not vibes. Security-first agentic design protects data while enabling conversational access to business intelligence.",
    episode: {
      title: "Congrats on the Revenue — Sorry About Your Money",
      slug: "congrats-on-the-revenue-sorry-about-your-money",
      guest: "Adam McAllinan",
    },
    tags: ["AI Architecture", "Privacy"],
  },
  {
    name: "Valley of Despair Cycle",
    summary: "Companies die because founders quit — not because they get murdered by competition.",
    detail: "Early stage is painful and slow. Then traction hits, and founders panic-hire and ramp spend. Then the P&L shows a loss, and they don't know why. The valley of despair is where most companies stall — not from external threats but from founders losing the will to push through operational confusion.",
    episode: {
      title: "Congrats on the Revenue — Sorry About Your Money",
      slug: "congrats-on-the-revenue-sorry-about-your-money",
      guest: "Adam McAllinan",
    },
    tags: ["Resilience", "Leadership"],
  },
  {
    name: "IP and Patent Enforcement Strategy",
    summary: "Patents only matter if you enforce them — use litigation strategically to validate IP.",
    detail: "Use litigation to obtain court-recognized validation (consent judgment). Design patents often move faster than utility patents. Keep utility patents open via continuation processes (CIP) to evolve protection as copycats design around you. Build a portfolio over time — Adam reached 42 patents at acquisition.",
    episode: {
      title: "Congrats on the Revenue — Sorry About Your Money",
      slug: "congrats-on-the-revenue-sorry-about-your-money",
      guest: "Adam McAllinan",
    },
    tags: ["Competitive Advantage", "Strategy"],
  },
  {
    name: "Content in the AI Age — Return to Human",
    summary: "Founder story and personal content is becoming more valuable as AI-generated content floods the market.",
    detail: "People are increasingly skeptical of what's real. The closer AI gets to 'uncanny real,' the more backlash it can trigger. Best practice for smaller brands: personal presence and truth, not synthetic perfection. Authenticity becomes the differentiator when everything else can be generated.",
    episode: {
      title: "Congrats on the Revenue — Sorry About Your Money",
      slug: "congrats-on-the-revenue-sorry-about-your-money",
      guest: "Adam McAllinan",
    },
    tags: ["Marketing", "Mindset"],
  },
  {
    name: "3D Printing Opportunity — Moving Atoms",
    summary: "Bespoke manufacturing for niche communities where supply chains are slow or weak.",
    detail: "Physical goods are still real-world logistics. 3D printing is becoming accessible and high quality. The opportunity is in niche replacement parts and custom solutions — especially where shipping is slow or supply chains are weak. The future looks like bespoke manufacturing for specific communities and products.",
    episode: {
      title: "Congrats on the Revenue — Sorry About Your Money",
      slug: "congrats-on-the-revenue-sorry-about-your-money",
      guest: "Adam McAllinan",
    },
    tags: ["Execution", "Operations"],
  },
  {
    name: "Durability Through Hard Things",
    summary: "Building comfort with discomfort keeps founders in the game long enough to win.",
    detail: "Montana lifestyle as training ground for entrepreneurship. Archery hunting, alpine runs, and intentional discomfort. The point is building comfort with discomfort. Entrepreneurship is a long game — durability keeps founders in it long enough to reach the inflection point instead of quitting during the valley of despair.",
    episode: {
      title: "Congrats on the Revenue — Sorry About Your Money",
      slug: "congrats-on-the-revenue-sorry-about-your-money",
      guest: "Adam McAllinan",
    },
    tags: ["Resilience", "Mindset"],
  },

  // Oleg Golynker — Social Media Is Killing Your Memories
  {
    name: "Attention vs Recall Framework",
    summary: "Attention is rented from platforms. Recall is owned within community.",
    detail: "Products optimized for virality often erode meaning. Attention depends on platform algorithms you don't control. Recall lives within your community and compounds loyalty over time without algorithmic permission. Durable companies design for remembered impact, not just reach.",
    episode: {
      title: "Social Media Is Killing Your Memories",
      slug: "social-media-is-killing-your-memories",
      guest: "Oleg Golynker",
    },
    tags: ["Product Design", "Strategy"],
  },
  {
    name: "Fragmentation to Narrative Model",
    summary: "AI can structure scattered artifacts into coherent shared narratives.",
    detail: "Modern experiences are captured in fragments — photos, voice notes, chat messages scattered across platforms without structure. AI can identify emotional signals, match timestamps and contexts, and automatically weave contributions from multiple participants into a coherent narrative. Memory becomes a product layer.",
    episode: {
      title: "Social Media Is Killing Your Memories",
      slug: "social-media-is-killing-your-memories",
      guest: "Oleg Golynker",
    },
    tags: ["AI Architecture", "Product Design"],
  },
  {
    name: "Tribe Over Algorithm Philosophy",
    summary: "Private shared memory compounds community loyalty. Deep connection outperforms shallow reach.",
    detail: "Social feeds prioritize strangers. Meaningful moments happen in small groups. Brands built on shared meaning outlast those built on impressions. Private shared memory compounds community loyalty because deep connection outperforms shallow reach long term.",
    episode: {
      title: "Social Media Is Killing Your Memories",
      slug: "social-media-is-killing-your-memories",
      guest: "Oleg Golynker",
    },
    tags: ["Marketing", "Growth"],
  },
  {
    name: "Emotional Retention Strategy",
    summary: "Customers remember how they felt. Retention shifts from functional to relational.",
    detail: "AI can surface emotional signals within captured moments. Product design can intentionally reinforce belonging. When retention shifts from functional to relational, customers stay because of how the product makes them feel — not just what it does. Emotional retention compounds loyalty in ways transactional utility cannot.",
    episode: {
      title: "Social Media Is Killing Your Memories",
      slug: "social-media-is-killing-your-memories",
      guest: "Oleg Golynker",
    },
    tags: ["Growth", "Mindset"],
  },

  // Marcin Dąbrowski — The Uncanny Valley Is Real
  {
    name: "Scale vs Control",
    summary: "Control creates staged stability. Scale demands adaptation under change.",
    detail: "Founders often confuse control with progress. Control creates staged stability in predictable environments, but scale demands adaptation under change. If your company only works in perfect conditions, it is fragile. Real intelligence — in both founders and robots — is the ability to adapt when the environment changes.",
    episode: {
      title: "The Uncanny Valley Is Real",
      slug: "the-uncanny-valley-is-real",
      guest: "Marcin Dąbrowski",
    },
    tags: ["Strategy", "Leadership"],
  },
  {
    name: "Infrastructure vs Intelligence",
    summary: "Markers and tape are training wheels. Vision-based autonomy uses natural features.",
    detail: "Traditional industrial robots rely on fixed infrastructure — QR codes, magnetic tape, redesigned warehouses. Vision-based autonomy uses natural features and reduces environmental dependencies. The shift from infrastructure to intelligence mirrors a broader founder lesson: build systems that work in the world as it is, not as you wish it were.",
    episode: {
      title: "The Uncanny Valley Is Real",
      slug: "the-uncanny-valley-is-real",
      guest: "Marcin Dąbrowski",
    },
    tags: ["AI Architecture", "Execution"],
  },
  {
    name: "The 'Eyes and Brain' Strategy",
    summary: "Be the critical subsystem, not the entire robot. Win by becoming the platform layer.",
    detail: "Instead of building the whole robot, Sevensense builds the sensing and compute layer — the eyes and brain — that gives any mobile robot spatial awareness and navigation intelligence. By becoming the critical subsystem integrated into many vehicles, you win by becoming the platform layer rather than competing in finished hardware.",
    episode: {
      title: "The Uncanny Valley Is Real",
      slug: "the-uncanny-valley-is-real",
      guest: "Marcin Dąbrowski",
    },
    tags: ["Competitive Advantage", "Strategy"],
  },
  {
    name: "Robustness Moat",
    summary: "Shipping early in harsh conditions forces maturity. Reliability beats demos.",
    detail: "Sevensense proved their technology by shipping autonomous cleaning machines into real deployments early, forcing the system to work for non-roboticists with real customers and real consequences. That pain became the advantage. Robustness becomes the moat because reliability beats demos in industrial markets.",
    episode: {
      title: "The Uncanny Valley Is Real",
      slug: "the-uncanny-valley-is-real",
      guest: "Marcin Dąbrowski",
    },
    tags: ["Execution", "Competitive Advantage"],
  },
  {
    name: "Social Robotics Layer",
    summary: "Intent signaling builds trust. Human prediction and negotiation improve acceptance.",
    detail: "Robots need to communicate intent so humans trust them — lights, sounds, turn signals, speed indicators. And robots need to understand humans as humans, not just obstacles. Predict motion. Yield. Negotiate the sidewalk dance. The future of robotics is not only engineering. It is manners.",
    episode: {
      title: "The Uncanny Valley Is Real",
      slug: "the-uncanny-valley-is-real",
      guest: "Marcin Dąbrowski",
    },
    tags: ["Product Design", "AI Architecture"],
  },
  {
    name: "Deep Tech Commercialization Path",
    summary: "From university spinout to strategic acquisition — a staged funding and validation roadmap.",
    detail: "The deep tech commercialization path follows a staged progression: university spinout support, incubator seed resources, early flagship customer project, proof in the field, Series A scale, and eventually strategic acquisition. Each stage validates the next. The common founder money trap is spending heavily on exciting R&D that is not driven by a clear market need.",
    episode: {
      title: "The Uncanny Valley Is Real",
      slug: "the-uncanny-valley-is-real",
      guest: "Marcin Dąbrowski",
    },
    tags: ["Fundraising", "Strategy"],
  },

  // James Everingham — Speed Is Killing AI Startups
  {
    name: "Stability Over Speed",
    summary: "Shipping faster is not always progress — fragile wins disappear if you cannot reproduce them.",
    detail: "In AI, fragile wins can disappear if you cannot reproduce them. The real advantage is not velocity alone, but compounding correctly. Logged runs, controlled variables, and traceability turn luck into repeatable learning. If progress depends on a few people remembering what worked, the company is exposed.",
    episode: {
      title: "Speed Is Killing AI Startups",
      slug: "speed-is-killing-ai-startups",
      guest: "James Everingham",
    },
    tags: ["Strategy", "Operations"],
  },
  {
    name: "Agents Need Management, Not Mythology",
    summary: "Enterprise agents need permissions, controls, logs, and oversight — treat them like employees.",
    detail: "The right comparison for enterprise agents is not just software, but employees with specific roles and access levels. They need governance, auditability, access control, secure hosting environments, and visibility into what they are doing and touching. Without this, powerful agents become liabilities.",
    episode: {
      title: "Speed Is Killing AI Startups",
      slug: "speed-is-killing-ai-startups",
      guest: "James Everingham",
    },
    tags: ["AI Agents", "Operations"],
  },
  {
    name: "The Internal App Store Thesis",
    summary: "Companies will need centralized systems to discover, manage, fork, reuse, and govern agents.",
    detail: "This shifts agents from 'single-player tools' into shared infrastructure. Companies will likely need a centralized place where employees can discover, manage, govern, reuse, and extend agents across the organization — similar to an internal app store for AI capabilities.",
    episode: {
      title: "Speed Is Killing AI Startups",
      slug: "speed-is-killing-ai-startups",
      guest: "James Everingham",
    },
    tags: ["AI Agents", "Strategy"],
  },
  {
    name: "Swarms Over Super-Agents",
    summary: "Many specialized agents beat one all-purpose agent — easier to debug, govern, and improve.",
    detail: "James leans toward many specialized agents rather than one all-purpose super-agent. Specialized agents are easier to debug, govern, and improve. The future is composable intelligence across focused tools, not monolithic systems trying to do everything.",
    episode: {
      title: "Speed Is Killing AI Startups",
      slug: "speed-is-killing-ai-startups",
      guest: "James Everingham",
    },
    tags: ["AI Agents", "Architecture"],
  },
  {
    name: "The Productivity Trap",
    summary: "More code does not always equal more progress — define what productivity means before multiplying it.",
    detail: "Leaders need to define what productivity actually means before asking AI to multiply it. More output without clarity on what constitutes useful output leads to faster confusion, not faster progress. The metric matters more than the multiplier.",
    episode: {
      title: "Speed Is Killing AI Startups",
      slug: "speed-is-killing-ai-startups",
      guest: "James Everingham",
    },
    tags: ["Leadership", "Strategy"],
  },
  {
    name: "Historical Pattern Recognition",
    summary: "Browser wars, spreadsheets, falling input costs — AI is the latest chapter in a very old story.",
    detail: "Browser wars, spreadsheet adoption, industrial automation, and falling input costs have all reorganized society. AI is the latest chapter moving much faster. The biggest long-term value may not come from the core technology alone, but from the services, workflows, and infrastructure built on top of it.",
    episode: {
      title: "Speed Is Killing AI Startups",
      slug: "speed-is-killing-ai-startups",
      guest: "James Everingham",
    },
    tags: ["Strategy", "Market Analysis"],
  },
  {
    name: "Wait for the Idea You Cannot Ignore",
    summary: "Do not start a company just to start one — wait for the opportunity you feel compelled to pursue.",
    detail: "Network can matter more than the original idea. What feels like burnout can sometimes be a lack of inspiration, and the right problem can bring energy back quickly. Founders should wait for the observation or opportunity they feel compelled to pursue because conviction increases both enjoyment and odds of success.",
    episode: {
      title: "Speed Is Killing AI Startups",
      slug: "speed-is-killing-ai-startups",
      guest: "James Everingham",
    },
    tags: ["Founder Advice", "Mindset"],
  },
  // Josh Gilmer — Searchable Personal Memory Now
  {
    name: "30 Takes Before the Sentence",
    summary: "By the time you write something down, you have already mentally revised it dozens of times.",
    detail: "Written journaling captures polished summaries, not raw thinking. The act of writing edits the thought before it reaches the page. Video journaling preserves the unfiltered version, including tone, hesitation, and emotional context that text deletes.",
    episode: {
      title: "Searchable Personal Memory Now",
      slug: "searchable-personal-memory-now",
      guest: "Josh Gilmer",
    },
    tags: ["Self-Awareness", "Productivity"],
  },
  {
    name: "Video as Higher-Fidelity Journaling",
    summary: "Video captures what writing deletes: tone, posture, fatigue, and hesitation.",
    detail: "Historic is built on the belief that video contains richer information than text or audio alone. Facial tension, body language, energy levels, and vocal hesitation all become part of the data. This creates a more honest record of the founder's internal state than any written journal entry.",
    episode: {
      title: "Searchable Personal Memory Now",
      slug: "searchable-personal-memory-now",
      guest: "Josh Gilmer",
    },
    tags: ["Product", "Self-Awareness"],
  },
  {
    name: "Morning Focus / Capture / Evening Reflection",
    summary: "A simple daily rhythm for structured self-awareness: set intentions, capture moments, review outcomes.",
    detail: "Josh outlines three journaling modes: Morning focus for priorities and emotional state, quick captures after important moments or meetings, and evening reflection for what worked, what failed, and what changed. The rhythm creates consistent self-awareness data without requiring heavy discipline.",
    episode: {
      title: "Searchable Personal Memory Now",
      slug: "searchable-personal-memory-now",
      guest: "Josh Gilmer",
    },
    tags: ["Productivity", "Founder Advice"],
  },
  {
    name: "Searchable Memory as a Founder Edge",
    summary: "Founders may eventually query their own history the way they query a database.",
    detail: "The goal is not simply storage but recall with context. When decisions, emotions, and reasoning are captured and indexed, founders gain the ability to search their past thinking, spot recurring patterns, and use AI to surface insights about burnout, productivity, and decision quality over time.",
    episode: {
      title: "Searchable Personal Memory Now",
      slug: "searchable-personal-memory-now",
      guest: "Josh Gilmer",
    },
    tags: ["AI Strategy", "Productivity"],
  },
  {
    name: "The False Second Brain",
    summary: "A collection of polished notes may not represent your real mind. It may just be your edited highlight reel.",
    detail: "Josh challenges the common 'second brain' narrative. Most digital knowledge systems store curated, edited, and presentable thoughts rather than actual cognitive processes. A true second brain would need to capture the messy, unfiltered thinking that drives real decisions, not just the cleaned-up version.",
    episode: {
      title: "Searchable Personal Memory Now",
      slug: "searchable-personal-memory-now",
      guest: "Josh Gilmer",
    },
    tags: ["Mindset", "Self-Awareness"],
  },
  {
    name: "AI as Present-Day Coaching",
    summary: "Use past decisions to coach yourself accurately in the present, not just to search your archive.",
    detail: "Josh says he does not necessarily want to search every decision he ever made. He wants AI to use those decisions to coach him accurately in the present. The value is not in the archive itself but in the system's ability to recognize patterns and offer relevant guidance based on your actual history.",
    episode: {
      title: "Searchable Personal Memory Now",
      slug: "searchable-personal-memory-now",
      guest: "Josh Gilmer",
    },
    tags: ["AI Strategy", "Leadership"],
  },
  {
    name: "Technology: Insulation or Connection",
    summary: "Will AI isolate people further or help rebuild tribes and kinship?",
    detail: "The conversation expands into parenting, community, and whether technology will help humans reconnect or become more insulated. Josh connects this to his other company Luau, which uses AI to help maintain social bonds. The deeper question is whether founders are building tools that strengthen human relationships or quietly replace them.",
    episode: {
      title: "Searchable Personal Memory Now",
      slug: "searchable-personal-memory-now",
      guest: "Josh Gilmer",
    },
    tags: ["Mindset", "Ethics"],
  },
  // Carson Vest — Will VC Destroy Your Startup?
  {
    name: "The Founder DNA Thesis",
    summary: "Denver Ventures bets on the person before the product, especially at the earliest stages.",
    detail: "Carson evaluates founder background before she opens a pitch deck. Prior company experience, big tech credentials, AI/ML background, or existing channel relationships are strong signals. The ability to sell the vision in a casual conversation is a proxy for team building, customer acquisition, and investor relations. At pre-seed and seed, if the founder cannot carry the room, the product almost does not matter.",
    episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" },
    tags: ["Fundraising", "Strategy"],
  },
  {
    name: "The Distribution Co-Founder Gap",
    summary: "Solve distribution at the founding team level, not the hiring level.",
    detail: "Most founders plan to hire for distribution after raising. Carson sees it as the most common structural mistake at the earliest stage. Bringing a distribution-focused co-founder onto the team before raising dramatically increases investability. The strongest founding teams came up together: school friends, former colleagues, people who have already trusted each other under pressure.",
    episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" },
    tags: ["Growth", "Leadership"],
  },
  {
    name: "The Moat Has Moved",
    summary: "Ask what about your company takes years to build, not weeks. That is your moat.",
    detail: "Software development costs have collapsed. An MVP that required $320,000 and 18 months in 2022 now costs $20 and a week. If your only edge is the code, someone can clone it by Friday. The new moats are: proprietary or pre-digital data sets, founder network and relationships, deep channel access, and obsessive domain expertise in a specific vertical.",
    episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" },
    tags: ["Competitive Advantage", "Strategy"],
  },
  {
    name: "The VC Gut Check",
    summary: "Define what success looks like before you define how to fund it.",
    detail: "Before you pitch, answer one question honestly: why do you truly want venture capital right now? Many founders raised because others were raising. Bootstrapping to $500K or $1M ARR may provide more equity, more control, and more leverage in future conversations than a seed round taken too early. VC is not wrong — it is powerful and necessary for certain companies. But it is a tool, not a milestone.",
    episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" },
    tags: ["Fundraising", "Mindset"],
  },
  {
    name: "The Retention Signal VCs Actually Watch",
    summary: "Do not optimize for margin optics. Show investors that people cannot stop using your product.",
    detail: "High AI product margins can paradoxically be a red flag. If inference costs are low, it may mean users are not actually using the product. Denver Ventures wants to see high inference costs because that signals genuine daily engagement. Retention is the metric that separates a product people love from a product people try once and delete. The freemium churn problem is real: new tools launch daily.",
    episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" },
    tags: ["Metrics", "AI Strategy"],
  },
  {
    name: "The Agentic Shift",
    summary: "Build the product that makes the user forget they are using a product.",
    detail: "The infrastructure layer — models, GPUs, and wrappers — is maturing and commoditizing. The next wave of valuable companies will be built on workflow automation and vertical AI that disappears into the background. The winning product is not the best chatbot. It is the tool that makes the task vanish entirely. Granola is cited as a reference point: a silent AI note-taker that adds value without demanding attention.",
    episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" },
    tags: ["AI Strategy", "Product"],
  },

  // Colin McIntosh — AI Didn't Take Your Job. It Froze the Hiring Line.
  {
    name: "The Content Moat",
    summary: "Human-written, expertise-backed content is the last true differentiator in a world flooded with AI-generated text.",
    detail: "Colin wrote every word on SheetsResume.com himself. The site ranks #1 on Google for 'AI Resume Builder' and is the top Gemini recommendation for 'best resume templates.' AI-generated content cannot be fresh because everything an LLM produces has already been said. The AI overview rewards unique, well-written, human content. Domain expertise is the last real moat in content marketing.",
    episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" },
    tags: ["Marketing", "Competitive Advantage"],
  },
  {
    name: "Three-Criteria Build Filter",
    summary: "Three questions before committing to any new product: business model, time involvement, and love.",
    detail: "First: what is the business model and how does cash actually flow? Second: can it run on five to ten hours a week after launch? Third: do I love it, and does it need to exist? The third criterion is the dangerous one — it overrides the first two. It is the one that produces the products people remember.",
    episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" },
    tags: ["Strategy", "Decision Making"],
  },
  {
    name: "The Medium Is the Human",
    summary: "In a world where nobody can tell what is real, being verifiably, vocally, provably you is the brand.",
    detail: "AI has made content creation frictionless, which means authenticity has become the scarce resource. The founder who shows up personally — who writes their own words, shares their own experiences, and builds from their own domain expertise — becomes the differentiator. The medium is no longer the platform. The medium is the human.",
    episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" },
    tags: ["Marketing", "Mindset"],
  },
  {
    name: "Payroll Freeze as AI's Primary Impact",
    summary: "AI is manifesting as a hiring freeze, not mass layoffs — companies wait to automate before committing to headcount.",
    detail: "The headline jobs numbers look stable, but the underlying reality is messier. Healthcare accounts for 90% of new job creation. AI is not replacing workers en masse — it is causing companies to pause hiring while they figure out what can be automated. Combined with tariff uncertainty, tourism declines, and government workforce displacement, the 2025 labor market is structurally frozen.",
    episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" },
    tags: ["Market Analysis", "AI Strategy"],
  },
  {
    name: "Marketing as the Last Non-Commoditized Skill",
    summary: "You can vibe-code a CRM in a weekend. Getting anyone to discover it is the real bottleneck.",
    detail: "Software development costs have collapsed. Building is no longer the hard part. Ranking on Google, breaking into AI overviews, earning Reddit upvotes, and generating social impressions still require genuine human skill, creativity, and domain authority that AI cannot generate on demand. Marketing is the last non-commoditized skill in software.",
    episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" },
    tags: ["Marketing", "Strategy"],
  },
];

// Extract all unique tags
export const allTags = [...new Set(frameworks.flatMap((f) => f.tags))].sort();

// Extract all unique guests
export const allGuests = [...new Set(frameworks.map((f) => f.episode.guest))];
