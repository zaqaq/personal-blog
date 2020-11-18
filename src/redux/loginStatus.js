//redux 提供store
//react-redux 提供操作state和reducer以及dispatch简便的操作

function loginReducer(state,action) {
    switch (action.type) {
        case 'CHANGESTATUS':
            return true
        default: //设置 state 初始值
            return false
    }
}

//action
function changeStatus(){
    return {
        type: 'CHANGESTATUS'
    }
}


export {loginReducer, changeStatus}
