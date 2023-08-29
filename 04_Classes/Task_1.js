class CssClass {
    constructor(className) {
        this.className = className;
        this.styles = {};
    }

    set Style(value) {
        this.styles = value;
    }

    addStyle(property, value) {
        this.styles[property] = value;
    }

    removeStyle(prop) {
        if (this.styles.hasOwnProperty(prop)) {
            delete this.styles[prop];
        }
    }

    getCSS() {
        let cssString = `.${this.className} {\n`;
        for (const property in this.styles) {
            if (this.styles.hasOwnProperty(property)) {
                cssString += `    ${property}: ${this.styles[property]};\n`;
            }
        }
        cssString += `}`;
        return cssString;
    }
}

let myClass = new CssClass("My");
myClass.Style={Color: 'red'};
myClass. addStyle("Font-size","24px");
console.log(myClass.getCSS());
myClass.removeStyle("Color");
console.log(myClass.getCSS());