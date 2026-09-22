const defaultPuzzleConfig = {
  pageTitle: "Placement Matrix Prototype",
  heroTitle: "Placement Matrix Prototype",
  heroSubtitle: "Place each initial once, then mark excluded squares with manual crosses.",
  panelTitles: {
    context: "Context",
    clues: "Clues",
    controls: "Controls",
    board: "Board",
    murderer: "Name the Murderer"
  },
  buttonLabels: {
    clearBoard: "Clear Board",
    checkAnswer: "Check Answer"
  },
  context: [],
  contextImages: [],
  rows: 4,
  cols: 4,
  boardImage: "assets/UI/Murder_Puzzle_Grid.png",
  blockedCells: [
    { x: 2, y: 1 },
    { x: 4, y: 4 }
  ],
  tokens: [
    { id: "C", label: "Charlotte (C)" },
    { id: "A", label: "Arthur (A)" },
    { id: "M", label: "Malcolm (M)" },
    { id: "V", label: "Victim (V)" }
  ],
  suspects: [
    { id: "C", label: "Charlotte" },
    { id: "A", label: "Arthur" },
    { id: "M", label: "Malcolm" }
  ],
  murdererPromptLabel: "Suspect",
  murdererPromptPlaceholder: "Choose suspect",
  murdererId: "C",
  murdererSuccessMessage: "Correct. Charlotte is the murderer.",
  murdererFailureMessage: "Not quite. Re-check the clues and try again.",
  murdererEmptyMessage: "Pick a suspect before checking.",
  statusMessage: "Select a token and click a square to place it.",
  clues: [
    "Use clues to place C, A, M and V on valid squares.",
    "Only one person can occupy any row.",
    "Only one person can occupy any column.",
    "Striped squares are blocked and cannot be used.",
    "Use the Cross tool to manually mark excluded squares."
  ]
};

const puzzleConfig = window.matrixBoardPuzzleData || defaultPuzzleConfig;
const initialTokenId = puzzleConfig.initialTokenId || puzzleConfig.tokens?.[0]?.id || "C";

const state = {
  selectedTool: initialTokenId,
  selectedNoteToken: initialTokenId,
  placements: {},
  manualCrosses: new Set(),
  notesByCell: new Map()
};

function renderPageCopy() {
  document.title = puzzleConfig.pageTitle || defaultPuzzleConfig.pageTitle;

  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const contextTitle = document.getElementById("context-title");
  const cluesTitle = document.getElementById("clues-title");
  const controlsTitle = document.getElementById("controls-title");
  const boardTitle = document.getElementById("board-title");
  const murdererTitle = document.getElementById("murderer-title");
  const notesLabel = document.getElementById("notes-label");
  const murdererLabel = document.getElementById("murderer-label");
  const clearBoardButton = document.getElementById("clear-board");
  const checkAnswerButton = document.getElementById("check-murderer");
  const contextBody = document.getElementById("context-body");

  if (heroTitle) {
    heroTitle.textContent = puzzleConfig.heroTitle || defaultPuzzleConfig.heroTitle;
  }
  if (heroSubtitle) {
    heroSubtitle.textContent = puzzleConfig.heroSubtitle || defaultPuzzleConfig.heroSubtitle;
  }

  const panelTitles = puzzleConfig.panelTitles || defaultPuzzleConfig.panelTitles;
  if (contextTitle) {
    contextTitle.textContent = panelTitles.context || defaultPuzzleConfig.panelTitles.context;
  }
  if (cluesTitle) {
    cluesTitle.textContent = panelTitles.clues || defaultPuzzleConfig.panelTitles.clues;
  }
  if (controlsTitle) {
    controlsTitle.textContent = panelTitles.controls || defaultPuzzleConfig.panelTitles.controls;
  }
  if (boardTitle) {
    boardTitle.textContent = panelTitles.board || defaultPuzzleConfig.panelTitles.board;
  }
  if (murdererTitle) {
    murdererTitle.textContent = panelTitles.murderer || defaultPuzzleConfig.panelTitles.murderer;
  }

  if (notesLabel) {
    notesLabel.textContent = "Note Initial";
  }
  if (murdererLabel) {
    murdererLabel.textContent = puzzleConfig.murdererPromptLabel || defaultPuzzleConfig.murdererPromptLabel;
  }

  const buttonLabels = puzzleConfig.buttonLabels || defaultPuzzleConfig.buttonLabels;
  if (clearBoardButton) {
    clearBoardButton.textContent = buttonLabels.clearBoard || defaultPuzzleConfig.buttonLabels.clearBoard;
  }
  if (checkAnswerButton) {
    checkAnswerButton.textContent = buttonLabels.checkAnswer || defaultPuzzleConfig.buttonLabels.checkAnswer;
  }

  if (contextBody) {
    const paragraphs = Array.isArray(puzzleConfig.context) ? puzzleConfig.context : [];
    const contextImages = Array.isArray(puzzleConfig.contextImages) ? puzzleConfig.contextImages : [];
    contextBody.innerHTML = "";

    if (contextImages.length > 0) {
      const imageRow = document.createElement("div");
      imageRow.className = "context-image-row";

      contextImages.forEach((item) => {
        if (!item || !item.src) {
          return;
        }

        const tile = document.createElement("figure");
        tile.className = "context-image-tile";

        const img = document.createElement("img");
        img.className = "context-image";
        img.src = item.src;
        img.alt = item.alt || "Context portrait";
        tile.appendChild(img);

        if (item.caption) {
          const caption = document.createElement("figcaption");
          caption.className = "context-image-caption";
          caption.textContent = item.caption;
          tile.appendChild(caption);
        }

        imageRow.appendChild(tile);
      });

      contextBody.appendChild(imageRow);
    }

    paragraphs.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      contextBody.appendChild(p);
    });
  }
}

