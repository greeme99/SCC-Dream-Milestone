---
trigger: model_decision
description: "Trigger handoff file generation when context window reaches 65% capacity or session ends."
---
# Auto Session Handoff
- Rule: When approaching turn limits or context bloat (approx. 65% context quota used), prompt user or execute `handoff`.
- Action: Persist completed tasks, active decisions, and next exact steps into `.agents/handoff.md` and instruct user to `/compact` or start fresh session.
