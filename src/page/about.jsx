import React from 'react'
//import renderRoutes from '../routes/renderRoutes'
import { Link } from 'react-router-dom';

function About({ route }){ //解构出当前组件的路由配置信息
    return (
        <div>
            关于我们
            <Link to='/about/grand-child'>去子子页</Link>
            { /**传入二级路由的配置信息**/ }
            {/*{ renderRoutes(route.routes,{someProps: '我是你爸爸！'}) }*/}
        </div>
    )
}

export default About;
