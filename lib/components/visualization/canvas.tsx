import { createEffect, createSignal } from "solid-js"

import { RunState, TimeState } from "../../state/state"
import { IRenderer, ITask } from "../../renderer/types"
import { PixiRenderer } from "../../renderer/pixi_renderer"


const createMainLoop = (task: ITask, app: IRenderer) => {
    task.init(app).then(() => {
        app.add_ticker((deltaTime) => {
            const [timeState, { update_elapsed_time: updateElapsedTime }] = TimeState
            const adjustedDeltaTime = deltaTime * timeState.speed_multiplier
            updateElapsedTime(adjustedDeltaTime)
            // TODO what happened if completed, how to make endless simulations, reset() method?
            if (task.is_completed()) {
                // reset task
                // count loop cycle
            }
            else {
                task.loop(adjustedDeltaTime)
            }
        })
    })
}

export default (props: {
    width: number,
    height: number,
    task: ITask
}) => {
    const { task } = props

    const [canvas, set_canvas] = createSignal<HTMLCanvasElement>()
    const [isRunning] = RunState

    // TODO move selection of wrapper to config, etc..
    // TODO replace PixiWrapper with "SelectedWrapper"
    const app = new PixiRenderer()
    app.init({ background: "#1099bb", width: props.width, height: props.height })
        .then(() => {
            set_canvas(app.get_canvas())
            createMainLoop(task, app)
        })

    createEffect(() => {
        if (canvas()) {
            if (isRunning()) {
                // console.log("isRunning effect start")
                app.start()
            }
            else {
                // console.log("isRunning effect stop")
                app.stop()
            }
        }  
    })

    
    
    return (<>{ canvas }</>)
}