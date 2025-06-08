import type { JSX } from "solid-js/jsx-runtime"

import styles from "./overlay.module.css"


export default (props: {
    children: JSX.Element
    background_color?: string,
    backdrop_filter?: string,
    drag_and_drop?: boolean
}) => {
    const drag = props.drag_and_drop || false
    return (
        <div
            class={styles.Overlay}
            style={{
                "background-color": props.background_color || "transparent",
                "backdrop-filter": props.backdrop_filter || "none"
            }}
        >
            { props.children }
        </div>
    )
}