import { useState } from "react";

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: "40px 20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    width: "100%",
    padding: "60px 50px",
    gap: "60px",
  },
  illustration: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationImg: {
    width: "100%",
    maxWidth: "320px",
    borderRadius: "50%",
    backgroundColor: "#e8f5ff",
    padding: "20px",
  },
  formSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "900",
    color: "#111",
    margin: 0,
    fontFamily: "'Georgia', serif",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "15px",
    color: "#888",
    textAlign: "center",
    margin: 0,
    fontFamily: "'Trebuchet MS', sans-serif",
  },
  input: {
    width: "100%",
    padding: "16px 20px",
    fontSize: "15px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
    outline: "none",
    fontFamily: "'Trebuchet MS', sans-serif",
    boxSizing: "border-box",
    color: "#333",
  },
  // Wrapper pour le champ mot de passe + icône oeil
  passwordWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  passwordInput: {
    width: "100%",
    padding: "16px 50px 16px 20px",
    fontSize: "15px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
    outline: "none",
    fontFamily: "'Trebuchet MS', sans-serif",
    boxSizing: "border-box",
    color: "#333",
  },
  eyeBtn: {
    position: "absolute",
    right: "14px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    color: "#888",
    padding: "0",
    display: "flex",
    alignItems: "center",
  },
  btnSubmit: {
    width: "100%",
    padding: "16px",
    backgroundColor: "#2ecc40",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "17px",
    fontWeight: "800",
    cursor: "pointer",
    fontFamily: "'Trebuchet MS', sans-serif",
    marginTop: "6px",
  },
  lienBas: {
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
    fontFamily: "'Trebuchet MS', sans-serif",
  },
  lien: {
    color: "#2ecc40",
    fontWeight: "700",
    cursor: "pointer",
  },
  message: {
    padding: "12px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    textAlign: "center",
  },
  succes: { backgroundColor: "#e8f5e9", color: "#1a6e2e" },
  erreur: { backgroundColor: "#fce4ec", color: "#c62828" },
};

// ---- Composant champ mot de passe avec oeil ----
function ChampMotDePasse({ name, placeholder, value, onChange }) {
  const [visible, setVisible] = useState(false);

  return (
    <div style={styles.passwordWrapper}>
      <input
        type={visible ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        style={styles.passwordInput}
        value={value}
        onChange={onChange}
      />
      <button
        style={styles.eyeBtn}
        onClick={() => setVisible(!visible)}
        type="button"
        title={visible ? "Masquer" : "Afficher"}
      >
        {visible ? "🙈" : "👁️"}
      </button>
    </div>
  );
}

// ---- Formulaire Créer un compte ----
function FormulaireInscription({ onSwitch }) {
  const [form, setForm] = useState({ nom: "", email: "", motdepasse: "" });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.nom || !form.email || !form.motdepasse) {
      setMessage({ type: "erreur", texte: "⚠️ Veuillez remplir tous les champs." });
      return;
    }
    if (form.motdepasse.length < 6) {
      setMessage({ type: "erreur", texte: "⚠️ Le mot de passe doit contenir au moins 6 caractères." });
      return;
    }

    const comptes = JSON.parse(localStorage.getItem("comptes") || "[]");
    const existe = comptes.find((c) => c.email === form.email);
    if (existe) {
      setMessage({ type: "erreur", texte: "❌ Un compte avec cet email existe déjà." });
      return;
    }

    comptes.push({ nom: form.nom, email: form.email, motdepasse: form.motdepasse });
    localStorage.setItem("comptes", JSON.stringify(comptes));
    setMessage({ type: "succes", texte: "✅ Compte créé avec succès ! Redirection..." });
    setForm({ nom: "", email: "", motdepasse: "" });
    setTimeout(() => onSwitch(), 2000);
  };

  return (
    <div style={styles.formSide}>
      <h1 style={styles.title}>Créer un compte</h1>
      <p style={styles.subtitle}>Bienvenue dans notre pharmacie</p>

      {message && (
        <div style={{ ...styles.message, ...(message.type === "succes" ? styles.succes : styles.erreur) }}>
          {message.texte}
        </div>
      )}

      <input type="text" name="nom" placeholder="Nom" style={styles.input} value={form.nom} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" style={styles.input} value={form.email} onChange={handleChange} />
      <ChampMotDePasse
        name="motdepasse"
        placeholder="Mot de passe (min. 6 caractères)"
        value={form.motdepasse}
        onChange={handleChange}
      />

      <button style={styles.btnSubmit} onClick={handleSubmit}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#27ae60")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#2ecc40")}
      >
        Créer votre compte
      </button>

      <p style={styles.lienBas}>
        Avez-vous déjà un compte ?{" "}
        <span style={styles.lien} onClick={onSwitch}>Se connecter</span>
      </p>
    </div>
  );
}

// ---- Formulaire Se connecter ----
function FormulaireConnexion({ onSwitch }) {
  const [form, setForm] = useState({ email: "", motdepasse: "" });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.email || !form.motdepasse) {
      setMessage({ type: "erreur", texte: "⚠️ Veuillez remplir tous les champs." });
      return;
    }

    const comptes = JSON.parse(localStorage.getItem("comptes") || "[]");
    const compte = comptes.find(
      (c) => c.email === form.email && c.motdepasse === form.motdepasse
    );

    if (compte) {
      localStorage.setItem("utilisateurConnecte", JSON.stringify(compte));
      setMessage({ type: "succes", texte: `✅ Bienvenue ${compte.nom} ! Connexion réussie.` });
      setForm({ email: "", motdepasse: "" });
      setTimeout(() => window.location.href = "/", 1500);
    } else {
      setMessage({ type: "erreur", texte: "❌ Email ou mot de passe incorrect." });
    }
  };

  return (
    <div style={styles.formSide}>
      <h1 style={styles.title}>Se connecter</h1>
      <p style={styles.subtitle}>Bienvenue dans notre pharmacie</p>

      {message && (
        <div style={{ ...styles.message, ...(message.type === "succes" ? styles.succes : styles.erreur) }}>
          {message.texte}
        </div>
      )}

      <input type="email" name="email" placeholder="Email" style={styles.input} value={form.email} onChange={handleChange} />
      <ChampMotDePasse
        name="motdepasse"
        placeholder="Mot de passe"
        value={form.motdepasse}
        onChange={handleChange}
      />

      <button style={styles.btnSubmit} onClick={handleSubmit}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#27ae60")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#2ecc40")}
      >
        Se connecter
      </button>

      <p style={styles.lienBas}>
        Pas encore de compte ?{" "}
        <span style={styles.lien} onClick={onSwitch}>Créer un compte</span>
      </p>
    </div>
  );
}

// ---- Page principale ----
export default function CreerCompte({ mode = "inscription" }) {
  const [modeActuel, setModeActuel] = useState(mode);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.illustration}>
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80"
            alt="Pharmacie illustration"
            style={styles.illustrationImg}
          />
        </div>
        {modeActuel === "inscription" ? (
          <FormulaireInscription onSwitch={() => setModeActuel("connexion")} />
        ) : (
          <FormulaireConnexion onSwitch={() => setModeActuel("inscription")} />
        )}
      </div>
    </div>
  );
}