---
name: handoff
description: "Compress session state into .agents/handoff.md for clean context restarts and zero context rot."
---

# Handoff Session Continuity

## When to Run
- Context window exceeds 60-70% usage.
- User is wrapping up or switching tasks.
- Prior to running `/compact` or starting a new session.

## Procedure
1. Create or update `.agents/handoff.md` with:
   - Current task goal
   - Completed milestones & edited files
   - Pending decisions or blockers
   - Next concrete step
2. Notify user that handoff file is saved, recommending a fresh session or `/compact`.
