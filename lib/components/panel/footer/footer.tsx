import type { JSX } from "solid-js/jsx-runtime"

import styles from "./footer.module.css"


export default (props: {
    children?: JSX.Element
}) => {
    return (
        <div class={styles.Footer}>
            { props.children }
        </div>
    )
}