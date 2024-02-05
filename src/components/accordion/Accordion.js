import React, {useState} from 'react';
import styles from "./Accordion.module.css";
import AccordionItem from "../accordionItem/AccordionItem";

function Accordion({ questions }) {
    const [openedItemId, setOpenedItemId] = useState(null);

    function handleOpened(id) {
        setOpenedItemId(id === openedItemId ? null : id);
    }

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
                            setOpenedItem={handleOpened}
                        />)
                }
            </div>
        </div>
    );
}

export default Accordion;
