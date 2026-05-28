import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./LoginAdmin";
import logo from "./assets/logo.jpg";

const styles = {
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
};

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ email: "", motdepasse: "" });
  const [voirMdp, setVoirMdp] = useState(false);
  const [erreur, setErreur] = useState("");
  const { connexion } = useAuth();
  const navigate = useNavigate();

  const links = [
    { label: "Accueil", path: "/" },
    { label: "A propos", path: "/apropos" },
    { label: "Medicaments", path: "/medicaments" },
    { label: "Contact", path: "/contact" },
  ];

  const handleStock = () => {
    setShowModal(true);
    setErreur("");
    setForm({ email: "", motdepasse: "" });
  };

  const handleSubmit = () => {
    if (!form.email || !form.motdepasse) {
      setErreur("⚠️ Veuillez remplir tous les champs.");
      return;
    }
    const ok = connexion(form.email, form.motdepasse);
    if (ok) {
      setShowModal(false);
      navigate("/stock");
    } else {
      setErreur("❌ Identifiant ou mot de passe incorrect.");
    }
  };

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: "45px" }} />
        </Link>

        <ul style={styles.navLinks}>
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                style={{
                  ...styles.navLink,
                  ...(hoveredLink === link.label ? styles.navLinkHover : {}),
                }}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Bouton Stock */}
          <li>
            <span
              style={{
                ...styles.navLink,
                ...(hoveredLink === "Stock" ? styles.navLinkHover : {}),
              }}
              onMouseEnter={() => setHoveredLink("Stock")}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={handleStock}
            >
              Stock
            </span>
          </li>
        </ul>

        <Link to="/creercompte" style={{ textDecoration: "none" }}>
          <button style={styles.btnConnect}>Créer un compte / Se connecter</button>
        </Link>
      </nav>

      {/* ---- MODAL AUTHENTIFICATION ---- */}
      {showModal && (
        <div style={{
          position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999,
        }}>
          <div style={{
            backgroundColor: "#fff", borderRadius: "16px", padding: "40px 36px",
            width: "100%", maxWidth: "420px", boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          }}>
            {/* En-tête */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div style={{
                width: "55px", height: "55px", borderRadius: "12px",
                backgroundColor: "#e8f5e9", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "26px", margin: "0 auto 12px",
              }}>🔒</div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "900", margin: 0, fontFamily: "'Georgia', serif" }}>
                Espace Administrateur
              </h2>
              <p style={{ fontSize: "13px", color: "#2ecc40", margin: "4px 0 0" }}>
                Accès réservé au personnel autorisé
              </p>
            </div>

            {/* Erreur */}
            {erreur && (
              <div style={{
                backgroundColor: "#fce4ec", color: "#c62828", padding: "10px 14px",
                borderRadius: "8px", fontSize: "13px", fontWeight: "600",
                marginBottom: "16px", textAlign: "center",
              }}>
                {erreur}
              </div>
            )}

            {/* Email */}
            <label style={{ fontSize: "11px", fontWeight: "800", color: "#555", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px", display: "block" }}>
              Email
            </label>
            <div style={{ position: "relative", marginBottom: "16px" }}>
              <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "15px" }}>👤</span>
              <input
                type="email"
                placeholder="votre@email.com"
                style={{
                  width: "100%", padding: "12px 16px 12px 40px", fontSize: "14px",
                  border: "1.5px solid #e8e8e8", borderRadius: "8px", outline: "none",
                  boxSizing: "border-box", backgroundColor: "#fafafa", fontFamily: "'Trebuchet MS', sans-serif",
                }}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Mot de passe */}
            <label style={{ fontSize: "11px", fontWeight: "800", color: "#555", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px", display: "block" }}>
              Mot de passe
            </label>
            <div style={{ position: "relative", marginBottom: "20px" }}>
              <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "15px" }}>🔒</span>
              <input
                type={voirMdp ? "text" : "password"}
                placeholder="••••••••"
                style={{
                  width: "100%", padding: "12px 45px 12px 40px", fontSize: "14px",
                  border: "1.5px solid #e8e8e8", borderRadius: "8px", outline: "none",
                  boxSizing: "border-box", backgroundColor: "#fafafa", fontFamily: "'Trebuchet MS', sans-serif",
                }}
                value={form.motdepasse}
                onChange={(e) => setForm({ ...form, motdepasse: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
              <button
                type="button"
                onClick={() => setVoirMdp(!voirMdp)}
                style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}
              >
                {voirMdp ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Bouton Se connecter */}
            <button
              onClick={handleSubmit}
              style={{
                width: "100%", padding: "13px", backgroundColor: "#2ecc40",
                color: "#fff", border: "none", borderRadius: "8px", fontSize: "15px",
                fontWeight: "800", cursor: "pointer", marginBottom: "10px",
                fontFamily: "'Trebuchet MS', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#27ae60")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2ecc40")}
            >
              → Se connecter
            </button>

            {/* Bouton Annuler */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                width: "100%", padding: "13px", backgroundColor: "#f5f5f5",
                color: "#555", border: "none", borderRadius: "8px", fontSize: "14px",
                fontWeight: "700", cursor: "pointer", fontFamily: "'Trebuchet MS', sans-serif",
              }}
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </>
  );
}
