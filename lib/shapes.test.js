const Shape = require('./shapes.js')
// Sorry I really don't understand how to make these test work
describe('Shapes', () => {
    describe('Triangle', () => {
        it('should create svg shape code', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Circle', () => {
        it('should create svg shape code', () => {
            const shape = new Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Square', () => {
        it('should create svg shape code', () => {
            const shape = new Square();
            shape.setColor("#eb4034");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
});


