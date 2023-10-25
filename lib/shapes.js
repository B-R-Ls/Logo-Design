const rgb = require('./colors')

class Shape {
    constructor(initials, txtcolor, shpcolor) {
        if(initials.length > 3) {
            throw new Error('please shorten the amount of characters in initials')
        }

        this.txtcolor = txtcolor;
        this.initials = initials;
        this.shpcolor = shpcolor;
    }

    setColor(color) {
        let colorary = color.split('');

        if (colorary[0] === '#') {
            return rgb(color);
        } else {
            switch (color) {
                case 'red':
                    return `rgb(255, 0, 0)`
                case 'orange':
                    return `rgb(255, 126, 0)`
                case 'yellow':
                    return `rgb(255, 255, 0)`
                case 'purple':
                    return `rgb(126, 0, 126)`
                case 'green':
                    return `rgb(0, 126, 0)`
                case 'blue':
                    return `rgb(0, 0, 255)`
                case 'white':
                    return `rgb(255, 255, 255)`
                case 'black':
                    return `rgb(0, 0, 0)`
                case 'gray':
                    return `rgb(31, 31, 31)`
                default:
                    console.info('no matches for that color, defaulting to black')
                    return `rgb(0, 0, 0)`
            }
        
        }
    }


}

class Circle extends Shape {
    constructor(initials, txtcolor, shape,  shpcolor) {
        super(initials, txtcolor, shpcolor)
        this.shape = shape

    }

    render() {
        console.log('check')
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.setColor(this.shpcolor)}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.setColor(this.txtcolor)}">${this.initials}</text>
        </svg>`
    }
}

class Square extends Shape {
    constructor(initials, txtcolor, shape,  shpcolor) {
        super(initials, txtcolor, shpcolor)
        this.shape = shape

    }
    
    render() {
        console.log('check')
        return `
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" style="fill:${this.setColor(this.shpcolor)};stroke-width:3;stroke:${this.setColor(this.shpcolor)}" />
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.setColor(this.txtcolor)}">${this.initials}</text>
        </svg>`
    }
}

class Triangle extends Shape {
    constructor(initials, txtcolor, shape,  shpcolor) {
        super(initials, txtcolor, shpcolor)
        this.shape = shape

    }

    render() {
        console.log('check')
        return `
        <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
	    <polygon points="150 25 25 275 272 275" style="fill:${this.setColor(this.shpcolor)} ; stroke:${this.setColor(this.shpcolor)} ; stroke-width: 0.3;" />
        <text x="150" y="200" font-size="60" text-anchor="middle" fill="${this.setColor(this.txtcolor)}">${this.initials}</text>
        </svg>`
    }
}

module.exports = {Shape, Circle, Square, Triangle}