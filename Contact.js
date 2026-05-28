import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
import monImage from "./assets/contact.jpg"
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
  },
  navLinkHover: { color: "#1a6e2e" },
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
    height: "260px",
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
    fontSize: "1.8rem",
    fontWeight: "900",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "0 3px 16px rgba(0,0,0,0.4)",
    fontFamily: "'Georgia', serif",
    textAlign: "center",
    padding: "0 40px",
    margin: 0,
  },

  // ---- INFOS CONTACT ----
  infoSection: {
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    padding: "50px 60px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    textAlign: "center",
  },
  infoIconCircle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "2px solid #1a6e2e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
  },
  infoText: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "600",
    fontFamily: "'Trebuchet MS', sans-serif",
  },

  // ---- FORMULAIRE ----
  formSection: {
    maxWidth: "700px",
    margin: "0 auto 50px",
    padding: "0 20px",
  },
  formTitle: {
    fontSize: "1.4rem",
    fontWeight: "900",
    color: "#111",
    textAlign: "center",
    marginBottom: "28px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontFamily: "'Georgia', serif",
  },
  formBox: {
    border: "1.5px solid #2ecc40",
    borderRadius: "10px",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "14px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#f0f0f0",
    outline: "none",
    fontFamily: "'Trebuchet MS', sans-serif",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "14px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#f0f0f0",
    outline: "none",
    fontFamily: "'Trebuchet MS', sans-serif",
    resize: "vertical",
    minHeight: "130px",
    boxSizing: "border-box",
  },
  btnEnvoyer: {
    backgroundColor: "#2ecc40",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "14px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    width: "40%",
    margin: "0 auto",
    display: "block",
    transition: "background-color 0.2s",
    fontFamily: "'Trebuchet MS', sans-serif",
  },

  // ---- GOOGLE MAPS ----
  mapSection: {
    width: "100%",
    height: "280px",
    backgroundColor: "#e0e0e0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0",
  },
  mapPlaceholder: {
    fontSize: "16px",
    color: "#777",
    fontFamily: "'Trebuchet MS', sans-serif",
  },

  // ---- FOOTER ----
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "40px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
  },
  socialIcons: {
    display: "flex",
    gap: "16px",
    fontSize: "28px",
    cursor: "pointer",
    marginBottom: "8px",
  },
  copyright: {
    color: "#aaa",
    fontSize: "13px",
  },
};


// ---- Composant Hero ----
function Hero() {
  return (
    <section style={styles.hero}>
      <img
        src={monImage}
        alt="Contact pharmacie"
        style={styles.heroImage}
      />
      <h1 style={styles.heroTitle}>Contactez nous pour plus d'informations</h1>
    </section>
  );
}

// ---- Composant Infos Contact ----
function InfosContact() {
  const infos = [
    { icon: "📍", texte: "DOUALA - BONABERI ANCIENNE ROUTE" },
    { icon: "📞", texte: "+237 659-040-221 / 653-988-306" },
    { icon: "✉️", texte: "pharmacyquarter@gmail.com" },
  ];

  return (
    <div style={styles.infoSection}>
      {infos.map((info) => (
        <div key={info.texte} style={styles.infoItem}>
          <div style={styles.infoIconCircle}>{info.icon}</div>
          <div style={styles.infoText}>{info.texte}</div>
        </div>
      ))}
    </div>
  );
}

// ---- Composant Formulaire ----
function Formulaire() {
  const [form, setForm] = useState({
    nom: "", prenom: "", numero: "", adresse: "", message: "",
  });
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.nom && form.prenom && form.message) {
      setEnvoye(true);
      setTimeout(() => setEnvoye(false), 3000);
      setForm({ nom: "", prenom: "", numero: "", adresse: "", message: "" });
    }
  };

  return (
    <div style={styles.formSection}>
      <h2 style={styles.formTitle}>Veuillez remplir le formulaire</h2>
      <div style={styles.formBox}>
        <div style={styles.formRow}>
          <input
            type="text"
            name="nom"
            placeholder="Entrer votre nom"
            style={styles.input}
            value={form.nom}
            onChange={handleChange}
          />
          <input
            type="text"
            name="prenom"
            placeholder="Entrer votre prénom"
            style={styles.input}
            value={form.prenom}
            onChange={handleChange}
          />
        </div>
        <div style={styles.formRow}>
          <input
            type="text"
            name="numero"
            placeholder="Entrer votre numéro"
            style={styles.input}
            value={form.numero}
            onChange={handleChange}
          />
          <input
            type="text"
            name="adresse"
            placeholder="Entrer votre adresse"
            style={styles.input}
            value={form.adresse}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          placeholder="Entrer votre message"
          style={styles.textarea}
          value={form.message}
          onChange={handleChange}
        />
        <button
          style={styles.btnEnvoyer}
          onClick={handleSubmit}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#27ae60")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2ecc40")}
        >
          {envoye ? "✅ Envoyé !" : "Envoyer"}
        </button>
      </div>
    </div>
  );
}

// ---- Composant Google Maps ----
function MapSection() {
  return (
    <div style={styles.mapSection}>
      {/* 
        Pour intégrer Google Maps, remplacez ce div par :
        <iframe
          src="https://www.google.com/maps/embed?pb=VOTRE_CLE_ICI"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      */}
      <p style={styles.mapPlaceholder}>Google Maps à insérer ici</p>
    </div>
  );
}

// ---- Composant Footer ----
function Footer() {
  const links = [
    { label: "Accueil", path: "/" },
    { label: "A propos", path: "/apropos" },
    { label: "Medicaments", path: "/medicaments" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <footer style={styles.footer}>
      <div>
        <div style={styles.footerTitle}>Liens</div>
        {links.map((link) => (
          <Link key={link.label} to={link.path} style={styles.footerLink}>
            {link.label}
          </Link>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        <div style={styles.socialIcons}>
          <span>🔵</span>
          <span>🟢</span>
        </div>
        <div style={styles.copyright}>Copyright@2026</div>
      </div>
    </footer>
  );
}

// ---- Page principale Contact ----
export default function Contact() {
  return (
    <div style={{ fontFamily: "'Trebuchet MS', sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <InfosContact />
      <Formulaire />
      <MapSection />
      <Footer />
    </div>
  );
}