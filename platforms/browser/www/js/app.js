const frame = new Frame(
    scaling, 
    WIDTH, 
    HEIGHT, 
    BGCOLOR, 
    OUTERCOLOR, 
    ASSETS, 
    PATH
);
// createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]);

// Color Variables
// ============= Primary colors
const BLKBLUE = "#25265E";
const BLUE = "#3358D6";
const PURPLE = "#4A00E0";
const TURQUOISE = "#1CD8D2";
const YELLOW = "#F9C70C";
const ORANGE = "#E9762A";

// ============= Secondary colors
const BLUELTE = "#6686F9";
const PURPLELTE = "#654FD7";
const YELLOWLTE = "#F0CF5D";
const ORANGELTE = "#E29134";

// Object (asset) Variables
let SUNNY_ICON;
let ENERGIZE_ICON;
let NIGHT_ICON;
let RAINY_ICON;

frame.on("resize", () => {
    console.log(frame);

    const stage = frame.stage;
    var stageW = frame.WIDTH;
    var stageH = frame.HEIGHT;

    // Initialize pages
    const SPLASH = new WeatherPage(stage, "Splash.png", null, null, "Weathery", "Listen to music that \nreflects the weather", BGCOLOR);
    const SUNNY = new WeatherPage(stage, "Sunny.png", "day-sunny.mp3","sun.png", "sunny", "call it spring", YELLOW, YELLOWLTE);
    const RAINY = new WeatherPage(stage, "Rainy.png", "night-rain.mp3", "cloudy_rain.png", "rainy", "let's just chill", BLUE, BLUELTE);
    const ZZZ = new WeatherPage(stage, "PM.png", "night-nature.mp3", "moon.png", "pm zzz", "I'll be right here", PURPLE, PURPLELTE);
    const ENERGIZE = new WeatherPage(stage, "AMRelax.png", "day-relax.mp3", "energize.png", "energize", "let's get this rollin", ORANGE, ORANGELTE);

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // SPLASH PAGE
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    let pages = new Pages ({
        holder: stage,
        pages: [
            {
                page: SPLASH, 
                swipe: [null, SUNNY, null, null]
            },
            {
                page: SUNNY, 
                swipe: [SPLASH, RAINY, null, null]
            },
            {
                page: RAINY, 
                swipe: [SUNNY, ZZZ, null, null]
            },
            {
                page: ZZZ, 
                swipe: [RAINY, ENERGIZE, null, null]
            },
            {
                page: ENERGIZE, 
                swipe: [ZZZ, null, null, null]
            }
        ], 
        transition: "slide",
        speed: 300
    }).addTo(stage);

    pages.resize();

    let prevPage = pages.page;
    pages.on("page", function() {
        if(prevPage.isPlaying) {
            prevPage.stopSound();
        }
        prevPage = pages.page;
    })

    stage.update(); 
    console.log("hello");
}); // end of ready

