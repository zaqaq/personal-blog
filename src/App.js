import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import renderRoutes from './routes/renderRoutes'
import routes from './routes';
//import {Counter} from './page/type-link/useCount-context'
import {connect} from 'react-redux'
// import {addNUM, rmNUM} from  './redux'


function App(props){
    return (
        <div className='content'>
            {/*<p>{props.data}</p>*/}
            {/*<button onClick={() => props.addNUM()}>增加</button>*/}
            {/*<button onClick={() => props.rmNUM()}>减少</button>*/}
            <Link to='/'>主页</Link>
            <Link to='/details'>details</Link>
            <Link to='/news'>news</Link>
            <Link to='/about'>about</Link>
            <Link to='/class-demo'>Class组件</Link>
            <Link to='/hooks-demo'>Hooks组件</Link>
            <Link to='/last-demo'>last组件</Link>
            {renderRoutes( routes)}
        </div>
    )
}

export default App;
// const mapStateToProps = (state) => {
//     return {data: state}
// }
//
// const mapDispatchToProps = {addNUM, rmNUM}
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)
