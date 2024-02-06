import React, {useCallback, useState} from 'react';
import styles from "./Accordion.module.css";
import AccordionItem from "../accordionItem/AccordionItem";

const Accordion = ({ questions }) => {
    const [openedItemId, setOpenedItemId] = useState(null);

    const handleOpenedItem = useCallback((id) => {
        setOpenedItemId(prevId => prevId === id ? null : id);
    }, []);

    return (
        <div>
            <div className={styles.header}>Frequently Asked Questions</div>
            <div className={styles.accordion}>
                {
                    questions.map(question =>
                        <AccordionItem
                            key={question.id}
                            {...question}
                            isOpened={openedItemId === question.id}
                            setOpenedItem={handleOpenedItem}
                        />)
                }
            </div>
        </div>
    );
}

export default Accordion;
