function delayedMessage(message, delay) {
  setTimeout(function () {
    console.log(message);
  }, delay);
}

delayedMessage("Hello, world!", 5000);
