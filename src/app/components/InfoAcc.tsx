"use client";
import React, { useState } from "react";
import styles from "../styles/InfoAcc.module.sass";
import Accordeon from "./Accordeon";

type Props = {};

export const InfoAcc = (props: Props) => {
    const isActive = false;

    const [open, setOpen] = useState(isActive);
    const [openTwo, setOpenTwo] = useState(isActive);

    return (
        <section className={styles.infoacc}>
            <h2 className={styles.infoacc__title}>Какая-то инфа 2.0</h2>
            <div className={styles.infoacc__accordeones}>
                <Accordeon
                    setOpen={setOpen}
                    subtitle="fjwauigywfahusednigkholfbjivhucsbyfnjg"
                    title="заголовок"
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt accusamus veritatis assumenda quae, tenetur sed corrupti maiores corporis qui harum eius fugit quasi quos repudiandae nemo quas dolorem itaque reiciendis.
                Ipsa tenetur repellendus, quisquam sit aperiam iusto illum vero nam sapiente natus perspiciatis enim, pariatur inventore incidunt eum rem nulla magni obcaecati. Mollitia commodi ipsam voluptas, perspiciatis optio corrupti cum?"
                    isActive={isActive}
                    open={open}
                />
                <Accordeon
                    setOpen={setOpenTwo}
                    subtitle="fjwauigywfahusednigkholfbjivhucsbyfnjgfwasedrgthyjkilhgfbvdcsgrhjmk,wfasedrgtyhjjjjftdrsefergtyjhu"
                    title="заголовок 2"
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt accusamus veritatis assumenda quae, tenetur sed corrupti maioreem nulla magni obcaecati. Mollitia commodi ipsam voluptas, perspiciatis optio corrupti cum?"
                    isActive={isActive}
                    open={openTwo}
                />
            </div>
        </section>
    );
};
