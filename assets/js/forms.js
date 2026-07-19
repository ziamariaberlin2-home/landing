// ── EMAILJS SETUP  ──


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
        name: form.querySelector('#yourName').value,
        phone: form.querySelector('#phone').value,
        email: form.querySelector('#email').value,
        city: form.querySelector('#city').value,
        event_date: form.querySelector('#eventDate').value,
        event_type: form.querySelector('#eventType').value,
        guests: form.querySelector('#guests').value,
        budget: form.querySelector('#budget').value,
        message: form.querySelector('#message').value
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
