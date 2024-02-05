import {useEffect, useRef, useState} from "react";
import styles from "./AccordionItem.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function AccordionItem({ id, title, content, isOpened, setOpenedItem }) {

    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpened ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpened, content]);

    return (
        <div className={styles.accordionItem}>
            <div className={styles.title} onClick={() => setOpenedItem(id)}>
                <div>{title}</div>
                <div className={styles.iconBlock}>
                    <FontAwesomeIcon icon={faAngleDown}
                        className={`${styles.icon} ${isOpened && styles.rotate}`}
                    />
                </div>
            </div>
            <div className={`${styles.content}`} style={{ height: `${isOpened ? contentHeight + 40 : 0}px` }}>
                <div className={styles.inner} ref={contentRef}>{content}</div>
            </div>
        </div>
    );
}


export default AccordionItem;