function keyFor(x, y) {
  return `${x},${y}`;
}

function parseKey(key) {
  const [x, y] = key.split(",").map(Number);
  return { x, y };
}

function isBlocked(x, y) {
  return puzzleConfig.blockedCells.some((cell) => cell.x === x && cell.y === y);
}

function getTokenAt(x, y) {
  return Object.entries(state.placements).find(([, pos]) => pos.x === x && pos.y === y)?.[0] || "";
}

function getCellNotes(x, y) {
  return state.notesByCell.get(keyFor(x, y)) || new Set();
}

function clearCellNotes(x, y) {
  state.notesByCell.delete(keyFor(x, y));
}

function getDerivedCrosses() {
  const crosses = new Set(state.manualCrosses);
  Object.values(state.placements).forEach((pos) => crosses.delete(keyFor(pos.x, pos.y)));
  puzzleConfig.blockedCells.forEach((pos) => crosses.delete(keyFor(pos.x, pos.y)));
  return crosses;
}

function setStatus(message, isWarning = false) {
  const status = document.getElementById("status");
  if (!status) {
    return;
  }

  status.textContent = message;
  status.classList.toggle("is-warning", isWarning);
}

function canPlaceToken(tokenId, x, y) {
  if (isBlocked(x, y)) {
    return { ok: false, message: `(${x}, ${y}) is blocked.` };
  }

  const occupant = getTokenAt(x, y);
  if (occupant && occupant !== tokenId) {
    return { ok: false, message: `(${x}, ${y}) already holds ${occupant}.` };
  }

  const placements = Object.entries(state.placements);
  for (const [otherToken, pos] of placements) {
    if (otherToken === tokenId) {
      continue;
    }
    if (pos.x === x) {
      return { ok: false, message: `Column ${x} already has ${otherToken}.` };
    }
    if (pos.y === y) {
      return { ok: false, message: `Row ${y} already has ${otherToken}.` };
    }
  }

  return { ok: true, message: "" };
}

function placeToken(tokenId, x, y) {
  const check = canPlaceToken(tokenId, x, y);
  if (!check.ok) {
    setStatus(check.message, true);
    return;
  }

  state.placements[tokenId] = { x, y };
  state.manualCrosses.delete(keyFor(x, y));
  clearCellNotes(x, y);
  setStatus(`${tokenId} placed at (${x}, ${y}).`);
}

