import { Show } from "solid-js"
import type { JSX } from "solid-js/jsx-runtime"


export default (props: {
    title?: string,
    children?: JSX.Element
}) => {
    
    return (
        <div class="Header">
            <Show when={props.title}>
                <p>{props.title}</p>
            </Show>
            { props.children }
        </div>
    )
}