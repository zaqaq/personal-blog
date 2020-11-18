//redux 提供store
//react-redux 提供操作state和reducer以及dispatch简便的操作

function countReducer(state,action) {
    switch (action.type) {
        case 'ADD_NUM':
            return state + 1
        case 'RM_NUM':
            return state - 2
        default: //设置 state 初始值
            return 100
    }
}

//action
function addNUM(){
    return {
        type: 'ADD_NUM'
    }
}

function rmNUM(){
    return {
        type: 'RM_NUM'
    }
}

export {countReducer, addNUM, rmNUM}