function toggleCross(x, y) {
  if (isBlocked(x, y)) {
    setStatus(`(${x}, ${y}) is blocked.`, true);
    return;
  }

  if (getTokenAt(x, y)) {
    setStatus(`Remove the initial first if you want to cross (${x}, ${y}).`, true);
    return;
  }

  const key = keyFor(x, y);
  if (state.manualCrosses.has(key)) {
    state.manualCrosses.delete(key);
    setStatus(`Cross removed at (${x}, ${y}).`);
  } else {
    state.manualCrosses.add(key);
    clearCellNotes(x, y);
    setStatus(`Cross added at (${x}, ${y}).`);
  }
}

function toggleNote(x, y, noteToken) {
  if (isBlocked(x, y)) {
    setStatus(`(${x}, ${y}) is blocked.`, true);
    return;
  }

  if (getTokenAt(x, y)) {
    setStatus(`Remove the initial first if you want to add notes to (${x}, ${y}).`, true);
    return;
  }

  if (state.manualCrosses.has(keyFor(x, y))) {
    setStatus(`Remove the cross first if you want to add notes to (${x}, ${y}).`, true);
    return;
  }

  const key = keyFor(x, y);
  const notes = new Set(getCellNotes(x, y));
  if (notes.has(noteToken)) {
    notes.delete(noteToken);
    setStatus(`Removed note ${noteToken} at (${x}, ${y}).`);
  } else {
    notes.add(noteToken);
    setStatus(`Added note ${noteToken} at (${x}, ${y}).`);
  }

  if (notes.size) {
    state.notesByCell.set(key, notes);
  } else {
    state.notesByCell.delete(key);
  }
}

function eraseCell(x, y) {
  const token = getTokenAt(x, y);
  if (token) {
    delete state.placements[token];
    setStatus(`${token} removed from (${x}, ${y}).`);
    return;
  }

  const key = keyFor(x, y);
  if (state.manualCrosses.has(key)) {
    state.manualCrosses.delete(key);
    setStatus(`Cross removed at (${x}, ${y}).`);
    return;
  }

  if (state.notesByCell.has(key)) {
    state.notesByCell.delete(key);
    setStatus(`Notes removed at (${x}, ${y}).`);
    return;
  }

  setStatus(`Nothing to erase at (${x}, ${y}).`);
}

function renderGrid() {
  const grid = document.getElementById("grid-overlay");
  if (!grid) {
    return;
  }

  grid.style.gridTemplateColumns = `repeat(${puzzleConfig.cols}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${puzzleConfig.rows}, 1fr)`;
  grid.innerHTML = "";

  const crosses = getDerivedCrosses();

  for (let row = 1; row <= puzzleConfig.rows; row += 1) {
    for (let col = 1; col <= puzzleConfig.cols; col += 1) {
      const button = document.createElement("button");
      const blocked = isBlocked(col, row);
      const token = getTokenAt(col, row);
      const hasCross = crosses.has(keyFor(col, row));
      const notes = getCellNotes(col, row);

      button.type = "button";
      button.className = "grid-cell";
      button.dataset.x = String(col);
      button.dataset.y = String(row);
      button.setAttribute("aria-label", `Cell (${col}, ${row})`);

      if (blocked) {
        button.classList.add("is-blocked");
        button.disabled = true;
      } else if (token) {
        button.classList.add("is-token");
        button.textContent = token;
      } else if (hasCross) {
        button.classList.add("is-cross");
      } else if (notes.size) {
        button.classList.add("is-note");
        const notesWrap = document.createElement("div");
        notesWrap.className = "cell-notes";
        [...notes].sort().forEach((note) => {
          const noteEl = document.createElement("span");
          noteEl.className = "cell-note";
          noteEl.textContent = note;
          notesWrap.appendChild(noteEl);
        });
        button.appendChild(notesWrap);
      }

      button.addEventListener("click", () => {
        const x = Number(button.dataset.x);
        const y = Number(button.dataset.y);
        if (state.selectedTool === "X") {
          toggleCross(x, y);
        } else if (state.selectedTool === "NOTE") {
          toggleNote(x, y, state.selectedNoteToken);
        } else if (state.selectedTool === "ERASE") {
          eraseCell(x, y);
        } else {
          placeToken(state.selectedTool, x, y);
        }
        renderGrid();
      });

      grid.appendChild(button);
    }
  }
}

