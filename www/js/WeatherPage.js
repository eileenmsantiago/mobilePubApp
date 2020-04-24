class WeatherPage extends Container {

    constructor(stage, background, sound, icon, header, subheader, primaryColor, secondaryColor ) {

        super(WIDTH, HEIGHT);
        this.background = background;
        this.isPlaying = false;

        asset(background).sca(0.55).addTo(this);
        // asset(background).addTo(this);
        this.sound;

        // Title label 
        this.title = new Label({
            text: header,
            size: 48, 
            font: "Noto Sans",
            fontOptions: "bold",
            color:white,
            align: "center"
        })
        .addTo(this)
        .pos(50, 150, LEFT, BOTTOM)
        // .pos(null, 50, CENTER, BOTTOM)
        .animate({
            props: {
                alpha: 1
            },
            wait: 200
        })

        this.subtitle = new Label({
            text: subheader,
            size: 28, 
            font:"Noto Sans",
            fontOptions: "bold",
            color:white,
            align: "center"
        })
        .addTo(this)
        .pos(50, 60, LEFT, BOTTOM)
        // .pos(60, -60, LEFT, BOTTOM)
        // .pos(null, stageH * .5, LEFT, BOTTOM)
        .animate({
            props: {
                alpha: 1
            },
            wait: 200
        })

        var label = new Label({
            text: "",
            size: 20,
            color: white,
            fontOptions: "bold"
        });

        if(icon) {
            this.playButton = new Button({
                label: label,
                width: 200,
                height: 200,
                corners: 200,
                borderWidth: 0,
                backgroundColor: primaryColor,
                rollBackgroundColor: secondaryColor
            })
            .alp()
            .pos(null, null, CENTER, CENTER)
            .ord(10)
            .addTo(this)

            asset(icon).sca(1).centerReg(this.playButton).pos(null, null, CENTER);

            this.playButton.on('click', () => {

                if(!this.isPlaying) {
                    this.isPlaying = true;
                    console.log('test');
                    label.text = "";
                    this.sound = asset(sound).play();
                } else {
                    label.text = "play";
                    this.stopSound();
                }

                stage.update();
            })
        }
    }

    stopSound() {
        this.isPlaying = false;
        this.sound.paused = true;
    }
}