import {AppComponent} from './app.component';

describe('AppComponent', () => {
    const app = new AppComponent();
    it('should returns 4 as result', () => {
        const app = new AppComponent();
        app.number1 = 2;
        app.number2 = 2;
        app.add();
        expect(app.result).toBe(4);
    });
    describe('multiple', () => {
        it('should return same number', () => {
            const result = app.multiple(4, 1);
            expect(result).toBe(4);
        });
        it('should return 8', () => {
            const result = app.multiple(4, 2);
            expect(result).toBe(8);
        });
        describe('divide', () => {
            it('should return 0', () => {
                const result = app.divide(4, 0);
                expect(result).toBe(0);
            });
            it('should return 2', () => {
                const result = app.divide(4, 2);
                expect(result).toBe(2);
            });
        });
        describe('isDividedBy', () => {
            it('should return false', () => {
                const result = app.isDividedBy(4, 3);
                expect(result).toBe(false);
            });
            it('should return true', () => {
                const result = app.isDividedBy(4, 2);
                expect(result).toBe(true);
            });
        });
        describe('printAllNumbers', () => {
            it('should print till 10', () => {
                app.printAllNumbers(10);
            });
        });
    });
});
