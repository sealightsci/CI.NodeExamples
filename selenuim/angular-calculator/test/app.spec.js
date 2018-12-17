const childProcess = require("child_process");
const path = require("path");
const chai = require("chai");
const expect = chai.expect;
let serverProc;

const webdriver = require('selenium-webdriver');
const chromeDriver = require('selenium-webdriver/chrome');
const By = webdriver.By;

let driver = createDriver();

describe('Calculator', function () {
    // e2e tests are too slow for default Mocha timeout
    this.timeout(10000);
    before(async () => {
        startServer();
        await driver.navigate().to('http://localhost:3030')
    });
    after(async () => {
        await driver.close()
        killServer();
    });
    beforeEach(async () => {
        await driver.findElement((By.id("cls"))).click();
    });
    describe('Add', () => {
        it('should return 4', async () => {
            await driver.findElement((By.id("2"))).click();
            await driver.findElement((By.id("add"))).click();
            await driver.findElement((By.id("2"))).click();
            await driver.findElement((By.id("equal"))).click();
            const value = await driver.findElement((By.id("answer"))).getAttribute("value");
            expect(parseInt(value)).eq(4)
        });
    });
    describe('Sub', () => {
        it('should return 2', async () => {
            await driver.findElement((By.id("4"))).click();
            await driver.findElement((By.id("sub"))).click();
            await driver.findElement((By.id("2"))).click();
            await driver.findElement((By.id("equal"))).click();
            const value = await driver.findElement((By.id("answer"))).getAttribute("value");
            expect(parseInt(value)).eq(2)
        });
    });
    describe('Multiple', () => {
        it('should return same number', async () => {
            await driver.findElement((By.id("4"))).click();
            await driver.findElement((By.id("multiple"))).click();
            await driver.findElement((By.id("1"))).click();
            await driver.findElement((By.id("equal"))).click();
            const value = await driver.findElement((By.id("answer"))).getAttribute("value");
            expect(parseInt(value)).eq(4)
        });
        it('should return 8', async () => {
            await driver.findElement((By.id("4"))).click();
            await driver.findElement((By.id("multiple"))).click();
            await driver.findElement((By.id("2"))).click();
            await driver.findElement((By.id("equal"))).click();
            const value = await driver.findElement((By.id("answer"))).getAttribute("value");
            expect(parseInt(value)).eq(8)
        });
    });
    describe('Divide', () => {
        it('should return 0', async () => {
            await driver.findElement((By.id("4"))).click();
            await driver.findElement((By.id("divide"))).click();
            await driver.findElement((By.id("0"))).click();
            await driver.findElement((By.id("equal"))).click();
            const value = await driver.findElement((By.id("answer"))).getAttribute("value");
            expect(parseInt(value)).eq(0)
        });
        it('should return 2', async () => {
            await driver.findElement((By.id("4"))).click();
            await driver.findElement((By.id("divide"))).click();
            await driver.findElement((By.id("2"))).click();
            await driver.findElement((By.id("equal"))).click();
            const value = await driver.findElement((By.id("answer"))).getAttribute("value");
            expect(parseInt(value)).eq(2)
        });
    });
});

function createDriver() {
    const options = new chromeDriver.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    const driverPath = getDriverPath();
    const service = new chromeDriver.ServiceBuilder(driverPath).build();
    chromeDriver.setDefaultService(service);
    return new webdriver.Builder()
        .forBrowser('chrome')
        .withCapabilities(webdriver.Capabilities.chrome())
        .setChromeOptions(options)
        .build();
}

function startServer() {

    let args = [path.resolve(__dirname, "../server/server")];
    if (isUsingSealights()) {
        args.push("--folder");
        args.push("../SL_instrumented");
    }
    serverProc = childProcess.spawn("node", args);
}

function killServer() {
    serverProc.kill('SIGINT')
}

function isUsingSealights() {
    return process.argv.indexOf("sl") > -1;
}

function getDriverPath() {
    var isWin = process.platform === "win32";
    let driversFolder = path.resolve(__dirname, "..", "..", "drivers");
    return isWin ? path.join(driversFolder, "chromedriver.exe") : path.join(driversFolder, "chromedriver");

}
