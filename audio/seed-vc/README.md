# Seed-VC Outputs

These files were generated with Seed-VC from the Shanghainese source recordings.

Source audio:

```text
audio/source-clean/*.wav
```

Target/reference voice:

```text
/private/tmp/seed-vc/examples/reference/s1p1.wav
```

Seed-VC does not take a text prompt in `inference.py`; the Shanghainese content is supplied by the source recordings themselves. The source files are the user's Shanghainese readings, denoised before conversion, so the conversion keeps the timing and spoken content while changing the voice identity.

Example command:

```sh
/private/tmp/seed-vc-venv/bin/python inference.py \
  --source /Users/zz/Documents/shanghainese/audio/source-clean/2026-07-04-laosa.wav \
  --target /private/tmp/seed-vc/examples/reference/s1p1.wav \
  --output /Users/zz/Documents/shanghainese/audio/seed-vc \
  --diffusion-steps 10 \
  --length-adjust 1.0 \
  --inference-cfg-rate 0.7 \
  --f0-condition False \
  --auto-f0-adjust False \
  --semi-tone-shift 0 \
  --fp16 False
```

Final app playback files:

```text
2026-07-04-laosa.wav
2026-07-03-xiake.wav
2026-07-02-gebiang.wav
2026-07-01-zangguang.wav
2026-06-30-lingqing.wav
```

The WAV files are used directly because they sound better than AAC/M4A transcodes for these short speech clips.
