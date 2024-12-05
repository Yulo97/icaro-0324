import axios from "axios";

const URL = "https://rickandmortyapi.com/api/character";

// 1 forma FETCH
const consultarAPI1 = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

// 2 forma FETCH
const consultarAPI2 = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  console.log(data);
};

// 3 forma AXIOS
const consultaAPI3 = async () => {
  const response = await axios.get(URL);

  console.log(response.data);
};
