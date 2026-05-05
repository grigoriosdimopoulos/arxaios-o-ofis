/* ── Uroboru Office — Admin Panel ── */

if (!window.fbAuth || !window.db) {
  document.body.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:Inter,sans-serif;background:#111614;color:#c9a96e;text-align:center;padding:2rem">
      <div>
        <h2 style="font-family:Cinzel,serif;font-size:1.4rem;margin-bottom:1rem">Firebase Not Configured</h2>
        <p style="color:#7a8c86;max-width:400px">Open <code style="color:#c9a96e">firebase-config.js</code> and paste your Firebase project config. See the comments inside for instructions.</p>
        <a href="index.html" style="display:inline-block;margin-top:2rem;color:#c9a96e;border:1px solid rgba(201,169,110,0.3);padding:0.6rem 1.5rem;border-radius:8px;text-decoration:none">← Back to site</a>
      </div>
    </div>`;
}

/* ── State ── */
let allMessages = [];
let currentFilter = 'all';
let currentMsgId  = null;
let promoLang     = 'en';
let announceLang  = 'en';

/* ── Auth ── */
fbAuth.onAuthStateChanged(user => {
  if (user) {
    showDashboard(user);
  } else {
    showLogin();
  }
});

function showLogin() {
  document.getElementById('adminLogin').style.display = 'flex';
  document.getElementById('adminDashboard').classList.remove('visible');
}

function showDashboard(user) {
  document.getElementById('adminLogin').style.display = 'none';
  document.getElementById('adminDashboard').classList.add('visible');
  document.getElementById('adminUserEmail').textContent = user.email;
  loadInbox();
  loadPromo();
  loadAnnouncement();
  loadTestimonials();
  loadSocialProof();
  loadSettings();
}

/* Login */
document.getElementById('loginBtn').addEventListener('click', async () => {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  const err   = document.getElementById('loginError');
  const btn   = document.getElementById('loginBtn');
  err.classList.remove('visible');
  btn.disabled = true; btn.textContent = 'Signing in…';
  try {
    await fbAuth.signInWithEmailAndPassword(email, pass);
  } catch (e) {
    err.textContent = e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found'
      ? 'Invalid email or password.' : e.message;
    err.classList.add('visible');
  }
  btn.disabled = false; btn.textContent = 'Sign In';
});

document.getElementById('loginPass').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('loginBtn').click();
});

/* Logout */
document.getElementById('logoutBtn').addEventListener('click', () => fbAuth.signOut());

/* ── Tab navigation ── */
document.querySelectorAll('.admin-nav-item[data-tab]').forEach(item => {
  item.addEventListener('click', () => {
    const tab = item.dataset.tab;
    document.querySelectorAll('.admin-nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    item.classList.add('active');
    document.getElementById('tab-' + tab)?.classList.add('active');
  });
});

/* ── INBOX ── */
async function loadInbox() {
  try {
    const snap = await db.collection('messages').orderBy('timestamp', 'desc').get();
    allMessages = [];
    snap.forEach(doc => allMessages.push({ id: doc.id, ...doc.data() }));
    renderInbox();
  } catch (e) {
    document.getElementById('inboxBody').innerHTML = `<tr><td colspan="5"><div class="empty-state">Error loading messages: ${e.message}</div></td></tr>`;
  }
}

function renderInbox() {
  const tbody  = document.getElementById('inboxBody');
  const badge  = document.getElementById('unreadBadge');
  const unread = allMessages.filter(m => !m.read).length;

  if (unread > 0) { badge.textContent = unread; badge.style.display = ''; }
  else badge.style.display = 'none';

  let filtered = allMessages;
  if (currentFilter === 'unread')  filtered = allMessages.filter(m => !m.read);
  if (currentFilter === 'contact') filtered = allMessages.filter(m => m.type === 'contact');
  if (currentFilter === 'order')   filtered = allMessages.filter(m => m.type === 'order');

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/><path d="M4 9h16"/></svg>No messages yet.</div></td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(m => {
    const ts   = m.timestamp ? new Date(m.timestamp.seconds * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' }) : '—';
    const read = m.read ? 'read' : '';
    return `
      <tr class="msg-row ${read ? '' : 'unread'}" data-id="${m.id}">
        <td><span class="msg-dot ${read}"></span></td>
        <td class="msg-name">${esc(m.name || '—')}<br><span style="font-size:0.75rem;color:var(--text-muted)">${esc(m.email || '')}</span></td>
        <td><span class="msg-badge ${m.type || 'contact'}">${m.type || 'contact'}</span></td>
        <td style="color:var(--text-muted);font-size:0.82rem">${esc(m.service || m.package || '—')}</td>
        <td style="color:var(--text-muted);font-size:0.8rem">${ts}</td>
      </tr>`;
  }).join('');

  tbody.querySelectorAll('.msg-row').forEach(row => {
    row.addEventListener('click', () => openMessage(row.dataset.id));
  });
}

function openMessage(id) {
  const m = allMessages.find(x => x.id === id);
  if (!m) return;
  currentMsgId = id;

  document.getElementById('detailName').textContent  = m.name || '—';
  document.getElementById('detailEmail').textContent = m.email || '—';

  const metaFields = [
    { label: 'Phone',    val: m.phone },
    { label: 'Company',  val: m.company },
    { label: 'Service',  val: m.service || m.package },
    { label: 'Budget',   val: m.budget },
    { label: 'Deadline', val: m.deadline },
    { label: 'Language', val: m.lang },
  ].filter(f => f.val);

  document.getElementById('msgMeta').innerHTML = metaFields.map(f => `
    <div class="msg-meta-item"><label>${f.label}</label>${esc(f.val)}</div>`).join('');

  const bodyParts = [];
  if (m.description) bodyParts.push(`Project Description:\n${m.description}`);
  if (m.design)       bodyParts.push(`\nDesign Preferences:\n${m.design}`);
  if (m.notes)        bodyParts.push(`\nNotes:\n${m.notes}`);
  document.getElementById('msgBody').textContent = bodyParts.join('\n') || '(no description)';

  document.getElementById('markReadBtn').textContent = m.read ? 'Mark as Unread' : 'Mark as Read';
  document.getElementById('msgDetail').classList.add('visible');

  /* Auto-mark as read */
  if (!m.read) markRead(id, true);
}

async function markRead(id, read) {
  try {
    await db.collection('messages').doc(id).update({ read });
    const m = allMessages.find(x => x.id === id);
    if (m) m.read = read;
    renderInbox();
    if (currentMsgId === id) {
      document.getElementById('markReadBtn').textContent = read ? 'Mark as Unread' : 'Mark as Read';
    }
  } catch (e) {}
}

document.getElementById('markReadBtn').addEventListener('click', () => {
  const m = allMessages.find(x => x.id === currentMsgId);
  if (m) markRead(currentMsgId, !m.read);
});

document.getElementById('deleteMsg').addEventListener('click', async () => {
  if (!currentMsgId || !confirm('Delete this message permanently?')) return;
  try {
    await db.collection('messages').doc(currentMsgId).delete();
    allMessages = allMessages.filter(x => x.id !== currentMsgId);
    document.getElementById('msgDetail').classList.remove('visible');
    currentMsgId = null;
    renderInbox();
  } catch (e) { alert('Delete failed: ' + e.message); }
});

/* Filter buttons */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderInbox();
  });
});

/* ── PROMO BANNER ── */
async function loadPromo() {
  try {
    const doc = await db.collection('site-config').doc('main').get();
    if (!doc.exists) return;
    const cfg = doc.data().promoBanner || {};
    document.getElementById('promoActive').checked = !!cfg.active;
    document.getElementById('promoTextEn').value   = cfg.text?.en || '';
    document.getElementById('promoTextEl').value   = cfg.text?.el || '';
    document.getElementById('promoBgColor').value  = cfg.bgColor || '#c9a96e';
    document.getElementById('promoBgHex').textContent = cfg.bgColor || '#c9a96e';
  } catch (e) {}
}

document.getElementById('promoBgColor').addEventListener('input', e => {
  document.getElementById('promoBgHex').textContent = e.target.value;
});

document.getElementById('savePromo').addEventListener('click', async () => {
  const btn = document.getElementById('savePromo');
  btn.disabled = true; btn.textContent = 'Saving…';
  try {
    await db.collection('site-config').doc('main').set({
      promoBanner: {
        active:  document.getElementById('promoActive').checked,
        text:    { en: document.getElementById('promoTextEn').value, el: document.getElementById('promoTextEl').value },
        bgColor: document.getElementById('promoBgColor').value
      }
    }, { merge: true });
    showFeedback('promoFeedback');
  } catch (e) { alert('Save failed: ' + e.message); }
  btn.disabled = false; btn.textContent = 'Save Banner';
});

/* Promo lang tabs */
document.querySelectorAll('#tab-promo .lang-tab-btn').forEach(b => {
  b.addEventListener('click', () => {
    promoLang = b.dataset.lang;
    document.querySelectorAll('#tab-promo .lang-tab-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    document.getElementById('promoElWrap').style.display = promoLang === 'el' ? '' : 'none';
  });
});

/* ── ANNOUNCEMENT ── */
async function loadAnnouncement() {
  try {
    const doc = await db.collection('site-config').doc('main').get();
    if (!doc.exists) return;
    const cfg = doc.data().announcement || {};
    document.getElementById('announceActive').checked = !!cfg.active;
    document.getElementById('announceTextEn').value   = cfg.text?.en || '';
    document.getElementById('announceTextEl').value   = cfg.text?.el || '';
  } catch (e) {}
}

document.getElementById('saveAnnounce').addEventListener('click', async () => {
  const btn = document.getElementById('saveAnnounce');
  btn.disabled = true; btn.textContent = 'Saving…';
  try {
    await db.collection('site-config').doc('main').set({
      announcement: {
        active: document.getElementById('announceActive').checked,
        text:   { en: document.getElementById('announceTextEn').value, el: document.getElementById('announceTextEl').value }
      }
    }, { merge: true });
    showFeedback('announceFeedback');
  } catch (e) { alert('Save failed: ' + e.message); }
  btn.disabled = false; btn.textContent = 'Save Announcement';
});

document.querySelectorAll('#tab-announce .lang-tab-btn').forEach(b => {
  b.addEventListener('click', () => {
    announceLang = b.dataset.lang;
    document.querySelectorAll('#tab-announce .lang-tab-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    document.getElementById('announceElWrap').style.display = announceLang === 'el' ? '' : 'none';
  });
});

/* ── TESTIMONIALS ── */
let testimonials = [];

async function loadTestimonials() {
  const list = document.getElementById('testimonialList');
  try {
    const snap = await db.collection('testimonials').orderBy('order').get();
    testimonials = [];
    snap.forEach(doc => testimonials.push({ id: doc.id, ...doc.data() }));
    renderTestimonialList();
  } catch (e) {
    list.innerHTML = `<div class="empty-state">Error: ${e.message}</div>`;
  }
}

function renderTestimonialList() {
  const list = document.getElementById('testimonialList');
  if (!testimonials.length) {
    list.innerHTML = `<div class="empty-state"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>No testimonials yet. Add your first one!</div>`;
    return;
  }
  list.innerHTML = testimonials.map(t => `
    <div class="t-item">
      <div class="t-item-info">
        <div class="t-item-name">${esc(t.name)} <span style="font-size:0.72rem;color:${t.active ? 'var(--gold)' : 'var(--text-muted)'}">● ${t.active ? 'Active' : 'Hidden'}</span></div>
        <div class="t-item-preview">${'★'.repeat(t.rating || 5)} · ${esc(t.text?.en || t.text || '')}</div>
      </div>
      <div class="t-item-actions">
        <button class="btn-icon" onclick="editTestimonial('${t.id}')">Edit</button>
        <button class="btn-icon danger" onclick="deleteTestimonial('${t.id}')">Del</button>
      </div>
    </div>`).join('');
}

document.getElementById('addTestimonialBtn').addEventListener('click', () => {
  clearTestimonialForm();
  document.getElementById('testimonialFormTitle').textContent = 'Add Testimonial';
  document.getElementById('testimonialAddForm').classList.add('visible');
  document.getElementById('addTestimonialBtn').style.display = 'none';
});

document.getElementById('cancelTestimonial').addEventListener('click', () => {
  document.getElementById('testimonialAddForm').classList.remove('visible');
  document.getElementById('addTestimonialBtn').style.display = '';
});

function clearTestimonialForm() {
  ['tEditId','tName','tLocation','tPackage','tTextEn','tTextEl'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('tOrder').value = testimonials.length;
  document.getElementById('tActive').checked = true;
  document.querySelector('input[name="tRating"][value="5"]').checked = true;
}

function editTestimonial(id) {
  const t = testimonials.find(x => x.id === id);
  if (!t) return;
  document.getElementById('tEditId').value   = id;
  document.getElementById('tName').value     = t.name || '';
  document.getElementById('tLocation').value = t.location || '';
  document.getElementById('tPackage').value  = t.package || '';
  document.getElementById('tOrder').value    = t.order || 0;
  document.getElementById('tActive').checked = t.active !== false;
  document.getElementById('tTextEn').value   = t.text?.en || '';
  document.getElementById('tTextEl').value   = t.text?.el || '';
  const rating = t.rating || 5;
  document.querySelector(`input[name="tRating"][value="${rating}"]`).checked = true;
  document.getElementById('testimonialFormTitle').textContent = 'Edit Testimonial';
  document.getElementById('testimonialAddForm').classList.add('visible');
  document.getElementById('addTestimonialBtn').style.display = 'none';
}

window.editTestimonial = editTestimonial;

window.deleteTestimonial = async (id) => {
  if (!confirm('Delete this testimonial?')) return;
  try {
    await db.collection('testimonials').doc(id).delete();
    testimonials = testimonials.filter(x => x.id !== id);
    renderTestimonialList();
  } catch (e) { alert('Delete failed: ' + e.message); }
};

document.getElementById('saveTestimonial').addEventListener('click', async () => {
  const btn    = document.getElementById('saveTestimonial');
  const editId = document.getElementById('tEditId').value;
  const data   = {
    name:     document.getElementById('tName').value.trim(),
    location: document.getElementById('tLocation').value.trim(),
    package:  document.getElementById('tPackage').value.trim(),
    rating:   parseInt(document.querySelector('input[name="tRating"]:checked')?.value || '5'),
    order:    parseInt(document.getElementById('tOrder').value || '0'),
    active:   document.getElementById('tActive').checked,
    text: {
      en: document.getElementById('tTextEn').value.trim(),
      el: document.getElementById('tTextEl').value.trim()
    }
  };
  if (!data.name) { alert('Name is required.'); return; }
  btn.disabled = true; btn.textContent = 'Saving…';
  try {
    if (editId) {
      await db.collection('testimonials').doc(editId).set(data, { merge: true });
      const idx = testimonials.findIndex(x => x.id === editId);
      if (idx !== -1) testimonials[idx] = { id: editId, ...data };
    } else {
      const ref = await db.collection('testimonials').add(data);
      testimonials.push({ id: ref.id, ...data });
    }
    showFeedback('testimonialFeedback');
    renderTestimonialList();
    setTimeout(() => {
      document.getElementById('testimonialAddForm').classList.remove('visible');
      document.getElementById('addTestimonialBtn').style.display = '';
    }, 900);
  } catch (e) { alert('Save failed: ' + e.message); }
  btn.disabled = false; btn.textContent = 'Save';
});

/* ── SOCIAL PROOF ── */
let spItems = [];

async function loadSocialProof() {
  const list = document.getElementById('spList');
  try {
    const snap = await db.collection('social-proof').get();
    spItems = [];
    snap.forEach(doc => spItems.push({ id: doc.id, ...doc.data() }));
    renderSPList();
  } catch (e) {
    list.innerHTML = `<div class="empty-state">Error: ${e.message}</div>`;
  }
}

function renderSPList() {
  const list = document.getElementById('spList');
  if (!spItems.length) {
    list.innerHTML = `<div class="empty-state">No toasts yet. The site uses built-in defaults until you add some here.</div>`;
    return;
  }
  list.innerHTML = spItems.map(s => `
    <div class="sp-item">
      <div style="flex:1">
        <div class="sp-item-text"><strong>${esc(s.name)}</strong> από ${esc(s.city)} · ${esc(s.action?.en || '')}</div>
        <div class="sp-item-delay">Shows after ${(s.delay || 0) / 1000}s</div>
      </div>
      <div class="t-item-actions" style="gap:0.5rem">
        <button class="btn-icon" onclick="editSP('${s.id}')">Edit</button>
        <button class="btn-icon danger" onclick="deleteSP('${s.id}')">Del</button>
      </div>
    </div>`).join('');
}

document.getElementById('addSPBtn').addEventListener('click', () => {
  clearSPForm();
  document.getElementById('spFormTitle').textContent = 'Add Toast';
  document.getElementById('spAddForm').classList.add('visible');
  document.getElementById('addSPBtn').style.display = 'none';
});

document.getElementById('cancelSP').addEventListener('click', () => {
  document.getElementById('spAddForm').classList.remove('visible');
  document.getElementById('addSPBtn').style.display = '';
});

function clearSPForm() {
  ['spEditId','spName','spCity','spActionEn','spActionEl'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('spDelay').value = '30';
}

window.editSP = (id) => {
  const s = spItems.find(x => x.id === id);
  if (!s) return;
  document.getElementById('spEditId').value   = id;
  document.getElementById('spName').value     = s.name || '';
  document.getElementById('spCity').value     = s.city || '';
  document.getElementById('spActionEn').value = s.action?.en || '';
  document.getElementById('spActionEl').value = s.action?.el || '';
  document.getElementById('spDelay').value    = (s.delay || 30000) / 1000;
  document.getElementById('spFormTitle').textContent = 'Edit Toast';
  document.getElementById('spAddForm').classList.add('visible');
  document.getElementById('addSPBtn').style.display = 'none';
};

window.deleteSP = async (id) => {
  if (!confirm('Delete this toast?')) return;
  try {
    await db.collection('social-proof').doc(id).delete();
    spItems = spItems.filter(x => x.id !== id);
    renderSPList();
  } catch (e) { alert('Delete failed: ' + e.message); }
};

document.getElementById('saveSP').addEventListener('click', async () => {
  const btn    = document.getElementById('saveSP');
  const editId = document.getElementById('spEditId').value;
  const data = {
    name:   document.getElementById('spName').value.trim(),
    city:   document.getElementById('spCity').value.trim(),
    action: { en: document.getElementById('spActionEn').value.trim(), el: document.getElementById('spActionEl').value.trim() },
    delay:  parseInt(document.getElementById('spDelay').value || '30') * 1000
  };
  if (!data.name) { alert('Name is required.'); return; }
  btn.disabled = true; btn.textContent = 'Saving…';
  try {
    if (editId) {
      await db.collection('social-proof').doc(editId).set(data, { merge: true });
      const idx = spItems.findIndex(x => x.id === editId);
      if (idx !== -1) spItems[idx] = { id: editId, ...data };
    } else {
      const ref = await db.collection('social-proof').add(data);
      spItems.push({ id: ref.id, ...data });
    }
    showFeedback('spFeedback');
    renderSPList();
    setTimeout(() => {
      document.getElementById('spAddForm').classList.remove('visible');
      document.getElementById('addSPBtn').style.display = '';
    }, 900);
  } catch (e) { alert('Save failed: ' + e.message); }
  btn.disabled = false; btn.textContent = 'Save';
});

/* ── SETTINGS ── */
async function loadSettings() {
  try {
    const doc = await db.collection('site-config').doc('main').get();
    if (!doc.exists) return;
    const cfg = doc.data();
    if (cfg.contactEmail)  document.getElementById('settingsEmail').value = cfg.contactEmail;
    if (cfg.seo) {
      document.getElementById('seoTitle').value = cfg.seo.title || '';
      document.getElementById('seoDesc').value  = cfg.seo.description || '';
    }
    if (cfg.stats) {
      [0,1,2,3].forEach(i => {
        const sv = document.getElementById('stat' + i + 'val');
        const sl = document.getElementById('stat' + i + 'label');
        if (sv) sv.value = cfg.stats['s' + i] || '';
        if (sl) sl.value = cfg.stats['l' + i] || '';
      });
    }
  } catch (e) {}
}

document.getElementById('saveSettings').addEventListener('click', async () => {
  const btn = document.getElementById('saveSettings');
  btn.disabled = true; btn.textContent = 'Saving…';
  const stats = {};
  [0,1,2,3].forEach(i => {
    const v = document.getElementById('stat' + i + 'val')?.value;
    const l = document.getElementById('stat' + i + 'label')?.value;
    if (v !== undefined) stats['s' + i] = parseInt(v) || 0;
    if (l !== undefined) stats['l' + i] = l;
  });
  try {
    await db.collection('site-config').doc('main').set({
      contactEmail: document.getElementById('settingsEmail').value.trim(),
      stats,
      seo: {
        title:       document.getElementById('seoTitle').value.trim(),
        description: document.getElementById('seoDesc').value.trim()
      }
    }, { merge: true });
    showFeedback('settingsFeedback');
  } catch (e) { alert('Save failed: ' + e.message); }
  btn.disabled = false; btn.textContent = 'Save All Settings';
});

/* ── Utilities ── */
function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function showFeedback(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('visible');
  setTimeout(() => el.classList.remove('visible'), 3000);
}
