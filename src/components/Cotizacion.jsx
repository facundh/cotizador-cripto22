import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: black;
  background-color: #43aeb6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: -4px 5px 15px 3px #000000;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  
`;

const Imagen = styled.img`
    display: block;
    width: 200px;
    height: 200px;
`
const Texto = styled.p`
  font-size: 15px;
  color: black;

  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  }
`;

const Cotizacion = ({ cotizacion }) => {
  const { PRICE, LASTUPDATE, HIGHDAY, CHANGEPCT24HOUR, IMAGEURL } = cotizacion;

  return (
    <Contenedor>
        <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt='Imagen cripto'/>
        <div>

      <Precio>
        Precio actual: <span>{PRICE}</span>{" "}
      </Precio>
      <Texto>
        Precio mas alto del día : <span>{HIGHDAY}</span>{" "}
      </Texto>
      <Texto>
        Variación ultimas 24hs: <span> {CHANGEPCT24HOUR} </span>{" "}
      </Texto>
      <Texto>
        Ultima actualización: <span>{LASTUPDATE}</span>
      </Texto>
        </div>
    </Contenedor>
  );
};

export default Cotizacion;
