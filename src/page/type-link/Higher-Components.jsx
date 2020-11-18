import React,{Component} from 'react';

class Main extends Component{
    
    render(){
        return (
            <>
                <WidthA a={1}/>
                <WithB b={2}/>
            </>
        )
    }
}
export default Main;

function withHigherComponents(View){
    return class HigherComponents extends Component{
        constructor(props) {
            super(props);
            this.state = {
                pcBannerList: []
            }
        }
    
        async componentDidMount(){
            const {data: {pcBannerList}} = await React.$axios.post('pc/index');
            this.setState({ pcBannerList});
        }
        
        render(){
            return <View data={this.state.pcBannerList} {...this.props}/>
        }
    }
}



class A extends Component{
    
    render(){
        console.log(this.props);
        return (
            <ul>
                {
                    this.props.data.map(item => (
                        <li key={item.addTime}>
                            <img src={item.imgUrl} height={200}/>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

const WidthA = withHigherComponents(A);


class B extends Component{
    
    
    render(){
        return (
            <ul>
                {
                    this.props.data.map(item => (
                        <li key={item.addTime}>
                            <img src={item.imgUrl} height={200}/>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

const WithB = withHigherComponents(B);

