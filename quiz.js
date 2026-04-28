/* ── Quiz / Package Finder ── */

const quizStepDefs = [
  {
    id: 'type',
    q:  { en: 'What do you need?', el: 'Τι χρειάζεστε;' },
    sub:{ en: 'Choose the option that best describes your project.', el: 'Επιλέξτε αυτό που περιγράφει καλύτερα το έργο σας.' },
    opts: [
      { v:'website', icon:'◈', label:{en:'Business Website',el:'Ιστοσελίδα'}, desc:{en:'Showcase your business, services or portfolio.',el:'Παρουσίαση επιχείρησης, υπηρεσιών ή portfolio.'} },
      { v:'eshop',   icon:'◫', label:{en:'Online Shop',el:'Online Κατάστημα'}, desc:{en:'Sell products directly through your website.',el:'Πώληση προϊόντων μέσω της ιστοσελίδας σας.'} },
      { v:'custom',  icon:'◉', label:{en:'Custom / App',el:'Προσαρμοσμένο'}, desc:{en:'Booking system, web app, AI chatbot or something unique.',el:'Σύστημα κρατήσεων, web app, AI chatbot ή κάτι μοναδικό.'} },
    ]
  },
  {
    id: 'scale',
    q:  { en: 'What scale?', el: 'Τι μέγεθος;' },
    sub:{ en:'This helps us pick the right package.', el:'Αυτό μας βοηθά να επιλέξουμε το σωστό πακέτο.' },
    optsFor: {
      website: [
        { v:'1',  icon:'①', label:{en:'1 Page',el:'1 Σελίδα'}, desc:{en:'Landing page — fast, focused, effective.',el:'Landing page — γρήγορη, στοχευμένη, αποτελεσματική.'} },
        { v:'5',  icon:'⑤', label:{en:'Up to 5 Pages',el:'Έως 5 Σελίδες'}, desc:{en:'Home, About, Services, Contact + more.',el:'Αρχική, Σχετικά, Υπηρεσίες, Επικοινωνία κ.ά.'} },
        { v:'10', icon:'⑩', label:{en:'Up to 10 Pages + Blog',el:'Έως 10 Σελίδες + Blog'}, desc:{en:'Full site with blog / news section.',el:'Πλήρης ιστοσελίδα με blog / ειδήσεις.'} },
      ],
      eshop: [
        { v:'20',  icon:'◐', label:{en:'Up to 20 Products',el:'Έως 20 Προϊόντα'}, desc:{en:'Small catalogue — ideal for starting out.',el:'Μικρός κατάλογος — ιδανικό για αρχή.'} },
        { v:'100', icon:'◑', label:{en:'Up to 100 Products',el:'Έως 100 Προϊόντα'}, desc:{en:'Mid-range shop with full customer accounts.',el:'Μεσαίο shop με πλήρεις λογαριασμούς πελατών.'} },
        { v:'unlimited', icon:'◕', label:{en:'100+ Products',el:'100+ Προϊόντα'}, desc:{en:'Unlimited scale, advanced features.',el:'Απεριόριστη κλίμακα, προηγμένα χαρακτηριστικά.'} },
      ]
    }
  },
  {
    id: 'extras',
    q:  { en: 'Any must-have extras?', el: 'Χρειάζεστε κάποιο extra;' },
    sub:{ en:'Select all that apply.', el:'Επιλέξτε όσα ισχύουν.' },
    multi: true,
    opts: [
      { v:'blog',    icon:'✎', label:{en:'Blog / News',el:'Blog / Ειδήσεις'} },
      { v:'booking', icon:'◷', label:{en:'Booking System',el:'Σύστημα Κρατήσεων'} },
      { v:'multilang',icon:'⊕', label:{en:'Bilingual (GR+EN)',el:'Δίγλωσση (GR+EN)'} },
      { v:'none',    icon:'∅', label:{en:'None of the above',el:'Κανένα από τα παραπάνω'} },
    ]
  },
  {
    id: 'maintenance',
    q:  { en: 'Do you need monthly maintenance?', el: 'Χρειάζεστε μηνιαία συντήρηση;' },
    sub:{ en:'We keep your site updated, secure and fast.', el:'Κρατάμε τη σελίδα σας ενημερωμένη, ασφαλή και γρήγορη.' },
    opts: [
      { v:'basic', icon:'◌', label:{en:'Basic — €50/mo',el:'Basic — €50/μήνα'}, desc:{en:'Security, backups, uptime monitoring.',el:'Ασφάλεια, backups, monitoring.'} },
      { v:'pro',   icon:'●', label:{en:'Pro — €100/mo',el:'Pro — €100/μήνα'}, desc:{en:'Everything in Basic + content updates & reports.',el:'Όλα τα Basic + ενημερώσεις περιεχομένου & reports.'} },
      { v:'none',  icon:'○', label:{en:'No maintenance',el:'Χωρίς συντήρηση'}, desc:{en:'I\'ll manage it myself after delivery.',el:'Θα το διαχειριστώ μόνος/η μου.'} },
    ]
  }
];

