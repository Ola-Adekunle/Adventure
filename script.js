var xpValue = 0;
var health = 100;
var weapons = ["Stick"];
var gem = 100;
const fightBtns = document.getElementsByClassName("fight-btn");
const [fightBtn1, fightBtn2, fightBtn3, fightBtn4] = fightBtns;
const leftBtns = document.getElementsByClassName("left-btn");
const [leftBtn1, leftBtn2, leftBtn3] = leftBtns;
const rightBtns = document.getElementsByClassName("right-btn");
const [rightBtn1, rightBtn2, rightBtn3] = rightBtns;
const background = document.querySelector("#background");
const back = document.getElementById("back");
const home = document.querySelector("#home");
const xpText = document.querySelector("#xp-text");
const healthText = document.querySelector("#health-text");
const weaponText = document.querySelector("#weapon-text");
const gemText = document.querySelector("#gem-text");
const intro = document.querySelector("#intro");
const start = document.getElementById("start");
const storyline = document.querySelector("#storyline");
var storeContainer = document.querySelector("#store-container");
const weaponsContainer = document.querySelector("#weapons-container")
const pickAnimal = document.querySelector("#animal-selection");
const snake = document.querySelector("#snake");
const hyena = document.querySelector("#hyena");
const bear = document.querySelector("#bear");
const startFight = document.querySelector("#fight-section");
const animalHealthText = document.querySelector("#animal-health-text");
const animalLevelText = document.querySelector("#animal-level-text");
const animalName = document.querySelector("#animal-name");
const buy1Text = document.querySelector("#buy-1");
const buy2Text = document.querySelector("#buy-2");
const buy3Text = document.querySelector("#buy-3");
const buy4Text = document.querySelector("#buy-4");
const buy5Text = document.querySelector("#buy-5");
const health10 = document.querySelector("#health10");
const health50 = document.querySelector("#health50");
const weapon1 = document.querySelector("#weapon-1");
const weapon2 = document.querySelector("#weapon-2");
const weapon3 = document.querySelector("#weapon-3");
const attackBtn = document.querySelector("#attack-btn");
const defendBtn = document.querySelector("#defend-btn");
const owned = document.querySelector("#owned")
const headerText = document.querySelector("#headerText");
const fightHTML = document.querySelector("#fight-text");
const hide = document.querySelector('#hide');
const inventory = [
    {name: "Stick", power: 3},
    {name: "Sledgehammer", power: 5},
    {name: "Sphear", power: 8},
    {name: "Sword", power: 10}
]

