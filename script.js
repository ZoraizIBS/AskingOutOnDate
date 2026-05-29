// ── Formspree endpoint ── replace with your own form ID from formspree.io
const FORMSPREE_URL = 'https://formspree.io/f/xbdbwvyr';

// ── Elements ──
const question  = document.querySelector('.question');
const gif       = document.querySelector('.gif');
const yesBtn    = document.querySelector('.yes-btn');
const noBtn     = document.querySelector('.no-btn');
const pleadMsg  = document.getElementById('plead-msg');
const dateForm  = document.getElementById('date-form');
const lockBtn   = document.getElementById('lock-btn');
const formNote  = document.getElementById('form-note');

// ── Pleader messages ──
const pleads = [
  "Really? 🥺",
  "Are you sure?? 😢",
  "My cat will be devastated 🐱",
  "I've been practicing my dance moves for months 💃",
  "I already told my mom 😭",
  "My goldfish is also watching 🐠",
  "I bought new shoes for this 👟",
  "I'll cry. Respectfully. 😤",
];
let pleadIndex = 0;
let pleadTimer = null;

const showPlead = () => {
  pleadMsg.textContent = pleads[pleadIndex % pleads.length];
  pleadIndex++;
  pleadMsg.classList.add('show');
  clearTimeout(pleadTimer);
  pleadTimer = setTimeout(() => pleadMsg.classList.remove('show'), 2000);

  // Shake the body
  document.body.classList.remove('shake');
  void document.body.offsetWidth; // reflow to restart animation
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 400);
};

// ── No button ──
const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width - 8;
  const maxY = window.innerHeight - height - 8;
  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top  = `${Math.floor(Math.random() * maxY)}px`;
  showPlead();
};

noBtn.style.position = 'fixed';
noBtn.style.width = '150px';
noBtn.style.height = '50px';
noBtn.addEventListener('mouseover', handleNoMouseOver);

// ── Confetti ──
const canvas = document.getElementById('confetti-canvas');
const ctx    = canvas.getContext('2d');
let particles = [];
let animFrame = null;

const randomColor = () => {
  const colors = ['#e94d58','#ff9eb5','#ffcc00','#6bcb77','#4d96ff','#ff6b6b','#ffd93d'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const launchConfetti = () => {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = Array.from({ length: 160 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 8 + 4,
    color: randomColor(),
    speed: Math.random() * 3 + 2,
    spin: Math.random() * 0.2 - 0.1,
    angle: Math.random() * Math.PI * 2,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.5);
      ctx.restore();
      p.y     += p.speed;
      p.angle += p.spin;
      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
    animFrame = requestAnimationFrame(draw);
  };
  draw();

  // Stop after 1.8s, then show form
  setTimeout(() => {
    cancelAnimationFrame(animFrame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    showForm();
  }, 1800);
};

// ── Yes button ──
yesBtn.addEventListener('click', () => {
  noBtn.removeEventListener('mouseover', handleNoMouseOver);
  noBtn.remove();
  yesBtn.remove();
  pleadMsg.classList.remove('show');

  question.textContent = "YESSS!! Can't wait!! 🎉";
  question.classList.add('bounce');
  gif.src = 'https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif';

  launchConfetti();
});

// ── Show form ──
const showForm = () => {
  dateForm.classList.add('visible');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      dateForm.style.opacity = '1';
      dateForm.style.transform = 'translateY(0)';
    });
  });
};

// ── Choice buttons ──
document.querySelectorAll('.choice-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.dataset.group;
    document.querySelectorAll(`.choice-btn[data-group="${group}"]`).forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    if (group === 'nickname') {
      document.getElementById('nickname').value = btn.dataset.val;
    }
  });
});

// Typing in nickname field clears pill selection
document.getElementById('nickname').addEventListener('input', () => {
  document.querySelectorAll('.choice-btn[data-group="nickname"]').forEach(b => b.classList.remove('selected'));
});

// ── Lock it in ──
let emailSent = false;

lockBtn.addEventListener('click', () => {
  if (emailSent) return;

  const nickname = document.getElementById('nickname').value || 'Not given';
  const date    = document.getElementById('pick-date').value || 'Not chosen';
  const food    = document.querySelector('.choice-btn[data-group="food"].selected')?.dataset.val    || 'Not chosen';
  const place   = document.querySelector('.choice-btn[data-group="place"].selected')?.dataset.val   || 'Not chosen';
  const planner = document.querySelector('.choice-btn[data-group="planner"].selected')?.dataset.val || 'Not chosen';
  const time    = document.querySelector('.choice-btn[data-group="time"].selected')?.dataset.val    || 'Not chosen';

  emailSent = true;
  lockBtn.textContent = "Sending... ⏳";
  lockBtn.disabled = true;

  sendFormData({ nickname, date, food, place, planner, time })
    .then(() => {
      lockBtn.textContent = "It's a date! 💕";
      formNote.textContent = '📬 Details sent!';
    })
    .catch(() => {
      emailSent = false;
      lockBtn.textContent = "Lock it in! 🔒";
      lockBtn.disabled = false;
      formNote.textContent = '⚠️ Something went wrong, try again.';
    });
});

// ── Formspree helper ──
const sendFormData = (data) => {
  return fetch(FORMSPREE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => {
    if (!res.ok) throw new Error('Failed');
  });
};
