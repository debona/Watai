var config = require('../../src/config.json');	// '../../src' instead of '../' to allow for coverage instrumentation

exports.set = function setConfig(newConf) {
	config = Object.merge(config, newConf);
}

exports.__defineGetter__('values', function() {
	return config;
});
