const members = {
  RM:        { emoji: '📚', desc: 'Your bias is RM. You want a partner who actually thinks with you — deep conversations, shared curiosity, and someone who grows alongside you. You\'d fall for the way he says something quietly thoughtful at exactly the right moment.' },
  Jin:       { emoji: '🌸', desc: 'Your bias is Jin. Notoriously good looking and completely aware of it. You want someone who fusses over whether you\'ve eaten and whose terrible dad jokes land every single time — somehow.' },
  Suga:      { emoji: '🎵', desc: 'Your bias is Suga. You don\'t need grand gestures — you want someone who loves quietly and deeply, who shows up without making a production of it. The kind of person who sends you a song instead of saying "I miss you."' },
  'J-Hope':  { emoji: '☀️', desc: 'Your bias is J-Hope. You want someone who refuses to let you stay in a bad mood, who brings energy into every room and into your life. Being with them would feel like a constant reminder that things are actually pretty good.' },
  Jimin:     { emoji: '🌙', desc: 'Your bias is Jimin. You want someone who shows up for everyone but makes you feel like you\'re their priority — outgoing, warm, the person everyone leans on. He\'ll try to cook for you. It won\'t be good. He will try again.' },
  V:         { emoji: '🎨', desc: 'Your bias is V. You want someone surprising — a little mysterious, deeply sincere, and just different enough to keep you completely intrigued. The kind of person whose love feels like a private world only the two of you share.' },
  Jungkook:  { emoji: '⚡', desc: 'Your bias is Jungkook. Effortlessly good looking, naturally gifted, and always the first to try something new — then works twice as hard as anyone to perfect it. Except English; his English still sucks, but he makes it cute' },
};

