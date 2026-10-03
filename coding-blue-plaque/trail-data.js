// Jedburgh Town Trail — data for all 25 stops.
//
// Coordinates below are the real walked positions captured with Location Pin Tool/location-pin-tool.html.
// To add or move a stop, plot it in the Pin Tool (Author mode), Export .js, and copy the lat/lng/radius
// across here — everything else on each entry (image, content) is layered on top.
// Audio: add audio:'../Jedburgh_Town_Trail_Assets/audio/your-file.mp3' to any pin when its unique
// recording is ready. Until then, the Trail Locations page uses the shared example recording.
const jedburghTrail = {
  name: 'Jedburgh Town Trail',
  orderMode: 'sequential',
  pins: [
    {id:'the-glebe', name:"The Glebe", lat:55.475424113692036, lng:-2.554855048656464, radius:30, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/glebe2.png', content:[
      '# The Blue Plaque Puzzle',
      'As you explore the trail, you can simply collect the blue plaques—or work out the stories and themes that connect them. Every blue plaque belongs to one of seven collections. Six collections tell stories from Jedburgh’s history. The seventh is different. You’ll discover why. Your first plaques are waiting at the Ramparts.',
      '# Historical Background',
      'The history of the Royal Burgh of Jedburgh dates back many centuries. Around AD 830, Bishop Ecgred of Lindisfarne formed two settlements on the Jed Water, calling them both by the same name - Gedwearde (Pronounced "Jedward" \u2013 twins called Jedward!). The name meant \u201cthe enclosed settlement by the River Jed\u201d - which dates from around 1050. The settlements were created sometime before this making Jedburgh at least 1,000 years old.',
      'By the mid 16th century, the name \u2018Jedworth\u2019 was being used, even today locally the town is referred to as \u2018Jeddart\u2019 or \u201cJethart\u201d. Situated close to the National Border between Scotland and England, the town saw more than its fair share of turmoil. During the Wars of Independence in the 13th and 14th centuries, the English captured Jedburgh on numerous occasions.',
      'The town and Abbey were burned three times in the 15th century by the English, providing evidence of the strategic value of the town and the incendiary relationship with our southern neighbbours. The 16th century was no less troublesome and several attempts were made to restore order to the area. The English attacked and captured the town in 1544 as part of the \u201cRough Wooing\u201d and a year later, the Earl of Hertford invaded Scotland on the orders of Henry VIII of England and laid waste to vast tracts of southern Scotland.',
      {type:'image', src:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/rough_wooing.png', alt:'The Rough Wooing', caption:'The Rough Wooing'},
      'The Union of the Crowns in 1603 ended cross-Border warfare and brought about an increase in trade. In 1707, the Union of the Parliaments had further ramifications for trade between the two countries. The \u2018Treaty of Union\u2019 was supposed to be to the equal benefit of both Kingdoms but punitive taxes on traditional Scottish goods saw a decline in industries such as tanning and malting, particularly in Jedburgh. Many people left the Border towns to find work elsewhere. Some left for Ulster, others emigrated to the New World and played prominent roles in American independence.',
      'Today, the town retains largely the same plan as it had centuries ago, comprising the High Street and Castlegate with closes and tofts running at right angles to these main streets, similar to the Royal Mile in Edinburgh.',
      'Jedburgh lies on the A68 from Edinburgh. The quiet nature and great beauty of the town and its Abbey make it an essential stop for tourists from all over the world. The sight of the Abbey as you approach from the south gives a real sense of the history of the town you are entering.',
      '# Just for Fun',
      'A man was shot at the Glebe, and suspect Wull Wylie gave three conflicting statements about where he had locked his shotgun. If exactly one statement was true, can you locate the gun? (The murders are ficticious by the way.)',
      {type:'link', href:'glebe-murder.html', label:'🔎 Glebe Murder Part 1'}
    ]},
    {id:'huttons-unconformity', name:"Hutton\u2019s Unconformity", lat:55.47513376055063, lng:-2.5557696819305424, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/hutton2.png', content:[
      '# The place that helped to redefine the Earth',
      'Continue out of town from the Abbey, cross the Jed Water and enter the large car park on your right. At the rear of the car park, by the Jed Water is a monument to \u2018Hutton\u2019s Unconformity\u2019.',
      'This monument celebrates one of the most important geological sites in the world. James Hutton, a farmer and doctor from Duns in Berwickshire, conceived a theory about the formation of the Earth based upon what he saw in the geological formation of the ground at Siccar Point on the Berwickshire coast and here, in Jedburgh at Inchbonny \u2013 less than a mile from here.',
      {type:'image', src:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/inchbonny.png', alt:'Inchbonny', caption:'Inchbonny'},
      'Whilst visiting Allar\u2019s Mill on the Jed Water, Hutton was delighted to see horizontal bands of red sandstone lying \u2018unconformably\u2019 on top of near vertical and folded bands of rock. He published his \u2018Theory of the Earth\u2019 in 1788 and has since become known as the \u2018founding father\u2019 of modern geology. Scotland and England were once separate landmasses divided by a deep ocean. Over 450 million years ago, they collided causing vertical bands, then sediment was laid down during the next few million years forming bands of sandstone. Hutton was not able to date the geological events as we can today, and he thought the sandstone had been deposited in the sea. It must be remembered that he lived in a time where the age of the world was estimated to be between 6,000 and 40,000 years old.',
      'Based on what he learned at Inchbonny, Hutton challenged the established philosophical and theological order when he \u201clooked through the abyss of time and found no vestige of a beginning and no prospect of an end\u201d and realised that the formations he found here required the Earth to be very old indeed.',
      'The James Hutton Institute, based in Aberdeen, carries on the work of Hutton and others at sites in Scotland and further afield. The institute is world renowned, and the logo is based on the Inchbonny Unconformity here in Jedburgh.',
      {type:'image', src:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/hutton_institute_logo.png', alt:'The James Hutton Institute logo', caption:'The James Hutton Institute logo'},
      '# Just for Fun',
      'Can you put the events that created Hutton\u2019s Unconformity into chronological order?',
      {type:'link', href:'geological-timeline.html', label:'🪨 Solve the Geological Timeline'}
    ]},
    {id:'abbey', name:"Abbey", lat:55.476012414284924, lng:-2.554382979869843, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/abbey2.png', content:[
      '# Jedburgh Abbey',
      'There has been a religious foundation associated with Jedburgh for many centuries. Ecgred, Bishop of Lindisfarne in AD 830, granted land to the church of Lindisfarne and a place of worship was built in this area. There is no known building on this site until the 11th century.' ,
      'A priory was founded by King David I (1124-53) in 1138 when he invited Augustinian canons from Beauvais in France to settle in Jedburgh. By 1154, the status of the priory had been raised to that of an Abbey.',
      'The grandest Royal event that took place in the town was the second marriage of King Alexander III (1241-1286) to Yolande (daughter of the Duke of Dreux from France) in October 1285, during which time the Royal party would have stayed at the Castle. It was a great honour for any town to be visited by the King but to have a royal wedding as well would have been a cause for widespread celebration. Imagine the buzz that there would have been as visitors and officials gathered from Scotland and France. The ceremony, according to legend, was marred by the appearance of a ghostly apparition, foretelling of Alexander\u2019s death within a year.',
      {type:'image', src:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/alexanders_wedding.png', alt:"Alexander III's wedding", caption:"Alexander III's wedding"},
      'Sure enough, the King was killed when his horse fell from a cliff in Fife, plunging Scotland into turmoil and eventually leading to the Wars of Independence \u2013 with William Wallace leading the Scots to a remarkable victory at Stirling Bridge in 1297.',
      'The first attack on the Abbey was in 1305, the same year that William Wallace was executed in London. It was in the early phases of the Wars of Independence, when it was wrecked and plundered by the English under Sir Richard Hastings. The Abbey was thrice ravaged in the 15th century, in 1410, 1416 and again in 1464.',
      'In 1523, English troops under the Earl of Surrey, put the Abbey to the torch once more. Repair work was undertaken only to have the buildings burned again by Sir Ralph Ewer in 1544 and the Earl of Hertford in 1545. Hertford was carrying out the orders of Henry VIII who wanted Queen Mary to marry his son - Prince Edward - but his \u2018Rough Wooing\u2019 proved unsuccessful. English forces occupied the town once more in 1548 but the following year, the Scots were reinforced by a strong contingent of the French army and the English withdrew.',
      'The Abbey which, by this time, was ruinous, was suppressed in 1559 as part of the religious Reformation in Scotland.',
      {type:'image', src:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/reformation.png', alt:'The Reformation', caption:'The Reformation'},
      'This meant that the monks could no longer recruit new members to the order. The Abbey was then used as the parish church until 1875 when the new parish church was built on the opposite side of the river to the Abbey. The Abbey then ceased to be a place of worship. After this, the architect Sir Robert Rowand Anderson, under the guidance of the Marquis of Lothian, started restoration work on the Abbey.',
      'In 1913, the Abbey was taken into guardianship by H.M. Office of Works and is now a Historic Scotland monument. The Visitors\u2019 Centre has a small museum and a video display explaining more about the Abbey. If you make a visit to the Abbey, you should expect your visit to last at least one hour, and an entrance fee is charged.',
      {type:'video', src:'../Jedburgh_Town_Trail_Assets/video/jedburgh-abbey.mp4', poster:'../Jedburgh_Town_Trail_Assets/video/jedburgh-abbey-poster.png', credit:'Supplied courtesy of Visit Scotland Tours - John MacEachen'},
      'On leaving the Abbey, return up Abbey Place, either along the ramparts or by way of the pavement. In the 18th century, Abbey Place is where the Jedburgh cattle market was held. Notice on your right the Carters\u2019 Rest which was at one time the Jedburgh Grammar School until the new building on High Street was built in 1882. One of the more famous ex-pupils being Sir David Brewster who went on to become Principal of Edinburgh University.',
      '# Just for Fun',
      'On the eve of a royal wedding, the unpopular, and entirely fictional, Bishop of Bonchester was found slain. Can you find the evidence to identify the culprit?',
      {type:'link', href:'bishop-of-bonchester.html', label:'🔎 Who Killed the Bishop of Bonchester?'}
    ]},
    {id:'war-memorial', name:"War Memorial", lat:55.47630580122155, lng:-2.5542193651199345, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/callant.png', content:[
      '# War Memorial',
      'Once a year during the summer, the War Memorial is the centre of festivities when crowds gather during the Jethart Callant’s Festival to see the town’s principal—the Callant—receive the Jethart flag. He then carries the flag with him on horseback during Festival Day. At the end of Festival Day, respect is paid at the War Memorial to all those who lost their lives in armed conflict. Every name on the stone panels represents a family tragedy. Jedburgh is a small town that lost so many people whose memory should be kept large in our memories.',
      {type:'external-link', href:'https://www.youtube.com/watch?v=A7CYsqpll9s', label:'▶ Jathart Callant’s Festival'},
      'The War Memorial is not about war—it’s about the people and their stories: one who received a hero’s welcome, one who was discharged from the Army before his heroic actions, and another whose actions saved thousands of lives.',
      'Study the names on the panels and find the following unique heroes.',
      'The highest-ranking Jedburgh soldier to be honoured was Major David Hunter, KOSB.',
      'The only person to receive the George Cross was Francis Anthony “Tony” Fasson, Royal Navy.',
      'John Daykins, VC, MM, a recipient of the Victoria Cross, is represented on the War Memorial but not on the main panels.',
      'The most decorated soldier—by a considerable margin—was George Stuart Henderson, VC, DSO & Bar, MC.',
      {type:'story-panel', title:'Henderson’s Story', label:'Read about his medals', paragraphs:[
        'Henderson was one of the most highly decorated soldiers ever. Of the hundreds of thousands of officers who served Britain and the Empire from 1914 onwards, only 12 achieved Henderson’s extraordinary combination of the Victoria Cross, Military Cross and two awards of the Distinguished Service Order.',
        'His Military Cross was awarded for gallantry near Ypres in 1915. The Distinguished Service Order followed for actions in Mesopotamia in 1916, with the Bar in 1917. His posthumous Victoria Cross was earned in Iraq in 1920. You may have spotted that Henderson died after the First World War but is listed anyway as a mark of respect.',
        'Was Henderson denied a George Cross? No—the George Cross was introduced only in 1940, 20 years after Henderson died. It is considered equal in status to the Victoria Cross, but is awarded for courageous action not in the direct face of the enemy.'
      ]},
      {type:'story-panel', title:'Daykins’ Story', label:'Read about his VC', paragraphs:[
        'Daykins was brought up on Howden Farm near Jedburgh. He was educated at Jedburgh Grammar School and later became a member of the Jedburgh Rifle Club.',
        'When war broke out, Daykins enlisted in the Lothians and Border Horse on 13 September 1914. He went to France in September 1915, serving during the closing stages of Loos, and subsequently served in Salonika, at Vimy Ridge and around Ypres.',
        'Then his military career took a remarkable turn. He contracted trench fever in 1916, was hospitalised and eventually discharged as medically unfit. He refused to accept that verdict. After two unsuccessful attempts to re-enlist, he finally succeeded early in 1917, initially joining the Westminster Dragoons. He was subsequently transferred to the 2/4th Battalion, York and Lancaster Regiment. That decision ultimately led to his Victoria Cross.',
        'Only 22 days before the Armistice, Daykins was a Corporal acting as Sergeant and fighting at Solesmes in northern France. His platoon had been badly reduced. Daykins and 12 remaining men worked their way towards the church despite strong German resistance, where they encountered a German machine-gun position.',
        'Daykins’ small group rushed the machine gun and fierce hand-to-hand fighting followed. The official citation records that Daykins personally accounted for several of the enemy and that his party captured 30 prisoners.',
        'But that was not the action that truly distinguished the story. Another German machine gun was preventing part of his company from advancing. Daykins went after it alone. Under heavy fire, he worked his way towards the position. A short time later he returned with 25 German prisoners—and their machine gun. For this he received the Victoria Cross.',
        'When Daykins returned home, Jedburgh gave him a hero’s reception. He travelled from Howden Farm towards the town in a carriage. At the boundary, he was met by the Provost and Town Council. The horse was then unharnessed and soldiers took its place, pulling Daykins through Jedburgh in procession to the Town Hall.',
        'He was made an Honorary Burgess of Jedburgh. His Burgess Ticket was presented in a particularly local object: a silver-mounted casket made from the wood of the Capon Tree. The people of Jedburgh also presented him with a silver tea service and a canteen of cutlery.'
      ]},
      {type:'story-panel', title:'Fasson’s Story', label:'Read about U-559', image:'../Jedburgh_Town_Trail_Assets/created graphics/U559.png', imageAlt:'The damaged German submarine U-559 at sea during the recovery of its secret codebooks', paragraphs:[
        'Another unique casualty of war commemorated here is Francis A. B. Fasson—Lieutenant, GC, Royal Navy.',
        'Fasson was educated at Jedburgh Grammar School and entered the Royal Navy on 6 September 1930.',
        'On 30 October 1942, HMS Petard, together with several other ships, attacked and badly damaged the German submarine U-559. Its crew abandoned the vessel, with seven dead and 38 survivors.',
        'Fasson and Able Seaman Colin Grazier, together with NAAFI canteen assistant Tommy Brown, jumped from Petard to the deck of U-559 and entered the sinking submarine. Water was pouring through seacocks left open by the Germans. Working in complete darkness, and knowing that the submarine could sink without warning, Fasson and Grazier located codebooks which Brown carried up to men in a whaler. They continued searching until the submarine suddenly sank like a stone, drowning Fasson and Grazier.',
        'Fasson and Grazier were subsequently awarded the George Cross, while Brown received the George Medal.',
        'The material retrieved by Fasson, Grazier and Brown was immensely valuable to the codebreakers at Bletchley Park, who had been unable to read U-boat Enigma traffic for ten months. The captured documents allowed them to read the ciphers for several weeks and helped them break U-boat Enigma thereafter.',
        'By 13 December 1942, the team at Bletchley Park had broken the U-boat message codes. This, together with the war-gaming work of the Wrens in Liverpool, helped give the Allies the upper hand in the Battle of the Atlantic. Admiral Karl Dönitz withdrew the U-boats from the North Atlantic on 24 May 1943.',
        'The efforts of Fasson, Grazier and Brown saved thousands of lives.'
      ]},
      '# Just for Fun',
      'Set three cipher rotors to J E D and use a simplified Enigma-style machine to decode an intercepted five-letter message.',
      {type:'link', href:'enigma-challenge.html', label:'⚙ Decode the Enigma Challenge'}
    ]},
    {id:'ramparts', name:"Ramparts", lat:55.477041539166855, lng:-2.554718255996704, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/ramparts2.png', content:[
      '# Ramparts',
      'When French troops reinforced the Scots who were defending Jedburgh in 1548, from the English army, their commander General D\u2019Esse constructed gun platforms on the eastern side of the Abbey to afford it some protection. It is from these gun platforms that this raised area takes its name. Soil excavated from the ramparts area in the early 20th Century was used to create the sloped bankings of the local rugby ground, Riverside Park. The soil would have contained some fragments of human remains given the closeness to the graveyard \u2013 so even when no one is watching, Jed-Forest Rugby Club has a permanent crowd!',
      {type:'image', src:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/cannons.png', alt:'The cannons', caption:'The cannons'},
      '# Glebe Murder Part 2',
      'Alan Renton told the truth on only three days of the week. Can you work out when his curious statement was made?',
      {type:'link', href:'all-lies-and-jest.html', label:'🎭 Glebe Murder Part 2: All Lies and Jest'}
    ]},
    {id:'public-hall', name:"Public Hall", lat:55.476904729431396, lng:-2.554061114788056, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/public_hall2.png', content:[
      '# Public Hall',
      'The Public Hall was designed in 1900 by the architect J. P. Alison and completed in 1901 in a style described in a contemporary journal as \u201can adaptation of the later Renaissance period\u201d. The Public Hall was designed to replace the town\u2019s Corn Exchange, which had burned down in 1898. The Hall can accommodate around 800 people. Below ground level, two rooms from an old malt barn remain. The malt barn at one time served as the town armoury. The Hall itself is quite grand with a barrel vaulted ceiling supported by pilasters and ornamental scrolled brackets, called consoles. There is a gallery supported on cast iron columns, providing further seating for the public. Pilaster - a rectangular feature in the shape of a pillar.',
      'Beside the Hall is Murray\u2019s Green car park, which was upgraded by Scottish Borders Council in 1999. During the excavation work, some bones were found which probably related to a burial in the Abbey as this area would have been part of the Abbey Precinct.',
      '# An Anthemic Connection?',
      'Jedburgh has two main \u201cTown Songs\u201d - \u201cJethart\u2019s Here\u201d and \u201cThe Brave Lads O\u2019 Jethart\u201d.',
      'This hall is where \u201cThe Brave Lads O\u2019 Jethart\u201d was performed for the first time in 1919.',
      'It is a song that includes references to Bannockburn, Freedom, Scotland\u2019s Rights and Victory. It was performed often in the early part of the 20th century and gained greater prominence when the Callant\u2019s Festival started in 1947. It is sung often to this day.',
      'It is likely that folk-artists touring the Scottish Borders would have heard the song. That would have included The Corries in the early 1960s. They might also have heard it sang at the Waverley Bar which was the epicentre of the Scottish Folk Music scene.',
      'In 1968, Roy Williamson of the Corries wrote a song that included the same ideas of Bannockburn, Freedom, Scottish Rights and Victory. He called that song \u201cFlower of Scotland\u201d which has become Scotland\u2019s National Anthem.',
      'Coincidence? Possibly.',
      'But the lyrics to The Brave Lads o Jethart include the phrase \u201cFlower of Scotland\u201d - the first time it was captured in print.',
      'So, did Jedburgh\u2019s song inspire Scotland\u2019s?',
      'We\u2019ll let you make your own mind up on that one.',
      '# Samuel Rutherford',
      'Samuel Rutherford went to Jedburgh Grammar School - now the site of the Carter\u2019s Rest. He was a remarkably man. Born in 1600, after school in Jedburgh he went to Edinburgh University to study divinity. He then became a minister in the Church of Scotland and went on to become the professor of Divinity at the University of St Andrews. In 1644 he wrote an incendiary book \u201cLex Rex\u201d which set out clear arguments that Royal powers were derived from laws made by citizens. The Law was King, the King was not the Law. At this time the country was in turmoil - King Charles I was fighting for his life, and to retain the power that he, and his predecessors, had argued were god-given. In 1660, when Charles II was restored to the throne, Lex Rex was banned and burned. Rutherford was summoned to Edinburgh to face charges of treason - he died in 1661 before he could be tried. His book influenced the work of later writers such as John Locke. Rutherford is sometimes presented as a direct ancestor of modern democracy or even of the American Revolution. There is an intellectual relationship\u2014ideas such as government by consent, rulers being subject to law, and legitimate resistance subsequently became central to constitutional thought.',
      '# Just for Fun',
      'Young Rob Keiller needs to copy a four-colour dancehall pass-out. Can you decipher the dot pattern from his failed attempts?',
      {type:'link', href:'dancehall-passouts.html', label:'🔴 Decode the Dancehall Pass-outs'}
    ]},
    {id:'newgate', name:"Newgate", lat:55.47737748105792, lng:-2.555353939533234, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/newgate2.png', content:[
      '# Newgate',
      'This arch - which was at one time closed off by a pair of folding gates - has doors on either side which lead to cells. These are quite small and windowless. Just imagine the conditions for the prisoners during the cold, dark winter days. On the level above was the cell for condemned prisoners and they would have had a bit more to think about than the condition of their surroundings. That having been said, crime was low in Jedburgh in the latter part of the 18th century when only five people were condemned to death \u201cbut not one of them for murder\u201d.',
      'If you look up when you are under the arch, you will see that timber joists form the ceiling and not vaulting as you might expect. Once through the arch, you get another view of the Abbey. Through the railings you can see the old cemetery with many gravestones dating from the 17th century. The ground and the nave of the Abbey itself would have been used for burials from the time of its foundation. In 1993, during the laying of a gas pipe in Abbey Place \u201cseveral skulls\u201d were discovered, thereby extending the known graveyard limit towards the north side of the road. Walk the short distance into Market Place.',
      '# Just for Fun',
      'Ten captives have one chance to earn their freedom. Which hat-guessing strategy can guarantee their early release?',
      {type:'link', href:'early-release.html', label:'🎩 Solve Early Release'}
    ]},
    {id:'market-place', name:"Market Place", lat:55.477591813528356, lng:-2.5553405284881596, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/market_place2.png', content:[
      '# Market Place',
      'This was the centre of the Burgh\u2019s social and economic life. Here traders would come from all over Scotland and even the continent to sell goods. In a law passed by King William I (1165-1214) it was a requirement that all goods for sale in Burghs be presented at the \u201cmercat and mercat cross\u201d. Mercat crosses signified the trading status of a town or village and served additional functions as sites of proclamations and punishment.',
      'Weekly markets were held on Mondays and Fridays, although this was changed in 1639 to Tuesday and Friday to stop people having to travel on a Sunday. The Cross was removed in the 19th century as part of the \u2018improvements\u2019 carried out to the town. The former location of the cross is marked by a circular panel set in the street, which is still used as the start point for the Jedburgh Handba\u2019 game.',
      'Also set in the ground of Market Place is a plaque marking the position of a tower which once stood here, the Kirkwynd Tower, which guarded the approach to the Abbey from Market Place. The first official record of the tower is in 1551 but it may have pre-dated this. By 1787, the tower was in a dangerous condition and roofless, finally being demolished in 1791. Notice the Jubilee Fountain of 1899, built to celebrate the Diamond Jubilee of Queen Victoria. This is an ornamental gothic column, which is topped by a unicorn - the Heraldic supporter of the Royal Scottish Arms - holding the Burgh shield. There are cast iron lamp fittings grouped around the top of the column.',
      '# Glebe Murder Part 3',
      'Eight members of an anonymous dating club shared supper at the Royal Hotel. Can you reconstruct the seating plan and identify the victim?',
      {type:'link', href:'date-night.html', label:'🍽 Glebe Murder Part 3: Date Night'}
    ]},
    {id:'canongate', name:"Canongate", lat:55.477669337751884, lng:-2.555080354213715, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/canongate2.png', content:[
      '# Canongate',
      'This was the primary entrance to the town, leading as it did from the Canongate Bridge. At the end of the bridge would have been the Canongate Port, a fortified entranceway. Number 2 Canongate is built on the foundations of an earlier building and these are still visible in the basement. There are many fine 18th century buildings including the white building on the left. Notice the two small circular windows on the first and second floors. Next door is number 10, the site of the former Black Bull Inn.', 
      'Prior to 1759, the centre of Canongate had a group of buildings running down its length. This was called the \u2018Tongue o\u2019 the Canongate\u2019. The town\u2019s Tolbooth stood at the Market Place end before it was replaced by Newgate. Here also is the Royal Hotel - which was previously the Harrow Inn. It was perhaps renamed after the visit of royalty to the town although this is not certain. Past the Royal Hotel, on your left was the site of a house in which Robert Burns stayed on his visit to Jedburgh in 1787 when he was made a Freeman of the Royal Burgh. There is a plaque - a profile of Burns originally with a light blue background and the head picked out in gold leaf - marking the spot of the house.',
      '# Just for Fun',
      'The Tolbooth once checked weights and measures. Can you identify one sack of genuine gold coins using only a single weighing?',
      {type:'link', href:'weights-and-measures.html', label:'⚖️ Solve Weights and Measures'}
    ]},
    {id:'sheriff-court', name:"Sheriff Court", lat:55.47743220435266, lng:-2.5556945800781254, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/sheriff_court2.png', content:[
      '# Sheriff Court',
      'On the left, just as you leave The Market Square, is Jedburgh Sheriff Court, originally the site of the Council House. Built in 1812 by French prisoners of war, a courtroom was added in 1861 to the designs of the Edinburgh architect David Rhind. Sir Walter Scott, who made his first appearance as a defence lawyer here in 1793, often visited the previous court building. There is a plaque (on the Market Place side of the building) dating from 1932 to commemorate the centenary of Scott\u2019s death.',
      'The building is still used as a court, and justice is regularly dispensed from here. As you continue up Castlegate, next door to the Sheriff Court is the town\u2019s Police station. On your left, after the police station is a red sandstone building, which is the town\u2019s small Masonic Lodge designed by J.P. Alison in 1903. Notice the panels above the doors. That on the left reads \u201cIN THE LORD IS ALL MY TRUST\u201d and the one over the right door reads \u201cANNO DOMINI 1903\u201d, although this is now badly eroded (the panel, not the trust). On this site was the town\u2019s flesh market where meat was sold. On the road was the lawn market where goods such as linen were traded.',
      '# Glebe Murder Part 4',
      'The investigation reaches the courtroom. Can you solve the sergeant\u2019s logic problem before the Sheriff delivers the final verdict?',
      {type:'link', href:'the-courtroom.html', label:'⚖️ Glebe Murder Part 4: The Courtroom'}
    ]},
    {id:'abbey-close', name:"Abbey Close", lat:55.476792241070925, lng:-2.556330263614655, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/abbey_close2.png', content:[
      '# Abbey Close',
      'This now quiet cul-de-sac provided access to the ceremonial West Door of the Abbey. David\u2019s Tower (or D\u2019Abbie\u2019s Tower as it is sometimes called) was the site of the residence of Bishop David Panter in 1552. This once guarded the approach to the Abbey and was located at the junction of Abbey Close and Castlegate. Demolition of the tower took place some time in the mid to late 17th century. Within Abbey Close itself, you will see on your right a building called \u2018Wrens Nest\u2019 which was built in the early 18th century. King James VI granted the site in 1610 to Alexander, Earl of Home. The house, which occupied the site at that time, was called Wrain\u2019s Nest. Later in the 17th century, the house passed to the Laird of Edgerston who may have been responsible for the building that you see today.',
      'In 1821, Jedburgh Academy took possession of the building and schoolrooms were built in 1843, only to be burnt down in 1911. If you look at the gable heads, you will see the initials GF and MM, standing for George Fife (the headmaster of the Academy) and Marion Millar, whom he married in 1862. The Academy merged with the Grammar School at the beginning of the 20th century and the building has since been converted into two dwellings.',
      'On the wall between Numbers 6 and 7 is a stone plaque commemorating the fact that the author William Wordsworth and his sister Dorothy stayed for a while in a house on this site during their visit to Scotland in 1803. Whilst there, they were visited by Sir Walter Scott who doubtless told them many tales of the Borders.',
      'This was also the site of Mary Somerville\u2019s house. She was the first person to be called a scientist and a mathematician with a keen interest in astronomy. She predicted the existence of Neptune before it was discovered. Somerville College for ladies at the University of Oxford was named after her.',
      {type:'image', src:'../Jedburgh_Town_Trail_Assets/created graphics/mary_somerville.png', alt:'Portrait of Mary Somerville', caption:'Mary Somerville'},
      'Return to Castlegate and continue uphill into the Townhead area. The building that projects out on the left hand side is Number 48 Castlegate, dating from the 17th century. From here upwards, the houses mostly date from the 19th century but all have typically narrow strips of gardens or tofts to the rear. When Number 60 Castlegate was reconstructed in the early 20th century, it was found that much of the paving in the garden consisted of tombstones from the Abbey. Clearly, the ruins of the Abbey were used as a source of stone for the people of Jedburgh. If you look up at the buildings on your right, you will see a stone carving of a bull. This came from the former coaching inn, the Black Bull, which is now Number 10 Canongate.',
      '# Just for Fun',
      'Bryan and Richie can see everyone’s rosette except their own. Both men pass when asked to name their colour. Can their uncertainty reveal the colour pinned to your jacket?',
      {type:'link', href:'callants-rosette-challenge.html', label:'🔴 Take the Callant’s Rosette Challenge'}
    ]},
    {id:'castle-jail', name:"Castle Jail", lat:55.47438430512205, lng:-2.5588434934616093, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/castke_jail2.png', content:[
      '# Jedburgh Castle Jail',
      'This was built on the site of a Royal Castle, which had been constructed to defend the town from southern attacks. The Royal Castle would have overlooked the entire town and a good impression of the commanding prospect can be gained from the brow of the hill. Although it is not certain exactly when the castle was built, it was in existence in the 12th century as it was here that King Malcolm IV died in 1165.',
      'The grandest Royal event that took place in the town was the second marriage of King Alexander III (1241-1286) to Yolande (daughter of the Duke of Dreux from France) in October 1285, during which time the Royal party would have stayed at the Castle. It was a great honour for any town to be visited by the King but to have a royal wedding as well would have been a cause for widespread celebration. Imagine the buzz that there would have been as visitors and officials gathered from Scotland and France. The ceremony, according to legend, was marred by the appearance of a ghostly apparition, foretelling of Alexander\u2019s death within a year.',
      'Sure enough, the King was killed when his horse fell from a cliff in Fife, plunging Scotland into turmoil and eventually leading to the Wars of Independence with England. Whoever controlled the Castle controlled the town and much of southern Scotland, so Jedburgh was vital to the English in their attempts to subjugate Scotland.',
      'During the late 13th and early 14th centuries when the Wars of Independence were at their height, there were several occasions when the Castle passed back and forth between Scottish and English control. King Edward I of England [\u201cThe Hammer of the Scots\u201d] visited Jedburgh at least once during his reign and he doubtless looked from the castle to the town below. By the 15th century, the Scots had had enough of the frequent changes in control and demolished the Castle in 1409 on the orders of Regent Albany.',
      'By 1819, all that was left on the hill was the town\u2019s gallows. The following year, work started on the construction of a prison, based on the design principles of the penal reformer John Howard. No longer a prison, the buildings are now used as a local history museum including displays on prison life, and here you can see videos on local events such as Handba\u2019 and the Jethart Callant\u2019s Festival. The Museum is open from late March until the end of October and an entrance fee is charged. Return down Castlegate.',
      'Number 91 (at the head of Castlegate) is a good example of 1930\u2019s baronial style public housing. The semicircular tower with its bellcast roof to the left of the building, is an elegant feature. Number 89 is thought to occupy the site of the Townhead Port, the former southern entrance to the town. As you head back down the hill, the buildings are of mixed age, ranging from mid 18th century to late 19th century. Halfway down, set a short distance back from the road, is the Glenbank Hotel dating from the early 19th century, which is plain but well proportioned. As you get nearer to Market Place, you will see that most of the buildings have been modernised but the layout of wynds and closes to the rear remains almost unchanged. Continue downhill to the Public Library.',
      '# Just for Fun',
      'The cemetery behind the castle, Castlewood, needs its daily inspection. Can you use Celia’s route clues and row and column totals to guide Simon around every required square?',
      {type:'link', href:'inspect-the-cemetery.html', label:'🪦 Inspect the Cemetery'}
    ]},
    {id:'library', name:"Library", lat:55.47723307199863, lng:-2.5560620427131657, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/library2.png', content:[
      '# Jedburgh Public Library',
      'This building replaced the 1884 public library on High Street. It was completed in 1900 to the designs of George Washington Browne who also designed public libraries in Kelso and Edinburgh. Andrew Carnegie and his wife returned to Jedburgh in May 1900 to open it. The building is reminiscent of grand 16th century Scottish architecture and is not at all out of place here. Above the doorway there is a carved panel which says “LET THERE BE LIGHT”. The ground floor is built on a raised basement and is reached by a set of six steps. The library has a wonderful arched window which occupies a large proportion of the front wall, allowing light to flood into the building. The librarian was originally provided with a flat above the library but this was converted some years ago to provide offices for the Registrar. The next building on your left as you go downhill is known as Prince Charlie\u2019s House.',
      '# Just for Fun',
      'Rob Cockburn’s nearby grocery shop challenged children with three wrongly labelled fruit bags. Can you draw just one fruit and identify the true contents of every bag?',
      {type:'link', href:'cockburns-conundrum.html', label:'🍎 Try Cockburn’s Conundrum'}
    ]},
    {id:'prince-charlies-house', name:"Prince Charlie\u2019s House", lat:55.47741852353612, lng:-2.5561398267745976, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/prince_charlie2.png', content:[
      '# The Jacobite Young Pretender',
      'During the 1745 attempt to restore the Stuart Monarchy, Prince Charles Edward Stuart - Bonnie Prince Charlie - is said to have stayed in this house on 6 and 7 November whilst making towards England with his army of supporters. A stone plaque on the first floor records this event. There was a complicated sundial at second floor level, which bore the Latin inscription “FUMIT CUNCTUS NOVANTHUS”, (which is grammatically very confused) although the sundial and the arms have now become badly eroded. An unusual feature of the sundial was its bowl and slab faces. Most of the building has been restored or rebuilt and little of the original fabric remains. Enter Blackhills Close and walk through (under) the buildings, and you will see some interesting features where you emerge, including an ornate doorway.',
      'Return to Castlegate and head through Cornelius Close (but mind your head!) to emerge once more to the rear of the properties. Here you will see a drum staircase on your left, which was added in 1978 to the rear of Numbers 3-5 Castlegate (which date from the late 17th century) and replaced a range which extended back from the building. Although this is a later addition, it returns the building to something like its original plan. These Closes give a sense of what the medieval backland layout may have been like. Retrace your steps back to Castlegate and continue downhill. Numbers 1 and 2 Castlegate are set back from the rest of the buildings. Built in the 18th century they were altered in the 19th and again in the 20th century. At the foot of Castlegate, turn left into Exchange Street.',
      '# Just for Fun',
      'An ancient Jacobite travel chest has been discovered in the basement. Can you use the four surviving attempts to crack its four-digit lock and reveal the royal secret inside?',
      {type:'link', href:'jacobite-code-breaker.html', label:'🔐 Crack the Jacobite Code'}
    ]},
    {id:'exchange-street', name:"Exchange Street", lat:55.47779550429941, lng:-2.5555416941642766, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/exchange_street2.png', content:[
      '# Exchange Street',
      'This street is one of the four original streets of the Burgh which lead directly to Market Place. Here you will find Numbers 3-5, formerly a bank. Designed in 1868 by David Rhind as a branch of the Commercial Bank, the upper floors were designed as a flat for the manager. Notice how the central window at first floor level is a smaller version of the entrance. Further along, Number 11, West Port House, was designed in 1899 by the renowned Borders architect J. P. Alison, of Hawick, as commercial premises for the Co-operative Society. The design displays early use of ‘curtain walling’.',
      '# Just for Fun',
      'Three secret letters and two confident answers reveal the rank of Exchange Street’s mystery donor. Can you solve McDiarmid’s parlour trick?',
      {type:'link', href:'street-exchange.html', label:'✉ Solve A Street Exchange'}
    ]},
    {id:'high-street', name:"High Street", lat:55.477936871156004, lng:-2.5551420450210576, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/high_street2.png', content:[
      '# High Street',
      'High Street is where traditional game of Handba\u2019 is played in February/March each year, between the \u201cuppies\u201d and \u201cdoonies\u201d. One explanation of the origins of the game is that it is a spring ritual where the ball represents the sun. It is also said that on one occasion the local men attacked a group of English raiders who had been causing a great deal of suffering in the area. The severed head of the leader of the English troops is said to have been thrown in the air, which discouraged his soldiers, causing them to flee. Whatever the true origins of the game, the event is now part of the town\u2019s heritage and is eagerly awaited by all in the town.',
      {type:'external-link', href:'https://www.youtube.com/watch?v=t5AgjfEwC-Y', label:'▶ The Jedburgh Hand Ba\u2019 Game'},
      '# Just for Fun',
      'Young David McCallum has forgotten the three-digit number his family used to obtain credit from the High Street traders. Can you recover it from his five marked guesses?',
      {type:'link', href:'family-number.html', label:'🔢 Solve The Family Number'}
    ]},
    {id:'spread-eagle', name:"Spread Eagle", lat:55.478357928573885, lng:-2.5546726584434514, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/spread_eagle2.png', content:[
      '# Spread Eagle Hotel',
      'On the left hand side of High Street as you head down, you will find the Spread Eagle Hotel. Notice the gilt double-headed eagle over the entrance. The present building dates from the early 18th century. Queen Mary reputedly visited the inn when she came to Jedburgh in 1566.',
      'Near this spot stood Moscrope Tower, one of the six towers of the town, although its exact site is not known. Opposite the Spread Eagle is Number 19, a fine Victorian building, designed by J. P. Alison. An inscribed panel bearing the date of construction, 1897, is visible at second floor level. It is worth pausing and admiring the fine detail around the windows and just below roof level. As you continue down High Street on the opposite side of the street next to the former Post Office is the original Library. The Dunfermline born philanthropist Andrew Carnegie opened this in October 1884 and there is a stone plaque on the building to commemorate the event. A new Public Library was opened in May 1900 on Castlegate.',
      '# Just for Fun',
      'Welcome to the Hotel Spread Eagle, you can check out anytime you like but some can never leave!',
      'Enjoy a murder mystery? And if you like Sudoku you might recognize the murder mystery puzzle we have provided – it uses a format called “Murdoku” and uses clues to place suspects onto squares in a floorplan – the floorplan of the Spread Eagle as it was back in the mid nineteenth century (sort of). Read the clues and work out who was where at the time of the murder and, most importantly, who was beside the victim!',
      {type:'link', href:'murder-in-the-spread.html', label:'🔎 Solve Murder in the Spread'}
    ]},
    {id:'loupin-on-stane', name:"Loupin\u2019-on Stane", lat:55.4791240287268, lng:-2.5535219907760625, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/loupin_stane2.png', content:[
      '# When you needed a leg up',
      'In front of you is the Bank of Scotland and in the grounds you find the \u2018Loupin\u2019-on stane\u2019, used as a step-up to allow riders to mount their horses. At one time, this was the house of one of Sir Walter Scott\u2019s friends, Sheriff Shortreed.',
      '# Just for Fun',
      'Three riders, three horses and three missing possessions. Can you discover who rode the black horse and what they dropped?',
      {type:'link', href:'lost-property.html', label:'🐎 Solve Lost Property'}
    ]},
    {id:'jedburgh-friary', name:"Jedburgh Friary", lat:55.479561793556336, lng:-2.5545144081115727, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/friary2.png', content:[
      '# Jedburgh Friary',
      'Even though nothing remains standing above ground, what remains is still the most extensive Franciscan Friary to be seen in Scotland. In the 15th century, Sir Andrew Ker of Ferniehirst provided this site so that the religious order of St Francis might establish a community in Jedburgh. To distinguish them from the “black friars” of the Dominican order, the Franciscans were known as “grey friars” from the colour of their habit or gown. Unlike other orders, the “grey friars” had close links with the community and they provided services such as healing the sick and teaching the locals.',
      'Much of the former Friary was used as a market garden and in 1982 development proposals led to an archaeological investigation. The site was investigated over two years with the Co- operative Society providing funds for further work in 1991-92. The following year, Borders Regional Council consolidated the site. To illustrate where there are remains under ground, brown gravel between sandstone edging represents original walls, drains are shown with grey cobbles and graves are marked by white gravel. Remnants of walls under the car park are marked by red setts and drains by grey. The present garden is based on historical research and has been laid out to reflect medieval interest in horticulture and the science of healing.',
      'The friars would have been self-sufficient in most things as they grew flowers, vegetables, medicinal herbs and plants that were used for other purposes, such as floor covering and dyes for clothing. Return to the High Street and turn left to continue downhill. ',
      '# Just for Fun',
      'Only one of three unusually tight-lipped monks is telling the truth. Can you use their statements to discover what caused the demise of Father Ferguson?',
      {type:'link', href:'father-ferguson.html', label:'☠ Solve The Demise of Father Ferguson'}
    ]},
    {id:'trinity-church', name:"Trinity Church", lat:55.479754834141026, lng:-2.5527253746986394, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/trinity_church2.png', content:[
      '# Former Trinity Church',
      'On the left as you reach the foot of High Street, is the former Trinity Church. Originally the Blackfriars Church was in this area, perhaps even on this site. A new church was built here in 1746, followed by a second in 1801 on the same site. The present building was constructed in 1818 in the low classical style, but set back from the location of its predecessors. The building is no longer in use as a church. This area of the town is where horse-trading used to take place and was called Horsemarket. The horse market was later moved to Abbey Close, only to return after protests from Townfoot residents. At this point you have the option of following the main trail along Queen Street, which is across or taking an alternative riverside route, which is described at the end of the main trail text. A short distance along Queen Street is Mary Queen of Scots\u2019 Visitor Centre.',
      '# Just for Fun',
      'In 1850, all five members of the Trinity Church staff had served for different lengths of time. Can you put them in order and work out each person\u2019s years of service?',
      {type:'link', href:'trinity-church-staff.html', label:'⛪ Solve Keeping the Church Going'}
    ]},
    {id:'mary-queen-of-scots-house', name:"Mary Queen of Scots House", lat:55.478640657745146, lng:-2.5527709722518925, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/mary_queen2.png', content:[
      '# Mary Queen of Scots\u2019 Visitor Centre',
      'This building dates from the last quarter of the 16th century and is according to tradition where Queen Mary rented accommodation from Lady Ferniehirst (a Scott by birth) during her temporary residence in the town in 1566. Both the Scott and Ferniehirst families were supporters of the Queen. In 1693, the Ferniehirst family were known to own the Tower of Jedburgh which was “situated near the cross”, at the head of Canongate. A further clue to the building\u2019s history comes from the arms on the west side of the building. These are of the Wigmer family and would have formerly been placed there in the 17th century, although they were re-carved at a later date. Given that the Earl of Surrey had destroyed Jedburgh in 1523, it is likely that this building was built in the years immediately after the attack.',
      'The building was thatched until at least the 1890s when red tiles replaced the thatch. In 1980, the roof was re-covered with slates. In the grounds, there are several pear trees, a fruit for which the town was once famous, and were even said to have been sold in markets in London. The main pear orchard for the town was on Lady\u2019s Green - the site of the former North British Rayon Mills - and at one time, there were over 40 types of pears growing in the town. You can also find an Early Medieval cross base, upon which are carved fantastic beasts. This cross base was found in the Bongate area of the town and may indicate the presence of an early Christian community in the town. Inside there is a small museum with many artefacts relating to Queen Mary.',
      '# Just for Fun',
      'On 15th October 1566, Mary Queen of Scots rode out to Hermitage Castle near the English border – and then returned on the same day – a round trip of about 60 miles! Immediately after that trip she became seriously ill and almost died.',
      'The route to Hermitage would have been tricky and potentially dangerous. If her enemies knew her route, traps could have been set.',
      'To avoid this – the route she planned to take was provided as a map with many gaps – and a code that defined how many parts of the route would fall into each row or column of the map. Take a moment to work out one of the routes she might have taken.',
      {type:'link', href:'mary-queen-of-scots-ride.html', label:'♞ Play The Queen\u2019s Ride'},
      '# Where next?',
      'Leave the Visitor Centre and turn left to walk further along Queen Street. At the junction with Canongate, turn left and head downhill towards the Jed Water.',
      'You will spot a plaque commemorating the birth of the scientist and inventor of the kaleidoscope, Sir David Brewster. With the re-alignment of roads and the construction of new bridges, Canongate lost its status as a major thoroughfare but it is still a busy shopping street. Continue down Canongate, through the subway to the riverside where you will come to Piper\u2019s House and the Canongate Bridge.'
    ]},
    {id:'pipers-house', name:"Piper\u2019s House", lat:55.47827529783229, lng:-2.551167340263752, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/pipers_house2.png', content:[
      '# Piper\u2019s House',
      'Piper\u2019s House dates from 1604 although it was remodelled in 1896. If you look at the lintel over the central window on the first floor, you can see the initials of Adam Ainslie, who built the house, his wife Janet\u2019s initials  and the date 1604. The window replaced the original entrance door that was at the head of a flight of stone stairs. The town\u2019s last official piper, Robin Hastie, is said to have occupied a portion of the house. On the last crow step to the south east, there is a carved figure of a piper. According to Sir Walter Scott, the Hastie family had been Burgh Pipers for three hundred years. When Hastie died in the early 19th century, Scott wrote that “old age had rendered Robin a wretched performer but he knew several old songs and tunes, which have probably died with him”. The building has corbels on the south elevation that may have been used to support a lean-to building.',
      '# Just for Fun',
      'An implausible supper brought eight remarkable diners to Piper\u2019s House. Can you reconstruct the King\u2019s seating plan and discover his secretly favoured guest?',
      {type:'link', href:'implausible-supper.html', label:'🍽 Solve The Implausible Supper'}
    ]},
    {id:'canongate-bridge', name:"Canongate Bridge", lat:55.477932310942734, lng:-2.5511777400970463, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/canongate_bridge3.png', content:[
      '# Canongate Bridge',
      'Now used only as a footbridge, this was at one time the principal route into the town. It is interesting to note that for defensive reasons, the approaches to the bridge are more or less at 90 degrees. Built in the 16th century, this is an attractive three-arched bridge. Under each arch are chamfered ribs. Originally each span had four ribs but the easternmost arch now has only two. Notice the way the cutwaters - which relieve the pressure of the flowing water on the bridge - carry right up to parapet level. When you get onto the bridge itself, you see the reason for this, in that they form refuges where pedestrians could get out of the way safely of traffic, predominantly horses, including the stagecoach from Edinburgh to Newcastle. The eastern refuges contain chamfered stones, possibly from the Jedburgh Friary. ',
      'On the upstream side of the bridge is a ford across the Jed Water. This ford is still used by horse riders instead of the bridge and each year during the Callant\u2019s Festival when the Callant is followed across the ford by massed ranks of riders. Across the bridge you will see a large 1930s building on the left, which occupies the site of Well House, a reminder that Jedburgh\u2019s water supply was not always piped. The steps on the right hand side of the building lead down to the well which is no longer in use. ',
      'The road beside this building was the original approach to the town from the north and this would have been the route that Bonnie Prince Charlie took on his way into England. The grassy hill you see behind and to the left of Well House is Stone Hill, where there used to be a stone tower, the walls of which were 2 metres (7 feet) thick. This was only one of a number of towers located in and around the town. In 1523, the Earl of Surrey reported that Jedburgh had “six good towers therin, which towne and toweris be clenely destroyed, brent and throwne downe”. The foundations of the tower were removed in 1852 and sadly nothing remains of it today. From Canongate Bridge return to the Tourist Information Centre via Canongate and the tarmac path between the Electricity substation and the Royal Hotel to the end of the Jedburgh Town Trail. As this has been a short walk, not every aspect has been covered but we hope that you have gained an insight into the town\u2019s history and architecture and trust that you will return soon.',
      '# Just for Fun',
      'A scream in the night. A body on the bridge. Four suspects, four motives, four possible weapons and four alibis. Can you solve Jedburgh\u2019s forgotten mystery?',
      {type:'link', href:'body-on-the-bridge.html', label:'\ud83d\udd0e Solve The Body on the Bridge'}
    ]},
    {id:'riverside-walk', name:"Riverside Walk", lat:55.47735163947565, lng:-2.5513440370559697, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/riverside_walk2.png', content:[
      '# Riverside Trail',
      'Walk along the riverside path which follows the approximate line of a mill lade that powered both the Abbey Mill (below the Abbey) and a snuff mill which was about half way along the path. The grassy mounds within the park on your right are formed from the rubble left over when the North British Rayon Mill, which used to occupy the site, was demolished in the early 1970s. As you once more approach the road, you will see, over the river, the Laidlaw Memorial Pool and Fitness Centre, now part of the Waterside Fitness Centre, where if you have time, you can enjoy a relaxing swim. The path goes through another underpass before emerging in front of the Abbey.',
      'As you walk by the river you may want to contemplate the history that these waters have witnessed. If we trace the flow path from source to sea, we cover many hugely significant places and events in Scottish, English and British history.',
      'As you know by now \u2013 Jedburgh was ravaged and burned many times \u2013 as was Berwick upon Tweed which changed hands 13 times. Lintalee was home to the Black Douglas \u2013 a key figure in the Wars of Independence led by Robert the Bruce. The Jed joins the Teviot under the presence of the Waterloo Monument and downstream we find Roxburgh Castle \u2013 a castle often besieged and burned and the site of James II of Scotland\u2019s death. The Teviot joins the Tweed and we bow our heads as we pass close to Flodden Field the site of arguably Scotland\u2019s worst ever defeat and the resting place of King James IV. The waters pass Coldstream, the birthplace of the iconic regiment and on to Norham Castle. This castle has been besieged multiple times and was where Edward I of England nominated John Balliol to be King of Scotland in 1292. This was not popular in Scotland and was a key factor in starting the Wars of Independence.',
      'Thankfully today Scotland and England are peaceful neighbours \u2013 rivals on the rugby pitch but comrades in arms when history dictates.',
      'Riverside Park is depicted on the infographic image below. This is the home of Jed-Forest Rugby Club and was mentioned at the Ramparts earlier on this trail.',
      'The Scottish Borders has a strong rugby history. The game of Rugby Sevens was created by Jedburgh man, Ned Haig in 1883. Jed-Forest has had many players who have played for the South of Scotland and the Scotland XV. Three have gone even further and played in the position of scrum-half (No. 9) for the British and Irish Lions. The Three Nines are Roy Laidlaw, Gary Armstrong and Greig Laidlaw.',
      'Waters that flowed through these rapids and pools saw it all.',
      {type:'image', src:'../Jedburgh_Town_Trail_Assets/created graphics/Jed_Source_to_Sea3.png', alt:'The Jed from source to sea', caption:'The Jed \u2013 from source to sea'},
      '# Just for Fun',
      'High in the Cheviots, the Jed Water begins where Raven Burn and Tod Sike meet. Can you trace the twisting Tod Sike back towards its source?',
      {type:'link', href:'source-of-the-jed.html', label:'💧 Find the Source of the Jed'}
    ]},
    {id:'time-for-reflection', name:"Time for Reflection", lat:55.47539371032197, lng:-2.5545680522918706, radius:15, image:'../Jedburgh_Town_Trail_Assets/from brochure photographs_native/glebe2.png', content:[
      '# Complete the Blue Plaque Puzzle',
      'This is where the seventh collection is finally revealed. Don’t worry if you missed some plaques—we can mark them as found here to let you finish the puzzle. Open Blue Plaque Collections below when you are ready.',
      {type:'link', href:'plaque-game.html?final=1', label:'🔵 Finish the Blue Plaque Puzzle'},
      '# Jedburgh - A Town of History and Tradition',
      'Jedburgh is a town shaped by more than a thousand years of history, border conflict, religious power, royal visits and local tradition. Its story begins beside the Jed Water, where early settlements grew into the Royal Burgh of Jedburgh. Positioned close to the Scotland–England border, the town was repeatedly attacked, burned and rebuilt during the Wars of Independence and later conflicts, giving it a history marked by resilience.',
      'At the heart of Jedburgh stands its great Augustinian Abbey, founded by King David I in the 12th century and later raised to abbey status. Though damaged many times by English armies and eventually suppressed during the Reformation, its ruins remain one of the town’s defining landmarks. Nearby streets and closes preserve the old medieval layout, with the High Street, Castlegate, Market Place and Canongate still reflecting Jedburgh’s historic role as a market town and defensive settlement.',
      'The town trail reveals layers of civic, royal and cultural history. Jedburgh Castle once controlled the town from above before being demolished in the 15th century; its site later became the Castle Jail, now a museum. Mary, Queen of Scots, Bonnie Prince Charlie, Sir Walter Scott, Robert Burns, William Wordsworth, Mary Somerville and Sir David Brewster all connect Jedburgh to wider Scottish, literary and scientific history.',
      'Jedburgh’s traditions remain equally important. The Jethart Callant’s Festival, Handba’, old market sites, town ports, bridges, wynds and closes all show how community life has continued across centuries. The town also holds geological significance through Hutton’s Unconformity at nearby Inchbonny, which helped James Hutton develop modern ideas about deep time and the age of the Earth.',
      'Overall, Jedburgh’s essence lies in the way a small Borders town gathers together Abbey, castle, river, royal memory, conflict, science, literature and living tradition into one richly layered place.',
      'Jedburgh’s past is fascinating and Jedburgh is a vibrant community with an exciting future. A town of friendly and intelligent people shaped by the conflict, diplomacy and change. Thank you for taking the time to visit our town. And since you gave us the honour of your visit, it’s now your town as well. We are sure that you will agree, Jedburgh is a town built on exceptional stories.',
      '# Just for Fun',
      {type:'link', href:'quiz.html', label:'🧠 Try the Jedburgh Quiz'},
      {type:'link', href:'songs-that-mention-jedburgh.html', label:'♫ Famous Songs That Mention Jedburgh'}
    ]}
  ],
  plaques: [
    {id:'the-ramparts', locationId:'ramparts', name:'The Ramparts', image:'../Jedburgh_Town_Trail_Assets/plaques/the-ramparts.png'},
    {id:'ramparts-jedburgh-abbey', locationId:'ramparts', name:'Jedburgh Abbey', image:'../Jedburgh_Town_Trail_Assets/plaques/ramparts-jedburgh-abbey.png'},
    {id:'james-thomson', locationId:'ramparts', name:'James Thomson', image:'../Jedburgh_Town_Trail_Assets/plaques/james-thomson.png'},
    {id:'public-hall', locationId:'public-hall', name:'Public Hall', image:'../Jedburgh_Town_Trail_Assets/plaques/public-hall.png'},
    {id:'carters-rest', locationId:'public-hall', name:"Carter's Rest", image:'../Jedburgh_Town_Trail_Assets/plaques/carters-rest.png'},
    {id:'newgate', locationId:'newgate', name:'Newgate', image:'../Jedburgh_Town_Trail_Assets/plaques/newgate.png'},
    {id:'black-bull-inn', locationId:'canongate', name:'Black Bull Inn', image:'../Jedburgh_Town_Trail_Assets/plaques/black-bull-inn.png'},
    {id:'royal-hotel', locationId:'canongate', name:'Royal Hotel', image:'../Jedburgh_Town_Trail_Assets/plaques/royal-hotel.png'},
    {id:'the-courthouse', locationId:'sheriff-court', name:'The Courthouse', image:'../Jedburgh_Town_Trail_Assets/plaques/the-courthouse.png'},
    {id:'abbey-close', locationId:'abbey-close', name:'Abbey Close', image:'../Jedburgh_Town_Trail_Assets/plaques/abbey-close.png'},
    {id:'wordsworths-visit', locationId:'abbey-close', name:"Wordsworth's Visit", image:'../Jedburgh_Town_Trail_Assets/plaques/wordsworths-visit.png'},
    {id:'abbey-close-jedburgh-abbey', locationId:'abbey-close', name:'Jedburgh Abbey', image:'../Jedburgh_Town_Trail_Assets/plaques/abbey-close-jedburgh-abbey.png'},
    {id:'wrens-nest', locationId:'abbey-close', name:"Wren's Nest", image:'../Jedburgh_Town_Trail_Assets/plaques/wrens-nest.png'},
    {id:'townhead-port', locationId:'castle-jail', name:'Townhead Port', image:'../Jedburgh_Town_Trail_Assets/plaques/townhead-port.png'},
    {id:'jedburgh-castle-jail', locationId:'castle-jail', name:'Jedburgh Castle Jail', image:'../Jedburgh_Town_Trail_Assets/plaques/jedburgh-castle-jail.png'},
    {id:'jedburgh-public-library', locationId:'library', name:'Jedburgh Public Library', image:'../Jedburgh_Town_Trail_Assets/plaques/jedburgh-public-library.png'},
    {id:'john-ainslie', locationId:'prince-charlies-house', name:'John Ainslie', image:'../Jedburgh_Town_Trail_Assets/plaques/john-ainslie.png'},
    {id:'prince-charlies-house', locationId:'prince-charlies-house', name:"Prince Charlie's House", image:'../Jedburgh_Town_Trail_Assets/plaques/prince-charlies-house.png'},
    {id:'closes', locationId:'prince-charlies-house', name:'Closes', image:'../Jedburgh_Town_Trail_Assets/plaques/closes.png'},
    {id:'skiprunning-burn', locationId:'exchange-street', name:'Skiprunning Burn', image:'../Jedburgh_Town_Trail_Assets/plaques/skiprunning-burn.png'},
    {id:'port-house', locationId:'exchange-street', name:'Port House', image:'../Jedburgh_Town_Trail_Assets/plaques/port-house.png'},
    {id:'battle-of-burn-wynd', locationId:'exchange-street', name:'Battle of Burn Wynd', image:'../Jedburgh_Town_Trail_Assets/plaques/battle-of-burn-wynd.png'},
    {id:'spread-eagle-hotel', locationId:'spread-eagle', name:'Spread Eagle Hotel', image:'../Jedburgh_Town_Trail_Assets/plaques/spread-eagle-hotel.png'},
    {id:'jedburgh-friary', locationId:'jedburgh-friary', name:'Jedburgh Friary', image:'../Jedburgh_Town_Trail_Assets/plaques/jedburgh-friary.png'},
    {id:'sheriff-shortreed', locationId:'jedburgh-friary', name:'Sheriff Shortreed', image:'../Jedburgh_Town_Trail_Assets/plaques/sheriff-shortreed.png'},
    {id:'mary-queen-of-scots-house', locationId:'mary-queen-of-scots-house', name:'Mary Queen of Scots House', image:'../Jedburgh_Town_Trail_Assets/plaques/mary-queen-of-scots-house.png'},
    {id:'mary-queen-of-scots-visit', locationId:'mary-queen-of-scots-house', name:'Mary Queen of Scots Visit', image:'../Jedburgh_Town_Trail_Assets/plaques/mary-queen-of-scots-visit.png'},
    {id:'james-veitch', locationId:'pipers-house', name:'James Veitch', image:'../Jedburgh_Town_Trail_Assets/plaques/james-veitch.png'},
    {id:'mary-somerville', locationId:'pipers-house', name:'Mary Somerville', image:'../Jedburgh_Town_Trail_Assets/plaques/mary-somerville.png'},
    {id:'sir-david-brewster', locationId:'pipers-house', name:'Sir David Brewster', image:'../Jedburgh_Town_Trail_Assets/plaques/sir-david-brewster.png'},
    {id:'pipers-house', locationId:'pipers-house', name:"Piper's House", image:'../Jedburgh_Town_Trail_Assets/plaques/pipers-house.png'},
    {id:'canongate-bridge', locationId:'canongate-bridge', name:'Canongate Bridge', image:'../Jedburgh_Town_Trail_Assets/plaques/canongate-bridge.png'}
  ],
  // Colour-coded theme per stop, used to add category tags/accents in the UI.
  categories: {
    'huttons-unconformity': 'science', 'riverside-walk': 'nature',
    'abbey': 'religious', 'abbey-close': 'religious', 'jedburgh-friary': 'religious', 'trinity-church': 'religious',
    'war-memorial': 'military', 'ramparts': 'military', 'castle-jail': 'military',
    'prince-charlies-house': 'royal', 'mary-queen-of-scots-house': 'royal',
    'public-hall': 'civic', 'newgate': 'civic', 'market-place': 'civic', 'canongate': 'civic', 'sheriff-court': 'civic',
    'library': 'civic', 'exchange-street': 'civic', 'high-street': 'civic', 'spread-eagle': 'civic',
    'loupin-on-stane': 'civic', 'pipers-house': 'civic', 'canongate-bridge': 'civic'
  }
};

