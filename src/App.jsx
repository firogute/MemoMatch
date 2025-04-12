import { useState } from "react";
import shuffle from "./utitlities/shuffle";

function App() {
  const [cards, setCards] = useState(shuffle);
  return (
    <>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
          return (
            <Card key={id} image={image} selected={false} onclick={() => {}} />
          );
        })}
      </div>
    </>
  );
}

export default App;
