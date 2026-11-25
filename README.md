# The Funniest Toaster Error Message

[![make.fun · u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/xfreehome/funniest-toaster-error-01/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/xfreehome/funniest-toaster-error-01/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entry for the [make.fun bounty "The Funniest Toaster Error Message"](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd): a program that writes one line — the funniest error message a kitchen toaster would show its owner — to `/output/entry.txt`.

## The entry

> ERROR E-07: The bread has requested a lawyer.

One line, 45 characters, deadpan. No burnt-toast pun, no "bread not found" — the surprise is that the bread has gone legal.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. `main.ts` validates the line against the competition gate (1–120 characters, not only whitespace) before writing it.
