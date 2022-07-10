import React, { useState, useEffect } from "react";
function Card({ portada, nombre }) {
  return (
    <figure>
      <img src={portada} alt={nombre} />
      <figcaption>{nombre}</figcaption>
    </figure>
  );
}
export default function Cards() {
  const [infoCard, setInfoCard] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const Morty = async () => {
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const json = await response.json();

    setInfoCard(json.results);
  };
  useEffect(() => {
    Morty();
  }, []);

  const handleClick = () => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setUrl(json.info.next);
      });
  };

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        addMoreItems(json.results);
      });
    function addMoreItems(newInfo) {
      // console.log(newInfo);
      // console.log(typeof infoCard);
      let varAux = [...infoCard];
      newInfo.forEach(element => {
        varAux.push(element);
      });

      setInfoCard(varAux);
    }
  }, [url]);

  return (
    <>
      <main className="main">
        <div className="cardsContainer">
          {infoCard.map(el => (
            <Card key={el.id} nombre={el.name} portada={el.image} />
          ))}
        </div>
        <button className="load-more" onClick={e => handleClick()}>
          Load More
        </button>
      </main>
    </>
  );
}
