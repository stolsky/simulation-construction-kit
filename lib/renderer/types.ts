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

}

export type {
    ITask,
    IRenderer
}