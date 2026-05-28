import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
import monImage from "./assets/photoacc.jpg"
import Navbar from "./Navbar";

// Styles CSS en JS (pas besoin de fichier CSS séparé)
const styles = {
  // la bar de navigation
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 40px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "22px",
    fontWeight: "700",
    color: "#1a6e2e",
    textDecoration: "none",
  },
  logoIcon: {
    fontSize: "32px",
  },
  navLinks: {
    display: "flex",
    gap: "36px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontSize: "16px",
    color: "#333",
    textDecoration: "none",
    fontWeight: "500",
    cursor: "pointer",
    transition: "color 0.2s",
  },
  navLinkHover: {
    color: "#1a6e2e",
  },
  btnConnect: {
    backgroundColor: "#1a6e2e",
    color: "#ffffff",
    border: "none",
    borderRadius: "25px",
    padding: "10px 22px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s, transform 0.1s",
    whiteSpace: "nowrap",
  },

  // ---- HERO ----
  hero: {
    position: "relative",
    width: "100%",
    height: "88vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.45)",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "0 24px",
    maxWidth: "900px",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.6rem)",
    fontWeight: "900",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "20px",
    textShadow: "0 3px 16px rgba(0,0,0,0.4)",
    fontFamily: "'Georgia', serif",
  },
  heroDescription: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    color: "rgba(255,255,255,0.88)",
    lineHeight: "1.7",
    marginBottom: "36px",
    fontFamily: "'Trebuchet MS', sans-serif",
  },
  btnHero: {
    backgroundColor: "#2ecc40",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    padding: "14px 40px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background-color 0.2s, transform 0.15s",
    letterSpacing: "0.5px",
  },
};


// ---- Composant Hero ----
function Hero() {
  return (
    <section style={styles.hero}>
      {/* Image de fond (médicaments) */}
      <img
        src={monImage}
        alt="Médicaments"
        style={styles.heroImage}
      />
      {/* Overlay sombre */}
      <div style={styles.heroOverlay} />

      {/* Contenu centré */}
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Bienvenue dans notre Pharmacie</h1>
        <p style={styles.heroDescription}>
          Votre santé est notre priorité. Nous vous proposons une large gamme de médicaments,
          de produits de parapharmacie et des conseils personnalisés par nos pharmaciens
          diplômés pour prendre soin de vous et de votre famille.
        </p>
        <button
          style={styles.btnHero}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#27ae60";
            e.target.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#2ecc40";
            e.target.style.transform = "scale(1)";
          }}
        >
          En savoir plus
        </button>
      </div>
    </section>
  );
}

// ---- Composant principal HomePage ----
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}