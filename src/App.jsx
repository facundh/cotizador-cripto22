import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import ImagenCripto from "./img/imagen-criptos.png";

import Formulario from "./components/Formulario";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 500px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
  border-radius: 5px;
  height: 400px;
`;

const Heading = styled.h1`
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 35px;
  ::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #40d3de;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});

  useEffect(()=> {
    if(Object.keys(monedas).length > 0){
      const {moneda, criptomoneda} = monedas;

      const cotizarMonedas = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setCotizacion(resultado.DISPLAY[criptomoneda][moneda]);
      }
      cotizarMonedas();
    }
  },[monedas])

  return (
    <Container>
      <Imagen src={ImagenCripto} alt="imagen criptomonedas" />

      <div>
        <Heading> Cotizador de Criptomonedas React JS </Heading>
        <Formulario setMonedas={setMonedas} />
      </div>
    </Container>
  );
}

export default App;
