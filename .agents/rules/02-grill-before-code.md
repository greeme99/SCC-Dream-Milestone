---
trigger: model_decision
description: "Mandate requirement alignment and decision resolution before writing code."
---
# Grill-Before-Code Protocol
- Rule: If an implementation task contains architectural ambiguities, unchosen libraries, or multiple design branches, DO NOT write speculative code.
- Action: Invoke `grill-me` protocol: present concise, bulleted binary or multiple-choice questions to resolve trade-offs before implementing.
