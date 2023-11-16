import  { useState } from 'react';

const Contador = () => {
  // Estado para almacenar el valor del contador
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default Contador;
