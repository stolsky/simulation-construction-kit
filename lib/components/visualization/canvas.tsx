import { createEffect, createSignal } from "solid-js"

import { RunState, TimeState } from "../../state/state"
import { IRenderer, ITask } from "../../renderer/types"
import { PixiRenderer } from "../../renderer/pixi_renderer"


const createMainLoop = (task: ITask, app: IRenderer) => {
    // @see https://pixijs.com/8.x/guides/components/application/ticker-plugin
    task.init(app).then(() => {
        app.add_ticker((deltaTime) => {
            const [timeState, { updateElapsedTime }] = TimeState
            const adjustedDeltaTime = deltaTime * timeState.speedMultiplier
            updateElapsedTime(adjustedDeltaTime)
            // TODO what happened if completed, how to make endless simulations, reset() method?
            if (!task.is_completed()) {
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

    const [canvas, setCanvas] = createSignal<HTMLCanvasElement>()
    const [isRunning] = RunState

    // TODO move selection of wrapper to config, etc..
    // TODO replace PixiWrapper with "SelectedWrapper"
    const app = new PixiRenderer()
    app.init({ background: "#1099bb", width: props.width, height: props.height })
        .then(() => { setCanvas(app.get_canvas()) })
        .catch((err) => console.error("Crashing when loading WebGL", err))

    createEffect(() => {
        // console.log("canvas effect")
        if (canvas()) {
            createMainLoop(task, app)
        }
    })

    createEffect(() => {
        // console.log("isRunning effect")
        if (isRunning()) {
            app.start()
        } else if (canvas()) {
            app.stop()
        }
    })
    
    return (<>{ canvas }</>)
}