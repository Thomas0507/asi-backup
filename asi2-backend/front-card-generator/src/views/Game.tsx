import { socket } from "../socket";
import { useState } from "react";
export default function Game() {
  socket.connect();
  const [gameSession] = useState({
    player1Name: "player-1",
    player2Name: "player-2",
    player1Cards: [
      {
        name: "card-1",
        attack: 10,
        defense: 5,
        image:
          "https://i.etsystatic.com/48925405/r/il/fdff31/5706371804/il_1140xN.5706371804_f3es.jpg",
      },
      {
        name: "card-2",
        attack: 12,
        defense: 3,
        image:
          "https://i.etsystatic.com/48925405/r/il/fdff31/5706371804/il_1140xN.5706371804_f3es.jpg",
      },
      ,
      {
        name: "card-3",
        attack: 5,
        defense: 15,
        image:
          "https://i.etsystatic.com/48925405/r/il/fdff31/5706371804/il_1140xN.5706371804_f3es.jpg",
      },
    ],
    player2Cards: [
      {
        name: "card-4",
        attack: 10,
        defense: 5,
        image:
          "https://i.etsystatic.com/48925405/r/il/fdff31/5706371804/il_1140xN.5706371804_f3es.jpg",
      },
      {
        name: "card-5",
        attack: 12,
        defense: 3,
        image:
          "https://i.etsystatic.com/48925405/r/il/fdff31/5706371804/il_1140xN.5706371804_f3es.jpg",
      },
      ,
      {
        name: "card-6",
        attack: 5,
        defense: 15,
        image:
          "https://i.etsystatic.com/48925405/r/il/fdff31/5706371804/il_1140xN.5706371804_f3es.jpg",
      },
    ],
  });

  const rows = gameSession.player1Cards.map((card, i) => (
    <div key={i} className="game-card-container">
      <div className="game-title-wrapper">{card?.name}</div>
      <div className="game-image-wrapper">
        <img
          className="game-image"
          src={card?.image}
          width="400px"
          height="400px"
          alt={card?.name}
        ></img>
      </div>
      <div className="game-image-wrapper"></div>
      <div className="game-pv-wrapper">PV</div>
      <div className="game-stat-wrapper">
        <div>{card?.attack} ATK</div>
        <div>{card?.defense} DEF</div>
      </div>
    </div>
  ));

  return (
    <div
      className="game-wrapper"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        backgroundColor: "lightgrey",
        padding: "2em",
      }}
    >
      {rows}
    </div>
  );
}
