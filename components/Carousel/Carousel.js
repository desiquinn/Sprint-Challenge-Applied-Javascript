class Carousel {
    constructor (element) {
        this.element = element;
        this.data = this.element.dataset.img;
        this.image = this.element.querySelectorAll(`.image[data-img=${this.data}`)

        this.counter = 0;
        this.amount = this.image.length;
        this.current = this.image[0];

        this.next = this.element.querySelector('.right-button');
        this.previous = this.element.querySelector('.left-button');

        this.next.addEventListener('click', () => this.nextClick())
        this.previous.addEventListener('click', () => this.prevClick())
        
    }

    nextClick() {
        console.log('right button clicked');


    }

    prevClick(){
        console.log('left button clicked');
    
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
