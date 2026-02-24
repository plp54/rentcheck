# Charte Graphique LoyerLegal.be
## Style Apple Premium - Édition 2024

---

## 🎨 Philosophie Design

**Inspiration**: Apple Design System - Minimalisme, élégance, focus sur le contenu

**Mots-clés**: Épuré, Lumineux, Aérien, Premium, Confiant

---

## 🌈 Palette de Couleurs

### Couleurs Primaires
```css
--apple-bg: #F5F5F7;           /* Gris Apple clair */
--apple-white: #FFFFFF;        /* Blanc pur */
--apple-dark: #1D1D1F;         /* Noir Apple */
--apple-gray: #86868B;         /* Gris texte */
--apple-light-gray: #F5F5F7;   /* Gris fond */
```

### Couleurs d'Accent (Gradient)
```css
--accent-blue: #007AFF;        /* Bleu Apple */
--accent-blue-light: #5AC8FA;  /* Bleu clair */
--accent-green: #34C759;       /* Vert succès */
--accent-orange: #FF9500;      /* Orange CTA */
--accent-red: #FF3B30;         /* Rouge alerte */
```

### Dégradés Premium
```css
/* Hero Gradient */
linear-gradient(135deg, #F5F5F7 0%, #E8E8ED 50%, #D1D1D6 100%);

/* CTA Gradient */
linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%);

/* Success Gradient */
linear-gradient(135deg, #34C759 0%, #30D158 100%);

/* Glass Effect */
backdrop-filter: blur(20px) saturate(180%);
background: rgba(255, 255, 255, 0.7);
```

---

## 🔤 Typographie

### Police Principale
```css
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### Hiérarchie
- **H1 (Hero)**: 56px, font-weight: 700, letter-spacing: -0.02em
- **H2 (Sections)**: 40px, font-weight: 600, letter-spacing: -0.01em
- **H3 (Cards)**: 24px, font-weight: 600
- **Body**: 17px, font-weight: 400, line-height: 1.5
- **Caption**: 12px, font-weight: 400, text-transform: uppercase, letter-spacing: 0.05em

---

## 🎯 Composants UI

### Boutons

**Primary (CTA)**
```css
background: linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%);
border-radius: 980px; /* Pill shape Apple */
padding: 16px 32px;
font-weight: 600;
box-shadow: 0 4px 20px rgba(0, 122, 255, 0.3);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

**Secondary**
```css
background: rgba(0, 0, 0, 0.05);
border-radius: 980px;
padding: 12px 24px;
backdrop-filter: blur(10px);
```

### Cards (Glassmorphism)
```css
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(20px) saturate(180%);
border-radius: 24px;
border: 1px solid rgba(255, 255, 255, 0.5);
box-shadow: 
  0 4px 24px rgba(0, 0, 0, 0.04),
  0 1px 2px rgba(0, 0, 0, 0.02);
```

### Inputs
```css
background: rgba(255, 255, 255, 0.9);
border: 1px solid rgba(0, 0, 0, 0.08);
border-radius: 12px;
padding: 16px 20px;
font-size: 17px;
transition: all 0.2s ease;

&:focus {
  border-color: #007AFF;
  box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.15);
}
```

---

## 📐 Espacements

**Grid System**: 12 colonnes
**Gouttière**: 24px (desktop), 16px (mobile)

**Espacements**
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 48px
- 2xl: 80px

---

## 🎬 Animations

### Transitions
```css
--ease-apple: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

### Effets Hover
- Scale: 1.02
- Shadow: augmentation légère
- Duration: 300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

### Scroll Animations
- Fade up: translateY(30px) → 0, opacity 0 → 1
- Duration: 600ms
- Stagger: 100ms entre éléments

---

## 🖼️ Images & Icônes

### Style Images
- **Photos**: Tons naturels, lumière douce, contraste faible
- **Illustrations**: Style 3D isométrique ou flat design minimaliste
- **Formats**: WebP avec fallback JPG
- **Résolutions**: 2x pour retina

### Icônes
- **Style**: SF Symbols (outline, stroke 1.5px)
- **Taille**: 24px (default), 20px (small), 32px (large)
- **Couleur**: Hérite du texte ou accent blue

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1280px

---

## ✨ Effets Spéciaux

### Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #1D1D1F 0%, #434344 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Shadow Premium
```css
.shadow-premium {
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.02),
    0 8px 16px rgba(0, 0, 0, 0.04),
    0 16px 32px rgba(0, 0, 0, 0.06);
}
```

---

## 🎯 Principes d'Application

1. **Respirer**: Beaucoup d'espace blanc (air)
2. **Hiérarchie**: Une action principale par section
3. **Feedback**: Micro-interactions sur chaque élément cliquable
4. **Cohérence**: Mêmes espacements et rythme partout
5. **Focus**: Pas de distractions, le contenu est roi

---

## 🔗 Ressources

- **SF Pro Font**: https://developer.apple.com/fonts/
- **SF Symbols**: https://developer.apple.com/sf-symbols/
- **Apple Design Resources**: https://developer.apple.com/design/resources/
