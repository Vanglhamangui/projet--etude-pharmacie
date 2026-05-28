import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
import doliprane from "./assets/comp3doli.jpg"
import cotrimoxazole from "./assets/comp1co.jpg"
import metronidazole from "./assets/comp2metro.jpg"
import flagyl from "./assets/flagil.jpg"
import dexacure from "./assets/dexa.jpg"
import smecta from "./assets/smecta.jpg"
import medik55 from "./assets/medik.jpg"
import humex from "./assets/humex.jpg"
import testgrossesse from "./assets/test.jpg"
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
    height: "280px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
  },
  heroImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.55)",
  },
  heroTitle: {
    position: "relative",
    zIndex: 2,
    fontSize: "2rem",
    fontWeight: "900",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "0 3px 16px rgba(0,0,0,0.4)",
    fontFamily: "'Georgia', serif",
    textAlign: "center",
    margin: 0,
  },
  searchBar: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    width: "60%",
    maxWidth: "600px",
    borderRadius: "4px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  searchInput: {
    flex: 1,
    padding: "14px 20px",
    fontSize: "15px",
    border: "none",
    outline: "none",
    fontFamily: "'Trebuchet MS', sans-serif",
  },
  searchBtn: {
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    padding: "14px 28px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    fontFamily: "'Trebuchet MS', sans-serif",
  },

  // ---- GRILLE MEDICAMENTS ----
  section: {
    padding: "40px 60px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "1.6rem",
    fontWeight: "800",
    color: "#111",
    textAlign: "center",
    marginBottom: "32px",
    fontFamily: "'Georgia', serif",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  cardImage: {
    width: "100%",
    height: "180px",
    objectFit: "contain",
    backgroundColor: "#e8e8e8",
    padding: "16px",
  },
  cardBody: {
    padding: "12px 16px 16px",
  },
  cardName: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "6px",
    fontFamily: "'Trebuchet MS', sans-serif",
    lineHeight: "1.4",
  },
  cardPrice: {
    fontSize: "15px",
    fontWeight: "800",
    color: "#111",
    marginBottom: "6px",
  },
  stars: {
    fontSize: "18px",
    color: "#f39c12",
  },

  // ---- CATEGORIES ----
  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
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

// ---- Données médicaments ----
const medicaments = [
  {
    id: 1,
    nom: "Doliprane 1000mg",
    prix: "2000F.CFA",
    etoiles: 3,
    image: doliprane,
  },
  {
    id: 2,
    nom: "Co-trimoxazole\nTablets BP 480 mg",
    prix: "2000F.CFA",
    etoiles: 0,
    image: cotrimoxazole,
  },
  {
    id: 3,
    nom: "Metronidazole\nTablets 400mg",
    prix: "2000F.CFA",
    etoiles: 0,
    image: metronidazole,
  },
  {
    id: 4,
    nom: "Flagyl\nTablets 400mg",
    prix: "2000F.CFA",
    etoiles: 0,
    image: flagyl,
  },
  {
    id: 5,
    nom: "Dexacure\nTablets BP 1mg",
    prix: "2000F.CFA",
    etoiles: 0,
    image: dexacure,
  },
  {
    id: 6,
    nom: "Smecta",
    prix: "2000F.CFA",
    etoiles: 0,
    image: smecta,
  },
];

const categories = [
  { id: 1, nom: "Smac\nTablets", prix: "2000F.CFA", image: smecta },
  { id: 2, nom: "Medik-55\nTablets", prix: "2000F.CFA", image: medik55 },
  { id: 3, nom: "Humex", prix: "2000F.CFA", image: humex },
  { id: 4, nom: "Test de grossesse", prix: "2000F.CFA", image: testgrossesse },
];


// ---- Composant Hero avec recherche ----
function Hero({ recherche, setRecherche }) {
  return (
    <section style={styles.hero}>
      <img
        src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=1600&q=80"
        alt="Médicaments"
        style={styles.heroImage}
      />
      <h1 style={styles.heroTitle}>Retrouvez vos médicaments ici</h1>
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Rechercher votre médicament"
          style={styles.searchInput}
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
        <button style={styles.searchBtn}>rechercher</button>
      </div>
    </section>
  );
}

