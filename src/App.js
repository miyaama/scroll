import { useRef, useEffect } from "react";

import styles from "./App.module.scss";
import { imageData } from "./imageData";
import GalleryItem from "./components/GalleryItem";

const HORIZONTAL_SCROLL_SIDE = 10;

function App() {
  const galleryRef = useRef(null);

  useEffect(() => {
    document.addEventListener("wheel", customScroll, {
      passive: false,
    });

    return () =>
      document.removeEventListener("wheel", customScroll, {
        passive: false,
      });
  }, []);

  const customScroll = (e) => {
    let firstImg = document.getElementById(imageData[0]);

    const containerRect = galleryRef.current.getBoundingClientRect();

    const scrollWidth =
      galleryRef.current.scrollWidth - galleryRef.current.clientWidth;

    if (
      firstImg.getBoundingClientRect().x > -scrollWidth ||
      (containerRect.top === HORIZONTAL_SCROLL_SIDE && e.deltaY <= 0)
    ) {
      e.preventDefault();
      galleryRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <main className={styles.container}>
      <div ref={galleryRef} className={styles.galleryContainer}>
        {imageData.map((image) => (
          <GalleryItem key={image} url={image} />
        ))}
      </div>
      <div className={styles.textSection}>
        <h1>Cltre x 247</h1>
        <p>
          Culture Limited & 247st join forces to create a collection capsule
          that collects the values of both brands on a T-shirt and a bottle
          under the tagline "Keep Running, Don't Panic", making reference to the
          importance of the influence of sport on the education and the values
          of a person.
        </p>
      </div>
    </main>
  );
}

export default App;
