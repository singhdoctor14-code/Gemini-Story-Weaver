import { Story, GameCategory } from '../types';

export const stories: Record<GameCategory, Story[]> = {
  'Thriller': [
    {
      title: "The Last Signal",
      category: 'Thriller',
      scenes: [
        {
          type: 'narrative',
          text: "The midnight shift was a silent ballet of blinking lights, a predictable rhythm that soothed Alex. For five years, Alex had watched the silent, glowing ghosts drift across the radar, a guardian of the lonely skies. But tonight, the silence was broken by a sound that didn't belong—a crackle of static from Channel 13, a frequency decommissioned for decades, reserved now only for whispers and legends.",
          character: "Narrator",
          imagePrompt: "A dimly lit air traffic control tower at night, filled with glowing screens. A lone figure wearing a headset stares intently at one console, their face illuminated by the green light. Moody, atmospheric, digital art.",
        },
        {
          type: 'narrative',
          text: "'Mayday, Mayday... this is Sky-Bird 729... is anyone there?' The voice was thin, laced with a panic that felt ancient and immediate. Alex's blood ran cold. It couldn't be. Sky-Bird 729 was a ghost story, a flight that had vanished over the Pacific ten years ago to the day, taking 236 souls with it into history.",
          character: "Alex (Internal)",
          imagePrompt: "Close-up on a vintage-style radio receiver, its frequency dial glowing on '13'. The reflection of a shocked face is visible on the polished chrome.",
        },
        {
          type: 'interactive',
          prompt: "The signal is incredibly weak, drowning in a sea of static. You need to amplify and isolate it to confirm its origin. What's your first technical move?",
          hint: "Standard procedure for a weak signal is to boost the power allocated to the specific receiver channel and use filters to clean it up.",
          options: [
            { text: "Reroute auxiliary power to the receiver and apply a digital filter.", isCorrect: true },
            { text: "Broadcast a general alert on all frequencies.", isCorrect: false, consequence: "Your panicked broadcast causes chaos on the active airwaves. By the time order is restored, the weak signal is lost in the noise forever." },
            { text: "Log it as atmospheric interference from the storm front.", isCorrect: false, consequence: "You dismiss the call, but a chilling doubt remains. You'll spend the rest of your career wondering what—or who—you ignored." },
          ],
        },
        {
          type: 'narrative',
          text: "The static receded as the power surged. The pilot's voice emerged, chillingly clear. 'We've lost our bearings... instruments are dark... we see stars, but they're wrong. They're all wrong.' A single ping appeared on the screen—not from the ocean, but from a location hundreds of miles inland, deep within the Nevada desert.",
          character: "Pilot (Radio)",
          imagePrompt: "A vast, empty desert at night under a sky full of strange, unfamiliar constellations. A single, mysterious light hovers in the distance. Sci-fi realism.",
        },
        {
            type: 'interactive',
            prompt: "This is a serious anomaly that defies explanation. Your supervisor, a known skeptic, is on a break. Do you report this up the chain of command immediately or try to verify it yourself first?",
            hint: "Reporting this without solid proof could risk your career. What data can you access yourself to confirm the unbelievable?",
            options: [
              { text: "Cross-reference the signal's coordinates with satellite imagery.", isCorrect: true },
              { text: "Wake up your supervisor with a wild story about a ghost plane.", isCorrect: false, consequence: "Your supervisor dresses you down, puts you on probation for causing a panic, and the mystery remains unsolved as you're taken off the console." },
              { text: "Contact the military directly at the nearby airbase.", isCorrect: false, consequence: "You're met with aggressive suspicion and get tangled in red tape. By the time anyone listens, the signal is long gone." },
            ],
        },
        {
          type: 'narrative',
          text: "Alex pulled up the live satellite feed for the coordinates. The desert was empty. No plane, no wreckage, no light. Yet the voice on the radio was growing more desperate. 'They're coming for us... we shouldn't have seen... Oh God, the engine is—' The transmission was violently cut by a horrifying, metallic screech.",
          character: "Pilot (Radio)",
          imagePrompt: "A satellite image view of an empty desert, but with a glitchy, static-filled overlay effect over one specific area, hinting at something being hidden or censored.",
        },
        {
            type: 'interactive',
            prompt: "You have the pilot's final, terrifying transmission recorded. This is your only piece of evidence. What do you do with the recording?",
            hint: "Who would be interested in a secret transmission and have the means to analyze it discreetly and without official channels?",
            options: [
              { text: "Send it to a trusted, ex-NTSB contact in aviation security.", isCorrect: true },
              { text: "Leak it to an online conspiracy forum.", isCorrect: false, consequence: "The recording is dismissed as a well-made prank, and your professional credibility is ruined when the leak is traced back to you." },
              { text: "Delete it. This is too dangerous to get involved in.", isCorrect: false, consequence: "You erase the only evidence. The mystery goes cold, and you are left forever wondering what you could have uncovered, haunted by the pilot's last words." },
            ],
        },
        {
          type: 'narrative',
          text: "Here was the plot twist. This wasn't a ghost plane from the past. It was an experimental craft from the future, or something close to it. The 'wrong stars' and impossible location suggested a technology far beyond public knowledge. The problem wasn't a lost flight, but a secret that had just been exposed.",
          character: "Narrator",
          imagePrompt: "A shadowy silhouette of a futuristic, experimental aircraft with non-traditional wings, seen inside a top-secret hangar. Lens flare and dramatic lighting give it a mysterious aura.",
        },
        {
            type: 'interactive',
            prompt: "An encrypted message instantly flashes on your private terminal: 'CEASE ALL INQUIRY. YOU ARE NOT CLEARED. THIS IS YOUR ONLY WARNING.' How do you respond to an invisible, all-powerful authority?",
            hint: "A direct challenge is suicide. A direct question shows you're a threat. Is there a way to signal compliance while still showing you understand the rules of the game?",
            options: [
              { text: "Reply with a standard, encrypted 'Acknowledge' code.", isCorrect: true },
              { text: "Ignore it and try to trace the source of the message.", isCorrect: false, consequence: "Your system access is instantly revoked. Two men in black suits arrive to 'escort' you from the building. Your career, and your freedom, are over." },
              { text: "Reply with 'Who is this?'.", isCorrect: false, consequence: "The message vanishes, and your terminal screen goes permanently blank. You've shown your hand and are now seen as an unpredictable threat to be neutralized." },
            ],
        },
        {
          type: 'narrative',
          text: "By acknowledging the message, Alex showed intelligence, not just defiance. The next day, a black sedan and a formal, but discreet, invitation were waiting. Alex was transferred to a new, highly classified project dealing with 'advanced aerospace threats'. The problem of the ghost flight was resolved, not by finding a lost plane, but by being recruited by the very people who flew it.",
          character: "Narrator",
          imagePrompt: "The sun rising over the air traffic control tower. The controller is looking out the window, not with fear, but with a look of wonder and grim determination. A new, vast sky awaits.",
        },
      ]
    },
  ],
  'Horror': [
    {
      title: "The Weeping Willow",
      category: 'Horror',
      scenes: [
        {
          type: 'narrative',
          text: "The realtor had called the ancient willow a 'charming feature'. But from the moment Maya's family moved in, it felt wrong. A cold spot in the yard, a source of strange whispers on the wind. Her parents, feeling it too, forbade her from playing near it. A warning she forgot when her bright red ball rolled to a stop beneath its drooping, finger-like branches.",
          character: "Narrator",
          imagePrompt: "A huge, ancient weeping willow tree dominating the backyard of a normal suburban house. Its branches are long and creepy, creating a dark, shadowed area underneath. The lighting is dusky and ominous.",
        },
        {
          type: 'narrative',
          text: "As Maya cautiously stepped into the tree's shade, the air grew unnaturally cold. She reached for the ball and saw it: carved into the trunk was a crude face with hollow eyes and a mouth downturned in a permanent weep. A sudden, cold gust of wind rustled the leaves, sounding like a faint, mournful cry. The ball wasn't just gone, it seemed to have been swallowed by the shadows.",
          character: "Narrator",
          imagePrompt: "A close-up on the trunk of the willow tree, showing a crudely carved, weeping face in the bark. The shadows at the base of the tree are unnaturally dark, and a child's red ball is vanishing into them.",
        },
        {
          type: 'interactive',
          prompt: "That night, Maya hears a soft sobbing from the backyard, a sound that seems to vibrate in her bones. Peeking out her window, she sees a faint, flickering light under the willow. What does she do?",
          hint: "Curiosity often leads to discovery, but in a horror story, it's rarely a safe path. Still, the mystery needs to be solved.",
          options: [
            { text: "Wake up her parents immediately.", isCorrect: false, consequence: "They check the yard, find nothing, and dismiss it as a nightmare. The weeping continues, and now they don't believe you. You're alone with it." },
            { text: "Grab a heavy flashlight and investigate herself.", isCorrect: true },
            { text: "Hide under her covers and try to ignore it.", isCorrect: false, consequence: "The sobbing seems to get closer, as if it's right outside your window now. Hiding doesn't make it go away; it just makes you more afraid." },
          ],
        },
        {
          type: 'narrative',
          text: "Her heart pounding like a drum, Maya crept outside. The sobbing grew louder, a sound of pure, unending despair that seemed to come from the tree itself. As she shone her heavy flashlight on the carved face, its hollow eyes seemed to absorb the light. The ground at the base of the tree was disturbed, the dirt freshly turned.",
          character: "Narrator",
          imagePrompt: "A young girl in pajamas standing in a dark backyard, pointing a powerful flashlight beam at the weeping willow. The carved face on the tree seems to absorb the light. The ground is clearly disturbed.",
        },
        {
            type: 'interactive',
            prompt: "She sees the dark, rotten corner of a small wooden box sticking out of the dirt. A sense of dread washes over her. What should she do?",
            hint: "Some things are buried for a reason. But leaving it might make the entity more desperate.",
            options: [
              { text: "Leave it alone and run back inside.", isCorrect: false, consequence: "You go back to bed, but the crying turns into a frustrated wail that scratches at your window all night, keeping you awake and terrified." },
              { text: "Use her hands to clear the dirt and pull it out.", isCorrect: true },
              { text: "Go get a shovel from the garage.", isCorrect: false, consequence: "The noise of the garage door wakes your dad. He comes out, sees nothing, and grounds you for being outside at night. The box remains buried, its secret safe." },
            ],
        },
        {
          type: 'narrative',
          text: "The wood of the box crumbled in her hands, releasing the smell of damp earth and old sorrow. Inside, resting on faded, moldy velvet, was a single, tarnished silver locket. As she picked it up, it felt cold as ice. The sobbing stopped, replaced by a cold, eager whisper that seemed to form inside her mind: 'Mine.'",
          character: "Ghostly Voice",
          imagePrompt: "A close up of a child's hands opening a rotting wooden box. Inside is a tarnished silver locket that seems to catch the flashlight's beam with an unnatural gleam.",
        },
        {
            type: 'interactive',
            prompt: "The locket is frigid, and a shadowy, child-sized figure begins to form by the tree. The whisper in her head becomes a desperate demand: 'Let me see them. Open it.'",
            hint: "Giving a spirit what it wants can either appease it or give it the power it needs. Responding with empathy might be safer than obeying or fleeing.",
            options: [
              { text: "Throw the locket as far as she can and run.", isCorrect: false, consequence: "The shadow shrieks in fury. The back door slams shut and locks itself. Tree branches begin to scrape against the house. There is no escape." },
              { text: "Keep it closed and ask bravely, 'Who are you?'.", isCorrect: true },
              { text: "Snap the locket open.", isCorrect: false, consequence: "As you open it, a wail of ultimate sorrow erupts. The tiny portraits inside have faded to dust. The spirit, its last physical memory destroyed by time, becomes a vengeful phantom." },
            ],
        },
        {
          type: 'narrative',
          text: "This was the twist: The tree wasn't haunted by a malevolent spirit. It was the resting place of a lonely child from a century ago, who died of illness while her parents were away on a long journey. The tree had become a vessel for her sorrow, her only remaining tie to the world being the locket with their faces. The spirit didn't want to cause harm; it desperately wanted not to be forgotten.",
          character: "Narrator",
          imagePrompt: "A ghostly, translucent image of a sad-looking child from a bygone era superimposed over the willow tree's trunk, pointing a sorrowful finger towards a locket held by Maya.",
        },
        {
            type: 'interactive',
            prompt: "The ghost whispers, its voice full of pain, 'They never came back. They forgot me. Please... remember me.' What can you do to truly honor its memory and bring it peace?",
            hint: "A memory is best kept alive not by hiding it away, but by sharing it with the world.",
            options: [
              { text: "Bury the locket again and promise to keep it secret.", isCorrect: false, consequence: "The spirit weeps, feeling forgotten once more. The haunting will continue, sadder and more desperate than ever." },
              { text: "Clean the locket and tell her parents the whole story.", isCorrect: true },
              { text: "Wear the locket yourself to keep the spirit company.", isCorrect: false, consequence: "The lonely spirit latches onto you, its cold sorrow seeping into your life day by day. You are never truly alone again, shadowed by its grief." },
            ],
        },
        {
          type: 'narrative',
          text: "The initial problem wasn't a scary tree, but a forgotten soul's desperate cry for remembrance. The next day, Maya, with the polished locket, told her parents. They found the child's story in old town records. Together, they placed a small, simple headstone by the tree, with her name: 'Eliza, 1898-1906. Remembered.' That night, the air in the yard felt light and peaceful. A gentle breeze rustled the leaves, sounding like a whispered 'thank you'. The weeping willow was no longer a place of fear, but one of quiet, eternal remembrance.",
          character: "Narrator",
          imagePrompt: "The weeping willow tree in bright, sunny daylight. A small, respectful headstone sits at its base with a polished silver locket resting on top. The scene is peaceful and serene.",
        }
      ]
    },
  ],
  'Moral': [
    {
      title: "The Cobbler's Gift",
      category: 'Moral',
      scenes: [
        {
          type: 'narrative',
          text: "In a town divided by wealth and poverty, Elias the cobbler lived in the latter. His small shop was a haven of warmth against the cold cobblestone streets, though he himself was often cold and hungry. The town's 'Gift of Giving' festival was approaching, a day where the rich displayed their charity. Elias had nothing to offer but his skill, and no one was paying for that.",
          character: "Narrator",
          imagePrompt: "A cozy, but clearly impoverished, old-fashioned cobbler's shop. A kind-faced old man with worn-out clothes is hunched over a boot by candlelight. The lighting is warm but highlights the sparseness of the room.",
        },
        {
          type: 'interactive',
          prompt: "A young, shivering girl with shoes falling apart peers into his shop. Elias has just enough good leather for a single patch on a wealthy client's boot, or to make a pair of small, sturdy soles. What does he do?",
          hint: "True generosity is giving what you have, even if it's little, to someone who needs it more, without thought of reward.",
          options: [
            { text: "Use his last good leather to make soles for the girl.", isCorrect: true },
            { text: "Use the leather to fix his own worn-out apron.", isCorrect: false, consequence: "His apron is fixed, but every time he looks down, he sees the face of the shivering girl and feels a pang of guilt." },
            { text: "Save the leather for the paying customer who might come.", isCorrect: false, consequence: "No paying customer comes. The leather sits on his bench, a monument to the kindness he chose not to share, and it hardens like his heart." },
          ],
        },
        {
          type: 'narrative',
          text: "Elias called the girl in from the cold. He worked for hours, his tired hands expertly crafting his last piece of good leather into a pair of sturdy new soles. He expected nothing in return, and the girl's grateful smile was payment enough. She was the daughter of a traveling merchant, and she went on her way with warm feet and a full heart.",
          character: "Narrator",
          imagePrompt: "The old cobbler kneeling on the floor of his shop, carefully fitting a new pair of soles onto a little girl's tattered shoes. Her face is filled with pure, innocent gratitude.",
        },
        {
            type: 'interactive',
            prompt: "That evening, the wealthy town baker, known for his greed, stands at the door and scoffs. 'Wasting your last leather on a beggar? You'll starve, you old fool!' How does Elias respond to this public mockery?",
            hint: "Kindness needs no defense, but a simple, heartfelt truth can silence arrogance far better than anger.",
            options: [
              { text: "Say quietly, 'Her need was greater than my own.'", isCorrect: true },
              { text: "Angrily shout that it's none of the baker's business.", isCorrect: false, consequence: "The argument leaves Elias feeling bitter and defensive, and the baker feels justified in his mockery of the 'angry old man'." },
              { text: "Say nothing, ashamed of his poverty.", isCorrect: false, consequence: "Elias's spirit sinks, and he begins to doubt his own goodness, letting the baker's cruelty poison his act of kindness." },
            ],
        },
        {
          type: 'narrative',
          text: "The day of the festival arrived, and Elias felt a pang of sadness, having no gift to present. Suddenly, a magnificent, painted caravan stopped outside his tiny shop. It was the girl's father, a powerful merchant. He had returned, having heard from his daughter about the cobbler's selfless kindness.",
          character: "Narrator",
          imagePrompt: "A large, fancy merchant's caravan, pulled by strong horses, is stopped in front of the humble cobbler's shop, drawing a crowd of curious townspeople.",
        },
        {
            type: 'interactive',
            prompt: "The merchant offers Elias a heavy bag of gold. 'A reward for your kindness to my daughter,' he says loudly for all to hear. What does Elias do?",
            hint: "A true gift is given from the heart, not for a reward. What does the town need more than one rich cobbler?",
            options: [
              { text: "Accept it and announce it's for the town's children.", isCorrect: true },
              { text: "Humbly refuse it, saying kindness is its own reward.", isCorrect: false, consequence: "The merchant is impressed but leaves with his gold. The town remains as it was, and a great opportunity to help many is lost in a moment of excessive humility." },
              { text: "Accept it gratefully and retire to a life of comfort.", isCorrect: false, consequence: "Elias retires, but finds himself wealthy and profoundly lonely. He misses the joy of his work and the smiles of those he helped." },
            ],
        },
        {
          type: 'narrative',
          text: "The plot twist was not magical, but profoundly human. Elias held the gold high and declared, 'This is not my reward. This is our town's gift!' He established a fund to provide all needy children with warm clothes and sturdy shoes, turning one man's gratitude into a resource for the entire community.",
          character: "Narrator",
          imagePrompt: "Elias standing before the townspeople, holding the bag of gold high with a determined and joyful expression. The merchant looks on, smiling proudly, as the greedy baker watches from the background with a sour face.",
        },
         {
            type: 'interactive',
            prompt: "The greedy baker, seeing Elias praised, feels jealous. He loudly offers free stale bread to the crowd to try and win their favor back. How should the townspeople, having witnessed true generosity, react?",
            hint: "The town has learned a lesson about the difference between a true gift and an empty gesture.",
            options: [
              { text: "Politely decline the bread and thank Elias instead.", isCorrect: true },
              { text: "Eagerly grab the free, stale bread.", isCorrect: false, consequence: "The baker's empty gesture is rewarded, and the lesson about true, selfless giving is partially undermined by the lure of a free handout." },
              { text: "Mock the baker for his cheapness and stale bread.", isCorrect: false, consequence: "The celebration turns sour as the crowd becomes as unkind as the baker was, spoiling the spirit of the day with more cruelty." },
            ],
        },
        {
          type: 'narrative',
          text: "Elias's initial problem—having nothing to give—was resolved in the most beautiful way. He learned that the greatest gift wasn't an object, but an act of kindness that ripples outwards. His single, small act of charity blossomed, transforming not just his own life, but the heart of the entire town, ensuring no child would have cold feet again.",
          character: "Narrator",
          imagePrompt: "The cobbler's shop, now clean and bright, with Elias happily teaching a group of smiling children how to mend shoes. The atmosphere is joyful and communal.",
        }
      ]
    },
  ],
  'Fun': [
    {
      title: "The Case of the Missing Sprinkles",
      category: 'Fun',
      scenes: [
        {
          type: 'narrative',
          text: "Detective Timmy, the neighborhood's foremost six-year-old sleuth, faced his gravest case yet. The town's entire supply of rainbow sprinkles had vanished overnight, just before the annual Ice Cream Sundae Festival! A state of emergency was declared. The problem was clear: no sprinkles, no sundaes, no happiness.",
          character: "Narrator",
          imagePrompt: "A young boy wearing a comically oversized trench coat and a fedora, looking serious and holding a magnifying glass. He is standing in front of an ice cream shop with a melodramatic sign that says 'SPRINKLE-POCALYPSE!'. Whimsical, cartoon style.",
        },
        {
          type: 'narrative',
          text: "The only clue was a single, dazzlingly blue feather, left on the barren battlefield of the sprinkle shelf at 'Scoops Ice Cream Parlor'. The shop owner, Mr. Henderson, was a puddle of despair. 'It's a catastrophe!' he wailed. 'A world without sprinkles is just... bland!'",
          character: "Narrator",
          imagePrompt: "A close-up of a single, bright blue, sparkly feather lying on a completely empty metal shelf where jars of sprinkles should be. The background is a colorful but now sad ice cream parlor.",
        },
        {
          type: 'interactive',
          prompt: "Detective Timmy narrows his investigation to three suspects with a connection to blue feathers. Who should he question first to crack the case wide open?",
          hint: "Think about which suspect would have the biggest, most dramatic reason to take a huge amount of sprinkles.",
          options: [
            { text: "The Great Zucchini, a magician known for his flock of blue birds.", isCorrect: true },
            { text: "Mrs. Gable's pet parrot, 'Captain Squawk,' who is known to love shiny things.", isCorrect: false, consequence: "The parrot just squawks 'Pieces of eight!' at you and tries to steal your magnifying glass. It's a dead end, and now you have parrot spit on your lens." },
            { text: "Barry, the performance artist who only uses the color blue in his work.", isCorrect: false, consequence: "Barry is too sad to talk. He was going to use the blue sprinkles for his art piece, 'Ode to a Blue Sky.' He's a victim, not a suspect!" },
          ],
        },
        {
          type: 'narrative',
          text: "Timmy marched to the magician's crooked, star-painted house. The front door was locked, but a window was slightly ajar, just out of reach. He needed a way to get a look inside without revealing his top-secret investigation.",
          character: "Narrator",
          imagePrompt: "The whimsical, slightly crooked house of a magician, with stars and moons painted on it. A small boy in a detective outfit is hiding in the bushes, casing the joint with intense focus.",
        },
        {
            type: 'interactive',
            prompt: "How does Detective Timmy get a view inside the magician's mysterious lair?",
            hint: "A good detective uses his environment and a bit of daring to his advantage. What's nearby that could give him a boost?",
            options: [
              { text: "Carefully stack some nearby, wobbly flowerpots to peek in the window.", isCorrect: true },
              { text: "Ring the doorbell and pretend to be selling cookies.", isCorrect: false, consequence: "The Great Zucchini answers, sees your detective hat, and nervously buys all your imaginary cookies before closing the door. The element of surprise is lost!" },
              { text: "Try to pick the lock with a lollipop stick.", isCorrect: false, consequence: "The lollipop stick gets sticky and breaks off in the lock. You've failed at breaking-and-entering and ruined a perfectly good lollipop." },
            ],
        },
        {
          type: 'narrative',
          text: "Balancing precariously, Timmy peeked through the window and gasped. It was all there! The Great Zucchini was on a small stage, rehearsing a new trick for his blue birds. 'And now,' he boomed to the empty room, 'BEHOLD! The Great Sprinkle Shower!' Behind him was a mountain of every rainbow sprinkle in town.",
          character: "Narrator",
          imagePrompt: "A comical scene of a magician in a sparkly costume standing on a stage inside his house, gesturing grandly to a literal mountain of rainbow sprinkles behind him. A flock of blue birds is perched on his shoulders, looking impressed.",
        },
        {
            type: 'interactive',
            prompt: "Timmy has his culprit. He needs to confront the magician and recover the goods. What's the most dramatic, detective-like way to do it?",
            hint: "A good detective always makes a memorable entrance and has a great catchphrase.",
            options: [
              { text: "Burst through the (unlocked) back door and declare 'The jig is up, Zucchini!'", isCorrect: true },
              { text: "Go get Mr. Henderson to come yell at him.", isCorrect: false, consequence: "Mr. Henderson is too busy fainting onto a pile of cones to come with you. A detective must be brave on his own." },
              { text: "Knock politely on the window to get his attention.", isCorrect: false, consequence: "The magician is so startled he trips, setting off his stage effects. The sprinkle mountain is launched by a hidden catapult, covering his entire house in a sticky, rainbow mess!" },
            ],
        },
        {
          type: 'narrative',
          text: "The plot twist: The Great Zucchini wasn't a villain; he was an over-enthusiastic performer! He hadn't stolen the sprinkles to ruin the festival; he 'borrowed' them to make it better! 'I wanted to create the most spectacular finale the town had ever seen!' he explained. 'I just... forgot the asking part.'",
          character: "Narrator",
          imagePrompt: "The magician looking sheepish as the little detective confronts him, hands on his hips. The magician is shrugging comically, blue birds fluttering around his head.",
        },
         {
            type: 'interactive',
            prompt: "Zucchini wants to make it up to everyone. What's the best way for him to use his magic and the mountain of sprinkles to save the festival?",
            hint: "The goal is to get the sprinkles on the sundaes in the most fun, magical way possible.",
            options: [
              { text: "Create magical 'sprinkle cannons' for the festival finale.", isCorrect: true },
              { text: "Try a spell to make all the sprinkles disappear for good.", isCorrect: false, consequence: "His trick works too well! The sprinkles vanish forever with a 'poof'. The Sundae Festival is a total flop. Whoops." },
              { text: "Try to turn the sprinkles into a giant, walking ice cream sundae monster.", isCorrect: false, consequence: "The spell goes wrong, creating a grumpy, melting golem that rampages through the festival, demanding more whipped cream. It's a delicious disaster!" },
            ],
        },
        {
          type: 'narrative',
          text: "The sprinkle crisis was averted! The Great Zucchini became the hero of the festival. His magic sprinkle cannons were the grand finale, showering every sundae with a perfect, colorful cascade of sugary joy. Detective Timmy's problem was solved, and he was rewarded with the first, most epically sprinkle-covered sundae, and a new title: The Sweetest Sleuth in Town.",
          character: "Narrator",
          imagePrompt: "A joyful town festival with people eating ice cream sundaes as rainbow sprinkles shoot out of colorful, magical cannons from a magician on a stage. Detective Timmy is in the foreground, taking a huge bite of a sundae.",
        }
      ]
    },
  ],
};
