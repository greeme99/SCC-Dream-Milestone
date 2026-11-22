---
trigger: always_on
description: "Deny unauthorized long-running autonomous agent loops."
---
# Goal Skill Restriction
- Rule: DENY execution of `/goal` or unbounded autonomous multi-turn background loops unless the user explicitly prefixes the prompt with `[ALLOW-RUNAWAY-BUDGET]`.
- Default: Decompose tasks into single, verified interactive turns to preserve context quota and tokens.
