document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-link, .nav-cta');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
      });
    });
  }

  const partnerForm = document.getElementById('partnerIntakeForm');
  const formSuccess = document.getElementById('formSuccess');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (partnerForm) {
    partnerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const errorElements = document.querySelectorAll('.form-error');
      errorElements.forEach(function (el) {
        el.textContent = '';
      });

      const formData = new FormData(partnerForm);
      let isValid = true;

      const requiredFields = [
        { name: 'companyName', message: 'Company name is required' },
        { name: 'industry', message: 'Industry is required' },
        { name: 'companySize', message: 'Company size is required' },
        { name: 'contactName', message: 'Contact name is required' },
        { name: 'contactTitle', message: 'Title/position is required' },
        { name: 'email', message: 'Email address is required' },
        { name: 'phone', message: 'Phone number is required' },
        { name: 'equipmentType', message: 'Equipment type is required' },
        { name: 'fleetSize', message: 'Quantity is required' },
        { name: 'timeline', message: 'Timeline is required' }
      ];

      requiredFields.forEach(function (field) {
        const value = formData.get(field.name);
        if (!value || value.toString().trim() === '') {
          const errorEl = document.getElementById('error-' + field.name);
          if (errorEl) {
            errorEl.textContent = field.message;
          }
          isValid = false;
        }
      });

      const email = formData.get('email');
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.toString())) {
          const errorEl = document.getElementById('error-email');
          if (errorEl) {
            errorEl.textContent = 'Please enter a valid email address';
          }
          isValid = false;
        }
      }

      const phone = formData.get('phone');
      if (phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone.toString()) || phone.toString().replace(/\D/g, '').length < 10) {
          const errorEl = document.getElementById('error-phone');
          if (errorEl) {
            errorEl.textContent = 'Please enter a valid phone number';
          }
          isValid = false;
        }
      }

      const fleetSize = formData.get('fleetSize');
      if (fleetSize) {
        const size = parseInt(fleetSize.toString());
        if (isNaN(size) || size < 1) {
          const errorEl = document.getElementById('error-fleetSize');
          if (errorEl) {
            errorEl.textContent = 'Quantity must be at least 1';
          }
          isValid = false;
        }
      }

      if (isValid) {
        partnerForm.style.display = 'none';
        if (formSuccess) {
          formSuccess.style.display = 'block';
        }
        if (formSuccess) {
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', function () {
      if (partnerForm) {
        partnerForm.reset();
        partnerForm.style.display = 'block';
      }
      if (formSuccess) {
        formSuccess.style.display = 'none';
      }
      const errorElements = document.querySelectorAll('.form-error');
      errorElements.forEach(function (el) {
        el.textContent = '';
      });
      if (partnerForm) {
        partnerForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  const individualDonationForm = document.getElementById('individualDonationForm');
  const donationFormSuccess = document.getElementById('donationFormSuccess');
  const resetDonationFormBtn = document.getElementById('resetDonationFormBtn');

  if (individualDonationForm) {
    individualDonationForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const errorElements = document.querySelectorAll('.form-error');
      errorElements.forEach(function (el) {
        el.textContent = '';
      });

      const formData = new FormData(individualDonationForm);
      let isValid = true;

      const requiredFields = [
        { name: 'donorName', message: 'Name is required' },
        { name: 'donorEmail', message: 'Email is required' },
        { name: 'donorPhone', message: 'Phone number is required' },
        { name: 'donationType', message: 'Donation type is required' },
        { name: 'itemCondition', message: 'Condition is required' },
        { name: 'donationDescription', message: 'Description is required' }
      ];

      requiredFields.forEach(function (field) {
        const value = formData.get(field.name);
        if (!value || value.toString().trim() === '') {
          const errorEl = document.getElementById('error-' + field.name);
          if (errorEl) {
            errorEl.textContent = field.message;
          }
          isValid = false;
        }
      });

      const email = formData.get('donorEmail');
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.toString())) {
          const errorEl = document.getElementById('error-donorEmail');
          if (errorEl) {
            errorEl.textContent = 'Please enter a valid email address';
          }
          isValid = false;
        }
      }

      const phone = formData.get('donorPhone');
      if (phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone.toString()) || phone.toString().replace(/\D/g, '').length < 10) {
          const errorEl = document.getElementById('error-donorPhone');
          if (errorEl) {
            errorEl.textContent = 'Please enter a valid phone number';
          }
          isValid = false;
        }
      }

      if (isValid) {
        individualDonationForm.style.display = 'none';
        if (donationFormSuccess) {
          donationFormSuccess.style.display = 'block';
        }
        if (donationFormSuccess) {
          donationFormSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }

  if (resetDonationFormBtn) {
    resetDonationFormBtn.addEventListener('click', function () {
      if (individualDonationForm) {
        individualDonationForm.reset();
        individualDonationForm.style.display = 'block';
      }
      if (donationFormSuccess) {
        donationFormSuccess.style.display = 'none';
      }
      const errorElements = document.querySelectorAll('.form-error');
      errorElements.forEach(function (el) {
        el.textContent = '';
      });
      if (individualDonationForm) {
        individualDonationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  const fleetSizeSlider = document.getElementById('fleetSizeSlider');
  const fleetSizeDisplay = document.getElementById('fleetSizeDisplay');
  const equipmentTypeCalc = document.getElementById('equipmentTypeCalc');

  if (fleetSizeSlider && fleetSizeDisplay) {
    function updateCalculator() {
      const fleetSize = parseInt(fleetSizeSlider.value);
      fleetSizeDisplay.textContent = fleetSize;

      const equipmentType = equipmentTypeCalc ? equipmentTypeCalc.value : 'laptop';

      let eWastePerDevice = 15;
      let refurbRate = 0.7;
      let co2PerPound = 2.5;
      let trainingHoursPerDevice = 2;

      if (equipmentType === 'desktop') {
        eWastePerDevice = 35;
        refurbRate = 0.6;
      } else if (equipmentType === 'mixed') {
        eWastePerDevice = 18;
        refurbRate = 0.65;
      } else if (equipmentType === 'mixed-all') {
        eWastePerDevice = 22;
        refurbRate = 0.55;
      }

      const totalEwaste = Math.round(fleetSize * eWastePerDevice);
      const devicesRefurb = Math.round(fleetSize * refurbRate);
      const co2Saved = Math.round(totalEwaste * co2PerPound);
      const trainingHours = Math.round(fleetSize * trainingHoursPerDevice);

      const ewasteEl = document.getElementById('ewasteDiverted');
      const refurbEl = document.getElementById('devicesRefurb');
      const co2El = document.getElementById('co2Saved');
      const trainingEl = document.getElementById('trainingHours');

      if (ewasteEl) ewasteEl.textContent = totalEwaste.toLocaleString();
      if (refurbEl) refurbEl.textContent = devicesRefurb.toLocaleString();
      if (co2El) co2El.textContent = co2Saved.toLocaleString();
      if (trainingEl) trainingEl.textContent = trainingHours.toLocaleString();
    }

    fleetSizeSlider.addEventListener('input', updateCalculator);
    if (equipmentTypeCalc) {
      equipmentTypeCalc.addEventListener('change', updateCalculator);
    }

    updateCalculator();
  }
});
