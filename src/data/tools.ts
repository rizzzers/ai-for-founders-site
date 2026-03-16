import {
  Code,
  Palette,
  Database,
  Rocket,
  Megaphone,
  TrendingUp,
  Building2,
  Settings,
  Users,
  Truck,
  Shield,
  Heart,
  GraduationCap,
  Bot,
  Mic,
  ShoppingCart,
} from "lucide-react";
import { generateSlug } from "@/utils/slugify";

export type Tool = {
  name: string;
  url: string;
  description: string;
  hasYoutube?: boolean;
  youtubeUrl?: string;
  recommended?: boolean;
  whatItIs?: string;
  whoItsFor?: string;
  whyItsBetter?: string[];
};

export type Category = {
  title: string;
  description: string;
  icon: React.ElementType;
  tools: Tool[];
};

export type Theme = {
  title: string;
  description: string;
  color: string;
  categories: Category[];
};

export const themes: Theme[] = [
  {
    title: "Build",
    description: "Tools to create, develop, and design your product",
    color: "from-blue-500 to-cyan-500",
    categories: [
      {
        title: "Development",
        description: "AI development and integration tools",
        icon: Code,
        tools: [
          {
            name: "Builder.io", url: "https://www.builder.io/",
            description: "Visual development platform for building web experiences",
            whatItIs: "Builder.io is a visual content platform that lets teams design and ship web experiences without slowing down developers.",
            whoItsFor: "Teams who want marketers and designers to move independently without touching the core codebase.",
            whyItsBetter: [
              "Builder lets marketers ship without opening a Jira ticket.",
              "Developers still keep control, which keeps everyone calm.",
              "It removes the \"just one small change\" deployment spiral.",
              "Experiments happen faster and rollbacks are painless.",
              "Everyone wins and nobody rage-quits Slack."
            ]
          },
          {
            name: "CodeRabbit", url: "https://www.coderabbit.ai/",
            description: "AI-powered code review and development assistant",
            whatItIs: "CodeRabbit is an AI-powered code reviewer that automatically reviews pull requests and leaves actionable feedback.",
            whoItsFor: "Engineering teams who want faster reviews without sacrificing quality or sanity.",
            whyItsBetter: [
              "CodeRabbit reviews every PR instantly and never gets tired.",
              "It doesn't nitpick, it actually helps.",
              "Senior engineers stop repeating themselves.",
              "Junior engineers learn faster without feeling dumb.",
              "Code moves forward instead of sitting in review purgatory."
            ]
          },
          {
            name: "Myop", url: "https://www.myop.dev/",
            description: "Myop is the only platform that lets teams vibe-code with any AI tool and safely plug the output into live, mature production.",
            hasYoutube: true, youtubeUrl: "https://youtu.be/jGu5zqEZzHs",
            whatItIs: "Myop is a productivity tool designed to help developers stay focused by cutting through workflow noise.",
            whoItsFor: "Founders and engineering leaders who want shipping, not ceremonies.",
            whyItsBetter: [
              "Myop removes distractions instead of adding dashboards.",
              "It respects attention like it's expensive.",
              "Developers stay in flow longer.",
              "Less context switching means fewer mistakes.",
              "Progress starts feeling normal again."
            ]
          },
          {
            name: "Nametag", url: "https://GetNametag.com",
            description: "Identity and naming solutions",
            hasYoutube: true, youtubeUrl: "https://youtu.be/BrLMgoDTP7g",
            whatItIs: "Nametag is a modern identity verification platform built to defend against phishing, impersonation, and deepfake-driven fraud.",
            whoItsFor: "Security-focused companies that assume attackers are already smart.",
            whyItsBetter: [
              "Nametag is built for today's threats, not last decade's.",
              "It doesn't rely on passwords that everyone hates anyway.",
              "Privacy comes first, not as an afterthought.",
              "Security teams get fewer false alarms.",
              "Attackers get bored and move on."
            ]
          },
          {
            name: "PageAI", url: "https://pageai.pro/",
            description: "AI-powered web development platform",
            whatItIs: "PageAI is an AI-powered website builder that creates pages based on your business goals and audience.",
            whoItsFor: "Founders who want a site that works without becoming a side project.",
            whyItsBetter: [
              "PageAI skips the blank page panic.",
              "It builds around intent, not generic templates.",
              "You launch faster with fewer revisions.",
              "The site actually knows what it's selling.",
              "Design debates quietly disappear."
            ]
          },
          {
            name: "Readdy", url: "https://readdy.ai/",
            description: "AI-powered development assistant",
            whatItIs: "Readdy is an AI design tool that turns prompts into usable UI layouts and product designs.",
            whoItsFor: "Builders who want momentum before perfection.",
            whyItsBetter: [
              "Readdy kills the empty canvas problem instantly.",
              "Ideas become interfaces in minutes.",
              "Feedback arrives before enthusiasm fades.",
              "Design stops blocking progress.",
              "Shipping starts feeling inevitable."
            ]
          },
          {
            name: "Vapi.ai", url: "https://vapi.ai",
            description: "Voice-first agents",
            hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=ljgkj9EnjN4",
            whatItIs: "Vapi is a developer platform for building real-time voice AI agents that can talk, listen, and act.",
            whoItsFor: "Teams building voice-driven products without a research lab.",
            whyItsBetter: [
              "Vapi handles the hard infrastructure stuff.",
              "Latency stays low and conversations feel real.",
              "Developers focus on logic, not plumbing.",
              "Voice features ship faster than expected.",
              "Demos stop sounding awkward."
            ]
          },
          {
            name: "Webflow", url: "https://webflow.com/",
            description: "Visual web development platform for creating responsive websites",
            whatItIs: "Webflow is a visual web design platform for building production-grade websites without code.",
            whoItsFor: "Designers, marketers, and founders who want control without chaos.",
            whyItsBetter: [
              "Webflow replaces plugin towers with real structure.",
              "Design freedom doesn't break performance.",
              "Changes don't require a developer rescue mission.",
              "Sites scale without duct tape.",
              "You trust your website again."
            ]
          }
        ]
      },
      {
        title: "Creative",
        description: "AI-powered creative and content tools",
        icon: Palette,
        tools: [
          {
            name: "HipClip.ai", url: "https://hipclip.ai", description: "Video editor", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=U6Tbsnk_hDw",
            whatItIs: "HipClip.ai is an AI tool that turns long videos into short, shareable clips automatically.",
            whoItsFor: "Creators, podcasters, and teams who want more content without more editing.",
            whyItsBetter: ["HipClip saves you from scrubbing timelines for hours.", "It finds the moments that actually matter.", "Short-form stops feeling like homework.", "Output increases without burning weekends.", "Your backlog finally shrinks."]
          },
          {
            name: "Ideogram", url: "https://ideogram.ai/", description: "AI-powered image generation and creative design platform",
            whatItIs: "Ideogram is an AI image generator known for clean visuals and readable text in images.",
            whoItsFor: "Designers, marketers, and creators who need images that don't look broken.",
            whyItsBetter: ["Text actually renders correctly.", "Designs feel intentional, not accidental.", "Logos and typography stop glitching.", "You spend less time regenerating.", "Images start looking publish-ready."]
          },
          {
            name: "Meshy", url: "https://www.meshy.ai/", description: "AI-powered 3D content generation platform",
            whatItIs: "Meshy is an AI tool that creates 3D models from text or images.",
            whoItsFor: "Game developers, designers, and builders working in 3D without a full studio.",
            whyItsBetter: ["3D assets appear in minutes.", "Prototyping stops being expensive.", "Iteration becomes casual instead of painful.", "Ideas get visual fast.", "Momentum replaces waiting."]
          },
          {
            name: "MusicCreator AI", url: "https://www.musiccreator.ai/?ref=ESTES", description: "Generate unique music with MusicCreator AI.", recommended: true,
            whatItIs: "MusicCreator AI generates original music tracks using AI.",
            whoItsFor: "Creators who need music without licensing drama.",
            whyItsBetter: ["You skip royalty confusion entirely.", "Tracks generate fast and clean.", "Mood matching is painless.", "No awkward copyright emails.", "Background music finally behaves."]
          },
          {
            name: "Overtune", url: "https://www.overtune.com/", description: "Simple sequencer for recording artists. Create your own beats — no royalties, no limits.",
            hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=PhCJt9fNkBM",
            whatItIs: "Overtune is a simple sequencer that lets recording artists create their own beats with no royalties and no limits.",
            whoItsFor: "Recording artists who want beats that fit their flow, not fight it.",
            whyItsBetter: ["Beats match your vision and style, not someone else's.", "No royalty headaches — release anywhere.", "Arrange the perfect instrumental without studio costs.", "Take it straight to the studio, ready to go.", "Creative control stays with the artist."]
          },
          {
            name: "Neural Frames", url: "https://www.neuralframes.com/", description: "AI-powered video generation platform",
            whatItIs: "Neural Frames creates AI-generated animations synced to music.",
            whoItsFor: "Musicians, visual artists, and experimental creators.",
            whyItsBetter: ["Music gets visuals instantly.", "Animations feel alive, not stock.", "Creative loops stay tight.", "Output looks intentional.", "Your work feels bigger."]
          },
          {
            name: "Pika", url: "https://pika.art/l", description: "AI-powered creative video generation platform",
            whatItIs: "Pika is an AI platform for generating and editing video with prompts.",
            whoItsFor: "Creators who want cinematic motion without production crews.",
            whyItsBetter: ["Video becomes playful again.", "Ideas turn into motion fast.", "Editing friction drops sharply.", "Experiments feel cheap.", "Creativity gets louder."]
          },
          {
            name: "Runway", url: "https://runwayml.com/", description: "AI-powered creative suite for video and image generation",
            whatItIs: "Runway is a professional AI video creation and editing platform.",
            whoItsFor: "Creators and teams producing high-end video content.",
            whyItsBetter: ["AI tools are production-grade.", "Effects feel magical, not gimmicky.", "Editing time collapses.", "Iteration speeds up.", "Creative ambition grows."]
          },
          {
            name: "Snipd", url: "https://www.snipd.com/", description: "The AI-powered Podcast App.", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=UyBJsia7dzg",
            whatItIs: "Snipd is a podcast app that uses AI to capture and organize key moments.",
            whoItsFor: "Podcast listeners who actually want to remember what they hear.",
            whyItsBetter: ["Insights don't disappear.", "Notes capture themselves.", "Learning compounds automatically.", "Episodes feel useful again.", "Listening turns actionable."]
          },
          {
            name: "Soona", url: "https://soona.co/", description: "AI-powered creative and content tools",
            whatItIs: "Soona helps brands create professional visual content remotely.",
            whoItsFor: "E-commerce brands that need great visuals without big shoots.",
            whyItsBetter: ["Shoots become predictable.", "Costs stay reasonable.", "Quality stays high.", "Turnaround is fast.", "Content finally scales."]
          },
          {
            name: "Spiral", url: "https://spiral.computer/", description: "Creative AI platform for visual content",
            whatItIs: "Spiral is a creative AI tool focused on idea generation and exploration.",
            whoItsFor: "Creators who want to think wider, not just faster.",
            whyItsBetter: ["Ideas branch naturally.", "Creative blocks loosen.", "Exploration feels safe.", "Outputs surprise you.", "Originality increases."]
          }
        ]
      },
      {
        title: "Data",
        description: "Data extraction, management, and analysis tools",
        icon: Database,
        tools: [
          {
            name: "Aryn", url: "https://aryn.ai/", description: "Agentic Document Intelligence.", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=xtJ66C3L7rY",
            whatItIs: "Aryn is an AI platform for processing and structuring complex data.",
            whoItsFor: "Teams turning messy data into usable systems.",
            whyItsBetter: ["Data stops feeling chaotic.", "Structure appears automatically.", "Workflows simplify fast.", "Errors drop quietly.", "Clarity replaces confusion."]
          },
          {
            name: "Bardeen", url: "https://www.bardeen.ai/", description: "AI-powered web scraping and automation platform",
            whatItIs: "Bardeen automates workflows across apps using AI.",
            whoItsFor: "Operators who hate repetitive tasks.",
            whyItsBetter: ["Manual work disappears.", "Automations feel obvious.", "Tools actually talk to each other.", "Time returns to the team.", "Ops stop leaking energy."]
          },
          {
            name: "LightningRod", url: "https://www.lightningrod.ai/", description: "Accurate Predictions from Messy Data.", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=8yIsbo-9sG0",
            whatItIs: "LightningRod helps teams make sense of real-time data faster.",
            whoItsFor: "Data teams that need speed, not just dashboards.",
            whyItsBetter: ["Signals surface earlier.", "Noise fades out.", "Decisions arrive faster.", "Teams react confidently.", "Insights stop hiding."]
          },
          {
            name: "MongoDB", url: "https://www.mongodb.com/", description: "Flexible NoSQL database for modern applications",
            whatItIs: "MongoDB is a flexible NoSQL database for modern applications.",
            whoItsFor: "Developers building scalable, evolving products.",
            whyItsBetter: ["Schemas adapt naturally.", "Scaling feels boring.", "Performance stays predictable.", "Dev speed stays high.", "Databases stop blocking growth."]
          },
          {
            name: "Reworkd", url: "https://www.reworkd.ai/", description: "AI-powered web scraping and data extraction platform",
            whatItIs: "Reworkd builds AI agents to handle complex workflows.",
            whoItsFor: "Teams automating research, ops, and repetitive knowledge work.",
            whyItsBetter: ["Agents actually complete tasks.", "Workflows run end-to-end.", "Humans step out of loops.", "Throughput increases quietly.", "Ops feel lighter."]
          },
          {
            name: "The Swarm", url: "https://www.theswarm.com/", description: "AI agent coordination platform",
            whatItIs: "The Swarm coordinates multiple AI agents to solve complex problems.",
            whoItsFor: "Teams experimenting with agent-based systems.",
            whyItsBetter: ["Agents collaborate naturally.", "Complex tasks break down cleanly.", "Systems feel adaptive.", "Scale emerges organically.", "Coordination stops hurting."]
          }
        ]
      },
      {
        title: "Vibe Coding",
        description: "Essential coding and development platforms",
        icon: Rocket,
        tools: [
          {
            name: "Base44", url: "https://base44.com/", description: "Development platform and coding tools",
            whatItIs: "Base44 is an AI platform for rapidly building software products.",
            whoItsFor: "Founders who want prototypes without ceremony.",
            whyItsBetter: ["Ideas become apps quickly.", "Friction stays low.", "Iteration stays playful.", "Progress feels constant.", "Building feels fun again."]
          },
          {
            name: "Bolt.new", url: "https://bolt.new", description: "Instant development environment",
            whatItIs: "Bolt.new lets you generate and edit code directly in the browser using AI.",
            whoItsFor: "Builders who want speed without setup.",
            whyItsBetter: ["No environment setup.", "Code appears instantly.", "Feedback loops shrink.", "Momentum stays high.", "Shipping feels inevitable."]
          },
          {
            name: "Codalio", url: "https://codalio.com/", description: "Build Real, Functional MVPs.", hasYoutube: true, youtubeUrl: "https://youtu.be/XODnEPMOv5s",
            whatItIs: "Codalio helps teams build and manage code with AI assistance.",
            whoItsFor: "Developers balancing speed and structure.",
            whyItsBetter: ["Context stays intact.", "Code stays readable.", "AI feels helpful, not invasive.", "Collaboration improves quietly.", "Velocity stabilizes."]
          },
          {
            name: "BrainGrid", url: "https://braingrid.ai/", description: "Product Management Agent for engineering-grade tasks.",
            whatItIs: "BrainGrid helps orchestrate AI logic and workflows visually.",
            whoItsFor: "Builders wiring intelligence together.",
            whyItsBetter: ["Complex logic becomes visible.", "Systems feel understandable.", "Debugging simplifies.", "Iteration speeds up.", "Confidence increases."]
          },
          {
            name: "Claude Code", url: "https://www.anthropic.com/claude-code", description: "AI-powered coding assistant",
            whatItIs: "Claude Code is Anthropic's AI coding assistant for real development work.",
            whoItsFor: "Developers who care about reasoning, not autocomplete.",
            whyItsBetter: ["Code explanations make sense.", "Context stays deep.", "Suggestions feel thoughtful.", "Bugs surface early.", "Trust builds fast."]
          },
          {
            name: "Floot", url: "https://floot.com/", description: "Modern development platform", hasYoutube: true, youtubeUrl: "https://youtu.be/LjMdfC6EG1E",
            whatItIs: "Floot helps teams manage and deploy AI-powered apps.",
            whoItsFor: "Builders moving from prototype to production.",
            whyItsBetter: ["Deployment simplifies.", "Configs stay sane.", "Scaling feels controlled.", "Ops headaches shrink.", "Shipping feels calmer."]
          },
          {
            name: "Knapsack", url: "https://www.knapsack.cloud/", description: "Intelligent Product Engine for design systems.", hasYoutube: true, youtubeUrl: "https://youtu.be/VR8dqq3G_Mw",
            whatItIs: "Knapsack is a design system platform that keeps UI consistent.",
            whoItsFor: "Teams tired of visual drift.",
            whyItsBetter: ["Design stays aligned.", "Engineering stays efficient.", "Components stay reusable.", "Brand stays consistent.", "Design debt stops growing."]
          },
          {
            name: "Lovable", url: "https://lovable.dev", recommended: true, description: "AI-powered web app builder",
            whatItIs: "Lovable helps you build full applications with AI from simple prompts.",
            whoItsFor: "Founders who want real products fast.",
            whyItsBetter: ["Apps appear shockingly fast.", "Logic stays editable.", "Iteration feels forgiving.", "Complexity stays optional.", "Momentum compounds."]
          },
          {
            name: "Manus", url: "https://manus.im/", description: "Advanced coding and development platform",
            whatItIs: "Manus is an AI agent platform for autonomous task execution.",
            whoItsFor: "Teams pushing toward hands-off workflows.",
            whyItsBetter: ["Agents actually act.", "Tasks complete end-to-end.", "Oversight stays light.", "Output increases.", "Automation feels real."]
          },
          {
            name: "Replit", url: "https://replit.com", description: "Online IDE for collaborative coding",
            whatItIs: "Replit is an online IDE for building, running, and sharing code.",
            whoItsFor: "Developers who want instant environments.",
            whyItsBetter: ["Setup time disappears.", "Collaboration is effortless.", "Experiments feel cheap.", "Sharing is instant.", "Building feels social."]
          },
          {
            name: "ThinkUp", url: "https://thinkup.global/", description: "All-in-one AI platform from idea validation to pre-seed funding.", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=PoLDyIJzVis",
            whatItIs: "ThinkUp is your all-in-one AI platform from idea validation to pre-seed funding. It helps founders validate startup ideas, structure customer interviews, map markets, and build investor-ready pitch decks.",
            whoItsFor: "First-time founders, serial idea hoarders, and anyone who wants to validate before they build.",
            whyItsBetter: ["Validation becomes structured, not emotional.", "Customer interviews get analyzed automatically.", "Market sizing and competitor mapping happen fast.", "Pitch decks stop being bedtime stories for investors.", "Multiple ideas can be validated simultaneously."]
          }
        ]
      }
    ]
  },
  {
    title: "Grow",
    description: "Tools to acquire customers and scale your business",
    color: "from-green-500 to-emerald-500",
    categories: [
      {
        title: "Marketing",
        description: "AI-powered marketing and advertising solutions",
        icon: Megaphone,
        tools: [
          { name: "Atria", url: "https://tryatria.com/", description: "AI-powered marketing platform", hasYoutube: true, youtubeUrl: "https://youtu.be/y2GeNUM-7Wc",
            whatItIs: "Atria is an AI platform that helps teams plan and execute marketing faster.",
            whoItsFor: "Founders and marketers who want momentum without overthinking.",
            whyItsBetter: ["Atria replaces guesswork with direction.", "Plans stop living in docs.", "Execution feels guided, not chaotic.", "Teams move faster together.", "Marketing starts shipping."]
          },
          { name: "Averi.ai", url: "http://averi.ai/", description: "AI-powered marketing and advertising solutions",
            whatItIs: "Averi.ai is an AI assistant for planning and optimizing marketing strategy.",
            whoItsFor: "Lean teams that need clarity before scale.",
            whyItsBetter: ["Strategy stops being abstract.", "Decisions get grounded in data.", "Planning speeds up.", "Confidence goes up.", "Second-guessing goes down."]
          },
          { name: "Coso", url: "https://coso.ai/", description: "All the social media content for your business. Instantly.",
            whatItIs: "Coso uses AI to plan, generate, and schedule social content.",
            whoItsFor: "Brands that want consistency without burnout.",
            whyItsBetter: ["Posting stops feeling random.", "Calendars fill themselves.", "Voice stays consistent.", "Output increases quietly.", "Social finally compounds."]
          },
          { name: "Icons8", url: "https://icons8.com/", description: "Design assets and tools for marketing materials", hasYoutube: true, youtubeUrl: "https://youtu.be/NUwYLcFjqb4",
            whatItIs: "Icons8 is a massive library of icons, illustrations, and design assets.",
            whoItsFor: "Designers and builders who want polish fast.",
            whyItsBetter: ["Assets look professional instantly.", "Design debt shrinks.", "Consistency improves.", "Search is painless.", "Design stops stalling builds."]
          },
          { name: "Inbox Alchemy", url: "https://inboxalchemy.co/", description: "Full-service newsletter strategy, writing, design, and audience growth. tailored for startup founders, creators, and media companies ready to scale.",
            whatItIs: "Inbox Alchemy builds, publishes, and aggressively grows newsletters.",
            whoItsFor: "Founders who want owned audience without algorithm stress.",
            whyItsBetter: ["Newsletters ship consistently.", "Subscribers grow every week.", "Audience becomes an asset.", "Algorithms stop deciding reach.", "Ownership feels good again."]
          },
          { name: "Kawara", url: "https://www.kawara.ai/", description: "Get weekly newsletter drafts in your inbox, automatically.", hasYoutube: true, youtubeUrl: "https://youtu.be/4Dgq9pAL81M",
            whatItIs: "Kawara helps teams run coordinated, multi-channel marketing.",
            whoItsFor: "B2B teams tired of siloed efforts.",
            whyItsBetter: ["Channels finally align.", "Campaigns feel intentional.", "Handoffs disappear.", "Momentum increases.", "Marketing feels unified."]
          },
          { name: "Omneky", url: "https://www.omneky.com/", description: "AI-powered marketing and advertising solutions",
            whatItIs: "Omneky uses AI to generate and optimize ad creative at scale.",
            whoItsFor: "Performance teams who want better ads faster.",
            whyItsBetter: ["Creative iteration speeds up.", "Testing becomes cheap.", "Winners surface fast.", "Ad fatigue drops.", "ROAS breathes again."]
          },
          { name: "Setters Philippines", url: "https://www.linkedin.com/in/royanidea/", description: "Marketing services and solutions",
            whatItIs: "Setters Philippines provides trained outbound and appointment-setting talent.",
            whoItsFor: "Sales teams that want leverage without overhead.",
            whyItsBetter: ["Hiring gets easier.", "Costs stay predictable.", "Output stays consistent.", "Coverage expands fast.", "Sales stops stalling."]
          },
          { name: "Stanify.ai", url: "https://stanify.ai/", description: "Automatically remove toxic posts, auto-draft replies, and see insights across your social media channels", hasYoutube: true, youtubeUrl: "https://youtu.be/YCP0--piN2U",
            whatItIs: "Stanify helps founders build and manage their personal brand with AI.",
            whoItsFor: "Operators who want visibility without becoming influencers.",
            whyItsBetter: ["Messaging stays sharp.", "Posting feels intentional.", "Brand compounds quietly.", "Effort stays low.", "Presence feels natural."]
          },
          { name: "SwanAI", url: "https://getswan.com/", description: "Turn any GTM idea into an agentic workflow in seconds, from prompt to pipeline. Hire an AI GTM engineer today.", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=mfhM3P5wWvA",
            whatItIs: "SwanAI helps teams design and execute GTM strategies with AI.",
            whoItsFor: "Founders launching or repositioning products.",
            whyItsBetter: ["GTM stops feeling vague.", "Plans become executable.", "Misfires decrease.", "Confidence increases.", "Launches feel deliberate."]
          }
        ]
      },
      {
        title: "Sales",
        description: "Sales automation and management tools",
        icon: TrendingUp,
        tools: [
          { name: "Crono", url: "https://www.crono.one/", description: "AI-powered sales automation platform", hasYoutube: true, youtubeUrl: "https://youtu.be/0XTA86tGAto",
            whatItIs: "Crono is a sales platform focused on productivity and pipeline movement.",
            whoItsFor: "Sales teams who hate wasted motion.",
            whyItsBetter: ["Workflows stay tight.", "Follow-ups stay consistent.", "Pipeline moves daily.", "Admin fades away.", "Selling stays focused."]
          },
          { name: "Dripify", url: "https://dripify.io/", description: "LinkedIn automation and sales outreach platform",
            whatItIs: "Dripify automates LinkedIn outreach and follow-ups.",
            whoItsFor: "Teams doing outbound on LinkedIn.",
            whyItsBetter: ["Outreach runs continuously.", "Follow-ups never drop.", "Personalization scales.", "Manual work disappears.", "Pipeline grows quietly."]
          },
          { name: "Jeeva", url: "https://www.jeeva.ai/", description: "Agentic AI for anyone who sells", hasYoutube: true, youtubeUrl: "https://youtu.be/54k006F8PNQ",
            whatItIs: "Jeeva is an AI sales agent for outbound and follow-ups.",
            whoItsFor: "Teams looking to automate first touch.",
            whyItsBetter: ["Prospects get contacted instantly.", "Follow-ups feel human.", "Coverage expands.", "Costs stay low.", "Sales never sleeps."]
          }
        ]
      },
      {
        title: "Agency",
        description: "Agency services and marketing solutions",
        icon: Building2,
        tools: [
          { name: "AI Smart Marketing", url: "https://AISmartMarketing.com", description: "AI-powered marketing agency", hasYoutube: true, youtubeUrl: "https://youtu.be/jju846ZwgSQ" },
          { name: "Impossible Laboratories", url: "https://impossiblelaboratories.com/", description: "Agency services and marketing solutions" },
          { name: "Kitcaster", url: "https://kitcaster.com/", description: "Agency services and marketing solutions",
            whatItIs: "Kitcaster books founders on top podcasts in their category.",
            whoItsFor: "Founders who want authority without chasing shows.",
            whyItsBetter: ["Credibility compounds.", "Distribution happens fast.", "Leads trust you sooner.", "Content travels further.", "Podcasting actually pays off."]
          },
          { name: "Moburst", url: "https://www.moburst.com/", description: "Agency services and marketing solutions",
            whatItIs: "Moburst is a growth agency focused on mobile and digital performance.",
            whoItsFor: "Brands scaling acquisition seriously.",
            whyItsBetter: ["Execution is senior-level.", "Testing is disciplined.", "Results show up.", "Scale feels controlled.", "Growth becomes repeatable."]
          },
          { name: "DeepGem Interactive", url: "https://deepgeminteractive.com/", description: "Custom AI products built in weeks, not months. From discovery call to working AI product in 4-8 weeks.", hasYoutube: true, youtubeUrl: "https://youtu.be/x3E8Mwbyk7I" },
          { name: "NineTwoThree", url: "https://NineTwoThree.co", description: "Development and security teams", hasYoutube: true, youtubeUrl: "https://youtu.be/QlKjdaf7jTs" },
          { name: "Particle41", url: "https://particle41.com/", description: "Agency services and marketing solutions" },
          { name: "Reddireach", url: "https://reddireach.com/", description: "Our marketing agency specializes in getting your brand recommended by AI using Reddit and GEO.", hasYoutube: true, youtubeUrl: "https://youtu.be/ywlkXl7d7_Q" },
          { name: "TestSavant", url: "http://TestSavant.com/", description: "Testing and QA services", hasYoutube: true, youtubeUrl: "https://youtu.be/t8mjyUfqeX4" },
          { name: "Uproar PR", url: "https://uproarpr.com/", description: "Agency services and marketing solutions" },
          { name: "Wednesday", url: "https://www.wednesday.is/", description: "We build digital products for tomorrow to help businesses succeed today", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=IYxKt0ywC9s" },
          {
            name: "Inkfish",
            url: "https://www.inkfish.studio/",
            description: "Inkfish helps early-stage ventures cut through complexity and build what works.",
            hasYoutube: true,
            youtubeUrl: "https://youtu.be/kn8mfbuORII",
            whatItIs: "Inkfish is a design studio that helps early-stage ventures cut through complexity and build what actually works.",
            whoItsFor: "Founders who need clarity before code — turning messy ideas into focused, buildable products.",
            whyItsBetter: [
              "They start with the problem, not the pixel.",
              "Complexity gets reduced, not decorated.",
              "Early-stage founders get structure without bureaucracy.",
              "Design decisions are grounded in business logic.",
              "You ship something real, not a pretty prototype that dies."
            ]
          }
        ]
      },
      {
        title: "Shopping",
        description: "Consumer and e-commerce AI solutions",
        icon: ShoppingCart,
        tools: [
          { name: "Dayo", url: "https://dayo.co", description: "Get paid to log-off social media", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=yWQUsjgOlgU&t=99s" },
          { name: "Eat2Explore", url: "https://eat2explore.com", description: "Cooking boxes for kids", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=Pefa_Aw5fKk" },
          { name: "Tonita", url: "https://tonita.co/", description: "AI-powered shopping and e-commerce solutions" },
          {
            name: "Historic",
            url: "https://historic.app/",
            description: "AI video journaling app that captures raw spoken reflections and turns them into searchable, structured memory for founders.",
            hasYoutube: true,
            youtubeUrl: "https://youtu.be/gzHCCkRl49E",
            whatItIs: "Historic uses video journaling plus AI to capture tone, posture, energy, hesitation, and emotional context, then turns that into transcribed, summarized, and searchable personal memory.",
            whoItsFor: "Founders, creators, and operators who want unfiltered self-awareness instead of polished notes.",
            whyItsBetter: [
              "Video captures what writing deletes: tone, fatigue, hesitation, and body language.",
              "AI turns raw reflections into structured, searchable memory.",
              "Monthly reports surface patterns in your thinking and emotional state.",
              "Morning focus, capture moments, and evening reflection create a simple daily rhythm.",
              "Built for founders who need self-awareness, not just productivity."
            ]
          },
          {
            name: "Trueli",
            url: "https://www.trueli.me/",
            description: "A private way to bring your shared memories together — automatically, effortlessly, and meaningfully.",
            hasYoutube: true,
            youtubeUrl: "https://www.youtube.com/watch?v=Niv8qj6iFV0",
            whatItIs: "Trueli stitches scattered photos and moments from multiple people into cohesive shared stories — privately and automatically.",
            whoItsFor: "Friends, families, teams, and communities who want to relive shared experiences without losing pieces across devices and apps.",
            whyItsBetter: [
              "Memories stop disappearing into camera rolls.",
              "Everyone's perspective gets included automatically.",
              "Stories build themselves without manual editing.",
              "Privacy comes first — no algorithms, no feeds.",
              "Shared moments finally feel complete."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Operate",
    description: "Tools to run and optimize your business",
    color: "from-purple-500 to-pink-500",
    categories: [
      {
        title: "Operations",
        description: "Business operations and productivity tools",
        icon: Settings,
        tools: [
          {
            name: "Pentane",
            url: "https://pentane.com",
            description: "Connects financial and marketing data to tell e-commerce founders what to do next to improve profitability.",
            hasYoutube: true,
            youtubeUrl: "https://youtu.be/CKY7gZV-tUc",
            whatItIs: "Pentane is a profitability system for e-commerce operators that organizes expenses into fixed, variable, and advertising buckets — then tells founders what to change next.",
            whoItsFor: "E-commerce brands around $1M to $15M in revenue who need clarity on where money is going and what to do about it.",
            whyItsBetter: [
              "It separates ad spend into its own controllable fuel bucket.",
              "Founders see what to do, not just what happened.",
              "The three-bucket model replaces confusing P&L categories.",
              "Agentic features let you talk to your data like a teammate.",
              "Profitability becomes a math problem, not a guessing game."
            ]
          },
          { name: "Ambient", url: "https://www.ambient.us/", description: "Your AI Chief of Staff that preps you for every meeting, keeps your team accountable & aligned, and helps you stay on top of key initiatives.", hasYoutube: true, youtubeUrl: "https://youtu.be/PHJwEmNBJLI" },
          { name: "Attio", url: "https://attio.com/", description: "Modern CRM and customer data platform",
            whatItIs: "Attio is a flexible CRM built for modern teams.",
            whoItsFor: "Operators who hate rigid systems.",
            whyItsBetter: ["Data stays clean.", "Views adapt instantly.", "Workflows stay flexible.", "CRM stops fighting you.", "Ops feels modern."]
          },
          { name: "Crossmint", url: "https://www.crossmint.com/", description: "All-in-one platform for companies and agents to integrate crypto rails — including wallets, onramps, stablecoin orchestration, and more.", hasYoutube: true, youtubeUrl: "https://youtu.be/JMyyiQTUBEs",
            whatItIs: "Crossmint provides infrastructure for payments and digital assets.",
            whoItsFor: "Teams building with blockchain quietly.",
            whyItsBetter: ["Complexity disappears.", "Integrations feel normal.", "Users stay unconfused.", "Dev time shrinks.", "Web3 stops hurting."]
          },
          { name: "Brev", url: "https://Brev.ai", description: "Operations automation", hasYoutube: true, youtubeUrl: "https://youtu.be/5uv_KPnghb8" },
          { name: "Finmate", url: "https://www.finmate.ai/", description: "AI-powered financial operations and management platform", hasYoutube: true, youtubeUrl: "https://youtu.be/xmR82LiDF_s" },
          { name: "Howie", url: "https://howie.ai/", description: "AI-powered operations and productivity assistant" },
          { name: "Infinity Constellation", url: "https://www.infinityconstellation.com/", description: "We help elite founders build AI companies for businesses ready to move just as fast.", hasYoutube: true, youtubeUrl: "https://youtu.be/8sWmZV6nJbU", recommended: true },
          { name: "Kadence", url: "https://kadence.co/", description: "AI-powered coordination, dynamic space planning with actionable insights that make every workday flow", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=tSak-HFHm8s" },
          { name: "Keep It Shot", url: "https://keepitshot.com/", description: "Screenshot and visual operations tool" },
          { name: "Lauretta.io", url: "https://lauretta.io/", description: "Unlock Valuable Insights with Al-driven video analytics and predictive solutions using your existing cameras", hasYoutube: true, youtubeUrl: "https://youtu.be/LDXgpk0ZIIU" },
          { name: "Penbrothers", url: "https://penbrothers.com/", description: "Build your Offshore Team in the Philippines", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=js7QJBPLGjQ" },
          { name: "ProArch", url: "https://www.proarch.com/", description: "Business operations and consulting solutions", hasYoutube: true, youtubeUrl: "https://youtu.be/cwJvdfSqT5U" },
          { name: "Quarterzip", url: "https://www.quarterzip.ai/", description: "Realtime AI led onboarding for every user with zero engineering effort", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=dcSN49c7RHE" },
          { name: "Quadratic HQ", url: "https://www.quadratichq.com/", description: "Business operations and productivity tools" },
          {
            name: "Software Finder", url: "https://softwarefinder.com/", description: "Find the right software for your business, faster. Save time comparing options with unbiased reviews and expert advice.",
            hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=Sug239iNUXg",
            whatItIs: "Software Finder helps businesses compare software options with unbiased reviews and expert guidance.",
            whoItsFor: "Founders and operators overwhelmed by software choices who need clarity, not more tabs.",
            whyItsBetter: ["Unbiased reviews cut through vendor noise.", "Expert advice replaces guesswork.", "Comparison time shrinks dramatically.", "Decisions happen with confidence.", "The right fit beats the popular pick."]
          },
          { name: "SenseIP", url: "https://www.senseip.ai/", description: "Patent Search and Patent Filing for Entrepreneurs and Inventors", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=a3ovtsb54s8" },
          { name: "Stone Systems", url: "https://stonesystems.io/", description: "Business operations and systems solutions", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=QkVtT9dXB3Y" },
          { name: "Teamble", url: "https://teamble.com", description: "Staff com support", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=RsHUa2MsJhU" },
          { name: "Twos App", url: "https://twosapp.com", description: "Note taking", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=nr_PlQQ0tt0" },
          {
            name: "Sheets Resume Builder",
            url: "https://sheetsresume.com",
            description: "AI-powered resume builder ranked #1 on Google, built with entirely human-written content by a founder who has reviewed thousands of resumes.",
            whatItIs: "Sheets Resume Builder is an AI-powered resume tool created by Colin McIntosh, the founder of Sheets & Giggles. It ranks #1 on Google for 'AI Resume Builder' and is the top recommended result on Google Gemini for 'best resume templates' — achieved entirely through human-written, expertise-backed content.",
            whoItsFor: "Job seekers, career changers, and professionals who want a resume tool built by someone who has actually reviewed thousands of resumes and placed hundreds of executives.",
            whyItsBetter: [
              "Built by a founder who has reviewed thousands of real resumes.",
              "Every word on the site is human-written — no AI-generated filler.",
              "Ranks #1 on Google for 'AI Resume Builder' organically.",
              "Top recommended result on Google Gemini for best resume templates.",
              "Domain expertise drives the product, not just technology."
            ]
          },
          {
            name: "ReadyNDA",
            url: "https://readynda.com",
            description: "One-click mutual non-disclosure agreements for founders and small businesses. Three free NDAs per month, no legal review required.",
            whatItIs: "ReadyNDA is a one-click mutual NDA service built for founders who are tired of watching two weeks evaporate over standard boilerplate language before a sales demo. The template never changes, requires no legal review, and costs nothing for the first three uses each month.",
            whoItsFor: "Founders, sales teams, and small business owners who need to sign NDAs quickly without involving attorneys on both sides.",
            whyItsBetter: [
              "One-click signing eliminates two weeks of back-and-forth.",
              "No attorneys needed — the template is standardized.",
              "Three free NDAs per month keeps costs at zero for most founders.",
              "Built from real frustration with the sales demo NDA ritual.",
              "It exists because it should exist."
            ]
          },
          { name: "Warmstart", url: "https://warmstart.ai/", description: "Business operations and productivity tools", recommended: true,
            whatItIs: "Warmstart improves email deliverability and sender reputation.",
            whoItsFor: "Teams doing outbound at scale.",
            whyItsBetter: ["Emails land in inboxes.", "Spam stays quiet.", "Reputation improves daily.", "Campaigns stay alive.", "Cold email works again."]
          }
        ]
      },
      {
        title: "HR & Talent",
        description: "Human resources and talent management solutions",
        icon: Users,
        tools: [
          { name: "Bolto", url: "https://www.bolto.com/", description: "AI-powered HR and talent management platform", hasYoutube: true, youtubeUrl: "https://youtu.be/DINnd0O9LTs" },
          { name: "Collective Liquidity", url: "https://www.collectiveliquidity.com/", description: "Does your wealth depend on a single company? Reduce the risk of pre-IPO shares by exchanging tax-free into a portfolio backed by legendary VCs", hasYoutube: true, youtubeUrl: "https://youtu.be/j16KRLkFk9c" },
          { name: "Meld", url: "https://meld.community/", description: "BECOME THE MAN THE WORLD NEEDS. 40 years of science-backed body-based training for men.", hasYoutube: true, youtubeUrl: "https://youtu.be/KPiCQXaQ00g" },
          { name: "Pearl Talent", url: "https://www.pearltalent.com/", description: "Scale your teams at 60% less payroll without sacrificing quality and talent retention.", hasYoutube: true, youtubeUrl: "https://youtu.be/rOBMBuvdFsI",
            whatItIs: "Pearl Talent matches companies with vetted global talent.",
            whoItsFor: "Teams hiring without borders.",
            whyItsBetter: ["Hiring speeds up.", "Quality stays high.", "Costs stay sane.", "Retention improves.", "Teams scale smoothly."]
          }
        ]
      },
      {
        title: "Logistics",
        description: "Supply chain and logistics optimization tools",
        icon: Truck,
        tools: [
          { name: "Nue", url: "https://www.nue.io/", description: "Modern web framework for building fast, scalable applications", hasYoutube: true, youtubeUrl: "https://youtu.be/hC0QnJNCJYE" },
          { name: "Solmag.ai", url: "https://solmag.ai/", description: "Energy. Anywhere. Always. Power up your earnings as a Virtual Power Plant.", hasYoutube: true, youtubeUrl: "https://youtu.be/9pMIde6QQzM" },
          { name: "Sevensense", url: "https://sevensense.ai", description: "Expanding horizons, empowering Visual AI. Sevensense's groundbreaking Visual AI technology is integrated with ABB's global experience and network to redefine excellence in mobile robotics.",
            hasYoutube: true, youtubeUrl: "https://youtu.be/IKRKMzTKCws",
            whatItIs: "Sevensense builds the sensing and compute system — the eyes and brain — that gives mobile robots spatial awareness and navigation intelligence using vision-based localization.",
            whoItsFor: "Robotics companies, warehouse operators, and industrial fleet managers who need autonomous navigation that works in changing environments without fixed infrastructure.",
            whyItsBetter: [
              "No QR codes, magnetic tape, or redesigned warehouses required.",
              "Vision-based navigation adapts to real-world changes automatically.",
              "Robustness was forged in harsh early deployments, not demo rooms.",
              "Works as a platform layer across many vehicle types.",
              "Intent signaling and human prediction make robots safe coworkers."
            ]
          },
          { name: "Use Made", url: "https://usemade.ai", description: "AI-powered logistics and supply chain solutions" }
        ]
      },
      {
        title: "Security",
        description: "AI security and consulting solutions",
        icon: Shield,
        tools: [
          { name: "Bfore", url: "https://bfore.ai/", description: "AI-powered security platform" },
          { name: "Hackerverse", url: "https://hackerverse.ai/", description: "AI security and consulting solutions" },
          { name: "Optimize IT", url: "https://optimoit.io", description: "Security consulting", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=LFu3sPGxpvg" },
          { name: "Test Savant.ai", url: "https://testsavant.ai", description: "Autonomous system for enterprise", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=t8mjyUfqeX4" },
          {
            name: "Guild AI",
            url: "https://guild.ai",
            description: "The neutral control plane for AI agents — identity enforced, access controlled, every action auditable.",
            hasYoutube: true,
            youtubeUrl: "https://www.youtube.com/watch?v=3Iu1j_phfrE",
            whatItIs: "Guild AI is the enterprise control plane for AI agents. It provides hosted environments, governance, audit logging, access controls, and orchestration so companies can deploy, manage, and secure agents across teams and vendors.",
            whoItsFor: "Enterprise leaders and founders who need AI agents to work safely inside real company workflows with compliance, traceability, and multi-vendor neutrality.",
            whyItsBetter: [
              "Guild is vendor-neutral — it works across all models and providers.",
              "Every agent action is logged and auditable by default.",
              "Identity and access controls treat agents like employees, not toys.",
              "It turns single-player agents into multiplayer infrastructure.",
              "Built by a former Meta engineering leader who knows what enterprise scale actually requires."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Support",
    description: "Tools for health, learning, and AI automation",
    color: "from-amber-500 to-orange-500",
    categories: [
      {
        title: "Venture Capital",
        description: "Venture capital and investment firms",
        icon: TrendingUp,
        tools: [
          {
            name: "Denver Ventures",
            url: "https://denverventures.co/",
            description: "A generalist venture capital fund investing across industries at pre-seed and seed, led by a founder DNA thesis.",
            hasYoutube: true,
            youtubeUrl: "https://youtu.be/nSiqhHaCqjw",
            whatItIs: "Denver Ventures is a generalist venture fund that invests at pre-seed and seed stages across multiple industries. Their core thesis centers on founder DNA — betting on the person, their network, and their domain obsession before the product.",
            whoItsFor: "Early-stage founders seeking capital from investors who prioritize founder quality, distribution capability, and genuine retention over pitch deck polish.",
            whyItsBetter: [
              "They evaluate founder DNA before opening the deck.",
              "Distribution co-founders are a strong positive signal.",
              "High inference costs are read as engagement, not expense.",
              "They challenge founders to question whether VC is the right path.",
              "Generalist approach means they see patterns across every industry."
            ]
          }
        ]
      },
      {
        title: "Health & Wellness",
        description: "Health, wellness, and lifestyle applications",
        icon: Heart,
        tools: [
          { name: "Atropos", url: "https://www.atroposhealth.com/", description: "Finally…personalized evidence at your fingertips", hasYoutube: true, youtubeUrl: "https://youtu.be/WjVe6hXmaJw" },
          { name: "Axenya", url: "https://axenya.com/", description: "The Health Insurance Broker of the Future: Real Health Management, with Data Intelligence and Financial Results.", hasYoutube: true, youtubeUrl: "https://youtu.be/j9PEyU-4pB8" },
          { name: "Babyscripts", url: "https://babyscripts.com/", description: "Babyscripts enables early risk detection and care plan adherence, supporting your care team with a scalable model designed to streamline and enhance clinical workflows.", hasYoutube: true, youtubeUrl: "https://youtu.be/125mUG47b_M" },
          { name: "Canary Speech", url: "https://canaryspeech.com/", description: "Canary Speech's vocal biomarker technology unlocks voice as a vital sign, leading a new era of machine learning in healthcare.", hasYoutube: true, youtubeUrl: "https://youtu.be/AtNITDJLQqA" },
          { name: "Commitify", url: "https://www.commitify.me/", description: "The AI that calls your phone to guide you forward with clarity and care", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=y1M0_gTjSjs" },
          { name: "Clean 15", url: "https://clean15.app/", description: "Lifestyle and wellness application" },
          { name: "Dwellspring", url: "https://dwellspring.io/", description: "Health, wellness, and lifestyle applications", hasYoutube: true, youtubeUrl: "https://youtube.com/shorts/ppohPt3Jppg" },
          { name: "Same Skincare", url: "https://sameskincare.com", description: "AI-powered skincare solutions", hasYoutube: true, youtubeUrl: "https://youtu.be/De8tnwVFUzE?si=-f25-VqHu2LZwfJ-" },
          { name: "Softheon", url: "https://www.softheon.com/", description: "Shop, Quote, Enroll, Bill, Communicate — All in One Place", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=AIuG12ol6sM" },
          { name: "Soal", url: "https://www.thisissoal.com/", description: "Your art journey starts here.", hasYoutube: true, youtubeUrl: "https://youtu.be/mZ-VVfTGWA0" },
          { name: "Tradesk", url: "https://www.tradesk.co/", description: "Trading and investment lifestyle platform", hasYoutube: true, youtubeUrl: "https://youtu.be/4jb_zwF30pM" }
        ]
      },
      {
        title: "Education",
        description: "Educational technology and learning platforms",
        icon: GraduationCap,
        tools: [
          { name: "How to Vibe Code: Zero to Hero", url: "https://gamma.app/docs/How-to-Vibe-Code-Zero-to-Hero-6ichng4jnyq1eqo", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=I9aQbVnNDHQ&feature=youtu.be", description: "Complete guide to modern coding practices and workflows" },
          { name: "On Demand Human", url: "https://ondemandhuman.com/", description: "When AI Gets Stuck, Get a Real Human. Connect instantly with expert developers for live Zoom sessions. Per-minute billing. Real-time collaboration. Built for modern AI coding platforms.", hasYoutube: true, youtubeUrl: "https://youtu.be/5yh55Vrtihs" },
          { name: "SmartLab Learning", url: "https://www.smartlablearning.com/", description: "A career-connected STEM ecosystem that equips today's students for tomorrow's challenges.", hasYoutube: true, youtubeUrl: "https://youtu.be/_BWDRbBJpd4" }
        ]
      },
      {
        title: "AI Agents",
        description: "AI agents and intelligent automation",
        icon: Bot,
        tools: [
          { name: "Ask Concierge", url: "https://askconcierge.ai/", description: "AI concierge and assistant services" },
          { name: "Brev", url: "https://brev.io/", description: "AI agents and intelligent automation" },
          { name: "ID345", url: "https://id345.com/", description: "AI-powered co-working and collaboration platform" },
          { name: "Voice2Me.ai", url: "https://voice2me.ai/", description: "AI voice agent platform", hasYoutube: true, youtubeUrl: "https://youtu.be/hkRzuSXFGj8" },
          { name: "Hedy", url: "https://www.hedy.ai/", description: "AI agent platform" },
          { name: "MindStudio", url: "https://www.mindstudio.ai/", description: "AI agent development platform" },
          { name: "n8n", url: "https://n8n.io/", description: "Workflow automation and AI agent platform",
            whatItIs: "n8n is a workflow automation platform for technical teams.",
            whoItsFor: "Builders who want control over automation.",
            whyItsBetter: ["Logic stays visible.", "Integrations are endless.", "Ownership stays local.", "Costs stay predictable.", "Automation feels powerful."]
          },
          { name: "Kind App", url: "https://synsira.com/", description: "Putting people's knowledge first with a Kinder AI. You curate your data. Kind curates the AI. Pro and Free versions available for desktop on Mac and Windows computers.",
            hasYoutube: true, youtubeUrl: "https://youtu.be/F6dIYrO1_C4",
            whatItIs: "Kind App is a privacy-first AI platform that runs locally on your machine, answering questions only from your curated data collections without training on or leaking your information.",
            whoItsFor: "Founders, researchers, academics, consultants, authors, and legal professionals with decades of accumulated digital knowledge.",
            whyItsBetter: ["Your data never leaves your machine.", "Answers are citation-based — no hallucinations.", "Collections let you organize and interrogate specific archives.", "No external internet contamination.", "Your IP stays yours."]
          },
          { name: "Personal AI", url: "https://www.personal.ai/", description: "AI agents and intelligent automation" },
          { name: "SmythOS", url: "https://smythos.com/", description: "AI agent platform for building intelligent systems", hasYoutube: true, youtubeUrl: "https://youtu.be/n2WarWguXds" },
          { name: "Strawberry Browser", url: "http://strawberrybrowser.com/", description: "AI-powered browser agent", hasYoutube: true, youtubeUrl: "https://youtu.be/k_fVc9-yWgE" },
          { name: "Teamble", url: "https://teamble.com/", description: "AI agents and intelligent automation" },
          { name: "The Pause AI", url: "https://thepause.ai/", description: "AI agents and intelligent automation" },
          { name: "Tough Day", url: "https://Tough.Day", description: "AI agent for tough situations", hasYoutube: true, youtubeUrl: "https://youtu.be/1tbUw7bb8Ng" },
          { name: "V7 Labs", url: "https://www.v7labs.com/", description: "AI training data and machine learning platform", hasYoutube: true, youtubeUrl: "https://www.youtube.com/watch?v=TgkVTCCts0o&t=8s" }
        ]
      },
      {
        title: "Podcasts",
        description: "Technology and AI podcasts for founders",
        icon: Mic,
        tools: [
          { name: "AI for Founders", url: "https://podcasts.apple.com/us/podcast/ai-for-founders/id1798265052", description: "Podcast focused on AI insights and strategies for startup founders",
            whatItIs: "AI for Founders explores how builders actually use AI.",
            whoItsFor: "Founders building in real time.",
            whyItsBetter: ["No fluff conversations.", "Real operator stories.", "Tactical insights land.", "Trends get decoded.", "AI feels usable."]
          },
          { name: "Code Story", url: "https://codestory.co/", description: "Podcast featuring startup founders and their technical stories",
            whatItIs: "Code Story dives into how products are actually built.",
            whoItsFor: "Engineers and technical founders.",
            whyItsBetter: ["Stories feel honest.", "Tradeoffs get discussed.", "Lessons feel earned.", "Technical depth matters.", "Builders feel seen."]
          }
        ]
      }
    ]
  }
];

/** Generate a URL-friendly slug from a tool name */
export const generateToolSlug = (name: string): string => {
  return generateSlug(name);
};

/** Find a tool by its slug across all themes/categories */
export const findToolBySlug = (slug: string): { tool: Tool; theme: string; category: string } | null => {
  for (const theme of themes) {
    for (const category of theme.categories) {
      for (const tool of category.tools) {
        if (generateToolSlug(tool.name) === slug) {
          return { tool, theme: theme.title, category: category.title };
        }
      }
    }
  }
  return null;
};

/** Get all tools flattened */
export const getAllTools = (): (Tool & { theme: string; category: string })[] => {
  const tools: (Tool & { theme: string; category: string })[] = [];
  themes.forEach(theme => {
    theme.categories.forEach(category => {
      category.tools.forEach(tool => {
        tools.push({ ...tool, theme: theme.title, category: category.title });
      });
    });
  });
  return tools;
};
