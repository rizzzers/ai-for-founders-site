export interface GlossaryTerm {
  term: string;
  definition: string;
  episode: {
    title: string;
    slug: string;
    guest: string;
  };
}

export const glossaryTerms: GlossaryTerm[] = [
  // Stop Building, Do This First — Ohad Shaked
  { term: "Validation", definition: "Structured confirmation that a real customer has a real problem they will pay to solve.", episode: { title: "Stop Building, Do This First", slug: "stop-building-do-this-first", guest: "Ohad Shaked" } },
  { term: "Persona Mapping", definition: "Identifying the target user, decision maker, pain points, and motivations.", episode: { title: "Stop Building, Do This First", slug: "stop-building-do-this-first", guest: "Ohad Shaked" } },
  { term: "Top-Down Market Sizing", definition: "Estimating market size using industry-level data.", episode: { title: "Stop Building, Do This First", slug: "stop-building-do-this-first", guest: "Ohad Shaked" } },
  { term: "Bottom-Up Market Sizing", definition: "Estimating potential revenue based on customer count and pricing.", episode: { title: "Stop Building, Do This First", slug: "stop-building-do-this-first", guest: "Ohad Shaked" } },
  { term: "POC (Proof of Concept)", definition: "A pilot project demonstrating feasibility without full commitment.", episode: { title: "Stop Building, Do This First", slug: "stop-building-do-this-first", guest: "Ohad Shaked" } },
  { term: "SAFE (Simple Agreement for Future Equity)", definition: "An early-stage investment agreement providing future equity.", episode: { title: "Stop Building, Do This First", slug: "stop-building-do-this-first", guest: "Ohad Shaked" } },
  { term: "Founder-Led Marketing", definition: "When founders publicly build credibility through content and personal brand.", episode: { title: "Stop Building, Do This First", slug: "stop-building-do-this-first", guest: "Ohad Shaked" } },
  { term: "Competitive Moat", definition: "A defensible advantage such as IP, proprietary data, or network effects.", episode: { title: "Stop Building, Do This First", slug: "stop-building-do-this-first", guest: "Ohad Shaked" } },
  { term: "Agentic AI", definition: "AI systems that proactively execute workflows and monitor changes.", episode: { title: "Stop Building, Do This First", slug: "stop-building-do-this-first", guest: "Ohad Shaked" } },
  { term: "Blind Spots", definition: "Unknown weaknesses or missing validation steps.", episode: { title: "Stop Building, Do This First", slug: "stop-building-do-this-first", guest: "Ohad Shaked" } },

  // AI Is Quietly Stealing Your Life's Work — Dr. Jonathan Schafer
  { term: "Artificial Intelligence (AI)", definition: "Systems designed to perform tasks requiring human intelligence.", episode: { title: "AI Is Quietly Stealing Your Life's Work", slug: "ai-is-quietly-stealing-your-life-s-work", guest: "Dr. Jonathan Schafer" } },
  { term: "Large Language Model (LLM)", definition: "A machine learning model trained on large text datasets to generate language.", episode: { title: "AI Is Quietly Stealing Your Life's Work", slug: "ai-is-quietly-stealing-your-life-s-work", guest: "Dr. Jonathan Schafer" } },
  { term: "Hallucination", definition: "When an AI produces factually incorrect or fabricated information.", episode: { title: "AI Is Quietly Stealing Your Life's Work", slug: "ai-is-quietly-stealing-your-life-s-work", guest: "Dr. Jonathan Schafer" } },
  { term: "Unstructured IP", definition: "Knowledge stored in documents, emails, PDFs, voice memos, images, and archives without organized schema.", episode: { title: "AI Is Quietly Stealing Your Life's Work", slug: "ai-is-quietly-stealing-your-life-s-work", guest: "Dr. Jonathan Schafer" } },
  { term: "Local AI", definition: "AI processing that occurs on a user's device rather than in the cloud.", episode: { title: "AI Is Quietly Stealing Your Life's Work", slug: "ai-is-quietly-stealing-your-life-s-work", guest: "Dr. Jonathan Schafer" } },
  { term: "Collection", definition: "A curated subset of files indexed for AI interrogation.", episode: { title: "AI Is Quietly Stealing Your Life's Work", slug: "ai-is-quietly-stealing-your-life-s-work", guest: "Dr. Jonathan Schafer" } },
  { term: "Embedding", definition: "Numerical representation of text used to enable semantic search.", episode: { title: "AI Is Quietly Stealing Your Life's Work", slug: "ai-is-quietly-stealing-your-life-s-work", guest: "Dr. Jonathan Schafer" } },
  { term: "Citation-Based Retrieval", definition: "Returning answers tied to specific document sources.", episode: { title: "AI Is Quietly Stealing Your Life's Work", slug: "ai-is-quietly-stealing-your-life-s-work", guest: "Dr. Jonathan Schafer" } },
  { term: "Privacy-First Architecture", definition: "Design principle prioritizing data ownership and local control.", episode: { title: "AI Is Quietly Stealing Your Life's Work", slug: "ai-is-quietly-stealing-your-life-s-work", guest: "Dr. Jonathan Schafer" } },
  { term: "AI Winter", definition: "Period of reduced funding and interest in artificial intelligence.", episode: { title: "AI Is Quietly Stealing Your Life's Work", slug: "ai-is-quietly-stealing-your-life-s-work", guest: "Dr. Jonathan Schafer" } },

  // She Exited in 18 Months — Alyssa Eidam
  { term: "AI Agents", definition: "Autonomous or semi-autonomous systems that perform tasks and make decisions using AI.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },
  { term: "AI-Native", definition: "Products designed around intelligence as a core architectural element rather than an add-on feature.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },
  { term: "Workflow Optimization", definition: "Improving efficiency across a sequence of operational steps.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },
  { term: "Exploration Gene", definition: "A behavioral predisposition toward novelty-seeking and risk-taking linked to evolutionary adaptation.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },
  { term: "Predictive Systems", definition: "Tools that anticipate user needs based on data patterns.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },
  { term: "Subconscious", definition: "Accessible but not always actively examined emotional drivers.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },
  { term: "Unconscious", definition: "Deep-rooted behavioral drivers operating beneath awareness.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },
  { term: "Presence", definition: "Deliberate attention to current experience without distraction.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },
  { term: "Supply Chain Staffing", definition: "Viewing workforce allocation as a logistical and forecasting problem.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },
  { term: "Digital Twin", definition: "A data-based representation of a person or system used for simulation and optimization.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },
  { term: "Calisthenics", definition: "Bodyweight-based strength training emphasizing control and mobility.", episode: { title: "She Exited in 18 Months Then Walked Away to Find Stillness", slug: "she-exited-in-18-months-then-walked-away-to-find-stillness", guest: "Alyssa Eidam" } },

  // Congrats on the Revenue — Adam McAllinan
  { term: "ROAS (Return on Ad Spend)", definition: "Revenue generated per dollar spent on ads; can look great while the business still loses money.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "P&L (Profit and Loss Statement)", definition: "Financial report showing revenue, expenses, and profit over a period.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "Fixed Expenses", definition: "Costs you pay regardless of revenue: payroll, rent, legal, accounting.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "Variable Expenses", definition: "Costs that increase with sales volume: COGS, shipping, fulfillment.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "Advertising as Fuel", definition: "Treating paid media spend as a controllable lever that can be increased or decreased quickly.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "Uncanny Valley", definition: "The discomfort people feel when something looks almost human-real but is not.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "API Guardrails", definition: "Limiting what an agent can access and do via controlled interfaces.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "Utility Patent", definition: "Protects how something works; often technical and complex.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "Design Patent", definition: "Protects how something looks; typically easier to interpret and litigate.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "Consent Judgment", definition: "A court order where a defendant agrees they infringed; used to validate enforceability.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "CIP (Continuation in Progress)", definition: "A patent filing strategy that keeps claims open so protection can evolve over time.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "Inflection Point", definition: "The moment growth accelerates, often triggering operational and spending mistakes.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },
  { term: "Tech Stack Creep", definition: "The overload of apps and tools added to a business that creates complexity and confusion.", episode: { title: "Congrats on the Revenue, Sorry About Your Money", slug: "congrats-on-the-revenue-sorry-about-your-money", guest: "Adam McAllinan" } },

  // Social Media Is Killing Your Memories — Oleg Golynker
  { term: "Attention Economy", definition: "An ecosystem where human focus is monetized and competed for.", episode: { title: "Social Media Is Killing Your Memories", slug: "social-media-is-killing-your-memories", guest: "Oleg Golynker" } },
  { term: "Recall", definition: "The ability to revisit and emotionally reconnect with past experiences.", episode: { title: "Social Media Is Killing Your Memories", slug: "social-media-is-killing-your-memories", guest: "Oleg Golynker" } },
  { term: "Tribe", definition: "A close community connected by shared moments and meaning.", episode: { title: "Social Media Is Killing Your Memories", slug: "social-media-is-killing-your-memories", guest: "Oleg Golynker" } },
  { term: "Fragmented Data", definition: "Scattered photos, chats, and media stored across platforms without structure.", episode: { title: "Social Media Is Killing Your Memories", slug: "social-media-is-killing-your-memories", guest: "Oleg Golynker" } },
  { term: "Living Story", definition: "An AI-stitched narrative combining multiple participants' contributions into a cohesive memory artifact.", episode: { title: "Social Media Is Killing Your Memories", slug: "social-media-is-killing-your-memories", guest: "Oleg Golynker" } },
  { term: "Emotional Retention", definition: "Customer loyalty rooted in shared emotional experiences rather than transactional utility.", episode: { title: "Social Media Is Killing Your Memories", slug: "social-media-is-killing-your-memories", guest: "Oleg Golynker" } },
  { term: "Algorithmic Optimization", definition: "Product design that prioritizes engagement metrics over depth of meaning.", episode: { title: "Social Media Is Killing Your Memories", slug: "social-media-is-killing-your-memories", guest: "Oleg Golynker" } },

  // The Uncanny Valley Is Real — Marcin Dąbrowski
  { term: "AMR", definition: "Autonomous Mobile Robot, a robot that moves goods or itself through facilities.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },
  { term: "SLAM", definition: "Simultaneous Localization and Mapping, building a map while locating yourself in it.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },
  { term: "Visual SLAM", definition: "SLAM powered primarily by cameras, often fused with other sensors.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },
  { term: "IMU", definition: "Inertial Measurement Unit, measures acceleration and rotation.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },
  { term: "Odometry", definition: "Motion estimates from wheels or legs.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },
  { term: "Natural Features", definition: "Real world visual landmarks, edges, textures, and objects used for localization.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },
  { term: "2D LiDAR", definition: "Scans a single plane, often used for basic navigation.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },
  { term: "3D LiDAR", definition: "Scans depth in 3D, heavier and often pricier but useful for richer perception.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },
  { term: "Tier 1 Supplier", definition: "Provides a critical component or subsystem integrated into another company's product.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },
  { term: "Brownfield Environment", definition: "An existing real world environment not designed for robots.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },
  { term: "Intent Signaling", definition: "Visual or audio cues that communicate what a robot plans to do next.", episode: { title: "The Uncanny Valley Is Real", slug: "the-uncanny-valley-is-real", guest: "Marcin Dąbrowski" } },

  // Speed Is Killing AI Startups — James Everingham
  { term: "Agentic Systems", definition: "AI systems that can take actions, use tools, and complete workflows with some autonomy.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Control Plane", definition: "A centralized layer used to manage, monitor, govern, and orchestrate systems or agents.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Reproducibility", definition: "The ability to recreate the same result using the same inputs, steps, and conditions.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Governance", definition: "The rules, permissions, controls, and oversight mechanisms that keep systems safe and compliant.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Audit Log", definition: "A recorded history of actions taken by a system, user, or agent for debugging, accountability, and compliance.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Orchestration", definition: "Coordinating multiple tools, agents, or workflows so they operate together correctly.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Institutional Memory", definition: "Knowledge preserved in systems and processes rather than trapped inside individuals' heads.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Runtime", definition: "The environment in which an application or agent executes.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Single-Player Agent", definition: "An agent used by one person in a private or local workflow.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Multiplayer Agent Platform", definition: "A shared environment where teams can discover, reuse, extend, and govern agents together.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Open Source Security Model", definition: "The belief that transparent code can become more secure through wider expert review.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },
  { term: "Productivity Metric", definition: "The actual definition of useful output inside a company, which may differ from superficial activity.", episode: { title: "Speed Is Killing AI Startups", slug: "speed-is-killing-ai-startups", guest: "James Everingham" } },

  // Searchable Personal Memory Now — Josh Gilmer
  { term: "Historic", definition: "An AI video journaling app in iOS beta designed to help founders capture raw thoughts and turn them into structured, searchable memory.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "AI Memory", definition: "A new category of products that store human thoughts, moments, and context in a way AI can later organize, search, and analyze.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "Second Brain", definition: "Usually a digital system for storing ideas and knowledge. Critiqued when it refers only to polished notes rather than real cognitive process.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "Morning Focus", definition: "A journaling mode for setting intentions, outlining priorities, and noting how you feel at the start of the day.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "Evening Reflection", definition: "A closing journaling practice for measuring progress, reviewing what happened, and noticing emotional or strategic outcomes.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "Searchable Memory", definition: "The idea that your recorded thoughts, decisions, and emotional context can later be queried like a database.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "Higher-Fidelity Capture", definition: "The concept that video contains richer information than writing or audio alone because it includes visual and emotional cues.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "Unintended Signals", definition: "The nonverbal information you reveal without meaning to, such as posture, tone, fatigue, hesitation, and facial changes.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "Founder Self-Awareness", definition: "The ability to see patterns in your own thinking, behavior, stress, and decisions rather than simply reacting in the moment.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "Burnout Detection", definition: "A future-facing use case where AI could identify early signs of physical or emotional decline through ongoing capture.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "Luau", definition: "Josh Gilmer's other company, focused on using AI to help orchestrate social life and keep important relationships from drifting apart.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "TestFlight", definition: "Apple's beta distribution platform that allows iOS apps to be tested before full App Store release.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },
  { term: "Claude", definition: "An AI assistant that reflects the broader trend of AI tools showing up across many software development environments.", episode: { title: "Searchable Personal Memory Now", slug: "searchable-personal-memory-now", guest: "Josh Gilmer" } },

  // Will VC Destroy Your Startup? — Carson Vest
  { term: "Founder DNA", definition: "Denver Ventures' core investment thesis. The belief that a founder's personal background, network, relationships, and domain obsession are more predictive of success than the product at early stages.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "Distribution Co-Founder", definition: "A co-founding partner brought in specifically for their ability to reach and grow a customer base. A founding-level commitment to treating distribution as a first-class company function.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "Inference Costs", definition: "The computational expense generated when an AI model processes user queries. High inference costs signal heavy, active user engagement.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "Generalist Fund", definition: "A venture fund that invests across multiple industries and sectors rather than specializing in one vertical.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "Pre-Seed", definition: "The earliest formal stage of startup funding, typically used to validate an idea, build a prototype, or hire a first co-founder before a formal seed round.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "Vertical AI Integration", definition: "AI tools built specifically for a defined industry or workflow rather than the general public. Stronger retention because they solve a specific, repeated pain point deeply.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "Cap Table", definition: "The document showing ownership structure of a company, including founders, investors, and employees with options. Who is on your cap table signals a great deal to prospective investors.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "ARR", definition: "Annual Recurring Revenue. The annualized value of a company's recurring contracts or subscriptions. A key growth metric for software companies.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "Freemium", definition: "A pricing model where a product is offered free at a basic tier with paid upgrades. Common for top-of-funnel acquisition but a leading cause of high churn in crowded AI tool markets.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "Zero to One", definition: "The phase of building a company from nothing to its first meaningful product, revenue, and customers. Characterized by extreme prioritization and founder-led everything.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "Moat", definition: "A sustainable competitive advantage. In the current AI environment, technological moats are weakening while data, distribution, and network moats are strengthening.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },
  { term: "Denver Ventures", definition: "A generalist venture capital fund based in Denver that invests across multiple industries at early stages, led by a thesis centered on founder DNA.", episode: { title: "Will VC Destroy Your Startup?", slug: "will-vc-destroy-your-startup", guest: "Carson Vest" } },

  // AI Didn't Take Your Job — Colin McIntosh
  { term: "Vibe Coding", definition: "Building software through natural language prompts to an AI model, without writing traditional code. The term describes a workflow where the founder describes what they want and the AI generates the implementation.", episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" } },
  { term: "AI Overview", definition: "Google's AI-generated summary that appears at the top of search results, synthesizing content from multiple sources. Ranking well requires fresh, original, authoritative content.", episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" } },
  { term: "Payroll Freeze", definition: "A hiring pause in which companies stop adding new headcount without necessarily laying off existing employees. Describes how AI is currently affecting employment more than through outright job cuts.", episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" } },
  { term: "Domain Expertise", definition: "Deep, experiential knowledge in a specific field that cannot be easily replicated by a generalist or an AI model. Treated as the foundational prerequisite for building any product worth building.", episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" } },
  { term: "AstroTurf", definition: "Coordinated inauthentic behavior online, where bot accounts or paid commenters simulate organic grassroots sentiment. A growing problem on Reddit and social media broadly.", episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" } },
  { term: "Vesting Cliff", definition: "A milestone in an equity compensation schedule at which an employee's shares vest for the first time, typically after one year of employment.", episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" } },
  { term: "Dilution", definition: "The reduction in existing shareholders' ownership percentage that occurs when a company issues new shares, typically during a funding round.", episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" } },
  { term: "Present Cash Value", definition: "A financial concept describing the current worth of a future sum of money, discounted for time and risk.", episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" } },
  { term: "Cuneiform", definition: "An ancient system of writing developed by the Sumerians, made by pressing a reed stylus into clay tablets. Referenced in conversation about the Babylonian origins of the Noah's Ark flood myth.", episode: { title: "AI Didn't Take Your Job. It Froze the Hiring Line.", slug: "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means", guest: "Colin McIntosh" } },
];

/** Get all unique first letters for alphabetical navigation */
export const getAlphabetLetters = (): string[] => {
  const letters = new Set(
    glossaryTerms.map((t) => t.term[0].toUpperCase())
);
  return [...letters].sort();
};

/** Get all unique episode guests */
export const getGlossaryGuests = (): string[] => {
  return [...new Set(glossaryTerms.map((t) => t.episode.guest))].sort();
};

/** Get terms sorted alphabetically */
export const getSortedTerms = (): GlossaryTerm[] => {
  return [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term, "en", { sensitivity: "base" })
  );
};
