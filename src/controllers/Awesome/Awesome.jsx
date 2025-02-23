import React from 'react';
import styles from './Awesome.module.scss';

const Awesome = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How it works</h1>
      <div className={styles.steps}>
        <div className={styles.step}>
          <img src="https://images.vexels.com/media/users/3/136294/isolated/preview/4172fc9833fe18b5f8669b148713a189-link-icon.png?w=360" alt="Step 1" className={styles.logo} />
          <p>We give you a link (postable.com/yourname)</p>
        </div>
        <div className={styles.step}>
          <img src="https://cdn-icons-png.freepik.com/512/7878/7878341.png" alt="Step 2" className={styles.logo} />
          <p>You send out the link</p>
        </div>
        <div className={styles.step}>
          <img src="https://cdn-icons-png.freepik.com/512/4838/4838651.png" alt="Step 3" className={styles.logo} />
          <p>They fill out a form</p>
        </div>
        <div className={styles.step}>
          <img src="https://static-00.iconduck.com/assets.00/share-link-icon-2048x2048-x0ndxcea.png" alt="Step 4" className={styles.logo} />
          <p>A unique shareable link</p>
        </div>
        <div className={styles.step}>
          <img src="https://img.clipart-library.com/2/clip-friendship-symbols/clip-friendship-symbols-17.jpg" alt="Step 5" className={styles.logo} />
          <p>Email the link to your friends and loved ones</p>
        </div>
        <div className={styles.step}>
          <img src="https://cdn-icons-png.flaticon.com/512/548/548260.png" alt="Step 6" className={styles.logo} />
          <p>They click it and add their info into your address book</p>
        </div>
      </div>
    </div>
  );
};

export default Awesome;