'use strict';

var expect = require('chai').expect;
var Greet = require('../greet-jay');

describe('Greet', function() {
	var greet;

	before(function() {
		greet = new Greet();
	});

	it('should greet someone', function(){
		expect(greet.greet('jay')).to.eql('hello jay');	
	});
});