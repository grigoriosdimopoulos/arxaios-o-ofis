/* ── Exit Intent Popup ── */
(function () {
  const SESSION_KEY = 'exit_shown';
  if (sessionStorage.getItem(SESSION_KEY)) return;

  const overlay  = document.getElementById('exitOverlay');
  const closeBtn = document.getElementById('exitClose');
  const dismiss  = document.getElementById('exitDismiss');
  const submit   = document.getElementById('exitSubmit');
  const emailIn  = document.getElementById('exitEmail');
  const formWrap = document.querySelector('.exit-form-wrap');
  const success  = document.getElementById('exitSuccess');
  if (!overlay) return;

  let shown = false;

  function showExit() {
    if (shown) return;
    shown = true;
    sessionStorage.setItem(SESSION_KEY, '1');
    overlay.classList.add('exit-visible');
    /* sync placeholder i18n */
    if (emailIn && window.t) emailIn.placeholder = t('exit.placeholder');
  }

  function hideExit() { overlay.classList.remove('exit-visible'); }

  document.addEventListener('mouseleave', e => {
    if (e.clientY < 8) showExit();
  });

  /* Mobile: show after 45s if not shown */
  setTimeout(() => { if (!shown) showExit(); }, 45000);

  closeBtn?.addEventListener('click', hideExit);
  dismiss?.addEventListener('click', hideExit);
  overlay.addEventListener('click', e => { if (e.target === overlay) hideExit(); });

  submit?.addEventListener('click', async () => {
    const email = emailIn?.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (emailIn) emailIn.style.borderColor = '#e07070';
      return;
    }
    if (window.db) {
      try {
        await window.db.collection('leads').add({
          email,
          source: 'exit-popup',
          lang: window.currentLang || 'en',
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (e) {}
    }
    if (formWrap) formWrap.style.display = 'none';
    if (success)  success.classList.add('visible');
    setTimeout(hideExit, 2800);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') hideExit();
  });
})();

/* ── Social Proof Toasts ── */
(function () {
  const SCRIPTED = [
    { name: 'Αλέξανδρος Μ.', city: 'Αθήνα',         action: { en: 'ordered a Web Development package', el: 'παρήγγειλε Web Development' },        delay: 22000 },
    { name: 'Maria P.',       city: 'Θεσσαλονίκη',   action: { en: 'requested a Design & Branding quote', el: 'ζήτησε προσφορά Design & Branding' }, delay: 38000 },
    { name: 'Γιώργης Τ.',     city: 'Πάτρα',          action: { en: 'started a Custom Solution project', el: 'ξεκίνησε Custom Solution' },            delay: 55000 },
    { name: 'Sofia K.',       city: 'Ηράκλειο',       action: { en: 'ordered a Digital Marketing plan', el: 'παρήγγειλε πλάνο Digital Marketing' },   delay: 72000 },
    { name: 'Νίκος Δ.',       city: 'Λάρισα',         action: { en: 'requested a Strategy consultation', el: 'ζήτησε συμβουλευτική Στρατηγικής' },   delay: 90000 },
    { name: 'Elena V.',       city: 'Βόλος',          action: { en: 'ordered Content Creation services', el: 'παρήγγειλε Content Creation' },          delay: 108000 },
    { name: 'Κώστας Α.',     city: 'Χανιά',          action: { en: 'just left a 5-star review', el: 'άφησε κριτική 5 αστέρων' },                     delay: 125000 },
  ];

  const toast   = document.getElementById('spToast');
  const avatar  = document.getElementById('spAvatar');
  const textEl  = document.getElementById('spText');
  const timeEl  = document.getElementById('spTime');
  if (!toast) return;

  function showToast(item) {
    const lang   = window.currentLang || 'en';
    const action = item.action[lang] || item.action.en;
    const initial = item.name[0].toUpperCase();
    avatar.textContent = initial;
    textEl.innerHTML = `<strong>${item.name}</strong> από ${item.city} ${action}`;
    timeEl.textContent = lang === 'el' ? 'μόλις τώρα' : 'just now';

    toast.classList.add('sp-visible');
    setTimeout(() => toast.classList.remove('sp-visible'), 5500);
  }

  /* Load from Firestore if available, else use scripted */
  async function initToasts() {
    let items = SCRIPTED;
    if (window.db) {
      try {
        const snap = await window.db.collection('social-proof').get();
        if (!snap.empty) {
          const arr = [];
          snap.forEach(doc => arr.push(doc.data()));
          /* Merge delays from scripted if missing */
          items = arr.map((d, i) => ({
            name: d.name || SCRIPTED[i % SCRIPTED.length].name,
            city: d.city || SCRIPTED[i % SCRIPTED.length].city,
            action: d.action || SCRIPTED[i % SCRIPTED.length].action,
            delay: d.delay || SCRIPTED[i % SCRIPTED.length].delay
          }));
        }
      } catch (e) {}
    }
    items.forEach(item => setTimeout(() => showToast(item), item.delay));
  }

  initToasts();
})();