const predator = [
    {
        name: "Snake",
        health: 50,
        level: 20,
        dificulty: "Easy",
        headerText: "Fighting Snake",
        activeWeapon: "stick",
        encounterHTML: "<p class='text'>The snake hisses, its forked tongue flicking out as it gauges your next move. The sunlight glints off its scales, highlighting its dangerous beauty. It's only a few feet away, and you can see the venom glistening on its fangs. You are armed with a stick you picked up earlier.</p>"
    },
    {
        name: "Hyena",
        health: 100,
        level: 20,
        dificulty: "Normal",
        headerText: "Fighting Hyena",
        encounterHTML: "<p class='text'>The hyena, with its ragged fur and powerful jaws, circles you with a predatory gleam in its eyes. Its teeth are bared, and it snarls aggressively, clearly intent on claiming the carcass and you as its prey. You can see that it’s not alone—a pack might be nearby, and it’s clear you need to act quickly.</p>"
    },
    {
        name: "Bear",
        health: 200,
        level: 15,
        dificulty: "Hard",
        headerText: "Fighting Bear",
        encounterHTML: "<p class='text'>You were catching your breath after your brutal encounter with the hyena. The jungle is unusually quiet now, a stark contrast to the earlier chaos. As you stood over the fallen hyena, you heard a deep, rumbling growl that sends a chill down your spine. The ground trembles slightly, and a heavy silence envelops the clearing.</p><p class='text'>The low, guttural roar grows louder, echoing through the trees and shaking the underbrush. Your instincts kick in, and you quickly realized that the sound is not a distant threat—it’s approaching fast. The massive bear that has been drawn to the clearing by the commotion emerges from the jungle, its eyes locked onto you with a deadly intent.</p><p class='text'>The bear, a towering figure with powerful limbs and a coat of matted fur, strides into the clearing. Its breath is heavy and labored, and it emits another growl that reverberates through the air. The clearing, once a scene of victory, is now the stage for a fight with one of the jungle’s most fearsome predators.</p><p class='text'>The bear's eyes are fixed on you, its powerful jaws slightly open, revealing sharp teeth. It seems enraged, either by the scent of blood from the hyena or by the intrusion into its territory. Its stance is aggressive, and it begins to charge toward you with a terrifying speed.</p>"
    }
]
const battleArray = [
    [

        {
            "btn text": ["Attack", "Defend"],
            "btn function": [attack, defend],
            textHTML: [
                "<p class='text'>Your strike connects with a sickening thud, hitting the snake squarely in its midsection. The force of the blow knocks the snake back, but it’s far from defeated. It writhes in pain, its body twisting violently as it prepares to retaliate.</p><p class='text'>The snake rears up, anger flashing in its cold eyes, and strikes out with blinding speed. You narrowly dodge the attack, feeling the rush of air as its fangs miss you by inches. You realize that the snake won’t give up easily—it’s a fight to the death.</p>", "<p class='text'>The snake rears up, anger flashing in its cold eyes, and strikes out with blinding speed. You barely evade the attack, the air chilling as the snake's fangs graze past you by mere inches. The sight of its venomous mouth snapping shut so close sends a shiver down your spine.</p>"]
        },
        {
            activeWeapon: "stick",
            "btn text": ["Attack", "Defend"],
            "btn function": [attack, defend],
            textHTML: [
                "<p class='text'>With determination in your eyes, you tighten your grip on the stick and take aim. The snake is momentarily disoriented from its missed strike, giving you the perfect opportunity. You swing the stick again, this time with precise intent, aiming for the snake’s head.</p><p class='text'>The stick connects with a powerful crack, striking the snake directly on its head. The force of the impact causes the snake to convulse violently. It hisses loudly, its movements becoming erratic. For a moment, it seems stunned, but you know you need to ensure it's incapacitated.</p><p class='text'>The snake's movements slow, and its once-threatening posture collapses. Its head drops, and it becomes clear that the fight is almost over. You remain vigilant, watching carefully for any last attempts at retaliation.</p>", "<p class='text'>you waited for some seconds to study the direction of attack of the snake. The snake, sensing your resolve and the danger it faces, recoils in fear.</p>"]
        },{textHTML: ["<p class='text'></p>","<p class='text'></p>"]}
    ],
    [
        {
            activeWeapon: "stick",
            "btn text": ["Attack", "Defend"],
            "btn function": [attack, defend],
            textHTML: ["<p class='text'>As the hyena lunges toward you, you swing the stick with all your might, aiming to strike it on the side. The stick connects with a resounding thud, knocking the hyena back and making it yelp in pain. The beast recoils but quickly regains its footing, snarling and baring its teeth.</p><p class='text'>You then took a deep breath, making yourself appear as large and imposing as possible. You raise the stick high above your head, shouting loudly and swinging it in a wide arc to create the illusion of greater threat.</p><p class='text'>The hyena pauses, its eyes widening as it takes in your aggressive stance. It growls lowly, hesitant for a moment as if unsure whether to continue the attack. The beast’s posture becomes less aggressive, its ears flicking back as it assesses the new danger you’ve presented.</p>","<p class='text'>You take a deep breath, making yourself appear as large and imposing as possible. You raise the stick high above your head, shouting loudly and swinging it in a wide arc to create the illusion of greater threat.</p><p class='text'>The hyena pauses, its eyes widening as it takes in your aggressive stance. It growls lowly, hesitant for a moment as if unsure whether to continue the attack. The beast’s posture becomes less aggressive, its ears flicking back as it assesses the new danger you’ve presented.</p>"]
        },
        {
            activeWeapon: "stick",
            "btn text": ["Attack", "Defend"],
            "btn function": [attack, defend],
            textHTML: ["<p class='text'>Seizing the opportunity as the hyena hesitates, you decide to take decisive action. With your grip firm on the stick, you adjust your stance and aim directly for the hyena’s vulnerable neck.</p><p class='text'>As the hyena edges back, you lunge forward with a sudden, powerful thrust. The stick pierces through the hyena’s neck with a sickening crunch, the animal’s eyes widening in shock. It lets out a final, strangled cry as it collapses to the ground, its body twitching and convulsing before becoming still.</p>","<p class='text'>As you continue to make yourself look as menacing as possible, the hyena’s growls grow quieter, and it begins to back away, its gaze never leaving you. The standoff seems to stretch on, the tension palpable. Finally, the hyena turns and retreats into the jungle, vanishing into the dense foliage.</p>"],
        },{textHTML: ["<p class='text'></p>","<p class='text'></p>"]}
    ],
    [
        {
            activeWeapon: "stick",
            "btn text": ["Attack", "Defend"],
            "btn function": [attack, defend],
            textHTML: ["<p class='text'>you grips your stick tightly, steeling yourself as the bear charges. As the bear closes in, you swing the stick with all your might, aiming for its head. The stick connects with a heavy thud, causing the bear to stagger back momentarily, its roar turning into a pained growl.</p><p class='text'>The bear shakes its head, visibly enraged but now wary of your attack. It growls deeply, its eyes never leaving you. The battle is far from over, but your swift strike has bought you some time.</p><p class='text'>The bear, now enraged and wary of your attack, roars loudly and charges again with renewed ferocity. Its massive claws swipe through the air, and its powerful jaws snap shut with a terrifying force.</p>","<p class='text'>you hide yourself behind a big tree, hoping the bear wouldn't see you, but the scent of blood on your shirt couldn’t keep you hidden.</p>"]
        },
        {
            activeWeapon: "stick",
            "btn text": ["Attack", "Defend"],
            "btn function": [attack, defend],
            textHTML: ["<p class='text'>As the bear lunges at you with its massive claws, you brace yourself and lift the stick to block the incoming swipe. The stick meets the bear's claws with a resounding crack, absorbing some of the force but shaking you with the impact.</p>","<p class='text'>As the bear lunges at you, you’re forced to react quickly. Its swipe narrowly misses you, sending a rush of air past your face. The ground shakes as it tries to claw you down, and you can see its teeth glistening with a deadly intent.</p>"]
        },
        {
            activeWeapon: "stick",
            "btn text": ["Attack", "Defend"],
            "btn function": [attack, defend],
            textHTML: ["<p class='text'>The bear recoils slightly, momentarily stunned by the blocked attack. Seizing the opportunity, you swing the stick again, aiming for its head and shoulders. The bear growls in pain as the stick connects, but it quickly recovers and snarls, its eyes blazing with anger.</p><p class='text'>The bear’s assault continues, but your determined defense has given you a slight edge. You’re still in a dangerous position, but you’ve managed to hold your ground for now.</p>","<p class='text'>Realizing that you need to gain an advantage, you quickly scan the clearing for anything that could help. Nearby, you spot a pile of fallen branches and some large rocks scattered around.</p><p class='text'>With the bear momentarily distracted by your previous strikes, you grab a couple of rocks and throw them towards a cluster of dense bushes. The sound of the rocks hitting the foliage creates a loud crash, drawing the bear’s attention.</p><p class='text'>The bear turns towards the noise, growling and sniffing the air in curiosity. This brief diversion gives you a crucial opportunity to reposition yourself. You use the chance to move to a more defensible spot behind a large tree, where you can better shield yourself from the bear’s attacks.</p><p class='text'>The bear remains focused on the noise, giving you a few precious moments to regroup and prepare for the next move.</p>"]
        },
        {
            activeWeapon: "stick",
            "btn text": ["Attack", "Defend"],
            "btn function": [attack, defend],
            textHTML: ["<p class='text'>Realizing that you need to gain an advantage, you quickly scan the clearing for anything that could help. Nearby, you spot a pile of fallen branches and some large rocks scattered around.</p><p class='text'>With the bear momentarily distracted by your previous strikes, you grab a couple of rocks and throw them towards a cluster of dense bushes. The sound of the rocks hitting the foliage creates a loud crash, drawing the bear’s attention.</p><p class='text'>Seizing the opportunity created by the diversion, you position yourself behind the large tree, keeping an eye on the bear as it investigates the noise. With the bear’s attention focused away from you, you prepare for a decisive attack.</p><p class='text'>Quietly, you move to the side, positioning yourself where the bear can’t see you. Holding the stick tightly, you take a deep breath and charge toward the bear’s blind spot. With a surge of adrenaline, you swing the stick with all your might, aiming for the bear’s vulnerable side.</p><p class='text'>The stick hit the bear with force. The bear roars in surprise and pain, its body shuddering from the impact. The unexpected attack causes it to stagger, its previously focused aggression now replaced with confusion and agony.</p><p class='text'>The bear, enraged and hurt from your previous attack, reacts with a furious swipe of its massive claws. You see the claws coming and instinctively dodge to the side, narrowly avoiding the deadly swipe.</p>","<p class='text'>The bear, now disoriented as he couldn’t find you at the noise,it turns around slowly, its movements less coordinated. The fight has shifted in your favor, but you know you must remain vigilant. The bear is still a formidable opponent, but your strategic attack has given you a significant advantage.</p><p class='text'>The bear then picked up a faint scent of blood in the air, then follows the scent to where you were.</p><p class='text'>Upon seeing you, it attacks with a furious swipe of its massive claws. You see the claws coming and instinctively dodge to the side, narrowly avoiding the deadly swipe.</p>"]
        },
        {
            activeWeapon: "stick",
            "btn text": ["Attack", "Defend"],
            "btn function": [attack, defend],
            textHTML: ["<p class='text'>The bear’s claws slice through the air with a forceful whoosh and connect with the tree behind you. The impact causes a shower of splinters as the tree’s bark is shredded, and the bear lets out a frustrated roar, its claws embedded in the wood for a moment before it retracts them.</p><p class='text'>The bear pulls back, growling angrily as it shakes its paws, dislodging fragments of bark. Its eyes are still fixed on you, its rage undiminished despite the failed attack. The clearing remains tense, the battle far from over, but you’ve managed to avoid serious injury.</p><p class='text'>Seeing the bear’s frustration and its moment of distraction, you decide to take advantage of the opportunity. With a determined effort, you swing the stick again, aiming for the bear’s leg. The stick connects with a sharp crack, causing the bear to roar in pain as it stumbles its leg buckling under the force of the blow.</p><p class='text'>The bear’s balance is compromised, and it lurches awkwardly toward the edge of a hidden pit you had noticed earlier. The pit, camouflaged by fallen leaves and branches, catches the bear off guard. With a final, desperate roar, the bear loses its footing and falls into the pit with a heavy thud.</p>","<p class='text'>The bear’s balance is compromised, and it lurches awkwardly toward the edge of a hidden pit you had noticed earlier. The pit, camouflaged by fallen leaves and branches, catches the bear off guard. With a final, desperate roar, the bear loses its footing and falls into the pit with a heavy thud.</p>"]
        },
        {
            "btn text": ["Attack", "Defend"],
            "btn function": [attack, defend],
            textHTML: ["<p class='text'>The bear struggles inside the pit, its roars echoing from the depths as it attempts to climb out. The pit’s walls are steep and slippery, making it difficult for the bear to gain purchase. Its movements become frantic, but it’s clear that the bear is now trapped.</p><p class='text'>With the bear trapped in the pit, its roars echoing faintly from below, you recognize that this is your chance to escape. Relieved to have neutralized the threat, you quickly gather your belongings and make your way away from the clearing.</p><p class='text'>The jungle, once again, becomes your path as you move swiftly through the underbrush. The sounds of the bear’s struggles fade into the distance, and the danger that once loomed over you is now behind you.</p>","<p class='text'>The bear struggles inside the pit, its roars echoing from the depths as it attempts to climb out. The pit’s walls are steep and slippery, making it difficult for the bear to gain purchase. Its movements become frantic, but it’s clear that the bear is now trapped.</p><p class='text'>With the bear trapped in the pit, its roars echoing faintly from below, you recognize that this is your chance to escape. Relieved to have neutralized the threat, you quickly gather your belongings and make your way away from the clearing.</p><p class='text'>The jungle, once again, becomes your path as you move swiftly through the underbrush. The sounds of the bear’s struggles fade into the distance, and the danger that once loomed over you is now behind you.</p>"]
        },{textHTML: ["<p class='text'></p>","<p class='text'></p>"]}
    ]
]

