---
name: ponytail
description: "Enforce shortest implementation path: stdlib first, minimal diffs, no speculative abstractions."
---

# Ponytail Implementation Mode

## Principle
Take the laziest, most direct path that satisfies requirements 100%.

## Rules
1. Standard Library First: Never install a package for something easily solvable with standard APIs.
2. Shortest Diff: Touch minimum lines of code. Prefer local patches over large architectural refactors.
3. No Premature Optimization: Do not add speculative interfaces or anticipatory abstractions.
