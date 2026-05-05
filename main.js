/* ── Translations ── */
const i18n = {
  en: {
    'nav.about':        'About',
    'testimonials.tag':   'What Clients Say',
    'testimonials.title': 'Client Testimonials',
    'exit.badge':         'Limited Offer',
    'exit.title':         'Before You Go…',
    'exit.body':          'Get 15% off your first project when you leave your email. No spam — just your discount.',
    'exit.placeholder':   'your@email.com',
    'exit.cta':           'Claim Discount',
    'exit.dismiss':       'No thanks, I\'ll pay full price',
    'exit.success':       'Great! We\'ll send your discount code within a few minutes.',
    'promo.default':      '',
    'announce.default':   '',
    'nav.services':     'Services',
    'nav.pricing':      'Pricing',
    'nav.request':      'Custom Request',
    'nav.contact':      'Contact',
    'nav.legal':        'Legal',
    'hero.eyebrow':     'AI-Powered Web Creation Studio',
    'hero.title':       'Uroboru Office',
    'hero.sub':         'We build websites with AI — faster, sharper, at a fraction of the cost.',
    'hero.cta':         'See Packages & Prices',
    'hero.cta2':        'Custom Request',
    'about.tag':        'How We Work',
    'about.title':      'AI at the Core of Every Build',
    'about.body':       'We use state-of-the-art AI tools across every stage of production — from visual design and UX layout to copywriting, SEO and code generation. What used to take weeks now takes days. What used to cost thousands now costs hundreds.',
    'about.cta':        'View Packages →',
    'about.card1.title':'AI Design & Layout',
    'about.card1.text': 'We use advanced AI to generate and iterate on visual designs in real time — producing pixel-perfect, brand-aligned results without the weeks of back-and-forth.',
    'about.card2.title':'AI Copywriting & SEO',
    'about.card2.text': 'Every word on your site is crafted and optimised by AI trained on conversion and search ranking. Your content works harder from day one.',
    'about.card3.title':'Speed Without Compromise',
    'about.card3.text': 'Our AI-augmented workflow compresses timelines dramatically. Simple sites ship in 48 hours. E-shops in under a week. No agency markup.',
    'services.tag':     'What We Build',
    'services.title':   'Our Services',
    'srv.1.title':      'AI Landing Pages & Business Sites',
    'srv.1.text':       'From single-page landing sites to full 10-page business websites. AI-designed, AI-written, hand-reviewed. Starting from €99.',
    'srv.2.title':      'E-commerce & Online Shops',
    'srv.2.text':       'Full online stores with AI-generated product descriptions, payment integration, inventory management and mobile-first design. Starting from €499.',
    'srv.3.title':      'AI Content & SEO Writing',
    'srv.3.text':       'Product descriptions, blog posts, landing copy — all written by AI, optimised for search engines and refined for your audience.',
    'srv.4.title':      'Logo & Brand Identity',
    'srv.4.text':       'AI-assisted logo design, colour systems and brand guidelines. A professional visual identity, without the agency price tag.',
    'srv.5.title':      'Digital Marketing & Ad Copy',
    'srv.5.text':       'AI-generated Google & Meta ad campaigns, email sequences and social media content that converts. Built fast, tested faster.',
    'srv.6.title':      'Custom AI Solutions',
    'srv.6.text':       'Booking systems, CRM integrations, AI chatbots, custom automation. If you can describe it, we can build it. Variable pricing.',
    'stats.delivery':   'Fastest Delivery',
    'stats.saving':     'Cost Saving vs. Traditional Agency',
    'stats.projects':   'Sites Delivered',
    'stats.satisfaction':'Client Satisfaction',
    'tick.1': 'AI Design', 'tick.2': 'E-commerce', 'tick.3': '48h Delivery',
    'tick.4': 'SEO Optimized', 'tick.5': 'AI Copywriting', 'tick.6': 'Mobile First',
    'tick.7': 'Custom Solutions', 'tick.8': 'Greek & English',
    'order.eyebrow':    'Transparent, Fixed Pricing',
    'order.title':      'Packages & Pricing',
    'order.sub':        'Every package is delivered using AI-powered tools. No hidden fees, no retainers. Pay once, own it forever.',
    'order.form.tag':   'Place Your Order',
    'order.form.notes': 'Additional Notes / Requirements',
    'order.form.submit':'Send Order',
    'order.success.text':'We\'ll confirm your order within 24 hours with a project brief and next steps.',
    'pkg.popular':      'Most Popular',
    'pkg.order':        'Order Now',
    'pkg.sites.tag':    'Simple Websites',
    'pkg.sites.title':  'Business & Landing Sites',
    'pkg.sites.sub':    'AI-designed, AI-written, mobile-first websites. Ideal for professionals, small businesses and anyone who needs a great online presence quickly.',
    'pkg.s1.label':     'Starter', 'pkg.s1.tagline': 'One perfect page. Ready in 48 hours.',
    'pkg.s1.f1':'1-page responsive landing site','pkg.s1.f2':'AI-written content','pkg.s1.f3':'Contact form with email notification',
    'pkg.s1.f4':'Mobile & tablet optimised','pkg.s1.f5':'Basic on-page SEO','pkg.s1.f6':'Google Analytics setup','pkg.s1.f7':'48-hour delivery',
    'pkg.s1.n1':'Blog / CMS','pkg.s1.n2':'Multiple pages',
    'pkg.s2.label':     'Business', 'pkg.s2.tagline': 'A complete business presence. Delivered in 3–5 days.',
    'pkg.s2.f1':'Up to 5 pages','pkg.s2.f2':'Full AI content strategy & copywriting','pkg.s2.f3':'Contact form + email integration',
    'pkg.s2.f4':'Mobile & tablet optimised','pkg.s2.f5':'Full on-page SEO optimisation','pkg.s2.f6':'Google Analytics + Search Console',
    'pkg.s2.f7':'Google Maps integration','pkg.s2.f8':'Social media links','pkg.s2.f9':'3–5 day delivery',
    'pkg.s3.label':     'Professional', 'pkg.s3.tagline': 'Full authority site with blog. Ready in 5–7 days.',
    'pkg.s3.f1':'Up to 10 pages','pkg.s3.f2':'Full AI content strategy & copywriting','pkg.s3.f3':'Blog / news section with CMS',
    'pkg.s3.f4':'Advanced SEO + schema markup','pkg.s3.f5':'Multiple contact options','pkg.s3.f6':'Analytics + heatmap setup',
    'pkg.s3.f7':'Social media integration','pkg.s3.f8':'Privacy policy page','pkg.s3.f9':'5–7 day delivery',
    'pkg.shop.tag':     'Online Shops',
    'pkg.shop.title':   'E-commerce Solutions',
    'pkg.shop.sub':     'AI-generated product content, payment gateways and full inventory management. Your shop open 24/7, built in days.',
    'pkg.e1.label':     'Mini Shop', 'pkg.e1.tagline': 'Small catalogue, big impact. Ready in 5–7 days.',
    'pkg.e1.f1':'Up to 20 products','pkg.e1.f2':'AI-written product descriptions','pkg.e1.f3':'Stripe or PayPal integration',
    'pkg.e1.f4':'Mobile-first responsive design','pkg.e1.f5':'Basic inventory management','pkg.e1.f6':'Order confirmation emails',
    'pkg.e1.f7':'Basic SEO setup','pkg.e1.n1':'Customer accounts','pkg.e1.n2':'Coupon / discount system',
    'pkg.e2.label':     'Standard Shop', 'pkg.e2.tagline': 'Full-featured shop with accounts. Ready in 7–10 days.',
    'pkg.e2.f1':'Up to 100 products','pkg.e2.f2':'AI product descriptions + SEO optimisation','pkg.e2.f3':'Multiple payment gateways',
    'pkg.e2.f4':'Customer accounts & order history','pkg.e2.f5':'Inventory & stock management','pkg.e2.f6':'Coupon & discount system',
    'pkg.e2.f7':'Order management dashboard','pkg.e2.f8':'Automated email sequences','pkg.e2.f9':'7–10 day delivery',
    'pkg.e3.label':     'Premium Shop', 'pkg.e3.tagline': 'Unlimited scale, advanced features. Ready in 10–14 days.',
    'pkg.e3.f1':'Unlimited products','pkg.e3.f2':'Full AI content suite','pkg.e3.f3':'Advanced analytics dashboard',
    'pkg.e3.f4':'Multi-currency support','pkg.e3.f5':'Upsell & cross-sell automation','pkg.e3.f6':'Abandoned cart recovery',
    'pkg.e3.f7':'Advanced promotions engine','pkg.e3.f8':'3-month priority support','pkg.e3.f9':'10–14 day delivery',
    'pkg.custom.tag':   'Bespoke', 'pkg.custom.title': 'Custom AI Solutions',
    'pkg.custom.sub':   'For projects that don\'t fit a package — AI chatbots, booking systems, CRM integrations, web apps, automation workflows.',
    'pkg.custom.price': 'Custom',
    'pkg.custom.desc':  'Every custom project begins with a free discovery call. We scope the work, define deliverables and give you a fixed quote — no hourly surprises.',
    'pkg.custom.cta':   'Start a Conversation',
    'pkg.custom.f1.t':'AI Chatbots','pkg.custom.f1.d':'Trained on your products, FAQs or knowledge base.',
    'pkg.custom.f2.t':'Booking Systems','pkg.custom.f2.d':'Real-time availability, automated confirmations and payment collection.',
    'pkg.custom.f3.t':'CRM Integration','pkg.custom.f3.d':'Connect your site to HubSpot, Salesforce, Notion or any custom CRM.',
    'pkg.custom.f4.t':'Web Applications','pkg.custom.f4.d':'Member portals, dashboards, calculators — full web app development.',
    'form.tag':         'Work With Us',
    'form.title':       'Custom Request',
    'form.sub':         'Not sure which package fits? Describe your project and we\'ll recommend the right solution.',
    'form.fname':       'Full Name',
    'form.email':       'Email Address',
    'form.phone':       'Phone Number',
    'form.company':     'Company / Business Name',
    'form.service':     'Type of Project',
    'form.service.placeholder': '— Select project type —',
    'form.budget':      'Budget Range',
    'form.budget.placeholder': '— Select budget range —',
    'form.desc':        'Project Description',
    'form.design':      'Design Preferences / Inspiration',
    'form.deadline':    'Desired Deadline',
    'form.agree':       'I agree that Uroboru Office may contact me and I have read the ',
    'form.agree.legal': 'Privacy Policy',
    'form.agree2':      '.',
    'form.submit':      'Send Request',
    'form.success.title':'Request Sent!',
    'form.success.text':'Thank you for reaching out. We\'ll get back to you within 24 hours.',
    'budget.1':         'Under €200',
    'budget.2':         '€200 – €500',
    'budget.3':         '€500 – €1,000',
    'budget.4':         '€1,000 – €3,000',
    'budget.5':         '€3,000+',
    'budget.6':         'Let\'s Discuss',
    'err.fname':        'Please enter your full name.',
    'err.email':        'Please enter a valid email address.',
    'err.service':      'Please select a project type.',
    'err.budget':       'Please select a budget range.',
    'err.desc':         'Please describe your project (minimum 20 characters).',
    'err.agree':        'You must agree to be contacted.',
    'contact.tag':      'Get In Touch',
    'contact.title':    'Contact Us',
    'contact.location': 'Location',
    'contact.email':    'Email',
    'contact.hours':    'Hours',
    'contact.hours.val':'Mon–Fri, 09:00–18:00 EET',
    'footer.tagline':   'AI-Powered Web Creation. The cycle continues.',
    'footer.copy':      '© 2026 Uroboru Office. All rights reserved.',
    'footer.privacy':   'Privacy Policy',
    'footer.terms':     'Terms',
    'hero.quiz':        'Find My Package',
    'quiz.back':        'Back',
    'quiz.float':       'Find My Package',
    'maint.tag':        'Keep It Running',
    'maint.title':      'Monthly Maintenance Plans',
    'maint.sub':        'After delivery, keep your site fast, secure and up-to-date with a monthly maintenance plan. Cancel anytime.',
    'maint.basic.label':'Basic',
    'maint.basic.tagline':'Set-and-forget security & uptime.',
    'maint.per':        '/month',
    'maint.basic.f1':   'Monthly CMS & plugin updates',
    'maint.basic.f2':   'Daily automated backups',
    'maint.basic.f3':   'Uptime & performance monitoring',
    'maint.basic.f4':   'Security scanning & malware removal',
    'maint.basic.f5':   'Email support (48h response)',
    'maint.basic.n1':   'Content / text updates',
    'maint.basic.n2':   'Monthly performance report',
    'maint.cta':        'Add to My Plan',
    'maint.pro.label':  'Pro',
    'maint.pro.tagline':'Full care + content updates every month.',
    'maint.pro.f1':     'Everything in Basic',
    'maint.pro.f2':     'Up to 2h content updates/month',
    'maint.pro.f3':     'Monthly performance & analytics report',
    'maint.pro.f4':     'Priority support (12h response)',
    'maint.pro.f5':     '1 new AI blog post / month',
    'maint.pro.f6':     'Minor design tweaks on request',
    'maint.pro.f7':     'Quarterly SEO health check',
    'maint.note':       'Maintenance plans can be added to any package at checkout. Cancel anytime with 30 days\' notice.',
    'addon.tag':        'Extras',
    'addon.title':      'Add-Ons',
    'addon.sub':        'Enhance any package with these one-time add-ons. Mix and match to build exactly what your business needs.',
    'addon.cat1':       'Content & Design',
    'addon.1.t':        'Extra Language',      'addon.1.d':'Add a full Greek or English version to any site.',
    'addon.2.t':        'Logo Design',         'addon.2.d':'AI-assisted logo + 2 colour variants, delivered in PNG, SVG & PDF.',
    'addon.per.page':   '/page',
    'addon.3.t':        'Extra Pages',         'addon.3.d':'Add pages beyond your package limit — same quality, same speed.',
    'addon.4.t':        'Blog Setup + 5 AI Posts','addon.4.d':'Full blog configuration with 5 SEO-optimised AI-written articles ready to publish.',
    'addon.cat2':       'Technical',
    'addon.5.t':        'Custom Contact Form', 'addon.5.d':'Multi-step form with conditional logic, file upload and CRM connection.',
    'addon.6.t':        'Speed Optimisation',  'addon.6.d':'Core Web Vitals audit + image compression, lazy loading and caching setup.',
    'addon.7.t':        'Cookie Consent (GDPR)','addon.7.d':'GDPR-compliant cookie banner with granular consent and preference storage.',
    'addon.8.t':        'Live Chat Widget',    'addon.8.d':'Real-time chat integration (Tawk.to, Crisp or similar) fully configured.',
    'addon.cat3':       'Marketing',
    'addon.9.t':        'Advanced Analytics',  'addon.9.d':'GA4 + Search Console + conversion tracking fully configured and tested.',
    'addon.10.t':       'Local SEO Setup',     'addon.10.d':'Google Business Profile optimisation, local schema markup and citation building.',
    'addon.11.t':       'Google Ads Setup',    'addon.11.d':'AI-written ad copy, campaign structure, keyword research and conversion tracking.',
    'addon.12.t':       'Email Marketing Setup','addon.12.d':'Mailchimp / Brevo account setup, signup form, welcome sequence and template.',
    'addon.cat4':       'E-commerce',
    'addon.13.t':       'Booking System',      'addon.13.d':'Real-time availability calendar, automated confirmations and payment collection.',
    'addon.14.t':       'Product Import',      'addon.14.d':'Bulk import from CSV, spreadsheet or existing platform with AI descriptions.',
    'addon.15.t':       'Abandoned Cart Recovery','addon.15.d':'Automated email sequence to recover lost sales — typically increases revenue 5–15%.',
    'addon.16.t':       'AI Chatbot',          'addon.16.d':'Trained on your products and FAQs. Handles orders, queries and support 24/7.',
    'addon.note':       'Need an add-on not listed?',
    'addon.note.link':  'Send us a custom request',
  },
  el: {
    'nav.about':        'Σχετικά',
    'testimonials.tag':   'Τι Λένε οι Πελάτες',
    'testimonials.title': 'Μαρτυρίες Πελατών',
    'exit.badge':         'Περιορισμένη Προσφορά',
    'exit.title':         'Φεύγετε;',
    'exit.body':          'Αφήστε το email σας και πάρτε 15% έκπτωση στο πρώτο σας project. Χωρίς spam — μόνο η έκπτωσή σας.',
    'exit.placeholder':   'το@email.σας',
    'exit.cta':           'Πάρτε την Έκπτωση',
    'exit.dismiss':       'Όχι ευχαριστώ, θα πληρώσω κανονικά',
    'exit.success':       'Τέλεια! Θα σας στείλουμε τον κωδικό έκπτωσης σε λίγα λεπτά.',
    'promo.default':      '',
    'announce.default':   '',
    'nav.services':     'Υπηρεσίες',
    'nav.pricing':      'Τιμές',
    'nav.request':      'Αίτηση',
    'nav.contact':      'Επικοινωνία',
    'nav.legal':        'Νομικά',
    'hero.eyebrow':     'Δημιουργία Ιστοσελίδων με AI',
    'hero.title':       'Uroboru Office',
    'hero.sub':         'Φτιάχνουμε ιστοσελίδες με AI — γρηγορότερα, καλύτερα, σε κλάσμα του κόστους.',
    'hero.cta':         'Πακέτα & Τιμές',
    'hero.cta2':        'Προσαρμοσμένη Αίτηση',
    'about.tag':        'Πώς Δουλεύουμε',
    'about.title':      'AI στον Πυρήνα Κάθε Κατασκευής',
    'about.body':       'Χρησιμοποιούμε εργαλεία AI σε κάθε στάδιο παραγωγής — από οπτικό σχεδιασμό και UX έως copywriting, SEO και παραγωγή κώδικα. Αυτό που άλλοτε έπαιρνε εβδομάδες, τώρα γίνεται σε μέρες.',
    'about.cta':        'Δείτε Πακέτα →',
    'about.card1.title':'AI Σχεδιασμός & Layout',
    'about.card1.text': 'Χρησιμοποιούμε προηγμένο AI για να δημιουργούμε και να βελτιώνουμε οπτικά σχέδια σε πραγματικό χρόνο — pixel-perfect αποτελέσματα χωρίς αέναες αναθεωρήσεις.',
    'about.card2.title':'AI Copywriting & SEO',
    'about.card2.text': 'Κάθε λέξη στη σελίδα σας δημιουργείται και βελτιστοποιείται από AI εκπαιδευμένο στη μετατροπή και την κατάταξη στις μηχανές αναζήτησης.',
    'about.card3.title':'Ταχύτητα Χωρίς Συμβιβασμούς',
    'about.card3.text': 'Απλές σελίδες παραδίδονται σε 48 ώρες. Eshops σε κάτω από μία εβδομάδα. Χωρίς agency markup. Χωρίς καθυστερημένες αναθεωρήσεις.',
    'services.tag':     'Τι Φτιάχνουμε',
    'services.title':   'Οι Υπηρεσίες μας',
    'srv.1.title':      'AI Landing Pages & Business Sites',
    'srv.1.text':       'Από απλές landing pages έως 10-σέλιδα επαγγελματικά sites. AI-σχεδιασμένα, AI-γραμμένα, ελεγμένα από άνθρωπο. Από €99.',
    'srv.2.title':      'E-commerce & Online Shops',
    'srv.2.text':       'Ολοκληρωμένα eshops με AI-παραγόμενες περιγραφές, ενσωμάτωση πληρωμών και mobile-first σχεδιασμό. Από €499.',
    'srv.3.title':      'AI Content & SEO Writing',
    'srv.3.text':       'Περιγραφές προϊόντων, άρθρα, landing copy — γραμμένα από AI, βελτιστοποιημένα για μηχανές αναζήτησης.',
    'srv.4.title':      'Logo & Brand Identity',
    'srv.4.text':       'AI-βοηθούμενος σχεδιασμός λογότυπου, χρωματικά συστήματα και brand guidelines. Επαγγελματική εικόνα, χωρίς agency τιμές.',
    'srv.5.title':      'Ψηφιακό Marketing & Ad Copy',
    'srv.5.text':       'AI-παραγόμενες καμπάνιες Google & Meta, email sequences και περιεχόμενο social media που μετατρέπει.',
    'srv.6.title':      'Προσαρμοσμένες AI Λύσεις',
    'srv.6.text':       'Booking systems, CRM integrations, AI chatbots, custom automation. Αν μπορείτε να το περιγράψετε, εμείς μπορούμε να το φτιάξουμε.',
    'stats.delivery':   'Γρηγορότερη Παράδοση',
    'stats.saving':     'Εξοικονόμηση vs. Παραδοσιακό Agency',
    'stats.projects':   'Sites Που Παραδόθηκαν',
    'stats.satisfaction':'Ικανοποίηση Πελατών',
    'tick.1': 'AI Σχεδιασμός', 'tick.2': 'E-commerce', 'tick.3': 'Παράδοση 48ω',
    'tick.4': 'SEO Βελτιστοποίηση', 'tick.5': 'AI Copywriting', 'tick.6': 'Mobile First',
    'tick.7': 'Προσαρμοσμένες Λύσεις', 'tick.8': 'Ελληνικά & Αγγλικά',
    'order.eyebrow':    'Διαφανής, Σταθερή Τιμολόγηση',
    'order.title':      'Πακέτα & Τιμές',
    'order.sub':        'Κάθε πακέτο παραδίδεται με εργαλεία AI. Χωρίς κρυφές χρεώσεις. Πληρώνετε μία φορά, είναι δικό σας για πάντα.',
    'order.form.tag':   'Υποβολή Παραγγελίας',
    'order.form.notes': 'Επιπλέον Σημειώσεις / Απαιτήσεις',
    'order.form.submit':'Αποστολή Παραγγελίας',
    'order.success.text':'Θα επιβεβαιώσουμε την παραγγελία σας εντός 24 ωρών με το project brief και τα επόμενα βήματα.',
    'pkg.popular':      'Πιο Δημοφιλές',
    'pkg.order':        'Παραγγελία',
    'pkg.sites.tag':    'Απλές Ιστοσελίδες',
    'pkg.sites.title':  'Business & Landing Sites',
    'pkg.sites.sub':    'AI-σχεδιασμένες, AI-γραμμένες, mobile-first ιστοσελίδες. Ιδανικές για επαγγελματίες και μικρές επιχειρήσεις.',
    'pkg.s1.label':'Starter','pkg.s1.tagline':'Μία τέλεια σελίδα. Έτοιμη σε 48 ώρες.',
    'pkg.s1.f1':'1-page responsive landing site','pkg.s1.f2':'AI-γραμμένο περιεχόμενο','pkg.s1.f3':'Φόρμα επικοινωνίας',
    'pkg.s1.f4':'Mobile & tablet βελτιστοποίηση','pkg.s1.f5':'Βασικό on-page SEO','pkg.s1.f6':'Google Analytics setup','pkg.s1.f7':'Παράδοση σε 48 ώρες',
    'pkg.s1.n1':'Blog / CMS','pkg.s1.n2':'Πολλαπλές σελίδες',
    'pkg.s2.label':'Business','pkg.s2.tagline':'Πλήρης επαγγελματική παρουσία. Σε 3–5 μέρες.',
    'pkg.s2.f1':'Έως 5 σελίδες','pkg.s2.f2':'Πλήρης AI content strategy & copywriting','pkg.s2.f3':'Φόρμα + email integration',
    'pkg.s2.f4':'Mobile & tablet βελτιστοποίηση','pkg.s2.f5':'Πλήρης SEO βελτιστοποίηση','pkg.s2.f6':'Google Analytics + Search Console',
    'pkg.s2.f7':'Google Maps integration','pkg.s2.f8':'Social media links','pkg.s2.f9':'Παράδοση σε 3–5 μέρες',
    'pkg.s3.label':'Professional','pkg.s3.tagline':'Πλήρες site με blog. Σε 5–7 μέρες.',
    'pkg.s3.f1':'Έως 10 σελίδες','pkg.s3.f2':'Πλήρης AI content strategy & copywriting','pkg.s3.f3':'Blog / news με CMS',
    'pkg.s3.f4':'Advanced SEO + schema markup','pkg.s3.f5':'Πολλαπλές επιλογές επικοινωνίας','pkg.s3.f6':'Analytics + heatmap setup',
    'pkg.s3.f7':'Social media integration','pkg.s3.f8':'Σελίδα πολιτικής απορρήτου','pkg.s3.f9':'Παράδοση σε 5–7 μέρες',
    'pkg.shop.tag':     'Online Shops',
    'pkg.shop.title':   'Λύσεις E-commerce',
    'pkg.shop.sub':     'AI-παραγόμενο περιεχόμενο προϊόντων, payment gateways και πλήρης διαχείριση αποθέματος. Το eshop σας ανοιχτό 24/7.',
    'pkg.e1.label':'Mini Shop','pkg.e1.tagline':'Μικρός κατάλογος, μεγάλο αποτέλεσμα. Σε 5–7 μέρες.',
    'pkg.e1.f1':'Έως 20 προϊόντα','pkg.e1.f2':'AI-γραμμένες περιγραφές προϊόντων','pkg.e1.f3':'Stripe ή PayPal integration',
    'pkg.e1.f4':'Mobile-first responsive design','pkg.e1.f5':'Βασική διαχείριση αποθέματος','pkg.e1.f6':'Email επιβεβαίωσης παραγγελιών',
    'pkg.e1.f7':'Βασικό SEO setup','pkg.e1.n1':'Λογαριασμοί πελατών','pkg.e1.n2':'Σύστημα κουπονιών',
    'pkg.e2.label':'Standard Shop','pkg.e2.tagline':'Πλήρες shop με λογαριασμούς. Σε 7–10 μέρες.',
    'pkg.e2.f1':'Έως 100 προϊόντα','pkg.e2.f2':'AI περιγραφές + SEO βελτιστοποίηση','pkg.e2.f3':'Πολλαπλά payment gateways',
    'pkg.e2.f4':'Λογαριασμοί & ιστορικό παραγγελιών','pkg.e2.f5':'Διαχείριση αποθέματος','pkg.e2.f6':'Σύστημα κουπονιών',
    'pkg.e2.f7':'Dashboard διαχείρισης παραγγελιών','pkg.e2.f8':'Αυτοματοποιημένα email','pkg.e2.f9':'Παράδοση σε 7–10 μέρες',
    'pkg.e3.label':'Premium Shop','pkg.e3.tagline':'Απεριόριστη κλίμακα, προηγμένα χαρακτηριστικά. Σε 10–14 μέρες.',
    'pkg.e3.f1':'Απεριόριστα προϊόντα','pkg.e3.f2':'Πλήρης AI content suite','pkg.e3.f3':'Advanced analytics dashboard',
    'pkg.e3.f4':'Multi-currency support','pkg.e3.f5':'Upsell & cross-sell automation','pkg.e3.f6':'Ανάκτηση εγκαταλελειμμένου καλαθιού',
    'pkg.e3.f7':'Advanced promotions engine','pkg.e3.f8':'Priority support 3 μηνών','pkg.e3.f9':'Παράδοση σε 10–14 μέρες',
    'pkg.custom.tag':'Εξατομικευμένο','pkg.custom.title':'Προσαρμοσμένες AI Λύσεις',
    'pkg.custom.sub':'Για έργα που δεν ταιριάζουν σε πακέτο — AI chatbots, booking systems, CRM integrations, web apps.',
    'pkg.custom.price':'Custom',
    'pkg.custom.desc':'Κάθε custom έργο ξεκινά με δωρεάν discovery call. Καθορίζουμε το εύρος, τα παραδοτέα και σας δίνουμε σταθερή τιμή.',
    'pkg.custom.cta':'Ξεκινήστε μια Συζήτηση',
    'pkg.custom.f1.t':'AI Chatbots','pkg.custom.f1.d':'Εκπαιδευμένα στα προϊόντα, FAQs ή τη γνωσιακή βάση σας.',
    'pkg.custom.f2.t':'Booking Systems','pkg.custom.f2.d':'Real-time διαθεσιμότητα, αυτόματες επιβεβαιώσεις και είσπραξη πληρωμών.',
    'pkg.custom.f3.t':'CRM Integration','pkg.custom.f3.d':'Σύνδεση με HubSpot, Salesforce, Notion ή οποιοδήποτε custom CRM.',
    'pkg.custom.f4.t':'Web Applications','pkg.custom.f4.d':'Member portals, dashboards, calculators — πλήρης ανάπτυξη web app.',
    'form.tag':         'Συνεργαστείτε μαζί μας',
    'form.title':       'Προσαρμοσμένη Αίτηση',
    'form.sub':         'Δεν είστε σίγουροι ποιο πακέτο σας ταιριάζει; Περιγράψτε το έργο σας και θα σας προτείνουμε τη σωστή λύση.',
    'form.fname':       'Ονοματεπώνυμο',
    'form.email':       'Διεύθυνση Email',
    'form.phone':       'Αριθμός Τηλεφώνου',
    'form.company':     'Εταιρεία / Επωνυμία',
    'form.service':     'Τύπος Έργου',
    'form.service.placeholder': '— Επιλέξτε τύπο έργου —',
    'form.budget':      'Εύρος Προϋπολογισμού',
    'form.budget.placeholder': '— Επιλέξτε εύρος —',
    'form.desc':        'Περιγραφή Έργου',
    'form.design':      'Σχεδιαστικές Προτιμήσεις / Έμπνευση',
    'form.deadline':    'Επιθυμητή Ημερομηνία Παράδοσης',
    'form.agree':       'Συναινώ στην επικοινωνία από το Uroboru Office και έχω διαβάσει την ',
    'form.agree.legal': 'Πολιτική Απορρήτου',
    'form.agree2':      '.',
    'form.submit':      'Αποστολή Αίτησης',
    'form.success.title':'Η Αίτηση Εστάλη!',
    'form.success.text':'Σας ευχαριστούμε. Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.',
    'budget.1':         'Κάτω από €200',
    'budget.2':         '€200 – €500',
    'budget.3':         '€500 – €1.000',
    'budget.4':         '€1.000 – €3.000',
    'budget.5':         '€3.000+',
    'budget.6':         'Να το συζητήσουμε',
    'err.fname':        'Παρακαλώ εισάγετε το ονοματεπώνυμό σας.',
    'err.email':        'Παρακαλώ εισάγετε έγκυρη διεύθυνση email.',
    'err.service':      'Παρακαλώ επιλέξτε τύπο έργου.',
    'err.budget':       'Παρακαλώ επιλέξτε εύρος προϋπολογισμού.',
    'err.desc':         'Παρακαλώ περιγράψτε το έργο σας (τουλάχιστον 20 χαρακτήρες).',
    'err.agree':        'Πρέπει να συναινέσετε στην επικοινωνία.',
    'contact.tag':      'Επικοινωνήστε',
    'contact.title':    'Επικοινωνία',
    'contact.location': 'Τοποθεσία',
    'contact.email':    'Email',
    'contact.hours':    'Ώρες',
    'contact.hours.val':'Δευ–Παρ, 09:00–18:00 EET',
    'footer.tagline':   'Δημιουργία Ιστοσελίδων με AI. Ο κύκλος συνεχίζεται.',
    'footer.copy':      '© 2026 Uroboru Office. Με επιφύλαξη παντός δικαιώματος.',
    'footer.privacy':   'Πολιτική Απορρήτου',
    'footer.terms':     'Όροι',
    'hero.quiz':        'Βρείτε το Πακέτο σας',
    'quiz.back':        'Πίσω',
    'quiz.float':       'Βρείτε το Πακέτο σας',
    'maint.tag':        'Κρατήστε το Ενεργό',
    'maint.title':      'Μηνιαία Πλάνα Συντήρησης',
    'maint.sub':        'Μετά την παράδοση, κρατήστε τη σελίδα σας γρήγορη, ασφαλή και ενημερωμένη. Ακύρωση οποτεδήποτε.',
    'maint.basic.label':'Basic',
    'maint.basic.tagline':'Ασφάλεια & uptime χωρίς σκέψη.',
    'maint.per':        '/μήνα',
    'maint.basic.f1':   'Μηνιαίες ενημερώσεις CMS & plugins',
    'maint.basic.f2':   'Καθημερινά αυτόματα backups',
    'maint.basic.f3':   'Monitoring uptime & απόδοσης',
    'maint.basic.f4':   'Σάρωση ασφαλείας & αφαίρεση malware',
    'maint.basic.f5':   'Υποστήριξη email (απάντηση 48ω)',
    'maint.basic.n1':   'Ενημερώσεις κειμένου / περιεχομένου',
    'maint.basic.n2':   'Μηνιαία αναφορά απόδοσης',
    'maint.cta':        'Προσθήκη στο Πλάνο μου',
    'maint.pro.label':  'Pro',
    'maint.pro.tagline':'Πλήρης φροντίδα + μηνιαίες ενημερώσεις.',
    'maint.pro.f1':     'Όλα τα Basic',
    'maint.pro.f2':     'Έως 2ω ενημερώσεις περιεχομένου/μήνα',
    'maint.pro.f3':     'Μηνιαία αναφορά απόδοσης & analytics',
    'maint.pro.f4':     'Προτεραιότητα υποστήριξης (12ω)',
    'maint.pro.f5':     '1 νέο AI άρθρο blog / μήνα',
    'maint.pro.f6':     'Μικρές σχεδιαστικές αλλαγές κατόπιν αιτήματος',
    'maint.pro.f7':     'Τριμηνιαίος έλεγχος SEO',
    'maint.note':       'Τα πλάνα συντήρησης μπορούν να προστεθούν σε οποιοδήποτε πακέτο. Ακύρωση με 30 ημέρες προειδοποίηση.',
    'addon.tag':        'Extras',
    'addon.title':      'Add-Ons',
    'addon.sub':        'Αναβαθμίστε οποιοδήποτε πακέτο με αυτά τα εφάπαξ add-ons. Επιλέξτε ό,τι χρειάζεστε.',
    'addon.cat1':       'Περιεχόμενο & Σχεδιασμός',
    'addon.1.t':        'Επιπλέον Γλώσσα',     'addon.1.d':'Προσθέστε πλήρη ελληνική ή αγγλική έκδοση σε οποιοδήποτε site.',
    'addon.2.t':        'Σχεδιασμός Logo',      'addon.2.d':'AI-βοηθούμενο logo + 2 χρωματικές παραλλαγές σε PNG, SVG & PDF.',
    'addon.per.page':   '/σελίδα',
    'addon.3.t':        'Επιπλέον Σελίδες',    'addon.3.d':'Προσθέστε σελίδες πέρα από το όριο του πακέτου — ίδια ποιότητα, ίδια ταχύτητα.',
    'addon.4.t':        'Setup Blog + 5 AI Άρθρα','addon.4.d':'Πλήρης ρύθμιση blog με 5 SEO-βελτιστοποιημένα AI άρθρα έτοιμα για δημοσίευση.',
    'addon.cat2':       'Τεχνικό',
    'addon.5.t':        'Προσαρμοσμένη Φόρμα', 'addon.5.d':'Πολυβηματική φόρμα με conditional logic, upload αρχείου και σύνδεση CRM.',
    'addon.6.t':        'Βελτιστοποίηση Ταχύτητας','addon.6.d':'Έλεγχος Core Web Vitals + συμπίεση εικόνων, lazy loading και caching.',
    'addon.7.t':        'Cookie Consent (GDPR)','addon.7.d':'GDPR-συμβατό banner cookies με λεπτομερή συγκατάθεση και αποθήκευση προτιμήσεων.',
    'addon.8.t':        'Live Chat Widget',     'addon.8.d':'Ενσωμάτωση real-time chat (Tawk.to, Crisp ή παρόμοιο) πλήρως ρυθμισμένο.',
    'addon.cat3':       'Marketing',
    'addon.9.t':        'Προηγμένα Analytics',  'addon.9.d':'GA4 + Search Console + παρακολούθηση μετατροπών πλήρως ρυθμισμένα.',
    'addon.10.t':       'Local SEO Setup',      'addon.10.d':'Βελτιστοποίηση Google Business Profile, local schema markup και citations.',
    'addon.11.t':       'Setup Google Ads',     'addon.11.d':'AI-γραμμένα ad copy, δομή καμπάνιας, keyword research και conversion tracking.',
    'addon.12.t':       'Setup Email Marketing','addon.12.d':'Setup Mailchimp / Brevo, φόρμα εγγραφής, welcome sequence και template.',
    'addon.cat4':       'E-commerce',
    'addon.13.t':       'Σύστημα Κρατήσεων',   'addon.13.d':'Ημερολόγιο διαθεσιμότητας, αυτόματες επιβεβαιώσεις και είσπραξη πληρωμών.',
    'addon.14.t':       'Εισαγωγή Προϊόντων',  'addon.14.d':'Μαζική εισαγωγή από CSV, spreadsheet ή υπάρχουσα πλατφόρμα με AI περιγραφές.',
    'addon.15.t':       'Ανάκτηση Εγκατ. Καλαθιού','addon.15.d':'Αυτοματοποιημένο email sequence για ανάκτηση χαμένων πωλήσεων (αύξηση εσόδων 5–15%).',
    'addon.16.t':       'AI Chatbot',           'addon.16.d':'Εκπαιδευμένο στα προϊόντα και FAQs σας. Χειρίζεται παραγγελίες, ερωτήσεις και υποστήριξη 24/7.',
    'addon.note':       'Χρειάζεστε κάτι που δεν βλέπετε;',
    'addon.note.link':  'Στείλτε μας αίτημα',
  }
};