var fighting;
var fightingAnimal = -1;

home.onclick = goHome;
back.onclick = goBack;
start.onclick = startGame;
fightBtn1.onclick = fightAnimal;
fightBtn2.onclick = fightAnimal;
fightBtn3.onclick = fightAnimal;
fightBtn4.onclick = fightAnimal;
snake.onclick = fightSnake;
hyena.onclick = fightHyena;
bear.onclick = fightBear;
leftBtn1.onclick = buyBoost;
leftBtn2.onclick = buyBoost;
leftBtn3.onclick = buyBoost;
rightBtn1.onclick = buyWeapon;
rightBtn2.onclick = buyWeapon;
rightBtn3.onclick = buyWeapon;
health10.onclick = healthTen;
health50.onclick = healthFifty;
weapon1.onclick = weaponOne;
weapon2.onclick = weaponTwo;
weapon3.onclick = weaponThree;
attackBtn.onclick = attack;
defendBtn.onclick = defend;

function goBack() {
    if (startFight.style.display === "block"){
        fighting;
        fightingAnimal = 0;
        predator[0].health = 50;
        predator[1].health = 100;
        predator[2].health = 200;
        fightHTML.innerHTML = battleArray[fighting][fightingAnimal].textHTML[0];
        return fightAnimal();
    }else if (storeContainer.style.display === "block" ||
        weaponsContainer.style.display === "block") { 
        return fightAnimal();
    }else if (pickAnimal.style.display === "block") { 
        return startGame();
    }else if (intro.style.display === "block") {
        xpValue = 0;
        health = 100;
        weapons = ["Stick"];
        owned.innerHTML = `<h4>${weapons[weapons.length-1]}</h4>`
        gem = 100;
        healthText.innerText = health;
        gemText.innerText = gem;
        xpText.innerText = xpValue;
        weaponText.innerText = weapons[weapons.length - 1];
    }else {return goHome();}
}

