import { Show } from "solid-js"
import type { JSX } from "solid-js/jsx-runtime"

import styles from "./header.module.css"

export default (props: {
    children?: JSX.Element
    show_information?: boolean,
    title?: string
    toggle_fullscreen?: boolean
}) => {
    
    return (
        <div class={styles.Header}>
            <Show when={props.title}>
                <p class={styles.Title}>{props.title}</p>
            </Show>
            { props.children }
        </div>
    )
}