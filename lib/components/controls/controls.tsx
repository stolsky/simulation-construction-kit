import { Show } from "solid-js"

import { RunState, TimeState } from "../../state/state"
import { format_time } from "../../utilities/time"

import styles from "./controls.module.css"

// @see resource: https://github.com/solidjs/solid/discussions/1820

export default (props: {
    leave?: boolean,
    speed_up?: boolean,
    slow_down?: boolean,
    multiplier?: boolean,
    show_time?: boolean
}) => {
    const [is_running, { start_simulation, pause_simulation }] = RunState
    const [timeState, { decrease_speed, increase_speed, is_maximum_speed, is_minimum_speed }] = TimeState

    return (
        <div class={styles.Controls}>
            <Show when={ !is_running() }>
                <button onclick={ () => start_simulation() }>play</button>
            </Show>
            <Show when={ is_running() }>
                <button onclick={ () => pause_simulation() }>stop</button>
            </Show>
            <Show when={ props.slow_down || false }>
                <button onclick={ () => decrease_speed() } disabled={ is_minimum_speed() }>slow down</button>
            </Show>
            <Show when={ props.multiplier || false }>
                <p>{timeState.speed_multiplier}x</p>
            </Show>
            <Show when={ props.speed_up || false }>
                <button onclick={ () => increase_speed() } disabled={ is_maximum_speed() }>speed up</button>
            </Show>
            <Show when={ props.show_time || true }>
                <p>{ format_time(timeState.elapsed_time) }</p>
            </Show>
            <Show when={ props.leave || false }>
                <button>leave</button>
            </Show>
        </div>
    )
}