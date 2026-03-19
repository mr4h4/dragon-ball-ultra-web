import type { Manga } from "../types/manga";
import mangasData from "../data/manga.json";

const mangas: Manga[] = mangasData;

const MangaList = () => {
  return (
    <section id="manga" className="manga-section">
      <h2>Tomos Disponibles</h2>

      <div className="manga-grid">
        {mangas.map((manga, index) => (
          <a
            key={index}
            href={manga.file}
            target="_blank"
            rel="noopener noreferrer"
            className="manga-card"
          >
            <div className="card-content">
              <h3>{manga.title}</h3>
              <span>Leer ahora →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MangaList;