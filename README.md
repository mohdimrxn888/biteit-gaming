# BiteIT Gaming — PS5 slot booking

A static website (`index.html` + `config.js`) backed by Firebase, which is free at hostel scale.
Players open the link, pick a slot, and book. No account needed: Firebase signs them in anonymously.
The slot is held for 5 minutes while they fill in the form, then locked for everyone once booked.
You log in with Google to see the Admin panel.

## 1. Set up Firebase (about 10 minutes)
1. Go to https://console.firebase.google.com → **Add project** → name it `biteit-gaming` (you can turn Analytics off).
2. **Build → Firestore Database → Create database** → Production mode → choose a nearby region (e.g. `europe-west`).
3. **Firestore → Rules** tab → paste everything from `firestore.rules`, replace `your.email@gmail.com` with your Google email, and click **Publish**.
4. **Build → Authentication → Get started → Sign-in method** → enable **Anonymous** and **Google**.
5. **Project settings (gear icon) → General → Your apps → Web (</>)** → register the app → copy the `firebaseConfig` values.
6. Open `config.js`, paste those values, and put your Google email in `adminEmails`.

## 2a. Host on Vercel
1. Create a GitHub repo (e.g. `biteit-gaming`) and upload `index.html`, `config.js`, `firestore.rules`, `README.md`
   (on github.com: **Add file → Upload files**).
2. Go to https://vercel.com → sign in with GitHub → **Add New → Project** → import the repo →
   Framework preset **Other** → **Deploy**. You get a link like `biteit-gaming.vercel.app`.
3. Back in Firebase: **Authentication → Settings → Authorized domains → Add domain** → `biteit-gaming.vercel.app`
   (without this, Admin login won't work).

## 2b. Or host on GitHub Pages (free, no Vercel)
1. Same repo as above → **Settings → Pages** → Source: *Deploy from a branch* → branch `main`, folder `/ (root)` → Save.
2. Your site appears at `https://YOUR-USERNAME.github.io/biteit-gaming/` after about a minute.
3. Add `YOUR-USERNAME.github.io` to Firebase **Authorized domains**.

## 3. First run
1. Open your site → footer → **Admin login** → sign in with your Google account → the **Admin** section appears.
2. In **Admin → Settings**, set real prices, hours, games, rules and your payment contact → **Save settings**.
3. Share the link in the WhatsApp group.

Any change you push to GitHub redeploys automatically on Vercel and GitHub Pages.

## Notes
- "My bookings" is tied to the player's browser. If they clear it, their old bookings still show in your Admin panel.
- Phone numbers are private: only the player and the admin can read them (see `firestore.rules`).
- Firebase's free Spark plan covers about 50k reads and 20k writes a day, far more than one PS5 needs.
