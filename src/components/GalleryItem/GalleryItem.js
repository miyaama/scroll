import styles from "./GalleryItem.module.scss";

function GalleryItem({ url }) {
  return (
    <div className={styles.container}>
      <img src={url} alt="gallery" id={url}></img>
    </div>
  );
}

export default GalleryItem;
