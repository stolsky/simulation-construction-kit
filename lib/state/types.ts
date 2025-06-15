import type { Accessor } from "solid-js"


type RunStateType = [
    is_running: Accessor<boolean>,
    {
        start_simulation(): void
        pause_simulation(): void
    }
]

type TimeStateType = [
    {
        speed_multiplier: number
        elapsed_time: number
    },
    {
        decrease_speed(): void
        get_elapsed_time(): number
        increase_speed(): void
        is_maximum_speed(): boolean
        is_minimum_speed(): boolean
        update_elapsed_time(delta_time: number): void
    }
]


export {
    type RunStateType,
    type TimeStateType
}