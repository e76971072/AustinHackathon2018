// returns the complement to hue
exports.getComplement = function(hue) {
    return (hue + 180) % 360;
}
