//BUTTONS
var completed = document.getElementById('completed');
var forfeit = document.getElementById('forfeit');
var reset = document.getElementById('reset');
var back = document.querySelectorAll('.back');
var navbar = document.querySelectorAll('.navbar ul li');
//PAGE ELEMENTS
var background = document.querySelector('body');
var navContainer = document.querySelector('.navbar');
var sentence = document.getElementById('sentence');
var container = document.querySelector('.container');
var custom = document.querySelector('#custom');
var about = document.querySelector('#about');
var rules = document.getElementById('rules');
var pages = [ about, rules, custom, container ];
//COLORS
var red = '#bf211eff';
var black = '#001011ff';
var yell = '#fde74cff';
var blue = '#46b1c9ff';
var pink = ' #f00699ff ';
//Variables for Functions
var lyricalIndex = '1';
var lyrics = [ 'Gimme Gimme Gimme', 'A man after midnight', "Won't somebody help me", 'Chase the shadows away' ];
//define the string
var string = '';
//define the noun pool
var nouns = [
	'a smile',
	'a frown',
	'a book',
	'a candle',
	'a feather',
	'Mars',
	'Jupiter',
	'the Earth',
	'Venus',
	'Mercury',
	'Pluto',
	'Saturn',
	'the Moon',
	'a full moon',
	'a new moon',
	'a star',
	'a hole',
	'your hands',
	'a stranger',
	'your lungs',
	'your blood',
	'your heart',
	'your pulse',
	'the woods ',
	'a store',
	'your education',
	'your childhood',
	'a child',
	'a spider',
	'a spiderweb',
	'the bones',
	'your bones',
	"someone else's bones",
	"someone else's skin",
	"someone else's vision",
	'a tree',
	'the grass',
	'an umbrella',
	'a shadow',
	'a light',
	'a glow',
	'a circle',
	'an octagon',
	'a heptagon',
	'a square',
	'a triangle',
	'a play',
	'a haiku',
	'a sonnet',
	'the rain',
	'thunder',
	'lightning',
	'fire',
	'a stone',
	'the roots',
	'your breath',
	'a flute',
	'a frequency',
	'a piano',
	'magic',
	'a sound',
	'the blueprints',
	'the contours',
	'bamboo',
	'a branch',
	'some paper',
	'a pen',
	'a cherry',
	'a peach',
	'some honey',
	'a loaf of bread',
	'some garlic',
	'a bell',
	'a structure',
	'a storm',
	'suffering',
	'your intention',
	'a gourd',
	'a sword',
	'a scaffold',
	'an urn',
	'your eyes',
	'an orb',
	'a spice',
	'a roof',
	'a snake',
	'a dragon',
	'a comet',
	'a black hole',
	'metamorphosis',
	'a cave',
	'a trench',
	'the ocean floor',
	'coral',
	'a shell',
	'the neurons',
	'the spine'
];
var pronouns = [ 'my', 'your', "player 1's", "player 2's", "player 3's", "everyone's" ];

