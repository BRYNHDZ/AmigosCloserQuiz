const QUESTIONS = [
  // ============================================================
  // WEEKLY LAWN MAINTENANCE (Q1–Q15)
  // ============================================================
  {
    id: 1,
    category: "Service Knowledge",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "How many visits per year are included in the Weekly Lawn Maintenance plan?",
    options: ["30 visits", "35 visits", "40 visits", "52 visits (every week)"],
    answer: 1,
    explanation: "The plan includes 35 visits per year, running April through November."
  },
  {
    id: 2,
    category: "Service Knowledge",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "What happens to grass clippings under the Nutrient Standard mowing plan?",
    options: [
      "They are bagged and removed from the property",
      "They are finely mulched and returned to the lawn",
      "They are composted on-site in a designated area",
      "The client chooses each visit"
    ],
    answer: 1,
    explanation: "Nutrient Standard mulches clippings and returns them to the lawn, recycling nutrients back into the soil."
  },
  {
    id: 3,
    category: "Tier Differences",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "What is the key upgrade a client gets with Pristine Standard mowing over Nutrient Standard?",
    options: [
      "Twice-weekly mowing instead of weekly",
      "Bagging and removal of all grass clippings",
      "Fertilizer application included with each visit",
      "Edging of all garden beds"
    ],
    answer: 1,
    explanation: "Pristine Standard bags and removes all clippings for a consistently clean appearance. Everything else (trimming, edging, blowing) is the same."
  },
  {
    id: 4,
    category: "Tier Differences",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "Pristine Standard mowing is priced at what multiplier above the Nutrient Standard base price?",
    options: ["1.15× (15% more)", "1.20× (20% more)", "1.25× (25% more)", "1.35× (35% more)"],
    answer: 2,
    explanation: "Pristine Standard is the Nutrient Standard annual price × 1.25."
  },
  {
    id: 5,
    category: "Service Knowledge",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "What is the per-visit mowing rate for a lawn that is 5,000 sq ft or smaller?",
    options: ["$35/visit", "$40/visit", "$45/visit", "$50/visit"],
    answer: 1,
    explanation: "Lawns ≤5,000 sq ft are $40/visit."
  },
  {
    id: 6,
    category: "Service Knowledge",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "If you don't know the exact lawn size, how should you estimate it?",
    options: [
      "Use Google Maps to measure exactly",
      "Estimate at 70% of the total lot size",
      "Assume it's 10,000 sq ft",
      "Ask the client to measure it themselves"
    ],
    answer: 1,
    explanation: "If lawn size is unknown, estimate at 70% of the lot size."
  },
  {
    id: 7,
    category: "Service Knowledge",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "Which of the following is included in BOTH Nutrient Standard and Pristine Standard mowing?",
    options: [
      "Bagging of clippings",
      "Fertilizer application",
      "String trimming around edges, obstacles, and beds + blowing hard surfaces",
      "Garden bed weeding"
    ],
    answer: 2,
    explanation: "Both tiers include professional mowing, string trimming around edges/obstacles/beds, and blowing of hard surfaces."
  },
  {
    id: 8,
    category: "Scheduling",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "What is the anchor start date for Weekly Lawn Maintenance?",
    options: ["March 15", "April 1", "April 15", "May 1"],
    answer: 1,
    explanation: "April 1 is the consistent planning anchor, with a window of March 25 – April 15 depending on weather."
  },
  {
    id: 9,
    category: "Scheduling",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "What months does the mowing season generally run?",
    options: [
      "March through October",
      "April through November",
      "May through September",
      "April through October"
    ],
    answer: 1,
    explanation: "Mowing runs April through November (or until the season ends with heavy leaf coverage)."
  },
  {
    id: 10,
    category: "Service Knowledge",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "Does the visit frequency change the pricing for Weekly Lawn Maintenance?",
    options: [
      "Yes — fewer visits means a lower price",
      "Yes — more visits means a higher price",
      "No — visit frequency does not change pricing",
      "It depends on the tier"
    ],
    answer: 2,
    explanation: "Service occurs weekly as weather and growth conditions allow. Visit frequency does not change pricing."
  },
  {
    id: 11,
    category: "Scenario",
    service: "Weekly Lawn Maintenance",
    type: "scenario",
    question: "A client says: \"I don't want grass clippings left on my lawn — it looks messy. But I also don't want to pay too much. What are my options?\"",
    answer: "Explain both tiers: Nutrient Standard mulches clippings back into the lawn (actually great for lawn health — feeds the soil naturally), and Pristine Standard bags and removes all clippings for a clean look every time. Pristine is 25% more than Nutrient. The clippings from Nutrient are finely mulched so they break down quickly — it's not like leaving piles of grass. But if a clean look matters most to them, Pristine is the way to go.",
    keyPoints: [
      "Explain Nutrient Standard returns mulched clippings (good for lawn health)",
      "Explain Pristine Standard bags and removes everything",
      "Mention the 25% price difference",
      "Reassure that mulched clippings break down quickly — not messy piles",
      "Help them weigh cost vs appearance preference"
    ]
  },
  {
    id: 12,
    category: "Scenario",
    service: "Weekly Lawn Maintenance",
    type: "scenario",
    question: "A client with an 8,000 sq ft lawn asks: \"About how much would weekly mowing cost me for the year?\"",
    answer: "The per-visit rate for 8,000 sq ft: $40 base + (8,000 − 5,000) × $0.0019 = $40 + $5.70 = ~$45.70/visit. Annual Nutrient Standard: ~$45.70 × 35 = ~$1,600/year. For Pristine Standard (clippings removed): ~$1,600 × 1.25 = ~$2,000/year.",
    keyPoints: [
      "Show how to calculate the per-visit rate using the formula",
      "Multiply by 35 visits for annual Nutrient Standard price",
      "Multiply by 1.25 for Pristine Standard option",
      "Give approximate numbers, not just the formula"
    ]
  },
  {
    id: 13,
    category: "Service Knowledge",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "For a lawn between 10,001–20,000 sq ft, what is the per-visit rate formula?",
    options: [
      "$40 + (sqft − 5,000) × $0.0019",
      "$49.50 + (sqft − 10,000) × $0.0015",
      "$64.50 + (sqft − 20,000) × $0.0012",
      "$35 + (sqft − 10,000) × $0.002"
    ],
    answer: 1,
    explanation: "For 10,001–20,000 sq ft: $49.50 + (sqft − 10,000) × $0.0015."
  },
  {
    id: 14,
    category: "Service Knowledge",
    service: "Weekly Lawn Maintenance",
    type: "mc",
    question: "What is the annual price formula for Nutrient Standard mowing?",
    options: [
      "Per-visit rate × 30",
      "Per-visit rate × 35",
      "Per-visit rate × 40",
      "Per-visit rate × 52"
    ],
    answer: 1,
    explanation: "Annual price = per-visit rate × 35 visits."
  },
  {
    id: 15,
    category: "Scenario",
    service: "Weekly Lawn Maintenance",
    type: "scenario",
    question: "A client asks: \"Why should I pay for 35 visits if some weeks you might skip because of weather?\"",
    answer: "The 35-visit plan is priced as a consistent annual rate. Some weeks conditions might mean we come a day early or late, and occasionally weather prevents a visit — but the pricing reflects the full season of professional care. Visit frequency doesn't change the price because it's an annual service commitment, not a pay-per-visit arrangement.",
    keyPoints: [
      "Pricing is annual, not per-visit",
      "Weather may shift timing but the commitment is the full season",
      "Visit frequency does not change the pricing",
      "Frame it as consistent, professional care for the year"
    ]
  },

  // ============================================================
  // SPRING CLEANUP (Q16–Q25)
  // ============================================================
  {
    id: 16,
    category: "Service Knowledge",
    service: "Spring Cleanup",
    type: "mc",
    question: "What does a Spring Cleanup (Nutrient Standard) include?",
    options: [
      "Leaves, sticks, and debris cleared — all material shredded and returned to soil",
      "Full property cleanup including trimming, pruning, and mulch",
      "Only lawn debris removal — beds are not touched",
      "Power washing of hardscapes and driveway"
    ],
    answer: 0,
    explanation: "Nutrient Standard clears leaves, sticks, and debris from lawn and beds. All organic material is finely shredded and returned to the soil."
  },
  {
    id: 17,
    category: "Tier Differences",
    service: "Spring Cleanup",
    type: "mc",
    question: "What is the difference between Nutrient Standard and Pristine Standard Spring Cleanup?",
    options: [
      "Nutrient is lawn only; Pristine includes beds",
      "Nutrient returns material to the soil; Pristine hauls everything away",
      "Pristine includes trimming and pruning; Nutrient does not",
      "Pristine uses organic products; Nutrient uses standard chemicals"
    ],
    answer: 1,
    explanation: "Both cover the same scope. Nutrient shreds and returns material to soil. Pristine hauls everything away for a perfectly clean appearance."
  },
  {
    id: 18,
    category: "Service Knowledge",
    service: "Spring Cleanup",
    type: "mc",
    question: "Which of the following is NOT included in a Spring Cleanup?",
    options: [
      "Clearing debris from lawn",
      "Clearing debris from beds",
      "Trimming, pruning, bed edging, or mulch",
      "Shredding organic material (Nutrient Standard)"
    ],
    answer: 2,
    explanation: "Spring Cleanup does NOT include trimming, pruning, bed edging, or mulch installation."
  },
  {
    id: 19,
    category: "Tier Differences",
    service: "Spring Cleanup",
    type: "mc",
    question: "What is the price multiplier for Pristine Standard Spring Cleanup over Nutrient Standard?",
    options: ["× 1.15", "× 1.20", "× 1.25", "× 1.35"],
    answer: 1,
    explanation: "Pristine Standard Spring Cleanup = Nutrient Standard price × 1.20."
  },
  {
    id: 20,
    category: "Service Knowledge",
    service: "Spring Cleanup",
    type: "mc",
    question: "What is the base price for a Spring Cleanup (Nutrient Standard) on a lot ≤10,000 sq ft?",
    options: ["$150", "$175", "$200", "$250"],
    answer: 2,
    explanation: "Base price for ≤10,000 sq ft is $200."
  },
  {
    id: 21,
    category: "Scheduling",
    service: "Spring Cleanup",
    type: "mc",
    question: "When is the anchor date for Spring Cleanup?",
    options: [
      "Last Monday of February",
      "First Monday of March",
      "Third Monday of March",
      "First Monday of April"
    ],
    answer: 1,
    explanation: "Spring Cleanup is anchored to the First Monday of March, with a range of Feb 24 – Mar 20."
  },
  {
    id: 22,
    category: "Scheduling",
    service: "Spring Cleanup",
    type: "mc",
    question: "What is the typical scheduling range for Spring Cleanup?",
    options: [
      "January 15 – February 28",
      "February 24 – March 20",
      "March 15 – April 15",
      "April 1 – April 30"
    ],
    answer: 1,
    explanation: "Spring Cleanup range is Feb 24 – Mar 20."
  },
  {
    id: 23,
    category: "Scenario",
    service: "Spring Cleanup",
    type: "scenario",
    question: "A client asks: \"Can you do my spring cleanup and also trim my bushes and put down mulch at the same time?\"",
    answer: "Spring Cleanup is focused on clearing debris — leaves, sticks, and leftover material from winter. It doesn't include trimming, pruning, bed edging, or mulch. Those are separate services. We'd typically do the cleanup first (early March), then trimming and mulch later in the season when it makes sense — mulch usually goes down in April/May, and bush trimming is anchored around June. I can quote all of those for you separately.",
    keyPoints: [
      "Cleanup does NOT include trimming, pruning, edging, or mulch",
      "These are separate services with different scheduling windows",
      "Cleanup comes first (March), mulch later (April-May), trimming (June)",
      "Offer to quote each service separately"
    ]
  },
  {
    id: 24,
    category: "Service Knowledge",
    service: "Spring Cleanup",
    type: "mc",
    question: "Spring Cleanup is classified as what type of job?",
    options: ["Recurring", "One-time", "Both", "Add-on"],
    answer: 1,
    explanation: "Spring Cleanup is a one-time service performed once each spring."
  },
  {
    id: 25,
    category: "Service Knowledge",
    service: "Spring Cleanup",
    type: "mc",
    question: "For a 15,000 sq ft lot, what is the Nutrient Standard Spring Cleanup price?",
    options: ["$200", "$220", "$240", "$260"],
    answer: 2,
    explanation: "$200 + (15,000 − 10,000) × $0.008 = $200 + $40 = $240."
  },

  // ============================================================
  // LAWN HEALTH — AERATION & OVERSEEDING (Q26–Q42)
  // ============================================================
  {
    id: 26,
    category: "Service Knowledge",
    service: "Spring Aeration",
    type: "mc",
    question: "How is Spring Aeration priced?",
    options: [
      "Flat rate of $150",
      "Per-visit mow rate × 3.5",
      "Per square foot of lawn",
      "$80/hour labor rate"
    ],
    answer: 1,
    explanation: "Spring Aeration = per-visit mow rate × 3.5. Example: $45 mow rate → $157.50 aeration."
  },
  {
    id: 27,
    category: "Scheduling",
    service: "Spring Aeration",
    type: "mc",
    question: "When is Spring Aeration + Overseeding anchored?",
    options: [
      "First Monday of March",
      "Second Monday of March",
      "Third Monday of March",
      "First Monday of April"
    ],
    answer: 2,
    explanation: "Spring Aeration + Overseeding is anchored to the Third Monday of March, range Mar 10 – Apr 5."
  },
  {
    id: 28,
    category: "Service Knowledge",
    service: "Spring Aeration",
    type: "mc",
    question: "Which statement about Spring Aeration is correct?",
    options: [
      "It uses liquid aeration products",
      "It is mechanical core aeration",
      "It includes fertilizer application",
      "It must be done after the first mow"
    ],
    answer: 1,
    explanation: "Spring Aeration is mechanical core aeration."
  },
  {
    id: 29,
    category: "Service Knowledge",
    service: "Spring Overseeding",
    type: "mc",
    question: "How is Spring Overseeding priced?",
    options: [
      "Flat rate based on lot size",
      "Per-visit mow rate + (lawn sqft × $0.02)",
      "Per-visit mow rate × 2",
      "$0.05 per square foot"
    ],
    answer: 1,
    explanation: "Spring Overseeding = per-visit mow rate + (lawn sqft × $0.02). Seed cost is embedded."
  },
  {
    id: 30,
    category: "Service Knowledge",
    service: "Overseeding",
    type: "mc",
    question: "What does overseeding do, and what does it NOT do?",
    options: [
      "It fills bare patches and repairs severely damaged areas",
      "It thickens existing turf but does NOT fill large bare or severely damaged areas",
      "It replaces the entire lawn with new grass",
      "It applies weed killer and new seed simultaneously"
    ],
    answer: 1,
    explanation: "Overseeding thickens existing turf. It does NOT fill large bare or severely damaged areas — that requires hydroseeding or other renovation."
  },
  {
    id: 31,
    category: "Service Knowledge",
    service: "Spring Overseeding",
    type: "mc",
    question: "Why is spring overseeding considered less predictable than fall overseeding in Illinois?",
    options: [
      "The soil is too cold for germination",
      "There's not enough rain in spring",
      "Weeds germinate at the same time, and crabgrass preventer can block grass seed",
      "Spring storms wash away the seed"
    ],
    answer: 2,
    explanation: "Spring overseeding competes with weed germination. Pre-emergent (crabgrass preventer) can block grass seed from germinating too."
  },
  {
    id: 32,
    category: "Scheduling",
    service: "Spring Aeration",
    type: "mc",
    question: "What are the go/no-go conditions for Spring Aeration in Illinois?",
    options: [
      "Air temperature above 80°F and dry soil",
      "Ground thawed, soil moist (not muddy), lawn greening up and growing, temps 50–70°F",
      "Any day above freezing with no rain",
      "Only after the first three mows of the season"
    ],
    answer: 1,
    explanation: "Need thawed ground, moist (not muddy) soil, lawn actively growing/greening up, daytime temps ~50–70°F, no heavy rain forecast."
  },
  {
    id: 33,
    category: "Service Knowledge",
    service: "Aeration",
    type: "mc",
    question: "What does it mean for a lawn to be 'waking up and starting to grow'?",
    options: [
      "The snow has fully melted",
      "The lawn is consistently green with new blade growth over 1–2 weeks, not just a brief color pop after rain",
      "The first dandelions have appeared",
      "The soil temperature is above 50°F"
    ],
    answer: 1,
    explanation: "The lawn changes from winter-dull to consistently green across the property, with new blade growth sustained over 1–2 weeks — not just a brief green-up after one rainstorm."
  },
  {
    id: 34,
    category: "Scheduling",
    service: "Fall Aeration",
    type: "mc",
    question: "When is Fall Aeration + Overseeding anchored?",
    options: [
      "Last week of August",
      "First week of September",
      "Third week of September",
      "First week of October"
    ],
    answer: 1,
    explanation: "Fall Aeration + Overseeding is anchored to the first week of September, range Late Aug – Mid Sep."
  },
  {
    id: 35,
    category: "Service Knowledge",
    service: "Fall Aeration",
    type: "mc",
    question: "What is the purpose of Fall Aeration + Overseeding?",
    options: [
      "To prepare the lawn for snow coverage",
      "To support fall root development and recovery before temperatures drop",
      "To kill weeds before winter",
      "To reduce leaf cleanup needs"
    ],
    answer: 1,
    explanation: "Fall aeration + overseeding supports fall root development and recovery before temperatures drop."
  },
  {
    id: 36,
    category: "Scenario",
    service: "Aeration",
    type: "scenario",
    question: "A client asks: \"Should I do aeration in the spring or the fall? Or both?\"",
    answer: "Fall is generally the best time for aeration and overseeding in Illinois — the soil is warm, there's less weed competition, and the grass has fall and spring to establish before summer stress. Spring aeration works too, but overseeding in spring is less predictable because weeds germinate at the same time, and if you plan to use crabgrass preventer, it can block the grass seed. Many clients do both for maximum lawn health, but if you're only choosing one, fall is the stronger recommendation.",
    keyPoints: [
      "Fall is the stronger recommendation for Illinois",
      "Less weed competition in fall",
      "Spring overseeding competes with weed germination",
      "Pre-emergent conflicts with spring seeding",
      "Both is ideal for maximum health, but fall is priority if choosing one"
    ]
  },
  {
    id: 37,
    category: "Service Knowledge",
    service: "Spring Overseeding",
    type: "mc",
    question: "For a property with a $45 mow rate and 8,000 sq ft lawn, what would Spring Overseeding cost?",
    options: ["$145", "$185", "$205", "$245"],
    answer: 2,
    explanation: "$45 + (8,000 × $0.02) = $45 + $160 = $205."
  },
  {
    id: 38,
    category: "Service Knowledge",
    service: "Spring Aeration",
    type: "mc",
    question: "For a property with a $45 mow rate, what would Spring Aeration cost?",
    options: ["$135", "$157.50", "$180", "$202.50"],
    answer: 1,
    explanation: "$45 × 3.5 = $157.50."
  },
  {
    id: 39,
    category: "Scheduling",
    service: "Aeration",
    type: "mc",
    question: "Spring Aeration typically happens in relation to Spring Cleanup. What is the correct order?",
    options: [
      "Aeration first, then cleanup",
      "Cleanup first, then aeration",
      "They happen at the same time",
      "Order doesn't matter"
    ],
    answer: 1,
    explanation: "Spring Cleanup (anchored first Monday of March) runs first, then Aeration + Overseeding (anchored third Monday of March) before mowing ramps up."
  },
  {
    id: 40,
    category: "Scenario",
    service: "Overseeding",
    type: "scenario",
    question: "A client says: \"I have a big bare patch in my backyard — can overseeding fix it?\"",
    answer: "Overseeding is designed to thicken existing turf — it works great for thin areas and improving overall lawn density. But it won't fill large bare or severely damaged areas. For a big bare patch, you'd likely need hydroseeding or another restoration method. I can take a look and recommend the right approach for your situation.",
    keyPoints: [
      "Overseeding thickens existing turf, not for large bare patches",
      "Large bare or severely damaged areas need hydroseeding or renovation",
      "Be honest about what overseeding can and can't do",
      "Offer to assess and recommend the right solution"
    ]
  },
  {
    id: 41,
    category: "Service Knowledge",
    service: "Aeration",
    type: "mc",
    question: "Are Aeration and Overseeding the same service?",
    options: [
      "Yes — they always come bundled together",
      "No — they are separate services that are commonly paired",
      "Aeration includes overseeding automatically",
      "Overseeding includes aeration automatically"
    ],
    answer: 1,
    explanation: "Spring Aeration and Spring Overseeding are separate services in the catalog, commonly paired but quoted individually."
  },
  {
    id: 42,
    category: "Service Knowledge",
    service: "Overseeding",
    type: "mc",
    question: "Is the seed material cost included in the overseeding price or billed separately?",
    options: [
      "Billed separately as a materials charge",
      "Embedded in the per-sqft rate",
      "Client provides their own seed",
      "Only included for fall overseeding"
    ],
    answer: 1,
    explanation: "Seed material cost is embedded in the per-sqft rate — no separate materials charge."
  },

  // ============================================================
  // GARDEN BED MAINTENANCE (Q43–Q60)
  // ============================================================
  {
    id: 43,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "Garden Bed Maintenance plans are add-ons to which other service?",
    options: [
      "Spring Cleanup",
      "Mulch Installation",
      "An active mowing plan",
      "Any recurring service"
    ],
    answer: 2,
    explanation: "Both Garden Bed Maintenance plans (Clean Look and Estate Detail) require an active mowing plan — they are not standalone services."
  },
  {
    id: 44,
    category: "Tier Differences",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "What method does the Clean Look Plan use to control weeds?",
    options: [
      "Hand-pulling weeds from the root",
      "String trimmers for mechanical weed control (roots stay intact)",
      "Chemical herbicide application",
      "Preen weed preventer"
    ],
    answer: 1,
    explanation: "Clean Look Plan uses string trimmers to control visible weed growth — mechanical trim only, no hand pulling. Root systems remain intact."
  },
  {
    id: 45,
    category: "Tier Differences",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "What method does the Estate Detail Plan use to control weeds?",
    options: [
      "String trimmers only",
      "Chemical herbicide spray",
      "Hand-pulled weeding plus Preen weed preventer application",
      "Full bed replacement each season"
    ],
    answer: 2,
    explanation: "Estate Detail Plan includes ongoing hand-pulled weeding plus Preen weed preventer to prevent new weeds from sprouting."
  },
  {
    id: 46,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "What does Preen weed preventer do?",
    options: [
      "Kills existing weeds on contact",
      "Prevents new weeds from sprouting but does NOT eliminate existing ones",
      "Fertilizes garden beds to outcompete weeds",
      "Creates a barrier that blocks all plant growth"
    ],
    answer: 1,
    explanation: "Preen prevents new weeds from sprouting but does not eliminate existing ones. That's why hand-pulling is also part of Estate Detail."
  },
  {
    id: 47,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "Garden Bed Maintenance uses what as a proxy for bed size to determine pricing?",
    options: [
      "Square footage of beds",
      "Yards of mulch needed (eyeballed on-site)",
      "Number of beds on the property",
      "Linear feet of bed edging"
    ],
    answer: 1,
    explanation: "Yards of mulch needed is used as the proxy for bed size, eyeballed on-site."
  },
  {
    id: 48,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "What is the base price for the Clean Look Plan?",
    options: ["$50", "$75", "$100", "$150"],
    answer: 2,
    explanation: "Clean Look Plan base price is $100."
  },
  {
    id: 49,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "What is the base price for the Estate Detail Plan?",
    options: ["$100", "$150", "$200", "$250"],
    answer: 2,
    explanation: "Estate Detail Plan base price is $200."
  },
  {
    id: 50,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "For the Clean Look Plan, what is the per-yard rate for the first 8 yards?",
    options: ["$26/yd", "$30/yd", "$38/yd", "$60/yd"],
    answer: 2,
    explanation: "Clean Look Plan: first 8 yards at $38/yd, beyond 8 yards at $26/yd."
  },
  {
    id: 51,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "At what yardage does the per-yard rate drop (taper) for Garden Bed Maintenance?",
    options: ["After 5 yards", "After 8 yards", "After 10 yards", "After 15 yards"],
    answer: 1,
    explanation: "The rate taper kicks in at 8 yards for both plans."
  },
  {
    id: 52,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "What is the maximum property size (in mulch yards) for Garden Bed Maintenance?",
    options: ["15 yards", "20 yards", "25 yards", "~30 yards"],
    answer: 3,
    explanation: "Max property is approximately 30 yards for both plans."
  },
  {
    id: 53,
    category: "Scenario",
    service: "Garden Bed Maintenance",
    type: "scenario",
    question: "A client asks: \"What's the difference between your two bed maintenance plans? My beds have some weeds but nothing crazy.\"",
    answer: "We have two plans: Clean Look and Estate Detail. Clean Look is our more affordable option — we use string trimmers to knock down visible weed growth and keep things looking neat. It's mechanical only though, so the roots stay in place and weeds will grow back. Works well for clients who want beds that look maintained without a big investment. Estate Detail is our premium plan — we hand-pull weeds from the root and apply Preen weed preventer, which stops new weeds from sprouting. It's more thorough and keeps beds cleaner long-term. For beds with some but not crazy weeds, either plan works — it depends on how clean you want them and your budget.",
    keyPoints: [
      "Clean Look: string trimmer, mechanical only, roots stay, more affordable",
      "Estate Detail: hand-pulled + Preen preventer, more thorough",
      "Clean Look is for 'neat appearance'; Estate Detail is for 'true cleanliness'",
      "Help client choose based on budget and cleanliness expectations",
      "Both require active mowing plan"
    ]
  },
  {
    id: 54,
    category: "Tier Differences",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "A property has 5 yards of beds. What is the approximate annual price for the Estate Detail Plan?",
    options: ["$290", "$380", "$440", "$500"],
    answer: 3,
    explanation: "Estate Detail: $200 base + (5 × $60) = $200 + $300 = $500."
  },
  {
    id: 55,
    category: "Tier Differences",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "A property has 5 yards of beds. What is the approximate annual price for the Clean Look Plan?",
    options: ["$250", "$270", "$290", "$310"],
    answer: 2,
    explanation: "Clean Look: $100 base + (5 × $38) = $100 + $190 = $290."
  },
  {
    id: 56,
    category: "Scheduling",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "When does Garden Bed Maintenance run during the year?",
    options: [
      "March through October",
      "April through November (concurrent with mowing season)",
      "May through September only",
      "Year-round"
    ],
    answer: 1,
    explanation: "Garden Bed Maintenance follows mowing activation and runs concurrent with the mowing season, April through November."
  },
  {
    id: 57,
    category: "Scenario",
    service: "Garden Bed Maintenance",
    type: "scenario",
    question: "A client says: \"The weeds in my beds are getting out of control — the Clean Look Plan isn't keeping up. What should I do?\"",
    answer: "If weed growth exceeds what the Clean Look Plan can handle, we have a couple options. First, we could do a one-time Bed Reset to bring your beds back to a clean baseline — that's a separate one-time charge. Then you could either continue on Clean Look with a fresh start, or upgrade to the Estate Detail Plan which hand-pulls weeds from the root and applies Preen to prevent new growth. Estate Detail does a better job keeping beds clean long-term. If you want, I can quote both options.",
    keyPoints: [
      "Acknowledge Clean Look has limits — if exceeded, upgrade or reset needed",
      "Recommend a Bed Reset first to get back to baseline",
      "Then option to stay on Clean Look or upgrade to Estate Detail",
      "Estate Detail is more thorough (hand-pull + Preen)",
      "Bed Reset is quoted separately as a one-time job"
    ]
  },
  {
    id: 58,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "The Clean Look Plan was introduced in what season?",
    options: ["2023", "2024", "2025", "2026"],
    answer: 2,
    explanation: "Clean Look Plan is noted as 'new 2025 season' in the service descriptions."
  },
  {
    id: 59,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "Does the Estate Detail Plan require the client to schedule weeding visits?",
    options: [
      "Yes — they need to call each time",
      "No — care is built into the routine from spring through fall automatically",
      "Only the first visit needs scheduling",
      "They schedule bi-weekly via an app"
    ],
    answer: 1,
    explanation: "Estate Detail: 'No scheduling needed — care is built into the routine from spring through fall.'"
  },
  {
    id: 60,
    category: "Service Knowledge",
    service: "Garden Bed Maintenance",
    type: "mc",
    question: "What pricing model does Garden Bed Maintenance use?",
    options: [
      "Flat rate per property",
      "Base + per-yard model with taper after 8 yards",
      "Hourly labor rate",
      "Percentage of mowing contract"
    ],
    answer: 1,
    explanation: "Base + per-yard model. The per-yard rate tapers after 8 yards — reflecting how large bed jobs actually work in practice."
  },

  // ============================================================
  // MULCH INSTALLATION (Q61–Q72)
  // ============================================================
  {
    id: 61,
    category: "Service Knowledge",
    service: "Mulch Installation",
    type: "mc",
    question: "What is the price per yard for Mulch Installation?",
    options: ["$100/yard", "$125/yard", "$150/yard", "$175/yard"],
    answer: 2,
    explanation: "Mulch is $150/yard delivered and installed."
  },
  {
    id: 62,
    category: "Service Knowledge",
    service: "Mulch Installation",
    type: "mc",
    question: "What is included in the Mulch Installation service?",
    options: [
      "Mulch delivery, installation, and new bed creation",
      "Mulch delivery, installation, bed edging, and complimentary Preen application",
      "Mulch delivery only — installation is extra",
      "Mulch and complete garden redesign"
    ],
    answer: 1,
    explanation: "Includes delivery, installation, bed edging, and a complimentary Preen application."
  },
  {
    id: 63,
    category: "Service Knowledge",
    service: "Mulch Installation",
    type: "mc",
    question: "Which of the following is NOT included in Mulch Installation?",
    options: [
      "Bed edging",
      "Preen application",
      "New flower bed creation or reclaiming undefined areas",
      "Even depth spread"
    ],
    answer: 2,
    explanation: "Mulch Installation does NOT include new bed creation, reclaiming undefined areas, turf removal for new beds, or tree rings unless already established."
  },
  {
    id: 64,
    category: "Scheduling",
    service: "Mulch Installation",
    type: "mc",
    question: "What is the anchor date for Mulch Installation?",
    options: [
      "First Monday of April",
      "First Monday of May",
      "First Monday of June",
      "Third Monday of April"
    ],
    answer: 1,
    explanation: "Mulch Installation is anchored to the First Monday of May."
  },
  {
    id: 65,
    category: "Scheduling",
    service: "Mulch Installation",
    type: "mc",
    question: "When is peak production for Mulch Installation?",
    options: [
      "March through mid-April",
      "April through mid-May",
      "May through June",
      "June through July"
    ],
    answer: 1,
    explanation: "Peak mulch production runs April through mid-May for crew efficiency."
  },
  {
    id: 66,
    category: "Service Knowledge",
    service: "Mulch Installation",
    type: "mc",
    question: "How is mulch yardage determined for a property?",
    options: [
      "Precisely measured with a tape measure",
      "Calculated from bed square footage on a map",
      "Eyeballed on-site",
      "Client provides the estimate"
    ],
    answer: 2,
    explanation: "Yardage is eyeballed on-site."
  },
  {
    id: 67,
    category: "Scenario",
    service: "Mulch Installation",
    type: "scenario",
    question: "A client says: \"I want mulch, but I also want to expand my flower beds and create a new bed around my front tree.\"",
    answer: "Our mulch installation service refreshes and maintains existing beds — it includes delivery, installation, bed edging, and a Preen application. But creating new beds, expanding existing ones, removing turf, or creating new tree rings isn't something we currently offer as part of mulch installation. You'd need that bed creation work done separately first. Once the new beds exist, we can absolutely mulch them.",
    keyPoints: [
      "Mulch Installation covers existing beds only",
      "Does NOT include new bed creation, expansion, or turf removal",
      "Tree rings only if already established",
      "New bed creation would need to happen first",
      "Be clear about scope while still being helpful"
    ]
  },
  {
    id: 68,
    category: "Service Knowledge",
    service: "Mulch Installation",
    type: "mc",
    question: "What type of mulch does Amigos use?",
    options: [
      "Red dyed mulch",
      "Natural dark brown mulch",
      "Cedar chips",
      "Client's choice of any color"
    ],
    answer: 1,
    explanation: "Natural dark brown mulch is the standard."
  },
  {
    id: 69,
    category: "Scheduling",
    service: "Mulch Installation",
    type: "mc",
    question: "What is the latest mulch installations are accepted?",
    options: ["May 31", "June 30", "July 31", "August 31"],
    answer: 1,
    explanation: "Late mulch installs are accepted through June 30."
  },
  {
    id: 70,
    category: "Service Knowledge",
    service: "Mulch Installation",
    type: "mc",
    question: "What is the approximate material cost per yard of mulch (before labor and margin)?",
    options: ["$15/yard", "$30/yard", "$50/yard", "$75/yard"],
    answer: 1,
    explanation: "Material cost is approximately $30/yard, with an implied margin of ~$120/yard before labor."
  },
  {
    id: 71,
    category: "Scenario",
    service: "Mulch Installation",
    type: "scenario",
    question: "A client asks: \"My beds are a disaster with weeds everywhere. Can you just put mulch over them to cover it up?\"",
    answer: "Mulch alone won't solve a weed problem — it'll look great for a few weeks but the weeds will push right through. I'd recommend doing a Bed Reset first to clear out the weeds, dead plants, and debris, and get your beds to a clean baseline. Then we come in with mulch, which includes edging and a Preen application to help prevent new weeds. That way the mulch actually holds up and looks good for the season.",
    keyPoints: [
      "Don't recommend mulching over a weed problem",
      "Recommend Bed Reset first to get a clean baseline",
      "Then mulch (which includes Preen to prevent regrowth)",
      "Explain why the order matters — weeds push through mulch",
      "Two separate services quoted separately"
    ]
  },
  {
    id: 72,
    category: "Service Knowledge",
    service: "Mulch Installation",
    type: "mc",
    question: "Mulch Installation is classified as what type of job?",
    options: ["Recurring", "One-time", "Both", "Add-on to mowing plan"],
    answer: 1,
    explanation: "Mulch Installation is a one-time service."
  },

  // ============================================================
  // SHRUB & BUSH SHAPING (Q73–Q86)
  // ============================================================
  {
    id: 73,
    category: "Service Knowledge",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "How is Shrub & Bush Shaping priced?",
    options: [
      "Flat rate per bush",
      "Estimated trim time (hours) × man-hour rate ($80–$100/hr)",
      "Per square foot of shrub area",
      "Based on mulch yardage"
    ],
    answer: 1,
    explanation: "Shrub & Bush Shaping = estimated trim time (hrs) × man-hour rate ($80–$100/hr)."
  },
  {
    id: 74,
    category: "Tier Differences",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "How many visits per year does Annual Shaping include?",
    options: ["1 visit", "2 visits", "4 visits", "6 visits"],
    answer: 0,
    explanation: "Annual Shaping is one professional trimming visit per year."
  },
  {
    id: 75,
    category: "Tier Differences",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "How many visits per year does Bi-Annual Shaping include?",
    options: ["1 visit", "2 visits", "4 visits", "6 visits"],
    answer: 1,
    explanation: "Bi-Annual Shaping = two visits per year."
  },
  {
    id: 76,
    category: "Tier Differences",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "Approximately how many visits does Premium Managed Shaping include?",
    options: ["2 visits", "4 visits", "~6 as-needed visits", "12 monthly visits"],
    answer: 2,
    explanation: "Premium Managed Shaping includes approximately 6 as-needed visits per season."
  },
  {
    id: 77,
    category: "Service Knowledge",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "Which Shrub & Bush Shaping tier requires an active mowing plan?",
    options: [
      "Annual Shaping",
      "Bi-Annual Shaping",
      "Premium Managed Shaping",
      "All three tiers"
    ],
    answer: 2,
    explanation: "Only Premium Managed Shaping requires an active mowing plan."
  },
  {
    id: 78,
    category: "Service Knowledge",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "Does Shrub & Bush Shaping include tree work?",
    options: [
      "Yes — all trees and shrubs",
      "Only small ornamental trees",
      "No — ground level, handheld tools only. No tree work.",
      "Only if the tree is under 10 feet"
    ],
    answer: 2,
    explanation: "All tiers are ground level only with handheld tools. Tree work is not included."
  },
  {
    id: 79,
    category: "Scheduling",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "What is the anchor date for Shrub & Bush Shaping?",
    options: [
      "First Monday of May",
      "First Monday of June",
      "First Monday of July",
      "Third Monday of May"
    ],
    answer: 1,
    explanation: "Trimming & Pruning is anchored to the First Monday of June, range May 25 – Jun 20."
  },
  {
    id: 80,
    category: "Scheduling",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "Why is Shrub & Bush Shaping scheduled for June rather than earlier in the season?",
    options: [
      "Bushes don't grow until June",
      "It's scheduled after the spring growth flush",
      "Crew availability is better in June",
      "It needs to follow mulch installation"
    ],
    answer: 1,
    explanation: "Trimming is scheduled after the spring growth flush so bushes have had their main growth spurt."
  },
  {
    id: 81,
    category: "Scenario",
    service: "Shrub & Bush Shaping",
    type: "scenario",
    question: "A client says: \"My bushes grow really fast — one trim a year isn't going to cut it. What do you recommend?\"",
    answer: "For fast-growing landscapes, I'd recommend Bi-Annual Shaping — that's two visits per year instead of one. The first trim happens around June after the spring growth flush, and the second later in the season to keep things looking sharp. If you really want them to stay perfectly maintained all season, there's also Premium Managed Shaping, which is ongoing trimming as needed — roughly 6 visits per season. That one requires a mowing plan since our crews handle it during regular visits. Pricing is based on estimated trim time at $80–$100/hr.",
    keyPoints: [
      "Recommend Bi-Annual for faster growers (2 visits/year)",
      "Premium Managed for maximum maintenance (~6 visits, as-needed)",
      "Premium Managed requires mowing plan",
      "Priced by estimated trim time × hourly rate",
      "First trim after spring growth flush"
    ]
  },
  {
    id: 82,
    category: "Service Knowledge",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "What is the example annual cost for Bi-Annual Shaping if estimated trim time is 1.5 hours at $90/hr?",
    options: ["$135", "$180", "$270", "$810"],
    answer: 2,
    explanation: "1.5 hrs × $90 × 2 visits = $270 annual."
  },
  {
    id: 83,
    category: "Service Knowledge",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "What is the example annual cost for Premium Managed Shaping if estimated trim time is 1.5 hours at $90/hr?",
    options: ["$270", "$540", "$810", "$1,080"],
    answer: 2,
    explanation: "1.5 hrs × $90 × 6 visits = $810 annual."
  },
  {
    id: 84,
    category: "Service Knowledge",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "Shrub & Bush Shaping is classified as what job type?",
    options: ["Recurring only", "One-time only", "Both (can be one-time or recurring)", "Add-on only"],
    answer: 2,
    explanation: "Shrub & Bush Shaping is classified as 'Both' — it can be booked as a one-time job or as a recurring plan."
  },
  {
    id: 85,
    category: "Scheduling",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "When does the Bi-Annual Shaping second visit typically happen?",
    options: [
      "August",
      "Later in the season (after the first June trim)",
      "October",
      "Right before winter"
    ],
    answer: 1,
    explanation: "The first visit is around June, and the second visit later in the season to maintain shape."
  },
  {
    id: 86,
    category: "Service Knowledge",
    service: "Shrub & Bush Shaping",
    type: "mc",
    question: "What is the man-hour rate range for Shrub & Bush Shaping?",
    options: ["$50–$70/hr", "$60–$80/hr", "$80–$100/hr", "$100–$120/hr"],
    answer: 2,
    explanation: "Man-hour rate is $80–$100/hr."
  },

  // ============================================================
  // PERENNIAL FLOWER PRUNING (Q87–Q92)
  // ============================================================
  {
    id: 87,
    category: "Service Knowledge",
    service: "Perennial Flower Pruning",
    type: "mc",
    question: "What is Perennial Flower Pruning classified as?",
    options: ["Standalone service", "Add-on", "Recurring only", "One-time only"],
    answer: 1,
    explanation: "Perennial Flower Pruning is an add-on service."
  },
  {
    id: 88,
    category: "Service Knowledge",
    service: "Perennial Flower Pruning",
    type: "mc",
    question: "How many sessions per year does Perennial Flower Pruning typically include?",
    options: ["1 session", "2 sessions (spring + fall)", "4 sessions", "As needed"],
    answer: 1,
    explanation: "Typically 2 sessions/year — spring cut-back and fall cut-back as appropriate."
  },
  {
    id: 89,
    category: "Service Knowledge",
    service: "Perennial Flower Pruning",
    type: "mc",
    question: "How is Perennial Flower Pruning priced?",
    options: [
      "Flat rate per plant",
      "Estimated session time (hrs) × man-hour rate ($80–$100/hr) × 2 sessions",
      "Per bed square footage",
      "Included with Garden Bed Maintenance"
    ],
    answer: 1,
    explanation: "Estimated pruning session time (hrs) × man-hour rate ($80–$100/hr) × 2 sessions/year."
  },
  {
    id: 90,
    category: "Service Knowledge",
    service: "Perennial Flower Pruning",
    type: "mc",
    question: "Does Perennial Flower Pruning include shrub or tree trimming?",
    options: [
      "Yes — all plants are included",
      "Only small shrubs under 3 feet",
      "No — it does not include shrub or tree trimming",
      "Only ornamental trees"
    ],
    answer: 2,
    explanation: "Perennial Flower Pruning covers perennial flowers only. Shrub and tree trimming are separate services."
  },
  {
    id: 91,
    category: "Scheduling",
    service: "Perennial Flower Pruning",
    type: "mc",
    question: "When is Perennial Flower Pruning typically performed?",
    options: [
      "Monthly from March to October",
      "Spring cut-back and/or fall cut-back as appropriate",
      "Only in September",
      "Weekly during growing season"
    ],
    answer: 1,
    explanation: "Seasonally timed — spring cut-back and/or fall cut-back depending on the plant."
  },
  {
    id: 92,
    category: "Service Knowledge",
    service: "Perennial Flower Pruning",
    type: "mc",
    question: "For a 0.5 hour session at $90/hr, what would the annual cost of Perennial Flower Pruning be?",
    options: ["$45", "$90", "$135", "$180"],
    answer: 1,
    explanation: "0.5 hrs × $90 × 2 sessions = $90 annual."
  },

  // ============================================================
  // LEAF CARE (Q93–Q112)
  // ============================================================
  {
    id: 93,
    category: "Service Knowledge",
    service: "Leaf Care",
    type: "mc",
    question: "Leaf Care (recurring) requires what other service to be active?",
    options: [
      "Garden Bed Maintenance",
      "A mowing plan",
      "Snow Removal",
      "Spring Cleanup"
    ],
    answer: 1,
    explanation: "Leaf Care requires a mowing plan to be active. Weekly maintenance is billed separately as the base service."
  },
  {
    id: 94,
    category: "Tier Differences",
    service: "Leaf Care",
    type: "mc",
    question: "What does Standard Leaf Care include?",
    options: [
      "Leaves hauled away every visit",
      "Leaves mulched into turf weekly + deep cleanup at season end",
      "Full property cleared every visit including beds",
      "One comprehensive cleanup at end of season only"
    ],
    answer: 1,
    explanation: "Standard: leaves mulched into turf weekly to control buildup, plus a deep cleanup visit at season end."
  },
  {
    id: 95,
    category: "Tier Differences",
    service: "Leaf Care",
    type: "mc",
    question: "What does Pristine Leaf Care include?",
    options: [
      "Leaves mulched weekly, no final cleanup",
      "Leaves collected and hauled away from lawn and hardscapes every visit + comprehensive final cleanup",
      "Same as Standard but with an extra monthly cleanup",
      "Beds cleared every visit"
    ],
    answer: 1,
    explanation: "Pristine: leaves actively collected and hauled away from lawn and hardscapes every visit, plus comprehensive final cleanup."
  },
  {
    id: 96,
    category: "Tier Differences",
    service: "Leaf Care",
    type: "mc",
    question: "What makes Estate Leaf Care different from Pristine?",
    options: [
      "Estate is just a bigger version of Pristine",
      "Estate clears lawn, hardscapes, AND all flower beds every visit — property stays immaculate all fall",
      "Estate includes snow removal",
      "Estate runs through December while Pristine ends in November"
    ],
    answer: 1,
    explanation: "Estate: leaves completely cleared from lawn, hardscapes, AND all flower beds every visit, all hauled away. Most comprehensive — property stays immaculate throughout entire fall."
  },
  {
    id: 97,
    category: "Tier Differences",
    service: "Leaf Care",
    type: "mc",
    question: "What is the price multiplier for Pristine Leaf Care over Standard?",
    options: ["× 1.15", "× 1.25", "× 1.35", "× 1.50"],
    answer: 2,
    explanation: "Pristine = Standard price × 1.35."
  },
  {
    id: 98,
    category: "Tier Differences",
    service: "Leaf Care",
    type: "mc",
    question: "What is the price multiplier for Estate Leaf Care over Standard?",
    options: ["× 1.35", "× 1.50", "× 1.70", "× 2.00"],
    answer: 2,
    explanation: "Estate = Standard price × 1.70."
  },
  {
    id: 99,
    category: "Service Knowledge",
    service: "Leaf Care",
    type: "mc",
    question: "Leaf Care Standard pricing uses a 'leaf volume multiplier.' What is the multiplier for a Rating 3 property?",
    options: ["× 1.0", "× 1.25", "× 1.50", "× 1.80"],
    answer: 2,
    explanation: "Leaf volume ratings: 1 = ×1.0, 2 = ×1.25, 3 = ×1.50, 4 = ×1.80, 5 = ×2.20."
  },
  {
    id: 100,
    category: "Service Knowledge",
    service: "Leaf Care",
    type: "mc",
    question: "What is the leaf volume multiplier for a Rating 5 (heaviest leaf coverage) property?",
    options: ["× 1.50", "× 1.80", "× 2.00", "× 2.20"],
    answer: 3,
    explanation: "Rating 5 = ×2.20."
  }
];

