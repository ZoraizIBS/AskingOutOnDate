// ─────────────────────────────────────────────
//  APP SETTINGS — edit this file to customise
// ─────────────────────────────────────────────

const CONFIG = {

  // ── Formspree ──────────────────────────────
  // Sign up free at https://formspree.io
  // Create a new form and paste your endpoint here
  // Example: 'https://formspree.io/f/xbdbwvyr'
  FORMSPREE_URL: 'https://formspree.io/f/xbdbwvyr',

  // ── Page text ──────────────────────────────
  QUESTION_TEXT:     'Will you go out with me?',
  YES_BUTTON_TEXT:   'Yes 💖',
  NO_BUTTON_TEXT:    'No',
  CELEBRATION_TEXT:  "YESSS!! Can't wait!! 🎉",
  FORM_TITLE_TEXT:   "Now let's plan it 😏",

  // ── Food options ───────────────────────────
  // Add, remove or rename as you like
  // Format: { label: 'Display Text', value: 'email value' }
  FOOD_OPTIONS: [
    { label: 'Desi 🍛',           value: 'Desi' },
    { label: 'Burgers 🍔',        value: 'Burgers' },
    { label: 'Pizza 🍕',          value: 'Pizza' },
    { label: 'Shawarma 🌯',       value: 'Shawarma' },
    { label: 'Fried Chicken 🍗',  value: 'Fried Chicken' },
    { label: 'Surprise me 🤫',    value: 'Surprise me' },
  ],

  // ── Place options ──────────────────────────
  PLACE_OPTIONS: [
    { label: 'Fancy restaurant ✨', value: 'Fancy restaurant' },
    { label: 'Dhaba vibes 🪑',      value: 'Dhaba vibes' },
    { label: 'Cafe ☕',             value: 'Cafe' },
    { label: 'Food street 🌃',      value: 'Food street' },
  ],

  // ── Nickname suggestions ───────────────────
  NICKNAME_OPTIONS: [
    { label: 'Babe 😘',   value: 'Babe' },
    { label: 'Honey 🍯',  value: 'Honey' },
    { label: 'Jaan 💖',   value: 'Jaan' },
    { label: 'Jaanu 🥰',  value: 'Jaanu' },
    { label: 'Love 💕',   value: 'Love' },
  ],

  // ── Pleader messages ───────────────────────
  // Shown each time the No button is hovered
  PLEAD_MESSAGES: [
    "Really? 🥺",
    "Are you sure?? 😢",
    "My cat will be devastated 🐱",
    "I've been practicing my dance moves for months 💃",
    "I already told my mom 😭",
    "My goldfish is also watching 🐠",
    "I bought new shoes for this 👟",
    "I'll cry. Respectfully. 😤",
  ],

};
