import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
//import Navbar from "./Navbar";

// ---- DONNÉES INITIALES ----
const donneesInitiales = [
  { id: 1, nom: "Doliprane 1000mg", categorie: "Analgésiques", code: "DOL001", quantite: 50, prix: 2000, expiration: "2026-12-01", stockMin: 10 },
  { id: 2, nom: "Co-trimoxazole 480mg", categorie: "Antibiotiques", code: "COT002", quantite: 8, prix: 2000, expiration: "2025-06-15", stockMin: 10 },
  { id: 3, nom: "Metronidazole 400mg", categorie: "Antibiotiques", code: "MET003", quantite: 30, prix: 2000, expiration: "2026-08-20", stockMin: 10 },
  { id: 4, nom: "Flagyl 400mg", categorie: "Antipaludéens", code: "FLA004", quantite: 5, prix: 2000, expiration: "2025-05-10", stockMin: 10 },
  { id: 5, nom: "Dexacure 1mg", categorie: "Analgésiques", code: "DEX005", quantite: 20, prix: 2000, expiration: "2027-01-30", stockMin: 10 },
  { id: 6, nom: "Smecta", categorie: "Vitamines", code: "SME006", quantite: 15, prix: 2000, expiration: "2026-03-25", stockMin: 10 },
  { id: 7, nom: "Humex", categorie: "Analgésiques", code: "HUM007", quantite: 3, prix: 2000, expiration: "2025-04-01", stockMin: 10 },
  { id: 8, nom: "Medik-55", categorie: "Antipaludéens", code: "MED008", quantite: 25, prix: 2000, expiration: "2026-11-15", stockMin: 10 },
];

const categories = ["Tous", "Analgésiques", "Antibiotiques", "Antipaludéens", "Vitamines", "Stock bas", "Expirés"];

