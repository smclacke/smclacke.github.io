(function(){
  const duck = document.getElementById('duck');
  const toggle = document.getElementById('motionToggle');
  const body = document.body;

  const gifMotionOn  = "images/flying_duck.gif"; // motion ON
  const gifMotionOff = "images/walking_duck.gif";  // motion OFF

  function setMotion(isOff) {
    body.classList.toggle('motion-off', isOff);
    duck.src = isOff ? gifMotionOff : gifMotionOn;
    if (toggle) toggle.setAttribute('aria-pressed', isOff ? 'true' : 'false');
  }

  // Initialize from localStorage or system preference
  const saved = localStorage.getItem('motion'); // 'on' | 'off' | null
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const initialOff = saved ? saved === 'off' : prefersReduced;
  setMotion(initialOff);

  // Toggle button
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOff = !body.classList.contains('motion-off');
      setMotion(isOff);
      localStorage.setItem('motion', isOff ? 'off' : 'on');
    });
  }
})();