let currentLang = localStorage.getItem('lang') || 'el';

window.t = function t(key) {
  return i18n[currentLang][key] || i18n['en'][key] || key;
};

window.applyTranslations = function applyTranslations() {
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
  localStorage.setItem('lang', currentLang);
  window.applyTranslations();
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

  await saveContactMessage(data);

  submitBtn.classList.remove('loading');
  submitBtn.disabled = false;
  form.style.display = 'none';
  successBox.classList.add('visible');
});

/* ── Firebase: site config loader ── */
const DEFAULT_TESTIMONIALS = [
  {
    name: 'Δημήτρης Παπαδόπουλος', location: 'Αθήνα', rating: 5,
    text: {
      en: 'Uroboru Office transformed our brand identity. The process was seamless, the result timeless. Delivered ahead of schedule and beyond our expectations.',
      el: 'Το Uroboru Office μεταμόρφωσε την επωνυμία μας. Η διαδικασία ήταν απρόσκοπτη, το αποτέλεσμα διαχρονικό. Παρέδωσαν πριν την προθεσμία.'
    },
    package: 'Design & Branding'
  },
  {
    name: 'Elena Stavros', location: 'Θεσσαλονίκη', rating: 5,
    text: {
      en: 'Outstanding web development. Our new site loads instantly and converts visitors at twice our previous rate. Worth every euro — and then some.',
      el: 'Εξαιρετική ανάπτυξη ιστοσελίδας. Το site μας φορτώνει άμεσα και μετατρέπει διπλάσιους επισκέπτες. Άξιζε κάθε ευρώ.'
    },
    package: 'Web Development'
  },
  {
    name: 'Νίκος Αλεξίου', location: 'Πάτρα', rating: 5,
    text: {
      en: 'The digital marketing strategy generated 3× our normal leads in the first month. Professional, creative, and genuinely results-driven.',
      el: 'Η στρατηγική ψηφιακού marketing έφερε τριπλάσιους leads στον πρώτο μήνα. Επαγγελματικοί, δημιουργικοί και αποτελεσματικοί.'
    },
    package: 'Digital Marketing'
  }
];

