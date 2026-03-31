# 🌿 Amigos Landscaping — Closer Knowledge Quiz

A self-contained quiz app for training and certifying inbound closers on Amigos Landscaping's service catalog, tier differences, pricing logic, and seasonal scheduling.

## How It Works

- **200 questions** in the bank (multiple choice + scenario-based)
- Each session randomly selects **30 questions**
- Covers **service knowledge** and **scheduling/seasonality** only (no compensation)
- Scenario questions show key points and allow self-grading (full / partial / missed)
- Instant feedback after every question
- Final score with full review of all answers

## Question Categories

| Category | Description |
|----------|-------------|
| Service Knowledge | What each service includes, how it's performed, what's NOT included |
| Tier Differences | Nutrient vs Pristine, Clean Look vs Estate Detail, Snow tier triggers, etc. |
| Scheduling | Anchor dates, typical ranges, seasonal order of services |
| Scenario | Client conversation simulations — "A client asks you..." |

## Services Covered

- Weekly Lawn Maintenance (Nutrient Standard / Pristine Standard)
- Spring Cleanup (Nutrient / Pristine)
- Spring & Fall Aeration
- Spring & Fall Overseeding
- Garden Bed Maintenance (Clean Look / Estate Detail)
- Mulch Installation
- Shrub & Bush Shaping (Annual / Bi-Annual / Premium Managed)
- Perennial Flower Pruning
- Leaf Care (Standard / Pristine / Estate)
- One-Time Property Cleanup
- One-Time Bed Services (Bed Reset, One-Time Weeding, Bed Edging)
- Snow Removal (Standard / Premium / Zero Tolerance)
- Salt Treatment
- Property Plan vs As-Needed

## Scoring

| Score | Verdict |
|-------|---------|
| 85%+ | ✅ Ready to close — strong service knowledge |
| 70–84% | ⚠️ Almost there — review weak areas, retake in 2 days |
| Below 70% | ❌ Needs more training before live calls |

## Setup

No build step required. Just open `index.html` in a browser.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/amigos-closer-quiz.git
cd amigos-closer-quiz

# Open in browser
open index.html
```

### Deploy to GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch, root folder
4. Your quiz will be live at `https://YOUR_USERNAME.github.io/amigos-closer-quiz/`

## File Structure

```
amigos-closer-quiz/
├── index.html      # Quiz app (standalone, no dependencies)
├── questions.js    # 200-question bank
└── README.md       # This file
```

## Updating Questions

All questions live in `questions.js`. Each question follows this structure:

```javascript
{
  id: 1,
  category: "Service Knowledge",  // Service Knowledge | Tier Differences | Scheduling | Scenario
  service: "Weekly Lawn Maintenance",
  type: "mc",                      // "mc" or "scenario"
  question: "What does Nutrient Standard mean?",
  options: ["A", "B", "C", "D"],   // MC only
  answer: 1,                       // MC: index of correct option
  explanation: "..."               // MC: shown after answering

  // For scenarios:
  type: "scenario",
  answer: "Model answer text...",
  keyPoints: ["Point 1", "Point 2"]
}
```

To add a question, append it to either the `QUESTIONS` or `QUESTIONS_PART2` array and increment the `id`.

## Quiz Rules

- Closer **may** reference the Notion Service Catalog and Scheduling Map during the quiz
- Goal is testing whether they can **find and explain** information quickly — not pure memorization
- Scenario questions are self-graded on key points covered
