function getPeople(handshakes) {
  const people = [];

  while (handshakes > 0) {
    let currentHandshakes = handshakes;

    for (let i = 0; i < people.length; i++) {
      currentHandshakes += i;
    }

    if (currentHandshakes <= 0) {
      break;
    }

    people.push(true);
    handshakes -= people.length - 1;
  }

  return people.length - 1;
}
console.log(getPeople(120));
