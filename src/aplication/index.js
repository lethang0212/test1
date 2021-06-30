import React from "react";
import { connect } from "react-redux";
import { ColorChange } from "../store/action";

const Example = (props) => {
    const {color1, setColor1} = props;

    return <>
        <h1 style={{color: color1}}>dasd</h1>
        <button onClick={() => setColor1("red")}>Click</button>
    </>
}

const mapDispatchToProps = (dispatch) => {
    return {
        setColor1 : function(color1){
            dispatch(ColorChange(color1))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        color1 : state.color1
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)