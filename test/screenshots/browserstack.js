const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const webdriver = require('selenium-webdriver');
const remote = require('selenium-webdriver/remote');

const osBrowserMatrix = [
	{
		name: 'Windows',
		version: '7',
		browsers: [
			'IE 11.0',
			'Chrome 61.0',
		],
	},
	{
		name: 'OS X',
		version: 'Sierra',
		browsers: [
			'Safari 10.0',
			'Firefox 56.0',
		],
	},
];

osBrowserMatrix.forEach(os => {
	os.browsers.forEach(browser => {
		const browserArray = browser.split(' ');
		const browserName = browserArray[0];
		const browserVersion = browserArray[1];
		const capabilities = {
			os: os.name,
			os_version: os.version,
			browserName,
			browser_version: browserVersion,
			resolution: '1024x768',
			'browserstack.user': process.env.BROWSERSTACK_USER,
			'browserstack.key': process.env.BROWSERSTACK_KEY,
		};

		const driver = new webdriver.Builder()
			.usingServer('http://hub-cloud.browserstack.com/wd/hub')
			.withCapabilities(capabilities)
			.build();

		webdriver.WebDriver.prototype.saveScreenshot = function (filename) {
			return driver.takeScreenshot().then((data) => {
				fs.writeFile(filename, data.replace(/^data:image\/png;base64,/, ''), 'base64', (err) => {
					if (err) throw err;
				});
			});
		};

		driver.setFileDetector(new remote.FileDetector());

		const folderName = `${os.name}_${os.version}-${browser}`.split(' ').join('_');
		mkdirp(path.resolve(__dirname, folderName), (err) => {
			// path exists unless there was an error
			if (err) throw err;
		});

		const group = `${os.name} ${os.version} and ${browserName} ${browserVersion}`;
		console.log(`Generate screenshot for ${group}`);
		const pullRequestNumber = process.env.TRAVIS_PULL_REQUEST;
		driver.get(`http://${pullRequestNumber}.devfest-style-demo.surge.sh/guidelines.html`);
		const screenshotPath = path.resolve(__dirname, `${folderName}/guidelines.png`);
		console.log('Saving image to ' + screenshotPath);
		driver.saveScreenshot(screenshotPath);

		driver.quit();
	});
});