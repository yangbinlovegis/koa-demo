import React, {Component, PropTypes} from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputArray: [1, 2, 3],
            display: true
        }
    }
    
    handerClickInput() {
        console.log('clickInput arguments=', arguments);
        const {display} = this.state;
        this.setState({
            display: !display
        })
    }
    render() {
        const {inputArray, display} = this.state;
        return (
            <div className='app'>
            {
                inputArray.map((data, index) => {
                    return (
                        <input
                            className='input'
                            key={index}
                            onClick={this.handerClickInput.bind(this)}
                        />
                    )
                })
            }
                <div
                    className='wrapper'
                    style={{'display' : display ? 'block': 'none'}}
                >
                    <img src='resource/image.png'/>
                </div>
            </div>
        )
    }
}
export default App;