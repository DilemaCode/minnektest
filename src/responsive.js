class Responsive {
    constructor() {
        this.technologies = [
            "https://jml.neocities.org/html5-css3-js.png",
            "https://2.bp.blogspot.com/-3g3xFnrKtmA/V_rQ2wKjlWI/AAAAAAAALWg/zDPJQsDbRJ0YRLxWXfHeLd_XjhBbeFEhgCLcB/s1600/TypeScript-2.png",
            "https://siliconangle.com/files/2013/11/ionic-html5-native-framework.jpg",
            "https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png",
            "https://dominet.net/es/images/nodejs-logo-png-node-js-development-296.png",
            "https://www.freeiconspng.com/uploads/c-logo-icon-18.png",
            "https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png",
            "https://cdn.iconscout.com/icon/free/png-256/python-14-569257.png"

        ]
        this.render()
    }
    render() {
        new Container({
            parent: window.body,
            className: "container exercise-3",
            children: [
                new Label({
                    textShadow: "2px 2px 15px #000000",
                    className: "title",
                    text: "Responsive Cards",
                }),
                new Container({
                    notFlex: true,
                    className: "responsive-container",
                    children: this.technologies.map(elm => {
                        return new Container({
                            className: "card",
                            children: [
                                new Image({
                                    source: elm,
                                    width: "40%",
                                })
                            ]
                        });
                    })
                }),
            ]
        });
    }
}