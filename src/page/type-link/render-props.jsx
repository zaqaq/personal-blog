import React,{Component} from 'react';

class RenderProps extends Component{
    
    render(){
        return (
            <>
                <Tracker1 />
                <Tracker2 />
            </>
        )
    }
}
export default RenderProps;

//获取鼠标位置的组件
class Mouse extends Component{
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }
    
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    
    render(){
        return(
            <div style={{ height: 250, border: '1px solid red'}} onMouseMove={this.handleMouseMove}>
                {this.props.children(this.state)}
            </div>
        )
    };
}

class Tracker1 extends React.Component {
    
    render() {
        return (
            <Mouse>
                {mouse => <p>当前的鼠标位置是 ({mouse.x}, {mouse.y})</p>}
            </Mouse>
            
        );
    }
}

class Tracker2 extends React.Component {

    render() {
        return (
            <Mouse>
                {mouse => <p>当前的鼠标位置是 ({mouse.x}, {mouse.y})</p>}
            </Mouse>
        );
    }
}
