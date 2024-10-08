import styles from "./page.module.css";
import { Fragment } from "react";
import ImgSlider from "@/components/imgSlider/ImgSlider";
import Card from "@/components/cards/Card";
import { getData } from "./Data";

export default async function HomePage() {
  const data = await getData();

  return (
    <Fragment>
      <header>
        <ImgSlider />
      </header>
      <main className={styles.main}>
          <Card products={data.popular} title={"Ommabop"} />
      </main>
    </Fragment>
  );
}
