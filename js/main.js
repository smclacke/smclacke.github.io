(function() {
  const duck = document.getElementById('duck');
  const toggle = document.getElementById('motionToggle');
  const body = document.body;

  const gifMotionOn  = "images/flying_duck.gif";  // motion ON
  const gifMotionOff = "images/walking_duck.gif"; // motion OFF

  function setMotion(isOff) {
    body.classList.toggle('motion-off', isOff);
    duck.src = isOff ? gifMotionOff : gifMotionOn;
    if (toggle) toggle.setAttribute('aria-pressed', isOff ? 'true' : 'false');
  }

  // --- INITIAL STATE ---
  // Default: motion OFF
  let initialOff = true;

  // If user previously saved preference, use that
  const saved = localStorage.getItem('motion'); // 'on' | 'off' | null
  if (saved === 'on') initialOff = false;
  if (saved === 'off') initialOff = true;

  setMotion(initialOff);

  // --- TOGGLE BUTTON ---
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOff = body.classList.contains('motion-off'); // current state
      setMotion(!isOff); // flip
      localStorage.setItem('motion', !isOff ? 'off' : 'on');
    });
  }
})();
