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
var verbs = [
	'Imagine',
	'Move like',
	'Write',
	'Nurture',
	'Draw',
	'Paint',
	'Mimic',
	'Ponder',
	'Conceputalize',
	'Appreciate ',
	'Visualize',
	'Experience',
	'Smell',
	'Taste',
	'Touch',
	'Feel',
	'Control',
	'Absorb',
	'Be abosrbed into',
	'See',
	'Witness',
	'Find',
	'Discover',
	'Imagine ',
	'Rearrange',
	'Swim in',
	'Photograph',
	'Film',
	'Obtain',
	'Realize',
	'Symbolize',
	'Dance as if you are',
	'Hold',
	'Imagine',
	'Pretend you are',
	'Be ',
	'Enter',
	'Sing',
	'Imagine',
	'Hear',
	'Forget',
	'Focus on',
	'Make',
	'Find',
	'Construct',
	'Unlock',
	'Sublimate',
	'Transmutate',
	'Vaporize',
	'Float',
	'Capture',
	'Conceal',
	'Navigate'
];
var nouns = [
	'the sound of ',
	'the pulse of',
	'the vibration of',
	'the edge of',
	'the feeling of',
	'the shape of',
	'the form of',
	'the beauty of',
	'the ugliness of',
	'the sound of ',
	'the physics of',
	'the smell of',
	'the frequencies of',
	'the taste of',
	'the atoms within',
	'the spirit within',
	'a part of',
	'the meaning of',
	'the structure of',
	'the revolutions of',
	'the evolution of',
	'the metaphorphosis of',
	'the childhood of',
	'the aura surrounding',
	'the concept of',
	'the inside of',
	'the outside of',
	'the final moment of',
	'the death of',
	'the birth of',
	'the realization of',
	'the psychology of',
	'the perception of',
	'a symbol of',
	'the song of',
	'the scream of',
	'the pain of',
	'the joy of',
	'the life of',
	'the maze of',
	'the beating of',
	'the passing of'
];
var nouns2 = [
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
	'the sky',
	'your hands',
	'a stranger',
	'your lungs',
	'blood',
	'your heart',
	'your pulse',
	'the forest',
	'your childhood',
	'a child',
	'a spider',
	'bones',
	'electricity',
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
	'a poem',
	'a haiku',
	'a ring',
	'the rain',
	'thunder',
	'lightning',
	'fire',
	'a stone',
	'roots',
	'your breath',
	'a portrait',
	'a frequency',
	'a musical instrument',
	'magic',
	'a sound',
	'contours',
	'bamboo',
	'a branch',
	'paper',
	'honey',
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
	'the spine',
	'a galaxy',
	'a river',
	'a flower',
	'a plant',
	'a cactus',
	'your room',
	"a stranger's face",
	'the clouds',
	'your home',
	'a spiderweb',
	'vapor',
	'spherical',
	'salt',
	'a pillar',
	'a spiral',
	'a maiden',
	'an elder',
	'a sign',
	'the clouds',
	'space',
	'a vibration',
	'a beat',
	'a pulse',
	'a bridge',
	'a seed',
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
	'the ground',
	'the Earth',
	'a society',
	'a coin',
	'the wind',
	'a dagger',
	'a cup',
	'your vision',
	'a field',
	'the void',
	'the edge'
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
	//these variables aren't being used now, but might be in the future.

	// var p = Math.floor(Math.random() * pronouns.length);
	var v = Math.floor(Math.random() * verbs.length);
	var n1 = Math.floor(Math.random() * nouns.length);
	var n2 = Math.floor(Math.random() * nouns2.length);
	// var a = Math.floor(Math.random() * articles.length);
	// var pp = Math.floor(Math.random() * prepositions.length);
	// var d = Math.floor(Math.random() * descriptor.length);
	string = verbs[v] + ' ' + nouns[n1] + ' ' + nouns2[n2];
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
