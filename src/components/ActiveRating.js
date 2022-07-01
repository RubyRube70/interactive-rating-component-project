import React from 'react';


const initialState ={
    submitRating: null
}
function numbers(props){
    return(
        <button type='button' className="numbers"
        onClick={props.OnClick}>
        {props.value}
        </button>
    )
}
class Rating extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            initialState
        }
    }
    render() {
        return (
            <>
            <div>
                <h2>How did we do?</h2>
                <p>Please let us know how we did with your support request.
                 All feedback is appreciated to help us improve our offering!</p>
            </div>
            </>
        )
    }
}

export default Rating;