class CustomElement {
    constructor(tag = 'div', width = '400px', height = '300px', bgColor = 'red', borderRadius = 0, opacity = 1) {
        this.tag = tag;
        this.width = width;
        this.height = height;
        this.bgColor = bgColor;
        this.borderRadius = borderRadius;
        this.opacity = opacity;
        this.element = document.createElement(this.tag);
        this.element.style.width = this.width;
        this.element.style.height = this.height;
        this.element.style.backgroundColor = this.bgColor;
        this.element.style.borderRadius = `${this.borderRadius}px`;
        this.element.style.opacity = this.opacity;
        this.element.style.position = 'absolute';
        this.element.style.left = '50%';
        this.element.style.top = '50%';
        this.element.style.transform = 'translate(-50%, -50%)';

        this.createButton = document.createElement('button');
        this.createButton.textContent = 'Press the button';
        document.body.appendChild(this.createButton);

        this.createButton.addEventListener('click', () => {
            this.create();
            this.changeColor(generateRandomColor());
            this.changeBorderRadiusRandom();
        });
    }

    create() {
        document.body.appendChild(this.element);
    }

    changeColor(newColor) {
        this.bgColor = newColor;
        this.element.style.backgroundColor = this.bgColor;
    }

    changeBorderRadius(newRadius) {
        if (typeof newRadius === 'number' && newRadius >= 0) {
            this.borderRadius = newRadius;
            this.element.style.borderRadius = `${newRadius}px`;
        } else {
            console.error('Invalid border radius value. Please provide a non-negative number.');
        }
    }

    changeBorderRadiusRandom() {
        const randomRadius = Math.floor(Math.random() * 100); 
        this.borderRadius = randomRadius;
        this.element.style.borderRadius = `${randomRadius}px`;
    }
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (color === '#FFFFFF') {
        color = 'red';
    }
    return color;
}

const customElement = new CustomElement();
customElement.create();
