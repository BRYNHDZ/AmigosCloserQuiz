const ALL_QUESTIONS = [
  {
    "id": 1,
    "category": "Service Knowledge",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "What happens to grass clippings under the Nutrient Standard mowing plan?",
    "options": [
      "They are bagged and removed from the property",
      "They are finely mulched and returned to the lawn",
      "They are composted on-site in a designated area",
      "The client chooses each visit"
    ],
    "answer": 1,
    "explanation": "Nutrient Standard mulches clippings and returns them to the lawn, recycling nutrients back into the soil."
  },
  {
    "id": 2,
    "category": "Tier Differences",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "What is the key upgrade a client gets with Pristine Standard mowing over Nutrient Standard?",
    "options": [
      "Twice-weekly mowing instead of weekly",
      "Bagging and removal of all grass clippings",
      "Fertilizer application included with each visit",
      "Edging of all garden beds"
    ],
    "answer": 1,
    "explanation": "Pristine Standard bags and removes all clippings for a consistently clean appearance. Everything else is the same."
  },
  {
    "id": 3,
    "category": "Service Knowledge",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "Which of the following is included in BOTH Nutrient Standard and Pristine Standard mowing?",
    "options": [
      "Bagging of clippings",
      "Fertilizer application",
      "String trimming around edges, obstacles, and beds + blowing hard surfaces",
      "Garden bed weeding"
    ],
    "answer": 2,
    "explanation": "Both tiers include professional mowing, string trimming around edges/obstacles/beds, and blowing of hard surfaces."
  },
  {
    "id": 4,
    "category": "Service Knowledge",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "Does Nutrient Standard mowing leave messy piles of grass on the lawn?",
    "options": [
      "Yes — clippings are left in piles",
      "No — clippings are finely mulched so they break down quickly and are barely visible",
      "Only during peak growing season",
      "It depends on the lawn size"
    ],
    "answer": 1,
    "explanation": "Clippings are finely mulched, not left in piles. They break down quickly and feed the soil."
  },
  {
    "id": 5,
    "category": "Scenario",
    "service": "Weekly Lawn Maintenance",
    "type": "scenario",
    "question": "A client says: \"I don't want grass clippings left on my lawn — it looks messy. But I also don't want to pay too much. What are my options?\"",
    "answer": "Explain both tiers: Nutrient Standard mulches clippings back into the lawn (actually great for lawn health — feeds the soil naturally), and the clippings are finely mulched so they break down quickly — not messy piles at all. But if a consistently clean look matters most, Pristine Standard bags and removes all clippings every visit. Most people are surprised how clean Nutrient actually looks, so it might be worth trying first.",
    "keyPoints": [
      "Explain Nutrient Standard returns mulched clippings (good for lawn health)",
      "Explain Pristine Standard bags and removes everything",
      "Reassure that mulched clippings break down quickly — not messy",
      "Help them weigh cost vs appearance preference"
    ]
  },
  {
    "id": 6,
    "category": "Scenario",
    "service": "Weekly Lawn Maintenance",
    "type": "scenario",
    "question": "A client asks: \"Why should I pay more for Pristine mowing? What do I actually get?\"",
    "answer": "With Pristine, all grass clippings are bagged and removed from the property every visit. The result is a consistently clean, manicured appearance — no clippings visible at all. Nutrient Standard is great too — it mulches the clippings back into the lawn which is actually better for soil health. But some people just prefer that perfectly clean look every week, and that's what Pristine delivers.",
    "keyPoints": [
      "Pristine bags and removes all clippings",
      "Consistently clean, manicured appearance",
      "Nutrient is good for lawn health but some prefer the cleaner look",
      "Frame both as valid choices, not upselling"
    ]
  },
  {
    "id": 7,
    "category": "Service Knowledge",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "What does 'Nutrient Standard' mean in the context of Amigos' services?",
    "options": [
      "We apply fertilizer nutrients during the service",
      "Organic material is returned to the soil/lawn to recycle nutrients naturally",
      "We use only organic products",
      "It's the premium tier with extra treatments"
    ],
    "answer": 1,
    "explanation": "Nutrient Standard philosophy: organic material (clippings, leaves, debris) is returned to the soil to recycle nutrients naturally."
  },
  {
    "id": 8,
    "category": "Service Knowledge",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "What does 'Pristine Standard' mean across Amigos services?",
    "options": [
      "We use the highest quality materials",
      "All collected material is completely hauled away for a clean appearance",
      "We visit twice as often",
      "Chemical treatments are included"
    ],
    "answer": 1,
    "explanation": "Pristine Standard: all material is hauled away for a perfectly clean appearance."
  },
  {
    "id": 9,
    "category": "Tier Differences",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "Besides clipping handling, is there ANY other difference between Nutrient and Pristine mowing?",
    "options": [
      "Pristine includes more trimming detail",
      "Pristine crews spend more time on-site",
      "No — identical service, the only difference is clippings are bagged vs mulched",
      "Pristine includes a monthly deep-clean"
    ],
    "answer": 2,
    "explanation": "Identical service in every way — the only difference is what happens to the clippings."
  },
  {
    "id": 10,
    "category": "Service Knowledge",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "Does Weekly Lawn Maintenance include any lawn treatments like fertilizer or weed control?",
    "options": [
      "Yes — fertilizer is applied monthly",
      "Yes — weed control is included with Pristine",
      "No — it's mowing, string trimming, and blowing only",
      "Only if the client adds it to their plan"
    ],
    "answer": 2,
    "explanation": "Weekly Lawn Maintenance is mowing, string trimming, and blowing. No fertilizer, weed control, or other treatments."
  },
  {
    "id": 11,
    "category": "Scenario",
    "service": "Weekly Lawn Maintenance",
    "type": "scenario",
    "question": "A client asks: \"Does your mowing service include edging along my flower beds and blowing off my driveway?\"",
    "answer": "Yes! Both our Nutrient and Pristine mowing plans include string trimming around all edges, obstacles, and beds, plus blowing of all hard surfaces like your driveway and walkways. That's standard on every visit.",
    "keyPoints": [
      "String trimming around edges, obstacles, and beds is included",
      "Blowing of hard surfaces is included",
      "Both tiers include this — it's not an upgrade feature",
      "Confirm clearly and confidently"
    ]
  },
  {
    "id": 12,
    "category": "Scenario",
    "service": "Weekly Lawn Maintenance",
    "type": "scenario",
    "question": "A client says: \"I heard returning grass clippings to the lawn is bad — doesn't it cause thatch?\"",
    "answer": "That's actually a common misconception. Finely mulched grass clippings break down quickly and return nutrients to the soil — they don't contribute to thatch buildup. It's actually one of the best things you can do for your lawn's health. That said, if you just prefer a cleaner look without any clippings visible, our Pristine Standard bags everything. Both approaches work great — it really comes down to preference.",
    "keyPoints": [
      "Address the misconception directly — mulched clippings don't cause thatch",
      "Clippings break down quickly and feed the soil",
      "Position Nutrient as the healthy choice",
      "Offer Pristine as the preference-based alternative"
    ]
  },
  {
    "id": 13,
    "category": "Service Knowledge",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "What is NOT included in Weekly Lawn Maintenance?",
    "options": [
      "String trimming around obstacles",
      "Blowing hard surfaces",
      "Garden bed weeding or fertilizer application",
      "Professional mowing of all turf areas"
    ],
    "answer": 2,
    "explanation": "Mowing plans include mowing, string trimming, and blowing. Bed weeding, fertilizer, and treatments are separate."
  },
  {
    "id": 14,
    "category": "Tier Differences",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "If a client is environmentally conscious and wants the healthiest approach for their lawn, which tier should you recommend?",
    "options": [
      "Pristine Standard — it keeps the lawn cleanest",
      "Nutrient Standard — returning clippings feeds the soil naturally",
      "Either — they're identical for lawn health",
      "Neither — they need a fertilizer program"
    ],
    "answer": 1,
    "explanation": "Nutrient Standard is the eco-friendly, lawn-health-first choice."
  },
  {
    "id": 15,
    "category": "Scenario",
    "service": "Weekly Lawn Maintenance",
    "type": "scenario",
    "question": "A client asks: \"Do you do any kind of lawn treatments — like fertilizer, weed control, or grub prevention?\"",
    "answer": "Currently our lawn health services focus on aeration and overseeding — two of the best things you can do for long-term lawn health. We don't currently offer chemical treatment programs like fertilizer, weed control, or grub prevention. For those you'd want a lawn care treatment company. But our aeration loosens the soil for better root growth, and overseeding thickens the turf which naturally helps crowd out weeds.",
    "keyPoints": [
      "We offer aeration and overseeding",
      "We do NOT offer fertilizer, weed control, or pest treatments",
      "Be honest about what we don't offer",
      "Redirect to what we DO offer"
    ]
  },
  {
    "id": 16,
    "category": "Scenario",
    "service": "Weekly Lawn Maintenance",
    "type": "scenario",
    "question": "A client asks: \"What exactly do your guys do when they come for mowing? Walk me through a visit.\"",
    "answer": "Every visit: we professionally mow all turf areas, then string trim around all edges, flower beds, fences, and obstacles, then blow off your driveway, walkways, and any other hard surfaces. With Nutrient Standard, the clippings get finely mulched back into the lawn. With Pristine, we bag and remove everything. That's every single visit.",
    "keyPoints": [
      "Mow all turf areas",
      "String trim edges, beds, obstacles",
      "Blow all hard surfaces",
      "Explain clipping handling based on tier",
      "Every visit, not just sometimes"
    ]
  },
  {
    "id": 17,
    "category": "Scenario",
    "service": "Weekly Lawn Maintenance",
    "type": "scenario",
    "question": "A client asks: \"What's the difference between your service and me just hiring a neighborhood kid to mow?\"",
    "answer": "We're a professional crew — every visit includes not just mowing but string trimming around all your edges, beds, and obstacles, plus blowing all your hard surfaces clean. The cut is consistent and even. With Nutrient Standard, clippings are finely mulched to feed your soil. With Pristine, everything is bagged. Plus you're on a schedule — we show up every week, rain plans built in, no chasing anyone down.",
    "keyPoints": [
      "Professional quality — mow, trim, blow every visit",
      "Consistent schedule",
      "Explain what is included beyond just mowing",
      "Reliability and accountability"
    ]
  },
  {
    "id": 18,
    "category": "Tier Differences",
    "service": "Weekly Lawn Maintenance",
    "type": "mc",
    "question": "A client on Nutrient Standard asks about switching to Pristine. Is this a scope change or approach change?",
    "options": [
      "Completely different service with different crew procedures",
      "Same visit — the only change is clippings are bagged instead of mulched",
      "Pristine includes additional services like fertilizer",
      "You can't switch mid-season"
    ],
    "answer": 1,
    "explanation": "Same mowing visit — string trimming, edging, blowing all stay the same. Only clipping handling changes."
  },
  {
    "id": 19,
    "category": "Service Knowledge",
    "service": "Spring Cleanup",
    "type": "mc",
    "question": "What does a Spring Cleanup include?",
    "options": [
      "Leaves, sticks, and debris cleared from lawn and beds",
      "Full property cleanup including trimming, pruning, and mulch",
      "Only lawn debris removal — beds are not touched",
      "Power washing of hardscapes"
    ],
    "answer": 0,
    "explanation": "Clears leaves, sticks, and debris from lawn and beds — early-season reset."
  },
  {
    "id": 20,
    "category": "Tier Differences",
    "service": "Spring Cleanup",
    "type": "mc",
    "question": "What is the difference between Nutrient Standard and Pristine Standard Spring Cleanup?",
    "options": [
      "Nutrient is lawn only; Pristine includes beds",
      "Nutrient returns shredded material to soil; Pristine hauls everything away",
      "Pristine includes trimming and pruning",
      "Pristine uses organic products"
    ],
    "answer": 1,
    "explanation": "Same scope. Nutrient shreds and returns to soil. Pristine hauls away."
  },
  {
    "id": 21,
    "category": "Service Knowledge",
    "service": "Spring Cleanup",
    "type": "mc",
    "question": "Which of the following is NOT included in a Spring Cleanup?",
    "options": [
      "Clearing debris from lawn",
      "Clearing debris from beds",
      "Trimming, pruning, bed edging, or mulch",
      "Shredding organic material (Nutrient Standard)"
    ],
    "answer": 2,
    "explanation": "Does NOT include trimming, pruning, bed edging, or mulch."
  },
  {
    "id": 22,
    "category": "Scenario",
    "service": "Spring Cleanup",
    "type": "scenario",
    "question": "A client asks: \"Can you do my spring cleanup and also trim my bushes and put down mulch at the same time?\"",
    "answer": "Spring Cleanup is specifically debris clearing — leaves, sticks, winter leftovers. It doesn't include trimming, pruning, bed edging, or mulch. Those are separate services that happen later in the season. Cleanup comes first, then beds and mulch, then trimming. I can quote everything separately so you know the full plan.",
    "keyPoints": [
      "Cleanup does NOT include trimming, pruning, edging, or mulch",
      "These are separate services",
      "Offer to quote each separately",
      "Common question — don't make them feel bad"
    ]
  },
  {
    "id": 23,
    "category": "Scenario",
    "service": "Spring Cleanup",
    "type": "scenario",
    "question": "A client asks: \"What's the point of a spring cleanup? Can't I just start mowing and skip it?\"",
    "answer": "Spring cleanup clears all the leaves, sticks, and debris that piled up over winter from your lawn and beds. Starting mowing over all that debris is not great for your lawn — it can smother the grass and trap moisture. The cleanup gives your lawn a clean start so when mowing begins, we are working with a healthy surface. Most people are surprised how much stuff builds up over winter.",
    "keyPoints": [
      "Clears winter debris from lawn and beds",
      "Starting mowing over debris is bad for lawn",
      "Gives a clean start for growing season",
      "Explain the value"
    ]
  },
  {
    "id": 24,
    "category": "Scenario",
    "service": "Spring Cleanup",
    "type": "scenario",
    "question": "A client asks: \"What does Nutrient Standard mean for spring cleanup? Do you put fertilizer down?\"",
    "answer": "No fertilizer — Nutrient Standard means we shred all the organic debris and return it to your soil rather than hauling it away. The shredded material breaks down and naturally feeds your soil. It's the eco-friendly approach. If you'd rather have everything completely removed, that's Pristine Standard — same cleanup, we just haul everything away.",
    "keyPoints": [
      "Nutrient does NOT mean fertilizer",
      "Material shredded and returned to soil",
      "Natural nutrient recycling",
      "Pristine hauls away instead",
      "Same scope either way"
    ]
  },
  {
    "id": 25,
    "category": "Tier Differences",
    "service": "Spring Cleanup",
    "type": "mc",
    "question": "A client who wants their property perfectly clean after spring cleanup should choose which tier?",
    "options": [
      "Nutrient Standard — it shreds debris finer",
      "Pristine Standard — all material is hauled away",
      "Either — both achieve the same result",
      "They need a separate service"
    ],
    "answer": 1,
    "explanation": "Pristine hauls everything away for a perfectly clean appearance."
  },
  {
    "id": 26,
    "category": "Service Knowledge",
    "service": "Spring Cleanup",
    "type": "mc",
    "question": "Does Spring Cleanup require an active mowing plan?",
    "options": [
      "Yes — add-on to mowing",
      "No — standalone one-time service",
      "Only for Pristine Standard",
      "Only for Property Plan clients"
    ],
    "answer": 1,
    "explanation": "Standalone — no mowing plan required."
  },
  {
    "id": 27,
    "category": "Scenario",
    "service": "Spring Cleanup",
    "type": "scenario",
    "question": "A client says: \"My yard is a mess from winter. I need everything done — cleanup, beds, bushes, mulch. Where do I start?\"",
    "answer": "Start with Spring Cleanup to clear all the winter debris. That's your clean slate. From there: bed work and mulch come next, bush trimming later once things have had their spring growth. I can map out the full plan and quote each service so you know what's coming.",
    "keyPoints": [
      "Start with Spring Cleanup",
      "Clean baseline for everything else",
      "Then beds, mulch, trimming in order",
      "Offer to plan and quote everything"
    ]
  },
  {
    "id": 28,
    "category": "Tier Differences",
    "service": "Spring Cleanup",
    "type": "mc",
    "question": "A client who cares about soil health should choose which Spring Cleanup tier?",
    "options": [
      "Pristine — cleaner means healthier",
      "Nutrient Standard — shredded material feeds soil naturally",
      "Doesn't matter — no impact on soil",
      "Neither — need separate soil treatment"
    ],
    "answer": 1,
    "explanation": "Nutrient Standard shreds debris and returns it to soil, naturally recycling nutrients."
  },
  {
    "id": 29,
    "category": "Scenario",
    "service": "Spring Cleanup",
    "type": "scenario",
    "question": "A client asks: \"Why would I want you to leave the debris on my lawn instead of hauling it away?\"",
    "answer": "With our Nutrient Standard option, we do not just leave it — we finely shred all the organic material so it breaks down quickly and feeds your soil naturally. It is actually great for your lawn health. But if you prefer a perfectly clean look with nothing left behind, our Pristine Standard hauls everything away. Same cleanup, just a different approach to what happens with the material.",
    "keyPoints": [
      "Nutrient does not mean leaving debris — it is finely shredded",
      "Breaks down and feeds soil",
      "Pristine hauls everything for a clean look",
      "Frame both as valid, client chooses"
    ]
  },
  {
    "id": 30,
    "category": "Tier Differences",
    "service": "Spring Cleanup",
    "type": "mc",
    "question": "A client says they care more about appearance than soil health. Which Spring Cleanup tier fits them better?",
    "options": [
      "Nutrient Standard — shredded material is barely visible",
      "Pristine Standard — all material hauled away for a perfectly clean result",
      "Either one — they look the same after",
      "Neither — they need a different service"
    ],
    "answer": 1,
    "explanation": "Pristine Standard hauls everything away. For appearance-focused clients, Pristine delivers the clean result they want."
  },
  {
    "id": 31,
    "category": "Service Knowledge",
    "service": "Aeration",
    "type": "mc",
    "question": "What is lawn aeration?",
    "options": [
      "Spraying liquid nutrients into the soil",
      "Mechanical core aeration — pulling small plugs of soil to loosen compacted ground",
      "Applying a chemical soil loosener",
      "Raking to remove thatch"
    ],
    "answer": 1,
    "explanation": "Mechanical core aeration — pulling soil plugs to relieve compaction."
  },
  {
    "id": 32,
    "category": "Service Knowledge",
    "service": "Overseeding",
    "type": "mc",
    "question": "What does overseeding do?",
    "options": [
      "Replaces the entire lawn",
      "Thickens existing turf by spreading seed over the current lawn",
      "Kills weeds and replants",
      "Applies seed-and-fertilizer combo"
    ],
    "answer": 1,
    "explanation": "Thickens existing turf by spreading new seed."
  },
  {
    "id": 33,
    "category": "Service Knowledge",
    "service": "Overseeding",
    "type": "mc",
    "question": "What does overseeding NOT do?",
    "options": [
      "Improve lawn density",
      "Fill large bare patches or severely damaged areas",
      "Help crowd out weeds",
      "Strengthen root system"
    ],
    "answer": 1,
    "explanation": "Does NOT fill large bare or severely damaged areas — needs hydroseeding or renovation."
  },
  {
    "id": 34,
    "category": "Service Knowledge",
    "service": "Aeration",
    "type": "mc",
    "question": "Why is aeration beneficial?",
    "options": [
      "Kills weeds by exposing roots",
      "Relieves soil compaction so air, water, and nutrients reach roots better",
      "Adds fertilizer to root zone",
      "Removes excess thatch"
    ],
    "answer": 1,
    "explanation": "Relieves compaction, improving air/water/nutrient flow to roots."
  },
  {
    "id": 35,
    "category": "Service Knowledge",
    "service": "Aeration",
    "type": "mc",
    "question": "Are Spring Aeration and Spring Overseeding the same service?",
    "options": [
      "Yes — always bundled",
      "No — separate services commonly paired",
      "Aeration includes overseeding",
      "Overseeding includes aeration"
    ],
    "answer": 1,
    "explanation": "Separate services, commonly paired but quoted individually."
  },
  {
    "id": 36,
    "category": "Scenario",
    "service": "Aeration",
    "type": "scenario",
    "question": "A client asks: \"What's aeration? Why would I need it?\"",
    "answer": "Aeration is where we run a machine across your lawn that pulls small plugs of soil out of the ground. Over time, soil gets compacted and it's hard for air, water, and nutrients to reach the roots. Aeration opens that up so your lawn can breathe and grow stronger. It's one of the best things you can do for lawn health.",
    "keyPoints": [
      "Explain physically — machine pulls soil plugs",
      "Relieves compaction",
      "Better air, water, nutrient flow",
      "Keep it simple and relatable"
    ]
  },
  {
    "id": 37,
    "category": "Scenario",
    "service": "Overseeding",
    "type": "scenario",
    "question": "A client says: \"I have a big bare patch — can overseeding fix it?\"",
    "answer": "Overseeding thickens existing turf — great for thin areas. But for a big bare patch, overseeding alone won't be enough. That would need hydroseeding or another restoration method. I'd want to take a look and recommend the right approach.",
    "keyPoints": [
      "Overseeding thickens existing turf",
      "Not for large bare patches",
      "Needs hydroseeding or renovation",
      "Be honest, offer to assess"
    ]
  },
  {
    "id": 38,
    "category": "Scenario",
    "service": "Aeration",
    "type": "scenario",
    "question": "A client asks: \"Should I do aeration in spring or fall?\"",
    "answer": "Fall is generally the best time in Illinois — less weed competition and the grass has fall and spring to establish before summer heat. Spring works too, but overseeding in spring is trickier because weeds germinate at the same time. If you're choosing one, go fall. Both is ideal for maximum health.",
    "keyPoints": [
      "Fall is the stronger recommendation",
      "Less weed competition in fall",
      "Spring seeding competes with weeds",
      "Both is ideal, fall is priority"
    ]
  },
  {
    "id": 39,
    "category": "Service Knowledge",
    "service": "Overseeding",
    "type": "mc",
    "question": "Why is spring overseeding trickier than fall?",
    "options": [
      "Soil is too cold",
      "Weeds germinate at the same time, and crabgrass preventer can block grass seed",
      "Spring storms wash away seed",
      "Not enough sunlight"
    ],
    "answer": 1,
    "explanation": "Spring overseeding competes with weeds, and pre-emergent can block grass seed."
  },
  {
    "id": 40,
    "category": "Scenario",
    "service": "Aeration",
    "type": "scenario",
    "question": "A client asks: \"Is fall or spring better for aeration? Does it matter?\"",
    "answer": "Fall is generally the best time in Illinois — less weed competition, and the grass has fall and spring to establish roots before summer heat. Spring aeration works too, but if you are pairing it with overseeding, spring is trickier because weeds germinate at the same time. If you can only do one, go fall. Both is ideal.",
    "keyPoints": [
      "Fall is the stronger recommendation",
      "Less weed competition",
      "Spring overseeding has weed competition issues",
      "Both is ideal, fall is priority"
    ]
  },
  {
    "id": 41,
    "category": "Service Knowledge",
    "service": "Overseeding",
    "type": "mc",
    "question": "Is seed material included in overseeding or does the client buy it?",
    "options": [
      "Client provides their own",
      "Seed cost is embedded — included",
      "Billed as separate materials charge",
      "Only included with fall"
    ],
    "answer": 1,
    "explanation": "Seed cost is embedded in the price."
  },
  {
    "id": 42,
    "category": "Service Knowledge",
    "service": "Aeration",
    "type": "mc",
    "question": "What does the lawn look like right after aeration?",
    "options": [
      "Perfectly smooth",
      "Small soil plugs on the surface — break down in 1-2 weeks",
      "Torn up and needs replanting",
      "Large visible holes"
    ],
    "answer": 1,
    "explanation": "Small soil plugs left on surface, break down naturally in a couple weeks."
  },
  {
    "id": 43,
    "category": "Scenario",
    "service": "Aeration",
    "type": "scenario",
    "question": "A client says: \"We just moved in and the lawn feels rock hard.\"",
    "answer": "That sounds like soil compaction — really common, especially with new construction. Aeration pulls small plugs of soil to open everything up so air, water, and nutrients can reach the roots again. I'd recommend pairing it with overseeding to thicken the turf. Fall is ideal, but spring works too.",
    "keyPoints": [
      "Identify compaction",
      "Recommend aeration",
      "Suggest pairing with overseeding",
      "Mention fall as ideal"
    ]
  },
  {
    "id": 44,
    "category": "Service Knowledge",
    "service": "Aeration",
    "type": "mc",
    "question": "Do aeration and overseeding require a mowing plan?",
    "options": [
      "Yes — both require mowing",
      "No — both are standalone",
      "Only overseeding requires mowing",
      "Only if on a Property Plan"
    ],
    "answer": 1,
    "explanation": "Both are standalone one-time services."
  },
  {
    "id": 45,
    "category": "Scenario",
    "service": "Overseeding",
    "type": "scenario",
    "question": "A client says: \"I want to put down crabgrass preventer AND overseed this spring.\"",
    "answer": "Crabgrass preventer works by stopping seeds from germinating — including grass seed. So you generally have to choose one or the other in spring. If you overseed, skip the pre-emergent. If crabgrass is the bigger concern, skip spring seeding and we'll do fall overseeding instead — which is actually the better time for it.",
    "keyPoints": [
      "Pre-emergent blocks grass seed too",
      "Can't do both simultaneously",
      "Pick one or defer seeding to fall",
      "Fall is better for overseeding anyway"
    ]
  },
  {
    "id": 46,
    "category": "Scenario",
    "service": "Aeration",
    "type": "scenario",
    "question": "A client asks: \"My lawn looks fine — do I really need aeration?\"",
    "answer": "Even healthy-looking lawns benefit from aeration. Soil compacts naturally over time from foot traffic, mowing, and weather. That compaction makes it harder for water, air, and nutrients to reach the roots. Aeration opens that up. Think of it like a tune-up — your car might run fine, but regular maintenance keeps it running great long-term. Most lawn pros recommend it at least once a year.",
    "keyPoints": [
      "Even healthy lawns benefit",
      "Soil compacts naturally over time",
      "Better water/air/nutrient flow to roots",
      "Frame as preventive maintenance",
      "Recommend at least annually"
    ]
  },
  {
    "id": 47,
    "category": "Tier Differences",
    "service": "Overseeding",
    "type": "mc",
    "question": "A client with thin grass in several spots (but no large bare patches) asks what service would help. What should you recommend?",
    "options": [
      "Overseeding — designed to thicken existing turf",
      "A full lawn replacement",
      "Spring Cleanup — it will help grass grow back",
      "Mulch Installation — covers thin spots"
    ],
    "answer": 0,
    "explanation": "Overseeding thickens existing turf. Perfect for thin areas without large bare patches."
  },
  {
    "id": 48,
    "category": "Service Knowledge",
    "service": "Overseeding",
    "type": "mc",
    "question": "For severely damaged lawns, what does Amigos recommend instead of overseeding?",
    "options": [
      "More frequent overseeding",
      "Hydroseeding or other renovation (not currently offered by Amigos)",
      "Extra fertilizer",
      "Heavy aeration"
    ],
    "answer": 1,
    "explanation": "Severely damaged lawns need hydroseeding or renovation, which Amigos doesn't currently offer."
  },
  {
    "id": 49,
    "category": "Service Knowledge",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "Garden Bed Maintenance plans are add-ons to which service?",
    "options": [
      "Spring Cleanup",
      "Mulch Installation",
      "An active mowing plan",
      "Any recurring service"
    ],
    "answer": 2,
    "explanation": "Both plans require an active mowing plan."
  },
  {
    "id": 50,
    "category": "Tier Differences",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "What method does the Clean Look Plan use to control weeds?",
    "options": [
      "Hand-pulling from root",
      "String trimmers for mechanical weed control (roots stay intact)",
      "Chemical herbicide",
      "Preen weed preventer"
    ],
    "answer": 1,
    "explanation": "Clean Look uses string trimmers — mechanical trim only, roots remain."
  },
  {
    "id": 51,
    "category": "Tier Differences",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "What method does the Estate Detail Plan use?",
    "options": [
      "String trimmers only",
      "Chemical herbicide spray",
      "Hand-pulled weeding plus Preen weed preventer",
      "Full bed replacement"
    ],
    "answer": 2,
    "explanation": "Estate Detail = hand-pulled weeding + Preen weed preventer."
  },
  {
    "id": 52,
    "category": "Service Knowledge",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "What does Preen weed preventer do?",
    "options": [
      "Kills existing weeds on contact",
      "Prevents new weeds from sprouting but does NOT eliminate existing ones",
      "Fertilizes beds",
      "Blocks all plant growth"
    ],
    "answer": 1,
    "explanation": "Prevents new weeds from sprouting — doesn't kill existing ones."
  },
  {
    "id": 53,
    "category": "Scenario",
    "service": "Garden Bed Maintenance",
    "type": "scenario",
    "question": "A client asks: \"What's the difference between your two bed plans?\"",
    "answer": "Clean Look is more affordable — we use string trimmers to knock down visible weed growth. It's mechanical only, so roots stay and weeds regrow, but beds look neat. Estate Detail is our premium plan — we hand-pull weeds from the root and apply Preen, which stops new weeds from sprouting. More thorough and keeps beds cleaner long-term. Both require a mowing plan.",
    "keyPoints": [
      "Clean Look: trimmer, roots stay, affordable",
      "Estate Detail: hand-pull + Preen, more thorough",
      "Help choose based on budget and expectations",
      "Both require mowing plan"
    ]
  },
  {
    "id": 54,
    "category": "Tier Differences",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "Why do weeds grow back faster on Clean Look than Estate Detail?",
    "options": [
      "Clean Look uses less effective products",
      "Clean Look only cuts at surface — roots remain to regrow",
      "Estate Detail visits more often",
      "Clean Look beds don't get mulch"
    ],
    "answer": 1,
    "explanation": "Clean Look trims mechanically but roots remain. Estate Detail removes roots and prevents new growth."
  },
  {
    "id": 55,
    "category": "Scenario",
    "service": "Garden Bed Maintenance",
    "type": "scenario",
    "question": "Client says Clean Look isn't keeping up with weeds. What do you recommend?",
    "answer": "If weeds are exceeding Clean Look's capacity, I'd recommend a Bed Reset first to bring beds back to baseline. Then either continue Clean Look from that fresh start, or upgrade to Estate Detail which hand-pulls from the root and applies Preen to prevent regrowth. Estate Detail does a much better job long-term.",
    "keyPoints": [
      "Acknowledge Clean Look's limits",
      "Bed Reset first for clean baseline",
      "Then upgrade to Estate Detail or restart Clean Look",
      "Estate Detail is more thorough"
    ]
  },
  {
    "id": 56,
    "category": "Service Knowledge",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "Does Estate Detail require clients to schedule individual weeding visits?",
    "options": [
      "Yes — call each time",
      "No — care is built into routine automatically spring through fall",
      "Only first visit needs scheduling",
      "Schedule bi-weekly via app"
    ],
    "answer": 1,
    "explanation": "No scheduling needed — care is built into the routine."
  },
  {
    "id": 57,
    "category": "Tier Differences",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "Which plan includes Preen weed preventer?",
    "options": [
      "Clean Look Plan",
      "Estate Detail Plan",
      "Both plans",
      "Neither"
    ],
    "answer": 1,
    "explanation": "Only Estate Detail includes Preen."
  },
  {
    "id": 58,
    "category": "Scenario",
    "service": "Garden Bed Maintenance",
    "type": "scenario",
    "question": "Client wants Estate Detail but doesn't have a mowing plan.",
    "answer": "Both bed plans require an active mowing plan — the care is built into our weekly visits. Without that weekly presence, we can't deliver consistent bed maintenance. But we have standalone options: one-time weeding visits, bed resets, and mulch don't require a mowing plan at all. Or we could look at getting you on a mowing plan too.",
    "keyPoints": [
      "Both plans require mowing plan",
      "Offer standalone alternatives",
      "Don't just say no — provide solutions",
      "Could pitch mowing plan as a package"
    ]
  },
  {
    "id": 59,
    "category": "Tier Differences",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "Which statement best describes Clean Look vs Estate Detail?",
    "options": [
      "Clean Look is cosmetic maintenance; Estate Detail is thorough weed management",
      "Clean Look is monthly; Estate Detail is weekly",
      "Clean Look is for small beds; Estate Detail is for large",
      "Clean Look is manual; Estate Detail uses machinery"
    ],
    "answer": 0,
    "explanation": "Clean Look = cosmetic (trims visible weeds). Estate Detail = thorough (removes roots + prevents regrowth)."
  },
  {
    "id": 60,
    "category": "Service Knowledge",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "What should happen before starting a bed maintenance plan if beds are overgrown?",
    "options": [
      "Start the plan immediately",
      "A one-time Bed Reset to bring beds to baseline first",
      "Refuse service until manageable",
      "Charge double for first month"
    ],
    "answer": 1,
    "explanation": "Bed Reset brings beds to a clean baseline, then maintenance keeps them there."
  },
  {
    "id": 61,
    "category": "Scenario",
    "service": "Garden Bed Maintenance",
    "type": "scenario",
    "question": "Budget-conscious client asks: \"Is Clean Look even worth it if weeds grow back?\"",
    "answer": "Clean Look keeps beds looking neat between visits — controls visible growth so things don't get out of hand. Like mowing — the grass keeps growing but we keep it looking great. If you want more permanent weed control, Estate Detail pulls from the root and prevents new ones. But for most people who want neat-looking beds, Clean Look gets the job done.",
    "keyPoints": [
      "Clean Look controls visible growth — neat appearance",
      "Compare to mowing — ongoing maintenance",
      "Estate Detail for permanent control",
      "Don't undersell Clean Look"
    ]
  },
  {
    "id": 62,
    "category": "Service Knowledge",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "What is Clean Look Plan's main limitation?",
    "options": [
      "Only covers front yard",
      "If weed growth exceeds capacity, upgrade or reset may be required",
      "Only for small beds",
      "Doesn't include trimming"
    ],
    "answer": 1,
    "explanation": "If weed growth exceeds what Clean Look can manage, an upgrade or reset may be needed."
  },
  {
    "id": 63,
    "category": "Scenario",
    "service": "Garden Bed Maintenance",
    "type": "scenario",
    "question": "Client doesn't want chemicals. Can they still do Estate Detail without Preen?",
    "answer": "Preen is actually a pre-emergent — prevents seeds from germinating, not a harsh chemical. But if you'd rather skip it, we can still do the hand-pulling portion. You could also consider Clean Look which is purely mechanical — no products at all. Let me know what feels right.",
    "keyPoints": [
      "Respect their concern",
      "Explain what Preen actually is",
      "Offer to skip Preen",
      "Offer Clean Look as chemical-free alternative"
    ]
  },
  {
    "id": 64,
    "category": "Scenario",
    "service": "Garden Bed Maintenance",
    "type": "scenario",
    "question": "A client asks: \"How often do your guys actually work on the beds? Is it once a month or what?\"",
    "answer": "Both bed maintenance plans are built into our regular weekly mowing visits — so our crew is touching your beds every week while they are already at your property. It is not a separate monthly visit. That is what keeps things from ever getting out of hand. Clean Look trims visible weeds weekly, Estate Detail hand-pulls and prevents regrowth weekly.",
    "keyPoints": [
      "Weekly during mowing visits",
      "Not separate or monthly",
      "Built into regular crew presence",
      "Both plans get weekly attention"
    ]
  },
  {
    "id": 65,
    "category": "Tier Differences",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "For the most thorough, long-lasting weed control, which plan?",
    "options": [
      "Clean Look — covers more area",
      "Estate Detail — hand-pulling + Preen for lasting results",
      "Either — equal prevention",
      "Neither — need herbicide service"
    ],
    "answer": 1,
    "explanation": "Estate Detail = hand-pulling + Preen. Most thorough."
  },
  {
    "id": 66,
    "category": "Service Knowledge",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "If a client isn't on a mowing plan but wants bed maintenance, what standalone option exists?",
    "options": [
      "Clean Look Plan",
      "One-Time Weeding (no plan required)",
      "Estate Detail Plan",
      "No option exists"
    ],
    "answer": 1,
    "explanation": "One-Time Weeding is standalone — no mowing plan required."
  },
  {
    "id": 67,
    "category": "Scenario",
    "service": "Garden Bed Maintenance",
    "type": "scenario",
    "question": "Client asks: \"What's the benefit of Preen? Why does Estate Detail include it?\"",
    "answer": "Preen stops new weed seeds from sprouting. So while hand-pulling handles existing weeds, Preen prevents new ones from popping up. Together they're a great one-two punch — clean beds that stay cleaner longer between visits.",
    "keyPoints": [
      "Preen prevents new weeds from sprouting",
      "Hand-pulling handles existing weeds",
      "Together = 'one-two punch'",
      "Beds stay cleaner longer"
    ]
  },
  {
    "id": 68,
    "category": "Scenario",
    "service": "Garden Bed Maintenance",
    "type": "scenario",
    "question": "A client on Clean Look asks: \"The weeds keep coming back. Is this plan even doing anything?\"",
    "answer": "Clean Look is designed to keep visible weed growth controlled — we trim them down every week so your beds always look neat. But since we are cutting at the surface and the roots stay, they do regrow. Think of it like mowing your lawn — the grass keeps growing but we keep it looking good. If you want longer-lasting results where weeds actually stop coming back, Estate Detail pulls from the root and applies Preen to prevent new ones. Or if beds have gotten ahead of the plan, a one-time Bed Reset can give us a fresh start.",
    "keyPoints": [
      "Validate their concern",
      "Explain Clean Look controls growth, does not eliminate",
      "Compare to mowing — ongoing maintenance",
      "Offer Estate Detail as the upgrade path",
      "Suggest Bed Reset if beds are overwhelmed"
    ]
  },
  {
    "id": 69,
    "category": "Tier Differences",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "A heavily wooded property with lots of bed area would benefit more from which plan?",
    "options": [
      "Clean Look — covers more ground faster",
      "Estate Detail — thorough hand-pulling prevents overwhelming regrowth",
      "Neither — need full landscaping",
      "Both handle heavy properties equally"
    ],
    "answer": 1,
    "explanation": "Heavy weed environments benefit from Estate Detail's thorough approach."
  },
  {
    "id": 70,
    "category": "Scenario",
    "service": "Garden Bed Maintenance",
    "type": "scenario",
    "question": "Client asks: \"Why can't I get bed maintenance without a mowing plan? I mow myself.\"",
    "answer": "Bed maintenance is built into our weekly mowing visits — keeps pricing efficient and service consistent. Without weekly visits, we can't deliver that quality. But we have standalone options: one-time weeding, bed resets, and mulch all work without a mowing plan. Could also consider having us handle mowing too — then everything's covered.",
    "keyPoints": [
      "Built into weekly visits",
      "Requires regular presence",
      "Offer standalone alternatives",
      "Could pitch mowing plan"
    ]
  },
  {
    "id": 71,
    "category": "Tier Differences",
    "service": "Garden Bed Maintenance",
    "type": "mc",
    "question": "A client asks which bed plan will keep their beds cleaner for longer between visits. Which should you recommend?",
    "options": [
      "Clean Look — it covers beds faster",
      "Estate Detail — pulling roots + Preen means weeds are slower to return",
      "Both keep beds equally clean between visits",
      "Neither — they need weekly standalone visits"
    ],
    "answer": 1,
    "explanation": "Estate Detail pulls roots AND applies Preen, so regrowth is significantly slower between weekly visits."
  },
  {
    "id": 72,
    "category": "Scenario",
    "service": "Garden Bed Maintenance",
    "type": "scenario",
    "question": "A client asks: \"What is Preen? Is it safe for my plants?\"",
    "answer": "Preen is a pre-emergent weed preventer — it creates a barrier in the soil that stops new weed seeds from germinating. It does not harm your existing plants at all — it only prevents NEW seeds from sprouting. So your flowers and shrubs are totally fine. It is widely used in residential landscaping and is a key part of why the Estate Detail Plan keeps beds cleaner longer.",
    "keyPoints": [
      "Pre-emergent — stops seeds from germinating",
      "Safe for existing plants",
      "Only prevents NEW growth from seeds",
      "Widely used in residential landscaping",
      "Part of why Estate Detail is more effective"
    ]
  },
  {
    "id": 73,
    "category": "Service Knowledge",
    "service": "Mulch Installation",
    "type": "mc",
    "question": "What's included in Mulch Installation?",
    "options": [
      "Delivery, installation, and new bed creation",
      "Delivery, installation, bed edging, and complimentary Preen",
      "Delivery only — installation extra",
      "Mulch and garden redesign"
    ],
    "answer": 1,
    "explanation": "Delivery, installation, bed edging, and Preen."
  },
  {
    "id": 74,
    "category": "Service Knowledge",
    "service": "Mulch Installation",
    "type": "mc",
    "question": "What is NOT included in Mulch Installation?",
    "options": [
      "Bed edging",
      "Preen application",
      "New bed creation or reclaiming undefined areas",
      "Even depth spread"
    ],
    "answer": 2,
    "explanation": "Does NOT include new bed creation, reclaiming areas, or turf removal."
  },
  {
    "id": 75,
    "category": "Service Knowledge",
    "service": "Mulch Installation",
    "type": "mc",
    "question": "What type of mulch does Amigos install?",
    "options": [
      "Red dyed",
      "Natural dark brown",
      "Cedar chips",
      "Client's choice"
    ],
    "answer": 1,
    "explanation": "Natural dark brown mulch."
  },
  {
    "id": 76,
    "category": "Scenario",
    "service": "Mulch Installation",
    "type": "scenario",
    "question": "Client asks: \"What exactly is included when you guys do mulch?\"",
    "answer": "Everything: we deliver natural dark brown mulch, install it at even depth across your existing beds, edge along the borders for a clean defined look, and apply Preen to help prevent new weeds. Full package — you just say yes and we handle the rest.",
    "keyPoints": [
      "Delivery and installation",
      "Even depth spread",
      "Bed edging",
      "Preen application",
      "Existing beds only"
    ]
  },
  {
    "id": 77,
    "category": "Service Knowledge",
    "service": "Mulch Installation",
    "type": "mc",
    "question": "Can Amigos create new flower beds as part of mulch service?",
    "options": [
      "Yes — included",
      "No — existing beds only",
      "Only small areas",
      "Only during spring"
    ],
    "answer": 1,
    "explanation": "Existing beds only. No new bed creation, turf removal, or expansion."
  },
  {
    "id": 78,
    "category": "Scenario",
    "service": "Mulch Installation",
    "type": "scenario",
    "question": "Client wants to expand flower beds AND get mulch.",
    "answer": "Our mulch service refreshes existing beds — delivery, installation, edging, and Preen. Creating new beds or expanding existing ones isn't part of that scope. You'd need bed creation done separately first. Once new beds exist, we can absolutely mulch them.",
    "keyPoints": [
      "Mulch covers existing beds only",
      "No new bed creation",
      "Bed creation first, then mulch",
      "Be clear about scope"
    ]
  },
  {
    "id": 79,
    "category": "Scenario",
    "service": "Mulch Installation",
    "type": "scenario",
    "question": "Client wants to mulch over weedy beds.",
    "answer": "Mulch alone won't fix a weed problem — they'll push right through. I'd recommend a Bed Reset first to clear everything out, then mulch with Preen to prevent regrowth. That way the mulch holds up and looks good long-term.",
    "keyPoints": [
      "Don't mulch over weeds",
      "Bed Reset first",
      "Then mulch with Preen",
      "Explain why order matters"
    ]
  },
  {
    "id": 80,
    "category": "Scenario",
    "service": "Mulch Installation",
    "type": "scenario",
    "question": "A client asks: \"How do you figure out how much mulch my property needs?\"",
    "answer": "Our crew estimates that on-site — they look at your bed area and figure out the right amount. Most standard suburban homes are in the 3 to 8 yard range. We do not charge you to come look. Once we see the property we will give you an exact quote.",
    "keyPoints": [
      "Estimated on-site by crew",
      "Give general ranges for context",
      "Offer to come look and quote",
      "Do not try to estimate over the phone"
    ]
  },
  {
    "id": 81,
    "category": "Service Knowledge",
    "service": "Mulch Installation",
    "type": "mc",
    "question": "Is bed edging included with mulch or extra?",
    "options": [
      "Always included",
      "Always extra",
      "Only for large jobs",
      "Only with Property Plans"
    ],
    "answer": 0,
    "explanation": "Included with mulch installation."
  },
  {
    "id": 82,
    "category": "Service Knowledge",
    "service": "Mulch Installation",
    "type": "mc",
    "question": "Mulch Installation requires a mowing plan?",
    "options": [
      "Yes",
      "No — standalone one-time service",
      "Only for large properties",
      "Only for Property Plan clients"
    ],
    "answer": 1,
    "explanation": "Standalone — no mowing plan needed."
  },
  {
    "id": 83,
    "category": "Scenario",
    "service": "Mulch Installation",
    "type": "scenario",
    "question": "Client asks about tree rings with mulch.",
    "answer": "We'll mulch existing tree rings that are already established. Creating new ones involves cutting turf and defining the area, which is outside our mulch scope. Once they exist, we handle them like any other bed.",
    "keyPoints": [
      "Existing tree rings: yes",
      "New tree ring creation: no",
      "Different scope — turf removal needed"
    ]
  },
  {
    "id": 84,
    "category": "Scenario",
    "service": "Mulch Installation",
    "type": "scenario",
    "question": "Client asks: \"How many yards of mulch do I need?\"",
    "answer": "We estimate on-site — our crew eyeballs the beds and figures out the right amount. Most standard suburban homes are in the 3 to 8 yard range, larger properties more. We can get you a quote once we see the property.",
    "keyPoints": [
      "Estimated on-site",
      "General ranges for context",
      "Don't estimate over the phone",
      "Offer to quote after seeing property"
    ]
  },
  {
    "id": 85,
    "category": "Service Knowledge",
    "service": "Mulch Installation",
    "type": "mc",
    "question": "What does the Preen application with mulch do?",
    "options": [
      "Kills existing weeds",
      "Prevents new weed seeds from germinating through the mulch",
      "Fertilizes soil",
      "Keeps mulch color from fading"
    ],
    "answer": 1,
    "explanation": "Prevents new weed seeds from germinating."
  },
  {
    "id": 86,
    "category": "Scenario",
    "service": "Mulch Installation",
    "type": "scenario",
    "question": "Client asks: \"Should I do a bed reset before mulch?\"",
    "answer": "Depends on bed condition. Heavy weeds or debris? Reset first, then mulch. Clean beds just needing freshening up? Mulch alone is perfect. The edging and Preen that come with it will give everything a polished look. Mulch alone doesn't fix underlying weed problems — they push through.",
    "keyPoints": [
      "Depends on bed condition",
      "Heavy weeds = reset first",
      "Clean beds = mulch alone fine",
      "Mulch doesn't solve existing weeds"
    ]
  },
  {
    "id": 87,
    "category": "Service Knowledge",
    "service": "Mulch Installation",
    "type": "mc",
    "question": "What does 'existing beds only' mean?",
    "options": [
      "Only beds with current mulch",
      "Clearly defined beds that already exist — no new beds, no turf removal",
      "Only front yard",
      "Only beds Amigos installed"
    ],
    "answer": 1,
    "explanation": "Existing, clearly defined beds. No new bed creation or expansion."
  },
  {
    "id": 88,
    "category": "Scenario",
    "service": "Mulch Installation",
    "type": "scenario",
    "question": "A client asks: \"I already have mulch from last year. Do I still need new mulch?\"",
    "answer": "Mulch breaks down over time — it fades, thins out, and loses its weed-suppressing ability. Most beds benefit from a fresh layer each year to maintain that clean look, keep moisture in the soil, and suppress weeds. Our service includes fresh mulch at even depth, re-edging your borders, and a Preen application to help keep weeds out. It really refreshes the whole look of your beds.",
    "keyPoints": [
      "Mulch breaks down and fades over time",
      "Annual refresh is beneficial",
      "Maintains appearance, moisture, weed suppression",
      "Service includes edging and Preen too"
    ]
  },
  {
    "id": 89,
    "category": "Service Knowledge",
    "service": "Shrub & Bush Shaping",
    "type": "mc",
    "question": "What does Shrub & Bush Shaping involve?",
    "options": [
      "Tree pruning and removal",
      "Professional trimming from ground level using handheld tools",
      "Chemical growth inhibitor",
      "Landscape redesign"
    ],
    "answer": 1,
    "explanation": "Professional trimming using handheld tools from ground level. No tree work."
  },
  {
    "id": 90,
    "category": "Tier Differences",
    "service": "Shrub & Bush Shaping",
    "type": "mc",
    "question": "How many visits does Annual Shaping include?",
    "options": [
      "1",
      "2",
      "4",
      "6"
    ],
    "answer": 0,
    "explanation": "One visit per year."
  },
  {
    "id": 91,
    "category": "Tier Differences",
    "service": "Shrub & Bush Shaping",
    "type": "mc",
    "question": "How many visits does Bi-Annual Shaping include?",
    "options": [
      "1",
      "2",
      "4",
      "6"
    ],
    "answer": 1,
    "explanation": "Two visits per year."
  },
  {
    "id": 92,
    "category": "Tier Differences",
    "service": "Shrub & Bush Shaping",
    "type": "mc",
    "question": "How many visits does Premium Managed Shaping include?",
    "options": [
      "2",
      "4",
      "~6 as-needed",
      "12 monthly"
    ],
    "answer": 2,
    "explanation": "Approximately 6 as-needed visits per season."
  },
  {
    "id": 93,
    "category": "Tier Differences",
    "service": "Shrub & Bush Shaping",
    "type": "mc",
    "question": "Which trimming tier requires a mowing plan?",
    "options": [
      "Annual",
      "Bi-Annual",
      "Premium Managed",
      "All three"
    ],
    "answer": 2,
    "explanation": "Only Premium Managed requires a mowing plan."
  },
  {
    "id": 94,
    "category": "Service Knowledge",
    "service": "Shrub & Bush Shaping",
    "type": "mc",
    "question": "Does Shrub & Bush Shaping include tree work?",
    "options": [
      "Yes — all trees and shrubs",
      "Only small ornamental trees",
      "No — ground level, handheld tools only",
      "Only under 10 feet"
    ],
    "answer": 2,
    "explanation": "Ground level only, handheld tools. No tree work."
  },
  {
    "id": 95,
    "category": "Scenario",
    "service": "Shrub & Bush Shaping",
    "type": "scenario",
    "question": "Client says bushes grow too fast for one annual trim.",
    "answer": "Bi-Annual gives two visits — first after spring growth, second later in season. If you want them always looking sharp, Premium Managed is ongoing as-needed trimming, roughly 6 visits. Premium requires a mowing plan since crews handle it during regular visits.",
    "keyPoints": [
      "Bi-Annual: 2 visits/year",
      "Premium Managed: ~6 ongoing visits",
      "Premium requires mowing plan",
      "Recommend based on growth rate"
    ]
  },
  {
    "id": 96,
    "category": "Scenario",
    "service": "Shrub & Bush Shaping",
    "type": "scenario",
    "question": "Client asks to trim their trees too.",
    "answer": "Our trimming is ground-level work with handheld tools — we don't do tree trimming or removal. For that you'd want a certified arborist. But shrubs, hedges, bushes — we've got you covered.",
    "keyPoints": [
      "No tree work",
      "Ground level only",
      "Redirect to arborist",
      "Confirm what we CAN do"
    ]
  },
  {
    "id": 97,
    "category": "Tier Differences",
    "service": "Shrub & Bush Shaping",
    "type": "mc",
    "question": "Key benefit of Premium Managed over Bi-Annual?",
    "options": [
      "Different equipment",
      "Bushes trimmed on ongoing as-needed basis — never look overgrown",
      "Includes tree work",
      "Uses growth retardants"
    ],
    "answer": 1,
    "explanation": "Ongoing as-needed = consistently shaped, never overgrown."
  },
  {
    "id": 98,
    "category": "Scenario",
    "service": "Shrub & Bush Shaping",
    "type": "scenario",
    "question": "Client asks: \"What's the difference between your three bush trimming options?\"",
    "answer": "Annual is one visit per year — good for slow growers. Bi-Annual is two visits — recommended for faster-growing landscapes. Premium Managed is ongoing as needed, roughly 6 visits per season — bushes always look perfect. Premium requires a mowing plan since our crew handles it during visits. For most homes, Bi-Annual is the sweet spot.",
    "keyPoints": [
      "Annual: 1 visit, slow growers",
      "Bi-Annual: 2 visits, most popular",
      "Premium: ~6 visits, always looks perfect",
      "Premium requires mowing plan"
    ]
  },
  {
    "id": 99,
    "category": "Tier Differences",
    "service": "Shrub & Bush Shaping",
    "type": "mc",
    "question": "Can a client without a mowing plan get Annual or Bi-Annual?",
    "options": [
      "No — all require mowing",
      "Yes — only Premium Managed requires mowing",
      "Only Annual",
      "Need at least bed maintenance"
    ],
    "answer": 1,
    "explanation": "Annual and Bi-Annual are standalone. Only Premium Managed requires mowing."
  },
  {
    "id": 100,
    "category": "Service Knowledge",
    "service": "Shrub & Bush Shaping",
    "type": "mc",
    "question": "What does 'ground level only' mean?",
    "options": [
      "Only trim at ground level",
      "Work from ground with handheld tools — no ladders, climbing, or overhead work",
      "Only bushes under 3 feet",
      "Crew stays on flat ground"
    ],
    "answer": 1,
    "explanation": "Ground level, handheld tools. No ladders, climbing, or overhead work."
  },
  {
    "id": 101,
    "category": "Scenario",
    "service": "Shrub & Bush Shaping",
    "type": "scenario",
    "question": "Client on mowing plan says bushes look terrible between trims.",
    "answer": "Since you're on a mowing plan, you're set for Premium Managed Shaping. Instead of big trims once or twice a year, our crew handles bushes on an ongoing basis — trimming as needed. Roughly 6 visits, built into your mowing visits. Bushes stay consistently shaped all season.",
    "keyPoints": [
      "Recommend Premium Managed (they have mowing plan)",
      "Ongoing vs periodic trimming",
      "Built into existing visits",
      "Consistently maintained"
    ]
  },
  {
    "id": 102,
    "category": "Scenario",
    "service": "Shrub & Bush Shaping",
    "type": "scenario",
    "question": "A client asks: \"My neighbor has their bushes trimmed and they look perfect all summer. How do I get that?\"",
    "answer": "That sounds like our Premium Managed Shaping — ongoing trimming as needed throughout the season, roughly 6 visits. Your bushes never get a chance to look overgrown. It requires a mowing plan since our crew handles it during regular visits. If you do not have mowing with us, Bi-Annual Shaping is two visits per year which keeps most landscapes looking sharp.",
    "keyPoints": [
      "Recommend Premium Managed for always-perfect look",
      "About 6 visits throughout season",
      "Requires mowing plan",
      "Bi-Annual as alternative without mowing plan"
    ]
  },
  {
    "id": 103,
    "category": "Service Knowledge",
    "service": "Perennial Flower Pruning",
    "type": "mc",
    "question": "What is Perennial Flower Pruning?",
    "options": [
      "Trimming shrubs and trees",
      "Seasonal pruning of perennial flowers — typically spring and fall",
      "Removing dead annuals",
      "Planting new perennials"
    ],
    "answer": 1,
    "explanation": "Seasonal pruning at appropriate times — spring and/or fall."
  },
  {
    "id": 104,
    "category": "Scenario",
    "service": "Perennial Flower Pruning",
    "type": "scenario",
    "question": "A client asks: \"Do you handle my perennial flowers too, or just bushes?\"",
    "answer": "Yes — we offer Perennial Flower Pruning as an add-on. It is seasonal pruning at the right times — typically a spring cut-back and a fall cut-back depending on the plant. It is separate from bush trimming since perennials need different timing and technique. We can add it to your plan.",
    "keyPoints": [
      "Yes, we handle perennials",
      "Spring and fall cut-backs",
      "Separate from bush trimming",
      "Can be added to their plan"
    ]
  },
  {
    "id": 105,
    "category": "Service Knowledge",
    "service": "Perennial Flower Pruning",
    "type": "mc",
    "question": "Does it include shrub or tree trimming?",
    "options": [
      "Yes — all plants",
      "Only small shrubs",
      "No — perennial flowers only",
      "Only near perennials"
    ],
    "answer": 2,
    "explanation": "Perennial flowers only. Shrubs and trees are separate."
  },
  {
    "id": 106,
    "category": "Scenario",
    "service": "Perennial Flower Pruning",
    "type": "scenario",
    "question": "A client asks: \"What is the difference between perennial pruning and your bush trimming service?\"",
    "answer": "Different plants, different approach. Bush trimming is about shaping — we use handheld tools to restore a neat, balanced shape to your shrubs and hedges. Perennial pruning is seasonal maintenance on your flowers — cutting back dead growth in spring and fall to keep them healthy and looking good. They are separate services because the timing, technique, and plants are different.",
    "keyPoints": [
      "Bush trimming = shaping shrubs with tools",
      "Perennial pruning = seasonal flower maintenance",
      "Different timing and technique",
      "Separate services that can both be on a plan"
    ]
  },
  {
    "id": 107,
    "category": "Service Knowledge",
    "service": "Leaf Care",
    "type": "mc",
    "question": "Recurring Leaf Care requires what?",
    "options": [
      "Garden Bed Maintenance",
      "A mowing plan",
      "Snow Removal",
      "Spring Cleanup"
    ],
    "answer": 1,
    "explanation": "Requires active mowing plan."
  },
  {
    "id": 108,
    "category": "Tier Differences",
    "service": "Leaf Care",
    "type": "mc",
    "question": "What does Standard Leaf Care include?",
    "options": [
      "Leaves hauled away every visit",
      "Leaves mulched into turf weekly + deep cleanup at season end",
      "Full property cleared every visit",
      "One cleanup at end only"
    ],
    "answer": 1,
    "explanation": "Mulched into turf weekly, deep cleanup at end."
  },
  {
    "id": 109,
    "category": "Tier Differences",
    "service": "Leaf Care",
    "type": "mc",
    "question": "What does Pristine Leaf Care include?",
    "options": [
      "Mulched weekly",
      "Collected and hauled away from lawn and hardscapes every visit + comprehensive final cleanup",
      "Same as Standard with extra cleanup",
      "Beds cleared every visit"
    ],
    "answer": 1,
    "explanation": "Hauled away from lawn and hardscapes every visit + comprehensive final cleanup."
  },
  {
    "id": 110,
    "category": "Tier Differences",
    "service": "Leaf Care",
    "type": "mc",
    "question": "What makes Estate Leaf Care different from Pristine?",
    "options": [
      "Just a bigger version",
      "Clears lawn, hardscapes, AND all flower beds every visit",
      "Includes snow removal",
      "Runs through December"
    ],
    "answer": 1,
    "explanation": "Completely clears lawn, hardscapes, AND all beds every visit. Most comprehensive."
  },
  {
    "id": 111,
    "category": "Scenario",
    "service": "Leaf Care",
    "type": "scenario",
    "question": "Client asks about three leaf care levels.",
    "answer": "Standard mulches leaves into your turf weekly — controls buildup and recycles nutrients. Deep cleanup at season end. Pristine collects and hauls away from lawn and hardscapes every visit, plus comprehensive final cleanup. Estate is the top — clears everything every visit including all flower beds. Property stays immaculate all fall. If you don't want leaves everywhere, Pristine or Estate is where you want to be.",
    "keyPoints": [
      "Standard: mulch weekly + end cleanup",
      "Pristine: haul-away lawn/hardscapes + final cleanup",
      "Estate: everything including beds every visit",
      "Match expectation to tier"
    ]
  },
  {
    "id": 112,
    "category": "Tier Differences",
    "service": "Leaf Care",
    "type": "mc",
    "question": "Which tier clears flower beds every visit?",
    "options": [
      "Standard",
      "Pristine",
      "Estate",
      "All three"
    ],
    "answer": 2,
    "explanation": "Only Estate clears beds every visit."
  },
  {
    "id": 113,
    "category": "Scenario",
    "service": "Leaf Care",
    "type": "scenario",
    "question": "A client asks: \"Does leaf care replace my mowing, or do I still pay for mowing during leaf season?\"",
    "answer": "Mowing continues alongside leaf care — they are separate services. Our crew handles both during their weekly visits. So you are still getting mowed, trimmed, and blown, plus the leaf management on top of that. Leaf care is an add-on to your mowing plan, not a replacement.",
    "keyPoints": [
      "Mowing continues — not replaced",
      "Both handled during weekly visits",
      "Leaf care is add-on to mowing",
      "Client pays for both"
    ]
  },
  {
    "id": 114,
    "category": "Scenario",
    "service": "Leaf Care",
    "type": "scenario",
    "question": "Client wants just one cleanup at end of fall, not recurring.",
    "answer": "That's our One-Time Property Cleanup — single comprehensive visit. Choose Nutrient Standard (shredded, returned to soil) or Pristine Standard (hauled away). Good option if you're okay with buildup during the season and just want a clean finish.",
    "keyPoints": [
      "Redirect to One-Time Property Cleanup",
      "Two tiers: Nutrient vs Pristine",
      "Single visit alternative",
      "Leaves accumulate during season"
    ]
  },
  {
    "id": 115,
    "category": "Scenario",
    "service": "Leaf Care",
    "type": "scenario",
    "question": "Client on Standard says neighbor's trees dump tons of leaves.",
    "answer": "For heavy leaf volume, Pristine or Estate may be better. Pristine hauls away from lawn and hardscapes every visit instead of mulching. Estate adds bed clearing too. Our pricing factors in leaf volume already, so heavy properties have that accounted for. Want to look at upgrading?",
    "keyPoints": [
      "Suggest Pristine or Estate upgrade",
      "Explain the difference",
      "Leaf volume multiplier already accounts for coverage",
      "Offer to quote"
    ]
  },
  {
    "id": 116,
    "category": "Scenario",
    "service": "Leaf Care",
    "type": "scenario",
    "question": "A client asks: \"Which leaf care plan is right for me? I just want my property to look decent — I don't need it to be perfect.\"",
    "answer": "Standard is probably your best fit. We mulch the leaves into your turf every week to keep buildup controlled, and do a thorough cleanup at the end of the season. Your property will not be leaf-free every week, but it stays managed and the mulched leaves actually feed your soil. If you decide later you want a cleaner look week-to-week, we can always upgrade to Pristine.",
    "keyPoints": [
      "Standard for decent expectations",
      "Mulches weekly, cleanup at end",
      "Will not be perfect weekly but stays managed",
      "Easy to upgrade later if they want more"
    ]
  },
  {
    "id": 117,
    "category": "Service Knowledge",
    "service": "Leaf Care",
    "type": "mc",
    "question": "Standard mulching benefits?",
    "options": [
      "Faster for crews",
      "Returns nutrients to soil",
      "Prevents weed growth",
      "Eliminates final cleanup need"
    ],
    "answer": 1,
    "explanation": "Mulched leaves return nutrients to soil."
  },
  {
    "id": 118,
    "category": "Scenario",
    "service": "Leaf Care",
    "type": "scenario",
    "question": "Client on Pristine asks why there are leaves in beds.",
    "answer": "Pristine focuses on lawn and hardscapes during weekly visits. Beds get addressed in the final cleanup. If you want beds cleared every single visit throughout the season, that's Estate — the most comprehensive tier. Lawn, hardscapes, and all beds every week.",
    "keyPoints": [
      "Pristine: lawn + hardscapes weekly, beds at final cleanup",
      "Estate: everything including beds every visit",
      "Explain scope clearly",
      "Offer Estate upgrade"
    ]
  },
  {
    "id": 119,
    "category": "Scenario",
    "service": "Leaf Care",
    "type": "scenario",
    "question": "Budget client choosing between Standard and Pristine.",
    "answer": "Standard mulches leaves weekly and does a thorough cleanup at the end. Some leaf coverage between visits, but controlled. Pristine hauls away from lawn and hardscapes every visit — property looks cleaner week-to-week. Depends on how much visible leaves bother you. If you're okay with some natural coverage and like the soil health benefit, Standard is solid. If you want it looking sharp every week, Pristine is worth it.",
    "keyPoints": [
      "Standard: affordable, some weekly coverage",
      "Pristine: cleaner consistently, costs more",
      "Standard has soil health benefit",
      "Choose based on tolerance for leaves"
    ]
  },
  {
    "id": 120,
    "category": "Scenario",
    "service": "Leaf Care",
    "type": "scenario",
    "question": "A client asks: \"What happens at the end of leaf season? Is there a final cleanup?\"",
    "answer": "Yes — all tiers include a final cleanup. With Standard, it is a deep cleanup clearing excess leaves from your lawn, hardscapes, and beds. Pristine gets a comprehensive full-property cleanup including all landscape beds. And Estate has been keeping everything clear all along, so the final visit wraps up any remaining material. Nobody is left with a yard full of leaves going into winter.",
    "keyPoints": [
      "All tiers include final cleanup",
      "Standard: deep cleanup of lawn/hardscapes/beds",
      "Pristine: comprehensive including all landscape beds",
      "Reassure — no one is left with leaves going into winter"
    ]
  },
  {
    "id": 121,
    "category": "Tier Differences",
    "service": "Leaf Care",
    "type": "mc",
    "question": "A client says: \"I want my flower beds clear of leaves all fall, not just at the end.\" Which tier should you recommend?",
    "options": [
      "Standard — the final cleanup covers beds",
      "Pristine — beds are cleared at the final cleanup",
      "Estate — beds are cleared during every weekly visit all season",
      "Any tier — they all cover beds weekly"
    ],
    "answer": 2,
    "explanation": "Only Estate clears flower beds every visit. Standard and Pristine focus on lawn/hardscapes weekly, with beds addressed at final cleanup."
  },
  {
    "id": 122,
    "category": "Service Knowledge",
    "service": "Leaf Care",
    "type": "mc",
    "question": "What does Pristine's final cleanup include beyond Standard's?",
    "options": [
      "Identical",
      "Comprehensively clears all landscape beds",
      "Gutter cleaning",
      "Roof clearing"
    ],
    "answer": 1,
    "explanation": "Pristine's final is comprehensive, also clearing all landscape beds."
  },
  {
    "id": 123,
    "category": "Tier Differences",
    "service": "Leaf Care",
    "type": "mc",
    "question": "Client wants entire property leaf-free all fall. Which tier?",
    "options": [
      "Standard",
      "Pristine",
      "Estate",
      "Standard + separate bed cleanup"
    ],
    "answer": 2,
    "explanation": "Estate = full property cleared every visit."
  },
  {
    "id": 124,
    "category": "Scenario",
    "service": "Leaf Care",
    "type": "scenario",
    "question": "A client says: \"My property has a TON of trees — way more than my neighbors. Will that affect the price?\"",
    "answer": "Yes — we factor in leaf volume when pricing. Properties with heavier coverage cost more because there is more material to manage each visit. We rate properties on a leaf volume scale and the pricing adjusts accordingly. It is fair — you are not paying the same as someone with two small trees.",
    "keyPoints": [
      "Yes, leaf volume affects pricing",
      "Heavier coverage = higher price",
      "Based on a leaf volume rating system",
      "Fair — priced to match actual workload"
    ]
  },
  {
    "id": 125,
    "category": "Tier Differences",
    "service": "Leaf Care",
    "type": "mc",
    "question": "A client with a very visible front yard who entertains regularly asks about leaf care. Which tier fits best?",
    "options": [
      "Standard — mulching keeps things controlled",
      "Pristine — hauled away weekly for a consistently clean look",
      "Estate — but only if they have lots of beds",
      "Standard with an extra cleanup mid-season"
    ],
    "answer": 1,
    "explanation": "Pristine hauls away from lawn and hardscapes every visit — ideal for clients who want their property looking clean for guests."
  },
  {
    "id": 126,
    "category": "Scenario",
    "service": "Leaf Care",
    "type": "scenario",
    "question": "Client asks: \"Is recurring leaf care worth it or should I just do the one-time cleanup?\"",
    "answer": "Recurring manages leaves weekly so your property stays clean all fall. One-time means leaves accumulate and we do one big clean at the end — costs less but you live with coverage for weeks. If you care about weekly appearance or entertain, recurring is worth it. If buildup doesn't bother you, one-time saves money.",
    "keyPoints": [
      "Recurring: clean all fall",
      "One-time: accumulate, one big clean",
      "One-time costs less",
      "Choose based on lifestyle and tolerance"
    ]
  },
  {
    "id": 127,
    "category": "Service Knowledge",
    "service": "One-Time Property Cleanup",
    "type": "mc",
    "question": "One-Time Property Cleanup is the alternative to?",
    "options": [
      "Spring Cleanup",
      "Garden Bed Maintenance",
      "Recurring Leaf Care",
      "Mowing"
    ],
    "answer": 2,
    "explanation": "Single-visit alternative to recurring Leaf Care."
  },
  {
    "id": 128,
    "category": "Tier Differences",
    "service": "One-Time Property Cleanup",
    "type": "mc",
    "question": "Two tiers for One-Time Property Cleanup?",
    "options": [
      "Standard and Premium",
      "Nutrient Standard and Pristine Standard",
      "Basic and Complete",
      "Clean Look and Estate Detail"
    ],
    "answer": 1,
    "explanation": "Nutrient (return to soil) and Pristine (haul away)."
  },
  {
    "id": 129,
    "category": "Service Knowledge",
    "service": "One-Time Property Cleanup",
    "type": "mc",
    "question": "Requires a mowing plan?",
    "options": [
      "Yes",
      "No — standalone one-time",
      "Only Pristine",
      "Only Property Plan clients"
    ],
    "answer": 1,
    "explanation": "Standalone — no mowing plan."
  },
  {
    "id": 130,
    "category": "Scenario",
    "service": "One-Time Property Cleanup",
    "type": "scenario",
    "question": "A client asks: \"What is the difference between the one-time cleanup and your seasonal leaf care plan?\"",
    "answer": "Seasonal leaf care is weekly management throughout fall — we are at your property every week handling leaves so they never pile up. The one-time cleanup is a single comprehensive visit — usually at the end of fall. Leaves will accumulate during the season and we come clear everything at once. The one-time option costs less, but your property will have leaf coverage for weeks before we come. Seasonal keeps it clean all fall.",
    "keyPoints": [
      "Seasonal = weekly management, always clean",
      "One-time = single visit, leaves accumulate first",
      "One-time costs less",
      "Help them choose based on how much buildup bothers them"
    ]
  },
  {
    "id": 131,
    "category": "Service Knowledge",
    "service": "Bed Reset / Garden Cleanup",
    "type": "mc",
    "question": "What is a Bed Reset?",
    "options": [
      "Installing new plants",
      "Thorough one-time cleanup — removes weeds, debris, dead plants, brings beds to clean baseline",
      "Chemical weed killer",
      "Replacing mulch"
    ],
    "answer": 1,
    "explanation": "Thorough cleanup bringing beds to a clean, maintainable baseline."
  },
  {
    "id": 132,
    "category": "Service Knowledge",
    "service": "Bed Reset / Garden Cleanup",
    "type": "mc",
    "question": "Bed Reset is commonly done before?",
    "options": [
      "Spring Cleanup and Aeration",
      "Mulch Installation or starting a bed maintenance plan",
      "Snow Removal",
      "Overseeding"
    ],
    "answer": 1,
    "explanation": "Common prerequisite before mulch or maintenance plan."
  },
  {
    "id": 133,
    "category": "Service Knowledge",
    "service": "One-Time Weeding",
    "type": "mc",
    "question": "What is One-Time Weeding?",
    "options": [
      "Full garden redesign",
      "Single visit to clear weeds — basic (trimmer) or detail (hand-pull)",
      "Chemical herbicide",
      "Weed barrier fabric"
    ],
    "answer": 1,
    "explanation": "Single visit, basic or detail, no commitment."
  },
  {
    "id": 134,
    "category": "Service Knowledge",
    "service": "Bed Edging",
    "type": "mc",
    "question": "What does Bed Edging do?",
    "options": [
      "Installs metal edging",
      "Defines and restores clean borders between lawn and beds",
      "Cuts new beds from lawn",
      "Removes existing edging"
    ],
    "answer": 1,
    "explanation": "Defines and restores clean borders."
  },
  {
    "id": 135,
    "category": "Service Knowledge",
    "service": "Bed Edging",
    "type": "mc",
    "question": "Is Bed Edging included with Mulch or separate?",
    "options": [
      "Separate always",
      "Typically included with Mulch, also available standalone",
      "Only for large properties",
      "Only with Estate Detail"
    ],
    "answer": 1,
    "explanation": "Included with mulch, also standalone."
  },
  {
    "id": 136,
    "category": "Scenario",
    "service": "One-Time Bed Services",
    "type": "scenario",
    "question": "New homeowner: beds are a mess, wants cleanup + mulch + ongoing maintenance.",
    "answer": "Step 1: Bed Reset to clear weeds, dead plants, debris — clean baseline. Step 2: Mulch — fresh mulch, edging, Preen. Step 3: Ongoing maintenance — Clean Look (affordable, mechanical) or Estate Detail (thorough, hand-pull + Preen). Maintenance runs with mowing. Each quoted separately, done in order.",
    "keyPoints": [
      "Bed Reset first",
      "Then Mulch",
      "Then recurring maintenance",
      "Maintenance requires mowing plan",
      "Each quoted separately"
    ]
  },
  {
    "id": 137,
    "category": "Service Knowledge",
    "service": "One-Time Bed Services",
    "type": "mc",
    "question": "Do One-Time Bed Services require a mowing plan?",
    "options": [
      "Yes — all",
      "No — all standalone",
      "Only Bed Reset",
      "Only Bed Edging"
    ],
    "answer": 1,
    "explanation": "All standalone — no mowing plan required."
  },
  {
    "id": 138,
    "category": "Scenario",
    "service": "One-Time Bed Services",
    "type": "scenario",
    "question": "Client just wants weeds pulled once — nothing ongoing.",
    "answer": "One-Time Weeding — single visit, no commitment. Basic uses a string trimmer (quick, roots stay) or detail is hand-pulled from root (more thorough). If you want ongoing care later, we have maintenance plans too.",
    "keyPoints": [
      "One-Time Weeding",
      "Basic vs detail options",
      "No commitment",
      "Mention maintenance as future option"
    ]
  },
  {
    "id": 139,
    "category": "Scenario",
    "service": "One-Time Bed Services",
    "type": "scenario",
    "question": "A client says: \"I just want my beds cleaned up once — I don't want to be locked into anything ongoing.\"",
    "answer": "Totally fine — that is exactly what our one-time bed services are for. No recurring commitment needed. Depending on condition: if they need a full overhaul, we do a Bed Reset. If it is just weeds, One-Time Weeding handles that — basic with a trimmer or detailed with hand-pulling. One-time job, one invoice, done. If you ever want ongoing care later, we can talk then.",
    "keyPoints": [
      "No commitment required",
      "Match service to bed condition",
      "Bed Reset for overhaul, Weeding for weeds",
      "One-time invoice, done",
      "Leave door open for future"
    ]
  },
  {
    "id": 140,
    "category": "Service Knowledge",
    "service": "One-Time Weeding",
    "type": "mc",
    "question": "Difference between 'basic' and 'detail' One-Time Weeding?",
    "options": [
      "Front yard vs full property",
      "Basic uses trimmer (roots stay); detail is hand-pulled from root",
      "One visit vs two",
      "Chemical vs organic"
    ],
    "answer": 1,
    "explanation": "Basic = trimmer, roots stay. Detail = hand-pull from root."
  },
  {
    "id": 141,
    "category": "Scenario",
    "service": "One-Time Bed Services",
    "type": "scenario",
    "question": "Client asks: \"What's the difference between Bed Reset and One-Time Weeding?\"",
    "answer": "Bed Reset is comprehensive — clears weeds, dead plants, debris, everything. Brings beds all the way back to a clean baseline. Usually done before mulch or starting maintenance. One-Time Weeding is lighter — just clearing weed growth specifically. If beds need a 'starting over' level of work, that's a reset. If they just need weeds knocked down, that's one-time weeding.",
    "keyPoints": [
      "Reset: comprehensive, everything cleared",
      "Weeding: just weed removal",
      "Reset = 'starting over'; Weeding = 'touch up'",
      "Reset is prerequisite for mulch/maintenance"
    ]
  },
  {
    "id": 142,
    "category": "Service Knowledge",
    "service": "One-Time Bed Services",
    "type": "mc",
    "question": "Which service is the most common prerequisite before mulch?",
    "options": [
      "One-Time Weeding",
      "Bed Edging",
      "Bed Reset / Garden Cleanup",
      "Perennial Pruning"
    ],
    "answer": 2,
    "explanation": "Bed Reset is the common prerequisite."
  },
  {
    "id": 143,
    "category": "Scenario",
    "service": "Bed Edging",
    "type": "scenario",
    "question": "A client asks: \"My bed borders are all blurred — the grass is growing into the beds. Can you fix that?\"",
    "answer": "That is exactly what bed edging does — we define and restore clean borders between your lawn and flower beds. It gives everything a sharp, polished look. Edging is actually included when you do mulch with us, but if you just want the borders cleaned up without new mulch, we can do edging as a standalone job too.",
    "keyPoints": [
      "Bed edging restores clean borders",
      "Included with mulch installation",
      "Also available standalone",
      "Clean, polished look"
    ]
  },
  {
    "id": 144,
    "category": "Scenario",
    "service": "One-Time Bed Services",
    "type": "scenario",
    "question": "A client says: \"My beds are okay-ish — not terrible but not great. What do you recommend?\"",
    "answer": "If the beds are not terrible but just have some weed growth, a One-Time Weeding visit would probably be the right call. We can do it basic with a trimmer — quick and affordable — or detailed with hand-pulling for a more thorough result. If you want to take it further, adding mulch after would really make them look great. And if you want them to stay that way, we have ongoing maintenance plans too.",
    "keyPoints": [
      "One-Time Weeding for moderate conditions",
      "Basic vs detail options",
      "Suggest mulch as follow-up",
      "Mention maintenance for ongoing care",
      "Match to their situation"
    ]
  },
  {
    "id": 145,
    "category": "Service Knowledge",
    "service": "Snow Removal",
    "type": "mc",
    "question": "Standard Snow Removal triggers at?",
    "options": [
      "Any trace",
      "~1 inch",
      "~2 inches",
      "~4 inches"
    ],
    "answer": 2,
    "explanation": "Standard: ~2 inches."
  },
  {
    "id": 146,
    "category": "Tier Differences",
    "service": "Snow Removal",
    "type": "mc",
    "question": "Premium Snow Removal triggers at?",
    "options": [
      "Any trace",
      "~1 inch",
      "~2 inches",
      "~3 inches"
    ],
    "answer": 1,
    "explanation": "Premium: ~1 inch."
  },
  {
    "id": 147,
    "category": "Tier Differences",
    "service": "Snow Removal",
    "type": "mc",
    "question": "Zero Tolerance triggers at?",
    "options": [
      "~1 inch",
      "~0.5 inch",
      "Any accumulation (trace)",
      "Only ice events"
    ],
    "answer": 2,
    "explanation": "Any accumulation — property stays clear at all times."
  },
  {
    "id": 148,
    "category": "Service Knowledge",
    "service": "Snow Removal",
    "type": "mc",
    "question": "Visits per qualifying snow event?",
    "options": [
      "1",
      "2",
      "3",
      "Unlimited"
    ],
    "answer": 3,
    "explanation": "Unlimited visits per event across all tiers."
  },
  {
    "id": 149,
    "category": "Service Knowledge",
    "service": "Snow Removal",
    "type": "mc",
    "question": "Snow Removal covers what areas?",
    "options": [
      "Entire property",
      "Designated driveways and walkways",
      "Only driveway",
      "Driveway, walkways, and roof"
    ],
    "answer": 1,
    "explanation": "Designated driveways and walkways."
  },
  {
    "id": 150,
    "category": "Service Knowledge",
    "service": "Snow Removal",
    "type": "mc",
    "question": "Service hours for Snow Removal?",
    "options": [
      "Business hours",
      "Extended (6am-10pm)",
      "24/7",
      "On-call"
    ],
    "answer": 2,
    "explanation": "All tiers: 24/7."
  },
  {
    "id": 151,
    "category": "Tier Differences",
    "service": "Snow Removal",
    "type": "mc",
    "question": "Premium offers what beyond a lower trigger?",
    "options": [
      "Sidewalk shoveling",
      "Priority dispatch and earlier response window",
      "Salt included",
      "Roof clearing"
    ],
    "answer": 1,
    "explanation": "Priority dispatch and earlier response window."
  },
  {
    "id": 152,
    "category": "Scenario",
    "service": "Snow Removal",
    "type": "scenario",
    "question": "Client asks about Standard vs Premium snow removal.",
    "answer": "Standard triggers at about 2 inches — 24/7, unlimited visits. Premium triggers at about 1 inch and you get priority dispatch with earlier response time. Both unlimited visits per event. Premium is for people who need it cleared sooner or at a lower accumulation — early commuters, safety concerns, etc.",
    "keyPoints": [
      "Standard: ~2 inch, 24/7, unlimited",
      "Premium: ~1 inch, priority dispatch",
      "Both unlimited",
      "Choose based on schedule and safety needs"
    ]
  },
  {
    "id": 153,
    "category": "Scenario",
    "service": "Snow Removal",
    "type": "scenario",
    "question": "Client with elderly parents — cannot have any snow, fall risk.",
    "answer": "Zero Tolerance — triggers at any trace, highest priority, property stays completely clear at all times. Exactly designed for safety-critical situations like yours.",
    "keyPoints": [
      "Zero Tolerance immediately",
      "Any trace trigger",
      "Highest priority",
      "Validate safety concern"
    ]
  },
  {
    "id": 154,
    "category": "Scenario",
    "service": "Snow Removal",
    "type": "scenario",
    "question": "Client can handle light snow themselves, only wants help for big storms.",
    "answer": "Standard is perfect — triggers at about 2 inches, so light dustings don't activate a visit. Once it hits that level, we're out 24/7, unlimited visits. Seasonal rate, not per-visit charges.",
    "keyPoints": [
      "Standard: ~2 inch trigger fits",
      "Light snow won't trigger visits",
      "Unlimited for qualifying events",
      "Seasonal rate"
    ]
  },
  {
    "id": 155,
    "category": "Scenario",
    "service": "Snow Removal",
    "type": "scenario",
    "question": "Client asks: \"If it snows 3 times in one day, do you come back each time?\"",
    "answer": "We come back as many times as needed — unlimited visits per event, 24/7. If it keeps accumulating, we keep coming back.",
    "keyPoints": [
      "Unlimited visits per event",
      "Come back as needed",
      "24/7",
      "No visit limits"
    ]
  },
  {
    "id": 156,
    "category": "Service Knowledge",
    "service": "Salt Treatment",
    "type": "mc",
    "question": "What is Salt Treatment?",
    "options": [
      "Standalone winter service",
      "Add-on: ice-melt applied after snow clearing",
      "Pre-treatment before snowfall",
      "Included with all tiers"
    ],
    "answer": 1,
    "explanation": "Add-on: ice-melt after clearing for traction and icing reduction."
  },
  {
    "id": 157,
    "category": "Service Knowledge",
    "service": "Salt Treatment",
    "type": "mc",
    "question": "Is Salt included with Snow Removal?",
    "options": [
      "Included with all tiers",
      "Included with Premium/Zero Tolerance only",
      "Separate add-on for all tiers",
      "Only with Zero Tolerance"
    ],
    "answer": 2,
    "explanation": "Separate add-on for any tier."
  },
  {
    "id": 158,
    "category": "Tier Differences",
    "service": "Snow Removal",
    "type": "mc",
    "question": "A client with a long driveway who commutes daily asks which snow tier they should consider. What is your best recommendation?",
    "options": [
      "Standard — 2 inches is a reasonable trigger",
      "Premium — earlier response and priority dispatch for daily commuters",
      "Zero Tolerance — only option for commuters",
      "They should just buy a snow blower"
    ],
    "answer": 1,
    "explanation": "Premium gives priority dispatch and earlier response — ideal for someone who needs their driveway clear before heading to work."
  },
  {
    "id": 159,
    "category": "Scenario",
    "service": "Snow Removal",
    "type": "scenario",
    "question": "Client asks what Zero Tolerance means.",
    "answer": "It's our top tier — triggers at any trace of snow. As soon as anything sticks, we're dispatched. Highest priority, 24/7. Your property never has snow on it. Popular for safety concerns or people who don't want to deal with any snow at all.",
    "keyPoints": [
      "Any trace trigger",
      "Highest priority",
      "Property always clear",
      "No judgment — explain clearly"
    ]
  },
  {
    "id": 160,
    "category": "Scenario",
    "service": "Snow Removal",
    "type": "scenario",
    "question": "A client asks: \"Is there a limit on how many times you will come during a big storm?\"",
    "answer": "Nope — all our snow removal plans include unlimited visits per event. If it snows all day and keeps accumulating, we keep coming back. There is no cap on visits during a qualifying event. You are covered 24/7 until the snow stops and your property is clear.",
    "keyPoints": [
      "Unlimited visits per event",
      "No cap",
      "24/7 coverage",
      "Keep coming until clear"
    ]
  },
  {
    "id": 161,
    "category": "Scenario",
    "service": "Snow Removal",
    "type": "scenario",
    "question": "A client asks: \"What areas do you actually clear? Is it just the driveway or do you do walkways too?\"",
    "answer": "We cover your designated driveways and walkways — so your driveway, paths, sidewalks, whatever paved areas you need cleared. We go over exactly what is included when we set up the plan so there are no surprises.",
    "keyPoints": [
      "Driveways and walkways",
      "Designated paved areas",
      "Define scope upfront",
      "No surprises"
    ]
  },
  {
    "id": 162,
    "category": "Scenario",
    "service": "Snow Removal",
    "type": "scenario",
    "question": "Client asks: \"Do you salt after you plow?\"",
    "answer": "Salt Treatment is an optional add-on — after clearing, we apply ice-melt to walkways and driveways for traction and icing reduction. Not automatic — it's available with any Snow Removal tier. Most clients with safety concerns add it.",
    "keyPoints": [
      "Salt is an add-on, not automatic",
      "Applied after clearing",
      "Available with any tier",
      "Common for safety-focused clients"
    ]
  },
  {
    "id": 163,
    "category": "Tier Differences",
    "service": "Snow Removal",
    "type": "mc",
    "question": "Client who works from home — reliable but not urgent. Which tier?",
    "options": [
      "Zero Tolerance",
      "Standard — reasonable for regular needs",
      "Premium — only for ice",
      "Don't need service"
    ],
    "answer": 1,
    "explanation": "Standard is appropriate for regular needs."
  },
  {
    "id": 164,
    "category": "Tier Differences",
    "service": "Snow Removal",
    "type": "mc",
    "question": "Client leaving at 5 AM needing driveway clear early. Which tier?",
    "options": [
      "Standard",
      "Premium — priority dispatch, earlier response",
      "Zero Tolerance only",
      "Custom arrangement needed"
    ],
    "answer": 1,
    "explanation": "Premium's priority dispatch and earlier response window."
  },
  {
    "id": 165,
    "category": "Scenario",
    "service": "Snow Removal",
    "type": "scenario",
    "question": "A client asks: \"When does snow removal start and stop? Do I have to call you each time?\"",
    "answer": "Your plan covers you from the first qualifying snowfall through March 31 — no phone calls needed. When snow hits your trigger level, we automatically dispatch. It is fully automatic, 24/7. You do not have to call, text, or do anything. Just wake up to a clear driveway.",
    "keyPoints": [
      "First snowfall through March 31",
      "Automatic dispatch — no calls needed",
      "24/7",
      "Hands-off for the client"
    ]
  },
  {
    "id": 166,
    "category": "Service Knowledge",
    "service": "Property Plan",
    "type": "mc",
    "question": "Two ways clients can book services?",
    "options": [
      "Monthly subscription or pay-per-visit",
      "As-Needed or Property Plan (membership)",
      "Residential or commercial",
      "DIY or full-service"
    ],
    "answer": 1,
    "explanation": "As-Needed (individual jobs) or Property Plan (custom membership)."
  },
  {
    "id": 167,
    "category": "Service Knowledge",
    "service": "Property Plan",
    "type": "mc",
    "question": "How is a Property Plan billed?",
    "options": [
      "Lump sum",
      "Per service completed",
      "12 monthly installments",
      "Quarterly"
    ],
    "answer": 2,
    "explanation": "12 monthly installments."
  },
  {
    "id": 168,
    "category": "Service Knowledge",
    "service": "Property Plan",
    "type": "mc",
    "question": "Pre-pay incentive?",
    "options": [
      "10% discount",
      "1 month free",
      "Free spring cleanup",
      "No incentive"
    ],
    "answer": 1,
    "explanation": "Pre-pay full year = 1 month free."
  },
  {
    "id": 169,
    "category": "Service Knowledge",
    "service": "Property Plan",
    "type": "mc",
    "question": "Scheduling benefit for plan members?",
    "options": [
      "Weekend scheduling",
      "Priority scheduling for one-off requests",
      "Same-day guarantee",
      "No benefit"
    ],
    "answer": 1,
    "explanation": "Priority scheduling for one-off requests."
  },
  {
    "id": 170,
    "category": "Scenario",
    "service": "Property Plan",
    "type": "scenario",
    "question": "Client asks: \"Why a Property Plan instead of calling when I need something?\"",
    "answer": "Everything pre-scheduled, same monthly payment across 12 months, priority scheduling, and pre-pay gets you a month free. With As-Needed you schedule individually and might not get priority during busy weeks. Plan is set-it-and-forget-it.",
    "keyPoints": [
      "Pre-scheduled for the year",
      "12 even monthly payments",
      "Priority scheduling",
      "Pre-pay = 1 month free",
      "Compare to As-Needed"
    ]
  },
  {
    "id": 171,
    "category": "Scenario",
    "service": "Property Plan",
    "type": "scenario",
    "question": "Client wants mowing, leaf care, and snow. Pitch a plan?",
    "answer": "Absolutely — three recurring services spanning most of the year. Perfect for a Property Plan. One monthly payment, everything pre-scheduled, priority scheduling. Pre-pay the year and get a month free. I'd build a custom plan bundling all three.",
    "keyPoints": [
      "Multiple recurring = ideal plan candidate",
      "One monthly payment",
      "Pre-scheduled and priority",
      "Pre-pay savings"
    ]
  },
  {
    "id": 172,
    "category": "Scenario",
    "service": "Property Plan",
    "type": "scenario",
    "question": "Client just wants mulch and one-time weeding. Push a plan?",
    "answer": "No — both are one-time services, perfect for As-Needed booking. Just quote, schedule, and invoice per job. Plans make sense for recurring services. Leave the door open for future recurring needs.",
    "keyPoints": [
      "No plan needed for one-time services",
      "As-Needed is right fit",
      "Don't push when it doesn't make sense",
      "Leave door open"
    ]
  },
  {
    "id": 173,
    "category": "Service Knowledge",
    "service": "Property Plan",
    "type": "mc",
    "question": "Can clients book any service As-Needed without a plan?",
    "options": [
      "No — some require a plan",
      "Yes — any service individually",
      "Only one-time services",
      "Only under $500"
    ],
    "answer": 1,
    "explanation": "Any service can be booked individually."
  },
  {
    "id": 174,
    "category": "Service Knowledge",
    "service": "Property Plan",
    "type": "mc",
    "question": "Which services REQUIRE a mowing plan?",
    "options": [
      "Spring Cleanup and Mulch",
      "Garden Bed Maintenance, Leaf Care, Premium Managed Shaping",
      "All except snow",
      "Only Garden Bed Maintenance"
    ],
    "answer": 1,
    "explanation": "Garden Bed Maintenance, Leaf Care, and Premium Managed Shaping."
  },
  {
    "id": 175,
    "category": "Scenario",
    "service": "Property Plan",
    "type": "scenario",
    "question": "Competitor offers one price for everything. Client asks if you can match.",
    "answer": "We build every plan custom to each property — you only pay for what makes sense. One-size-fits-all usually means overpaying or corners being cut. I'd rather build something that fits perfectly.",
    "keyPoints": [
      "Custom-built per property",
      "Pay for what you need",
      "One-size-fits-all = overpaying or corners cut",
      "Position customization as advantage"
    ]
  },
  {
    "id": 176,
    "category": "Scenario",
    "service": "Property Plan",
    "type": "scenario",
    "question": "Client asks how pre-pay discount works.",
    "answer": "Pre-pay the full year upfront and you get one month free — pay 11 months instead of 12. Savings scale with plan size. Everything locked in and done.",
    "keyPoints": [
      "1 month free (pay 11 not 12)",
      "Savings scale with plan size",
      "Everything locked in"
    ]
  },
  {
    "id": 177,
    "category": "Scenario",
    "service": "Property Plan",
    "type": "scenario",
    "question": "A client asks: \"What if I need something that is not on my plan — like a one-time bush trim?\"",
    "answer": "No problem — plan members get priority scheduling for one-off requests. So if you need a one-time job outside your plan, you get bumped up in the queue over non-plan clients. We just quote it separately and schedule it. Having a plan does not lock you out of anything — it actually gives you better access.",
    "keyPoints": [
      "Priority scheduling for one-off requests",
      "Quoted separately",
      "Plan gives better access, not less",
      "Easy to add one-time jobs"
    ]
  },
  {
    "id": 178,
    "category": "Scenario",
    "service": "Property Plan",
    "type": "scenario",
    "question": "Client isn't sure about committing to a full year.",
    "answer": "You can start with just mowing and add services anytime. Lots of clients start that way — get comfortable, then layer in bed care, leaf care, snow removal as seasons change. No pressure to do everything upfront.",
    "keyPoints": [
      "Start with mowing only",
      "Add over time",
      "No pressure to commit to everything",
      "Meet them where they are"
    ]
  },
  {
    "id": 179,
    "category": "Service Knowledge",
    "service": "Property Plan",
    "type": "mc",
    "question": "Key advantage of a plan for multi-service clients?",
    "options": [
      "Lower prices per service",
      "Pre-scheduled everything, one monthly payment, priority scheduling",
      "Dedicated crew",
      "Same-day service"
    ],
    "answer": 1,
    "explanation": "Pre-scheduled, consistent billing, priority scheduling."
  },
  {
    "id": 180,
    "category": "Scenario",
    "service": "Property Plan",
    "type": "scenario",
    "question": "A client asks: \"Is the Property Plan a contract? Can I cancel?\"",
    "answer": "It is a membership — your services are pre-scheduled for the year and billed in 12 monthly installments. I would recommend checking with us on the specific terms if cancellation is a concern, but the goal is to make it easy and beneficial for you — not to lock you in. Most clients love it because they do not have to think about scheduling anything all year.",
    "keyPoints": [
      "Frame as membership not contract",
      "12 monthly installments",
      "Do not make cancellation promises you cannot back up",
      "Focus on the benefits",
      "Redirect specifics to the owner if needed"
    ]
  },
  {
    "id": 181,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client asks: \"What is the best value — what do most of your customers get?\"",
    "answer": "Most homeowners start with weekly mowing as the foundation, then add leaf care in fall and snow removal in winter. That covers you most of the year. For the lawn itself, aeration and overseeding once or twice a year makes a big difference. If beds are important to you, adding bed maintenance and mulch rounds things out. The sweet spot for most people is mowing, leaf care, and snow removal on a Property Plan — one monthly payment, everything handled.",
    "keyPoints": [
      "Mowing is the foundation",
      "Mowing + leaf care + snow is common combo",
      "Aeration for lawn health",
      "Bed care and mulch for properties with beds",
      "Property Plan ties it together"
    ]
  },
  {
    "id": 182,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client asks: \"I am getting quotes from a few companies. Why should I go with you guys?\"",
    "answer": "We build every plan custom to your property — you only pay for what you actually need, not a one-size-fits-all package. All your services are pre-scheduled for the year so you do not have to chase anyone down. One monthly payment covers everything. Plan members get priority scheduling. And if you pre-pay the full year, you get a month free. We are focused on quality and consistency — same professional crew, same standard, every week.",
    "keyPoints": [
      "Custom plans",
      "Pre-scheduled",
      "One monthly payment",
      "Priority scheduling",
      "Pre-pay for month free",
      "Quality and consistency"
    ]
  },
  {
    "id": 183,
    "category": "Service Knowledge",
    "service": "General",
    "type": "mc",
    "question": "Which service does Amigos NOT offer?",
    "options": [
      "Aeration",
      "Irrigation/sprinkler maintenance",
      "Snow removal",
      "Trimming & Pruning"
    ],
    "answer": 1,
    "explanation": "Irrigation is not offered."
  },
  {
    "id": 184,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client asks: \"Can you guys handle everything for my property or will I need to hire other companies too?\"",
    "answer": "We cover lawn maintenance, bed care, seasonal services, and winter snow removal — that handles most of what a residential property needs year-round. The main things we do not do are landscape design, new plantings, hardscaping like patios, tree work, and chemical lawn treatments like fertilizer programs. For those you would need specialists. But for the ongoing care of your property, we have you covered.",
    "keyPoints": [
      "We cover most residential needs",
      "Be honest about what we do not do",
      "Design, plantings, hardscaping, tree work, chemicals",
      "We handle ongoing maintenance",
      "Position as complete maintenance partner"
    ]
  },
  {
    "id": 185,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client says: \"I had a bad experience with my last landscaper — they kept upselling me stuff I did not need.\"",
    "answer": "I hear you. We build plans based on what your property actually needs — I am not going to push services that do not make sense for your situation. If your beds are fine, I am not going to recommend bed care. If you handle light snow fine, I will recommend Standard, not Zero Tolerance. My job is to match you with the right services, not the most expensive ones.",
    "keyPoints": [
      "Acknowledge their bad experience",
      "Position as consultative, not pushy",
      "Only recommend what makes sense",
      "Build trust by being honest",
      "Match services to actual needs"
    ]
  },
  {
    "id": 186,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "Client wants 'the full treatment — everything, year-round.' Walk them through it.",
    "answer": "Spring: Cleanup, Aeration + Overseeding. April: weekly mowing (Pristine for cleanest look). Beds: Estate Detail for hand-pulled weeding. Mulch. Bushes: Premium Managed. Perennial pruning. Fall: Leaf Care on Estate — full property cleared every visit. Winter: Snow Removal + Salt. All in a Property Plan, one monthly payment.",
    "keyPoints": [
      "Walk through full seasonal calendar",
      "Premium tiers for full-treatment client",
      "Cover all seasons",
      "Wrap in Property Plan"
    ]
  },
  {
    "id": 187,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "Client asks why some services need a mowing plan.",
    "answer": "Services like bed maintenance, leaf care, and premium trimming are built into our weekly mowing visits — keeps pricing efficient and quality consistent. Plenty of standalone options don't need mowing: mulch, bed resets, weeding, regular trimming, aeration, cleanups.",
    "keyPoints": [
      "Built into weekly visits",
      "Efficient and consistent",
      "Many standalone options exist",
      "Don't lose the client — redirect"
    ]
  },
  {
    "id": 188,
    "category": "Service Knowledge",
    "service": "General",
    "type": "mc",
    "question": "Which services require a mowing plan?",
    "options": [
      "Garden Bed Maintenance + Mulch + Aeration",
      "Garden Bed Maintenance + Leaf Care + Premium Managed Shaping",
      "All recurring services",
      "Only Garden Bed Maintenance"
    ],
    "answer": 1,
    "explanation": "Garden Bed Maintenance, Leaf Care, and Premium Managed Shaping."
  },
  {
    "id": 189,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "New client calls in fall. What services are relevant?",
    "answer": "Fall Aeration + Overseeding to strengthen the lawn. Leaf Care — Standard, Pristine, or Estate, or One-Time Cleanup alternative. Snow Removal for winter — three tiers plus salt. Could start mowing for tail end of season, sets them up for next year. Build a plan covering winter into next spring.",
    "keyPoints": [
      "Fall Aeration + Overseeding",
      "Leaf Care options or One-Time Cleanup",
      "Snow Removal approaching",
      "Pitch a plan into next spring"
    ]
  },
  {
    "id": 190,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "Property Plan client calls in August for a season summary.",
    "answer": "Done so far: spring cleanup, aeration, overseeding, weekly mowing since April, bed maintenance, mulch, bush trimming. Coming up: fall aeration in September, leaf care kicks in October through November, snow removal for winter. Fully covered — nothing to schedule.",
    "keyPoints": [
      "Recap completed services",
      "Upcoming: fall aeration, leaf care, snow",
      "Show calendar knowledge",
      "Emphasize hands-off benefit"
    ]
  },
  {
    "id": 191,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client asks: \"If I start a plan now, what happens first? What is the process?\"",
    "answer": "We look at your property, build a custom plan based on what you need, and schedule everything for the year. You get one monthly payment that covers all of it. Whatever is in season right now starts first — if it is spring, cleanup and mowing kick off right away. Everything else gets scheduled as the season progresses. You do not have to think about it.",
    "keyPoints": [
      "Property assessment first",
      "Custom plan built to needs",
      "12 monthly payments",
      "Current season starts immediately",
      "Hands off from there"
    ]
  },
  {
    "id": 192,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client asks: \"What if it rains on my mowing day? Do you skip it?\"",
    "answer": "We manage weather as part of the service — if conditions prevent us from coming on your regular day, we adjust within the week. The pricing does not change based on individual visit timing. We are committed to the full season of care. Occasional weather shifts are just part of lawn care in the Midwest.",
    "keyPoints": [
      "Crew adjusts within the week",
      "Pricing does not change",
      "Full season commitment",
      "Weather is normal and expected"
    ]
  },
  {
    "id": 193,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "Client asks for a ballpark on mowing and basic bed care for a normal suburban home.",
    "answer": "Weekly mowing — Nutrient Standard (clippings recycled) or Pristine (bagged). For beds: Clean Look (affordable, mechanical trimming) or Estate Detail (hand-pulled + Preen). Both bed plans run with mowing. I'd need to see the property for exact numbers, but those are your options. Want me to put together a quote?",
    "keyPoints": [
      "Mowing: Nutrient vs Pristine",
      "Beds: Clean Look vs Estate Detail",
      "Need to see property for pricing",
      "Offer to quote — don't guess numbers"
    ]
  },
  {
    "id": 194,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "Client asks about landscape design, plantings, or hardscaping.",
    "answer": "We focus on maintenance — lawn care, bed care, seasonal services, winter services. We don't do design, new plantings, or hardscaping. For that you'd want a landscape design company. But once new landscaping is installed, we're great at maintaining it.",
    "keyPoints": [
      "We don't offer design, plantings, hardscaping",
      "Be honest",
      "Redirect to design companies",
      "We maintain what's already there"
    ]
  },
  {
    "id": 195,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client asks: \"We are thinking about selling our house next year. What services would make the biggest visual impact?\"",
    "answer": "For curb appeal: fresh mulch makes an instant difference — clean borders, rich color, polished look. Pair that with Pristine mowing so the lawn looks perfectly clean every week. If bushes are shaggy, a trimming visit sharpens everything up. And if beds have weeds, a Bed Reset before mulch gets everything looking sharp. For a property going on the market, appearance is everything — the premium tiers are worth it.",
    "keyPoints": [
      "Mulch for instant visual impact",
      "Pristine mowing for clean appearance",
      "Bush trimming to sharpen landscape",
      "Bed Reset before mulch if needed",
      "Premium tiers worth it for selling"
    ]
  },
  {
    "id": 196,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "Client says competitor claimed returning grass clippings causes thatch and disease.",
    "answer": "That's a common misconception. Finely mulched clippings break down quickly and return nutrients to the soil — research consistently supports this. Our Nutrient Standard is based on that science. If they still prefer a clean look, Pristine bags everything. Both are great options.",
    "keyPoints": [
      "Address misconception confidently",
      "Mulched clippings don't cause thatch",
      "Research supports it",
      "Offer Pristine as alternative",
      "Don't badmouth competitor"
    ]
  },
  {
    "id": 197,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client asks: \"What is the minimum I should do for my lawn if I am on a tight budget?\"",
    "answer": "At minimum, weekly mowing on Nutrient Standard keeps your property maintained and your lawn healthy — clippings feed the soil naturally. Beyond that, aeration once a year is the next best investment. If beds are a concern, Clean Look Plan is the affordable option. Start there and add more later.",
    "keyPoints": [
      "Nutrient Standard mowing is baseline",
      "Aeration once a year",
      "Clean Look for budget bed care",
      "Start small, add later",
      "Do not overwhelm budget client"
    ]
  },
  {
    "id": 198,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client asks: \"What is included with mulch that I might not know about? Any hidden fees?\"",
    "answer": "No hidden fees — our price per yard includes everything: delivery, installation at even depth, re-edging your bed borders for a clean look, and a complimentary Preen application to prevent new weeds. The only thing it does not cover is creating brand new beds or removing turf — it refreshes existing beds. What you are quoted is what you pay.",
    "keyPoints": [
      "Price includes delivery, install, edging, Preen",
      "No hidden fees",
      "Does not include new bed creation",
      "Transparent and trust-building"
    ]
  },
  {
    "id": 199,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client asks: \"Do you offer any kind of package deal or discount?\"",
    "answer": "Our Property Plan is essentially that — when you bundle services into an annual plan, everything is pre-scheduled and billed in 12 even monthly payments. And if you pre-pay the full year, you get one month completely free. Plan members also get priority scheduling. It is the best deal we offer.",
    "keyPoints": [
      "Property Plan = the package deal",
      "12 monthly payments",
      "Pre-pay = 1 month free",
      "Priority scheduling",
      "Best value"
    ]
  },
  {
    "id": 200,
    "category": "Scenario",
    "service": "General",
    "type": "scenario",
    "question": "A client asks: \"What's the one service I should start with if I'm new to Amigos?\"",
    "answer": "For most homeowners, weekly mowing is the foundation — it's what we build everything else around. Once you're on a mowing plan, services like bed maintenance and leaf care become available since our crews are already at your property weekly. Start with mowing, see how you like the service, and we can layer in whatever makes sense from there. No pressure to do everything at once.",
    "keyPoints": [
      "Mowing is the foundation",
      "Unlocks other services (bed care, leaf care)",
      "Start there and add over time",
      "Low pressure approach",
      "Build the relationship first"
    ]
  }
];
