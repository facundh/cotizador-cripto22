import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectCurrents from "../hooks/useSelectCurrents";
import { currents } from "../data/current";
import Error from './Error'




const InputSubmit = styled.input`
  background-color: #35b0b9;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  text-transform: uppercase;
  margin-top: 20px;
  font-weight: 700;
  color: white;
  font-size: 20px;
  &:hover {
    background-color: #3b9ea5;
    transition: 1s ease-in-out;
    box-shadow: 11px 13px 14px 9px #000000;
    cursor: pointer;
  }
`;

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectCurrent] = useSelectCurrents(
    "Selecciona tu moneda",
    currents
  );
  const [criptomoneda, SelectCriptoMoneda] = useSelectCurrents(
    "Selecciona tu Criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const criptoArr = resultado.Data.map((cripto) => {
        const criptoOBJ = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return criptoOBJ;
      });
      setCriptos(criptoArr);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    
     if ([moneda, criptomoneda].includes("")) {
        setError(true);
        return;
     }

    setError(false);
    setMonedas(
        {moneda, criptomoneda}
    )
    
  
   
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
        
      <form onSubmit={handleSubmit}>
        <SelectCurrent />

        <SelectCriptoMoneda />

        <InputSubmit type="submit" value="cotizar" />
      </form>
    </>
  );
};

export default Formulario;