// Questions 101-200 continuation
const QUESTIONS_PART2 = [
  // ============================================================
  // LEAF CARE continued (Q101–Q112)
  // ============================================================
  {
    id: 101,
    category: "Service Knowledge",
    service: "Leaf Care",
    type: "mc",
    question: "What is the base fee for Standard Leaf Care on a lot ≤10,000 sq ft (before leaf volume multiplier)?",
    options: ["$200", "$250", "$275", "$300"],
    answer: 2,
    explanation: "Base fee for ≤10,000 sq ft is $275."
  },
  {
    id: 102,
    category: "Scheduling",
    service: "Leaf Care",
    type: "mc",
    question: "When does recurring Leaf Care typically run?",
    options: ["August – September", "September – October", "October – November", "November – December"],
    answer: 2,
    explanation: "Leaf Care typically runs October through November, during regular weekly mowing visits through end of season."
  },
  {
    id: 103,
    category: "Service Knowledge",
    service: "Leaf Care",
    type: "mc",
    question: "Is weekly mowing billed separately from Leaf Care, or is it included?",
    options: [
      "Included in the Leaf Care price",
      "Billed separately — weekly maintenance is the base service",
      "Only included with Estate tier",
      "Mowing stops when leaf care begins"
    ],
    answer: 1,
    explanation: "Weekly maintenance is billed separately as the base service. Leaf Care is an add-on to the mowing plan."
  },
  {
    id: 104,
    category: "Scenario",
    service: "Leaf Care",
    type: "scenario",
    question: "A client asks: \"I don't want to pay for leaf care all season — can you just come once at the end and do a big cleanup?\"",
    answer: "Absolutely — that's our One-Time Property Cleanup service. It's a single comprehensive visit instead of the recurring weekly leaf care. You can choose Nutrient Standard (we shred everything and return it to the soil) or Pristine Standard (we haul everything away). The one-time cleanup is priced at 65% of what the full seasonal Standard Leaf Care would cost for Nutrient, or 20% more than that for Pristine. It's a good option if you're okay with leaves building up during the season and just want a clean slate at the end.",
    keyPoints: [
      "Redirect to One-Time Property Cleanup as the alternative",
      "Two tiers: Nutrient (return to soil) and Pristine (haul away)",
      "Priced at 65% of seasonal Standard for Nutrient",
      "Pristine is Nutrient price × 1.20",
      "Acknowledge it means leaves build up during the season"
    ]
  },
  {
    id: 105,
    category: "Scenario",
    service: "Leaf Care",
    type: "scenario",
    question: "A client says: \"I'm on the Standard leaf care plan but my neighbor's trees dump a TON of leaves in my yard. I feel like Standard isn't enough.\"",
    answer: "If you have heavy leaf volume, Pristine might be a better fit — instead of mulching leaves into the turf weekly, we'd actively collect and haul them away from your lawn and hardscapes every visit, plus do a comprehensive final cleanup. If you also want the beds cleared every visit (not just lawn and hardscapes), Estate is the top tier — full property stays immaculate all fall. The pricing uses a leaf volume multiplier based on your property's leaf coverage, so heavy-leaf properties already have that factored in. Would you like me to quote the upgrade?",
    keyPoints: [
      "Suggest upgrading to Pristine or Estate",
      "Explain the difference: haul-away vs mulching",
      "Estate covers beds too, not just lawn and hardscapes",
      "Mention leaf volume multiplier already accounts for heavy coverage",
      "Offer to quote the upgrade"
    ]
  },
  {
    id: 106,
    category: "Tier Differences",
    service: "Leaf Care",
    type: "mc",
    question: "Which Leaf Care tier includes clearing flower beds during every visit?",
    options: ["Standard", "Pristine", "Estate", "All three"],
    answer: 2,
    explanation: "Only Estate clears all flower beds every visit. Standard and Pristine focus on lawn and hardscapes."
  },
  {
    id: 107,
    category: "Service Knowledge",
    service: "Leaf Care",
    type: "mc",
    question: "What does the Standard Leaf Care final cleanup include?",
    options: [
      "Just the lawn",
      "Clearing excess leaf cover from the lawn, hardscapes, and garden beds",
      "Only hardscapes",
      "Full property including roof gutters"
    ],
    answer: 1,
    explanation: "Standard's deep cleanup at season end clears excess leaf cover from lawn, hardscapes, and garden beds."
  },
  {
    id: 108,
    category: "Tier Differences",
    service: "Leaf Care",
    type: "mc",
    question: "A homeowner's lot is 10,000 sq ft with a Leaf Volume Rating of 2. What is the Standard Leaf Care seasonal price?",
    options: ["$275", "$343.75", "$371.25", "$467.50"],
    answer: 1,
    explanation: "$275 base × 1.25 (Rating 2 multiplier) = $343.75."
  },
  {
    id: 109,
    category: "Tier Differences",
    service: "Leaf Care",
    type: "mc",
    question: "Using the previous example ($343.75 Standard), what would Pristine Leaf Care cost?",
    options: ["$412.50", "$434.06", "$464.06", "$584.38"],
    answer: 2,
    explanation: "$343.75 × 1.35 = ~$464.06 for Pristine."
  },
  {
    id: 110,
    category: "Service Knowledge",
    service: "Leaf Care",
    type: "mc",
    question: "Leaf Care Standard involves mulching leaves into the turf. What is the benefit of this approach?",
    options: [
      "It's faster so visits are shorter",
      "Leaf material breaks down and returns nutrients to the soil",
      "It prevents new weed growth",
      "It eliminates the need for a final cleanup"
    ],
    answer: 1,
    explanation: "Mulching leaves into the turf breaks them down and returns nutrients to the soil — similar to the Nutrient Standard philosophy."
  },
  {
    id: 111,
    category: "Scheduling",
    service: "Leaf Care",
    type: "mc",
    question: "When does Leaf Care begin each season?",
    options: [
      "September 1 every year",
      "When leaves begin falling (typically October)",
      "After the last mow of the season",
      "November 1"
    ],
    answer: 1,
    explanation: "Leaf Care starts when leaves begin falling, typically October."
  },
  {
    id: 112,
    category: "Service Knowledge",
    service: "Leaf Care",
    type: "mc",
    question: "What does the Pristine Leaf Care final cleanup cover that Standard does not?",
    options: [
      "Standard and Pristine have the same final cleanup",
      "Pristine's final cleanup also clears all landscape beds (Standard just clears excess from beds)",
      "Pristine includes gutter cleaning",
      "Pristine includes a spring follow-up visit"
    ],
    answer: 1,
    explanation: "Pristine ends with a 'comprehensive full-property final cleanup that also clears all landscape beds.'"
  },

  // ============================================================
  // ONE-TIME PROPERTY CLEANUP (Q113–Q120)
  // ============================================================
  {
    id: 113,
    category: "Service Knowledge",
    service: "One-Time Property Cleanup",
    type: "mc",
    question: "One-Time Property Cleanup is an alternative to what recurring service?",
    options: ["Spring Cleanup", "Garden Bed Maintenance", "Recurring Leaf Care", "Mowing"],
    answer: 2,
    explanation: "One-Time Property Cleanup is the alternative to recurring Leaf Care — a single comprehensive visit instead of weekly service."
  },
  {
    id: 114,
    category: "Service Knowledge",
    service: "One-Time Property Cleanup",
    type: "mc",
    question: "How is the Nutrient Standard One-Time Property Cleanup priced?",
    options: [
      "Flat rate based on lot size",
      "Leaf Care Standard seasonal fee × 0.65",
      "Leaf Care Standard seasonal fee × 1.00",
      "Hourly labor rate"
    ],
    answer: 1,
    explanation: "Nutrient Standard One-Time Cleanup = Leaf Care Standard seasonal fee × 0.65."
  },
  {
    id: 115,
    category: "Tier Differences",
    service: "One-Time Property Cleanup",
    type: "mc",
    question: "What is the difference between Nutrient Standard and Pristine Standard One-Time Cleanup?",
    options: [
      "Nutrient covers less area",
      "Nutrient returns mulched material to soil; Pristine hauls everything away",
      "Pristine includes bed maintenance",
      "Nutrient is for small properties; Pristine for large"
    ],
    answer: 1,
    explanation: "Same scope: Nutrient shreds and returns to soil, Pristine hauls everything away."
  },
  {
    id: 116,
    category: "Tier Differences",
    service: "One-Time Property Cleanup",
    type: "mc",
    question: "What is the price multiplier for Pristine One-Time Cleanup over Nutrient Standard?",
    options: ["× 1.10", "× 1.20", "× 1.25", "× 1.35"],
    answer: 1,
    explanation: "Pristine = Nutrient Standard One-Time price × 1.20."
  },
  {
    id: 117,
    category: "Scheduling",
    service: "One-Time Property Cleanup",
    type: "mc",
    question: "When is One-Time Property Cleanup typically performed?",
    options: ["March – April", "July – August", "October – December", "January – February"],
    answer: 2,
    explanation: "Typically October through December, replacing recurring Leaf Care."
  },
  {
    id: 118,
    category: "Service Knowledge",
    service: "One-Time Property Cleanup",
    type: "mc",
    question: "One-Time Property Cleanup is classified as what job type?",
    options: ["Recurring", "One-time", "Both", "Add-on"],
    answer: 1,
    explanation: "It's a one-time service — a single comprehensive visit."
  },
  {
    id: 119,
    category: "Scenario",
    service: "One-Time Property Cleanup",
    type: "scenario",
    question: "A client who is NOT on a mowing plan asks about leaf care. What do you recommend?",
    answer: "Since recurring Leaf Care requires an active mowing plan, the One-Time Property Cleanup would be the way to go for you. It's a single comprehensive visit — we come out once and clear everything. You can choose Nutrient Standard where we shred all the material and return it to your soil, or Pristine Standard where we haul everything away. It's typically done October through December whenever works best for your schedule.",
    keyPoints: [
      "Recurring Leaf Care requires a mowing plan",
      "Redirect to One-Time Property Cleanup",
      "Explain both tier options (Nutrient vs Pristine)",
      "Flexible scheduling Oct-Dec",
      "Could also pitch a mowing plan to unlock recurring leaf care"
    ]
  },
  {
    id: 120,
    category: "Scenario",
    service: "One-Time Property Cleanup",
    type: "scenario",
    question: "A client asks: \"Is it worth doing the recurring leaf care or should I just do the one-time cleanup?\"",
    answer: "It depends on how much leaf buildup bothers you during the season. Recurring Leaf Care means we're managing leaves every week — mulching or hauling them away so your property stays clean throughout fall. The one-time cleanup means leaves accumulate all season and we do one big clean at the end. The one-time is about 65% of what the seasonal plan costs, so it's more affordable. But if you want your property looking good all fall — especially if you entertain or just like a clean yard — the recurring plan is worth it.",
    keyPoints: [
      "Recurring = managed weekly, property stays clean",
      "One-time = leaves accumulate, one big clean at end",
      "One-time costs about 65% of seasonal recurring",
      "Help them decide based on their tolerance for leaf buildup",
      "Recurring is better for people who care about weekly appearance"
    ]
  },

  // ============================================================
  // ONE-TIME BED SERVICES (Q121–Q132)
  // ============================================================
  {
    id: 121,
    category: "Service Knowledge",
    service: "Bed Reset / Garden Cleanup",
    type: "mc",
    question: "What is a Bed Reset / Garden Cleanup?",
    options: [
      "Installing new plants in beds",
      "A thorough one-time cleanup: removes weeds, debris, dead plants — brings beds to a clean baseline",
      "Applying chemical weed killer to beds",
      "Replacing all existing mulch"
    ],
    answer: 1,
    explanation: "Bed Reset is a thorough one-time cleanup that removes accumulated weeds, debris, and dead plant material. Brings beds to a clean, maintainable baseline."
  },
  {
    id: 122,
    category: "Service Knowledge",
    service: "Bed Reset / Garden Cleanup",
    type: "mc",
    question: "When is a Bed Reset commonly needed?",
    options: [
      "Every spring automatically",
      "Before mulch installation or before starting a recurring Garden Bed Maintenance plan",
      "Only when selling a house",
      "After every major storm"
    ],
    answer: 1,
    explanation: "Common prerequisite before mulch installation or starting a recurring maintenance plan."
  },
  {
    id: 123,
    category: "Service Knowledge",
    service: "One-Time Weeding",
    type: "mc",
    question: "What is One-Time Weeding?",
    options: [
      "A full garden redesign",
      "A single visit to clear weed growth from beds — can be basic (trimmer) or detail (hand-pull)",
      "Chemical herbicide application",
      "Installing weed barrier fabric"
    ],
    answer: 1,
    explanation: "Single visit to clear weed growth. Can be basic (string trimmer) or detail (hand-pull from root). No recurring commitment required."
  },
  {
    id: 124,
    category: "Service Knowledge",
    service: "Bed Edging",
    type: "mc",
    question: "What does Bed Edging do?",
    options: [
      "Installs metal or plastic edging material",
      "Defines and restores clean borders between lawn and flower beds",
      "Cuts new beds out of the lawn",
      "Removes existing edging"
    ],
    answer: 1,
    explanation: "Bed Edging defines and restores clean borders between lawn and flower beds."
  },
  {
    id: 125,
    category: "Service Knowledge",
    service: "Bed Edging",
    type: "mc",
    question: "Is Bed Edging included with Mulch Installation?",
    options: [
      "No — always a separate charge",
      "Yes — typically included with Mulch Installation but can also be booked standalone",
      "Only for properties with 10+ yards of mulch",
      "Only for Estate Detail clients"
    ],
    answer: 1,
    explanation: "Bed Edging is typically included with Mulch Installation but can also be booked on its own."
  },
  {
    id: 126,
    category: "Scheduling",
    service: "One-Time Bed Services",
    type: "mc",
    question: "What is the anchor date for One-Time Bed Services (peak demand)?",
    options: [
      "First Monday of March",
      "Third Monday of April",
      "First Monday of May",
      "First Monday of June"
    ],
    answer: 1,
    explanation: "Peak demand is anchored to the Third Monday of April, range Apr 1 – Jun 30."
  },
  {
    id: 127,
    category: "Scheduling",
    service: "One-Time Bed Services",
    type: "mc",
    question: "Can One-Time Bed Services be performed outside of the spring window?",
    options: [
      "No — spring only",
      "Yes — can be done anytime as needed, but peak demand is spring through early summer",
      "Only in fall as well",
      "Year-round including winter"
    ],
    answer: 1,
    explanation: "Can be done anytime as needed. Peak demand runs spring through early summer."
  },
  {
    id: 128,
    category: "Scenario",
    service: "One-Time Bed Services",
    type: "scenario",
    question: "A new client calls and says: \"I just bought a house and the garden beds are a total mess. Weeds, dead stuff everywhere. I want it all cleaned up and mulched, and then I want someone to keep it maintained going forward.\" Walk them through the plan.",
    answer: "Great — here's how I'd recommend approaching it. Step one: we do a Bed Reset to clear out all the weeds, dead plants, and debris. That gets your beds to a clean baseline. Step two: once the beds are clean, we come in with Mulch Installation — $150/yard, includes edging along your borders and a Preen application to help prevent new weeds. Step three: to keep them maintained going forward, we set you up on either our Clean Look Plan (string trimmer maintenance, more affordable) or Estate Detail Plan (hand-pulled weeding + Preen, more thorough). Both maintenance plans run with your mowing service from spring through fall. Each of those is quoted separately, and we'd schedule them in order. Want me to get those quotes going?",
    keyPoints: [
      "Step 1: Bed Reset (one-time cleanup to baseline)",
      "Step 2: Mulch Installation (includes edging + Preen)",
      "Step 3: Recurring maintenance (Clean Look or Estate Detail)",
      "Explain each step and why the order matters",
      "Maintenance plans require mowing plan",
      "Each service quoted separately"
    ]
  },
  {
    id: 129,
    category: "Service Knowledge",
    service: "One-Time Bed Services",
    type: "mc",
    question: "All One-Time Bed Services fall under which category in the service catalog?",
    options: [
      "Seasonal Cleanups",
      "Garden Bed Maintenance",
      "One-Time Bed Services (stand-alone jobs)",
      "Mulch Installation"
    ],
    answer: 2,
    explanation: "They are 'stand-alone jobs to address bed condition outside of a recurring plan.'"
  },
  {
    id: 130,
    category: "Service Knowledge",
    service: "Bed Edging",
    type: "mc",
    question: "Bed Edging is classified as what job type?",
    options: ["Recurring only", "One-time only", "Both (standalone or paired)", "Add-on only"],
    answer: 2,
    explanation: "Bed Edging is classified as 'Both' — can be standalone or paired with other services."
  },
  {
    id: 131,
    category: "Scenario",
    service: "One-Time Bed Services",
    type: "scenario",
    question: "A client says: \"I don't need the full bed reset — the beds aren't that bad. I just want someone to come pull the weeds once.\"",
    answer: "That's exactly what our One-Time Weeding service is for. We come out for a single visit and clear the weed growth from your beds. You can choose basic (we use a string trimmer — quick and affordable but roots stay) or detail (we hand-pull from the root for a more thorough result). No recurring commitment — just a one-time job whenever you need it. If down the road you want ongoing maintenance so they don't get ahead of you again, we can talk about our bed maintenance plans too.",
    keyPoints: [
      "Recommend One-Time Weeding — no commitment needed",
      "Two options: basic (trimmer) or detail (hand-pull)",
      "No recurring commitment required",
      "Mention maintenance plans as a future option",
      "Match the service to what they actually need"
    ]
  },
  {
    id: 132,
    category: "Service Knowledge",
    service: "One-Time Bed Services",
    type: "mc",
    question: "Which One-Time Bed Service is described as a 'common prerequisite before mulch installation'?",
    options: ["One-Time Weeding", "Bed Edging", "Bed Reset / Garden Cleanup", "Perennial Pruning"],
    answer: 2,
    explanation: "Bed Reset / Garden Cleanup is the common prerequisite before mulch or starting a maintenance plan."
  },

  // ============================================================
  // SNOW REMOVAL & SALT (Q133–Q150)
  // ============================================================
  {
    id: 133,
    category: "Service Knowledge",
    service: "Snow Removal",
    type: "mc",
    question: "At what accumulation does Standard Snow Removal get triggered?",
    options: ["Any trace", "~1 inch", "~2 inches", "~4 inches"],
    answer: 2,
    explanation: "Standard is triggered at approximately 2 inches of accumulation."
  },
  {
    id: 134,
    category: "Tier Differences",
    service: "Snow Removal",
    type: "mc",
    question: "At what accumulation does the Premium (Pristine) tier get triggered?",
    options: ["Any trace", "~1 inch", "~2 inches", "~3 inches"],
    answer: 1,
    explanation: "Premium triggers at approximately 1 inch, with priority dispatch and earlier response window."
  },
  {
    id: 135,
    category: "Tier Differences",
    service: "Snow Removal",
    type: "mc",
    question: "At what accumulation does Zero Tolerance get triggered?",
    options: ["~1 inch", "~0.5 inch", "Any accumulation (trace)", "Only ice events"],
    answer: 2,
    explanation: "Zero Tolerance triggers at any accumulation (trace) — property stays completely clear at all times."
  },
  {
    id: 136,
    category: "Service Knowledge",
    service: "Snow Removal",
    type: "mc",
    question: "How many visits per qualifying snow event are included in Snow Removal?",
    options: ["1 visit", "2 visits", "3 visits", "Unlimited visits"],
    answer: 3,
    explanation: "Unlimited visits per qualifying event across all tiers."
  },
  {
    id: 137,
    category: "Service Knowledge",
    service: "Snow Removal",
    type: "mc",
    question: "What is the base price for Standard Snow Removal on a paved area ≤600 sq ft?",
    options: ["$495", "$595", "$695", "$795"],
    answer: 2,
    explanation: "Base: ≤600 sq ft = $695."
  },
  {
    id: 138,
    category: "Tier Differences",
    service: "Snow Removal",
    type: "mc",
    question: "What is the price multiplier for Premium (Pristine) Snow Removal over Standard?",
    options: ["× 1.20", "× 1.35", "× 1.40", "× 1.50"],
    answer: 2,
    explanation: "Premium = Standard price × 1.40."
  },
  {
    id: 139,
    category: "Tier Differences",
    service: "Snow Removal",
    type: "mc",
    question: "What is the price multiplier for Zero Tolerance Snow Removal over Standard?",
    options: ["× 1.50", "× 1.70", "× 1.80", "× 2.00"],
    answer: 3,
    explanation: "Zero Tolerance = Standard price × 2.00."
  },
  {
    id: 140,
    category: "Scheduling",
    service: "Snow Removal",
    type: "mc",
    question: "When does the Snow Removal season run?",
    options: [
      "December 1 through February 28",
      "First qualifying snowfall through March 31",
      "November 1 through April 30",
      "Only when the client requests it"
    ],
    answer: 1,
    explanation: "Snow Removal runs from first qualifying snowfall through March 31."
  },
  {
    id: 141,
    category: "Service Knowledge",
    service: "Snow Removal",
    type: "mc",
    question: "Snow Removal covers what areas of a property?",
    options: [
      "Entire property including lawn",
      "Designated driveways and walkways",
      "Only the driveway",
      "Driveway, walkways, and roof"
    ],
    answer: 1,
    explanation: "Snow Removal covers designated driveways and walkways."
  },
  {
    id: 142,
    category: "Service Knowledge",
    service: "Snow Removal",
    type: "mc",
    question: "Snow Removal is described as having what service hours?",
    options: ["Business hours only (8am-6pm)", "Extended hours (6am-10pm)", "24/7", "On-call only"],
    answer: 2,
    explanation: "All Snow Removal tiers provide 24/7 service."
  },
  {
    id: 143,
    category: "Service Knowledge",
    service: "Snow Removal",
    type: "mc",
    question: "For a paved area beyond 600 sq ft, what is the additional cost per square foot (Standard tier)?",
    options: ["$0.15/sqft", "$0.20/sqft", "$0.27/sqft", "$0.35/sqft"],
    answer: 2,
    explanation: "Beyond 600 sq ft: $695 + (sqft − 600) × $0.27."
  },
  {
    id: 144,
    category: "Scenario",
    service: "Snow Removal",
    type: "scenario",
    question: "A client asks: \"What's the difference between your Standard and Premium snow removal? Is Premium really worth the extra cost?\"",
    answer: "The biggest differences are trigger threshold and response time. Standard triggers at about 2 inches — once snow hits that level, we come out and clear everything, unlimited visits per event, 24/7. Premium triggers at about 1 inch and you get priority dispatch with an earlier response window, so your property gets cleared faster and at a lower snow level. Whether it's worth it depends on your situation — if you leave for work early and need the driveway clear before the main plow rounds, or if 2 inches of buildup creates a safety concern, Premium gives you that extra peace of mind. Premium is 40% more than Standard.",
    keyPoints: [
      "Standard: ~2 inch trigger, 24/7 service",
      "Premium: ~1 inch trigger, priority dispatch, earlier response",
      "Both have unlimited visits per event",
      "40% price increase for Premium",
      "Help them decide based on their daily routine and safety needs"
    ]
  },
  {
    id: 145,
    category: "Scenario",
    service: "Snow Removal",
    type: "scenario",
    question: "A client says: \"I absolutely cannot have any snow on my property at any time — I have elderly parents living with me and it's a fall risk.\" What tier do you recommend?",
    answer: "Zero Tolerance is exactly what you need. It's our highest tier — it triggers at any trace of accumulation, so the moment snow starts sticking, we're on our way. Highest priority dispatch, and your property stays completely clear at all times. For your situation with elderly family members and fall risk, this gives you maximum peace of mind. It's priced at 2× the Standard rate, but it's designed for exactly this kind of situation where safety is non-negotiable.",
    keyPoints: [
      "Recommend Zero Tolerance immediately — matches the need",
      "Triggers at any trace of accumulation",
      "Highest priority, property stays clear at all times",
      "2× Standard pricing",
      "Validate their concern and frame it as safety investment"
    ]
  },
  {
    id: 146,
    category: "Service Knowledge",
    service: "Salt Treatment",
    type: "mc",
    question: "What is Salt Treatment?",
    options: [
      "A standalone winter service",
      "An add-on: ice-melt applied to walkways and driveways after snow clearing",
      "Salt applied before snowfall to prevent accumulation",
      "Included automatically with all snow removal tiers"
    ],
    answer: 1,
    explanation: "Salt Treatment is an add-on — application of ice-melt to walkways and driveways after clearing to improve traction and reduce icing."
  },
  {
    id: 147,
    category: "Service Knowledge",
    service: "Salt Treatment",
    type: "mc",
    question: "Salt Treatment is classified as what job type?",
    options: ["Recurring only", "One-time only", "Both", "Included with snow removal"],
    answer: 2,
    explanation: "Salt Treatment is classified as 'Both' — can be recurring or one-time, and is an add-on to Snow Removal."
  },
  {
    id: 148,
    category: "Scenario",
    service: "Snow Removal",
    type: "scenario",
    question: "A client asks: \"If it snows 3 times in one day, do you come back each time or just once?\"",
    answer: "We come back as many times as needed — all of our snow removal plans include unlimited visits per qualifying event. So if it keeps snowing and accumulation hits your trigger level again, we come back. You're covered for the entire event, 24/7.",
    keyPoints: [
      "Unlimited visits per qualifying event",
      "They come back as many times as needed",
      "24/7 service",
      "Reassure the client there's no visit limit"
    ]
  },
  {
    id: 149,
    category: "Service Knowledge",
    service: "Snow Removal",
    type: "mc",
    question: "Snow Removal pricing is based on what measurement?",
    options: [
      "Total lot square footage",
      "Paved area square footage (driveway + walkways)",
      "Number of snow events per year",
      "Driveway length only"
    ],
    answer: 1,
    explanation: "Snow Removal is priced based on paved area (sq ft)."
  },
  {
    id: 150,
    category: "Tier Differences",
    service: "Snow Removal",
    type: "mc",
    question: "A client has 800 sq ft of paved area. What is the Standard Snow Removal price?",
    options: ["$695", "$749", "$749", "$754"],
    answer: 1,
    explanation: "$695 + (800 − 600) × $0.27 = $695 + $54 = $749."
  },

  // ============================================================
  // PROPERTY PLAN vs AS-NEEDED (Q151–Q162)
  // ============================================================
  {
    id: 151,
    category: "Service Knowledge",
    service: "Property Plan",
    type: "mc",
    question: "What are the two ways a client can book services with Amigos Landscaping?",
    options: [
      "Monthly subscription or pay-per-visit",
      "As-Needed (individual jobs) or Property Plan (membership)",
      "Residential or commercial",
      "DIY guidance or full-service"
    ],
    answer: 1,
    explanation: "As-Needed (any service booked individually, invoiced per job) or Property Plan (custom membership, billed monthly)."
  },
  {
    id: 152,
    category: "Service Knowledge",
    service: "Property Plan",
    type: "mc",
    question: "How is a Property Plan billed?",
    options: [
      "One lump sum at the start of the year",
      "Per service as completed",
      "12 monthly installments",
      "Quarterly payments"
    ],
    answer: 2,
    explanation: "Property Plans are billed in 12 monthly installments."
  },
  {
    id: 153,
    category: "Service Knowledge",
    service: "Property Plan",
    type: "mc",
    question: "What incentive do Property Plan clients get for pre-paying the full year?",
    options: [
      "10% discount",
      "1 month free",
      "Free spring cleanup",
      "No incentive — same price either way"
    ],
    answer: 1,
    explanation: "Clients can pre-pay the full year for 1 month free."
  },
  {
    id: 154,
    category: "Service Knowledge",
    service: "Property Plan",
    type: "mc",
    question: "What scheduling benefit do Property Plan members receive?",
    options: [
      "Weekend scheduling",
      "Priority scheduling for one-off requests",
      "Same-day service guarantee",
      "No scheduling benefit"
    ],
    answer: 1,
    explanation: "Plan members receive priority scheduling for one-off requests."
  },
  {
    id: 155,
    category: "Scenario",
    service: "Property Plan",
    type: "scenario",
    question: "A client asks: \"Why would I do a Property Plan instead of just calling you when I need something?\"",
    answer: "Great question. With a Property Plan, all your services are pre-scheduled for the year — you don't have to think about calling, requesting quotes, or timing anything. It's a set-it-and-forget-it approach. You get billed the same amount monthly across 12 months, which makes budgeting easy. Plus, plan members get priority scheduling for any one-off requests. And if you pre-pay the full year, you get one month free. The As-Needed route works too, but you're scheduling individually, paying per job, and you might not get the same priority during our busy weeks.",
    keyPoints: [
      "All services pre-scheduled for the year",
      "12 even monthly payments (easier budgeting)",
      "Priority scheduling benefit",
      "Pre-pay option for 1 month free",
      "Compare to As-Needed: more work to schedule, no priority"
    ]
  },
  {
    id: 156,
    category: "Service Knowledge",
    service: "Property Plan",
    type: "mc",
    question: "A Property Plan is described as what?",
    options: [
      "A standard contract with cancellation fees",
      "A custom plan built around the client's property (membership)",
      "A one-size-fits-all annual package",
      "A referral program"
    ],
    answer: 1,
    explanation: "A Property Plan is a custom plan built around the client's property."
  },
  {
    id: 157,
    category: "Scenario",
    service: "Property Plan",
    type: "scenario",
    question: "A client is interested in mowing, leaf care, and snow removal. Should you pitch this as a Property Plan or as-needed services?",
    answer: "This is a perfect Property Plan candidate — they want three recurring services that span most of the year. With a plan, all three get pre-scheduled, they pay one consistent monthly amount across 12 months instead of dealing with separate invoices, and they get priority scheduling. If they pre-pay the full year, they get a month free. I'd build a custom plan that bundles their mowing, leaf care tier, and snow removal tier, and present the monthly and annual pricing side by side.",
    keyPoints: [
      "Multiple recurring services = ideal Property Plan candidate",
      "Consistent monthly payment across 12 months",
      "Pre-scheduled, priority scheduling",
      "Present monthly vs prepaid annual pricing",
      "Pre-pay gets 1 month free"
    ]
  },
  {
    id: 158,
    category: "Service Knowledge",
    service: "Property Plan",
    type: "mc",
    question: "Can a client book any individual service As-Needed without a plan?",
    options: [
      "No — some services require a plan",
      "Yes — any service can be booked individually on its own timeline",
      "Only one-time services",
      "Only services under $500"
    ],
    answer: 1,
    explanation: "Any service can be booked individually, on its own timeline, without a plan. Scheduled when requested and invoiced per job."
  },
  {
    id: 159,
    category: "Service Knowledge",
    service: "Property Plan",
    type: "mc",
    question: "Which services require an active mowing plan as a prerequisite?",
    options: [
      "Spring Cleanup and Mulch Installation",
      "Garden Bed Maintenance, Leaf Care, and Premium Managed Shaping",
      "All services except snow removal",
      "Only Garden Bed Maintenance"
    ],
    answer: 1,
    explanation: "Garden Bed Maintenance (both plans), Leaf Care (all tiers), and Premium Managed Shaping all require an active mowing plan."
  },
  {
    id: 160,
    category: "Scenario",
    service: "Property Plan",
    type: "scenario",
    question: "A client says they just want mulch and a one-time weeding — nothing else. Do they need a Property Plan?",
    answer: "Not at all — those are both one-time services that can be booked As-Needed. No plan required. We'd just quote each one separately, schedule them, and invoice per job. A Property Plan makes more sense when you have recurring services like mowing, bed maintenance, or leaf care. But if you ever decide you want regular upkeep in the future, we can always build a plan then.",
    keyPoints: [
      "No plan needed for one-time services",
      "Both can be booked As-Needed",
      "Quote and invoice per job",
      "Property Plans are for recurring services",
      "Leave the door open for a plan in the future"
    ]
  },
  {
    id: 161,
    category: "Service Knowledge",
    service: "Property Plan",
    type: "mc",
    question: "How does the pre-pay discount work? If a plan is $400/month ($4,800/year), what does the client pay?",
    options: [
      "$4,320 (10% off)", 
      "$4,400 (1 month free)", 
      "$4,560 (5% off)", 
      "$4,000 (last 2 months free)"
    ],
    answer: 1,
    explanation: "Pre-pay gets 1 month free: $400 × 11 = $4,400."
  },
  {
    id: 162,
    category: "Service Knowledge",
    service: "Property Plan",
    type: "mc",
    question: "The scheduling rule states: if the anchor day is full, what happens?",
    options: [
      "The service is skipped until next year",
      "Expand outward within the typical range",
      "The client is put on a waiting list",
      "A different crew is sent"
    ],
    answer: 1,
    explanation: "Scheduling rule: Start on or near the anchor day. If that day is full, expand outward within the typical range."
  },

  // ============================================================
  // CROSS-SERVICE & GENERAL KNOWLEDGE (Q163–Q180)
  // ============================================================
  {
    id: 163,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "How many total active services does Amigos Landscaping currently offer?",
    options: ["10", "13", "15", "17"],
    answer: 3,
    explanation: "There are 17 active services in the Service Pricing Catalog."
  },
  {
    id: 164,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "Which of the following service categories does Amigos NOT currently offer?",
    options: [
      "Lawn Health (aeration, overseeding)",
      "Irrigation / Sprinkler system maintenance",
      "Winter Services (snow removal, salt)",
      "Trimming & Pruning"
    ],
    answer: 1,
    explanation: "Irrigation/sprinkler maintenance is not in the current service catalog."
  },
  {
    id: 165,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "What is the correct seasonal order of major services through the year?",
    options: [
      "Mulch → Cleanup → Aeration → Mowing → Leaf Care → Snow",
      "Cleanup → Aeration → Mowing → Mulch → Trimming → Leaf Care → Snow",
      "Mowing → Cleanup → Mulch → Aeration → Leaf Care → Snow",
      "Aeration → Cleanup → Mowing → Trimming → Mulch → Snow"
    ],
    answer: 1,
    explanation: "Cleanup (Mar) → Aeration/Overseeding (Mar) → Mowing starts (Apr) → Mulch (May) → Trimming (Jun) → Leaf Care (Oct-Nov) → Snow (Nov-Mar)."
  },
  {
    id: 166,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "What does 'Nutrient Standard' mean across Amigos services?",
    options: [
      "We apply fertilizer nutrients during the service",
      "Organic material is returned to the soil/lawn to recycle nutrients naturally",
      "We use only organic products",
      "It's the premium tier with extra treatments"
    ],
    answer: 1,
    explanation: "Nutrient Standard philosophy: organic material (clippings, leaves, debris) is returned to the soil to recycle nutrients naturally."
  },
  {
    id: 167,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "What does 'Pristine Standard' mean across Amigos services?",
    options: [
      "We use the highest quality materials",
      "All collected material is completely hauled away for a clean appearance",
      "We visit twice as often",
      "Chemical treatments are included"
    ],
    answer: 1,
    explanation: "Pristine Standard: all material is hauled away for a perfectly clean appearance."
  },
  {
    id: 168,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "During mid-season (July–August), which services are actively running?",
    options: [
      "Mowing, Garden Bed Maintenance, and Premium Managed Shaping",
      "All services including spring aeration",
      "Only mowing",
      "Mowing and leaf care"
    ],
    answer: 0,
    explanation: "Mid-season: no major production blocks. Mowing, garden bed maintenance, and Premium Managed Shaping continue actively."
  },
  {
    id: 169,
    category: "Scenario",
    service: "General",
    type: "scenario",
    question: "A brand new client says: \"I want the full treatment — everything you offer for my property, year-round.\" Walk them through what a full-service Property Plan would look like.",
    answer: "For the full year-round treatment, here's what a comprehensive Property Plan would include: Starting early spring — Spring Cleanup (Pristine Standard for full haul-away). Then Spring Aeration + Overseeding to strengthen the turf. Weekly mowing kicks in April (Pristine Standard for a clean look every week). Garden Bed Maintenance on the Estate Detail Plan for hand-pulled weeding. Mulch in May. Bush shaping — Premium Managed for ongoing trimming throughout the season. Perennial pruning in spring and fall. Leaf Care in the fall on Estate tier — full property cleared every visit. Then Snow Removal and salt in winter — Zero Tolerance if they want maximum coverage. All pre-scheduled, one monthly payment, 12 months.",
    keyPoints: [
      "Walk through the full seasonal calendar of services",
      "Recommend premium tiers for a 'full treatment' client",
      "Spring: Cleanup, Aeration, Overseeding",
      "Summer: Mowing, Bed Maintenance, Mulch, Trimming, Perennials",
      "Fall: Leaf Care (Estate), Fall Aeration",
      "Winter: Snow Removal + Salt",
      "All wrapped in a Property Plan with monthly billing"
    ]
  },
  {
    id: 170,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "Which service has the EARLIEST anchor date in the calendar year?",
    options: [
      "Spring Aeration (Third Monday of March)",
      "Spring Cleanup (First Monday of March)",
      "Weekly Lawn Maintenance (April 1)",
      "Snow Removal (first snowfall)"
    ],
    answer: 1,
    explanation: "Spring Cleanup (First Monday of March) is the earliest anchor. Snow removal technically runs into the new year but the season starts in November."
  },
  {
    id: 171,
    category: "Scenario",
    service: "General",
    type: "scenario",
    question: "A client asks: \"I noticed you have a lot of services that need a mowing plan. Why can't I just get bed maintenance without mowing?\"",
    answer: "Good question. Services like Garden Bed Maintenance, Leaf Care, and Premium Managed Shaping are built into our regular weekly visit schedule — our crews handle them while they're already at your property for mowing. That's what keeps the pricing efficient and the service consistent. Without a mowing plan, we don't have that regular weekly presence at your property, which makes it hard to deliver those services at the same quality and price point. If you're not interested in mowing, we still have plenty of standalone services available — mulch, bed resets, one-time weeding, bush trimming, aeration, cleanups — none of those require a mowing plan.",
    keyPoints: [
      "Bed maintenance runs during regular weekly mowing visits",
      "Keeps pricing efficient and service consistent",
      "Without weekly presence, hard to deliver same quality",
      "Plenty of standalone services don't require mowing",
      "Don't lose the client — redirect to what they CAN get"
    ]
  },
  {
    id: 172,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "Mulch Installation starts being accepted in which month?",
    options: ["March", "April", "May", "June"],
    answer: 1,
    explanation: "Mulch is accepted as early as April, with peak production April through mid-May."
  },
  {
    id: 173,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "Which service's anchor date is 'flexible' with no fixed calendar date?",
    options: [
      "Spring Cleanup",
      "One-Time Property Cleanup (fall)",
      "Mulch Installation",
      "Snow Removal"
    ],
    answer: 1,
    explanation: "One-Time Property Cleanup has a flexible anchor — typically Oct–Dec."
  },
  {
    id: 174,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "Which of the following is NOT a service category at Amigos?",
    options: [
      "Recurring Lawn Maintenance",
      "Landscape Design & Installation",
      "Winter Services",
      "Seasonal Cleanups"
    ],
    answer: 1,
    explanation: "Landscape Design & Installation is not a current category. Categories include: Recurring Lawn Maintenance, Lawn Health, Garden Bed Maintenance, Trimming & Pruning, One-Time Bed Services, Mulch Installation, Seasonal Cleanups, Winter Services."
  },
  {
    id: 175,
    category: "Scenario",
    service: "General",
    type: "scenario",
    question: "It's mid-April. A new client calls wanting service. What services would you discuss that are relevant RIGHT NOW and in the coming weeks?",
    answer: "Great timing. Here's what's relevant right now and coming up: If they need a Spring Cleanup, we might still be able to fit them in (range goes to Mar 20, so it might be tight or just past window — check availability). Weekly mowing is starting up — April 1 anchor, so they'd want to get on the schedule ASAP. Spring Aeration + Overseeding window is closing (range ends Apr 5), so if they want that, now or never for spring — we can always do fall aeration instead. Garden Bed Maintenance would start with their mowing plan. One-time bed services are in peak demand right now (anchor third Monday of April). And mulch is coming up — accepted starting in April with peak production through mid-May. I'd focus on getting them set up with mowing first, then layer in the services that make sense for their property.",
    keyPoints: [
      "Spring Cleanup may be past window — check availability",
      "Mowing starting now — get on schedule ASAP",
      "Spring Aeration window closing — last chance or defer to fall",
      "Bed services in peak demand",
      "Mulch coming up soon",
      "Start with mowing plan as the foundation"
    ]
  },
  {
    id: 176,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "How many of Amigos' services are classified as 'Recurring' (not one-time or both)?",
    options: ["3", "4", "5", "6"],
    answer: 1,
    explanation: "4 recurring-only services: Weekly Lawn Maintenance, Garden Bed Maintenance, Leaf Care, and Snow Removal."
  },
  {
    id: 177,
    category: "Scenario",
    service: "General",
    type: "scenario",
    question: "A client says: \"I just want to know roughly what it would cost me for mowing and basic bed care on a standard suburban lot — maybe 10,000 sq ft lot.\"",
    answer: "On a standard 10,000 sq ft lot, the lawn is roughly 7,000 sq ft (70% rule). Mowing would be about $44/visit (in the $40-45 range), so annual Nutrient Standard is around $1,540. For beds, assuming maybe 3-5 yards of mulch-equivalent bed area — Clean Look Plan would be roughly $214–$290/year, or Estate Detail at $380–$500/year. So ballpark: mowing + Clean Look beds = roughly $1,750–$1,830 per year, or about $145–$155/month on a Property Plan. That's a solid starting point — I can get exact pricing once we look at the property.",
    keyPoints: [
      "Use 70% rule: 10K lot = ~7K lawn",
      "Calculate approximate mow rate and annual",
      "Estimate bed size and give Clean Look vs Estate Detail range",
      "Give a ballpark monthly Property Plan number",
      "Caveat that exact pricing requires property assessment"
    ]
  },
  {
    id: 178,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "The Fall Leaf Care season typically ENDS when?",
    options: [
      "October 31",
      "End of mowing season / November",
      "December 31",
      "When the first snow falls"
    ],
    answer: 1,
    explanation: "Leaf Care runs through end of mowing season, typically November."
  },
  {
    id: 179,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "Which services specifically mention 'ground level only' as a limitation?",
    options: [
      "Garden Bed Maintenance",
      "Shrub & Bush Shaping (all tiers)",
      "Spring Cleanup",
      "Mulch Installation"
    ],
    answer: 1,
    explanation: "All Shrub & Bush Shaping tiers specify 'ground level, handheld tools only. Tree work not included.'"
  },
  {
    id: 180,
    category: "Scenario",
    service: "General",
    type: "scenario",
    question: "A client asks: \"Do you do any kind of lawn treatments — like fertilizer, weed control, or grub prevention?\"",
    answer: "Currently our lawn health services focus on aeration and overseeding — which are two of the best things you can do for your lawn's long-term health. We don't currently offer chemical lawn treatments like fertilizer programs, weed control applications, or grub prevention. For those you'd want a lawn care treatment company. But our aeration loosens the soil for better root growth, and overseeding thickens the turf which naturally helps crowd out weeds over time.",
    keyPoints: [
      "We offer aeration and overseeding for lawn health",
      "We do NOT offer fertilizer programs, weed control, or pest treatment",
      "Be honest about what we don't offer",
      "Redirect to what we DO offer and why it's still valuable",
      "Suggest they find a lawn treatment company for chemical applications"
    ]
  },

  // ============================================================
  // ADDITIONAL SCENARIOS & TRICKY QUESTIONS (Q181–Q200)
  // ============================================================
  {
    id: 181,
    category: "Scenario",
    service: "Mulch Installation",
    type: "scenario",
    question: "A client asks: \"How many yards of mulch do I need for my property?\"",
    answer: "We estimate that on-site when our crew comes out — they eyeball the beds and figure out the right amount based on your bed area and the depth needed. Most standard suburban homes run anywhere from 3 to 8 yards, and larger properties can be 15-20+. At $150/yard delivered and installed (includes edging and Preen), it's easy to estimate once we see the beds. I can get you a quote once we take a look.",
    keyPoints: [
      "Yardage is estimated on-site (eyeballed)",
      "Give general ranges: 3-8 for standard homes, 15-20+ for large",
      "$150/yard includes delivery, install, edging, Preen",
      "Offer to quote after an on-site assessment"
    ]
  },
  {
    id: 182,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "Which TWO services share the same anchor period (Third Monday of March / Third Monday of April)?",
    options: [
      "Spring Cleanup and Mulch",
      "Spring Aeration and One-Time Bed Services",
      "Mowing and Garden Bed Maintenance",
      "Fall Aeration and Leaf Care"
    ],
    answer: 1,
    explanation: "Spring Aeration is anchored to Third Monday of March; One-Time Bed Services to Third Monday of April."
  },
  {
    id: 183,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "Which of these services does NOT require an active mowing plan?",
    options: [
      "Clean Look Plan (Garden Bed Maintenance)",
      "Pristine Leaf Care",
      "Mulch Installation",
      "Premium Managed Shaping"
    ],
    answer: 2,
    explanation: "Mulch Installation is a standalone one-time service — no mowing plan required."
  },
  {
    id: 184,
    category: "Scenario",
    service: "Leaf Care",
    type: "scenario",
    question: "A client on the Pristine Leaf Care plan asks: \"Why are there still some leaves in my beds? I thought Pristine covered everything.\"",
    answer: "Good question — Pristine Leaf Care focuses on your lawn and hardscapes during weekly visits, with a comprehensive final cleanup at the end. Flower beds do get attention during the final cleanup, but if you want beds completely cleared during every single weekly visit throughout the season, that's our Estate tier. Estate is the most comprehensive — lawn, hardscapes, AND all flower beds cleared every visit, keeping the whole property immaculate all fall. Would you like me to look at what the upgrade to Estate would cost?",
    keyPoints: [
      "Pristine covers lawn + hardscapes weekly, beds at final cleanup",
      "Estate covers lawn + hardscapes + ALL beds every visit",
      "Don't make the client feel wrong for asking",
      "Clearly explain the distinction",
      "Offer to quote the Estate upgrade"
    ]
  },
  {
    id: 185,
    category: "Service Knowledge",
    service: "Snow Removal",
    type: "mc",
    question: "What additional benefit does Premium Snow Removal offer over Standard besides a lower trigger threshold?",
    options: [
      "Sidewalk shoveling",
      "Priority dispatch and earlier response window",
      "Salt treatment included",
      "Roof snow removal"
    ],
    answer: 1,
    explanation: "Premium includes priority dispatch and earlier response window, in addition to the ~1 inch trigger."
  },
  {
    id: 186,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "If a client wants to start services in September, which services are still available to schedule?",
    options: [
      "Only snow removal",
      "Fall Aeration + Overseeding, Leaf Care, One-Time Property Cleanup, Snow Removal",
      "Mowing, mulch, and spring cleanup",
      "Only leaf care and snow removal"
    ],
    answer: 1,
    explanation: "September: Fall Aeration + Overseeding (anchored first week of Sep), and coming soon — Leaf Care (Oct-Nov), One-Time Cleanup (Oct-Dec), Snow Removal (first snowfall). Mowing is ongoing too."
  },
  {
    id: 187,
    category: "Scenario",
    service: "Shrub & Bush Shaping",
    type: "scenario",
    question: "A client asks: \"Can you trim my trees too? Some branches are hanging over my driveway.\"",
    answer: "Our shrub and bush shaping service is ground-level work with handheld tools — we don't do tree trimming or removal. For overhanging branches and tree work, you'd want to call a certified arborist or tree service company. But if you have bushes, hedges, or shrubs that need shaping, we've got you covered on those.",
    keyPoints: [
      "Shrub & Bush Shaping is ground level only, handheld tools",
      "No tree work included in any tier",
      "Redirect to an arborist/tree service for tree work",
      "Don't overpromise — be clear about the scope",
      "Offer what we CAN do (shrubs, bushes, hedges)"
    ]
  },
  {
    id: 188,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "Mulch Installation includes a Preen application. Which other service also includes Preen?",
    options: [
      "Spring Cleanup",
      "Estate Detail Plan (Garden Bed Maintenance)",
      "Leaf Care (all tiers)",
      "One-Time Weeding"
    ],
    answer: 1,
    explanation: "Both Mulch Installation and Estate Detail Plan include Preen weed preventer applications."
  },
  {
    id: 189,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "What is the last service of the calendar year before winter?",
    options: [
      "Fall Aeration (September)",
      "Leaf Care or One-Time Property Cleanup (Oct–Dec)",
      "Mulch Installation (June)",
      "Bush Trimming (August)"
    ],
    answer: 1,
    explanation: "Leaf Care (Oct-Nov) and One-Time Property Cleanup (Oct-Dec) are the last services before the winter snow season."
  },
  {
    id: 190,
    category: "Scenario",
    service: "Spring Cleanup",
    type: "scenario",
    question: "A client in late March says: \"I haven't done a spring cleanup yet and now it's almost April. Is it too late?\"",
    answer: "The ideal window for spring cleanup runs through about March 20, so we're just past the typical range. But depending on availability, we might still be able to squeeze you in before mowing starts up in April. The sooner the better — we want the cleanup done before your lawn really starts growing. Let me check the schedule and see what we can do.",
    keyPoints: [
      "Typical range is Feb 24 – Mar 20",
      "Late March is just past the ideal window",
      "May still be possible depending on availability",
      "Cleanup should happen before mowing starts (April 1)",
      "Create urgency without panic"
    ]
  },
  {
    id: 191,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "What is the 'Nutrient vs Pristine' naming convention used for?",
    options: [
      "Only mowing tiers",
      "Mowing, Spring Cleanup, and One-Time Property Cleanup — services where material is either returned to soil or hauled away",
      "All services across the catalog",
      "Only winter services"
    ],
    answer: 1,
    explanation: "Nutrient/Pristine Standard is used for services where the key choice is returning material to soil (Nutrient) vs hauling away (Pristine): Mowing, Spring Cleanup, and One-Time Cleanup."
  },
  {
    id: 192,
    category: "Scenario",
    service: "Garden Bed Maintenance",
    type: "scenario",
    question: "A client asks: \"Can I get the Estate Detail Plan without being on a mowing plan? I have my own mower but I want professional bed care.\"",
    answer: "Unfortunately, both bed maintenance plans — Clean Look and Estate Detail — require an active mowing plan with us. The reason is that bed care is built into our regular weekly visits while we're already at your property. Without that weekly presence, we can't deliver the consistent, routine care that makes the plan work. What I can offer as an alternative is periodic One-Time Weeding visits — either basic (trimmer) or detail (hand-pull) — with no plan required. Or, if you're open to it, our mowing service might be worth considering alongside the bed care.",
    keyPoints: [
      "Both bed plans require active mowing plan",
      "Care is built into weekly visits — needs that structure",
      "Offer alternatives: One-Time Weeding",
      "Gently pitch the mowing plan as a package deal",
      "Don't just say no — redirect to solutions"
    ]
  },
  {
    id: 193,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "Garden Bed Maintenance follows which other service's activation to begin?",
    options: [
      "Spring Cleanup",
      "Mulch Installation",
      "Mowing plan activation",
      "Spring Aeration"
    ],
    answer: 2,
    explanation: "Garden Bed Maintenance follows mowing activation and runs concurrent with the mowing season."
  },
  {
    id: 194,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "How many service categories does Amigos have?",
    options: ["5", "6", "7", "8"],
    answer: 3,
    explanation: "8 categories: Recurring Lawn Maintenance, Lawn Health, Garden Bed Maintenance, Trimming & Pruning, One-Time Bed Services, Mulch Installation, Seasonal Cleanups, Winter Services."
  },
  {
    id: 195,
    category: "Scenario",
    service: "Snow Removal",
    type: "scenario",
    question: "A client says: \"I only want snow removal when it's a big storm — I can handle the light stuff myself.\" What tier should you recommend?",
    answer: "Standard is exactly what you're describing. It triggers at about 2 inches of accumulation, so the light dustings and small amounts you can handle yourself won't trigger a visit. Once it hits that 2-inch level, we come out 24/7 with unlimited visits for the event. You only pay the seasonal rate — no per-visit charges.",
    keyPoints: [
      "Standard tier triggers at ~2 inches — fits their needs",
      "Light snow won't trigger a visit",
      "24/7 service, unlimited visits per qualifying event",
      "Seasonal rate, no per-visit charges",
      "Match the tier to their stated preference"
    ]
  },
  {
    id: 196,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "Which of these is an add-on service (not standalone)?",
    options: [
      "Spring Aeration",
      "Mulch Installation",
      "Perennial Flower Pruning",
      "Bed Reset"
    ],
    answer: 2,
    explanation: "Perennial Flower Pruning and Salt Treatment are classified as add-ons."
  },
  {
    id: 197,
    category: "Scheduling",
    service: "General",
    type: "mc",
    question: "Bi-Annual Shrub Shaping gets a second visit. When does this second visit typically occur?",
    options: [
      "In September specifically",
      "Later in the season after the first June trim",
      "Exactly 6 months after the first",
      "Right before the first frost"
    ],
    answer: 1,
    explanation: "The first visit is around June after the spring growth flush, and the second later in the season."
  },
  {
    id: 198,
    category: "Scenario",
    service: "General",
    type: "scenario",
    question: "A client says: \"Your competitor offers a single price for everything — mowing, cleanup, mulch, the works. Can you match that?\"",
    answer: "We actually build every Property Plan custom to each client's property and needs — that way you only pay for what makes sense for your specific situation. Some properties need more bed care and less trimming, others need heavy leaf care but minimal beds. A one-size-fits-all approach means you're either overpaying for services you don't need, or the company is cutting corners to make the numbers work. I'd rather build you a plan that fits your property perfectly, at a fair price for each service. Want me to put something together?",
    keyPoints: [
      "Plans are custom-built per property",
      "You pay for what you actually need",
      "One-size-fits-all means overpaying or corners being cut",
      "Position customization as the advantage",
      "Offer to build a custom plan"
    ]
  },
  {
    id: 199,
    category: "Service Knowledge",
    service: "General",
    type: "mc",
    question: "What does the 'leaf volume multiplier' account for in Leaf Care pricing?",
    options: [
      "The number of trees on the property",
      "The difficulty of cleanup based on leaf coverage rating (1–5)",
      "How far leaves need to be hauled",
      "The type of leaves (oak vs maple)"
    ],
    answer: 1,
    explanation: "The leaf volume multiplier (1.0 to 2.20) adjusts pricing based on the property's leaf coverage rating from 1 (lightest) to 5 (heaviest)."
  },
  {
    id: 200,
    category: "Scenario",
    service: "General",
    type: "scenario",
    question: "A client on a full Property Plan calls in August asking for a comprehensive summary of what's been done so far and what's coming up. Walk them through the rest of their season.",
    answer: "So far this year we've taken care of your spring cleanup, aeration and overseeding, and we've been mowing weekly since April. Bed maintenance has been running since mowing started, and your mulch and bush trimming are done. Looking ahead: mowing and bed care continue through the fall. In September we'll do your fall aeration and overseeding. Then in October when leaves start dropping, your leaf care plan kicks in — we'll manage that weekly through November. After the mowing season wraps up, your snow removal plan takes over for winter. You're set through the entire year — nothing for you to schedule or worry about.",
    keyPoints: [
      "Recap completed services: cleanup, aeration, mowing, beds, mulch, trimming",
      "Upcoming: fall aeration (Sep), leaf care (Oct-Nov), snow (winter)",
      "Mowing and bed care continue through fall",
      "Emphasize the hands-off benefit of the plan",
      "Show confidence in knowing the full service calendar"
    ]
  }
];

// Merge both arrays
const ALL_QUESTIONS = [...QUESTIONS, ...QUESTIONS_PART2];
