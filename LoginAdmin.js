import { useState, createContext, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// ---- CONTEXTE D'AUTHENTIFICATION ----
export const AuthContext = createContext(null);

const ADMIN_CREDENTIALS = [
  { email: "admin@pharmacie.com", motdepasse: "admin123", nom: "Administrateur" },
  { email: "pharmacien@pharmacie.com", motdepasse: "pharma123", nom: "Pharmacien Chef" },
];

export function AuthProvider({ children }) {
  const adminSauvegarde = localStorage.getItem("adminConnecte");
  const [admin, setAdmin] = useState(adminSauvegarde ? JSON.parse(adminSauvegarde) : null);

  const connexion = (email, motdepasse) => {
    const trouve = ADMIN_CREDENTIALS.find(
      (a) => a.email === email && a.motdepasse === motdepasse
    );
    if (trouve) {
      setAdmin(trouve);
      localStorage.setItem("adminConnecte", JSON.stringify(trouve));
      return true;
    }
    return false;
  };

  const deconnexion = () => {
    setAdmin(null);
    localStorage.removeItem("adminConnecte");
  };

  return (
    <AuthContext.Provider value={{ admin, connexion, deconnexion }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function RouteProtegee({ children }) {
  const { admin } = useAuth();
  if (!admin) return <Navigate to="/login-admin" />;
  return children;
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Trebuchet MS', sans-serif",
    padding: "40px 20px",
  },
  pageTitle: {
    fontSize: "2rem",
    fontWeight: "900",
    color: "#111",
    marginBottom: "8px",
    fontFamily: "'Georgia', serif",
    textAlign: "center",
  },
  pageSubtitle: {
    fontSize: "15px",
    color: "#2ecc40",
    marginBottom: "32px",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
    padding: "40px 36px",
    width: "100%",
    maxWidth: "440px",
  },
  lockCircle: {
    width: "60px",
    height: "60px",
    borderRadius: "14px",
    backgroundColor: "#e8f5e9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    margin: "0 auto 16px",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: "900",
    color: "#111",
    textAlign: "center",
    marginBottom: "4px",
    fontFamily: "'Georgia', serif",
  },
  cardSubtitle: {
    fontSize: "13px",
    color: "#2ecc40",
    textAlign: "center",
    marginBottom: "28px",
  },
  label: {
    fontSize: "11px",
    fontWeight: "800",
    color: "#555",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: "8px",
    display: "block",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginBottom: "18px",
  },
  inputIcon: {
    position: "absolute",
    left: "14px",
    fontSize: "16px",
    color: "#aaa",
    zIndex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: "14px",
    fontSize: "18px",
    color: "#aaa",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    zIndex: 1,
  },
  input: {
    width: "100%",
    padding: "13px 45px 13px 42px",
    fontSize: "14px",
    border: "1.5px solid #e8e8e8",
    borderRadius: "8px",
    outline: "none",
    fontFamily: "'Trebuchet MS', sans-serif",
    boxSizing: "border-box",
    backgroundColor: "#fafafa",
    color: "#333",
    transition: "border-color 0.2s",
  },
  inputFocused: {
    borderColor: "#2ecc40",
    backgroundColor: "#fff",
  },
  optionsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
    color: "#555",
    cursor: "pointer",
  },
  checkbox: {
    width: "15px",
    height: "15px",
    cursor: "pointer",
    accentColor: "#2ecc40",
  },
  oublieLien: {
    fontSize: "13px",
    color: "#2ecc40",
    fontWeight: "700",
    cursor: "pointer",
  },
  btnConnexion: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#2ecc40",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "800",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "background-color 0.2s",
    marginBottom: "16px",
    fontFamily: "'Trebuchet MS', sans-serif",
  },
  separateur: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  separateurLigne: {
    flex: 1,
    height: "1px",
    backgroundColor: "#e8e8e8",
  },
  separateurTexte: {
    fontSize: "13px",
    color: "#aaa",
  },
  btnAdmin: {
    width: "100%",
    padding: "13px",
    backgroundColor: "#fff",
    color: "#111",
    border: "1.5px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    marginBottom: "20px",
    fontFamily: "'Trebuchet MS', sans-serif",
    transition: "background-color 0.2s",
  },
  creerCompte: {
    textAlign: "center",
    fontSize: "13px",
    color: "#888",
  },
  creerCompteLien: {
    color: "#2ecc40",
    fontWeight: "700",
    textDecoration: "none",
    cursor: "pointer",
  },
  erreur: {
    backgroundColor: "#fce4ec",
    color: "#c62828",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "16px",
    textAlign: "center",
  },
  retour: {
    textAlign: "center",
    marginTop: "16px",
    fontSize: "13px",
  },
  retourLien: {
    color: "#888",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default function LoginAdmin() {
  const { connexion } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", motdepasse: "" });
  const [souvenir, setSouvenir] = useState(false);
  const [erreur, setErreur] = useState("");
  const [chargement, setChargement] = useState(false);
  const [connecte, setConnecte] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [voirMotDePasse, setVoirMotDePasse] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErreur("");
  };

  const handleSubmit = () => {
    if (!form.email || !form.motdepasse) {
      setErreur("⚠️ Veuillez remplir tous les champs.");
      return;
    }
    setChargement(true);
    setTimeout(() => {
      const ok = connexion(form.email, form.motdepasse);
      if (ok) {
        setConnecte(true);
      } else {
        setErreur("❌ Identifiant ou mot de passe incorrect.");
        setChargement(false);
      }
    }, 800);
  };

  if (connecte) return <Navigate to="/stock" />;

  return (
    <div style={styles.page}>
      <h1 style={styles.pageTitle}>S'authentifier</h1>
      <p style={styles.pageSubtitle}>Accédez à votre espace pharmacie sécurisé</p>

      <div style={styles.card}>
        <div style={styles.lockCircle}>🔒</div>
        <h2 style={styles.cardTitle}>Connexion</h2>
        <p style={styles.cardSubtitle}>Bienvenue sur PharmaQuartier</p>

        {erreur && <div style={styles.erreur}>{erreur}</div>}

        {/* Champ Email */}
        <label style={styles.label}>Identifiant / Email</label>
        <div style={styles.inputWrapper}>
          <span style={styles.inputIcon}>👤</span>
          <input
            type="email"
            name="email"
            placeholder="votre@email.com"
            style={{ ...styles.input, ...(focusedInput === "email" ? styles.inputFocused : {}) }}
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>

        {/* Champ Mot de passe avec oeil */}
        <label style={styles.label}>Mot de passe</label>
        <div style={styles.inputWrapper}>
          <span style={styles.inputIcon}>🔒</span>
          <input
            type={voirMotDePasse ? "text" : "password"}
            name="motdepasse"
            placeholder="••••••••"
            style={{ ...styles.input, ...(focusedInput === "motdepasse" ? styles.inputFocused : {}) }}
            value={form.motdepasse}
            onChange={handleChange}
            onFocus={() => setFocusedInput("motdepasse")}
            onBlur={() => setFocusedInput(null)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button
            type="button"
            style={styles.eyeIcon}
            onClick={() => setVoirMotDePasse(!voirMotDePasse)}
          >
            {voirMotDePasse ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Options */}
        <div style={styles.optionsRow}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              style={styles.checkbox}
              checked={souvenir}
              onChange={(e) => setSouvenir(e.target.checked)}
            />
            Se souvenir de moi
          </label>
          <span style={styles.oublieLien}>Mot de passe oublié ?</span>
        </div>

        {/* Bouton Se connecter */}
        <button
          style={styles.btnConnexion}
          onClick={handleSubmit}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#27ae60")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2ecc40")}
          disabled={chargement}
        >
          {chargement ? "⏳ Connexion..." : "→ Se connecter"}
        </button>

        <div style={styles.separateur}>
          <div style={styles.separateurLigne} />
          <span style={styles.separateurTexte}>ou</span>
          <div style={styles.separateurLigne} />
        </div>

        {/* Bouton Connexion administrateur */}
        <button
          style={styles.btnAdmin}
          onClick={handleSubmit}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
        >
          Connexion administrateur
        </button>

        {/* Créer un compte */}
        <div style={styles.creerCompte}>
          Pas encore de compte ?{" "}
          <a href="/creercompte" style={styles.creerCompteLien}>Créer un compte</a>
        </div>

        {/* Retour à l'accueil */}
        <div style={styles.retour}>
          <span
            style={styles.retourLien}
            onClick={() => navigate(-1)}
          >
            ← Retour
          </span>
        </div>
      </div>
    </div>
  );
}