// Story data structure
const storyData = {
    title: "The Lost City",
    chapters: [
        {
            id: 1,
            title: "Chapter 1: The Beginning",
            text: "You wake up in a dense jungle with no memory of how you got there. The air is thick and humid, filled with the sounds of exotic birds and distant water. As you stumble through the vegetation, you notice something unusual—ancient stone structures barely visible beneath centuries of vines and moss. Could this be the legendary lost city you've heard tales about?",
            choices: [
                { text: "Follow the stone structures deeper into the jungle", nextId: 2 },
                { text: "Look for fresh water and set up camp here", nextId: 3 }
            ]
        },
        {
            id: 2,
            title: "Chapter 2: The Path of Stones",
            text: "You follow the ancient stones, and with each step, the structures become more visible and impressive. After hours of careful navigation, you discover a massive stone gateway covered in intricate carvings. The entrance leads to darkness, but you can feel cool air flowing from within. Luminescent moss provides faint illumination.",
            choices: [
                { text: "Enter the gateway and explore the ruins", nextId: 4 },
                { text: "Study the carvings for clues before entering", nextId: 5 }
            ]
        },
        {
            id: 3,
            title: "Chapter 2: The Waterfall",
            text: "Following the sound of rushing water, you discover a magnificent waterfall cascading into a crystal-clear pool. The water sparkles with an unusual blue glow. Beyond the waterfall, you notice carved stone walls—this appears to be part of an ancient water temple. An old inscribed tablet sits near the pool's edge.",
            choices: [
                { text: "Drink from the glowing water pool", nextId: 6 },
                { text: "Read the inscribed tablet first", nextId: 5 }
            ]
        },
        {
            id: 4,
            title: "Chapter 3: Into the Darkness",
            text: "You step through the gateway into a vast underground chamber. Your eyes adjust to reveal an enormous city carved from stone. Buildings, plazas, and monuments stretch before you in eerie silence. At the center stands a towering structure—likely a temple or palace. As you move forward, you hear a low rumbling sound.",
            choices: [
                { text: "Move cautiously toward the central temple", nextId: 7 },
                { text: "Explore the buildings around you first", nextId: 8 }
            ]
        },
        {
            id: 5,
            title: "Chapter 3: The Message",
            text: "The carvings and inscriptions tell an incredible story: this city was built by an advanced civilization that mysteriously vanished. The tablet warns of a 'guardian' that protects the city's deepest secrets. However, it also mentions three treasures hidden within: the Crystal of Wisdom, the Scroll of Truth, and the Crown of Kings. Only together can they reveal the city's final mystery.",
            choices: [
                { text: "Search for the Crystal of Wisdom first", nextId: 9 },
                { text: "Seek out the Scroll of Truth", nextId: 10 }
            ]
        },
        {
            id: 6,
            title: "Chapter 3: The Awakening",
            text: "The moment the glowing water touches your lips, you feel a surge of energy. Your mind becomes crystal clear, and visions flood your consciousness—you see glimpses of the city's past: a thriving civilization, brilliant architecture, and then sudden darkness. The visions fade, and you realize you now understand the ancient language carved on the tablet.",
            choices: [
                { text: "Use your newfound knowledge to enter the temple", nextId: 11 },
                { text: "Continue exploring the temple entrance", nextId: 5 }
            ]
        },
        {
            id: 7,
            title: "Chapter 4: The Temple Guardian",
            text: "As you approach the central temple, statues lining the path suddenly glow with ethereal light. A voice echoes through the chamber, speaking in a language you somehow understand. It is the guardian, offering you a choice: prove your worthiness through wisdom, courage, or compassion.",
            choices: [
                { text: "Choose to test your wisdom", nextId: 12 },
                { text: "Choose to test your courage", nextId: 13 },
                { text: "Choose to test your compassion", nextId: 14 }
            ]
        },
        {
            id: 8,
            title: "Chapter 4: Discovering History",
            text: "The buildings are perfectly preserved, filled with artifacts and murals depicting the city's history. You find libraries with ancient texts, storage rooms full of tools, and homes with personal belongings. It's as if everyone simply vanished overnight. In one building, you discover a chamber with five doors, each marked with a different symbol.",
            choices: [
                { text: "Choose the door marked with a star", nextId: 15 },
                { text: "Choose the door marked with a spiral", nextId: 16 }
            ]
        },
        {
            id: 9,
            title: "Chapter 4: Quest for the Crystal",
            text: "Following the ancient map from the tablet, you navigate through hidden passages. Eventually, you reach a grand chamber where the Crystal of Wisdom sits atop a pedestal, radiating soft blue light. Suddenly, the ground trembles. It appears the crystal is protected by an ancient magical mechanism.",
            choices: [
                { text: "Attempt to grab the crystal quickly", nextId: 17 },
                { text: "Look for a way to safely deactivate the mechanism", nextId: 18 }
            ]
        },
        {
            id: 10,
            title: "Chapter 4: The Hidden Library",
            text: "You discover an enormous library preserved in a sealed chamber, its contents miraculously intact. Scrolls and tablets line the walls, and at the center sits the Scroll of Truth, glowing with ancient power. As you reach for it, you hear footsteps echoing through the chamber. Someone—or something—is approaching.",
            choices: [
                { text: "Take the scroll and run toward the exit", nextId: 19 },
                { text: "Hide and observe who approaches", nextId: 20 }
            ]
        },
        {
            id: 11,
            title: "Chapter 4: The Enlightened Path",
            text: "With your newfound understanding, you speak the ancient words inscribed above the temple entrance. The massive doors grind open, revealing a breathtaking sight: a library of knowledge spanning the civilization's entire history. At its center floats an artifact that seems to contain captured starlight.",
            choices: [
                { text: "Study the artifact to understand the truth", nextId: 21 },
                { text: "Leave and search for other treasures", nextId: 9 }
            ]
        },
        {
            id: 12,
            title: "Chapter 5: The Wisdom Test",
            text: "The guardian presents you with three philosophical questions about the nature of existence, time, and civilization. You answer thoughtfully and carefully. The guardian seems satisfied with your responses. 'You possess wisdom,' it says. 'Take these artifacts—they will help you understand our civilization's greatest secret.'",
            choices: [
                { text: "Accept the artifacts and ask about the secret", nextId: 22 },
                { text: "Request to see the secret firsthand", nextId: 23 }
            ]
        },
        {
            id: 13,
            title: "Chapter 5: The Courage Test",
            text: "The guardian opens a pit beneath the temple floor, revealing a treacherous descent. 'Descend into the abyss,' it commands. Without hesitation, you climb down the ancient stone steps into darkness. You discover a chamber deep below containing the city's most precious treasures and its darkest secrets.",
            choices: [
                { text: "Take the treasures and return to the guardian", nextId: 24 },
                { text: "Stay to uncover all the secrets", nextId: 25 }
            ]
        },
        {
            id: 14,
            title: "Chapter 5: The Compassion Test",
            text: "The guardian reveals the truth: the city's inhabitants were trapped in eternal stasis, victims of a catastrophe. The guardian has been protecting them, waiting for someone with compassion to understand their plight. It shows you how to awaken them safely.",
            choices: [
                { text: "Perform the ritual to awaken the citizens", nextId: 26 },
                { text: "Ask to learn more before deciding", nextId: 27 }
            ]
        },
        {
            id: 15,
            title: "Chapter 5: The Star Chamber",
            text: "The star-marked door opens to reveal a vast observatory. The chamber's ceiling depicts the night sky with incredible precision. In the center stands an astrolabe of immense complexity. You realize this was used to navigate by the stars.",
            choices: [
                { text: "Use the astrolabe to navigate the city", nextId: 28 },
                { text: "Continue exploring other doors", nextId: 16 }
            ]
        },
        {
            id: 16,
            title: "Chapter 5: The Spiral Truth",
            text: "The spiral-marked door leads to a chamber decorated with spiral patterns that seem to move and dance. At the center is a massive spiral staircase descending into glowing mist. This appears to be the path to the city's inner sanctum.",
            choices: [
                { text: "Descend the spiral staircase", nextId: 29 },
                { text: "Turn back and try another path", nextId: 8 }
            ]
        },
        {
            id: 17,
            title: "Chapter 5: The Guardian Trap",
            text: "As your hand approaches the crystal, magical barriers erupt, forcing you backward. The mechanism is far more complex than you anticipated. You realize your hasty attempt nearly triggered a catastrophic chain reaction that would have collapsed the entire chamber.",
            choices: [
                { text: "Search for another way to access the crystal", nextId: 18 },
                { text: "Retreat and reconsider your strategy", nextId: 5 }
            ]
        },
        {
            id: 18,
            title: "Chapter 5: Solving the Puzzle",
            text: "You examine the pedestal carefully and discover ancient mechanisms. By rotating specific stones and aligning certain symbols, you carefully deactivate the protective spell. The crystal gleams as its barriers fade. You successfully claim the Crystal of Wisdom.",
            choices: [
                { text: "Take the crystal to the temple's altar", nextId: 22 },
                { text: "Continue searching for the other treasures", nextId: 10 }
            ]
        },
        {
            id: 19,
            title: "Chapter 5: The Chase",
            text: "You grab the Scroll of Truth and bolt from the library. Behind you, the sound of pursuit echoes through the passages. You run through winding corridors until you burst into open air at the city's edge. Behind you, the pursuing figure stops—it is another human, not a monster.",
            choices: [
                { text: "Turn to face the mysterious figure", nextId: 30 },
                { text: "Jump across to an adjacent building", nextId: 31 }
            ]
        },
        {
            id: 20,
            title: "Chapter 5: The Encounter",
            text: "From your hiding place, you watch as an elderly figure enters the chamber, moving slowly and carefully. They seem to be collecting items with great care, treating them reverently. This appears to be another explorer, perhaps someone who has been here before.",
            choices: [
                { text: "Reveal yourself and make contact", nextId: 30 },
                { text: "Quietly take the scroll and leave unseen", nextId: 19 }
            ]
        },
        {
            id: 21,
            title: "ENDING - The Truth Revealed",
            text: "As you study the artifact, the starlight within reveals the civilization's ultimate truth: they achieved such advanced knowledge that they chose to transcend physical form entirely, becoming beings of pure consciousness. They left their city as a beacon of hope, believing that one day, a visitor would come to learn from their achievements. The artifact glows brilliantly as it imparts millennia of wisdom directly into your mind. You are forever changed, carrying the greatest knowledge of a lost civilization.",
            choices: [
                { text: "Return to the outside world", nextId: 32 },
                { text: "Explore more of the eternal library", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 22,
            title: "ENDING - The Guardian's Gift",
            text: "The guardian presents you with three ancient artifacts: a crown, a crystal, and a scroll. Together, they contain the complete history of the civilization and the secrets to preventing the catastrophe that once befell them. With this knowledge, you understand that this discovery could change human history forever. You have been chosen as the keeper of their legacy.",
            choices: [
                { text: "Accept this great responsibility", nextId: 32 },
                { text: "Become the guardian yourself", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 23,
            title: "ENDING - The Vision",
            text: "The guardian grants you a vision of the city's final moments before its disappearance. You witness their achievements: floating cities, mastery over energy, and harmony with nature. You see their ultimate transformation as they became something beyond human understanding. The vision leaves you with a profound sense of wonder and responsibility to protect this knowledge.",
            choices: [
                { text: "Return with this sacred knowledge", nextId: 32 },
                { text: "Choose to stay and guard the city", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 24,
            title: "ENDING - The Triumphant Return",
            text: "You emerge from the abyss with the city's greatest treasures in hand. The guardian bows before you, acknowledging your courage. You have proven yourself worthy and earned the trust of an ancient civilization. The treasures contain technology and knowledge far beyond current human understanding. You realize you must decide carefully how to share this discovery with the world.",
            choices: [
                { text: "Become the protector of these secrets", nextId: 32 },
                { text: "Carefully reveal your discovery", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 25,
            title: "ENDING - Secrets of the Deep",
            text: "Deep in the chamber, you uncover the true history: the city was once attacked by hostile forces, leading to a great defense mechanism. The stasis preserved the inhabitants in hopes of a future awakening. Their advanced knowledge remains intact in crystalline storage devices throughout the chamber. You have found a civilization frozen in time, waiting for salvation.",
            choices: [
                { text: "Become their liberator", nextId: 32 },
                { text: "Return to seek help", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 26,
            title: "ENDING - The Awakening",
            text: "You perform the awakening ritual, and the city slowly comes to life. The inhabitants of this ancient civilization gradually emerge from their stasis, surprised but grateful. They thank you for freeing them after so many ages. Together, you begin to restore the city and help them understand the changes that have occurred in the outside world.",
            choices: [
                { text: "Help bridge two worlds", nextId: 32 },
                { text: "Build a new future together", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 27,
            title: "ENDING - The Patient Guardian",
            text: "You ask the guardian to teach you more about the trapped civilization and their history. It shares centuries of knowledge about their culture, achievements, and the tragedy that befell them. With this understanding, you decide together on the best path forward—whether to awaken them or preserve their rest for another era.",
            choices: [
                { text: "Make your decision", nextId: 32 },
                { text: "Return to contemplate", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 28,
            title: "ENDING - Navigation to Truth",
            text: "Using the ancient astrolabe, you navigate through the city's hidden passages, discovering chambers filled with preserved knowledge, artwork, and technology. The astrolabe acts as a key, unlocking doors and mechanisms throughout the city. You uncover the complete story of this civilization and their legacy, ensuring their memory will never be forgotten.",
            choices: [
                { text: "Share this discovery with the world", nextId: 32 },
                { text: "Become the city's keeper", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 29,
            title: "ENDING - The Inner Sanctum",
            text: "You descend the spiral staircase and reach the very heart of the city. Here lies an enormous chamber containing the source of the civilization's power—a crystalline structure that pulses with ancient energy. At its base is a message in universal symbols explaining their final message to the future: 'Peace is the greatest achievement.'",
            choices: [
                { text: "Return to share this message", nextId: 32 },
                { text: "Protect this sacred place", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 30,
            title: "ENDING - The Alliance",
            text: "The mysterious figure turns out to be a fellow explorer who has been studying this city for years. Together, you pool your knowledge and resources. The Scroll of Truth combined with their research reveals the complete story of the lost civilization. You decide to work together to protect and preserve this incredible discovery for all of humanity.",
            choices: [
                { text: "Begin your partnership", nextId: 32 },
                { text: "Share the knowledge globally", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 31,
            title: "ENDING - The Escape",
            text: "You successfully leap across to the adjacent building and escape into the city's outer passages. The Scroll of Truth is safely in your possession. As you emerge into daylight at the jungle's edge, you realize no one will believe your incredible discovery without concrete proof. You decide to keep the scroll safe and plan your return.",
            choices: [
                { text: "Return to civilization with proof", nextId: 32 },
                { text: "Prepare for another expedition", nextId: 32 }
            ],
            isEnding: true
        },
        {
            id: 32,
            title: "The End",
            text: "Your journey through the lost city has transformed you forever. Whether you became a guardian, a protector, a bridge between worlds, or a keeper of secrets, you have discovered something that will change everything. The mysteries of ancient civilizations are no longer just legends—they are real, and the story of humanity is far more complex than anyone imagined. Your adventure may be ending, but the impact of your discoveries will echo through the ages.",
            choices: [
                { text: "Play Again", nextId: 1 }
            ],
            isEnding: true,
            isGameEnd: true
        }
    ]
};
