# @hindsight/types

Shared TypeScript contracts for Hindsight.

This package is the single source of truth for JSON exchanged between the Hindsight GBrain skills repo and the GStack Browser extension. Do not redefine these shapes downstream; import them from `@hindsight/types`.

## Install

During the hackathon, consume this package as a local file dependency from sibling repos:

```json
{
  "dependencies": {
    "@hindsight/types": "file:../hindsight-types"
  }
}
```

## Scripts

```bash
npm run typecheck
npm run build
npm run qa
```

## Contracts

`contracts.ts` exports:

- `Take`
- `Outcome`
- `Profile`
- `AdviceResult`
- `FreshSignalItem`
- `BrainPage`
- `ContradictionPair`
- Skill input/output contracts for all five Hindsight skills

Keep contract changes synchronous with the team. If a JSON shape needs to change, stop and call a 5-minute huddle.
