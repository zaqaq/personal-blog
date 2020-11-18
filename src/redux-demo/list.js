let catList = [
    {a: 'web'},
    {a: 'react'},
    {a: 'react native'}
]

function catInfo(state, action) {
    switch (action.type) {
        case 'ADD_CAT':
            return [
                ...state,
                action.data
            ];
        case 'RE_CAT':
            const { index, txt } = action.data;
            let listData = [...state];
            listData[index]['a']= txt;
            return listData;
        default:
            return catList
    }
}

function addCAT(data){
    return {
        type: 'ADD_CAT',
        data
    }
}

function RECAT(data){
    return {
        type: 'RE_CAT',
        data
    }
}
export {catInfo, addCAT, RECAT};
