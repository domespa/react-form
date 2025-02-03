import { useState } from "react";

function App() {
  const [articleName, setArticleName] = useState("");
  const [articlesList, setArticlesList] = useState([
    "Trump: Presto colpiremo economicamente l'Ue",
    `A Bruxelles vertice informale Ue per fare il punto sulla Difesa (e i dazi)`,
    `Scholz: "Pronti a rispondere ai dazi con i dazi"`,
  ]);

  const articleSubmit = (e) => {
    e.preventDefault();

    if (articlesList.includes(articleName)) {
      alert(`Articolo già presente`);
    } else {
      setArticlesList((currentState) => [...currentState, articleName]);
      setArticleName("");
    }
  };

  return (
    <>
      <div className="container">
        <h1>LISTA ARTICOLI</h1>
        <ul>
          {articlesList.map((article, id) => (
            <li key={id}>{article}</li>
          ))}
        </ul>
        <hr />
        <h1>Aggiungi Articolo</h1>
        <form onSubmit={articleSubmit}>
          <input
            type="text"
            value={articleName}
            onChange={(e) => setArticleName(e.target.value)}
          />
          <button type="submit">Invia</button>
        </form>
      </div>
    </>
  );
}

export default App;
