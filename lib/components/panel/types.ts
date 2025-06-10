import type { JSX } from "solid-js/jsx-runtime"

// TODO make global ?
type TChangeSize = "HORIZONTAL" | "VERTICAL" | "BOTH"

type TPanelProperties = {
    change_size?: TChangeSize
    children: JSX.Element | JSX.Element[]
    drag_drop?: boolean
    height?: number
    show_information?: boolean // TODO change to function that sets the information data?
    statusbar?: boolean // TODO chnage to function that sets the information data?
    title?: string
    toggle_fullscreen?: boolean
    width?: number
}

export {
    type TPanelProperties
}