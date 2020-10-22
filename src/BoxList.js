import React, { Component } from 'react'
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boxes: [{ width: 20, height: 20, color: "teal" }]
        };
    };
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box
                width={box.width}
                height={box.height}
                color={box.color}
            />
        )
        )
        return (
            <div>
                <h1>Color Box - React Forms</h1>
                {boxes}
            </div>
        )
    }
}


export default BoxList;