var nouns2 = [
	'a galaxy',
	'a river',
	'a play',
	'a newspaper',
	'a cat',
	'a dog',
	'a pet',
	'a flower',
	'a plant',
	'a cactus',
	'a computer',
	'your room',
	"a stranger's face",
	"your friend's face",
	"your friend's hair",
	'a strange bird',
	'a weird sound',
	'the clouds',
	'a leaf',
	'a petal',
	'a bug',
	'a moth',
	'space',
	'an astronaut',
	'a goddess',
	'a vibration',
	'a beat',
	'a pulse',
	'the bus',
	'your usual route ',
	'your driveway',
	'the park',
	'another town',
	"a street you've never been on",
	"an animal you've never heard of",
	'a bridge',
	"a friend you haven't talked to",
	'a word you never knew',
	'a seed',
	'a cat',
	'a tiger',
	'a cube',
	'a hexagon',
	'a trapezoid',
	'a pentagram',
	'a crescent',
	'a sprout',
	'your body',
	'your heart',
	'your breath',
	'your pulse',
	'your skin',
	'your stomach',
	'your hands',
	'water',
	'thunder',
	'lightning',
	'fire',
	'a stone',
	'a gem',
	'your breath',
	'a skyscraper',
	'the ground',
	'the Earth',
	'a society',
	'a coin',
	'a sapling',
	'a clover',
	'a crab',
	'a lime',
	'a lemon',
	'a tangerine',
	'a bee',
	'the wind',
	'a field',
	'the void',
	'a dagger',
	'a vine',
	'a hammer',
	'a bowl',
	'your vision',
	'a fish',
	'a train',
	'salt',
	'a hospital',
	'your home',
	'a spiderweb',
	'the floor',
	'the cieling',
	'vapor',
	'spherical',
	'salt',
	'a pillar',
	'a spiral',
	'a maiden',
	'an elder',
	'a soldier',
	'a sign'
];

