document.addEventListener('DOMContentLoaded', function () {
  // Typed.js effect for index.html
  if (document.getElementById('typed-text')) {
    const typed = new Typed('#typed-text', {
      strings: ['Developer.&nbsp;', '', 'Designer.&nbsp;', ''],
      typeSpeed: 20,
      backSpeed: 20,
      loop: true,
      smartBackspace: true,
    });
  }

  // === Digital Storage Unit Converter Logic ===
  if (document.getElementById('converter-form')) {
    const inputValue = document.getElementById('input-value');
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    const convertBtn = document.getElementById('convert-btn');
    const swapBtn = document.getElementById('swap-units');
    const resultEl = document.getElementById('result');

    // Conversion factors (all relative to bit)
    const unitToBit = {
      bit: 1,
      byte: 8,
      kb: 8 * 1024,
      mb: 8 * 1024 * 1024,
      gb: 8 * 1024 * 1024 * 1024
    };

    function convertUnits(value, from, to) {
      if (isNaN(value) || value === '' || value === null) return '';
      // Convert from 'from' unit to bits, then to 'to' unit
      const valueInBits = value * unitToBit[from];
      const result = valueInBits / unitToBit[to];
      return result;
    }

    function showResult() {
      const value = parseFloat(inputValue.value);
      const from = fromUnit.value;
      const to = toUnit.value;
      if (isNaN(value)) {
        resultEl.textContent = 'Please enter a valid number.';
        return;
      }
      if (from === to) {
        resultEl.textContent = `${value} ${from.charAt(0).toUpperCase() + from.slice(1)} = ${value} ${to.charAt(0).toUpperCase() + to.slice(1)}`;
        return;
      }
      const result = convertUnits(value, from, to);
      resultEl.textContent = `${value} ${from.charAt(0).toUpperCase() + from.slice(1)} = ${result} ${to.charAt(0).toUpperCase() + to.slice(1)}`;
    }

    convertBtn.addEventListener('click', showResult);
    inputValue.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        showResult();
      }
    });

    swapBtn.addEventListener('click', function () {
      const temp = fromUnit.value;
      fromUnit.value = toUnit.value;
      toUnit.value = temp;
      showResult();
    });
  }

  // === Theme Toggle Logic ===
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const body = document.body;
      body.classList.toggle('dark-theme');
      body.classList.toggle('light-theme');
      // Optionally, change the icon
      const icon = themeToggle.querySelector('i');
      if (body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
      // Switch logo if present
      const logoImg = document.querySelector('.Logo img');
      if (logoImg) {
        if (body.classList.contains('dark-theme')) {
          logoImg.src = 'imges/logo1.png';
        } else {
          logoImg.src = 'imges/logo2.png';
        }
      }
    });
  }
});






