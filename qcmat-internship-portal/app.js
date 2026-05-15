const APPS_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbx3hwIk-WSltlGTjlZv3L9EZDIU7b23byD8SqETHvQNsmofYQU5YFnIt0Kgdo4OyKMo/exec';

const form = document.getElementById('registrationForm');
const submitBtn = document.getElementById('submitBtn');
const statusBox = document.getElementById('formStatus');
const purposeField = document.getElementById('purpose');
const wordCounter = document.getElementById('wordCounter');
const requiredFieldNames = ['name', 'email', 'mobile', 'college', 'degree', 'yearOfStudy', 'purpose', 'transactionId', 'document'];

function setThemeToggle() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  const icon = () => theme === 'dark'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  toggle.innerHTML = icon();
  toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  toggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    toggle.innerHTML = icon();
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  });
}

function wordsOf(text) {
  return text.trim().split(/\s+/).filter(Boolean);
}

function updateWordCounter() {
  const count = wordsOf(purposeField.value).length;
  wordCounter.textContent = `${count} / 100 words`;
  return count;
}

function showError(fieldName, message) {
  const box = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (box) box.textContent = message;
}

function clearError(fieldName) {
  const box = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (box) box.textContent = '';
}

function validateField(name) {
  const field = form.elements[name];
  if (!field) return true;

  if (name === 'document') {
    const file = field.files[0];
    if (!file) {
      showError(name, 'Please upload a document.');
      return false;
    }
    const allowed = ['application/pdf', 'image/png', 'image/jpeg'];
    if (!allowed.includes(file.type)) {
      showError(name, 'Allowed file formats are PDF, PNG, JPG, and JPEG.');
      return false;
    }
    clearError(name);
    return true;
  }

  if (name === 'mobile') {
    const ok = /^[0-9]{10,15}$/.test(field.value.trim());
    if (!ok) {
      showError(name, 'Please enter a valid mobile number with 10 to 15 digits.');
      return false;
    }
    clearError(name);
    return true;
  }

  if (name === 'purpose') {
    const count = updateWordCounter();
    if (!field.value.trim()) {
      showError(name, 'Please enter your purpose of attending.');
      return false;
    }
    if (count > 100) {
      showError(name, 'Purpose of attending must be within 100 words.');
      return false;
    }
    clearError(name);
    return true;
  }

  if (name === 'email') {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
    if (!ok) {
      showError(name, 'Please enter a valid email address.');
      return false;
    }
    clearError(name);
    return true;
  }

  if (!field.value || !String(field.value).trim()) {
    showError(name, 'This field is required.');
    return false;
  }

  clearError(name);
  return true;
}

function validateDeclaration() {
  const checked = document.getElementById('declarationAccepted').checked;
  if (!checked) {
    showError('declarationAccepted', 'Please accept the declaration.');
    return false;
  }
  clearError('declarationAccepted');
  return true;
}

function validateCaptcha() {
  const response = window.grecaptcha ? grecaptcha.getResponse() : '';
  if (!response) {
    showError('captcha', 'Please complete the CAPTCHA verification.');
    return false;
  }
  clearError('captcha');
  return true;
}

function allValidForEnable() {
  const baseFieldsValid = requiredFieldNames.every((name) => validateField(name));
  const declarationValid = validateDeclaration();
  const captchaReady = window.grecaptcha ? !!grecaptcha.getResponse() : false;
  if (captchaReady) clearError('captcha');
  submitBtn.disabled = !(baseFieldsValid && declarationValid && captchaReady);
}

async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleSubmit(event) {
  event.preventDefault();
  statusBox.className = 'form-status';
  statusBox.textContent = '';

  const fieldsOk = requiredFieldNames.every((name) => validateField(name));
  const declarationOk = validateDeclaration();
  const captchaOk = validateCaptcha();
  if (!(fieldsOk && declarationOk && captchaOk)) {
    submitBtn.disabled = true;
    return;
  }

  if (APPS_SCRIPT_WEB_APP_URL.includes('PASTE_YOUR')) {
    statusBox.className = 'form-status error';
    statusBox.textContent = 'Please configure the Google Apps Script Web App URL in app.js before publishing.';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  try {
    const file = form.document.files[0];
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      mobile: form.mobile.value.trim(),
      college: form.college.value.trim(),
      degree: form.degree.value,
      yearOfStudy: form.yearOfStudy.value,
      purpose: form.purpose.value.trim(),
      transactionId: form.transactionId.value.trim(),
      declarationAccepted: 'Yes',
      captchaToken: grecaptcha.getResponse(),
      documentName: file.name,
      documentType: file.type,
      documentBase64: await fileToBase64(file)
    };

    const response = await fetch(APPS_SCRIPT_WEB_APP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!result.success) throw new Error(result.message || 'Submission failed.');

    form.reset();
    updateWordCounter();
    grecaptcha.reset();
    statusBox.className = 'form-status success';
    statusBox.textContent = 'Application Submitted! Dear Student, thank you for your interest in iQCMAT program. Your application is under review. Once approved, the admin will email your login credentials to the address you provided. Note: In case of problem if any, please contact Internship Coordinators at hodap@sgsits.ac.in';
  } catch (error) {
    statusBox.className = 'form-status error';
    statusBox.textContent = error.message || 'Something went wrong while submitting the application.';
  } finally {
    submitBtn.textContent = 'SUBMIT APPLICATION';
    allValidForEnable();
  }
}

requiredFieldNames.forEach((name) => {
  const field = form.elements[name];
  const eventName = name === 'document' ? 'change' : 'input';
  field.addEventListener(eventName, () => {
    validateField(name);
    allValidForEnable();
  });
  if (eventName !== 'change') {
    field.addEventListener('change', () => {
      validateField(name);
      allValidForEnable();
    });
  }
});

document.getElementById('declarationAccepted').addEventListener('change', () => {
  validateDeclaration();
  allValidForEnable();
});

window.onCaptchaSuccess = allValidForEnable;
window.onload = () => {
  setThemeToggle();
  updateWordCounter();
  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', allValidForEnable);
};
