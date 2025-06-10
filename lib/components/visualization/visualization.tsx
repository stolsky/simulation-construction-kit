import type { ITask } from "../../task/interfaces"

import Panel from "../panel/panel"
import Canvas from "./canvas"


export default (props: {
    title?: string,
    width?: number,
    height?: number,
    task: ITask
}) => {
    const width = props?.width || 800
    const height = props?.height || 600
    return (
        <Panel
            height={height}
            title={props?.title}
            width={width}
        >
            <Canvas
                height={height}
                task={props.task}
                width={width}
            />
        </Panel>
    )
}