function renderToolPalette() {
  const palette = document.getElementById("tool-palette");
  if (!palette) {
    return;
  }

  const tools = [
    ...puzzleConfig.tokens.map((token) => ({ id: token.id, label: token.id, title: token.label })),
    { id: "X", label: "Cross", title: "Add or remove cross" },
    { id: "ERASE", label: "Erase", title: "Remove initial or cross" }
  ];

  palette.innerHTML = "";
  tools.forEach((tool) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tool-btn";
    button.textContent = tool.label;
    button.title = tool.title;
    button.dataset.toolId = tool.id;
    button.classList.toggle("is-active", tool.id === state.selectedTool);
    button.addEventListener("click", () => {
      state.selectedTool = tool.id;
      renderToolPalette();
      setStatus(`Tool selected: ${tool.title}`);
    });
    palette.appendChild(button);
  });
}

function renderNoteTokenPalette() {
  const palette = document.getElementById("note-token-palette");
  if (!palette) {
    return;
  }

  const noteTokens = (puzzleConfig.suspects || []).map((suspect) => suspect.id).filter(Boolean);
  palette.innerHTML = "";

  noteTokens.forEach((noteToken) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "note-token-btn";
    button.textContent = noteToken;
    button.classList.toggle("is-active", noteToken === state.selectedNoteToken);
    button.addEventListener("click", () => {
      state.selectedNoteToken = noteToken;
      state.selectedTool = "NOTE";
      renderToolPalette();
      renderNoteTokenPalette();
      setStatus(`Tool selected: Notes (${noteToken})`);
    });
    palette.appendChild(button);
  });
}

function renderClues() {
  const list = document.getElementById("clue-list");
  if (!list) {
    return;
  }

  list.innerHTML = "";
  puzzleConfig.clues.forEach((clue) => {
    const item = document.createElement("li");
    if (typeof clue === "string") {
      item.textContent = clue;
      list.appendChild(item);
      return;
    }

    if (clue.image) {
      item.classList.add("clue-item", "clue-item-with-image");
    } else {
      item.classList.add("clue-item-no-image");
    }

    if (clue.image) {
      const portrait = document.createElement("img");
      portrait.className = "clue-portrait";
      portrait.src = clue.image;
      portrait.alt = clue.speaker ? `${clue.speaker} portrait` : "Clue portrait";
      item.appendChild(portrait);
    }

    const body = document.createElement("div");
    body.className = "clue-body";

    const speaker = document.createElement("strong");
    speaker.className = "clue-speaker";
    speaker.textContent = clue.speaker || "";

    const detail = document.createElement("span");
    detail.className = "clue-detail";
    detail.textContent = clue.detail || "";

    body.appendChild(speaker);
    body.appendChild(detail);
    item.appendChild(body);
    list.appendChild(item);
  });
}

function getSuspects() {
  if (Array.isArray(puzzleConfig.suspects) && puzzleConfig.suspects.length) {
    return puzzleConfig.suspects;
  }

  return (puzzleConfig.tokens || [])
    .filter((token) => token.id !== "V")
    .map((token) => ({ id: token.id, label: token.label }));
}

function renderMurdererPanel() {
  const select = document.getElementById("murderer-select");
  if (!select) {
    return;
  }

  const suspects = getSuspects();
  select.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent =
    puzzleConfig.murdererPromptPlaceholder || defaultPuzzleConfig.murdererPromptPlaceholder;
  placeholder.selected = true;
  select.appendChild(placeholder);

  suspects.forEach((suspect) => {
    const option = document.createElement("option");
    option.value = suspect.id;
    option.textContent = suspect.label;
    select.appendChild(option);
  });
}

function setMurdererFeedback(message, stateClass) {
  const feedback = document.getElementById("murderer-feedback");
  if (!feedback) {
    return;
  }

  feedback.textContent = message;
  feedback.classList.remove("is-correct", "is-wrong");
  if (stateClass) {
    feedback.classList.add(stateClass);
  }
}

