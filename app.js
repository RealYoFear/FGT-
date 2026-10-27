/* ===========================================================================
   Free Geek Toronto - B2B Corporate ITAD & Partner Platform
   JavaScript for interactive functionality
   =========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ---------- Mobile Navigation Toggle --------------------------------- */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link, .nav-cta');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    /* ---------- Partner Intake Form Handling ---------------------------- */
    const partnerForm = document.getElementById('partnerIntakeForm');
    const formSuccess = document.getElementById('formSuccess');
    const resetFormBtn = document.getElementById('resetFormBtn');
    
    if (partnerForm) {
        partnerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            const errorElements = document.querySelectorAll('.form-error');
            errorElements.forEach(el => {
                el.textContent = '';
            });
            
            // Get form data
            const formData = new FormData(partnerForm);
            let isValid = true;
            
            // Validate required fields
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
            
            requiredFields.forEach(field => {
                const value = formData.get(field.name);
                if (!value || value.toString().trim() === '') {
                    const errorEl = document.getElementById('error-' + field.name);
                    if (errorEl) {
                        errorEl.textContent = field.message;
                    }
                    isValid = false;
                }
            });
            
            // Validate email format
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
            
            // Validate phone format (basic)
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
            
            // Validate fleet size is positive number
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
        resetFormBtn.addEventListener('click', function() {
            if (partnerForm) {
                partnerForm.reset();
                partnerForm.style.display = 'block';
            }
            if (formSuccess) {
                formSuccess.style.display = 'none';
            }
            const errorElements = document.querySelectorAll('.form-error');
            errorElements.forEach(el => {
                el.textContent = '';
            });
            if (partnerForm) {
                partnerForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
    
    /* ---------- Individual Donation Form Handling ------------------------ */
    const individualDonationForm = document.getElementById('individualDonationForm');
    const donationFormSuccess = document.getElementById('donationFormSuccess');
    const resetDonationFormBtn = document.getElementById('resetDonationFormBtn');
    
    if (individualDonationForm) {
        individualDonationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const errorElements = document.querySelectorAll('.form-error');
            errorElements.forEach(el => {
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
            
            requiredFields.forEach(field => {
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
        resetDonationFormBtn.addEventListener('click', function() {
            if (individualDonationForm) {
                individualDonationForm.reset();
                individualDonationForm.style.display = 'block';
            }
            if (donationFormSuccess) {
                donationFormSuccess.style.display = 'none';
            }
            const errorElements = document.querySelectorAll('.form-error');
            errorElements.forEach(el => {
                el.textContent = '';
            });
            if (individualDonationForm) {
                individualDonationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
    
    /* ---------- Impact Calculator --------------------------------------- */
    const fleetSizeSlider = document.getElementById('fleetSizeSlider');
    const fleetSizeDisplay = document.getElementById('fleetSizeDisplay');
    const equipmentTypeCalc = document.getElementById('equipmentTypeCalc');
    
    if (fleetSizeSlider && fleetSizeDisplay) {
        function updateCalculator() {
            const fleetSize = parseInt(fleetSizeSlider.value);
            fleetSizeDisplay.textContent = fleetSize;
            
            const equipmentType = equipmentTypeCalc ? equipmentTypeCalc.value : 'laptop';
            
            // Calculate impact based on equipment type
            let eWastePerDevice = 15; // pounds per laptop
            let refurbRate = 0.7; // 70% refurbished
            let co2PerPound = 2.5; // CO2 equivalent per pound of e-waste
            let trainingHoursPerDevice = 2; // hours
            
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
        
        // Initialize calculator
        updateCalculator();
    }
    
    /* ---------- Resource Hub Filtering ----------------------------------- */
    const resourceFilters = document.querySelectorAll('.resource-filter');
    const resourceCards = document.querySelectorAll('.resource-card');
    
    if (resourceFilters.length > 0) {
        resourceFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Update active filter
                resourceFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                resourceCards.forEach(card => {
                    if (category === 'all') {
                        card.style.display = 'flex';
                    } else {
                        const cardCategory = card.getAttribute('data-category');
                        if (cardCategory === category) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    /* ---------- Smooth scroll for anchor links --------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.nav') ? document.querySelector('.nav').offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
});
