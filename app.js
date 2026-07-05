const phrases = [
  {
    id: "2026-07-04-laosa",
    date: "2026-07-04",
    shanghainese: "侬今朝老飒额。",
    mandarin: "你今天很厉害、很有范儿。",
    english: "You are really sharp today.",
    pronunciation: "nong jin-zau lau-sa eh",
    audio: {
      normal: "audio/seed-vc/2026-07-04-laosa.wav"
    },
    vibe: "夸人 / 有腔调",
    usage: "朋友穿得好看、事情办得漂亮、状态很在线时可以讲。语气轻松，带一点上海式的捧场。",
    answer: "你今天很厉害、很有范儿。",
    options: ["你今天很厉害、很有范儿。", "你今天有点累。", "你今天来得太晚了。"],
    breakdown: [
      { word: "侬", meaning: "你" },
      { word: "今朝", meaning: "今天" },
      { word: "老", meaning: "很，非常" },
      { word: "飒", meaning: "帅气、利落、有范儿" },
      { word: "额", meaning: "的，句尾语气" }
    ],
    dialogue: [
      ["A", "我刚刚把方案讲完了。"],
      ["B", "侬今朝老飒额。"]
    ]
  },
  {
    id: "2026-07-03-xiake",
    date: "2026-07-03",
    shanghainese: "勿要急，慢慢来。",
    mandarin: "别急，慢慢来。",
    english: "Do not rush. Take your time.",
    pronunciation: "veh yau ji, man-man le",
    audio: {
      normal: "audio/seed-vc/2026-07-03-xiake.wav"
    },
    vibe: "安慰 / 日常",
    usage: "朋友紧张、赶时间、手忙脚乱时用，听起来比命令更温柔。",
    answer: "别急，慢慢来。",
    options: ["别急，慢慢来。", "我已经吃过了。", "这件事很好笑。"],
    breakdown: [
      { word: "勿要", meaning: "不要，别" },
      { word: "急", meaning: "着急" },
      { word: "慢慢来", meaning: "慢一点做，不用慌" }
    ],
    dialogue: [
      ["A", "我怕赶勿上了。"],
      ["B", "勿要急，慢慢来。"]
    ]
  },
  {
    id: "2026-07-02-gebiang",
    date: "2026-07-02",
    shanghainese: "格桩事体蛮有劲。",
    mandarin: "这件事情挺有意思。",
    english: "This thing is pretty interesting.",
    pronunciation: "geh zaon zy-di man yoe-jin",
    audio: {
      normal: "audio/seed-vc/2026-07-02-gebiang.wav"
    },
    vibe: "评价 / 好奇",
    usage: "看到新鲜事、好玩的项目、精彩八卦时讲。语气可以是真感兴趣，也可以带一点调侃。",
    answer: "这件事情挺有意思。",
    options: ["这件事情挺有意思。", "这件衣服太贵。", "这个地方很远。"],
    breakdown: [
      { word: "格桩", meaning: "这件、这个" },
      { word: "事体", meaning: "事情" },
      { word: "蛮", meaning: "挺、很" },
      { word: "有劲", meaning: "有意思，好玩" }
    ],
    dialogue: [
      ["A", "伊拉开了家只卖葱油拌面的店。"],
      ["B", "格桩事体蛮有劲。"]
    ]
  },
  {
    id: "2026-07-01-zangguang",
    date: "2026-07-01",
    shanghainese: "侬别太上头。",
    mandarin: "你别太沉迷、别太激动。",
    english: "Do not get too carried away.",
    pronunciation: "nong beh tha zaon-deu",
    audio: {
      normal: "audio/seed-vc/2026-07-01-zangguang.wav"
    },
    vibe: "提醒 / 流行语",
    usage: "朋友刷视频、追星、买东西停不下来时用。现代流行语混上海话，口感很自然。",
    answer: "你别太沉迷、别太激动。",
    options: ["你别太沉迷、别太激动。", "你今天很早起。", "你把灯打开。"],
    breakdown: [
      { word: "侬", meaning: "你" },
      { word: "别", meaning: "不要" },
      { word: "太", meaning: "过于" },
      { word: "上头", meaning: "沉迷、情绪太高" }
    ],
    dialogue: [
      ["A", "我想再买两杯联名奶茶。"],
      ["B", "侬别太上头。"]
    ]
  },
  {
    id: "2026-06-30-lingqing",
    date: "2026-06-30",
    shanghainese: "伊讲闲话老灵清。",
    mandarin: "他说话很清楚、很会表达。",
    english: "They explain things really clearly.",
    pronunciation: "yi gaon ghe-o lau ling-ching",
    audio: {
      normal: "audio/seed-vc/2026-06-30-lingqing.wav"
    },
    vibe: "夸人 / 表达力",
    usage: "夸一个人讲得清楚、有逻辑、有分寸时用，适合会议后、聊天后、看完视频后。",
    answer: "他说话很清楚、很会表达。",
    options: ["他说话很清楚、很会表达。", "他今天没有来。", "他喜欢吃甜的。"],
    breakdown: [
      { word: "伊", meaning: "他/她" },
      { word: "讲闲话", meaning: "说话" },
      { word: "老", meaning: "很" },
      { word: "灵清", meaning: "清楚、明白、利落" }
    ],
    dialogue: [
      ["A", "刚刚那个介绍我听懂了。"],
      ["B", "伊讲闲话老灵清。"]
    ]
  }
];