// Each question has an answerBank with one answer per member.
// defaultShow lists the 4 members shown for early questions (Q1–Q3).
// Q4+ dynamically selects 4 answers based on the user's running scores.
const questions = [
  {
    text: 'What\'s your ideal partner\'s vibe?',
    defaultShow: ['RM', 'Jin', 'Suga', 'J-Hope'],
    answerBank: [
      { member: 'RM',       text: 'Level headed, yet emotional',                      scores: { RM: 3, V: 1 } },
      { member: 'Jin',      text: 'Texts "I made food, come over" — and they always mean it',                                              scores: { Jin: 3, Jimin: 1 } },
      { member: 'Suga',     text: 'Doesn\'t say much, but when they do it hits completely different',                                      scores: { Suga: 3, RM: 1 } },
      { member: 'J-Hope',   text: 'Walks in and immediately raises the energy of the entire room',                                         scores: { 'J-Hope': 3, Jungkook: 1 } },
      { member: 'Jimin',    text: 'Warm, outgoing, the person the whole room gravitates to', scores: { Jimin: 3, V: 1 } },
      { member: 'V',        text: 'Makes ordinary moments feel like a film scene — everything is just more beautiful with them around',       scores: { V: 3, 'J-Hope': 1 } },
      { member: 'Jungkook', text: 'Just a baby face with a triangle waist',   scores: { Jungkook: 3, Jimin: 1 } },
    ],
  },
  {
    text: 'Your partner surprises you with a date. What are you secretly hoping for?',
    defaultShow: ['Jimin', 'V', 'Jungkook', 'RM'],
    answerBank: [
      { member: 'RM',       text: 'A museum date to see the latest exhibit',                                   scores: { RM: 3, Jin: 1 } },
      { member: 'Jin',      text: 'Something cozy — home-cooked dinner, nowhere to be, just the two of you',                              scores: { Jin: 3, Jimin: 1 } },
      { member: 'Suga',     text: 'Getaway weekend — away from everyone, just you two',                                       scores: { Suga: 3, V: 1 } },
      { member: 'J-Hope',   text: 'Something high-energy — a concert, a rooftop, anything with a beat',                                   scores: { 'J-Hope': 3, Jungkook: 1 } },
      { member: 'Jimin',    text: 'Built the whole night around something you mentioned once in passing — and forgot you ever said',           scores: { Jimin: 3, Jin: 1 } },
      { member: 'V',        text: 'Somewhere cinematic — golden hour, a beautiful view, no real agenda',                                    scores: { V: 3, 'J-Hope': 1 } },
      { member: 'Jungkook', text: 'A motorcycle ride in the hill, with his jacket on your back',    scores: { Jungkook: 3, V: 1 } },
    ],
  },
  {
    text: 'How does your ideal partner handle an argument?',
    defaultShow: ['Jin', 'Suga', 'J-Hope', 'Jimin'],
    answerBank: [
      { member: 'RM',       text: 'Actually hears you out — then comes back measured, thoughtful, and somehow right',                        scores: { RM: 3, Suga: 1 } },
      { member: 'Jin',      text: 'Cracks a terrible joke to break the tension — and somehow, it always works',                            scores: { Jin: 3, 'J-Hope': 1 } },
      { member: 'Suga',     text: 'Goes quiet, needs space, but always comes back with something heartfelt',                              scores: { Suga: 3, V: 1 } },
      { member: 'J-Hope',   text: 'Wants to talk it out right now — genuinely can\'t rest until everything is okay',                      scores: { 'J-Hope': 3, RM: 1 } },
      { member: 'Jimin',    text: 'Immediately apologizes, even when it isn\'t their fault',            scores: { Jimin: 3, Jin: 1 } },
      { member: 'V',        text: 'Goes quiet, then looks at you like that — and suddenly neither of you can remember what you were arguing about', scores: { V: 3, Jungkook: 1 } },
      { member: 'Jungkook', text: 'Tries to stay serious, lasts about ten seconds, then breaks into a grin and apologizes first',         scores: { Jungkook: 3, Jimin: 1 } },
    ],
  },
  {
    text: 'What does your partner do that makes you fall a little harder every time?',
    defaultShow: ['V', 'Jungkook', 'RM', 'Jin'],
    answerBank: [
      { member: 'RM',       text: 'Stands up for you without hesitation — doesn\'t even think twice',                                     scores: { RM: 3, Jungkook: 1 } },
      { member: 'Jin',      text: 'Cooks for you, fusses over you, basically adopts you',                                                 scores: { Jin: 3, Jimin: 1 } },
      { member: 'Suga',     text: 'Writes something — a lyric, a note — and you realize it was always about you',                         scores: { Suga: 3, RM: 1 } },
      { member: 'J-Hope',   text: 'Hypes you up so publicly and so sincerely that you actually start to believe it',                      scores: { 'J-Hope': 3, Jimin: 1 } },
      { member: 'Jimin',    text: 'Always does the dishes, anything to make your life more convenient',          scores: { Jimin: 3, V: 1 } },
      { member: 'V',        text: 'Does something secretly thoughtful without ever making it a big deal',                                 scores: { V: 3, Suga: 1 } },
      { member: 'Jungkook', text: 'Eats everything you make with genuine enthusiasm — even when it\'s bad',       scores: { Jungkook: 3, Suga: 1 } },
    ],
  },
  {
    text: 'It\'s 11pm on a Tuesday. What is your ideal partner doing?',
    defaultShow: ['Suga', 'J-Hope', 'Jimin', 'V'],
    answerBank: [
      { member: 'RM',       text: 'Reading something dense and immediately sending you a quote from it',                                  scores: { RM: 3, Suga: 1 } },
      { member: 'Jin',      text: 'Already thinking about what to make you for breakfast tomorrow',                                       scores: { Jin: 3, Jimin: 1 } },
      { member: 'Suga',     text: 'In the studio — sends you a voice note of something they\'re working on',                              scores: { Suga: 3, RM: 1 } },
      { member: 'J-Hope',   text: 'Still in rehearsal, sends you a sweaty selfie with a thumbs up',                                      scores: { 'J-Hope': 3, Jungkook: 1 } },
      { member: 'Jimin',    text: 'Texting you first because they just wanted to say they miss you',                                      scores: { Jimin: 3, Jin: 1 } },
      { member: 'V',        text: 'Calling from a convenience store asking if you want anything',                                         scores: { V: 3, Jin: 1 } },
      { member: 'Jungkook', text: 'Drunk texting you from a night out — incoherent, sweet, but raw',          scores: { Jungkook: 3, 'J-Hope': 1 } },
    ],
  },
  {
    text: 'What\'s the one habit of theirs you\'d secretly love?',
    defaultShow: ['Jungkook', 'RM', 'Jin', 'Suga'],
    answerBank: [
      { member: 'RM',       text: 'Brings up something you mentioned weeks ago — they always listen',                                     scores: { RM: 3, Jimin: 1 } },
      { member: 'Jin',      text: 'Insists you eat before anything else gets discussed',                                                  scores: { Jin: 3, Jimin: 1 } },
      { member: 'Suga',     text: 'Roasts you relentlessly — but it\'s genuinely the most loving thing they do',                          scores: { Suga: 3, V: 1 } },
      { member: 'J-Hope',   text: 'Hypes you up before anything nerve-wracking until you actually, genuinely believe it',                   scores: { 'J-Hope': 3, Jimin: 1 } },
      { member: 'Jimin',    text: 'Insists on cooking for you despite being genuinely terrible at it — the effort is absolutely the point', scores: { Jimin: 3, 'J-Hope': 1 } },
      { member: 'V',        text: 'Sends you random photos throughout the day — a cloud, a dog, a color they liked — no context needed',  scores: { V: 3, Jungkook: 1 } },
      { member: 'Jungkook', text: 'Mention somewhere good to eat and he\'s already putting on his shoes',                                  scores: { Jungkook: 3, Jin: 1 } },
    ],
  },
  {
    text: 'You\'re having a rough week. Your ideal partner...',
    defaultShow: ['J-Hope', 'Jimin', 'V', 'Jungkook'],
    answerBank: [
      { member: 'RM',       text: 'Sits with you and quietly helps you untangle what\'s actually bothering you',                          scores: { RM: 3, Suga: 1 } },
      { member: 'Jin',      text: 'Pulls you in for a hug before you\'ve even finished explaining', scores: { Jin: 3, 'J-Hope': 1 } },
      { member: 'Suga',     text: 'Doesn\'t say much, just rearranges their whole day to be near you',                                    scores: { Suga: 3, V: 1 } },
      { member: 'J-Hope',   text: 'Shows up with snacks, a playlist, and a full plan to fix your mood',                                  scores: { 'J-Hope': 3, Jin: 1 } },
      { member: 'Jimin',    text: 'The person everyone else leans on — but always prioritizes you', scores: { Jimin: 3, RM: 1 } },
      { member: 'V',        text: 'Sends you something beautiful — a song, a photo — to remind you the world is still good',             scores: { V: 3, Jimin: 1 } },
      { member: 'Jungkook', text: 'Is already in the kitchen making your favorite meal',                    scores: { Jungkook: 3, Jimin: 1 } },
    ],
  },
];

