import React, {useEffect, useRef, useState} from "react";
import styles from "./AccordionItem.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

const AccordionItem = React.memo(({ id, title, content, isOpened, setOpenedItem }) => {

    console.log(id + " component");

    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpened ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpened]);

    return (
        <div className={styles.accordionItem}>
            <div className={styles.title} onClick={() => setOpenedItem(id)} style={{ marginBottom: `${isOpened ? 1 : 0}px` }}>
                <div>{title}</div>
                <div className={styles.iconBlock}>
                    <FontAwesomeIcon icon={faAngleDown}
                        className={`${styles.icon} ${isOpened && styles.rotate}`}
                    />
                </div>
            </div>
            <div className={`${styles.content}`} style={{ height: `${isOpened ? contentHeight + 40 : 0}px` }}>
                <div className={styles.inner} ref={contentRef} dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
});


export default AccordionItem;