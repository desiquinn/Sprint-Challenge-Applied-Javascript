class Carousel {
    constructor (buttons) {
        this.buttons = buttons;
        this.data = this.element.dataset.img;
        this.image = this.element.querySelectorAll(`.image[data-img=${this.data}`)
        this.next = this.element.querySelector('.right-button');
        this.previous = this.element.querySelector('.left-button');

        // this.leftButton.addEventListener('click', () => this.leftClick())
        // this.buttons.addEventListener('click', () => this.rightClick())
        
    }

    nextClick() {
        let counter = 0;
        let amount = this.image.length;
        let current = images[0];
        this.buttons.classList('active');
        
    }

    prevClick(){
        
    }

}

let carousel = document.querySelectorAll('.carousel');

carousel.forEach((button) => {
    return new Carousel(button)
})

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