function starsHTML(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function renderTestimonials(items) {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  grid.innerHTML = items.map(t => {
    const text = (typeof t.text === 'object') ? (t.text[currentLang] || t.text.en || '') : (t.text || '');
    const initial = t.name ? t.name[0].toUpperCase() : '?';
    return `
      <div class="testimonial-card reveal">
        <div class="testimonial-stars">${starsHTML(t.rating || 5)}</div>
        <p class="testimonial-text">"${text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${initial}</div>
          <div>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-location">${t.location || ''}</div>
          </div>
        </div>
        ${t.package ? `<div class="testimonial-package">${t.package}</div>` : ''}
      </div>`;
  }).join('');
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

async function loadSiteConfig() {
  if (!window.db) { renderTestimonials(DEFAULT_TESTIMONIALS); return; }
  try {
    const configSnap = await window.db.collection('site-config').doc('main').get();
    if (configSnap.exists) {
      const cfg = configSnap.data();
      applyPromoBanner(cfg.promoBanner);
      applyAnnouncement(cfg.announcement);
      applyStats(cfg.stats);
      if (cfg.contactEmail) {
        document.querySelectorAll('a[href^="mailto:grigoriosdimopulos"]').forEach(a => {
          a.href = `mailto:${cfg.contactEmail}`;
          if (a.textContent.includes('grigoriosdimopulos')) a.textContent = cfg.contactEmail;
        });
      }
    }
    const tSnap = await window.db.collection('testimonials').orderBy('order').get();
    const active = [];
    tSnap.forEach(doc => { const d = doc.data(); if (d.active !== false) active.push(d); });
    renderTestimonials(active.length ? active : DEFAULT_TESTIMONIALS);
  } catch {
    renderTestimonials(DEFAULT_TESTIMONIALS);
  }
}

function updateNavbarOffset() {
  let total = 0;
  const pb = document.getElementById('promoBanner');
  if (pb && pb.classList.contains('visible')) total += pb.offsetHeight;
  const ab = document.getElementById('announcementBar');
  if (ab && ab.classList.contains('visible')) total += ab.offsetHeight;
  document.documentElement.style.setProperty('--bars-h', total + 'px');
  document.body.classList.toggle('has-bars', total > 0);
}

function applyPromoBanner(cfg) {
  const bar = document.getElementById('promoBanner');
  if (!bar || !cfg || !cfg.active) return;
  if (sessionStorage.getItem('promo_dismissed')) return;
  const text = cfg.text ? (cfg.text[currentLang] || cfg.text.en || '') : '';
  if (!text) return;
  bar.querySelector('.promo-text').innerHTML = text;
  if (cfg.bgColor) bar.style.background = cfg.bgColor;
  bar.classList.add('visible');
  updateNavbarOffset();
}

function applyAnnouncement(cfg) {
  const bar = document.getElementById('announcementBar');
  if (!bar || !cfg || !cfg.active) return;
  if (sessionStorage.getItem('announce_dismissed')) return;
  const text = cfg.text ? (cfg.text[currentLang] || cfg.text.en || '') : '';
  if (!text) return;
  bar.querySelector('.announce-text').textContent = text;
  bar.classList.add('visible');
  updateNavbarOffset();
}

function applyStats(stats) {
  if (!stats) return;
  const map = { stat0: stats.s0, stat1: stats.s1, stat2: stats.s2, stat3: stats.s3 };
  document.querySelectorAll('.stat-number').forEach((el, i) => {
    const val = stats['s' + i];
    if (val !== undefined) el.dataset.target = val;
  });
}

/* Promo & announcement dismiss handlers */
document.addEventListener('DOMContentLoaded', () => {
  const pb = document.getElementById('promoBanner');
  if (pb) {
    pb.querySelector('.promo-banner-close')?.addEventListener('click', () => {
      pb.classList.remove('visible');
      sessionStorage.setItem('promo_dismissed', '1');
      updateNavbarOffset();
    });
  }
  const ab = document.getElementById('announcementBar');
  if (ab) {
    ab.querySelector('.announcement-bar-close')?.addEventListener('click', () => {
      ab.classList.remove('visible');
      sessionStorage.setItem('announce_dismissed', '1');
      updateNavbarOffset();
    });
  }
});

/* ── Firebase: dual-write contact form ── */
async function saveContactMessage(data) {
  if (!window.db) return;
  try {
    await window.db.collection('messages').add({
      type: 'contact',
      name: data.fname || '',
      email: data.email || '',
      phone: data.phone || '',
      company: data.company || '',
      service: data.service || '',
      budget: data.budget || '',
      deadline: data.deadline || '',
      description: data.description || '',
      design: data.design || '',
      lang: data.lang || 'en',
      read: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (e) {
    console.warn('[Uroboru] Firestore write failed:', e.message);
  }
}

/* ── Init ── */
window.applyTranslations();
loadSiteConfig();
