const time = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  time.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
