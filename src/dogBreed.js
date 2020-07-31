class DogBreed {
    constructor() {
        this.breed = { "name": arguments[0].breed, img: "" };
        this.subBreeds = [];
        this.getBreeds()
        this.render()

    }

    render() {
        new Container({
            parent: window.body,
            className: "container exercise-2",
            children: [
                new Label({
                    className: "title",
                    text: "Api Dogs",

                }),
                new Container({
                    className: "breeds-scroll-container",
                    children: [
                        new Container({
                            className: "breed-scroll-nav",
                            text: "<",
                            events: {
                                onclick: () => window.breedsScroll.scrollBy(-(window.innerWidth / 1.5), 0)
                            }
                        }),
                        new Container({
                            id: "breedsScroll",
                            className: "breeds-scroll",
                            children: [
                                new Container({
                                    id: "exercise2",
                                    className: "breeds-container",
                                })

                            ]
                        }),
                        new Container({
                            className: "breed-scroll-nav",
                            text: ">",
                            events: {
                                onclick: () => window.breedsScroll.scrollBy(window.innerWidth / 1.5, 0)
                            }
                        }),

                    ]
                })
            ]
        });
    }

    card(name, img, type) {
        return new Container({
            className: "breed",
            backgroundImage: `url(${img})`,
            children: [
                new Container({
                    className: "breed-c-child",
                    children: [
                        new Label({
                            margin: "0",
                            fontSize: "18px",
                            text: name
                        }),
                        new Label({
                            margin: "0",
                            fontSize: "14px",
                            textTransform: "none",
                            text: type
                        }),
                    ]
                }),
            ]
        })
    }

    async getBreeds() {
        await Rest.getImage(this.breed.name).then(async(res) => {
            this.breed.img = res.message;
            window.exercise2.appendChild(this.card(this.breed.name, this.breed.img, "Breed"))
                // window.exercise2.appendChild(new Container({ className: "divider", text: "->" }))

            await Rest.getSubBreed(this.breed.name).then(async(res) => {
                console.log(res)
                await res.message.forEach(async elm => {
                    await Rest.getSubBreedImage(this.breed.name, elm).then((res) => {
                        // this.subBreeds.push({ name: elm, img: res.message });
                        window.exercise2.appendChild(this.card(elm, res.message, "Sub breed of " + this.breed.name))
                    })
                    console.log(this.subBreeds);
                    // window.reversed_arr.appendChild()
                });
            })
        })

    }
}