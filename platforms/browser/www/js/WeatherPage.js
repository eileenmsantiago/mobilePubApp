class WeatherPage extends Container {

    constructor(stage, background, sound, icon, header, subheader, primaryColor, secondaryColor ) {

        super(WIDTH, HEIGHT);
        this.background = background;
        this.isPlaying = false;

        asset(background).sca(1).addTo(this);
        this.sound;

        // Title label 
        this.title = new Label({
            text: header,
            size: 60, 
            font: "Noto Sans",
            fontOptions: "bold",
            color:white,
            align: "center"
        })
        .addTo(this)
        .pos(60, 30, LEFT, BOTTOM)
        .animate({
            props: {
                alpha: 1
            },
            wait: 200
        })

        this.subtitle = new Label({
            text: subheader,
            size: 32, 
            font:"Noto Sans",
            fontOptions: "bold",
            color:white,
            align: "center"
        })
        .addTo(this)
        .pos(60, -60, LEFT, BOTTOM)
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
                width: 300,
                height: 300,
                corners: 200,
                borderWidth: 0,
                backgroundColor: primaryColor,
                rollBackgroundColor: secondaryColor
            })
            .alp()
            .pos(null, 300, CENTER)
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