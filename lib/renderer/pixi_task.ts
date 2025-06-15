import { ITask } from "./types"
import { type TPixiRenderer } from "./pixi_renderer"


abstract class PixiTask implements ITask {

    abstract init: (application: TPixiRenderer) => Promise<void>

    abstract is_completed: () => boolean

    abstract loop: (delta_time: number) => void

}

export {
    PixiTask
}