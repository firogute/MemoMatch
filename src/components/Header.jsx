import React, { useEffect } from "react";

const Header = ({ handleNewGame, wins }) => {
  useEffect(() => {
    document.title = `${wins} wins`;
  }, [wins]);
  return (
    <header className="header">
      <h4>{wins}</h4>
      <h3>Memory Game</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default Header;
