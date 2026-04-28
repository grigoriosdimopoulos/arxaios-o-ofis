/* ── Translations ── */
const i18n = {
  en: {
    'nav.about':        'About',
    'nav.services':     'Services',
    'nav.request':      'Custom Request',
    'nav.contact':      'Contact',
    'hero.title':       'Uroboru Office',
    'hero.sub':         'Eternal Cycles. Modern Solutions.',
    'hero.cta':         'Explore Services',
    'hero.cta2':        'Custom Request',
    'about.tag':        'Who We Are',
    'about.title':      'The Cycle of Excellence',
    'about.card1.title':'Infinite Precision',
    'about.card1.text': 'Every project we take is a cycle — beginning, refined process, and perfect delivery. Nothing is left incomplete.',
    'about.card2.title':'Modern Thinking',
    'about.card2.text': 'Ancient wisdom meets cutting-edge methodology. We blend timeless principles with contemporary innovation.',
    'about.card3.title':'Complete Cycle',
    'about.card3.text': 'From conception to completion, we handle every phase. The ouroboros never breaks — neither does our commitment.',
    'services.tag':     'What We Do',
    'services.title':   'Our Services',
    'srv.1.title':      'Design & Branding',
    'srv.1.text':       'Visual identity that endures. Logos, brand guidelines, and creative systems that speak with authority.',
    'srv.2.title':      'Web Development',
    'srv.2.text':       'Fast, modern, and scalable websites and web applications built with precision and purpose.',
    'srv.3.title':      'Strategy & Consulting',
    'srv.3.text':       'Guiding businesses through transformation with data-driven strategy and human-centered insight.',
    'srv.4.title':      'Digital Marketing',
    'srv.4.text':       'Campaigns that resonate, convert, and last. SEO, social, content — all in one cycle.',
    'srv.5.title':      'Content Creation',
    'srv.5.text':       'Words, visuals, and stories that captivate. Crafted content for every platform and audience.',
    'srv.6.title':      'Custom Solutions',
    'srv.6.text':       'Tailored, one-of-a-kind projects. If you can imagine it, we build it — uniquely for you.',
    'stats.projects':   'Projects Delivered',
    'stats.satisfaction':'% Client Satisfaction',
    'stats.years':      'Years of Excellence',
    'stats.clients':    'Active Clients',
    'form.tag':         'Work With Us',
    'form.title':       'Custom Request',
    'form.sub':         'Describe your vision and we\'ll craft the perfect solution. All fields marked with * are required.',
    'form.fname':       'Full Name',
    'form.email':       'Email Address',
    'form.phone':       'Phone Number',
    'form.company':     'Company / Organization',
    'form.service':     'Type of Service',
    'form.service.placeholder': '— Select a service —',
    'form.budget':      'Budget Range',
    'form.budget.placeholder': '— Select budget range —',
    'form.desc':        'Project Description',
    'form.design':      'Design Preferences / Inspirations',
    'form.deadline':    'Desired Deadline',
    'form.agree':       'I agree that Uroboru Office may contact me regarding my request.',
    'form.submit':      'Send Request',
    'form.success.title':'Request Sent!',
    'form.success.text':'Thank you for reaching out. We\'ll get back to you within 24 hours.',
    'budget.1':         'Under €1,000',
    'budget.2':         '€1,000 – €5,000',
    'budget.3':         '€5,000 – €15,000',
    'budget.4':         '€15,000+',
    'budget.5':         'Let\'s Discuss',
    'err.fname':        'Please enter your full name.',
    'err.email':        'Please enter a valid email address.',
    'err.service':      'Please select a service type.',
    'err.budget':       'Please select a budget range.',
    'err.desc':         'Please describe your project (minimum 20 characters).',
    'err.agree':        'You must agree to be contacted.',
    'contact.tag':      'Get In Touch',
    'contact.title':    'Contact Us',
    'contact.address':  'Address',
    'contact.email':    'Email',
    'contact.hours':    'Business Hours',
    'contact.hours.val':'Mon–Fri, 09:00–18:00',
    'footer.copy':      '© 2026 Uroboru Office. The cycle continues.',
  },
  el: {
    'nav.about':        'Σχετικά',
    'nav.services':     'Υπηρεσίες',
    'nav.request':      'Αίτηση',
    'nav.contact':      'Επικοινωνία',
    'hero.title':       'Uroboru Office',
    'hero.sub':         'Αιώνιοι Κύκλοι. Σύγχρονες Λύσεις.',
    'hero.cta':         'Οι Υπηρεσίες μας',
    'hero.cta2':        'Προσαρμοσμένη Αίτηση',
    'about.tag':        'Ποιοι Είμαστε',
    'about.title':      'Ο Κύκλος της Αριστείας',
    'about.card1.title':'Άπειρη Ακρίβεια',
    'about.card1.text': 'Κάθε έργο που αναλαμβάνουμε είναι ένας κύκλος — αρχή, εξελιγμένη διαδικασία και τέλεια παράδοση. Τίποτα δεν μένει ημιτελές.',
    'about.card2.title':'Σύγχρονη Σκέψη',
    'about.card2.text': 'Η αρχαία σοφία συναντά τη σύγχρονη μεθοδολογία. Συνδυάζουμε διαχρονικές αρχές με καινοτόμα στοιχεία.',
    'about.card3.title':'Πλήρης Κύκλος',
    'about.card3.text': 'Από τη σύλληψη ως την ολοκλήρωση, χειριζόμαστε κάθε φάση. Ο ουροβόρος δεν σπάει ποτέ — ούτε η δέσμευσή μας.',
    'services.tag':     'Τι Κάνουμε',
    'services.title':   'Οι Υπηρεσίες μας',
    'srv.1.title':      'Σχεδιασμός & Branding',
    'srv.1.text':       'Οπτική ταυτότητα που διαρκεί. Λογότυπα, οδηγίες επωνυμίας και δημιουργικά συστήματα που μιλούν με αυθεντία.',
    'srv.2.title':      'Ανάπτυξη Ιστοσελίδων',
    'srv.2.text':       'Γρήγορα, σύγχρονα και επεκτάσιμα websites και web apps με ακρίβεια και σκοπό.',
    'srv.3.title':      'Στρατηγική & Συμβουλευτική',
    'srv.3.text':       'Καθοδήγηση επιχειρήσεων μέσα από ψηφιακή μεταμόρφωση με δεδομένα και ανθρωποκεντρική προσέγγιση.',
    'srv.4.title':      'Ψηφιακό Marketing',
    'srv.4.text':       'Καμπάνιες που αγγίζουν, μετατρέπουν και διαρκούν. SEO, social, content — όλα σε έναν κύκλο.',
    'srv.5.title':      'Δημιουργία Περιεχομένου',
    'srv.5.text':       'Λέξεις, εικόνες και ιστορίες που συναρπάζουν. Περιεχόμενο για κάθε πλατφόρμα και κοινό.',
    'srv.6.title':      'Προσαρμοσμένες Λύσεις',
    'srv.6.text':       'Μοναδικά, εξατομικευμένα έργα. Αν μπορείτε να το φανταστείτε, εμείς το κατασκευάζουμε.',
    'stats.projects':   'Ολοκληρωμένα Έργα',
    'stats.satisfaction':'% Ικανοποίηση Πελατών',
    'stats.years':      'Χρόνια Αριστείας',
    'stats.clients':    'Ενεργοί Πελάτες',
    'form.tag':         'Συνεργαστείτε μαζί μας',
    'form.title':       'Προσαρμοσμένη Αίτηση',
    'form.sub':         'Περιγράψτε το όραμά σας και θα δημιουργήσουμε την τέλεια λύση. Τα πεδία με * είναι υποχρεωτικά.',
    'form.fname':       'Ονοματεπώνυμο',
    'form.email':       'Διεύθυνση Email',
    'form.phone':       'Αριθμός Τηλεφώνου',
    'form.company':     'Εταιρεία / Οργανισμός',
    'form.service':     'Τύπος Υπηρεσίας',
    'form.service.placeholder': '— Επιλέξτε υπηρεσία —',
    'form.budget':      'Εύρος Προϋπολογισμού',
    'form.budget.placeholder': '— Επιλέξτε εύρος —',
    'form.desc':        'Περιγραφή Έργου',
    'form.design':      'Σχεδιαστικές Προτιμήσεις / Έμπνευση',
    'form.deadline':    'Επιθυμητή Ημερομηνία Παράδοσης',
    'form.agree':       'Συναινώ στην επικοινωνία από το Uroboru Office σχετικά με την αίτησή μου.',
    'form.submit':      'Αποστολή Αίτησης',
    'form.success.title':'Η Αίτηση Εστάλη!',
    'form.success.text':'Σας ευχαριστούμε. Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.',
    'budget.1':         'Κάτω από €1.000',
    'budget.2':         '€1.000 – €5.000',
    'budget.3':         '€5.000 – €15.000',
    'budget.4':         '€15.000+',
    'budget.5':         'Να το συζητήσουμε',
    'err.fname':        'Παρακαλώ εισάγετε το ονοματεπώνυμό σας.',
    'err.email':        'Παρακαλώ εισάγετε έγκυρη διεύθυνση email.',
    'err.service':      'Παρακαλώ επιλέξτε τύπο υπηρεσίας.',
    'err.budget':       'Παρακαλώ επιλέξτε εύρος προϋπολογισμού.',
    'err.desc':         'Παρακαλώ περιγράψτε το έργο σας (τουλάχιστον 20 χαρακτήρες).',
    'err.agree':        'Πρέπει να συναινέσετε στην επικοινωνία.',
    'contact.tag':      'Επικοινωνήστε',
    'contact.title':    'Επικοινωνία',
    'contact.address':  'Διεύθυνση',
    'contact.email':    'Email',
    'contact.hours':    'Ώρες Λειτουργίας',
    'contact.hours.val':'Δευ–Παρ, 09:00–18:00',
    'footer.copy':      '© 2026 Uroboru Office. Ο κύκλος συνεχίζεται.',
  }
};

