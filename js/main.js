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
  let initialOff = true;

  const saved = localStorage.getItem('motion');
  if (saved === 'on') initialOff = false;
  if (saved === 'off') initialOff = true;

  setMotion(initialOff);

  // --- TOGGLE BUTTON ---
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOff = body.classList.contains('motion-off');
      setMotion(!isOff);
      localStorage.setItem('motion', !isOff ? 'off' : 'on');
    });
  }

	const whale = document.getElementById('whale');

	whale.addEventListener('click', () => {
	whale.style.animation = 'none';
	void whale.offsetWidth; // reset animation
	whale.style.animation = 'whaleSwing 2s ease-in-out';
	});


})();
