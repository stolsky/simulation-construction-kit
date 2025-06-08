import type { JSX } from "solid-js/jsx-runtime"
import { Match, Show, Switch, type JSXElement } from "solid-js"

import Header from "./header"
import Content from "./content"

import styles from "./panel.module.css"


export default (props: {
    title?: string,
    width: number,
    height: number,
    children: JSX.Element
}) => {
    const { children, height, title, width } = props

    // only check first-level-children
    let header: JSX.Element
    let footer: JSX.Element
    if (children instanceof Array) {
        children.forEach((jsx_element) => {
            const html_element = jsx_element?.valueOf() 
            if (html_element && html_element instanceof HTMLElement) {
                if (!header && html_element.classList.contains("Header")) {
                    header = jsx_element
                }
                else if (!footer && html_element.classList.contains("Footer")) {
                    footer = jsx_element
                }
            }
        })
    }
    
    return (
        <div class={styles.Panel}>
            <Switch>
                <Match when={ header }>
                    { header }
                </Match>
                <Match when={ title }>
                    <Header title={ title } />
                </Match>
            </Switch>
            <Content width={ width } height={ height }>
                { children }
            </Content>
            <Show when={ footer }>
                { footer }
            </Show>
        </div>
    )
}