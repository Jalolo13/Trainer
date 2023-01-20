import React from "react";
import styles from "../styles/HomeInfo.module.sass";

type Props = {};

export const HomeInfoLeft = (props: Props) => {
    return (
        <section className={styles.homeinfo}>
            <div className={styles.homeinfo__img_left}></div>
            <div className={styles.homeinfo__inner}>
                <h4 className={styles.homeinfo__title}>Заголовок</h4>
                <p className={styles.homeinfo__text}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minima fuga alias officiis fugit eaque in autem est nobis
                    quis eligendi ipsam, possimus tenetur accusamus praesentium
                    ratione corporis nisi dolorem vitae hic a quidem velit
                    doloremque placeat dolorum? Provident vel in beatae velit
                    fugit fugiat repudiandae accusantium rerum, labore
                    recusandae quis ipsum voluptatem cum, esse iste earum iusto
                    architecto nostrum? Cupiditate quidem, ab ducimus qui
                    delectus quaerat libero placeat eum sit, aliquam dicta harum
                    facere distinctio beatae nisi corrupti, consectetur quod rem
                    atque. Laboriosam, odio corporis expedita soluta optio
                    reprehenderit neque. Quos quia perspiciatis nostrum
                    quisquam, explicabo accusantium vel necessitatibus aperiam
                    sit, ab ipsam nulla sapiente et mollitia vitae laboriosam
                    aliquam error minus velit quis quaerat maiores. Autem neque
                    laborum animi quam totam rerum ut vitae unde? Enim
                    voluptatibus explicabo assumenda vero nisi dolor tenetur
                    reprehenderit amet illum minima rerum quod voluptate, odit
                    ad fugiat velit voluptates maiores dolore eaque facilis.
                </p>
            </div>
        </section>
    );
};

export default HomeInfoLeft;