function toDisplay() {
    intro.style.display = "none";
    storyline.style.display = "none";
    pickAnimal.style.display = "none";
    startFight.style.display = "none";
    storeContainer.style.display = "none";
    weaponsContainer.style.display = "none";
}

function goHome() {
    background.style.backgroundImage = 'url("./images/cover-image.jpg")';
    toDisplay();
    intro.style.display = "block";
    fighting;
    fightingAnimal = -1;
    back.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/></svg>`;
    predator[0].health = 50;
    predator[1].health = 100;
    predator[2].health = 200;;
    fightHTML.innerHTML = battleArray[fighting][fightingAnimal].textHTML[0];
}

function startGame() {
    background.style.backgroundImage = 'url("./images/man-jungle.jpg")';
    toDisplay();
    storyline.style.display = "block";
    back.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>`
}

function buyBoost() {
    background.style.backgroundImage = 'url("./images/store.jpg")';
    toDisplay();
    storeContainer.style.display = "block";
}

function buyWeapon() {
    background.style.backgroundImage = 'url("./images/weapons.jpg")';
    toDisplay();
    weaponsContainer.style.display = "block";
}

function fightAnimal() {
    background.style.backgroundImage = 'url("./images/cover-image.jpg")';
    toDisplay();
    pickAnimal.style.display = "block";
    fighting;
    fightingAnimal = -1;
    predator[0].health = 50;
    predator[1].health = 100;
    predator[2].health = 200;
    fightHTML.innerHTML = battleArray[fighting][fightingAnimal].textHTML[0];
}

