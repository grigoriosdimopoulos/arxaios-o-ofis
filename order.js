/* ── Order Page Logic ── */

const pkgNames = {
  'starter':       { en: 'Starter Site',       el: 'Starter Ιστοσελίδα' },
  'business':      { en: 'Business Site',       el: 'Business Ιστοσελίδα' },
  'professional':  { en: 'Professional Site',   el: 'Professional Ιστοσελίδα' },
  'mini-shop':     { en: 'Mini Shop',           el: 'Mini Eshop' },
  'standard-shop': { en: 'Standard Shop',       el: 'Standard Eshop' },
  'premium-shop':  { en: 'Premium Shop',        el: 'Premium Eshop' },
  'custom':        { en: 'Custom Solution',     el: 'Προσαρμοσμένη Λύση' },
};

function openOrder(pkg, price) {
  const modal   = document.getElementById('orderModal');
  const title   = document.getElementById('modalTitle');
  const pkgIn   = document.getElementById('o-package');
  const priceIn = document.getElementById('o-price');

  const name = pkgNames[pkg] ? pkgNames[pkg][currentLang] || pkgNames[pkg]['en'] : pkg;
  title.textContent = name + (price !== 'Variable' ? ' — ' + price : '');
  pkgIn.value  = name;
  priceIn.value = price;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  /* reset state */
  const form = document.getElementById('orderForm');
  const success = document.getElementById('orderSuccess');
  form.style.display = '';
  success.classList.remove('visible');
  form.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));
}

function closeOrder() {
  document.getElementById('orderModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* Close on overlay click */
document.getElementById('orderModal').addEventListener('click', function(e) {
  if (e.target === this) closeOrder();
});

/* Close on Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOrder();
});

/* ── Save order to Firestore (shows in admin Inbox) ── */
async function saveOrder(data) {
  if (!window.db) return;
  try {
    await window.db.collection('messages').add({
      type:        'order',
      name:        data.name,
      email:       data.email,
      phone:       data.phone || '',
      company:     data.company || '',
      package:     data.package,
      price:       data.price,
      description: data.description || '',
      notes:       data.notes || '',
      lang:        window.currentLang || 'el',
      read:        false,
      timestamp:   firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (e) {
    console.warn('[Uroboru] Order save failed:', e.message);
  }
}

/* ── Email notification to admin via EmailJS ── */
async function notifyAdmin(data) {
  if (!window.emailjs || !window.EMAILJS_PK || window.EMAILJS_PK === 'YOUR_PUBLIC_KEY') return;
  try {
    await emailjs.send(window.EMAILJS_SERVICE, window.EMAILJS_ORDER_TPL, {
      name:        data.name,
      email:       data.email,
      phone:       data.phone || 'N/A',
      company:     data.company || 'N/A',
      package:     data.package,
      price:       data.price,
      description: data.description || '',
      notes:       data.notes || 'N/A',
    });
  } catch (e) {
    console.warn('[Uroboru] Admin notification failed:', e.text || e.message);
  }
}

/* ── Order form validation & submit ── */
const orderValidators = {
  'o-fname': v => v.trim().length >= 2,
  'o-email': v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  'o-desc':  v => v.trim().length >= 20,
  'o-agree': () => document.getElementById('o-agree').checked,
};

function validateOrderField(id) {
  const el    = document.getElementById(id);
  const group = el ? el.closest('.form-group') : null;
  if (!group) return true;
  const val = id === 'o-agree' ? '' : el.value;
  const ok  = orderValidators[id] ? orderValidators[id](val) : true;
  group.classList.toggle('has-error', !ok);
  return ok;
}

['o-fname','o-email','o-desc'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input',  () => validateOrderField(id));
    el.addEventListener('change', () => validateOrderField(id));
  }
});
document.getElementById('o-agree').addEventListener('change', () => validateOrderField('o-agree'));

document.getElementById('orderForm').addEventListener('submit', async e => {
  e.preventDefault();

  const fields = ['o-fname', 'o-email', 'o-desc', 'o-agree'];
  let valid = true;
  fields.forEach(f => { if (!validateOrderField(f)) valid = false; });
  if (!valid) {
    const firstErr = document.querySelector('#orderForm .has-error input, #orderForm .has-error textarea');
    if (firstErr) firstErr.focus();
    return;
  }

  const btn = document.getElementById('orderSubmitBtn');
  btn.classList.add('loading');
  btn.disabled = true;

  const data = {
    name:        document.getElementById('o-fname').value.trim(),
    email:       document.getElementById('o-email').value.trim(),
    phone:       document.getElementById('o-phone').value.trim(),
    company:     document.getElementById('o-company').value.trim(),
    package:     document.getElementById('o-package').value,
    price:       document.getElementById('o-price').value,
    description: document.getElementById('o-desc').value.trim(),
    notes:       document.getElementById('o-notes').value.trim(),
  };

  /* Write to Firestore — appears in admin Inbox immediately */
  await saveOrder(data);

  /* Send email notification to grigoriosdimopoulos@urobor.us */
  await notifyAdmin(data);

  btn.classList.remove('loading');
  btn.disabled = false;

  document.getElementById('orderForm').style.display = 'none';
  document.getElementById('orderSuccess').classList.add('visible');
});
