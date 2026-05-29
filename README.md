# Will You Go Out With Me? 💘

A fun & dramatic way to ask someone out. The **No button runs away** and guilt-trips them every time they try to click it. Say **Yes** and confetti flies — then plan the date right there: pick a day, food, vibe, and a cute nickname. All responses land in your inbox via **Formspree**.

---

## Features

- 😏 Dramatic **No button** that runs away and pleads with escalating messages
- 🎊 **Confetti explosion** when Yes is clicked
- 📋 **Date planning form** — nickname, date picker, food, place, timing
- 📬 **Email notification** via Formspree when form is submitted
- 📱 Fully **responsive** — works on mobile & desktop
- ⚙️ **config.js** — one file to customise everything, no coding needed

---

## Getting Started

### Step 1 — Download the project

Click the green **Code** button → **Download ZIP** → extract the folder.

Or clone it:
```bash
git clone https://github.com/ZoraizIBS/AskingOutOnDate.git
```

---

### Step 2 — Set up email notifications (Formspree)

You need a free Formspree account to receive an email when someone fills the form.

1. Go to **[formspree.io](https://formspree.io)** and sign up for free
2. Click **"New Form"** and give it any name (e.g. "Date Ask")
3. Copy your form endpoint — it looks like:
   ```
   https://formspree.io/f/xbdbwvyr
   ```
4. Open **`config.js`** and paste it in:
   ```js
   FORMSPREE_URL: 'https://formspree.io/f/YOUR_FORM_ID',
   ```

> ✅ Free plan allows **50 submissions/month** — more than enough.

---

### Step 3 — Customise (optional)

Everything is in **`config.js`** — no need to touch any other file.

#### Change the page text
```js
QUESTION_TEXT:    'Will you go out with me?',
CELEBRATION_TEXT: "YESSS!! Can't wait!! 🎉",
FORM_TITLE_TEXT:  "Now let's plan it 😏",
YES_BUTTON_TEXT:  'Yes 💖',
NO_BUTTON_TEXT:   'No',
```

#### Change food options
```js
FOOD_OPTIONS: [
  { label: 'Desi 🍛',    value: 'Desi' },
  { label: 'Burgers 🍔', value: 'Burgers' },
  // Add or remove as you like
],
```

#### Change place options
```js
PLACE_OPTIONS: [
  { label: 'Fancy restaurant ✨', value: 'Fancy restaurant' },
  { label: 'Dhaba vibes 🪑',     value: 'Dhaba vibes' },
  // Add or remove as you like
],
```

#### Change nickname suggestions
```js
NICKNAME_OPTIONS: [
  { label: 'Babe 😘',  value: 'Babe' },
  { label: 'Honey 🍯', value: 'Honey' },
  // Add your own
],
```

#### Change the No button plead messages
```js
PLEAD_MESSAGES: [
  "Really? 🥺",
  "Are you sure?? 😢",
  "I already told my mom 😭",
  // Add as many as you want
],
```

---

### Step 4 — Open the app

No server needed. Just open **`index.html`** in any browser — double click it or drag it into Chrome/Firefox.

---

### Step 5 — Share it

To share with someone, host it online. Easiest free options:

#### Option A — GitHub Pages (recommended)
1. Push this project to a GitHub repository
2. Go to repo **Settings → Pages**
3. Under **Source**, select `main` branch → Save
4. Your live link: `https://yourusername.github.io/your-repo-name`

#### Option B — Netlify Drop
1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**
2. Drag and drop the entire project folder
3. Get a live link instantly — no account needed

---

## File Structure

```
├── index.html   — Page structure
├── style.css    — All styling
├── config.js    — ⚙️ YOUR SETTINGS FILE — edit this one
├── script.js    — App logic (reads from config.js)
└── README.md    — This file
```

---

## Built With

- HTML · CSS · Vanilla JavaScript
- [Formspree](https://formspree.io) — email notifications
- [Google Fonts](https://fonts.google.com) — Leckerli One
- [Giphy](https://giphy.com) — reaction GIFs

---

## License

MIT — use it, share it, send it to your crush. 💌
