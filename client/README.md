# Birdy-IN017

Dans le cadre de l'UE Technologies du Web, nous allons coder un réseau social similaire à twitter.
Design Figma :
https://www.figma.com/file/Uzti26XveeaxX0jSOI0cM9/Twitter?node-id=67%3A5&t=ARLekatTPFpHCrYN-0

<h1> Architecture de l'application : </h1>

<h3> Structure </h3>

```
Client/
├──src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│       ├── SideBar.js
│       ├── Feed.js
│       ├── Widget.js
│   ├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
├── utils/
│   ├── api.js
└── styles/
    ├── App.css

Serveur/
├──
```

<h3>Langage utilisé </h3>

<u>Côté client </u>

• Présentation graphique
→ HTML, CSS, Javascript/React JS

• Communication client - serveur
→ React JS (librairie axios)

<u>Côté serveur </u>

• Serveur Web
→ Node

• Language développement côté serveur
→ Nodejs (javascript)

• Bases de Données
→ SQLite (similaire à MySQL/Oracle/. . .), NedB (basé sur MongoDB)

const { refreshUserData } = useContext(AuthContext);

useEffect(() => {
refreshUserData();
}, [refreshUserData]);
