/*
  EmailJS Configuration — https://www.emailjs.com (free · 200 emails/month)

  One-time setup:
    1. Create account at emailjs.com
    2. Email Services → Add Service → connect your Gmail
    3. Create TWO Email Templates (see instructions per template below)
    4. Account → General → copy your Public Key
    5. Replace the four YOUR_* placeholders below

  ── Template 1: Coupon email (sent TO the visitor who left their email) ──
    In EmailJS template editor:
      To Email : {{to_email}}
      Subject  : Your 15% discount — Uroboru Office
      Body     : Hi! Here is your discount code: {{coupon_code}}
                 Use it on your first order at urobor.us

  ── Template 2: Order notification (sent TO the admin) ──
    In EmailJS template editor:
      To Email : grigoriosdimopoulos@urobor.us   ← type this directly in the field
      Subject  : 🛒 New Order — {{package}} from {{name}}
      Body     :
        New order received on Uroboru Office!

        Package : {{package}}
        Price   : {{price}}

        Name    : {{name}}
        Email   : {{email}}
        Phone   : {{phone}}
        Business: {{company}}

        Description:
        {{description}}

        Notes:
        {{notes}}
*/

window.EMAILJS_PK         = 'YOUR_PUBLIC_KEY';
window.EMAILJS_SERVICE    = 'YOUR_SERVICE_ID';
window.EMAILJS_COUPON_TPL = 'YOUR_COUPON_TEMPLATE_ID';
window.EMAILJS_ORDER_TPL  = 'YOUR_ORDER_TEMPLATE_ID';

if (window.emailjs && window.EMAILJS_PK !== 'YOUR_PUBLIC_KEY') {
  emailjs.init({ publicKey: window.EMAILJS_PK });
}