function checkMurdererGuess() {
  const select = document.getElementById("murderer-select");
  if (!select) {
    return;
  }

  if (!select.value) {
    setMurdererFeedback(
      puzzleConfig.murdererEmptyMessage || defaultPuzzleConfig.murdererEmptyMessage,
      "is-wrong"
    );
    return;
  }

  if (select.value === puzzleConfig.murdererId) {
    setMurdererFeedback(
      puzzleConfig.murdererSuccessMessage || "Correct. You named the murderer.",
      "is-correct"
    );
    return;
  }

  setMurdererFeedback(
    puzzleConfig.murdererFailureMessage || defaultPuzzleConfig.murdererFailureMessage,
    "is-wrong"
  );
}

function clearBoard() {
  state.placements = {};
  state.manualCrosses = new Set();
  state.notesByCell = new Map();
  setStatus("Board cleared.");
  renderGrid();
}

let revealedHintCount = 0;
let hintsVisible = true;

function renderHints() {
  const list = document.getElementById("hint-list");
  const nextButton = document.getElementById("show-next-hint");
  const hideButton = document.getElementById("hide-hints");
  const hints = Array.isArray(puzzleConfig.hints) ? puzzleConfig.hints : [];
  if (!list || !nextButton || !hideButton) return;

  list.hidden = !hintsVisible;
  list.innerHTML = "";
  hints.slice(0, revealedHintCount).forEach((hint) => {
    const item = document.createElement("li");
    item.className = "hint-card";
    const title = document.createElement("strong");
    title.textContent = hint.title || "Hint";
    const detail = document.createElement("p");
    detail.textContent = hint.detail || "";
    const placement = document.createElement("span");
    placement.className = "hint-placement";
    placement.textContent = hint.placement || "";
    item.append(title, detail, placement);
    list.append(item);
  });

  hideButton.hidden = !hintsVisible || revealedHintCount === 0;
  if (!hintsVisible) {
    nextButton.disabled = false;
    nextButton.textContent = `Show ${revealedHintCount} Revealed Hint${revealedHintCount === 1 ? "" : "s"}`;
  } else if (revealedHintCount >= hints.length) {
    nextButton.disabled = true;
    nextButton.textContent = "All 9 Hints Revealed";
  } else {
    nextButton.disabled = false;
    nextButton.textContent = `Show Hint ${revealedHintCount + 1} of ${hints.length}`;
  }
}

function showNextHint() {
  const hints = Array.isArray(puzzleConfig.hints) ? puzzleConfig.hints : [];
  if (!hintsVisible) {
    hintsVisible = true;
  } else if (revealedHintCount < hints.length) {
    revealedHintCount += 1;
  }
  renderHints();
  const cards = document.querySelectorAll(".hint-card");
  cards[cards.length - 1]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function hideHints() {
  hintsVisible = false;
  renderHints();
}

const rulesExampleSteps = [
  { title: "Note Possible Squares", src: "../Jedburgh_Town_Trail_Assets/created graphics/murdoku_rules_explainer1_1.png", alt: "Example showing Charlie noted as a possibility in each valid Office square" },
  { title: "Place a Confirmed Person", src: "../Jedburgh_Town_Trail_Assets/created graphics/murdoku_rules_explainer1_2.png", alt: "Example showing Charlie placed on the confirmed Office chair square" },
  { title: "Cross Out the Row and Column", src: "../Jedburgh_Town_Trail_Assets/created graphics/murdoku_rules_explainer1_3.png", alt: "Example showing the remaining squares in Charlie's row and column crossed out" }
];
let rulesExampleIndex = 0;
let rulesExampleReturnFocus = null;
let rulesExampleTouchStartX = 0;

function renderRulesExample() {
  const step = rulesExampleSteps[rulesExampleIndex];
  const image = document.getElementById("example-image");
  const dots = document.getElementById("example-dots");
  if (!step || !image || !dots) return;
  document.getElementById("example-step-label").textContent = `Step ${rulesExampleIndex + 1} of ${rulesExampleSteps.length}`;
  document.getElementById("example-dialog-title").textContent = step.title;
  image.src = step.src;
  image.alt = step.alt;
  document.getElementById("example-previous").disabled = rulesExampleIndex === 0;
  document.getElementById("example-next").hidden = rulesExampleIndex === rulesExampleSteps.length - 1;
  document.getElementById("example-finish").hidden = rulesExampleIndex !== rulesExampleSteps.length - 1;
  dots.innerHTML = "";
  rulesExampleSteps.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `example-dot${index === rulesExampleIndex ? " active" : ""}`;
    dot.setAttribute("aria-label", `Show example step ${index + 1}`);
    dot.setAttribute("aria-current", index === rulesExampleIndex ? "step" : "false");
    dot.addEventListener("click", () => { rulesExampleIndex = index; renderRulesExample(); });
    dots.append(dot);
  });
}

