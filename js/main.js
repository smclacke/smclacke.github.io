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
	const bubbleContainer = document.querySelector('.whale-bubbles');

	let bubbleInterval;

	whale.addEventListener('mouseenter', () => {
	bubbleInterval = setInterval(() => {
		const bubble = document.createElement('div');
		bubble.className = 'whale-bubble';

		// random horizontal drift
		bubble.style.left = `${40 + Math.random() * 20}%`;
		bubble.style.width = bubble.style.height =
		`${6 + Math.random() * 6}px`;

		bubbleContainer.appendChild(bubble);

		setTimeout(() => bubble.remove(), 2500);
	}, 300);
	});

	whale.addEventListener('mouseleave', () => {
	clearInterval(bubbleInterval);
	});

	whale.addEventListener('click', () => {
	whale.style.animation = 'none';
	void whale.offsetWidth; // reset animation
	whale.style.animation = 'whaleSwing 2s ease-in-out';
	});


	// SUN: toggle day/night
	const sunWrapper = document.querySelector('.sun-wrapper');
	if (sunWrapper) {
		sunWrapper.addEventListener('click', (e) => {
		e.stopPropagation();
		body.classList.toggle('night');

		localStorage.setItem('dayNight', body.classList.contains('night') ? 'night' : 'day');
		});
	}

	const savedMode = localStorage.getItem('dayNight');
	if (savedMode === 'night') body.classList.add('night');

	
})();