//def. verb pool
var verbs = [
	'Go to',
	'Move',
	'Relocate',
	'Nurture',
	'Draw',
	'Paint',
	'Mimic',
	'Ponder',
	'Conceputalize',
	'Re-assign meaning to',
	'Appreciate the beauty of',
	'Be horrified by ',
	'Consider the pitfalls of',
	'Consider the benefits of',
	'Try to visualize the physics of',
	'Visualize',
	'Experience',
	'Smell',
	'Taste',
	'Touch',
	'Feel',
	'Control',
	'Vibrate',
	'Absorb',
	'Learn',
	'Teach',
	'Witness',
	'Find',
	'Discover',
	'Change',
	'Remove',
	'Reorganize',
	'Rearrange',
	'Take',
	'Give',
	'Rub',
	'Swim in',
	'Photograph',
	'Film',
	'Obtain',
	'Pet',
	'Hug',
	'Cuddle',
	'Try to find the opposite of',
	'Draw a symbol for',
	'Symbolize',
	"Dance like you're",
	'Sculpt',
	'Bring',
	'Drive',
	'Dig',
	'Put',
	'Place',
	'Push',
	'Scoop',
	'Hold',
	'Shove',
	'Jiggle',
	'Imagine',
	'Pretend you are',
	'Be ',
	'Puncture',
	'Break into',
	'Be as flexible as',
	'Be as firm as',
	'Be as warm as',
	'Be as cold as',
	'Sing',
	'Imagine',
	'Hear',
	'Think about',
	'Bury',
	'Dig',
	'Try to forget',
	'Focus on',
	'Make',
	'Find',
	'Construct',
	'Balance',
	'Burn',
	'Unlock',
	'Convert',
	'Sublimate',
	'Transmutate',
	'Vaporize',
	'Float',
	'Float upon',
	'Rise upon',
	'Rise above',
	'Float upon',
	'Capture',
	'Conceal'
];
// def article pool
var articles = [
	'the',
	'a', //avoid using any noun starting with a vowel
	'my',
	"player 2's"
];
var descriptor = [
	'in the rain',
	'in the grass',
	'in the river',
	'over a hole',
	'in the night',
	'at midday',
	'at midnight',
	'at dawn',
	'at dusk',
	'at day',
	'instead of what you usually do',
	'instead of usual route',
	'while counting to ten',
	'and then count to twelve',
	'and then reverse it',
	'and then find the source',
	'and then paint it',
	'and then draw it',
	'and then write about it',
	'and then sing about it',
	'and then bury it',
	"like it's meant to be",
	'in your mind',
	'in your hand',
	'in your body',
	'towards the sky',
	'towards the ground',
	'into the ether',
	'back in the villiage',
	'in your city',
	'in your family',
	'silently',
	'underwater',
	'breaking apart',
	'softly',
	'while flying',
	'while decompressing',
	'without opening your eyes',
	'without focusing',
	'in green',
	'in blue',
	'in mist',
	'in yellow',
	'in white',
	'in black',
	'in orange',
	'in purple',
	'in the void',
	'in the rapture',
	'on the morning',
	'in a tree',
	'in a cloud',
	'in the vapor',
	'in the wind'
];
var prepositions = [
	'inside',
	'inside',
	'instead of',
	'inside of',
	'on ',
	'on ',
	'on ',
	'on ',
	'inside',
	'in',
	'in',
	'for',
	'for',
	'at',
	'at',
	'being held by',
	'kept warm by',
	'while thinking of',
	'to',
	'while imagining',
	'while sounding like',
	'among',
	'being absorbed by',
	'among',
	'along',
	'next to',
	'near',
	'while sprouting',
	'with the bones of',
	'doing the dance of',
	'taking the shape of',
	'moving inside of',
	'wrapped around',
	'of',
	'of',
	'of',
	'of',
	'of',
	'pretending to be',
	'acting like',
	'forced inside of',
	'forced to be',
	'changing into',
	'evolving as',
	'like',
	'like',
	'like',
	'as if',
	'as if',
	'as if',
	'transcending',
	'hovering over',
	'floating across',
	'flying over',
	'sinking into',
	'breaking into',
	'puncturing through',
	'while remembering',
	'while saying',
	'while chanting',
	'while pondering',
	'while singing',
	'orbiting',
	'contouring',
	'out of',
	'around',
	'around',
	'reaching',
	'spinning around',
	'revolving around',
	'sealing',
	'converting',
	'metamorphing',
	'unlocking',
	'revealing',
	'hiding',
	'concealing',
	'the rhythm of',
	'the shape of',
	'the edge of',
	'the skin of ',
	'the face of',
	'inside of',
	'the heart of',
	'the sign of'
];
////EVENT LISTENERS
//navbar buttons
navbar[0].addEventListener('click', showAbout);
navbar[1].addEventListener('click', customize);
navbar[2].addEventListener('click', showRules);
///back buttons
back[0].addEventListener('click', showContainer);
back[1].addEventListener('click', showContainer);
back[2].addEventListener('click', showContainer);
//Game Buttons
// completed.addEventListener('click', newString); this is not in use yet
reset.addEventListener('click', newString);
//Gameplay Start
function newString() {
	//generate new strings
	stringGenerator();
	//replace the text on the website
	sentence.textContent = string;
	lyricalButton();
}
function stringGenerator() {
	var p = Math.floor(Math.random() * pronouns.length);
	var v = Math.floor(Math.random() * verbs.length);
	var n1 = Math.floor(Math.random() * nouns.length);
	var n2 = Math.floor(Math.random() * nouns2.length);
	var a = Math.floor(Math.random() * articles.length);
	var pp = Math.floor(Math.random() * prepositions.length);
	var d = Math.floor(Math.random() * descriptor.length);
	string = verbs[v] + ' ' + nouns[n1] + ' ' + prepositions[pp] + ' ' + nouns2[n2] + ' ' + descriptor[d];
}
//Gameplay End

//Navbar Functionality
function showAbout() {
	//Show the About Page
	hideThemAll();
	about.classList.remove('hide');
}

function showContainer() {
	hideThemAll();
	container.classList.remove('hide');
	// backColor(red);
}
function customize() {
	hideThemAll();
	custom.classList.remove('hide');
	//define player 1
	//define player 2
}
function showRules() {
	//Show the About Page
	hideThemAll();
	rules.classList.remove('hide');
}

function backColor(color) {
	background.style.backgroundColor = color;
	console.log(color);
}

function hideThemAll() {
	for (let i = 0; i < pages.length; i++) {
		pages[i].classList.add('hide');
	}
}
//End of Navbar Functionality

//text on button will change every time you click it
function lyricalButton() {
	reset.textContent = lyrics[lyricalIndex];
	lyricalIndex++;
	if (lyricalIndex === lyrics.length) {
		lyricalIndex = 0;
	}
}