const pkgMap = {
  website: { '1':'starter','5':'business','10':'professional' },
  eshop:   { '20':'mini-shop','100':'standard-shop','unlimited':'premium-shop' },
  custom:  { custom:'custom' },
};
const pkgPrices = {
  starter:'€99', business:'€249', professional:'€449',
  'mini-shop':'€499','standard-shop':'€799','premium-shop':'€1,199', custom:'Variable'
};
const pkgLabels = {
  starter:       { en:'Starter Site',      el:'Starter Ιστοσελίδα' },
  business:      { en:'Business Site',     el:'Business Ιστοσελίδα' },
  professional:  { en:'Professional Site', el:'Professional Ιστοσελίδα' },
  'mini-shop':   { en:'Mini Shop',         el:'Mini Eshop' },
  'standard-shop':{ en:'Standard Shop',   el:'Standard Eshop' },
  'premium-shop':{ en:'Premium Shop',      el:'Premium Eshop' },
  custom:        { en:'Custom Solution',   el:'Προσαρμοσμένη Λύση' },
};

let quizAnswers   = {};
let quizHistory   = [];
let quizStep      = 0;
let quizMultiSel  = [];
const QUIZ_STEPS  = 4; // total steps shown (type, scale/skip, extras, maintenance)

function openQuiz() {
  quizAnswers  = {};
  quizHistory  = [];
  quizStep     = 0;
  quizMultiSel = [];
  document.getElementById('quizModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderQuizStep();
}
function closeQuiz() {
  document.getElementById('quizModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('quizModal').addEventListener('click', function(e){
  if(e.target===this) closeQuiz();
});
document.addEventListener('keydown', e => {
  if(e.key==='Escape') closeQuiz();
});

function getVisibleSteps() {
  // Steps shown depend on type answer:
  // type=custom → skip scale & extras, go straight to maintenance then result
  // type=website/eshop → all steps
  if(quizAnswers.type==='custom') return ['type','maintenance'];
  return ['type','scale','extras','maintenance'];
}

function renderQuizStep() {
  const steps   = getVisibleSteps();
  const stepId  = steps[quizStep];
  const stepDef = quizStepDefs.find(s=>s.id===stepId);
  if(!stepDef) { renderQuizResult(); return; }

  const total   = steps.length;
  const pct     = Math.round((quizStep / total) * 100);
  const L       = currentLang;

  // Build options
  let opts = stepDef.opts;
  if(stepId==='scale' && stepDef.optsFor) {
    opts = stepDef.optsFor[quizAnswers.type] || [];
  }

  let optsHTML = opts.map(o => {
    const isSel = quizAnswers[stepId]===o.v || (stepDef.multi && quizMultiSel.includes(o.v));
    return `<button class="quiz-opt ${isSel?'selected':''}" onclick="quizSelect('${stepId}','${o.v}',${!!stepDef.multi})">
      <span class="quiz-opt-icon">${o.icon}</span>
      <span class="quiz-opt-label">${o.label[L]||o.label.en}</span>
      ${o.desc ? `<span class="quiz-opt-desc">${o.desc[L]||o.desc.en}</span>` : ''}
    </button>`;
  }).join('');

  const nextBtn = stepDef.multi ? `<button class="btn-primary quiz-next-btn" onclick="quizMultiNext('${stepId}')">${L==='el'?'Επόμενο':'Next →'}</button>` : '';

  document.getElementById('quizContent').innerHTML = `
    <div class="quiz-prog-wrap">
      <div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:${pct}%"></div></div>
      <span class="quiz-prog-label">${quizStep+1} / ${total}</span>
    </div>
    <h3 class="quiz-question">${stepDef.q[L]||stepDef.q.en}</h3>
    <p class="quiz-sub">${stepDef.sub[L]||stepDef.sub.en}</p>
    <div class="quiz-opts ${stepDef.multi?'quiz-multi':''}">${optsHTML}</div>
    ${nextBtn}
  `;
  document.getElementById('quizBackBtn').style.display = quizStep>0 ? 'inline-flex' : 'none';
}

function quizSelect(stepId, value, isMulti) {
  if(isMulti) {
    if(value==='none') {
      quizMultiSel = ['none'];
    } else {
      quizMultiSel = quizMultiSel.filter(v=>v!=='none');
      const idx = quizMultiSel.indexOf(value);
      if(idx>-1) quizMultiSel.splice(idx,1);
      else quizMultiSel.push(value);
    }
    renderQuizStep();
    return;
  }
  quizAnswers[stepId] = value;
  quizHistory.push(quizStep);
  quizStep++;
  const steps = getVisibleSteps();
  if(quizStep >= steps.length) { renderQuizResult(); return; }
  renderQuizStep();
}

function quizMultiNext(stepId) {
  quizAnswers[stepId] = quizMultiSel.length ? [...quizMultiSel] : ['none'];
  quizHistory.push(quizStep);
  quizStep++;
  quizMultiSel = [];
  const steps = getVisibleSteps();
  if(quizStep >= steps.length) { renderQuizResult(); return; }
  renderQuizStep();
}

function quizBack() {
  if(quizHistory.length===0) return;
  quizStep = quizHistory.pop();
  delete quizAnswers[getVisibleSteps()[quizStep]];
  quizMultiSel = [];
  renderQuizStep();
}

function renderQuizResult() {
  const L = currentLang;
  let pkg;
  if(quizAnswers.type==='custom') {
    pkg = 'custom';
  } else {
    const map = pkgMap[quizAnswers.type] || {};
    pkg = map[quizAnswers.scale] || 'business';
  }
  const price    = pkgPrices[pkg];
  const pkgLabel = (pkgLabels[pkg]||{})[L] || (pkgLabels[pkg]||{}).en || pkg;
  const maint    = quizAnswers.maintenance;

  const maintHint = maint && maint!=='none'
    ? `<div class="quiz-result-maint">
        <span class="quiz-result-maint-label">${L==='el'?'+ Συντήρηση':'+ Maintenance'}</span>
        <span class="quiz-result-maint-price">${maint==='basic'?'€50':maint==='pro'?'€100':''}/mo</span>
      </div>` : '';

  const extras = Array.isArray(quizAnswers.extras) ? quizAnswers.extras.filter(v=>v!=='none') : [];
  const extrasHtml = extras.length
    ? `<div class="quiz-result-extras">
        <p class="quiz-extras-label">${L==='el'?'Προτεινόμενα add-ons για εσάς:':'Suggested add-ons for you:'}</p>
        ${extras.map(e=>{
          const hints = {
            blog:      {en:'Blog setup included in Professional, or add for €150',el:'Το blog συμπεριλαμβάνεται στο Professional, ή extra €150'},
            booking:   {en:'Booking system add-on: €200',el:'Σύστημα κρατήσεων add-on: €200'},
            multilang: {en:'Extra language add-on: €80',el:'Επιπλέον γλώσσα add-on: €80'},
          };
          const hint = hints[e]||{};
          return `<span class="quiz-extra-tag">${hint[L]||hint.en||e}</span>`;
        }).join('')}
       </div>` : '';

  const isOrderPage = document.body.dataset.page === 'order';
  const ctaBtn = isOrderPage
    ? `<button class="btn-primary" onclick="closeQuiz(); openOrder('${pkg}','${price}')">${L==='el'?'Παραγγείλτε το':'Order This Package'}</button>`
    : `<a href="order.html?pkg=${pkg}" class="btn-primary">${L==='el'?'Δείτε το Πακέτο':'See This Package'}</a>`;

  document.getElementById('quizContent').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-ring">
        <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="#c9a96e" stroke-width="1.5"/>
        <circle cx="40" cy="40" r="26" fill="none" stroke="#c9a96e" stroke-width="0.7" opacity="0.4"/>
        <text x="40" y="45" text-anchor="middle" font-family="Cinzel,serif" font-size="11" fill="#c9a96e">✓</text></svg>
      </div>
      <p class="quiz-result-label">${L==='el'?'Η καλύτερη επιλογή για εσάς:':'Best match for you:'}</p>
      <h2 class="quiz-result-pkg">${pkgLabel}</h2>
      <div class="quiz-result-price">${price==='Variable'?(L==='el'?'Τιμή κατόπιν επικοινωνίας':'Price on request'):price}</div>
      ${maintHint}
      ${extrasHtml}
      <div class="quiz-result-cta">
        ${ctaBtn}
        <button class="btn-ghost" onclick="openQuiz()">${L==='el'?'Ξεκινήστε πάλι':'Start Over'}</button>
      </div>
    </div>
  `;
  document.getElementById('quizBackBtn').style.display = 'none';
}
