function easeOutCubic(t) {
  return --t * t * t + 1; // Standard ease-out cubic function
}

function scrollToTarget(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const runPercent = Math.min(timeElapsed / duration, 1);
    const easing = easeOutCubic(runPercent); // Apply the easing

    window.scrollTo(0, startPosition + distance * easing);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