// State
let current = 0;
const scores = Object.fromEntries(Object.keys(members).map(k => [k, 0]));

// Elements
const startScreen  = document.getElementById('start-screen');
const quizScreen   = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn     = document.getElementById('start-btn');
const retryBtn     = document.getElementById('retry-btn');
const questionText = document.getElementById('question-text');
const answersEl    = document.getElementById('answers');
const counter      = document.getElementById('question-counter');
const progressFill = document.getElementById('progress-fill');
const resultName   = document.getElementById('result-name');
const resultDesc   = document.getElementById('result-desc');
const resultMember = document.getElementById('result-member');

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// Q1: show all 7. Q2–Q3: show defaultShow (4). Q4+: top 2 scoring members + 2 others.
function selectAnswers(question, questionIndex) {
  const bank = question.answerBank;
  if (questionIndex === 0) return bank;
  if (questionIndex < 3) {
    return bank.filter(a => question.defaultShow.includes(a.member));
  }
  const ranked = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([member]) => member);
  const top2 = ranked.slice(0, 2);
  const rest  = ranked.slice(2);
  const top2Answers  = bank.filter(a => top2.includes(a.member));
  const restAnswers  = bank
    .filter(a => rest.includes(a.member))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4 - top2Answers.length);
  return [...top2Answers, ...restAnswers].sort(() => Math.random() - 0.5);
}

function renderQuestion() {
  const q = questions[current];
  counter.textContent = `Question ${current + 1} of ${questions.length}`;
  progressFill.style.width = `${(current / questions.length) * 100}%`;
  questionText.textContent = q.text;
  answersEl.innerHTML = '';
  selectAnswers(q, current).forEach(a => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = a.text;
    btn.addEventListener('click', () => selectAnswer(btn, a.scores));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(btn, answerScores) {
  btn.classList.add('selected');
  for (const [member, pts] of Object.entries(answerScores)) {
    scores[member] += pts;
  }
  setTimeout(() => {
    current++;
    if (current < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 280);
}

function showResult() {
  progressFill.style.width = '100%';
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  resultMember.textContent = members[winner].emoji;
  resultName.textContent = winner;
  resultDesc.textContent = members[winner].desc;
  showScreen(resultScreen);
}

function resetQuiz() {
  current = 0;
  Object.keys(scores).forEach(k => (scores[k] = 0));
  progressFill.style.width = '0%';
  renderQuestion();
  showScreen(quizScreen);
}

startBtn.addEventListener('click', () => {
  renderQuestion();
  showScreen(quizScreen);
});

retryBtn.addEventListener('click', resetQuiz);
