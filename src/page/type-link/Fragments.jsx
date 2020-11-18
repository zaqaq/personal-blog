import React,{Component} from 'react';

class Fragments extends Component{
    constructor(){
        super();
    }
    
    render(){
        return (
            <table>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default Fragments;


class Columns extends Component{
    render(){
        return(
            <>
                <td>hello</td>
                <td>React</td>
            </>
        )
    };
}
