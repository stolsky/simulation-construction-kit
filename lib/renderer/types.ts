interface IRenderer {
    add_ticker(loop: (deltaTime: number) => void): void
    get_canvas(): HTMLCanvasElement
    get_renderer(): any
    init(options: {}): Promise<void>
    start(): void
    stop(): void
}

interface ITask { 
    init: (application: IRenderer) => Promise<void>
    is_completed: () => boolean
    loop: (delta_time: number) => void
    set_frame_rate(frame_rate: number): void
    set_max_iterations(max_iterations: number): void
}

export type {
    ITask,
    IRenderer
}