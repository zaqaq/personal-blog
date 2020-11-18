import React,{Component} from 'react';


class Error extends Component{
    constructor(){
        super();
    }
    
    render(){
        return (
    
            <ErrorBoundary>
            <div>
                <h1>test Error</h1>
                <List1 />
                <List2 />
            </div>

            </ErrorBoundary>
        )
    }
}

export default Error;

class List1 extends Component{
    render(){
        return (
            <div>
                {
                    [1,2,3,4].map((item, index) => <p key={index}>{item}</p>)
                }
            </div>
        )
    }
}

class List2 extends Component{
    render(){
        return (
            <div>
                {
                    null.map((item, index) => <p key={index}>{item}</p>)
                }
            </div>
        )
    }
}

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
        console.log(error);
        console.log(info);
        //log(error,info)
    }
    
    
    render(){
        if(this.state.hasError){
            return <h1>Wrong</h1>
        }
        return this.props.children
    }
}