// ---- Composant Carte Médicament ----
function CarteMediament({ med }) {
  const [hovered, setHovered] = useState(false);
  const [showCommande, setShowCommande] = useState(false);

  const renderEtoiles = (nb) => "★".repeat(nb) + "☆".repeat(5 - nb);

  return (
    <>
      {/* Carte médicament */}
      <div
        style={{
          ...styles.card,
          transform: hovered ? "translateY(-4px)" : "none",
          boxShadow: hovered ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
          position: "relative",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={med.image} alt={med.nom} style={styles.cardImage} />
        <div style={styles.cardBody}>
          <div style={styles.cardName}>{med.nom}</div>
          <div style={styles.cardPrice}>{med.prix}</div>
          {med.etoiles > 0 && (
            <div style={styles.stars}>{renderEtoiles(med.etoiles)}</div>
          )}
        </div>

        {/* Popup "Commander" au survol */}
        {hovered && (
          <div style={{
            position: "absolute",
            bottom: "20px",
            left: "70%",
            transform: "translateX(-50%)",
            backgroundColor: "#2ecc40",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(46,204,64,0.4)",
            zIndex: 10,
          }}
            onClick={() => setShowCommande(true)}
          >
            Commander
          </div>
        )}
      </div>

      {/* Modal détails commande */}
      {showCommande && (
        <div style={{
          position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999,
        }}
          onClick={() => setShowCommande(false)}
        >
          <div style={{
            backgroundColor: "#fff", borderRadius: "16px", padding: "36px",
            maxWidth: "420px", width: "90%", boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img src={med.image} alt={med.nom} style={{
              width: "100%", height: "180px", objectFit: "contain",
              backgroundColor: "#f5f5f5", borderRadius: "10px", marginBottom: "20px",
            }} />

            {/* Infos */}
            <h2 style={{ fontSize: "1.3rem", fontWeight: "900", marginBottom: "16px", fontFamily: "'Georgia', serif" }}>
              {med.nom}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
                <span style={{ color: "#888", fontSize: "14px" }}>Prix</span>
                <span style={{ fontWeight: "800", color: "#2ecc40", fontSize: "15px" }}>{med.prix}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
                <span style={{ color: "#888", fontSize: "14px" }}>Catégorie</span>
                <span style={{ fontWeight: "600", fontSize: "14px" }}>{med.categorie || "Médicament"}</span>
              </div>
              {med.etoiles > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
                  <span style={{ color: "#888", fontSize: "14px" }}>Évaluation</span>
                  <span style={{ color: "#f39c12", fontSize: "16px" }}>{"★".repeat(med.etoiles)}{"☆".repeat(5 - med.etoiles)}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
                <span style={{ color: "#888", fontSize: "14px" }}>Disponibilité</span>
                <span style={{ fontWeight: "600", color: "#2ecc40", fontSize: "14px" }}>✅ En stock</span>
              </div>
            </div>

            {/* Boutons */}
            <button style={{
              width: "100%", padding: "14px", backgroundColor: "#2ecc40",
              color: "#fff", border: "none", borderRadius: "10px",
              fontSize: "16px", fontWeight: "800", cursor: "pointer", marginBottom: "10px",
            }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#27ae60")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#2ecc40")}
            >
              🛒 Confirmer la commande
            </button>
            <button style={{
              width: "100%", padding: "12px", backgroundColor: "#f5f5f5",
              color: "#555", border: "none", borderRadius: "10px",
              fontSize: "14px", fontWeight: "700", cursor: "pointer",
            }}
              onClick={() => setShowCommande(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
// ---- Composant Footer ----
function Footer() {
  const links = ["Accueil", "A propos", "Medicaments", "Contact"];
  const paths = ["/", "/apropos", "/medicaments", "/contact"];
  return (
    <footer style={styles.footer}>
      <div>
        <div style={styles.footerTitle}>Liens</div>
        {links.map((link, i) => (
          <Link key={link} to={paths[i]} style={styles.footerLink}>{link}</Link>
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

// ---- Page principale Médicaments ----
export default function Medicaments() {
  const [recherche, setRecherche] = useState("");

  const medicamentsFiltres = medicaments.filter((m) =>
    m.nom.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "'Trebuchet MS', sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <Hero recherche={recherche} setRecherche={setRecherche} />

      {/* Grille médicaments */}
      <div style={styles.section}>
        <div style={styles.grid}>
          {medicamentsFiltres.map((med) => (
            <CarteMediament key={med.id} med={med} />
          ))}
        </div>
      </div>

      {/* Catégories populaires */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Catégories populaires</h2>
        <div style={styles.categoriesGrid}>
          {categories.map((cat) => (
            <CarteMediament key={cat.id} med={cat} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}