// Consistent onward directions, shown after each stop's Just for Fun activity.
const fromHereByStop = {
  'the-glebe': 'If you are facing the Abbey, turn to your left and walk a short distance to the distinctive stone monument by the bend in the river.',
  'huttons-unconformity': 'Leave the Glebe car park and cross the bridge towards the town centre. The Abbey Visitor Centre is on your left—and is well worth a visit.',
  'abbey': 'Beyond the Visitor Centre is the sandstone War Memorial.',
  'war-memorial': 'Walk up the steps around the War Memorial onto the elevated Ramparts that go around the front of the Abbey.',
  'ramparts': 'Across the road you can see the Public Hall—or “Toon Hall”, as the locals might call it. There are plaques for the Public Hall and the Carter’s Rest. Carefully walk down the steps and cross the road to take a look.',
  'public-hall': 'Head towards the town centre. The next location is the archway beneath the clock tower on your left.',
  'newgate': 'Turn around and you will be facing Market Place, known locally as “The Square”.',
  'market-place': 'Canongate is the road running from Market Place down towards the River Jed.',
  'canongate': 'Walk through Market Place to the foot of Castlegate. A few metres uphill, on the left-hand side, is the entrance to the Sheriff Court.',
  'sheriff-court': 'Walk another 80 metres uphill along Castlegate and you will see Abbey Close on your left.',
  'abbey-close': 'The next stop is a hike—all the way uphill to the castle-like building. It is worth the visit, but take your time.',
  'castle-jail': 'It is downhill all the way back towards Market Place. The Public Library is on your left before you reach The Square.',
  'library': 'Walk down past Upper Nag’s Head Close and walk a few metres up Blackhills Close to find Prince Charlie’s House.',
  'prince-charlies-house': 'Return to Castlegate and head through Cornelius Close—but mind your head—to emerge once more behind the properties. Here you will see a drum staircase on your left, added in 1978 to the rear of Numbers 3–5 Castlegate, which date from the late 17th century. The staircase replaced a range extending back from the building and returns it to something like its original plan. These closes give a sense of the medieval backland layout. Retrace your steps to Castlegate and continue downhill. Numbers 1 and 2 Castlegate are set back from the other buildings; built in the 18th century, they were altered in the 19th and again in the 20th century. At the foot of Castlegate, turn left into Exchange Street.',
  'exchange-street': 'Head back towards The Square and turn left down into High Street.',
  'high-street': 'You will see the prominent Spread Eagle Hotel on your left as you walk down High Street.',
  'spread-eagle': 'Keep walking downhill for another 120 metres or so and you will see the Loupin’on Stane on your left.',
  'loupin-on-stane': 'Walk through past the Co-op to the walled garden beyond.',
  'jedburgh-friary': 'Return to High Street and continue downhill on the left-hand side. Stay on the pavement until you see the former Trinity Church on your left.',
  'trinity-church': 'Queen Street starts across the road. Cross carefully and walk along it for about 150 metres to find Mary Queen of Scots House.',
  'mary-queen-of-scots-house': 'Leave the Visitor Centre and turn left to walk further along Queen Street. At the junction with Canongate, turn left and head downhill towards the Jed Water. At the foot of Canongate is a modern housing development dating from 1985, with a traditional Scottish appearance. Further down the road is a plaque commemorating the birth of Sir David Brewster, the scientist and inventor of the kaleidoscope. Continue down Canongate and through the subway to the riverside, where you will come to Piper’s House and Canongate Bridge.',
  'pipers-house': 'Continue to the bridge directly ahead of you.',
  'canongate-bridge': 'Come back from the bridge, but instead of walking through the underpass, follow the riverside path.',
  'riverside-walk': 'Follow the trail around to the end, where you will be back opposite the Abbey Visitor Centre. Cross the road carefully and walk back to the Glebe for the final point on the trail.',
  'time-for-reflection': 'You have completed the trail. The Glebe, where the walk began, is beside you. From here you can return to the Abbey, the town centre or your onward route.'
};