function weaponOne() {
    if (gem >= 30 && weapons.includes(inventory[1].name) === false) {
            var index = 1
            addWeapon(inventory[index].name);
            gem -= 30;
            weaponText.innerText = weapons[weapons.length-1];
            gemText.innerText = gem;

            owned.innerHTML = weapons.map(i => `<h4>${i}</h4>`).join('');
    }else {
            buy3Text.innerText = "You have already purchased this weapon."      
    }    
}

function weaponTwo() {
    if (gem >= 60 && weapons.includes(inventory[2].name) === false) {
            index = 2
            addWeapon(inventory[index].name);
            gem -= 60;
            weaponText.innerText = weapons[weapons.length-1];
            gemText.innerText = gem;
            
            owned.innerHTML = weapons.map(i => `<h4>${i}</h4>`).join('');
    }else {
            buy4Text.innerText = "You have already purchased this weapon."        
    }  
}

function weaponThree() {
    if (gem >= 80 && weapons.includes(inventory[3].name) === false) {
            index = 3;
            addWeapon(inventory[index].name);
            gem -= 80;
            weaponText.innerText = weapons[weapons.length-1];
            gemText.innerText = gem;
            
            owned.innerHTML = weapons.map(i => `<h4>${i}</h4>`).join('');
    }else {
        buy5Text.innerText = "You have already purchased this weapon."
    } 
}

