import type { JSX } from "solid-js/jsx-runtime"

import styles from "./content.module.css"


export default (props: {
    width: number,
    height: number,
    children: JSX.Element
}) => {
    const { children, height, width } = props
    return (
        <div class={styles.Content} style={{ width: `${width}px`, height: `${height}px` }}>
            { children }
        </div>
    )
}