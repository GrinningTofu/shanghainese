# 每天一句上海话

一个静态网页应用，每天学一句比较生活、比较新的上海话。

## 运行

推荐在项目目录里启动本地服务器：

```sh
python3 -m http.server 4173
```

然后打开：

```text
http://127.0.0.1:4173
```

## 录音怎么放

每一句录一个 M4A 或 MP3，放进 `audio/` 文件夹。文件名要和 `app.js` 里每条数据的 `audio.normal` 对上。

网页实际播放这些转换后的文件：

```text
audio/seed-vc/2026-07-04-laosa.wav
audio/seed-vc/2026-07-03-xiake.wav
audio/seed-vc/2026-07-02-gebiang.wav
audio/seed-vc/2026-07-01-zangguang.wav
audio/seed-vc/2026-06-30-lingqing.wav
```

你的原始录音可以留在 `audio/` 里作为素材。网页只指向 `audio/seed-vc/` 里的 Seed-VC WAV 输出，这样保留最好的生成音质。“慢速听”会用同一个 WAV 降速播放，所以不用单独做慢速版。

以后新录音放进 `audio/` 后，运行：

```sh
sh scripts/transform-audio.sh
```

如果某一句还没有录音，网页会暂时用浏览器自带朗读兜底。

## 建议录法

- 每句单独录一个文件。
- 录音尽量干净，不要有背景音乐、风声、键盘声。
- 每条保持 1-30 秒。
- 句子前后留一点点空白可以，但不要太长。
- 如果你想保留真实上海话口音，原始录音可以直接用，不一定需要 Seed-VC。

## 用 Seed-VC

如果你想把每句转换成同一个参考声音，可以用 Seed-VC。基本命令长这样：

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

参数里最相关的是：

- `--source`: 你录的这句上海话。
- `--target`: 参考声音，Seed-VC 会往这个声音靠。
- `--output`: 输出目录。
- `--length-adjust`: 语速，`1.0` 是原速，大于 `1.0` 更慢。

转换完以后，把最终音频导出/改名成上面的 `audio/seed-vc/*.wav` 文件名即可。
