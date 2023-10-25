const inquirer = require('inquirer');
const {Shape, Circle, Square, Triangle} = require('./lib/shapes');
const fs = require('fs');

function writeToFile(data) {
    if(data.shape === `Circle`){
        let circle = new Circle(data.initials, data.textcolor, data.shape, data.shapecolor);
        
        let frame = circle.render()

        fs.writeFile(`logo.svg`, frame, (err) => err ? console.error(err) : console.log('Generated logo.svg'))
        
    } else if (data.shape === `Square`) {
        let square = new Square(data.initials, data.textcolor, data.shape, data.shapecolor);

        let frame = square.render()

        fs.writeFile(`logo.svg`, frame, (err) => err ? console.error(err) : console.log('Generated logo.svg'))
        
    } else {
        let triangle = new Triangle(data.initials, data.textcolor, data.shape, data.shapecolor)

        let frame = triangle.render()

        fs.writeFile(`logo.svg`, frame, (err) => err ? console.error(err) : console.log('Generated logo.svg'))
        
    }
    
};

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please input prefered initials.',
                name: 'initials',
            },
            {
                type: 'input',
                message: 'What color would you like the text to be?',
                name: 'textcolor',
            },
            {
                type: 'list',
                message: 'What Shape do you want for the logo?',
                name: 'shape',
                choices: [
                    `Circle`,
                    `Square`,
                    `Triangle`,
                ]
            },
            {
                type: 'input',
                message: 'What Color Do you want the shape to be?',
                name: 'shapecolor',
            }
        ])
        .then((data) => {
            if (data.initials.length > 3) {
                console.log('please shorten the amount of characters in initials.')
                return;
            } else {
                writeToFile(data);
            }
        })
};

init();

