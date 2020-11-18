import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

function Details() {
    const params  = useParams();
    const location = useLocation();
    return <div>{'我是详情页' + params.id + '和 ' + location.search}</div> //我是详情页1和 ?a=1
    
}

export default Details;