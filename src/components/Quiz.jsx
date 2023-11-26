import React from "react";
import './Components.css'

class Quiz extends React.Component {


    render() {
        return (
            <>
                <div className="main-container">
                    <h1>Questions</h1>
                    <p className="question">1 of 15</p>
                    <h5>Which is the only mammal that can jump?</h5>
                    <div className="option-body">
                        <div className="options">Dog</div>
                        <div className="options">Elephant</div>
                        <div className="options">Goat</div>
                        <div className="options">Lion</div>
                    </div>
                    <div className="dynamic-btn">
                        <button className="previous">Previous</button>
                        <button className="next">Next</button>
                        <button className="quit">Quit</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Quiz