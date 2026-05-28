import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
import monImage from "./assets/photoapropos.jpg"
import Navbar from "./Navbar";

const styles = {
  // ---- NAVBAR ----
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
    textDecoration: "none",
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
    whiteSpace: "nowrap",
  },

  // ---- HERO ----
  hero: {
    position: "relative",
    width: "100%",
    height: "320px",
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
    filter: "brightness(0.5)",
  },
  heroTitle: {
    position: "relative",
    zIndex: 2,
    fontSize: "2.4rem",
    fontWeight: "900",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: "3px",
    textShadow: "0 3px 16px rgba(0,0,0,0.4)",
    fontFamily: "'Georgia', serif",
  },

  // ---- SECTIONS ----
  section: {
    padding: "50px 60px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "#111",
    textAlign: "center",
    marginBottom: "28px",
    fontFamily: "'Georgia', serif",
  },

  // ---- HISTORIQUE ----
  historiqueBox: {
    backgroundColor: "#2ecc40",
    borderRadius: "8px",
    padding: "28px 32px",
    color: "#fff",
    fontSize: "15px",
    lineHeight: "1.8",
    fontFamily: "'Trebuchet MS', sans-serif",
  },

  // ---- STATS ----
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    marginTop: "10px",
  },
  statCard: {
    border: "1.5px solid #ddd",
    borderRadius: "10px",
    padding: "32px 20px",
    textAlign: "center",
    transition: "box-shadow 0.2s, transform 0.2s",
  },
  statNumber: {
    fontSize: "2.2rem",
    fontWeight: "900",
    color: "#2ecc40",
    marginBottom: "12px",
    fontFamily: "'Georgia', serif",
  },
  statLabel: {
    fontSize: "14px",
    color: "#555",
    fontFamily: "'Trebuchet MS', sans-serif",
  },

  // ---- HORAIRES ----
  horairesTable: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    overflow: "hidden",
  },
  horairesHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 24px",
    fontWeight: "700",
    fontSize: "16px",
    color: "#111",
    backgroundColor: "#ececec",
  },
  horairesRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 24px",
    borderTop: "1px solid #ddd",
  },
  horairesJour: {
    color: "#2ecc40",
    fontWeight: "600",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  horairesHeure: {
    color: "#2ecc40",
    fontWeight: "700",
    fontSize: "15px",
  },

  // ---- FOOTER ----
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "40px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "60px",
  },
  footerTitle: {
    fontWeight: "800",
    fontSize: "18px",
    marginBottom: "16px",
    fontFamily: "'Georgia', serif",
  },
  footerLink: {
    display: "block",
    color: "#ccc",
    textDecoration: "none",
    marginBottom: "8px",
    fontSize: "14px",
    cursor: "pointer",
  },
  footerIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "12px",
  },
  socialIcons: {
    display: "flex",
    gap: "16px",
    fontSize: "28px",
    cursor: "pointer",
  },
  copyright: {
    color: "#aaa",
    fontSize: "13px",
    marginTop: "8px",
  },
};
function Hero() {
  return (
    <section style={styles.hero}>
      <img
        src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1600&q=80"
        alt="Pharmacienne"
        style={styles.heroImage}
      />
      <h1 style={styles.heroTitle}>A Propos de Nous</h1>
    </section>
  );
}

// ---- Composant Historique ----
function Historique() {
  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Historique</h2>
      <div style={styles.historiqueBox}>
        Notre pharmacie a été fondée en 2005 avec une mission claire : offrir des soins
        pharmaceutiques de qualité à tous nos patients. Depuis notre ouverture, nous avons
        grandi pour devenir l'une des pharmacies les plus fiables de la région, en nous
        appuyant sur une équipe de pharmaciens diplômés et passionnés par la santé. Nous
        mettons un point d'honneur à accompagner chaque client avec professionnalisme,
        écoute et bienveillance. Au fil des années, nous avons élargi notre gamme de
        produits et de services pour répondre aux besoins croissants de notre communauté,
        tout en maintenant les valeurs qui nous ont toujours guidés : la confiance,
        l'excellence et le respect du patient.
      </div>
    </div>
  );
}

// ---- Composant Stats ----
function Stats() {
  const stats = [
    { number: "+2000", label: "Nombres de ventes par semaine" },
    { number: "+1500", label: "Appréciations de nos clients" },
    { number: "+100",  label: "Partenaires de santé" },
  ];

  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Résumé de nos ventes</h2>
      <div style={styles.statsGrid}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={styles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(46,204,64,0.2)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Composant Horaires ----
function Horaires() {
  return (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>Fonctionnement de la pharmacie</h2>
      <div style={styles.horairesTable}>
        <div style={styles.horairesHeader}>
          <span>Jours ouvrables</span>
          <span>Horaires</span>
        </div>
        <div style={styles.horairesRow}>
          <span style={styles.horairesJour}>• Lundi à Vendredi</span>
          <span style={styles.horairesHeure}>7h - 00h</span>
        </div>
        <div style={styles.horairesRow}>
          <span style={styles.horairesJour}>• Samedi et Dimanche</span>
          <span style={styles.horairesHeure}>8h - 21h</span>
        </div>
      </div>
    </div>
  );
}

// ---- Composant Footer ----
function Footer() {
  const links = ["Accueil", "A propos", "Medicaments", "Contact"];
  return (
    <footer style={styles.footer}>
      <div>
        <div style={styles.footerTitle}>Liens</div>
        {links.map((link) => (
          <a key={link} href="#" style={styles.footerLink}>{link}</a>
        ))}
      </div>
      <div style={styles.footerIcons}>
        <div style={styles.socialIcons}>
          <span title="Facebook">🔵</span>
          <span title="WhatsApp">🟢</span>
        </div>
        <div style={styles.copyright}>Copyright@2026</div>
      </div>
    </footer>
  );
}

// ---- Page principale À Propos ----
export default function APropos() {
  return (
    <div style={{ fontFamily: "'Trebuchet MS', sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <Historique />
      <Stats />
      <Horaires />
      <Footer />
    </div>
  );
}