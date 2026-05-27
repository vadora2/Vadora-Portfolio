window.SITE_ASSETS = {
  homeHeroImage: "img/hero.jpg"
};

window.PROJECT_CATEGORIES = [
  {
    id: "selected",
    visible: false,
    title: "Selected Work",
    note: "best first impression"
  },
  {
    id: "spatial",
    visible: true,
    title: "Spatial + Product Design",
    note: "architecture · 3D · systems · object design"
  },
  {
    id: "interactive",
    visible: true,
    title: "Interactive + Games",
    note: "VR · games · immersive media · storytelling"
  },
  {
    id: "uxweb",
    visible: true,
    title: "UX + Web",
    note: "apps · websites · research · digital interfaces"
  },
  {
    id: "graphic-events",
    visible: true,
    title: "Graphic + Event Design",
    note: "event branding · production graphics · professional design"
  }
];

window.PROJECTS = [
  {
    slug: "kates-catering-cart",
    title: "Kate's Catering Cart",
    featured: true,
    visible: true,
    categoryGroup: "spatial",
    categoryLabel: "Product Systems Project",
    subtitle: "Portable live-cooking exhaust system for indoor corporate catering",
    cardDescription: "A mobile catering cart with an integrated portable exhaust system for real catering constraints.",
    detailDescription: "Kate's Catering Cart is a portable exhaust system designed for a catering company, focusing on mobility, safety, workflow, and operational constraints. Beyond solving ventilation, it also enhances the customer experience by turning live cooking into a cleaner form of culinary theatre. Since indoor steak and satay cooking is difficult without an exhaust system, the cart helps unlock a new catering format for corporate spaces and pushes live catering toward a safer, more professional, and more engaging direction.",
    meta: "12-week industry project",
    duration: "12 weeks (School Project)",
    role: "Product designer, workflow researcher, prototyper",
    tools: "Sketching, CAD, physical prototyping, exhaust testing, user research",
    year: "2026",
    heroImage: "img/kate-catering.jpeg",
    fallback: "linear-gradient(135deg,#DCEEEE,#B9DFE1)",
    hmw: "How might we enable safe, flame-free and engaging live cooking for steak and satay in indoor corporate spaces, while eliminating smoke and odour in a portable, professional setup?",
    problem: "Indoor corporate catering often limits live cooking because smoke, odour, open flames, bulky transport, and unclear workflows make steak and satay difficult to serve safely in enclosed spaces. For Kate's Catering, the challenge was to create a portable system that could support live cooking while protecting customers, chefs, movers, and event operations.",
    approach: "The project was developed through stakeholder research, persona mapping, workflow analysis, and physical testing. We studied chef, logistics, and customer pain points, then tested exhaust placement, table dimensions, leg mechanisms, materials, storage, and mobility. Key decisions included front-facing suction to capture smoke at the source, a modular exhaust head for different cookware heights, foldable legs for faster setup, lockable caster wheels for movement, and a compact table layout based on human reach.",
    outcome: "KateCart meets three key needs: for customers, it creates smoke-free culinary theatre with a clean and cohesive aesthetic; for chefs, it offers organised workflow and built-in smoke control for high-heat cooking; and for operations, it improves portability, quick setup, easy cleanup, and teardown. As this is an industry project and Kate's Catering is continuing development, the full final product cannot be shown publicly.",
    media: [
      {
        src: "img/kates-catering-cart-01.jpg",
        type: "image",
        label: "Product image"
      },
      {
        src: "https://youtu.be/j2FFKZm37x8?si=3rMcdcsvyF3803N5",
        type: "youtube",
        label: "Project video"
      }
    ],
    reportFile: "",
    reportLabel: ""
  },

  {
    slug: "lower-car-suppressor",
    title: "Lower Car Suppressor",
    featured: false,
    visible: true,
    categoryGroup: "spatial",
    categoryLabel: "Computational / Product Design",
    subtitle: "Generative design exploration for automotive form optimisation",
    cardDescription: "A generative design exploration for a lower car suppressor, focusing on optimisation, form, and performance.",
    detailDescription: "Lower Car Suppressor is a short generative design study exploring how computational workflows can produce optimised forms for an automotive component. The project focuses on performance, weight, structural logic, and the visual language that emerges from design constraints.",
    meta: "2-week project",
    duration: "2 weeks (School Project)",
    role: "Designer, CAD modeller",
    tools: "Generative design workflow, CAD, digital modelling, Fusion 360",
    year: "School project",
    heroImage: "img/car-suspension.jpeg",
    fallback: "linear-gradient(135deg,#E8E8E8,#B9B9B9)",
    hmw: "How might we use generative design to optimise an automotive component while balancing performance, structure, weight, and manufacturability?",
    problem: "Automotive components need to perform under load while remaining lightweight and efficient. The challenge was to understand how constraints, forces, and design boundaries could shape a more optimised component form.",
    approach: "The work involved defining loads, constraints, and spatial boundaries before evaluating generated forms for function and manufacturability. The project used computational design as a way to explore form possibilities that would be difficult to create manually from the start.",
    outcome: "The result is a design exploration that demonstrates how optimisation can inform product form and performance thinking. It helped translate engineering constraints into a more visually and structurally informed component direction.",
    media: [
      {
        src: "https://youtu.be/N6gWsdYlmfc",
        type: "youtube",
        label: "Exploded view video"
      },
      {
        src: "https://youtu.be/R24QFNIU9ks",
        type: "youtube",
        label: "Presentation video"
      }
    ],
    reportFile: "docs/AID%20Team%202.pdf",
    reportLabel: "Download full report"
  },

  {
    slug: "the-antara-ubud-water-house",
    title: "The Antara Ubud Water House",
    featured: true,
    visible: true,
    categoryGroup: "spatial",
    categoryLabel: "Architecture / 3D Spatial Design",
    subtitle: "A relaxing Ubud getaway villa shaped by water, privacy, and landscape flow",
    cardDescription: "A Rhino-based house project shaped by water, openness, privacy, and landscape flow.",
    detailDescription: "The Antara Ubud Water House is a two-storey getaway villa concept on a hilled site in Ubud, Bali. The house responds to natural water pooling by turning water into a central source of movement, light, privacy, and atmosphere, creating a calm retreat where people can relax while staying connected to the landscape.",
    meta: "3-week project",
    duration: "3 weeks (School Project)",
    role: "Spatial designer, Rhino modeller",
    tools: "Rhino, 3D modelling, architectural diagrams",
    year: "School project",
    heroImage: "img/antara.png",
    fallback: "linear-gradient(135deg,#D7E8FF,#A9C8F5)",
    hmw: "How might we design a relaxing getaway villa in Ubud that is shaped by water, privacy, and landscape flow, while turning the site's natural water levels into an immersive spatial experience?",
    problem: "The site’s hilled terrain and natural water pooling created both a constraint and an opportunity. The challenge was to design a villa that could feel private and relaxing while using water as more than decoration.",
    approach: "Programmes were positioned according to privacy, view, water flow, and terrain. The design uses level changes to shape the journey through the villa, with stairs that descend beside the water level and lower spaces that feel more secluded and retreat-like.",
    outcome: "The design creates a quiet getaway villa where water guides the spatial experience. Privacy, landscape flow, and natural light are layered through section, allowing the basement to feel immersive and calming while the upper level remains open to views and movement.",
    media: [
      {
        src: "img/antara-2.jpeg",
        type: "image",
        label: "Spatial render"
      },
      {
        src: "https://youtu.be/SabVBXkKNMQ",
        type: "youtube",
        label: "Bali house video"
      },
      {
        src: "img/antara-floorplan.png",
        type: "image",
        label: "Floor plan",
        fit: "contain"
      },
      {
        src: "img/antara-axo.png",
        type: "image",
        label: "Axonometric drawing",
        fit: "contain"
      }
    ],
    reportFile: "docs/SDW-Ex4.pdf",
    reportLabel: "Download full report"
  },

  {
    slug: "my-island",
    title: "My Island",
    featured: false,
    visible: true,
    categoryGroup: "spatial",
    categoryLabel: "3D Interactive Environment",
    subtitle: "Whimsical interactive 3D island environment built in Unity",
    cardDescription: "A whimsical Unity island environment with a modular hut, hero tree, animated water, sound-reactive ripples, a waterfall, skybox, and fabric bunny flag.",
    detailDescription: "My Island is a 4-week 3D environment project created in Unity, with Maya used for modelling and Photoshop used for the hero tree leaf artwork. The project explores how modular assets, animated environmental systems, sound, and playful visual details can make a small island feel whimsical, cozy, and alive.",
    meta: "4-week Unity + Maya project",
    duration: "4 weeks (School Project)",
    role: "Environment designer, 3D modeller, Unity scene builder",
    tools: "Unity, Maya, Photoshop, ZBrush, Unity nodes / Shader Graph",
    year: "School project",
    heroImage: "img/my-island.jpeg",
    fallback: "linear-gradient(135deg,#D8F5D2,#99D893)",
    hmw: "How might we create a small interactive 3D island that feels cozy, playful, and alive through modular assets, environmental animation, sound, and atmospheric details?",
    problem: "Building a rich island scene meant creating many houses and environmental details, but modelling every house individually would be time-consuming and difficult to keep consistent. The challenge was to make the world feel full and playful while keeping the production workflow manageable through modular design.",
    approach: "I designed the island silhouette, then built the scene in Unity using Maya-modelled assets. A modular hut system was modelled and textured so the same house elements could be reused in different ways. The hero tree became the main landmark, with textured bark and leaves developed through Photoshop and ZBrush. I also used Unity nodes to animate the water, add interactive sound, ripples, and a waterfall, built a skybox for atmosphere, and created a realistic fabric bunny flag using Unity cloth simulation.",
    outcome: "The final environment is a whimsical and cozy island with a cute bunny flag, a modular hut, animated water, a waterfall, and a shaded chill corner under the hero tree. The stump area creates a small resting spot where people can imagine sitting and relaxing, while the modular house system keeps the world expandable without needing to model every building from scratch.",
    media: [
      {
        src: "img/my-island.jpeg",
        type: "image",
        label: "Island render"
      },
      {
        src: "https://youtu.be/rxYPO3cCMlY",
        type: "youtube",
        label: "Island walkthrough"
      }
    ],
    reportFile: "",
    reportLabel: ""
  },

  {
    slug: "our-lion-city-vr",
    title: "Our Lion City VR",
    featured: true,
    visible: true,
    categoryGroup: "interactive",
    categoryLabel: "VR / Inclusive Game Design",
    subtitle: "Inclusive VR game set in old Singapore hawker culture",
    cardDescription: "An inclusive VR game set in old Singapore, following a hawker who time-travels to his grandfather's rickshaw hawker era to collect ingredients and return home.",
    detailDescription: "Our Lion City VR is a virtual reality game about old Singapore and hawker culture. The story follows a present-day hawker whose stall was passed down from his grandfather. When his business struggles, he time travels back to the era of travelling rickshaw hawkers and must collect ingredients around old Singapore to return home.",
    meta: "4-week VR project",
    duration: "4 weeks (School Project)",
    role: "VR experience designer, interaction designer, environment storyteller",
    tools: "Unity, VR development, 3D assets, simple UI design, inclusive interaction design",
    year: "School project",
    heroImage: "img/ourlioncity.jpeg",
    fallback: "linear-gradient(135deg,#E7D8FF,#BFA6F2)",
    hmw: "How might we design an inclusive VR game that supports people with little or no technology experience while emphasising Singaporean identity through old Singapore hawker culture?",
    problem: "VR can feel intimidating for players who are unfamiliar with computers, controllers, or game interfaces. The challenge was to make a heritage-based VR game that still felt inclusive, readable, and easy to enter for users with limited technology experience.",
    approach: "We kept the UI simple, readable, and low-pressure, using clear prompts and familiar Singaporean cues to guide the player. The experience used hawker culture, ingredient collection, old streets, and the grandfather's rickshaw hawker past as environmental storytelling anchors, so players could understand the task without relying on complex controls.",
    outcome: "The final VR game frames Singaporean identity through food heritage, family legacy, and old hawker culture. Players explore old Singapore, collect ingredients, and help the hawker return to his time, while the simplified interface makes the experience more welcoming for players with little technology experience.",
    galleryTitle: "Final Presentation",
    galleryDescription: "",
    media: [
      {
        src: "docs/our-lion-city-slide-deck.pdf",
        type: "pdf",
        label: "Slide deck preview"
      },
      {
        src: "https://youtu.be/W2IilvxVJPs",
        type: "youtube",
        label: "Trailer"
      }
    ],
    reportFile: "docs/our-lion-city-experiential-design-report.pdf",
    reportLabel: "Download experiential design report"
  },

  {
    slug: "sojourn",
    title: "Sojourn",
    featured: true,
    visible: true,
    categoryGroup: "interactive",
    categoryLabel: "Game / Interactive Horror",
    subtitle: "Interactive horror game set in a cursed Singapore neighbourhood",
    cardDescription: "A Singapore-based horror game where a cursed tenant follows a dead cat through the neighbourhood to collect and burn amulets.",
    detailDescription: "Sojourn is a Singapore-based horror game set in a cursed neighbourhood. A new tenant becomes cursed after sleeping in his room one night, then follows a dead cat around the estate to collect amulets, burn them, and break the curse.",
    meta: "4-week game project",
    duration: "4 weeks (School Project)",
    role: "Game designer, interactive developer, environment storyteller",
    tools: "Unity, game design, interaction scripting, environment design, narrative pacing",
    year: "School project",
    heroImage: "img/sojourn.jpeg",
    fallback: "linear-gradient(135deg,#222,#666)",
    hmw: "How might we develop an interactive horror game that uses Singaporean neighbourhood spaces, environmental pacing, and player action to build fear and curiosity?",
    problem: "The challenge was to make the horror feel local and interactive instead of relying only on jumpscares. The neighbourhood needed to feel familiar, unsettling, and readable enough for the player to follow clues while still feeling uncertain.",
    approach: "The experience was developed around exploration, guided movement, and item collection. The dead cat acts as a strange guide through the neighbourhood, while amulets, spatial cues, sound, and pacing push the player forward. Interaction was used to make the player actively participate in breaking the curse rather than only watching the story unfold.",
    outcome: "The final game concept creates an interactive horror journey through a cursed Singapore neighbourhood. By following the dead cat, collecting amulets, and burning them to break the curse, the player experiences fear through movement, discovery, and environmental tension.",
    galleryTitle: "Final Presentation",
    galleryDescription: "",
    media: [
      {
        src: "docs/sojourn_Presentation.pdf",
        type: "pdf",
        label: "Slide deck preview"
      },
      {
        src: "https://youtu.be/tXcJLoGyMgQ",
        type: "youtube",
        label: "Trailer"
      }
    ],
    reportFile: "docs/sojourn-report.pdf",
    reportLabel: "Download report"
  },

  {
    slug: "supper-nostalgia",
    title: "Supper Nostalgia",
    featured: false,
    visible: true,
    categoryGroup: "interactive",
    categoryLabel: "AR / Interactive Postcard",
    subtitle: "Interactive AR postcard about Singapore supper culture",
    cardDescription: "An AR-scannable interactive postcard about Singapore supper culture, capturing late-night prata shop memories with friends.",
    detailDescription: "Supper Nostalgia is a Doodle People x NP interactive postcard project about local food memories. The postcard can be scanned with AR to produce an interactive experience themed around nostalgia, focusing on late-night supper culture in Singapore and eating at a prata shop with friends.",
    meta: "3-week AR project",
    duration: "3 weeks (School Project)",
    role: "Visual designer, AR storyteller, illustrator",
    tools: "Illustration, AR interaction, layout design, visual storytelling",
    year: "School project",
    heroImage: "img/super-nostalgia.jpeg",
    fallback: "linear-gradient(135deg,#FFF1BE,#F7C85D)",
    hmw: "How might we encapsulate Singapore's supper culture to invoke nostalgia through an interactive AR postcard?",
    problem: "Nostalgia can be difficult to communicate in a small postcard format, especially when the final experience also needs to work interactively through AR. The challenge was to make a familiar supper memory feel warm, local, and engaging at first glance and after scanning.",
    approach: "We focused on the shared ritual of eating prata late at night with friends. The visual direction used familiar supper culture cues, warm food memories, and local social atmosphere, then extended the static postcard into an AR interaction so the memory could feel more alive.",
    outcome: "The final postcard captures the comfort of Singapore supper culture through a nostalgic prata-shop scene. The AR layer turns the postcard from a flat illustration into a small interactive memory of late-night food, friends, and local routine.",
    galleryTitle: "Postcard + Persona Documentation",
    galleryDescription: "",
    media: [
      {
        src: "docs/supper-Postcard.pdf",
        type: "pdf",
        label: "Postcard preview"
      },
      {
        src: "docs/supper-Persona.pdf",
        type: "pdf",
        label: "Persona preview"
      }
    ],
    reportFile: "docs/supper-nostalgia-readme.pdf",
    reportLabel: "Download readme report"
  },

  {
    slug: "dqueue",
    title: "DQueue",
    featured: true,
    visible: true,
    categoryGroup: "uxweb",
    categoryLabel: "UX / App Design",
    subtitle: "Pandemic-era queue management app for F&B restrictions",
    cardDescription: "A pandemic-era mobile and watch app concept helping F&B owners and customers manage crowd limits, queues, and dining restrictions.",
    detailDescription: "DQueue was designed during the peak of the pandemic, when people were adjusting to the new norm and dining restrictions still limited groups to two people per party. The app supports both customers and F&B owners by making queue progress, crowd management, and dining flow easier to understand.",
    meta: "2-week UX project",
    duration: "2-week project",
    role: "UX designer, UI designer, researcher",
    tools: "UX research, wireframing, mobile UI, wearable UI, service flow design",
    year: "School project",
    heroImage: "img/DQueue.png",
    fallback: "linear-gradient(135deg,#FFE6C7,#F5BF73)",
    hmw: "How might we help F&B owners and customers manage queues, crowd limits, and dining restrictions more clearly during the pandemic new norm?",
    problem: "F&B businesses were struggling to bring in customers while also following crowd restrictions. Customers also faced uncertainty around queue length, waiting time, and whether a venue could safely accommodate them under changing rules.",
    approach: "The app was designed with a clean and simple UI so that customers could understand queue status quickly, while F&B owners could better manage crowds and table flow. The UX focused on clarity, low friction, and making queue information easy to check across mobile and wearable touchpoints.",
    outcome: "The final concept helps reduce queue uncertainty for customers and gives F&B owners a clearer way to manage crowds during restriction-heavy periods. It supports safer, more organised dining while keeping the experience easy to use.",
    media: [
      {
        src: "docs/DQueue Proposal.pdf",
        type: "pdf",
        label: "Proposal"
      }
    ],
    reportFile: "",
    reportLabel: ""
  },

  {
    slug: "seachange-studios",
    title: "Seachange Studios",
    featured: false,
    visible: true,
    categoryGroup: "uxweb",
    categoryLabel: "AI / Sustainable Web Platform",
    subtitle: "Sustainable swimwear platform for microfibre-aware material choices",
    cardDescription: "An AI-assisted sustainable swimwear platform that helps shoppers and brands understand microfibre shedding and choose lower-impact materials.",
    detailDescription: "Seachange Studios is an AI-assisted concept platform that helps swimwear brands and consumers make more sustainable material decisions. Users can upload swimwear images when considering a purchase, while industry users can explore fabric construction recommendations for producing lower-impact swimwear.",
    meta: "2-week web concept",
    duration: "2 weeks (School Project)",
    role: "Web designer, AI concept designer, research communicator",
    tools: "Web design, AI-assisted recommendation concept, materials research, visual communication",
    year: "School project",
    heroImage: "img/fashion-website.jpeg",
    fallback: "linear-gradient(135deg,#CDEFE7,#8DD7C8)",
    hmw: "How might we increase awareness of microfibre shedding from both production and consumer choices while helping people choose lower-impact swimwear materials?",
    problem: "Microfibre shedding is often invisible to consumers and difficult for brands to communicate clearly. Both production teams and shoppers may lack accessible tools for comparing material choices, microplastic impact, and environmental trade-offs.",
    approach: "The platform was designed around an interactive materials selection tool. It uses an AI-assisted concept flow to recommend fabric constructions, surface lower-impact alternatives, and explain trade-offs between performance, sustainability, and microplastic shedding. The upload feature supports both shoppers evaluating swimwear and industry users planning production.",
    outcome: "The final concept turns microfibre research into a clearer web experience. Seachange Studios helps brands choose lower-impact material constructions and helps consumers become more aware of the hidden environmental cost behind swimwear fabric choices.",
    media: [
      {
        src: "https://youtu.be/KXIEuEqIVwk",
        type: "youtube",
        label: "Demo video"
      }
    ],
    reportFile: "",
    reportLabel: ""
  },

  {
    slug: "innowave-technology-website-revamp",
    title: "Innowave Technology Website Revamp",
    featured: false,
    visible: true,
    categoryGroup: "uxweb",
    categoryLabel: "Web / Professional",
    subtitle: "Website analysis, restructuring, and redesign support",
    cardDescription: "Website analysis, restructuring, and redesign support through marketing consultation and content organisation.",
    detailDescription: "The Innowave Technology Website Revamp involved assessing and restructuring the company's website through analysis, content organisation, and consultation with marketing agencies. The work focused on making the website clearer, more current, and better aligned with the company's digital presence.",
    meta: "4-week internship",
    duration: "Digital marketing internship",
    role: "Digital marketing intern, website design support",
    tools: "Website analysis, content restructuring, marketing consultation",
    year: "2025",
    heroImage: "img/innowave.png",
    fallback: "linear-gradient(135deg,#CCE8FF,#85C7F0)",
    hmw: "How might we improve an existing technology company website so its structure, content, and digital presence feel clearer and more current?",
    problem: "The existing website needed clearer structure, updated presentation, and stronger alignment with the company’s digital marketing direction.",
    approach: "The work involved reviewing existing pages, identifying areas for restructuring, organising content, and supporting website refurbishment discussions with marketing partners.",
    outcome: "The revamp helped improve the website's clarity, presentation, and readiness for a stronger digital marketing presence.",
    galleryTitle: "",
    media: [
      {
        type: "image",
        src: "img/innowave-email.jpg",
        label: "Innowave email design",
        fit: "contain"
      },
      {
        type: "pdf",
        src: "docs/innowave-BEFORE.pdf",
        label: "Innowave before PDF"
      }
    ],
    reportFile: "",
    reportLabel: ""
  },

  {
    slug: "procon-events-and-marketing",
    title: "Procon Events & Marketing",
    featured: true,
    visible: true,
    categoryGroup: "graphic-events",
    categoryLabel: "Professional / Events Design",
    subtitle: "Junior designer work for high-profile brand activations",
    cardDescription: "Graphic design and production support for branded events, including House of Sephora, TAG Heuer F1 ION, Audemars Piguet, and Penfolds.",
    detailDescription: "At Procon Events & Marketing, I supported event design and production for high-profile brand activations, including House of Sephora, TAG Heuer F1 ION, Audemars Piguet client events, and Penfolds. The work involved design deliverables, production coordination, and on-site support under real client and vendor timelines.",
    meta: "5-month internship",
    duration: "Junior designer internship",
    role: "Junior designer, production support, on-site event support",
    tools: "Event design, production coordination, client-facing design support",
    year: "2023 — 2024",
    heroImage: "img/procon.png",
    fallback: "linear-gradient(135deg,#FBE3E0,#F0A098)",
    hmw: "How might we support high-profile brand activations through clear visual design, production coordination, and responsive event execution?",
    problem: "Live event design involves tight timelines, client requirements, production limitations, and on-site changes. The challenge was to support design work that could move smoothly from layout to production to event execution.",
    approach: "The internship involved preparing design deliverables, coordinating production needs, responding to client requirements, and supporting on-site execution for selected events.",
    outcome: "The experience strengthened my ability to design within brand guidelines, work with fast production timelines, and understand how spatial and visual design operate in live event environments.",
    galleryTitle: "",
    media: [
      {
        type: "pdf",
        src: "docs/Procon VIVA.pdf",
        label: "Procon VIVA PDF"
      },
      {
        type: "pdf",
        src: "docs/Procon INT Weekly Report.pdf",
        label: "Procon INT Weekly Report PDF"
      }
    ],
    reportFile: "",
    reportLabel: ""
  }
];