function openRulesExample() {
  const dialog = document.getElementById("rules-example-dialog");
  if (!dialog) return;
  rulesExampleReturnFocus = document.activeElement;
  rulesExampleIndex = 0;
  dialog.hidden = false;
  document.body.classList.add("example-open");
  renderRulesExample();
  document.getElementById("close-rules-example")?.focus();
}

function closeRulesExample(startSolving = false) {
  const dialog = document.getElementById("rules-example-dialog");
  if (!dialog) return;
  dialog.hidden = true;
  document.body.classList.remove("example-open");
  if (startSolving) {
    document.querySelector(".controls-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    rulesExampleReturnFocus?.focus();
  }
}

function handleRulesExampleKeydown(event) {
  const dialog = document.getElementById("rules-example-dialog");
  if (!dialog || dialog.hidden) return;
  if (event.key === "Escape") { closeRulesExample(); return; }
  if (event.key === "ArrowRight" && rulesExampleIndex < rulesExampleSteps.length - 1) { rulesExampleIndex++; renderRulesExample(); return; }
  if (event.key === "ArrowLeft" && rulesExampleIndex > 0) { rulesExampleIndex--; renderRulesExample(); return; }
  if (event.key !== "Tab") return;
  const focusable = [...dialog.querySelectorAll("button:not([hidden]):not(:disabled)")];
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

function initRulesExample() {
  const dialog = document.getElementById("rules-example-dialog");
  if (!dialog) return;
  document.getElementById("open-rules-example")?.addEventListener("click", openRulesExample);
  document.getElementById("close-rules-example")?.addEventListener("click", () => closeRulesExample());
  dialog.querySelector("[data-close-example]")?.addEventListener("click", () => closeRulesExample());
  document.getElementById("example-previous")?.addEventListener("click", () => { if (rulesExampleIndex > 0) { rulesExampleIndex--; renderRulesExample(); } });
  document.getElementById("example-next")?.addEventListener("click", () => { if (rulesExampleIndex < rulesExampleSteps.length - 1) { rulesExampleIndex++; renderRulesExample(); } });
  document.getElementById("example-finish")?.addEventListener("click", () => closeRulesExample(true));
  dialog.addEventListener("touchstart", (event) => { rulesExampleTouchStartX = event.changedTouches[0]?.clientX || 0; }, { passive: true });
  dialog.addEventListener("touchend", (event) => { const distance = (event.changedTouches[0]?.clientX || 0) - rulesExampleTouchStartX; if (Math.abs(distance) < 55) return; if (distance < 0 && rulesExampleIndex < 2) rulesExampleIndex++; else if (distance > 0 && rulesExampleIndex > 0) rulesExampleIndex--; renderRulesExample(); }, { passive: true });
  document.addEventListener("keydown", handleRulesExampleKeydown);
}

function init() {
  const image = document.getElementById("board-image");
  if (image) {
    image.src = puzzleConfig.boardImage;
  }

  renderPageCopy();
  renderToolPalette();
  renderNoteTokenPalette();
  renderClues();
  renderHints();
  initRulesExample();
  renderMurdererPanel();
  setMurdererFeedback("", "");
  renderGrid();
  setStatus(puzzleConfig.statusMessage || defaultPuzzleConfig.statusMessage);

  const clearBtn = document.getElementById("clear-board");
  clearBtn?.addEventListener("click", clearBoard);

  const checkBtn = document.getElementById("check-murderer");
  checkBtn?.addEventListener("click", checkMurdererGuess);

  document.getElementById("show-next-hint")?.addEventListener("click", showNextHint);
  document.getElementById("hide-hints")?.addEventListener("click", hideHints);
}

window.addEventListener("DOMContentLoaded", init);
