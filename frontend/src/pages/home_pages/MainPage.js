import React from "react";
const MainPage = () => {
  return (
    <div>
      MainPage
      <header>
        <div id="logo">LOGO</div>
        <div id="search">BARRE DE RECHERCHE</div>
        <div id="connect">
          <a href="C:\Users\zhaam\Desktop\TechnoWeb\TME2\index.html">
            CONNECTEZ-VOUS
          </a>
        </div>
      </header>
      <main>
        <aside> ZONE STATISTIQUE</aside>
        <section>
          <div id="commentaire">ZONE NOUVEAU COMMENTAIRE</div>

          <div id="liste_commentaire">
            LISTE DE COMMENTAIRE
            <ul>
              <li>Commentaire 1 </li>
              <li>Commentaire 2 </li>
              <li>Commentaire 3 </li>
              <li>Commentaire 4 </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
