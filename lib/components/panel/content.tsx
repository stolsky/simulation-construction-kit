import type { JSX } from "solid-js/jsx-runtime"

import styles from "./panel.module.css"

export default (props: {
    width: number,
    height: number,
    children: JSX.Element
}) => {
    return (
        <div class={styles.Content} style={{ width: `${props.width}px`, height: `${props.height}px` }}>
            { props.children }
        </div>
    )
}