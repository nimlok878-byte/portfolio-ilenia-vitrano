# Ilenia Vitrano — Portfolio
**Visual Content Strategist (AI-Supported) · Torino, IT**

---

## Struttura del progetto

```
portfolio-ilenia/
│
├── index.html
├── css/
│   ├── style.css          (layout, colori, tipografia, responsive)
│   └── animations.css     (glitch, tilt, video bg, lottie, split-text)
├── js/
│   ├── main.js            (cursor, scroll reveal, skill bars, nav)
│   └── animations.js      (split text, magnetic, tilt 3D, page transition)
├── assets/
│   ├── images/
│   │   ├── hero/          <- METTI QUI hero-ilenia.jpg
│   │   ├── projects/      <- METTI QUI rooot-preview.jpg + caffe-matto-preview.jpg
│   │   └── about/
│   ├── motion/
│   │   ├── lottie/        <- animazioni JSON
│   │   └── videos/        <- video .mp4
│   ├── icons/
│   │   └── favicon.svg
│   └── fonts/
└── projects/
    ├── rooot/index.html
    └── caffe-matto/index.html
```

---

## Come inserire le immagini

### Foto Hero
Salva come: assets/images/hero/hero-ilenia.jpg
In index.html decommenta:
  <!-- <img src="assets/images/hero/hero-ilenia.jpg" alt="Ilenia Vitrano"> -->
e cancella il div.hero-placeholder

### Screenshot Progetti
Salva come: assets/images/projects/rooot-preview.jpg
            assets/images/projects/caffe-matto-preview.jpg
In index.html decommenta gli <img> corrispondenti e cancella i div.proj-placeholder

---

## Aggiungere animazioni Lottie
1. Scarica .json da lottiefiles.com -> assets/motion/lottie/
2. Aggiungi in head:
   <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>
3. HTML: <div class="lottie-wrap" id="mia-anim"></div>
4. JS: lottie.loadAnimation({ container: el, renderer:'svg', loop:true, autoplay:true, path:'...' })

## Aggiungere video di sfondo
Salva in assets/motion/videos/hero-bg.mp4
HTML:
  <div class="hero-right video-bg-wrap">
    <video autoplay muted loop playsinline src="assets/motion/videos/hero-bg.mp4"></video>
    <div class="video-bg-overlay"></div>
  </div>

---

## Classi CSS utili
  .reveal          -> fade-in + slide-up allo scroll
  .split-text      -> lettere che appaiono una per una
  .magnetic        -> bottone che segue il cursore
  .glitch          -> effetto glitch (+ data-text="testo")
  .stagger         -> figli animati con delay progressivo
  .underline-draw  -> sottolineatura animata hover
  .video-bg-wrap   -> video di sfondo
  .lottie-wrap     -> container Lottie

---

## Email
In index.html cerca: mailto:nimlok878@gmail.com
Sostituisci con la tua email reale.

## Deploy
Netlify: trascina la cartella su netlify.com/drop
GitHub Pages: carica su repo e attiva Pages
Vercel: importa il repo GitHub