const styles = {
  page: { minHeight: "100vh", backgroundColor: "#f8fafb", fontFamily: "'Trebuchet MS', sans-serif" },

  // ---- NAVBAR ----
  navbar: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "14px 40px", backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 100,
  },
  navLogo: { fontSize: "20px", fontWeight: "900", color: "#1a6e2e", fontFamily: "'Georgia', serif", textDecoration: "none" },
  navLogoQuartier: { color: "#2ecc40", fontStyle: "italic" },
  navLinks: { display: "flex", gap: "6px", listStyle: "none", margin: 0, padding: 0 },
  navBtn: {
    display: "flex", alignItems: "center", gap: "6px",
    padding: "8px 14px", borderRadius: "8px", border: "none",
    backgroundColor: "transparent", cursor: "pointer", fontSize: "14px",
    fontWeight: "600", color: "#333", transition: "background-color 0.2s",
  },
  navBtnActive: { backgroundColor: "#e8f5e9", color: "#1a6e2e" },
  navRight: { display: "flex", gap: "10px", alignItems: "center" },
  btnAide: {
    padding: "8px 18px", borderRadius: "8px", border: "1.5px solid #ddd",
    backgroundColor: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: "600", color: "#333",
  },
  btnConnexion: {
    display: "flex", alignItems: "center", gap: "6px",
    padding: "8px 18px", borderRadius: "8px", border: "none",
    backgroundColor: "#2ecc40", color: "#fff", cursor: "pointer",
    fontSize: "14px", fontWeight: "700",
  },

  // ---- CONTENU ----
  content: { maxWidth: "1100px", margin: "40px auto", padding: "0 20px" },

  // ---- CARTE ----
  card: {
    backgroundColor: "#fff", borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)", padding: "32px", marginBottom: "24px",
  },
  cardTitle: { fontSize: "18px", fontWeight: "800", color: "#111", marginBottom: "6px" },
  cardSubtitle: { fontSize: "14px", color: "#888", marginBottom: "20px" },

  // ---- RECHERCHE ----
  searchRow: { display: "flex", gap: "12px", marginBottom: "16px" },
  searchInput: {
    flex: 1, padding: "14px 20px", fontSize: "15px", border: "1.5px solid #e0e0e0",
    borderRadius: "10px", outline: "none", fontFamily: "'Trebuchet MS', sans-serif",
  },
  btnChercher: {
    display: "flex", alignItems: "center", gap: "8px",
    padding: "14px 24px", backgroundColor: "#2ecc40", color: "#fff",
    border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: "700", cursor: "pointer",
  },
  filtres: { display: "flex", gap: "8px", flexWrap: "wrap" },
  filtre: {
    padding: "6px 16px", borderRadius: "20px", border: "1.5px solid #ddd",
    backgroundColor: "#fff", cursor: "pointer", fontSize: "13px", fontWeight: "600", color: "#555",
    transition: "all 0.2s",
  },
  filtreActif: { backgroundColor: "#2ecc40", color: "#fff", border: "1.5px solid #2ecc40" },

  // ---- TABLEAU ----
  table: { width: "100%", borderCollapse: "collapse", marginTop: "16px" },
  th: {
    padding: "12px 16px", textAlign: "left", fontSize: "13px",
    fontWeight: "700", color: "#888", borderBottom: "2px solid #f0f0f0",
    textTransform: "uppercase", letterSpacing: "0.5px",
  },
  td: { padding: "14px 16px", fontSize: "14px", color: "#333", borderBottom: "1px solid #f5f5f5" },
  trHover: { backgroundColor: "#f9fffe" },
  badge: {
    padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700",
  },
  badgeOk: { backgroundColor: "#e8f5e9", color: "#1a6e2e" },
  badgeBas: { backgroundColor: "#fff3e0", color: "#e65100" },
  badgeExpire: { backgroundColor: "#fce4ec", color: "#c62828" },
  vide: { textAlign: "center", padding: "40px", color: "#aaa", fontSize: "15px" },

  // ---- FORMULAIRE AJOUTER/MODIFIER ----
  formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" },
  formInput: {
    width: "100%", padding: "12px 16px", fontSize: "14px",
    border: "1.5px solid #e0e0e0", borderRadius: "8px", outline: "none",
    fontFamily: "'Trebuchet MS', sans-serif", boxSizing: "border-box",
  },
  formSelect: {
    width: "100%", padding: "12px 16px", fontSize: "14px",
    border: "1.5px solid #e0e0e0", borderRadius: "8px", outline: "none",
    fontFamily: "'Trebuchet MS', sans-serif", boxSizing: "border-box",
    backgroundColor: "#fff",
  },
  btnSoumettre: {
    marginTop: "16px", padding: "12px 28px", backgroundColor: "#2ecc40",
    color: "#fff", border: "none", borderRadius: "8px", fontSize: "15px",
    fontWeight: "700", cursor: "pointer",
  },
  btnAnnuler: {
    marginTop: "16px", marginLeft: "12px", padding: "12px 28px",
    backgroundColor: "#f0f0f0", color: "#333", border: "none",
    borderRadius: "8px", fontSize: "15px", fontWeight: "700", cursor: "pointer",
  },
  message: {
    padding: "12px 20px", borderRadius: "8px", marginBottom: "16px",
    fontSize: "14px", fontWeight: "600",
  },
  messageSucces: { backgroundColor: "#e8f5e9", color: "#1a6e2e" },
  messageErreur: { backgroundColor: "#fce4ec", color: "#c62828" },

  // ---- STATS ----
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" },
  statCard: {
    backgroundColor: "#fff", borderRadius: "12px", padding: "20px 24px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "center",
  },
  statNombre: { fontSize: "2rem", fontWeight: "900", color: "#2ecc40" },
  statLabel: { fontSize: "13px", color: "#888", marginTop: "4px" },
};
function Navbar({ ongletActif, setOnglet }) {
  const onglets = [
    { label: "À propos", icon: " " },
    { label: "Ajouter", icon: " " },
    { label: "Modifier", icon: " " },
    { label: "Supprimer", icon: " " },
    { label: "Rechercher", icon: " " },
  ];

  return (
    <nav style={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="Logo" style={{ height: "45px" }} />
      </Link>
      <ul style={styles.navLinks}>
        {onglets.map((o) => (
          <li key={o.label}>
            <button
              style={{
                ...styles.navBtn,
                ...(ongletActif === o.label ? styles.navBtnActive : {}),
              }}
              onClick={() => setOnglet(o.label)}
            >
              {o.icon} {o.label}
            </button>
          </li>
        ))}
      </ul>
      <div style={styles.navRight}>
        <button style={styles.btnAide}>Aide</button>
        <Link to="/seconnecter" style={{ textDecoration: "none" }}>
          <button style={styles.btnConnexion}>Connexion</button>
        </Link>
      </div>
    </nav>
  );
}

// ---- Utilitaires ----
const estExpire = (date) => new Date(date) < new Date();
const estStockBas = (quantite, min) => quantite <= min;

// ---- Composant Stats ----
function Stats({ medicaments }) {
  const total = medicaments.length;
  const stockBas = medicaments.filter((m) => estStockBas(m.quantite, m.stockMin)).length;
  const expires = medicaments.filter((m) => estExpire(m.expiration)).length;
  const categories = [...new Set(medicaments.map((m) => m.categorie))].length;

  return (
    <div style={styles.statsGrid}>
      {[
        { nombre: total, label: "Total médicaments" },
        { nombre: categories, label: "Catégories" },
        { nombre: stockBas, label: "Stock bas" },
        { nombre: expires, label: "Expirés" },
      ].map((s) => (
        <div key={s.label} style={styles.statCard}>
          <div style={styles.statNombre}>{s.nombre}</div>
          <div style={styles.statLabel}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ---- Composant Tableau ----
function Tableau({ medicaments }) {
  const [hoveredRow, setHoveredRow] = useState(null);

  if (medicaments.length === 0) {
    return <div style={styles.vide}>Les résultats apparaîtront ici après votre recherche</div>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {["Code", "Nom", "Catégorie", "Quantité", "Prix", "Expiration", "Statut"].map((h) => (
            <th key={h} style={styles.th}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {medicaments.map((m) => {
          const expire = estExpire(m.expiration);
          const bas = estStockBas(m.quantite, m.stockMin);
          return (
            <tr
              key={m.id}
              style={hoveredRow === m.id ? styles.trHover : {}}
              onMouseEnter={() => setHoveredRow(m.id)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td style={styles.td}>{m.code}</td>
              <td style={{ ...styles.td, fontWeight: "600" }}>{m.nom}</td>
              <td style={styles.td}>{m.categorie}</td>
              <td style={styles.td}>{m.quantite}</td>
              <td style={styles.td}>{m.prix}F.CFA</td>
              <td style={styles.td}>{m.expiration}</td>
              <td style={styles.td}>
                <span style={{
                  ...styles.badge,
                  ...(expire ? styles.badgeExpire : bas ? styles.badgeBas : styles.badgeOk),
                }}>
                  {expire ? "Expiré" : bas ? "Stock bas" : "OK"}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// ---- Onglet Rechercher ----
function OngletRechercher({ medicaments }) {
  const [recherche, setRecherche] = useState("");
  const [filtreActif, setFiltreActif] = useState("Tous");
  const [resultats, setResultats] = useState([]);
  const [rechercheFaite, setRechercheFaite] = useState(false);

  const chercher = () => {
    let res = medicaments;
    if (filtreActif === "Stock bas") res = res.filter((m) => estStockBas(m.quantite, m.stockMin));
    else if (filtreActif === "Expirés") res = res.filter((m) => estExpire(m.expiration));
    else if (filtreActif !== "Tous") res = res.filter((m) => m.categorie === filtreActif);
    if (recherche) res = res.filter((m) =>
      m.nom.toLowerCase().includes(recherche.toLowerCase()) ||
      m.code.toLowerCase().includes(recherche.toLowerCase()) ||
      m.categorie.toLowerCase().includes(recherche.toLowerCase())
    );
    setResultats(res);
    setRechercheFaite(true);
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardTitle}>Rechercher un produit</div>
      <div style={styles.cardSubtitle}>Trouvez instantanément n'importe quel produit dans votre inventaire.</div>
      <div style={styles.searchRow}>
        <input
          type="text"
          placeholder="Rechercher par nom, catégorie, code…"
          style={styles.searchInput}
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && chercher()}
        />
        <button style={styles.btnChercher} onClick={chercher}>Chercher</button>
      </div>
      <div style={styles.filtres}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={{ ...styles.filtre, ...(filtreActif === cat ? styles.filtreActif : {}) }}
            onClick={() => setFiltreActif(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {rechercheFaite && <Tableau medicaments={resultats} />}
      {!rechercheFaite && <div style={styles.vide}>Les résultats apparaîtront ici après votre recherche</div>}
    </div>
  );
}

// ---- Onglet Ajouter ----
function OngletAjouter({ onAjouter }) {
  const [form, setForm] = useState({ nom: "", categorie: "Analgésiques", code: "", quantite: "", prix: "", expiration: "", stockMin: 10 });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.nom || !form.code || !form.quantite || !form.prix || !form.expiration) {
      setMessage({ type: "erreur", texte: "Veuillez remplir tous les champs !" });
      return;
    }
    onAjouter({ ...form, id: Date.now(), quantite: parseInt(form.quantite), prix: parseInt(form.prix), stockMin: parseInt(form.stockMin) });
    setMessage({ type: "succes", texte: "Médicament ajouté avec succès !" });
    setForm({ nom: "", categorie: "Analgésiques", code: "", quantite: "", prix: "", expiration: "", stockMin: 10 });
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardTitle}>Ajouter un médicament</div>
      <div style={styles.cardSubtitle}>Remplissez les informations du nouveau médicament.</div>
      {message && <div style={{ ...styles.message, ...(message.type === "succes" ? styles.messageSucces : styles.messageErreur) }}>{message.texte}</div>}
      <div style={styles.formGrid}>
        <input name="nom" placeholder="Nom du médicament" style={styles.formInput} value={form.nom} onChange={handleChange} />
        <input name="code" placeholder="Code (ex: DOL001)" style={styles.formInput} value={form.code} onChange={handleChange} />
        <select name="categorie" style={styles.formSelect} value={form.categorie} onChange={handleChange}>
          {["Analgésiques", "Antibiotiques", "Antipaludéens", "Vitamines"].map((c) => <option key={c}>{c}</option>)}
        </select>
        <input name="quantite" type="number" placeholder="Quantité" style={styles.formInput} value={form.quantite} onChange={handleChange} />
        <input name="prix" type="number" placeholder="Prix (F.CFA)" style={styles.formInput} value={form.prix} onChange={handleChange} />
        <input name="expiration" type="date" style={styles.formInput} value={form.expiration} onChange={handleChange} />
        <input name="stockMin" type="number" placeholder="Stock minimum" style={styles.formInput} value={form.stockMin} onChange={handleChange} />
      </div>
      <button style={styles.btnSoumettre} onClick={handleSubmit}>Ajouter</button>
    </div>
  );
}

// ---- Onglet Modifier ----
function OngletModifier({ medicaments, onModifier }) {
  const [recherche, setRecherche] = useState("");
  const [selectionne, setSelectionne] = useState(null);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState(null);

  const resultats = medicaments.filter((m) =>
    m.nom.toLowerCase().includes(recherche.toLowerCase()) || m.code.toLowerCase().includes(recherche.toLowerCase())
  );

  const selectionner = (m) => { setSelectionne(m); setForm({ ...m }); };
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    onModifier({ ...form, quantite: parseInt(form.quantite), prix: parseInt(form.prix) });
    setMessage({ type: "succes", texte: "Médicament modifié avec succès !" });
    setSelectionne(null);
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardTitle}>Modifier un médicament</div>
      <div style={styles.cardSubtitle}>Recherchez le médicament à modifier.</div>
      {message && <div style={{ ...styles.message, ...styles.messageSucces }}>{message.texte}</div>}
      <div style={styles.searchRow}>
        <input type="text" placeholder="Rechercher par nom ou code…" style={styles.searchInput} value={recherche} onChange={(e) => setRecherche(e.target.value)} />
      </div>
      {recherche && !selectionne && (
        <div style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}>
          {resultats.map((m) => (
            <div key={m.id} onClick={() => selectionner(m)} style={{ padding: "12px 16px", cursor: "pointer", borderBottom: "1px solid #f5f5f5", fontSize: "14px" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9fffe"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}
            >
              <strong>{m.nom}</strong> — {m.code} — {m.categorie}
            </div>
          ))}
        </div>
      )}
      {selectionne && (
        <>
          <div style={styles.formGrid}>
            <input name="nom" placeholder="Nom" style={styles.formInput} value={form.nom} onChange={handleChange} />
            <input name="code" placeholder="Code" style={styles.formInput} value={form.code} onChange={handleChange} />
            <select name="categorie" style={styles.formSelect} value={form.categorie} onChange={handleChange}>
              {["Analgésiques", "Antibiotiques", "Antipaludéens", "Vitamines"].map((c) => <option key={c}>{c}</option>)}
            </select>
            <input name="quantite" type="number" placeholder="Quantité" style={styles.formInput} value={form.quantite} onChange={handleChange} />
            <input name="prix" type="number" placeholder="Prix" style={styles.formInput} value={form.prix} onChange={handleChange} />
            <input name="expiration" type="date" style={styles.formInput} value={form.expiration} onChange={handleChange} />
          </div>
          <button style={styles.btnSoumettre} onClick={handleSubmit}>✏️ Sauvegarder</button>
          <button style={styles.btnAnnuler} onClick={() => setSelectionne(null)}>Annuler</button>
        </>
      )}
    </div>
  );
}

// ---- Onglet Supprimer ----
function OngletSupprimer({ medicaments, onSupprimer }) {
  const [recherche, setRecherche] = useState("");
  const [message, setMessage] = useState(null);

  const resultats = medicaments.filter((m) =>
    m.nom.toLowerCase().includes(recherche.toLowerCase()) || m.code.toLowerCase().includes(recherche.toLowerCase())
  );

  const handleSupprimer = (m) => {
    onSupprimer(m.id);
    setMessage({ texte: `✅ "${m.nom}" supprimé avec succès !` });
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardTitle}>Supprimer un médicament</div>
      <div style={styles.cardSubtitle}>Recherchez le médicament à supprimer.</div>
      {message && <div style={{ ...styles.message, ...styles.messageSucces }}>{message.texte}</div>}
      <div style={styles.searchRow}>
        <input type="text" placeholder="Rechercher par nom ou code…" style={styles.searchInput} value={recherche} onChange={(e) => setRecherche(e.target.value)} />
      </div>
      {recherche && (
        <div style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden", marginTop: "12px" }}>
          {resultats.map((m) => (
            <div key={m.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #f5f5f5", fontSize: "14px" }}>
              <span><strong>{m.nom}</strong> — {m.code} — Qté: {m.quantite}</span>
              <button onClick={() => handleSupprimer(m)} style={{ padding: "6px 16px", backgroundColor: "#fce4ec", color: "#c62828", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "700" }}>
                🗑️ Supprimer
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- Onglet À propos ----
function OngletAPropos({ medicaments }) {
  return (
    <>
      <Stats medicaments={medicaments} />
      <div style={styles.card}>
        <div style={styles.cardTitle}>📋 Inventaire complet</div>
        <div style={styles.cardSubtitle}>Liste de tous les médicaments en stock.</div>
        <Tableau medicaments={medicaments} />
      </div>
    </>
  );
}

// ---- Page principale Stock ----
export default function Stock() {
  const [medicaments, setMedicaments] = useState(donneesInitiales);
  const [onglet, setOnglet] = useState("À propos");

  const ajouter = (m) => setMedicaments([...medicaments, m]);
  const modifier = (m) => setMedicaments(medicaments.map((med) => med.id === m.id ? m : med));
  const supprimer = (id) => setMedicaments(medicaments.filter((m) => m.id !== id));

  return (
    <div style={styles.page}>
      <Navbar ongletActif={onglet} setOnglet={setOnglet} />
      <div style={styles.content}>
        {onglet === "À propos" && <OngletAPropos medicaments={medicaments} />}
        {onglet === "Ajouter" && <OngletAjouter onAjouter={ajouter} />}
        {onglet === "Modifier" && <OngletModifier medicaments={medicaments} onModifier={modifier} />}
        {onglet === "Supprimer" && <OngletSupprimer medicaments={medicaments} onSupprimer={supprimer} />}
        {onglet === "Rechercher" && <OngletRechercher medicaments={medicaments} />}
      </div>
    </div>
  );
}