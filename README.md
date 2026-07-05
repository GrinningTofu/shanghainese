# 每天一句上海话

A small static web app for learning one trendy Shanghainese sentence each day.

## Run

Open `index.html` directly in a browser, or serve the folder locally:

```sh
python3 -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173
```

## What It Includes

- Daily phrase screen
- Listen, slow listen, and word-by-word readout
- Mandarin and English meaning
- Usage notes and mini dialogue
- Quick listening quiz
- Archive filters
- Favorites and “I know this” progress stored in `localStorage`

## Data

Phrase content lives in `app.js` in the `phrases` array. User progress is stored separately under the browser key:

```text
mei-tian-yi-ju-sh-progress
```

## Recording Audio

Add one M4A or MP3 per phrase in `audio/`. The filename should match the `audio.normal` value in `app.js`.

Current app playback files:

```text
audio/seed-vc/2026-07-04-laosa.wav
audio/seed-vc/2026-07-03-xiake.wav
audio/seed-vc/2026-07-02-gebiang.wav
audio/seed-vc/2026-07-01-zangguang.wav
audio/seed-vc/2026-06-30-lingqing.wav
```

The original recordings can stay in `audio/` as source material. The app uses the direct Seed-VC WAV outputs in `audio/seed-vc/`, preserving the best generated audio quality. “慢速听” plays the same WAV at a slower playback rate, so you do not need to create a separate slow file.

To regenerate transformed audio from the source recordings:

```sh
sh scripts/transform-audio.sh
```

If a recording is missing, the app falls back to the browser Web Speech API.

## Seed-VC Workflow

Seed-VC can be used if you want to convert a clean sentence recording into a consistent reference voice. Record each sentence cleanly, ideally 1-30 seconds, with no background music or noise.

Basic command shape:

```sh
python inference.py \
  --source path/to/sentence.wav \
  --target path/to/reference-voice.wav \
  --output converted-audio \
  --diffusion-steps 25 \
  --length-adjust 1.0 \
  --inference-cfg-rate 0.7 \
  --f0-condition False
```

For a generated slow version, use `--length-adjust` above `1.0`, for example `1.25`. The current app does not require that because it slows playback in the browser.

After conversion, export or rename the final file to the matching `audio/seed-vc/*.wav` path above.