let currentLang = 'en';

function t(key) {
  return i18n[currentLang][key] || i18n['en'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });
  document.getElementById('langLabel').textContent = currentLang === 'en' ? 'ΕΛ' : 'EN';
  document.documentElement.lang = currentLang;
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'el' : 'en';
  applyTranslations();
}

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile menu ── */
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const burger = document.getElementById('burger');
  links.classList.toggle('open');
  burger.classList.toggle('open');
}

/* Close mobile menu on link click */
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('burger').classList.remove('open');
  });
});

/* ── Scroll to section ── */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ── Smooth anchor clicks ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── Reveal on scroll ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Animated counters ── */
function animateCounter(el, target, duration = 1800) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target.querySelector('.stat-number');
      if (el) {
        const target = parseInt(el.dataset.target, 10);
        animateCounter(el, target);
      }
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stat-item').forEach(el => statsObserver.observe(el));

/* ── Form validation & submission ── */
const form = document.getElementById('requestForm');
const successBox = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

const validators = {
  fname: v => v.trim().length >= 2,
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  service: v => v !== '',
  budget: v => v !== '',
  description: v => v.trim().length >= 20,
  agree: () => document.getElementById('agree').checked,
};

function validateField(name) {
  const el = document.getElementById(name);
  const group = el ? el.closest('.form-group') : null;
  if (!group) return true;
  const val = name === 'agree' ? '' : el.value;
  const ok = validators[name] ? validators[name](val) : true;
  group.classList.toggle('has-error', !ok);
  return ok;
}

