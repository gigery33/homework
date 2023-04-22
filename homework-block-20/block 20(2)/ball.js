const ball = document.getElementById("ball");
const container = document.getElementById("container");
let targetX = null;
let targetY = null;
let x = 0;
let y = 0;
let speed = 5;
let interval;

// Ball movement
function moveBall() {
  let dx = targetX - x;
  let dy = targetY - y;
  let distance = Math.sqrt(dx * dx + dy * dy);
  let angle = Math.atan2(dy, dx);
  let vx = Math.cos(angle) * speed;
  let vy = Math.sin(angle) * speed;

  if (distance < speed) {
    clearInterval(interval);
    interval = null;
    targetX = null;
    targetY = null;
  } else {
    x += vx;
    y += vy;
    ball.style.left = x + "px";
    ball.style.top = y + "px";
  }
}

// Container click function
container.addEventListener("click", function (event) {
  var rect = container.getBoundingClientRect();
  targetX = event.clientX - rect.left - ball.offsetWidth / 2;
  targetY = event.clientY - rect.top - ball.offsetHeight / 2;

  if (!interval) {
    interval = setInterval(moveBall, 10);
  }
});
