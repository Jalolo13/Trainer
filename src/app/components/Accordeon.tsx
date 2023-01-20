"use client";

import React, { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import styles from "../styles/Accordeon.module.sass";

interface IAccordeonProps {
    title?: string;
    isActive: boolean;
    open: boolean;
    subtitle: string;
    setOpen: (prevState: any) => void;
    text: string;
}

const Accordeon: React.FC<IAccordeonProps> = ({
    title,
    isActive,
    subtitle,
    open,
    setOpen,
    text,
}) => {
    const handleAccordeon = () => {
        setOpen((prevState: boolean) => !prevState);
    };

    return (
        <div
            className={
                open
                    ? styles.accordeon__header + " " + styles.active
                    : styles.accordeon__header
            }
        >
            <h4 className={styles.accordeon__title}>{title}</h4>
            <p className={styles.accordeon__subtitle}>{subtitle}</p>
            <div className={styles.accordeon__open}>
                <span
                    className={styles.accordeon__continue}
                    onClick={handleAccordeon}
                >
                    Смотреть дальше..
                </span>
            </div>
            <SlideDown className={styles.accordeon__contentslide}>
                {open && (
                    <div
                        className={styles.accordeon__content}
                        onClick={() => setOpen(false)}
                    >
                        {text}
                    </div>
                )}
            </SlideDown>
        </div>
    );
};

export default Accordeon;
