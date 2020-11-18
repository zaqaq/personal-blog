import React from 'react'
import {connect} from 'react-redux'
import {addNUM, rmNUM} from  '../redux/count'


function Home(props) {
    return (
        <>
            <div>
                <p>{props.data}</p>
                <button onClick={() => props.addNUM()}>增加</button>
                <button onClick={() => props.rmNUM()}>减少</button>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    const {count} = state;
    return {data: count}
}

const mapDispatchToProps = {addNUM, rmNUM}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
