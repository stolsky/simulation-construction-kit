import { createSignal, Show } from "solid-js"

import Header from "./header/header"
import Content from "./content/content"
import Footer from "./footer/footer"

import { TPanelProperties } from "./types"
import styles from "./panel.module.css"


const DEFAULT_PANEL_SIZE = 400

export default (props: TPanelProperties) => {
    const {
        change_size,
        drag_drop,
        show_information,
        statusbar,
        title,
        toggle_fullscreen
    } = props

    // TODO fullscreen signal, how to get parents size?
    // TODO footer signal

    // if fullscreen
    //const [size, set_size] = createSignal(false)

    // if drag and drop
    // const [position, set_position] = createSignal({ x: 0, y: 0 })

    return (
        <div class={styles.Panel}>   
            <Show when={title || toggle_fullscreen || show_information}>
                <Header
                    // drag_drop={set_position}
                    //show_information={show_information || false}
                    title={title}
                    //toggle_fullscreen={set_fullscreen}
                />
            </Show>      
            <Content
                height={props?.height || DEFAULT_PANEL_SIZE}
                width={props?.width || DEFAULT_PANEL_SIZE}
            >
                { props.children }
            </Content>
            <Show when={statusbar}>
                <Footer />
            </Show>
        </div>
    )
}