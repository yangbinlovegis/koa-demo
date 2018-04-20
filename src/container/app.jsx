import React, {Component, PropTypes} from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        console.log('construct');
        this.state = {
            inputArray: [1, 2, 3],
            display: true
        }
    }
    componentWillMount() {
        console.log('component will mount');
    }
    componentDidMount() {
        console.log('component did mount');
        document.body.addEventListener('click', () => {
            console.log('clickOthers');
            this.setState({
                display: false
            });
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log('component will receive props');
    }

    handlerClickInput = () => {
        console.log('clickInput arguments=', arguments);
        const {display} = this.state;
        this.setState({
            display: !display
        })
    };
    handlerClickWrapper = (e) => {
        console.log('click wrapper');
        e.stopPropagation();
    }
    render() {
        console.log('app render');
        const {inputArray, display} = this.state;
        return (
            <div className='app'>
            {
                inputArray.map((data, index) => {
                    return (
                        <div
                            className='image-control'
                            key={index}
                            onClick={this.handlerClickInput}
                        />
                    )
                })
            }
                <div
                    className='wrapper'
                    style={{'visibility' : display ? 'visible': 'hidden'}}
                    onClick={this.handlerClickWrapper}
                >
                    <img src='resource/image.png'/>
                </div>
            </div>
        )
    }
}
export default App;