const STORAGE_KEY = "mei-tian-yi-ju-sh-progress";

const defaultProgress = {
  favorites: [],
  known: [],
  listened: {},
  practice: {}
};

let selectedPhrase = getTodayPhrase();
let activeFilter = "all";
let practiceOpen = false;
let answerRevealed = false;
let selectedPracticeOption = null;
let practiceFeedback = "";
let progress = loadProgress();
let currentAudio = null;

const elements = {
  knownCount: document.querySelector("#knownCount"),
  todayDate: document.querySelector("#todayDate"),
  todayVibe: document.querySelector("#todayVibe"),
  todayTitle: document.querySelector("#todayTitle"),
  todayPronunciation: document.querySelector("#todayPronunciation"),
  todayMandarin: document.querySelector("#todayMandarin"),
  todayEnglish: document.querySelector("#todayEnglish"),
  todayUsage: document.querySelector("#todayUsage"),
  todayDialogue: document.querySelector("#todayDialogue"),
  breakdownList: document.querySelector("#breakdownList"),
  archiveList: document.querySelector("#archiveList"),
  practiceOptions: document.querySelector("#practiceOptions"),
  practicePrompt: document.querySelector("#practicePrompt"),
  practiceResult: document.querySelector("#practiceResult"),
  playNormal: document.querySelector("#playNormal"),
  playSlow: document.querySelector("#playSlow"),
  playWords: document.querySelector("#playWords"),
  startPractice: document.querySelector("#startPractice"),
  toggleKnown: document.querySelector("#toggleKnown"),
  toggleFavorite: document.querySelector("#toggleFavorite"),
  filterTabs: document.querySelectorAll(".filter-tabs button")
};

function getTodayPhrase() {
  const today = new Date();
  const todayKey = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");
  return (
    phrases.find((phrase) => phrase.date === todayKey) ||
    phrases.find((phrase) => phrase.date < todayKey) ||
    phrases[0]
  );
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultProgress, ...saved };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function toggleListValue(listName, phraseId) {
  const values = new Set(progress[listName]);
  if (values.has(phraseId)) {
    values.delete(phraseId);
  } else {
    values.add(phraseId);
  }
  progress[listName] = [...values];
  saveProgress();
  render();
}

function markListened(phraseId) {
  const previous = progress.listened[phraseId] || { count: 0, lastListenedAt: null };
  progress.listened[phraseId] = {
    count: previous.count + 1,
    lastListenedAt: new Date().toISOString()
  };
  saveProgress();
}

