import { useState } from 'react'
import './App.css'

function App() {
  const datosGuardados = localStorage.getItem("tips");

  const [tips, setTips] = useState(
    datosGuardados ? JSON.parse(datosGuardados) : [
      {
        id: 1,
        tip: 'Establece metas claras y alcanzables para cada día.',
        votos: 0,
      },
      {
        id: 2,
        tip: 'Prioriza tus tareas utilizando la matriz de Eisenhower.',
        votos: 0,
      },
      {
        id: 3,
        tip: 'Utiliza la técnica Pomodoro para mantener la concentración.',
        votos: 0,
      },
      {
        id: 4,
        tip: 'Elimina distracciones, como las redes sociales, durante el trabajo.',
        votos: 0,
      },
      {
        id: 5,
        tip: 'Toma descansos regulares para recargar energías.',
        votos: 0,
      },
      {
        id: 6,
        tip: 'Organiza tu espacio de trabajo para mejorar la eficiencia.',
        votos: 0,
      },
      {
        id: 7,
        tip: 'Utiliza herramientas de gestión de tareas como Trello o Asana.',
        votos: 0,
      },
      {
        id: 8,
        tip: 'Aprende a delegar tareas cuando sea posible.',
        votos: 0,
      }
    ]);

  const [tipActual, setTipActual] = useState(0);

  const mostrarTipAleatorio = () => {
    let aleatorio = Math.floor(Math.random() * tips.length);
    while (aleatorio === tipActual) {
      aleatorio = Math.floor(Math.random() * tips.length);
    }
    setTipActual(aleatorio);
  };

  const votarTip = () => {
    const nuevosTips = [...tips];
    const tipSeleccionado = nuevosTips[tipActual];
    nuevosTips[tipActual] = {
      ...tipSeleccionado,
      votos: tipSeleccionado.votos + 1,
    };
    setTips(nuevosTips);
    localStorage.setItem("tips", JSON.stringify(nuevosTips));
  };

  const reiniciarVotos = () => {
    const nuevosTips = [...tips];
    for (let i = 0; i < nuevosTips.length; i++) {
      nuevosTips[i] = {
        ...nuevosTips[i],
        votos: 0
      };
    }
    setTips(nuevosTips);
    localStorage.setItem("tips", JSON.stringify(nuevosTips));
  };


  function Boton(props) {
    return (
      <button onClick={props.click}>
        {props.texto}
      </button>
    );
  }

  return (
    <>
      <h1>Tips de Productividad</h1>
      <p>{tips[tipActual].tip}</p>
      <p>Votos: {tips[tipActual].votos}</p>
      <Boton click={mostrarTipAleatorio} texto="Siguiente tip" />
      <Boton click={votarTip} texto="Votar este tip" />
      <Boton click={reiniciarVotos} texto="Reiniciar votos" />
    </>
  )
}

export default App