['fname','email','service','budget','description'].forEach(name => {
  const el = document.getElementById(name);
  if (el) {
    el.addEventListener('input', () => validateField(name));
    el.addEventListener('change', () => validateField(name));
  }
});
document.getElementById('agree').addEventListener('change', () => validateField('agree'));

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const fields = ['fname','email','service','budget','description','agree'];
  let valid = true;
  fields.forEach(f => { if (!validateField(f)) valid = false; });
  if (!valid) {
    const firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
    if (firstError) firstError.focus();
    return;
  }

  submitBtn.classList.add('loading');
  submitBtn.disabled = true;

  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());
  data.lang = currentLang;

  /* Build mailto as fallback (since no server backend) */
  const body = [
    `Full Name: ${data.fname}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || 'N/A'}`,
    `Company: ${data.company || 'N/A'}`,
    `Service: ${data.service}`,
    `Budget: ${data.budget}`,
    `Deadline: ${data.deadline || 'N/A'}`,
    `\nProject Description:\n${data.description}`,
    `\nDesign Preferences:\n${data.design || 'N/A'}`,
  ].join('\n');

  /* Simulate async (replace with real API call if backend exists) */
  await new Promise(r => setTimeout(r, 900));

  submitBtn.classList.remove('loading');
  submitBtn.disabled = false;

  /* Open mailto as delivery mechanism */
  const subject = encodeURIComponent(`Uroboru Office – Custom Request from ${data.fname}`);
  const bodyEncoded = encodeURIComponent(body);
  window.location.href = `mailto:grigoriosdimopulos@gmail.com?subject=${subject}&body=${bodyEncoded}`;

  /* Show success state */
  form.style.display = 'none';
  successBox.classList.add('visible');
});

/* ── Init ── */
applyTranslations();
