import { Application, Ticker } from "pixi.js"

import { IRenderer } from "./types"


type TPixiRenderer = PixiRenderer | IRenderer

class PixiRenderer implements IRenderer {
    
    private app: Application

    constructor() {
        this.app = new Application()
    }

    // @see https://pixijs.com/8.x/guides/components/application/ticker-plugin
    add_ticker = (loop: (deltaTime: number) => void) => this.app.ticker.add((ticker: Ticker) => loop(ticker.deltaTime))

    get_canvas = () => this.app.canvas

    get_renderer = () => this.app

    init = async (options: {}) => this.app.init(options)
        .catch((err) => console.error("Errors while loading WebGL", err))
    

    start = () => this.app.start()

    stop = () => this.app.stop()
    
}

export {
    type TPixiRenderer,
    PixiRenderer
}