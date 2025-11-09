import { GameCategory } from './types';

export const CATEGORIES: GameCategory[] = ['Thriller', 'Horror', 'Moral', 'Fun'];

export const STORY_TITLES: Record<GameCategory, string[]> = {
  Thriller: [
    "The Last Signal", "Echo in the Static", "Countdown at Zero Point", "The Silent Passenger", "Crimson Labyrinth", 
    "Whispers from the Deep", "The Night Train to Nowhere", "Project Nightingale", "The Kepler Anomaly", "A Stranger's Face", 
    "The Veritas Deception", "Ghost in the Machine", "The Sunken City", "The Devil's Cipher", "Zero-Sum Game", 
    "The Man Who Wasn't There", "The Architect's Folly", "Sleepwalker's Kiss", "The Judas Protocol", "The Tenth Floor", 
    "The Lost Frequency", "Memory of a Shadow", "The Pandora Strain", "The Atlas Contract", "The Lazarus Gambit", 
    "The Serpent's Tooth", "The Alchemist's Secret", "The Hourglass Conspiracy", "The Final Broadcast", "The Obsidian Box", 
    "The Quantum Betrayal", "The Paris Enigma", "The Vienna Gambit", "The Ghost Fleet", "The Midnight Protocol", 
    "The Arctic Code", "The Nevada Paradox", "The Babylon Key", "The Chimera Project", "The Sentinel Event", 
    "The Rogue Variable", "The Crimson Thread", "The Zurich Sanction", "The Siren's Call", "The Phoenix Agenda", 
    "The Carthage Directive", "The Icarus Deception", "The Serpent's Kiss", "The Nomad Objective", "The Final Witness"
  ],
  Horror: [
    "The Weeping Willow", "The Dollhouse Mannequin", "Shadow in the Cornfield", "It Follows the Rain", "The Giggling Room", 
    "The House That Breathes", "The Faceless Portrait", "The Lighthouse Ghost", "The Melody of the Damned", "The Scarecrow's Grin", 
    "The Whisper on the Stairs", "The Attic Door", "The Sunken Chapel", "The Midnight Man", "The Carnival of Souls", 
    "The Blackwood Tapes", "The Child in the Walls", "The Mirror's Hunger", "The Weeping Bride", "The Penpal", 
    "The Empty Swing", "The Old Railroad Track", "The Funhouse Mirror", "The Toymaker's Secret", "The Farmhouse Cellar", 
    "The Whispering Pines", "The Last Lullaby", "The Town That Forgot", "The Man with No Reflection", "The Song of the Drowned", 
    "The Cursed Carousel", "The Black Cat's Alley", "The Patient in Room 237", "The Abandoned Amusement Park", "The Fog's Embrace", 
    "The Shadow Man's Game", "The Haunted Highway", "The Midnight Gardener", "The Music Box's Secret", "The Crying Boy Painting", 
    "The Secret of the Old Well", "The Thing in the Closet", "The Scarecrow's Promise", "The Legend of Blackwood Manor", "The Children of the Mist", 
    "The Voice from the Basement", "The Doll with Human Hair", "The Ghost of the Opera House", "The Haunted Portrait", "The Final Performance"
  ],
  Moral: [
    "The Cobbler's Gift", "The Weaver's Final Thread", "The Banker and the Beggar", "The Lantern of the Selfless", "The King's Empty Chest", 
    "The Gardener's Last Seed", "The Baker's Dozen", "The Merchant's Compassion", "The Sculptor's Pride", "The Warrior's Mercy", 
    "The Fisherman's Promise", "The Boy Who Cried Wolf (A Retelling)", "The Empty Pot", "The Two Brothers", "The King with the Golden Touch", 
    "The Farmer's True Treasure", "The Wise Woman's Riddle", "The Glassblower's Breath", "The Watchmaker's Choice", "The Musician's Echo", 
    "The Painter's True Colors", "The Scholar's Humility", "The Bridge Builder", "The Stone Soup", "The Emperor's New Clothes (A Retelling)", 
    "The Ant and the Grasshopper (A Retelling)", "The Shepherd's Star", "The Queen's Reflection", "The Carpenter's Legacy", "The Judge's Dilemma", 
    "The Potter's Flaw", "The Healer's Burden", "The Librarian's Secret", "The Storyteller's Tale", "The Candlemaker's Light", 
    "The Innkeeper's Guest", "The Sailor's Vow", "The Mapmaker's Journey", "The Blacksmith's Heart", "The Poet's Voice", 
    "The Weaver's Choice", "The King's Two Sons", "The Blind Man's Sight", "The Beggar's Blessing", "The Farmer's Patience", 
    "The Gift of the Magi (A Retelling)", "The Last Leaf (A Retelling)", "The Honest Woodcutter", "The City Mouse and the Country Mouse (A Retelling)", "The Golden Goose"
  ],
  Fun: [
    "The Case of the Missing Sprinkles", "The Great Hamster Heist", "The Case of the Runaway Rhino", "The Day the Pigeons Went on Strike", "Sir Reginald's Spontaneous Sing-along", 
    "The Mystery of the Sentient Sock", "The Cow Who Jumped Over the Moon (For Real)", "The Pirate Who Was Afraid of Water", "The Great Gummy Bear Escape", "The Time-Traveling Tortoise", 
    "The Dog Who Became Mayor", "The Magical Talking Mailbox", "The Quest for the Ultimate Sandwich", "The Day the Animals Rode the Bus", "The Mystery of the Missing Homework", 
    "The Robot Who Wanted to Be a Comedian", "The Squirrels' Secret Acorn Stockpile", "The Haunted Refrigerator", "The Great Balloon Race to the Moon", "The Day the Crayons Quit (and came to life)", 
    "The Case of the Pilfered Pizza", "The Knight Who Hated Swords", "The Dragon Who Collected Teacups", "The Alien Who Loved Earth Tacos", "The Mystery of the Singing Flowers", 
    "The Great Backyard Safari", "The Gnome Who Lost His Hat", "The Super-Secret Spy Kittens", "The Magical Popcorn Kernel", "The Day the Town Floated Away", 
    "The Case of the Missing Mascot", "The Great Pancake Flip-Off", "The Boy Who Could Talk to Squirrels", "The Magical Remote Control", "The Day Gravity Took a Holiday", 
    "The Mystery of the Mismatched Shoes", "The Great Go-Kart Grand Prix", "The Pet Rock's Big Adventure", "The Girl Who Built a Rocket Ship", "The Case of the Vanishing Voice", 
    "The Great Pillow Fort War", "The Talking Dog's Secret", "The Magical Treehouse Adventure", "The Mystery of the Missing Moon Cheese", "The Day the Teachers Turned into Frogs", 
    "The Great Lemonade Stand Caper", "The Boy Who Could Fly (with a little help)", "The Secret Life of Garden Gnomes", "The Great Toy Rebellion", "The Case of the Crooked Carrot"
  ],
};


export const Icons = {
  play: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  pause: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  replay: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4a14.01 14.01 0 0117.15 8.92M20 20a14.01 14.01 0 01-17.15-8.92" /></svg>,
  home: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  settings: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  soundOn: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>,
  soundOff: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>,
  hint: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 017.072 0m-11.314 0a5 5 0 007.072 0M12 6a3 3 0 100 6 3 3 0 000-6z" /></svg>,
  next: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  close: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
};
