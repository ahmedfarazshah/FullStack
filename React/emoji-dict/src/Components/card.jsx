import styles from "./card.module.css"


function EmojiCard(props){



    return(
        <dl className={styles.dictonary}>
           <dt>
            <span>{props.emoji}</span>
           </dt>
           <dt>
            <span>{props.name}</span>
           </dt>
           <dd>
            <span>{props.meaning}</span>
           </dd>
        </dl>


    )
}

export default EmojiCard