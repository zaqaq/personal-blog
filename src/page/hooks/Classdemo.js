import React,{Component} from 'react';
import Rows from './Row'
import {ThemeContext} from './context'

class GreetingC extends Component{
    constructor(){
        super();
        this.state = {
            name: 'Wind',
            surname: 'Cilo',
            width: window.innerWidth
        };
    }
    
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    
    handleSurnameChange = (e) => {
        this.setState({
            surname: e.target.value
        });
    }
    
    handleResizeWidth = () => {
        this.setState({
            width: window.innerWidth
        })
    }
    
    componentDidMount(){
        document.title = this.state.name + ' ' + this.state.surname;
        window.addEventListener('resize', this.handleResizeWidth)
    }
    
    componentDidUpdate() {
        document.title = this.state.name + ' ' + this.state.surname
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizeWidth)
    }
    
    render(){
        return (
            <ThemeContext.Consumer>
                {
                    ({theme, language}) => {
                        return <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgb(27,36,32)',
                            height: 500
                        }}>
                            <section className={theme}>
                                <Rows label='Name'>
                                    <input value={this.state.name} onChange={this.handleNameChange}/>
                                </Rows>
                                <Rows label='Name'>
                                    <input value={this.state.surname} onChange={this.handleSurnameChange}/>
                                </Rows>
                                <Rows label='Language'>
                                    {language}
                                </Rows>
                                <Rows label='Width'>
                                    {this.state.width}
                                </Rows>
                            </section>
                        </div>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default GreetingC;
