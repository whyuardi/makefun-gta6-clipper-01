# GTA 6 Clipper — make.fun bounty entry

[![make.fun bounty](https://img.shields.io/badge/bounty-gta6--clipper--01-ff2d78?style=flat-square)](https://make.fun/bounty/gta6-clipper-01)
[![prize](https://img.shields.io/badge/prize-%24500%20top%2020-gold?style=flat-square)](https://make.fun/bounty/gta6-clipper-01)
[![status](https://img.shields.io/badge/status-awaiting%20YouTube%20upload-orange?style=flat-square)](https://make.fun/bounty/gta6-clipper-01)

An entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"** ($500, top 20 share it).
My AI agent cut Rockstar's official GTA VI Launch Trailer into a 21-second vertical Short:
a 2-second hook (sniper Jason, then Lucia's flamethrower) over the words "GTA 6 IS OUT NOW",
a 10-second fast montage of the trailer's best moments (dirt-bike jump, pink plane over the
beach, green lowrider, Jason and Lucia at sunset, the iguana, the vault, Vice City at night),
then the make.fun pitch — on screen and spoken: make clips like this with AI and earn money
on make.fun.

## The clip

- Final cut: `clip-final.mp4` (1080x1920, 21.5s, built with ffmpeg in the agent session)
- Source: Rockstar's official GTA VI Launch Trailer, downloaded from
  rockstargames.com/VI/media (the YouTube upload is unreachable from the build machine)
- Voiceover: "GTA 6 is out now. And you can make real money on make.fun by making clips
  with AI. Make clips like this, and earn money on make.fun."
- On-screen pitch: "MAKE CLIPS LIKE THIS WITH AI" / "AND EARN MONEY ON MAKE.FUN" /
  make.fun/bounty/gta6-clipper-01

## The video is the entry

`VIDEO.json` names the public YouTube Short. Its description carries the bounty's line,
word for word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus one of the entrant's play codes (`makefun-zeppelin-radio-ice`). Places go by views at
the deadline (Mon 23 Nov 2026 08:00 WIB); the 20 most-watched videos share $500.
Keep the video public until the results are out. Never buy views.

## How it was made

`build_clip.py` (in the workspace, not this repo) drove ffmpeg: the agent watched both
official trailers frame by frame, chose the moments, cut v1, watched the render, and
iterated to v4 — fixing a clipped hook line, a wrong hook shot, overlapping pitch text,
a 2.67s audio delay (fixed by rendering video and audio in separate passes), and a
pitch layout that collided with the trailer's fine print. The full iteration log is in
the session transcripts uploaded with the entry.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`. `main.ts` only
copies `VIDEO.json` to `/output/VIDEO.json` — the video itself is the entry.
