const shuffle = () => {
  const assets = [
    { image: "/assets/css.png" },
    { image: "/assets/html5.png" },
    { image: "/assets/react.png" },
    { image: "/assets/node.png" },
    { image: "/assets/ts.png" },
    { image: "/assets/firebase.png" },
    { image: "/assets/dart.png" },
    { image: "/assets/jsx.png" },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
