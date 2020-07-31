class PostToApi {
    constructor() {
        this.render()

    }

    render() {
        new Container({
            parent: window.body,
            className: "container exercise-4",
            children: [
                new Label({
                    className: "title",
                    text: "Post Data",
                }),
                new Form({
                    method: "post",
                    events: {
                        onsubmit: (e) => {
                            var formData = new FormData(e.target)

                            window.formSubmit.textContent = ""
                            window.formSubmit.style.padding = "5px 40px"
                            window.formSubmit.append(new Image({
                                source: "./assets/img/loader.gif",
                                height: "30px"
                            }))

                            Rest.postUser(Object.fromEntries(formData)).then(res => {
                                if (res.status == "ok") {
                                    window.formSubmit.innerHTML = res.status
                                    window.formSubmit.style.background = "#2ec4b6"
                                    window.formSubmit.style.padding = ""
                                    setTimeout(() => {
                                        window.formSubmit.innerHTML = "Send"
                                        window.formSubmit.style.background = ""
                                    }, 5000);
                                    window.postLink.innerHTML = ""
                                    window.postLink.append(new Label({
                                        textTransform: "uppercase",
                                        text: "See your posted data here:"
                                    }))
                                    window.postLink.append(new Link({
                                        display: "block",
                                        width: "50vw",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        link: "https://getsandbox.com/p/1/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzLTRjNjk1YTE4LTZkMjMtNDVlZi1iOTVhLWZhOTU4N2VjMDlmMSJ9.mZiyXuYK8VMnPGrU9x5NQ9rrCDJsmtv9nAHBse_AAIw#state",
                                        text: "https://getsandbox.com/p/1/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzLTRjNjk1YTE4LTZkMjMtNDVlZi1iOTVhLWZhOTU4N2VjMDlmMSJ9.mZiyXuYK8VMnPGrU9x5NQ9rrCDJsmtv9nAHBse_AAIw#state"
                                    }))


                                }
                            })
                            return false;

                        }
                    },
                    children: [
                        new Input({
                            type: "text",
                            name: "name",
                            placeholder: "Name",
                            required: true,
                        }),
                        new Input({
                            type: "email",
                            name: "email",
                            placeholder: "Email",
                            required: true,
                        }),
                        new Input({
                            type: "number",
                            name: "phone",
                            placeholder: "Phone",
                            required: true,
                        }),
                        new TextArea({
                            type: "text",
                            name: "message",
                            placeholder: "Message",
                            required: true,
                        }),
                        new Button({
                            id: "formSubmit",
                            type: "submit",
                            text: "Send",
                        })
                    ]
                }),
                new Container({
                    marginTop: "30px",
                    flexDirection: "column",
                    alignItems: "center",
                    id: "postLink"
                })
            ]
        });
    }

}