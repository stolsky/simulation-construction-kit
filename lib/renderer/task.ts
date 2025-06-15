import { IRenderer, ITask } from "./types"


abstract class Task implements ITask {

    protected iterations_max: number = 0
    protected iterations_now: number = 0
    protected frame_rate = 1
    protected frames = 0

    protected abstract update: (delta_time: number) => void

    protected abstract render: () => void

    abstract init: (application: IRenderer) => Promise<void>

    is_completed = () => (this.iterations_max !== 0) ? this.iterations_now >= this.iterations_max : false

    loop = (delta_time: number) => {
        this.frames = this.frames + delta_time
        if (this.frames > this.frame_rate) {
            this.frames = 0
            this.iterations_now = this.iterations_now + 1
            this.update(delta_time)
            this.render()
        }
    }

    set_frame_rate = (frame_rate: number) => {
        if (frame_rate >= 0) {
            this.frame_rate = frame_rate
        }
    }

    set_max_iterations = (max_iterations: number) => {
        if (max_iterations > 0) {
            this.iterations_max = max_iterations
        }
    }

}

export {
    Task
}