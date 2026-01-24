(function(){
  const body = document.body;
  const toggle = document.getElementById('motionToggle');

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saved = localStorage.getItem('motion'); // 'on' | 'off' | null
  const initialOff = saved ? saved === 'off' : prefersReduced;

  function applyMotion(off){
    body.classList.toggle('motion-off', !!off);
    if (toggle) toggle.setAttribute('aria-pressed', off ? 'true' : 'false');
  }

  applyMotion(initialOff);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const off = !body.classList.contains('motion-off');
      applyMotion(off);
      localStorage.setItem('motion', off ? 'off' : 'on');
    });
  }
})();
