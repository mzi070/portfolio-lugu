// ══════════════════════════════════════════════════════════════
// Auto-Update Portfolio Year
// ══════════════════════════════════════════════════════════════
const yearElement = document.getElementById('portfolioYear');
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
}

// ══════════════════════════════════════════════════════════════
// Page Setup & Observers
// ══════════════════════════════════════════════════════════════
const sections = Array.from(document.querySelectorAll('.page'));
const dots = Array.from(document.querySelectorAll('.dot-nav button'));
const topBtn = document.querySelector('.top-btn');

// Progress pill position: pill sits at 50% of each bar's own --bar-w,
// which is now set per-page in CSS. No dynamic --x override needed.
// (--x retained as fallback for any legacy reference)

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    }
  },
  { threshold: 0.18 }
);

for (const section of sections) {
  observer.observe(section);
}

const navObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const id = entry.target.id;
      dots.forEach((dot) => {
        dot.classList.toggle('is-active', dot.dataset.target === id);
      });
    }
  },
  { threshold: 0.55 }
);

for (const section of sections) {
  navObserver.observe(section);
}

for (const dot of dots) {
  dot.addEventListener('click', () => {
    const section = document.getElementById(dot.dataset.target);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  topBtn.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
});

window.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp'].includes(event.key)) return;
  event.preventDefault();
  const active = dots.findIndex((dot) => dot.classList.contains('is-active'));
  let next = active;

  if (event.key === 'ArrowDown' || event.key === 'PageDown') {
    next = Math.min(sections.length - 1, active + 1);
  }

  if (event.key === 'ArrowUp' || event.key === 'PageUp') {
    next = Math.max(0, active - 1);
  }

  sections[next].scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ══════════════════════════════════════════════════════════════
// Contact Form Handler (Web3Forms)
// ══════════════════════════════════════════════════════════════
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
      // Submit to Web3Forms API
      const formData = new FormData(contactForm);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Success!
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = '#2f6a57';
        contactForm.reset();
        
        // Reset button after 4 seconds
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 4000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      // Error handling
      submitBtn.textContent = '✗ Failed - Try Again';
      submitBtn.style.background = '#c44';
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 4000);
      
      console.error('Form submission error:', error);
    }
  });
}
