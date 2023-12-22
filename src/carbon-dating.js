const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    let volume = Number (sampleActivity.trim());
      if (volume > 0 && volume < 15 && Number.isFinite(volume)){
        const logTwo = 0.693;
        let decayRate = logTwo / HALF_LIFE_PERIOD;
        let age = Math.log(MODERN_ACTIVITY / sampleActivity) / decayRate;
        return Math.ceil(age);
        }
        else {return false}
  }
  else {return false}
}

module.exports = {
  dateSample
};