function recordPractice(phraseId, isCorrect) {
  const previous = progress.practice[phraseId] || {
    attempts: 0,
    correct: 0,
    lastPracticedAt: null
  };
  progress.practice[phraseId] = {
    attempts: previous.attempts + 1,
    correct: previous.correct + (isCorrect ? 1 : 0),
    lastPracticedAt: new Date().toISOString()
  };
  saveProgress();
}

function playRecordedAudio(rate = 1) {
  if (!selectedPhrase.audio?.normal) {
    return false;
  }

  if (currentAudio) {
    currentAudio.pause();
  }

  currentAudio = new Audio(selectedPhrase.audio.normal);
  currentAudio.playbackRate = rate;
  currentAudio.addEventListener("ended", () => markListened(selectedPhrase.id), { once: true });
  currentAudio.addEventListener(
    "error",
    () => {
      speak(selectedPhrase.shanghainese, rate < 1 ? 0.48 : 0.88);
    },
    { once: true }
  );
  currentAudio.play().catch(() => speak(selectedPhrase.shanghainese, rate < 1 ? 0.48 : 0.88));
  return true;
}

function playPhrase(rate = 1) {
  if (!playRecordedAudio(rate)) {
    speak(selectedPhrase.shanghainese, rate < 1 ? 0.48 : 0.88);
  }
}

function speak(text, rate = 0.88) {
  if (!("speechSynthesis" in window)) {
    elements.practiceResult.textContent = "这个浏览器暂时不支持朗读";
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = rate;
  utterance.pitch = 1.02;
  window.speechSynthesis.speak(utterance);
  markListened(selectedPhrase.id);
}

function speakWords() {
  if (!("speechSynthesis" in window)) {
    elements.practiceResult.textContent = "这个浏览器暂时不支持朗读";
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
  }
  window.speechSynthesis.cancel();
  selectedPhrase.breakdown.forEach((item, index) => {
    const utterance = new SpeechSynthesisUtterance(item.word);
    utterance.lang = "zh-CN";
    utterance.rate = 0.72;
    utterance.pitch = 1.02;
    setTimeout(() => window.speechSynthesis.speak(utterance), index * 780);
  });
  markListened(selectedPhrase.id);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(new Date(`${value}T12:00:00`));
}

function renderToday() {
  const isKnown = progress.known.includes(selectedPhrase.id);
  const isFavorite = progress.favorites.includes(selectedPhrase.id);

  elements.knownCount.textContent = progress.known.length;
  elements.todayDate.textContent = formatDate(selectedPhrase.date);
  elements.todayVibe.textContent = selectedPhrase.vibe;
  elements.todayTitle.textContent = selectedPhrase.shanghainese;
  elements.todayPronunciation.textContent = selectedPhrase.pronunciation;
  elements.todayMandarin.textContent = practiceOpen
    ? selectedPhrase.mandarin
    : "这句话的意思：选择“测一测”后解锁";
  elements.todayEnglish.textContent = practiceOpen ? selectedPhrase.english : "";
  elements.todayUsage.textContent = selectedPhrase.usage;

  elements.toggleKnown.textContent = isKnown ? "已会" : "我会了";
  elements.toggleKnown.classList.toggle("active", isKnown);
  elements.toggleFavorite.textContent = isFavorite ? "已收藏" : "收藏";
  elements.toggleFavorite.classList.toggle("active", isFavorite);

  elements.todayDialogue.innerHTML = selectedPhrase.dialogue
    .map(([speaker, line]) => `<p><strong>${speaker}</strong> ${line}</p>`)
    .join("");
}

function renderBreakdown() {
  elements.breakdownList.innerHTML = selectedPhrase.breakdown
    .map(
      (item) => `
        <div class="word-row">
          <strong>${item.word}</strong>
          <p>${item.meaning}</p>
        </div>
      `
    )
    .join("");
}

function renderPractice() {
  elements.practiceResult.textContent = practiceFeedback;
  elements.practicePrompt.textContent = practiceOpen
    ? answerRevealed
      ? "答案已显示。"
      : "先凭声音选一个答案，选完再看意思。"
    : "听一听，先凭声音选一个答案，选完再看意思。";
  elements.practiceOptions.hidden = false;
  elements.startPractice.textContent = practiceOpen ? "重新听" : "测一测";
  elements.practiceOptions.innerHTML = selectedPhrase.options
    .map((option, index) => {
      const label = String.fromCharCode(65 + index);
      const isCorrect = answerRevealed && option === selectedPhrase.answer;
      const isWrong = answerRevealed && option === selectedPracticeOption && !isCorrect;
      const className = [isCorrect ? "correct" : "", isWrong ? "wrong" : ""].filter(Boolean).join(" ");
      const disabled = answerRevealed ? "disabled" : "";
      return `
        <button class="${className}" type="button" data-option="${option}" ${disabled}>
          <strong>${label}</strong>
          <span>${option}</span>
        </button>
      `;
    })
    .join("");
}

function filteredPhrases() {
  if (activeFilter === "known") {
    return phrases.filter((phrase) => progress.known.includes(phrase.id));
  }
  if (activeFilter === "favorites") {
    return phrases.filter((phrase) => progress.favorites.includes(phrase.id));
  }
  return phrases;
}

function renderArchive() {
  const items = filteredPhrases();
  elements.archiveList.innerHTML = items.length
    ? items
        .map((phrase) => {
          const isSelected = phrase.id === selectedPhrase.id;
          const listenedCount = progress.listened[phrase.id]?.count || 0;
          return `
            <button class="archive-card" type="button" data-phrase-id="${phrase.id}" aria-pressed="${isSelected}">
              <small>${formatDate(phrase.date)} · 听过 ${listenedCount} 次</small>
              <h3>${phrase.shanghainese}</h3>
              <p>${phrase.vibe}</p>
            </button>
          `;
        })
        .join("")
    : `<p class="empty-state">这里还没有内容。</p>`;
}

function renderFilters() {
  elements.filterTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === activeFilter);
  });
}

