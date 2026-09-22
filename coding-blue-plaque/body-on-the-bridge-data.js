window.bridgeMysteryData = {
  title: "The Body on the Bridge",
  subtitle: "An 1896 Jedburgh mystery",
  categories: {
    suspects: { label: "Suspects", options: [
      {code:"GM",name:"Gregor McKechnie",image:"../Jedburgh_Town_Trail_Assets/created%20graphics/Gregor_McKechnie.png",description:"A stone mason and known robber who habitually carried a working stone."},
      {code:"SM",name:"Shirley MacKay",image:"../Jedburgh_Town_Trail_Assets/created%20graphics/Shirley_MacKay.png",description:"An excellent hockey player with the strength and skill to swing a wooden club."},
      {code:"NK",name:"Norman Kerr",image:"../Jedburgh_Town_Trail_Assets/created%20graphics/Norman_Kerr.png",description:"A known criminal who spent many evenings drinking with friends."},
      {code:"TP",name:"Tracy Pringle",image:"../Jedburgh_Town_Trail_Assets/created%20graphics/Tracy_Pringle.png",description:"A suspect said to act only when defending themself."}
    ]},
    motives: { label: "Motives", options: [
      {code:"R",name:"Robbery",description:"The victim was attacked for money or valuables."},
      {code:"J",name:"Jealousy",description:"Envy or romantic rivalry drove the attack."},
      {code:"V",name:"Vengeance",description:"The attack was repayment for an earlier wrong."},
      {code:"S",name:"Self-defence",description:"The suspect claimed the attack was necessary for protection."}
    ]},
    weapons: { label: "Weapons", options: [
      {code:"C",name:"Wooden Club",description:"A heavy wooden club recovered near the river."},
      {code:"P",name:"Poker",description:"An iron fireside poker found below the bridge."},
      {code:"S",name:"Stone",description:"A mason’s stone heavy enough to cause a fatal injury."},
      {code:"L",name:"Log",description:"A short length of timber recovered from the water."}
    ]},
    alibis: { label: "Alibis", options: [
      {code:"H",name:"Asleep at home",description:"The suspect claimed to have been asleep at home, without an independent witness."},
      {code:"B",name:"Away on business",description:"The suspect claimed to have been outside Jedburgh on business."},
      {code:"F",name:"With friends in the pub",description:"Several drinking companions could confirm this account."},
      {code:"W",name:"Out walking alone",description:"The weakest alibi: nobody could confirm the solitary walk."}
    ]}
  },
  clues: [
    "Shirley MacKay (SM), an excellent hockey player, carried the wooden club (C).",
    "The poker-owner (P) was the person suspected of acting in self-defence (S).",
    "Norman Kerr (NK) spent the night with friends in the pub (F).",
    "The vengeful suspect (V) claimed to be away on business (B).",
    "Gregor McKechnie (GM), a stone mason carrying a stone (S), was the known robber (R).",
    "The poker-owner (P) claimed to be asleep at home (H).",
    "Tracy Pringle (TP) would only ever act in self-defence (S).",
    "The jealous suspect (J) was accused of using the log (L).",
    "The killer had the weakest alibi: out walking alone (W)."
  ],
  solution: {suspects:"GM",motives:"R",weapons:"S",alibis:"W"},
  completion: "Gregor McKechnie committed the murder during a robbery, using the stone he carried as a mason. His claim that he was out walking alone was the weakest alibi.",
  fullSolution: [
    ["Gregor McKechnie","Robbery · Stone · Walking"],
    ["Shirley MacKay","Vengeance · Club · Business"],
    ["Norman Kerr","Jealousy · Log · Pub"],
    ["Tracy Pringle","Self-defence · Poker · Home"]
  ]
};
