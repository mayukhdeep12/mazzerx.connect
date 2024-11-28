import { memo } from 'react';

import styles from './Landing.module.scss';

const Home = memo(function Home() {
  return (
    <section id='home' className={styles.home}>
      <h1>
      Framing the
        <span>future of</span>
        <span>
          <span>digital</span>
          innovation
        </span>
      </h1>
      <p>
      From cutting-edge AI to immersive XR and dynamic web solutions.
      </p>
    </section>
  );
});

export default Home;
