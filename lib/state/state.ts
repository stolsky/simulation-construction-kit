import { createStore } from "solid-js/store"
import { createSignal } from "solid-js"

import type { RunStateType, TimeStateType } from "./types"


const speed = { min: 2 ** -3, factor: 2, max: 2 ** 10 }
const [time_state, set_time_state] = createStore({
        speed_multiplier: 1,
        elapsed_time: 0
})
const TimeState: TimeStateType = [
    time_state,
    {
        decrease_speed: () => set_time_state("speed_multiplier", (current) => {
            current = current / speed.factor
            if (current < speed.min) {
                current = speed.min
            }
            return current
        }),
        get_elapsed_time: () => time_state.elapsed_time,
        increase_speed: () => set_time_state("speed_multiplier", (current) => {
            current = current * speed.factor
            if (current > speed.max) {
                current = speed.max
            }
            return current
        }),
        is_maximum_speed: () => time_state.speed_multiplier === speed.max,
        is_minimum_speed: () => time_state.speed_multiplier === speed.min,
        update_elapsed_time: (delta_time: number) => set_time_state("elapsed_time", (current) => current + delta_time)
    }
]

const [is_running, set_is_running] = createSignal(false)
const RunState: RunStateType = [
    is_running,
    {
        start_simulation: () => set_is_running(true),
        pause_simulation: () => set_is_running(false)
    }
]


export {
    RunState,
    TimeState
}