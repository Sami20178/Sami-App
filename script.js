const navButtons = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const quickTiles = document.querySelectorAll('.quick-tile');

const themeToggle = document.getElementById('theme-toggle');
const darkSwitch = document.getElementById('dark-switch');

const aiInput = document.getElementById('ai-input');
const aiSend = document.getElementById('ai-send');
const aiMessages = document.getElementById('ai-messages');

const globalSearch = document.getElementById('global-search');
const searchBtn = document.getElementById('search-btn');

function setActiveView(viewName) {
  views.forEach((view) => {
    view.classList.toggle('active', view.dataset.view === viewName);
  });

  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.view === viewName);
  });
}

function smartAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes('python')) {
    return 'Python Tipp: Starte mit Funktionen, Listen und kleinen CLI-Projekten. Soll ich dir eine Übung erstellen?';
  }

  if (q.includes('code') || q.includes('javascript') || q.includes('js')) {
    return 'Code-Modus: Ich empfehle eine Komponenten-Struktur (HTML/CSS/JS getrennt) und dann Schritt für Schritt Features.';
  }

  if (q.includes('instagram') || q.includes('facebook') || q.includes('whatsapp')) {
    return 'Social-Clone Plan: 1) UI 2) State-Management 3) Auth 4) Realtime Chat/Feed 5) Backend API.';
  }

  if (q.includes('lernen') || q.includes('kurs') || q.includes('plan')) {
    return 'Lernplan: 30 Min pro Tag — 10 Min Theorie, 15 Min Coden, 5 Min Reflektion + Notizen.';
  }

  if (q.includes('samibook') || q.includes('konsole') || q.includes('design')) {
    return 'Samibookkonsole Design: Kombiniere Dock-Icons, linke Sidebar, Fensterkarten und ein Such-Launcher wie bei Desktop-OS.';
  }

  return 'Gute Frage! Ich kann dir bei App-Planung, UI, Python, JS und Feature-Ideen helfen. Sag mir dein Ziel in 1 Satz.';
}

function addAiMessage(author, text) {
  if (!aiMessages) return;
  const msg = document.createElement('p');
  msg.innerHTML = `<strong>${author}:</strong> ${text}`;
  aiMessages.append(msg);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActiveView(button.dataset.view);
  });
});

quickTiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    setActiveView(tile.dataset.jump);
  });
});

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (darkSwitch) darkSwitch.checked = !document.body.classList.contains('light');
  });
}

if (darkSwitch) {
  darkSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light', !darkSwitch.checked);
  });
}

if (aiSend && aiInput) {
  aiSend.addEventListener('click', () => {
    const question = aiInput.value.trim();
    if (!question) return;

    addAiMessage('Du', question);
    const answer = smartAnswer(question);
    addAiMessage('Sami AI', answer);
    aiInput.value = '';
  });
}

if (searchBtn && globalSearch) {
  searchBtn.addEventListener('click', () => {
    const query = globalSearch.value.toLowerCase();

    if (!query) {
      setActiveView('home');
      return;
    }

    const map = [
      ['spiel', 'games'],
      ['app', 'apps'],
      ['ai', 'ai'],
      ['ki', 'ai'],
      ['lern', 'learn'],
      ['einst', 'settings'],
      ['konto', 'account'],
      ['start', 'start']
    ];

    const found = map.find(([key]) => query.includes(key));
    setActiveView(found ? found[1] : 'home');
  });
}
