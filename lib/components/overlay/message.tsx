import type { JSX } from "solid-js/jsx-runtime"

import styles from "./message.module.css"


export default (props: {
    children: JSX.Element
}) => {
    return (
        <div class={styles.Message}>
            { props.children }
        </div>
    )
}