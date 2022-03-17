import { useState, useEffect } from "react";
import Body from "./components/Body";

export default function App() {
  const [currentURL, setCurrentURL] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [ID, SETID] = useState(1);

  const handleData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const nexturl = data.next;
    const prevurl = data.previous;

    if (nexturl) {
      setNextURL(nexturl);
    }

    if (prevurl) {
      setPrevURL(prevurl);
    }

    setPokemons(data.results);
  };

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/ability/?offset=0&limit=20";
    setCurrentURL(URL);
    handleData(URL);
  }, []);

  useEffect(() => {
    handleData(currentURL);
  }, [currentURL]);

  const handleNext = () => {
    getID(nextURL);
    setCurrentURL(nextURL);
  };

  const handlePrev = () => {
    getID(prevURL);
    setCurrentURL(prevURL);
  };

  const getID = (url) => {
    const temp_data =
      url !== null
        ? url.split("offset")[1].split("=")[1].split("&")[0] / 20
        : 1;
    SETID(temp_data + 1);
  };

  return (
    <div className="container my-3">
      <h1>Pokemon App</h1>
      <Body
        pokemons={pokemons}
        handleNext={handleNext}
        handlePrev={handlePrev}
        id={ID}
      />
    </div>
  );
}
