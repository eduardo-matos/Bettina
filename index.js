module.exports.milliseconds = function milliseconds(value) {
  return value;
}

module.exports.seconds = function seconds(value) {
  return 1000 * value;
}

module.exports.minutes = function minutes(value) {
  return 1000 * 60 * value;
}