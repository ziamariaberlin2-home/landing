// ── EMAILJS SETUP INSTRUCTIONS ──
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail or your domain SMTP) → copy the Service ID
// 3. Create two Email Templates:
//    - Reservation template: include fields {{name}}, {{phone}}, {{email}}, {{date}}, {{time}}, {{guests}}, {{notes}}
//    - Host enquiry template: include fields {{name}}, {{phone}}, {{email}}, {{city}}, {{event_date}}, {{event_type}}, {{guests}}, {{budget}}, {{message}}
//    Set "To Email" in each template to: bringteamtogether@ziamariaberlin.com
// 4. Go to Account → API Keys → copy your Public Key
// 5. Replace the three placeholder strings below with your real values

const EMAILJS_PUBLIC_KEY = 'fJjxFb00WcpGc9lDX';
const EMAILJS_RESERVATION_TEMPLATE = 'template_q4vwcwm';
const EMAILJS_HOST_TEMPLATE = 'template_aul6fwl';
const EMAILJS_SERVICE_ID = 'service_kbchpcs';


document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJSgit
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    const reservationForm = document.getElementById('reservationForm');
    const hostForm = document.getElementById('hostForm');

    if (reservationForm) {
        reservationForm.addEventListener('submit', handleReservationSubmit);
    }

    if (hostForm) {
        hostForm.addEventListener('submit', handleHostSubmit);
    }
});

async function handleReservationSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const statusMsg = document.getElementById('statusMessage');
    
    if (!validateForm(form)) return;

    setLoading(submitBtn, true);
    
    const formData = {
        name: form.fullName.value,
        phone: form.phone.value,
        email: form.email.value,
        date: form.date.value,
        time: form.time.value,
        guests: form.guests.value,
        notes: form.notes.value
    };

    try {
        if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            console.log('EmailJS not configured, simulating success...', formData);
            await new Promise(resolve => setTimeout(resolve, 1500));
        } else {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_RESERVATION_TEMPLATE, formData);
        }
        
        showStatus(statusMsg, 'Reservation sent successfully! We will confirm shortly.', 'success');
        form.reset();
    } catch (error) {
        console.error('EmailJS Error:', error);
        showStatus(statusMsg, 'Oops! Something went wrong. Please try again or call us.', 'error');
    } finally {
        setLoading(submitBtn, false);
    }
}

async function handleHostSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const statusMsg = document.getElementById('statusMessage');
    
    if (!validateForm(form)) return;

    setLoading(submitBtn, true);
    
    const formData = {
        name: form.yourName.value,
        phone: form.phone.value,
        email: form.email.value,
        city: form.city.value,
        event_date: form.eventDate.value,
        event_type: form.eventType.value,
        guests: form.guests.value,
        budget: form.budget.value,
        message: form.message.value
    };

    try {
        if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            console.log('EmailJS not configured, simulating success...', formData);
            await new Promise(resolve => setTimeout(resolve, 1500));
        } else {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_HOST_TEMPLATE, formData);
        }
        
        showStatus(statusMsg, 'Enquiry sent! Our events team will contact you soon.', 'success');
        form.reset();
    } catch (error) {
        console.error('EmailJS Error:', error);
        showStatus(statusMsg, 'Oops! Something went wrong. Please try again.', 'error');
    } finally {
        setLoading(submitBtn, false);
    }
}

function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        const errorDisplay = field.parentElement.querySelector('.error-message');
        if (!field.value.trim()) {
            isValid = false;
            if (errorDisplay) errorDisplay.style.display = 'block';
            field.style.borderColor = 'var(--red)';
        } else {
            if (errorDisplay) errorDisplay.style.display = 'none';
            field.style.borderColor = 'var(--border)';
        }
    });
    
    return isValid;
}

function setLoading(btn, isLoading) {
    if (isLoading) {
        btn.disabled = true;
        btn.dataset.originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    } else {
        btn.disabled = false;
        btn.innerHTML = btn.dataset.originalText;
    }
}

function showStatus(el, msg, type) {
    el.textContent = msg;
    el.style.display = 'block';
    el.style.padding = '15px';
    el.style.borderRadius = '8px';
    el.style.marginBottom = '20px';
    el.style.textAlign = 'center';
    
    if (type === 'success') {
        el.style.backgroundColor = '#d4edda';
        el.style.color = '#155724';
        el.style.border = '1px solid #c3e6cb';
    } else {
        el.style.backgroundColor = '#f8d7da';
        el.style.color = '#721c24';
        el.style.border = '1px solid #f5c6cb';
    }
    
    setTimeout(() => {
        el.style.display = 'none';
    }, 5000);
}
