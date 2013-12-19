module.exports = {
	seleniumServerURL: 'http://0.0.0.0:4445',
	baseURL: 'file://' + __dirname + '/resources/page.html',
	driverCapabilities: {
		browserName			: 'chrome',
		javascriptEnabled	: true,

		// saucelabs specific
		'selenium-version'	: '2.35.0',
		'tunnel-identifier'	: 'travis-' + process.env.TRAVIS_JOB_NUMBER,
		build				: process.env.TRAVIS_BUILD_NUMBER
	},
	quit: 'never',
	browserWarmupTimeout: 30 * 1000,	//ms
	timeout: 500,	// implicit wait for elements lookup in milliseconds, has to be lower than mocha's timeout to test for missing elements rejection
}
