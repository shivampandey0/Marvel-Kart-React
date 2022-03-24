import styles from "./Home.module.css";
import { Categories } from "./Categories";

export const Home = () => {
  return (
    <>
      <main className="m-auto">
        <section className={styles.home_hero}>
          <img
            src="https://marvel-kart.stdcdn.com/landing-page-bg.webp"
            alt="Comic Background"
            className="img-responsive"
          />
        </section>
        <section className="mx-8">
          <h3 className="txt-center my-4">Shop by Featured OG Avengers</h3>
          <div
            className={` ${styles.categories} flex-row flex-wrap justify-cntr gap-2`}
          >
            <Categories />
          </div>
        </section>
      </main>
    </>
  );
};
