import React from "react";
import styles from "../styles/HeadInfo.module.sass";
type Props = {};

export const HeadInfo = (props: Props) => {
    return (
        <section className={styles.headinfo}>
            <div className={styles.headinfo__inner}>
                <h2 className={styles.headinfo__title}>Какая-то инфа</h2>
                <p className={styles.headinfo__text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam neque quae mollitia aperiam, alias voluptatum
                    delectus qui totam labore voluptate iste, at magnam et
                    fugiat numquam debitis quis commodi laborum! Quidem eos
                    vitae repellendus cumque repudiandae quis minima, iure est?
                    Mollitia aspernatur molestiae, culpa, ratione libero earum
                    vitae veniam accusantium laboriosam adipisci, modi
                    recusandae quibusdam officia fugiat facilis! Inventore,
                    fuga! Quae eius laborum ad commodi, praesentium rerum earum
                    sed nihil explicabo suscipit itaque veritatis assumenda
                    atque cum ab deleniti incidunt aut eveniet repellat?
                    Dolorum, quos! Eveniet corporis modi quod iure. Atque omnis
                    minima ipsam neque necessitatibus animi earum, molestiae
                    quod nihil hic minus esse eveniet quae odit eaque ducimus
                    veniam distinctio. Molestiae nam corrupti voluptatibus
                    velit, commodi quisquam placeat ullam! Vel laborum earum
                    amet unde quas harum delectus debitis dicta, soluta, vero
                    magni nihil ad? Eum excepturi, nulla necessitatibus nam
                    perspiciatis illum, inventore mollitia corporis quod commodi
                    nisi doloribus neque.
                </p>
            </div>
            <div className={styles.headinfo__img}></div>
        </section>
    );
};