function render() {
  renderToday();
  renderBreakdown();
  renderPractice();
  renderArchive();
  renderFilters();
}

elements.playNormal.addEventListener("click", () => playPhrase());
elements.playSlow.addEventListener("click", () => playPhrase(0.68));
elements.playWords.addEventListener("click", speakWords);
elements.startPractice.addEventListener("click", () => {
  practiceOpen = true;
  answerRevealed = false;
  selectedPracticeOption = null;
  practiceFeedback = "";
  playPhrase();
  renderPractice();
  renderToday();
});

elements.toggleKnown.addEventListener("click", () => toggleListValue("known", selectedPhrase.id));
elements.toggleFavorite.addEventListener("click", () => toggleListValue("favorites", selectedPhrase.id));

elements.practiceOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-option]");
  if (!button || answerRevealed) return;

  const isCorrect = button.dataset.option === selectedPhrase.answer;
  practiceOpen = true;
  answerRevealed = true;
  selectedPracticeOption = button.dataset.option;

  practiceFeedback = isCorrect ? "灵额！" : "再听一遍就有感觉了";
  recordPractice(selectedPhrase.id, isCorrect);
  renderToday();
  renderPractice();
});

elements.archiveList.addEventListener("click", (event) => {
  const card = event.target.closest("button[data-phrase-id]");
  if (!card) return;

  const nextPhrase = phrases.find((phrase) => phrase.id === card.dataset.phraseId);
  if (nextPhrase) {
    selectedPhrase = nextPhrase;
    practiceOpen = false;
    answerRevealed = false;
    selectedPracticeOption = null;
    practiceFeedback = "";
    render();
    document.querySelector(".today-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

elements.filterTabs.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    renderArchive();
    renderFilters();
  });
});

render();
