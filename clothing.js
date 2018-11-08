var rgbToHsl = require('rgb-to-hsl');

module.exports = class Clothing {
    constructor(r, g, b, type) {
	this.hsl = rgbToHsl(r, g, b);
	this.type = type;
    }

    get hue() {
	return this.hsl[0];
    }

    get saturation() {
	return this.hsl[1];
    }

    get lighting() {
	return this.hsl[2];
    }

    // Usage: a.matches(b)
    // Returns: floating point in [0, 1]
    //          1 -> b is a perfect complement to a
    //          0 -> b has exactly the same hue as a
    complements(clothing) {
	var a_hue = this.hue;
	var b_hue = clothing.hue;

	// The perfect complement to a_hue
	var ideal_hue = (a_hue + 180) % 360;

	// Calculate how far away b_hue is from being a_hue's ideal complement
	var diff = Math.abs(ideal_hue - b_hue);

	return 1 - diff / 180;
    }
};

// Put this at the top of your file to use this class
// var Clothing = require ("./clothing.js");
// npm i rgb-to-hsl

