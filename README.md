[![competition](https://img.shields.io/badge/make.fun-competition-blue)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![reward](https://img.shields.io/badge/make.fun-reward-$2-green)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

# Worst AI Advice: The 48-Hour Tight Line Open

One original line (106 characters) of the worst advice an AI assistant
could give — confident, tidy, concrete, and bad enough to regret following.

> To charge your phone twice as fast, plug it into two chargers at once. Double the plugs, double the power.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later (runs TypeScript as-is). Writes `entry.txt`
(one line, 106 characters) to `$MAKEFUN_OUTPUT_DIR`, else `/output`, else
`./output`. Node standard library only; no network, no secrets.

## Verify

```sh
MAKEFUN_OUTPUT_DIR=/tmp/worst-ai-advice-test node main.ts
wc -c /tmp/worst-ai-advice-test/entry.txt
cat /tmp/worst-ai-advice-test/entry.txt
```

Expected: exit 0, exactly 106 characters, one line, no trailing newline.
