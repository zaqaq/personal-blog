
function count(state,action) {
    switch (action.type) {
        case 'ADD_NUM':
            return state + 1
        case 'RM_NUM':
            return state - 2
        default: //设置 state 初始值
            return 100
    }
}


//派发  传递action
function addNUM(data){
    return {
        type: 'ADD_NUM'
    }
}

function rmNUM(){
    return {
        type: 'RM_NUM'
    }
}

export {count, addNUM, rmNUM}
