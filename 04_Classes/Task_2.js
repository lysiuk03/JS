class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        document.write(`<button style="width:${this.width}px; height:${this.height}px; margin: 10px;">${this.text}</button>`);
    }
}

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }

    showBtn() {
        document.write(`<button style="width:${this.width}px; height:${this.height}px; background-color:${this.color}; margin:10px;">${this.text}</button>`);
    }
}

let Button1 = new Button(100, 40, "Button 1");
Button1.showBtn();

let Button2 = new BootstrapButton(120, 50, "Button 2", "pink");
 Button2.showBtn();