import { type TPixiRenderer } from "./pixi_renderer"
import { Task } from "./task"


abstract class PixiTask extends Task {
    abstract init: (application: TPixiRenderer) => Promise<void>
}

export {
    PixiTask
}