import styles from './post.module.css';
export const Header = () => {
  return (
    <section className={styles.main}>
          <div className="main-body">
              <div className="container">
                  <h1 className={styles.title}>
                      1-800 Flowers
                  </h1>
                  <h3 className={styles.subtitle}>
                    Post Item Search 
                  </h3>
              </div>
          </div>
      </section>
  );
};

