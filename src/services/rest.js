class Rest {
    static _DogApi_ = "https://dog.ceo/api";
    static _PostURL_ = "https://dilemacode.getsandbox.com/users";
    static async getSubBreed(breed) {
        return fetch(this._DogApi_ + `/breed/${breed}/list`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                return json;
            });
    };
    static async getImage(breed) {
        return fetch(this._DogApi_ + `/breed/${breed}/images/random`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                return json;
            });
    };
    static async getSubBreedImage(breed, subBreed) {
        return fetch(this._DogApi_ + `/breed/${breed}/${subBreed}/images/random`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                return json;
            });
    };

    static async postUser(user, ) {
        return fetch(this._PostURL_, {
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "post",
            })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                return json;
            });
    }


}