function addWeapon(newWeapon) {
    weapons.push(newWeapon); 
    updateCurrentWeapon(newWeapon);
}

function updateCurrentWeapon(newWeapon) {
    predator[0].encounterHTML = predator[0].encounterHTML.replace(predator[0].activeWeapon, newWeapon);
    predator[0].activeWeapon = newWeapon;
    
    const weaponRegex1 = new RegExp(battleArray[0][1].activeWeapon, 'g');
    battleArray[0][1].textHTML[0] = battleArray[0][1].textHTML[0].replace(weaponRegex1, newWeapon);
    battleArray[0][1].activeWeapon = newWeapon;

    const weaponRegex2 = new RegExp(battleArray[1][0].activeWeapon, 'g');
    battleArray[1][0].textHTML[0] = battleArray[1][0].textHTML[0].replace(weaponRegex2, newWeapon);
    battleArray[1][0].activeWeapon = newWeapon;

    const weaponRegex3 = new RegExp(battleArray[1][0].activeWeapon, 'g');
    battleArray[1][0].textHTML[1] = battleArray[1][0].textHTML[1].replace(weaponRegex3, newWeapon);
    battleArray[1][0].activeWeapon = newWeapon;

    const weaponRegex4 = new RegExp(battleArray[1][1].activeWeapon, 'g');
    battleArray[1][1].textHTML[0] = battleArray[1][1].textHTML[0].replace(weaponRegex4, newWeapon);
    battleArray[1][1].activeWeapon = newWeapon;

    const weaponRegex5 = new RegExp(battleArray[2][0].activeWeapon, 'g');
    battleArray[2][0].textHTML[0] = battleArray[2][0].textHTML[0].replace(weaponRegex5, newWeapon);
    battleArray[2][0].activeWeapon = newWeapon;

    const weaponRegex6 = new RegExp(battleArray[2][1].activeWeapon, 'g');
    battleArray[2][1].textHTML[0] = battleArray[2][1].textHTML[0].replace(weaponRegex6, newWeapon);
    battleArray[2][1].activeWeapon = newWeapon;

    const weaponRegex7 = new RegExp(battleArray[2][2].activeWeapon, 'g');
    battleArray[2][2].textHTML[0] = battleArray[2][2].textHTML[0].replace(weaponRegex7, newWeapon);
    battleArray[2][2].activeWeapon = newWeapon;

    const weaponRegex8 = new RegExp(battleArray[2][3].activeWeapon, 'g');
    battleArray[2][3].textHTML[0] = battleArray[2][3].textHTML[0].replace(weaponRegex8, newWeapon);
    battleArray[2][3].activeWeapon = newWeapon;

    const weaponRegex9 = new RegExp(battleArray[2][4].activeWeapon, 'g');
    battleArray[2][4].textHTML[0] = battleArray[2][4].textHTML[0].replace(weaponRegex9, newWeapon);
    battleArray[2][4].activeWeapon = newWeapon;
}

function fightSnake() {
    background.style.backgroundImage = 'url("./images/man-and-snake.jpg")';
    toDisplay();
    startFight.style.display = "block";
    fighting = 0;
    headerText.innerText = predator[fighting].headerText;
    fightHTML.innerHTML = predator[fighting].encounterHTML;
    animalLevelText.innerText = predator[fighting].dificulty;
    animalHealthText.innerText = predator[fighting].health;
    animalName.innerText = predator[fighting].name;
    hide.style.display = "none";
}

function fightHyena() {
    background.style.backgroundImage = 'url("./images/man-and-hyena.jpg")';
    toDisplay();
    startFight.style.display = "block";
    fighting = 1;
    headerText.innerText = predator[fighting].headerText;
    fightHTML.innerHTML = predator[fighting].encounterHTML;
    animalLevelText.innerText = predator[fighting].dificulty;
    animalHealthText.innerText = predator[fighting].health;
    animalName.innerText = predator[fighting].name;
    hide.style.display = "none";
}

