window.matrixBoardPuzzleData = {
  pageTitle: "Murder in the Spread",
  heroTitle: "Murder in the Spread",
  heroSubtitle: "31 October 1842",
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
  context: [
    "A murder took place on Halloween 1842 in the Spread Eagle Hotel in Jedburgh — allegedly, possibly, probably, perhaps. Well, some say it really happened.",
    "But where exactly did the killing happen, and who delivered the fatal blow?",
    "There are 8 suspects and one victim on a 9 × 9 matrix.",
    "The victim is Jim Steele (J).",
    "The other people in the hotel were:",
    "Albert Straker (A)",
    "Bryan Lyall (B)",
    "Charlie Young (C)",
    "Dougie Lightbody (D)",
    "Tony Pringle (E)",
    "Kenny Ferguson (F)",
    "Graham Hamilton (G)",
    "Kevin Liddle (H)",
    "Some were known criminals; others had flawless records.",
    "Only one person can be in each row and each column.",
    "People can stand on blank squares, sit on chairs, and lie on beds, but not on blocked squares.",
    "Use the clues to work out where everyone stood, then identify who was alone with Jim Steele (J).",
    "Use note initials to track possibilities. When a placement is certain, place the full token and cross the rest of that row and column."
  ],
  contextImages: [
    {
      src: "../Jedburgh_Town_Trail_Assets/created graphics/Spread_Eagle_Hotel.png",
      alt: "The Spread Eagle Hotel in Jedburgh",
      caption: "The Spread Eagle Hotel"
    }
  ],
  rows: 9,
  cols: 9,
  boardImage: "../Jedburgh_Town_Trail_Assets/created graphics/Spread_Eagle_Floorplan.png",
  blockedCells: [
    { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 6, y: 1 }, { x: 8, y: 1 }, { x: 9, y: 1 },
    { x: 6, y: 2 }, { x: 9, y: 2 },
    { x: 3, y: 3 }, { x: 9, y: 3 },
    { x: 1, y: 4 }, { x: 5, y: 4 }, { x: 6, y: 4 },
    { x: 1, y: 5 }, { x: 5, y: 5 }, { x: 9, y: 5 },
    { x: 4, y: 6 }, { x: 7, y: 6 }, { x: 9, y: 6 },
    { x: 9, y: 7 },
    { x: 1, y: 8 }, { x: 7, y: 8 }, { x: 8, y: 8 }, { x: 9, y: 8 },
    { x: 1, y: 9 }, { x: 2, y: 9 }, { x: 4, y: 9 }, { x: 7, y: 9 }
  ],
  tokens: [
    { id: "A", label: "Albert Straker (A)" },
    { id: "B", label: "Bryan Lyall (B)" },
    { id: "C", label: "Charlie Young (C)" },
    { id: "D", label: "Dougie Lightbody (D)" },
    { id: "E", label: "Tony Pringle (E)" },
    { id: "F", label: "Kenny Ferguson (F)" },
    { id: "G", label: "Graham Hamilton (G)" },
    { id: "H", label: "Kevin Liddle (H)" },
    { id: "J", label: "Jim Steele (J)" }
  ],
  initialTokenId: "H",
  suspects: [
    { id: "A", label: "Albert Straker (A)" },
    { id: "B", label: "Bryan Lyall (B)" },
    { id: "C", label: "Charlie Young (C)" },
    { id: "D", label: "Dougie Lightbody (D)" },
    { id: "E", label: "Tony Pringle (E)" },
    { id: "F", label: "Kenny Ferguson (F)" },
    { id: "G", label: "Graham Hamilton (G)" },
    { id: "H", label: "Kevin Liddle (H)" }
  ],
  murdererPromptLabel: "Suspect",
  murdererPromptPlaceholder: "Choose suspect",
  murdererId: "D",
  murdererSuccessMessage: "Correct: In our puzzle, Dougie Lightbody was the murderer. Some say it was not even his first murder.",
  murdererFailureMessage: "Not quite. Re-check the clues and try again.",
  murdererEmptyMessage: "Pick a suspect before checking.",
  statusMessage: "Select a token and click a square to place it.",
  hints: [
    { title: "Place Kevin Liddle (H)", detail: "Kevin must be in the Lounge and beside a writing desk. Only one square satisfies both conditions.", placement: "H = (8,7)" },
    { title: "Place Tony Pringle (E)", detail: "Tony must be in the Lounge with Charlie and Kevin and be sitting on a chair. Kevin already occupies row 7 and column 8, leaving one available Lounge chair.", placement: "E = (6,8)" },
    { title: "Place Albert Straker (A)", detail: "Albert must be in the Kitchen and beside a table. Apply the occupied rows and columns to the available Kitchen squares.", placement: "A = (9,4)" },
    { title: "Place Charlie Young (C)", detail: "Charlie must be in the Lounge with Tony and Kevin. Albert, Tony and Kevin restrict the remaining rows and columns.", placement: "C = (5,9)" },
    { title: "Place Bryan Lyall (B)", detail: "Bryan must be beside one of the two herb pots. The remaining rows and columns leave one suitable square.", placement: "B = (4,3)" },
    { title: "Place Kenny Ferguson (F)", detail: "Kenny must be on a bed. The possible beds are in Bedroom 1 and the Kerr Suite. The occupied rows and columns place him in Bedroom 1.", placement: "F = (3,2)" },
    { title: "Place Graham Hamilton (G)", detail: "Graham must be beside a writing desk. The remaining unoccupied row and column determine his square.", placement: "G = (7,1)" },
    { title: "Place Dougie Lightbody (D)", detail: "Dougie must occupy a square whose column contains a writing desk in the same room. Apply the remaining row and column restrictions.", placement: "D = (1,6)" },
    { title: "Place Jim Steele (J)", detail: "The final unused row and column force Jim into the Office, alone with Dougie.", placement: "J = (2,5)" }
  ],
  clues: [
    { speaker: "Albert Straker (A)", detail: "Was in the Kitchen beside the table." },
    { speaker: "Bryan Lyall (B)", detail: "Was beside a herb pot." },
    { speaker: "Charlie Young (C)", detail: "Was in the Lounge with Tony Pringle (E) and Kevin Liddle (H)." },
    { speaker: "Dougie Lightbody (D)", detail: "Had a writing desk in his column, in the same room." },
    { speaker: "Tony Pringle (E)", detail: "Was sitting in a chair." },
    { speaker: "Kenny Ferguson (F)", detail: "Was on a bed." },
    { speaker: "Graham Hamilton (G)", detail: "Was beside a writing desk." },
    { speaker: "Kevin Liddle (H)", detail: "Was also beside a writing desk." },
    { speaker: "Jim Steele (J)", detail: "Was alone with the murderer." }
  ]
};