const removeRepeatedDirections = {
  'huttons-unconformity': [
    'Continue out of town from the Abbey, cross the Jed Water and enter the large car park on your right. At the rear of the car park, by the Jed Water is a monument to ‘Hutton’s Unconformity’.'
  ],
  'abbey': [
    ['On leaving the Abbey, return up Abbey Place, either along the ramparts or by way of the pavement. ', '']
  ],
  'newgate': [
    [' Walk the short distance into Market Place.', '']
  ],
  'castle-jail': [
    [' Continue downhill to the Public Library.', '']
  ],
  'library': [
    [' The next building on your left as you go downhill is known as Prince Charlie’s House.', '']
  ],
  'prince-charlies-house': [
    ['Return to Castlegate and head through Cornelius Close (but mind your head!) to emerge once more to the rear of the properties. ', ''],
    [' Retrace your steps back to Castlegate and continue downhill.', ''],
    [' At the foot of Castlegate, turn left into Exchange Street.', '']
  ],
  'jedburgh-friary': [
    [' Return to the High Street and turn left to continue downhill.', '']
  ],
  'trinity-church': [
    [' At this point you have the option of following the main trail along Queen Street, which is across or taking an alternative riverside route, which is described at the end of the main trail text. A short distance along Queen Street is Mary Queen of Scots’ Visitor Centre.', '']
  ],
  'pipers-house': [
    [' Walk to Canongate Bridge.', '']
  ],
  'canongate-bridge': [
    [' From Canongate Bridge return to the Tourist Information Centre via Canongate and the tarmac path between the Electricity substation and the Royal Hotel to the end of the Jedburgh Town Trail. As this has been a short walk, not every aspect has been covered but we hope that you have gained an insight into the town’s history and architecture and trust that you will return soon.', '']
  ]
};

jedburghTrail.pins.forEach(pin => {
  pin.fromHere = fromHereByStop[pin.id] || '';
  pin.content = pin.content.filter(block => block !== '# Where next?');
  if (pin.id === 'mary-queen-of-scots-house') pin.content = pin.content.slice(0, 7);
  if (pin.id === 'prince-charlies-house') pin.content = pin.content.filter((block, index) => index !== 2);
  pin.content = pin.content.map(block => typeof block === 'string' && block.startsWith('# Glebe Murder Part') ? '# Just for Fun' : block);
  for (const edit of removeRepeatedDirections[pin.id] || []) {
    if (typeof edit === 'string') pin.content = pin.content.filter(block => block !== edit);
    else pin.content = pin.content.map(block => typeof block === 'string' ? block.replace(edit[0], edit[1]).trim() : block).filter(Boolean);
  }
});
