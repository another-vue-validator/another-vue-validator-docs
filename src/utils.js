export default {

  delay(duration, func) {
    let args = Array.prototype.slice.call(arguments, 2);

    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(func.apply(null, args));
      }, duration);
    });
  }
}
