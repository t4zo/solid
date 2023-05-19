import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, onMount } from 'solid-js';

function App() {
  const [location, setLocation] = createSignal({});

  onMount(async () => {
    const position = await getLocation();
    setLocation(position.coords);
  })

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <section class={styles.section}>
          <div>Latitude: {location().latitude}</div>
          <div>Longitude: {location().longitude}</div>
        </section>
      </header>
    </div>
  );
}

function getLocation() {
  if (navigator.geolocation) {
    return new Promise((req, res) => navigator.geolocation.getCurrentPosition(req, res));
  } else {
    throw new Error("Não foi possivel acessar sua localização")
  }
}

export default App;
