import React from 'react';
import {connect} from 'react-redux'
import {useCount} from '../../count-context';


export default class Reduxsd extends React.Component{
        render(){
            return <div>
                {/*{state.count}*/}
                {/*<input*/}
                {/*    type="button"*/}
                {/*    defaultValue={'增加'}*/}
                {/*    onClick={increment}*/}
                {/*/>*/}
                {/*<input*/}
                {/*    type="button"*/}
                {/*    defaultValue={'增加'}*/}
                {/*    onClick={increment}*/}
                {/*/>*/}
                {/*<input*/}
                {/*    type="button"*/}
                {/*    defaultValue={'减少'}*/}
                {/*    onClick={decrement}*/}
                {/*/>*/}
            </div>
        }
    
}

const mapStateProps = (state) => {
    return {data: state}
}

// export default connect(
//     mapStateProps
// )(Reduxsd)
