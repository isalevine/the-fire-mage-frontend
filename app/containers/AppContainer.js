
class AppContainer extends Container {
    constructor() {
        super()
        this.div.classList.add('app-container')

        addContainerToBody(this.div)
    }

    // do we need an explicit this.render() function,
    // instead of attaching to browser in constructor?
}