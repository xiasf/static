module.exports = (easing, ...args) => (progress) => easing(progress, ...args);