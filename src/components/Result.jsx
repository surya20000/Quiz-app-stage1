import React from "react";
import './Components.css'

class Result extends React.Component {


    render() {
        return (
            <>
                <h2 className="h">Result</h2>
                <div className="result-area">
                    <p className="heading1"><b>You need more practise</b></p>
                    <p className="heading2">Your score is 20%</p>
                    <div className="content">
                        <p className="heading3"> Total no. of questions </p>
                        <p className="int"><b>15</b></p>
                        <p className="heading3"> Number of attempted questions </p>
                        <p className="int"><b>9</b></p>
                        <p className="heading3"> Number of correct answers </p>
                        <p className="int"><b>3</b></p>
                        <p className="heading3"> Number of wrong answers </p>
                        <p className="int"><b>6</b></p>
                    </div>
                    <div className="action-btn">
                        <button className="play">Play Again</button>
                        <button className="play">Back to home</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Result