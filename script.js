const password = document.getElementById('password');
const message = document.getElementById('strengthMessage');
const togglePassword = document.getElementById('togglePassword');
const generateBtn = document.getElementById('generateBtn');
const generatedMessage = document.getElementById('generatedMessage');

const requirements = {
  length: document.getElementById('length'),
  upper: document.getElementById('upper'),
  lower: document.getElementById('lower'),
  number: document.getElementById('number'),
  special: document.getElementById('special')
};

function evaluatePassword(val) {
  const checks = {
    length: val.length >= 8,
    upper: /[A-Z]/.test(val),
    lower: /[a-z]/.test(val),
    number: /\d/.test(val),
    special: /[!@#$%^&*]/.test(val)
  };

  for (let key in checks) {
    requirements[key].className = checks[key] ? 'valid' : 'invalid';
  }

  const passed = Object.values(checks).filter(Boolean).length;

  if (passed <= 2) {
    message.textContent = 'Strength: Weak';
    message.style.color = 'red';
  } else if (passed === 3 || passed === 4) {
    message.textContent = 'Strength: Medium';
    message.style.color = 'orange';
  } else {
    message.textContent = 'Strength: Strong';
    message.style.color = 'green';
  }
}

password.addEventListener('input', () => {
  evaluatePassword(password.value);
});

// ✅ Show/hide password toggle — make sure this part is present and not inside another block!
togglePassword.addEventListener('change', () => {
  password.type = togglePassword.checked ? 'text' : 'password';
});

// ✅ Password generator logic
generateBtn.addEventListener('click', () => {
      // Only generate if the password field is empty
  if (password.value.trim() !== "") {
    generatedMessage.textContent = "⚠️ Password already entered!";
    setTimeout(() => {
      generatedMessage.textContent = "";
    }, 3000);
    return; // Don't overwrite existing password
  }

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@#$%^&*";
  const all = upper + lower + numbers + special;

  // Ensure at least one character from each category
  let result = [
    upper[Math.floor(Math.random() * upper.length)],
    lower[Math.floor(Math.random() * lower.length)],
    numbers[Math.floor(Math.random() * numbers.length)],
    special[Math.floor(Math.random() * special.length)]
  ];

  // Fill the rest randomly to reach desired length (12 characters)
  while (result.length < 12) {
    result.push(all[Math.floor(Math.random() * all.length)]);
  }

  // Shuffle the array
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  const finalPassword = result.join('');
  password.value = finalPassword;
  evaluatePassword(finalPassword);

  generatedMessage.textContent = "✅ Password generated successfully!";
  setTimeout(() => {
    generatedMessage.textContent = "";
  }, 3000);
});
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', () => {
  password.value = "";
  message.textContent = "";
  generatedMessage.textContent = "";

  // Reset all requirement styles
  for (let key in requirements) {
    requirements[key].className = "";
  }
});

