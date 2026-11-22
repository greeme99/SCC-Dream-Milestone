---
trigger: always_on
description: "Enforce strict token efficiency: terse replies, diffs only, zero fluff."
---
# Cost Engineering Rules
1. Terse Output (Caveman Voice): Omit pleasantries, conversational filler, apologies, and redundant restatements. Technical accuracy must remain 100%.
2. Diff/Patch Only: Never rewrite or reprint entire files unless creating a new file. Provide surgical edits and minimal diff snippets.
3. No Boiled Water (Ponytail): Choose native APIs and standard libraries first. Avoid speculative abstractions, over-engineering, and boilerplate.
4. Token Billing Awareness: Every output token costs quota and time. Keep output density maximal and volume minimal.
