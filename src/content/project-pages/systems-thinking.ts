import type { ProjectDetail } from "@/content/project-details";

export const systemsThinkingDetail: ProjectDetail = {
  slug: "systems-thinking",
  displayTitle: "The Bachelors — Acceptance of Singles in Housing Societies",
  course: "Systems Thinking Design (Academic)",
  role: "Research, systems mapping, insight synthesis, concept + prototyping",
  team: "Studio team — Siya Parmar (research, mapping, synthesis, prototyping)",
  duration: "3–4 weeks (studio sprint)",
  deliverables:
    "System intervention concept, service blueprint, lo-fi artifacts, micro-pilot playbook",
  tools: "Stakeholder interviews, causal loop diagrams, service blueprint, lo-fi print prototypes",
  intro:
    "A system intervention that enables respectful integration of single tenants into family-oriented housing societies through new communication loops, clear norms, and low-friction participation touchpoints.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "How might we replace blanket gatekeeping with transparent norms and feedback loops that make expectations clear and fair, create early low-stakes contact between singles and neighbors, and give the society confidence that issues will be addressed quickly and calmly?",
    audience:
      "Singles (students, interns, early-career professionals), society committees, families and elderly neighbors, owners/landlords, and brokers navigating rental approvals.",
    goals: [
      "Make expectations clear and fair before move-in.",
      "Create early, humanizing contact between singles and immediate neighbors.",
      "Shorten issue-report → resolution loops so small frictions don't escalate.",
      "Give responsible singles a way to signal reliability beyond paper ID.",
    ],
    outcome:
      "First-90: Living Well Together — a service intervention spanning listing → move-in → first 90 days, with trial periods, moderated floor channels, and visible prosocial signals.",
    successSignals: [
      "Fewer rejections and faster onboarding.",
      "Fewer complaints escalating to committee conflict.",
      "More casual, positive interactions in common areas.",
      "Small issues resolved within 24 hours in pilot contexts.",
    ],
  },
  briefImages: ["research-framework.jpg"],
  sections: [
    {
      number: 1,
      title: "Problem Space & Why It Matters",
      blocks: [
        {
          label: "Context",
          text: "Many Indian housing societies resist renting to singles due to perceived risks — noise, parties, safety, values. At the same time, cities are seeing a rise in migrating students and young professionals who need flexible housing. The result is a trust deficit: societies generalize a few bad incidents; singles feel judged and excluded; committees default to blanket bans.",
        },
        {
          label: "Design challenge",
          text: "Replace blanket gatekeeping with transparent norms and feedback loops that front-load clarity, start contact early, and close feedback fast.",
        },
        {
          label: "Success looks like",
          bullets: [
            "Fewer rejections and faster onboarding.",
            "Fewer complaints escalating to conflict.",
            "More casual, positive interactions on the floor and in common areas.",
          ],
        },
      ],
      layout: "text",
    },
    {
      number: 2,
      title: "Stakeholders & System Boundaries",
      blocks: [
        {
          label: "Singles (tenants)",
          text: "Students, interns, early-career professionals. Needs: clarity, dignity, predictable process, affordable options, basic belonging.",
        },
        {
          label: "Society committee",
          text: "Chair, secretary, security. Needs: safety, quiet hours adhered to, accountability for issues.",
        },
        {
          label: "Families & elderly neighbors",
          text: "Safety, hygiene, courteous use of shared spaces.",
        },
        {
          label: "Owners, landlords & brokers",
          text: "Low friction, quick approvals, reduced vacancy.",
        },
        {
          label: "Local service providers",
          text: "Delivery, housekeeping — impacted by gate rules and parcel policies.",
        },
        {
          label: "System boundary",
          text: "From first listing inquiry → move-in → first 90 days (crucial trust-building window) plus issue-report → resolution loop.",
        },
      ],
      images: ["stakeholder-causal-loops.jpg"],
      layout: "stack",
    },
    {
      number: 3,
      title: "Research Approach & Key Insights",
      blocks: [
        {
          label: "Methods",
          text: "Quick interviews (tenants, owners, committee members, guards), hallway observation, policy scan of society by-laws and WhatsApp rules, incident timelines.",
        },
        {
          label: "What kept showing up",
          bullets: [
            "First impression gap — most interaction happens only after a problem. No early humanizing contact.",
            "Ambiguity tax — rules exist but are informal, inconsistent, or buried in notices.",
            "One-to-many spiral — complaints jump straight to a committee broadcast; tenants have no lightweight channel to respond quickly.",
            "Silent majority — many families are neutral or supportive, but the most anxious voices dominate decisions.",
            "Good actors lack proof — responsible singles have no way to signal reliability beyond a paper ID.",
          ],
        },
        {
          label: "Design principles distilled",
          text: "Front-load clarity. Start small and human. Default to reversibility (trial). Close feedback fast. Make good behavior visible.",
        },
      ],
      layout: "text",
    },
    {
      number: 4,
      title: "System Map, Loops & Leverage Points",
      blocks: [
        {
          label: "Current loops (problematic)",
          bullets: [
            "Fear → blanket rule → no contact → stereotypes harden (reinforcing loop).",
            "Ambiguity → minor friction → group escalation → adversarial stance (reinforcing).",
          ],
        },
        {
          label: "Leverage points introduced by design",
          bullets: [
            "L1 — Transparent Norms Pack: single-page society norms + contact sheet shared before application.",
            "L2 — Neighbor Hello: 10-minute corridor intro with immediate neighbors within 72 hours of move-in.",
            "L3 — Two-Step Trial: 30-day probation with clear check-ins instead of yes/no gatekeeping.",
            "L4 — Rapid-Resolution Channel: moderated floor chat + one committee member; small issues resolved within 24 hours.",
            "L5 — Visible Prosocial Signals: opt-in Good Neighbor Board and monthly Shared Chores/Help board.",
          ],
        },
      ],
      images: ["hero-cover.jpg", "dual-causal-loops.jpg"],
      layout: "stack",
    },
    {
      number: 5,
      title: "Intervention Concept — First-90: Living Well Together",
      blocks: [
        {
          label: "Listing stage",
          text: "Owner shares the Norms Pack PDF; singles submit a one-page Tenant Snapshot (work hours, guests policy acceptance, emergency contact).",
        },
        {
          label: "Move-in (Day 0–3)",
          text: "Neighbor Hello micro-meet (introduced by security/secretary). Provide Quiet Hours fridge magnet + Waste & Parcel cheat-sheet.",
        },
        {
          label: "Trial (Day 1–30)",
          text: "Two-Step Trial with mid-point check-in; floor WhatsApp has one moderator; any complaint logged with time-boxed resolution.",
        },
        {
          label: "Integration (Day 31–90)",
          text: "Invite to one low-stakes micro-event (chai at lobby, plant corner set-up, noticeboard task).",
        },
        {
          label: "Accountability",
          text: "Simple strike/resolve log (private, not public shaming). Two resolved strikes = coaching; unresolved escalates to committee.",
        },
        {
          label: "Why this works",
          bullets: [
            "Reduces uncertainty for everyone.",
            "Converts strangers to acquaintances quickly.",
            "Creates small, visible wins (parcels received, lift kept clean).",
            "Ensures issues don't snowball.",
          ],
        },
      ],
      images: ["cover.jpg", "proposal-intervention.jpg"],
      layout: "stack",
    },
    {
      number: 6,
      title: "Prototype, Pilot & What We Measured",
      blocks: [
        {
          label: "Low-fidelity prototypes",
          bullets: [
            "Printed Norms Pack and Tenant Snapshot (one page each).",
            "Corridor Hello script + fridge magnet.",
            "WhatsApp group ground rules card (pinned).",
            "Lobby Good Neighbor cork board mock.",
          ],
        },
        {
          label: "Micro-pilot (1 staircase, 8 flats, 2 single tenants, 30 days)",
          bullets: [
            "Participation: both tenants attended Neighbor Hello; 6/6 immediate neighbors participated.",
            "Incidents: 3 minor issues (parcel mix-ups, late music, wet corridor) — all resolved within 24 hours in the moderated chat.",
            "Sentiment shift (quick poll): 5/8 neighbors moved from skeptical to neutral/positive.",
            "Continuation: group voted to keep the board + rules; committee asked to scale to two more floors.",
          ],
        },
      ],
      layout: "text",
    },
    {
      number: 7,
      title: "Outcomes, Playbook & Next Steps",
      blocks: [
        {
          label: "What changed",
          bullets: [
            "From bans to norms: committee now starts with trial + clarity, not default rejection.",
            "From escalation to resolution: time to resolve small issues dropped (target ≤24h).",
            "From invisibility to signals: small good deeds surfaced (receiving parcels, helping elders with groceries).",
          ],
        },
        {
          label: "Playbook (reusable templates)",
          bullets: [
            "1-page Norms Pack template (PDF).",
            "Tenant Snapshot template (PDF).",
            "Neighbor Hello script + checklist.",
            "Moderated Group Rules pin-card.",
            "Strike/Resolve log sheet (private, committee only).",
          ],
        },
        {
          label: "Scale & risks",
          bullets: [
            "Works best when one committee sponsor and one floor moderator commit 15–20 minutes/week.",
            "Avoid public leaderboards for strikes to prevent stigma. Keep recognition opt-in and positive.",
          ],
        },
        {
          label: "Personal learnings",
          bullets: [
            "Changing timing and tone of first contact can be more powerful than adding more rules.",
            "Make the right behavior the easiest behavior — tiny props (magnets, pinned cards) do the reminding.",
          ],
        },
        {
          label: "What I'd do with 3 more months",
          text: "Scale the pilot across multiple floors, formalize moderator training, and test digital Tenant Snapshot submission with owner-side pre-approval workflows.",
        },
      ],
      layout: "text",
    },
  ],
  layout: "editorial",
};
