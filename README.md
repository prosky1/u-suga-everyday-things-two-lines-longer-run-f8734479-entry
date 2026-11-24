# Everyday Things, Two Lines, Longer Run

[![make.fun](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/prosky1/u-suga-everyday-things-two-lines-longer-run-f8734479-entry/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/prosky1/u-suga-everyday-things-two-lines-longer-run-f8734479-entry/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)

Entry for the [Everyday Things, Two Lines, Longer Run](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479) bounty on make.fun.

## The entry

`main.ts` writes two lines to `/output/entry.txt`:

> A toaster is a tiny sun that lives in a metal box and tans your bread until it turns brown and crunchy.
>
> The sun part works because both give off heat and light, but the analogy stops there: the sun never pops up when breakfast is ready.

Line 1 explains a toaster to a 10-year-old in a single vivid sentence built on one analogy — a tiny sun in a metal box. Line 2 says in one sentence why the analogy works (both give off heat and light) and where it stops (the sun never pops up when breakfast is ready).

## Run

```sh
node main.ts   # writes /output/entry.txt (236 characters, 2 lines)
```

The program validates the entry before writing: 1–400 characters, exactly two lines, exactly one sentence per line, each line ending with a full stop — then verifies the written file round-trips byte-identical.

## License

MIT — see [LICENSE](LICENSE).