function fightBear() {
    background.style.backgroundImage = 'url("./images/man-and-bear.jpg")';
    toDisplay();
    startFight.style.display = "block";
    fighting = 2;
    headerText.innerText = predator[fighting].headerText;
    fightHTML.innerHTML = predator[fighting].encounterHTML;
    animalLevelText.innerText = predator[fighting].dificulty;
    animalHealthText.innerText = predator[fighting].health;
    animalName.innerText = predator[fighting].name;
    hide.style.display = "none";
}

function healthTen() {
    if (gem >= 10) {
        health += 10;
        gem -= 10;
        healthText.innerText = health;
        gemText.innerText = gem;
    }else {
        buy1Text.innerText = "You don't have enough gem to purchase this item"
    }
}

function healthFifty() {
    if (gem >= 40) {
        health += 50;
        gem -= 40;
        healthText.innerText = health;
        gemText.innerText = gem;
    }else {
        buy2Text.innerText = "You don't have enough gem to purchase this item"
    }
}

function attack() {
    fightingAnimal++;
    fightHTML.innerHTML = battleArray[fighting][fightingAnimal].textHTML[0];

    health -= 1 * (predator[fighting].level - xpValue);
    healthText.innerText = health;

    var index;
    if(weapons[weapons.length-1] === "Stick" ) {
        index = 0;
    }else if(weapons[weapons.length-1] === "Sledgehammer") {
        index = 1;
    }else if(weapons[weapons.length-1] === "Sphear") {
        index = 2;
    }else {index = 3;};

    predator[fighting].health -= (inventory[index].power + predator[fighting].level);
    animalHealthText.innerText = predator[fighting].health;

    if (health <= 0) {
        lost();
    }else if (predator[fighting].health <= 0 || fightingAnimal === battleArray[fighting].length - 1) {
        win();
    }
}
console.log(battleArray[fighting][fightingAnimal].length);

function defend() {
    fightingAnimal++;
    fightHTML.innerHTML = battleArray[fighting][fightingAnimal].textHTML[1];

    health -= 1 * (predator[fighting].level - xpValue);
    healthText.innerText = health;

    if(weapons[weapons.length-1] === "Stick" ) {
        index = 0;
    }else if(weapons[weapons.length-1] === "Sledgehammer") {
        index = 1;
    }else if(weapons[weapons.length-1] === "Sphear") {
        index = 2;
    }else {index = 3;};

    predator[fighting].health -= predator[fighting].level;
    animalHealthText.innerText = predator[fighting].health;
    if (health <= 0) {
        lost();
    }else if (predator[fighting].health <= 0  || fightingAnimal === battleArray[fighting].length - 1) {
        win();
    }
}

function win() {
    predator[fighting].health = 0;
    animalHealthText.innerText = 0;

    if (headerText.innerText === "Fighting Snake" ){
        fightHTML.innerHTML = "<p class='text'>The snake, now defeated, lies still on the jungle floor. You’ve won the battle, but your body is trembling from the adrenaline and effort. You take a deep breath, the jungle’s oppressive heat still weighing down on you.</p>";

        xpValue += 1;
        gem += 10;

        console.log(attackBtn.onclick)
    }else if (headerText.innerText === "Fighting Hyena"){
        fightHTML.innerHTML = "<p class='text'>The hyena lies motionless in the clearing, the threat now fully neutralized. You’re left standing over the defeated beast, your breath coming in ragged gasps. The jungle around you is eerily silent, the tension from the fight lingering in the air.</p><p class='text'>As you catch your breath, you realize that the hyena’s death might draw attention from other predators or scavengers.</p>";
        
        xpValue += 2;
        gem += 20;

    }else {
        fightHTML.innerHTML = "<p class='text'>Victory feels sweet, and the adrenaline begins to fade, replaced by a cautious optimism. As you continue on your journey, you remain vigilant, knowing that the jungle holds many more challenges. For now, though, you’ve conquered one of its fiercest threats and lived to tell the tale.</p>";
        
        xpValue += 3;
        gem += 50;
    }
    fightHTML.innerHTML += `<h1>A conqueror</h1>`;
    hide.style.display = "block";
    gemText.innerText = gem;
    xpText.innerText = Math.floor(xpValue);
}

function lost() {
    health = 0;
    healthText.innerText = 0;
    fightHTML.innerHTML = `<h1>You have lost</h1>`;
    hide.style.display = "block";

}
