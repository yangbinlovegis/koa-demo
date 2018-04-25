import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import {addTodos} from '../action/index';

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
        console.log('component will mount args= ', arguments);
    }
    componentDidMount() {
        console.log('component did mount args=', arguments);
        const {dispatch} = this.props;
        dispatch(addTodos());
        document.body.addEventListener('click', () => {
            console.log('clickOthers');
            this.setState({
                display: false
            });
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log('component will receive props args=', arguments);
    }
    componentDidUpdate() {
        console.log('component did update args=', arguments);
    }
    handlerClickInput = () => {
        console.log('clickInput arguments=', arguments);
        const {display} = this.state;
        const {dispatch} = this.props;
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
        const {value} = this.props;
        return (
            <div className='app'>
            {
                inputArray.map((data, index) => {
                    return (
                        <div
                            className='image-control'
                            key={index}
                            onClick={this.handlerClickInput.bind(this)}
                        />
                    )
                })
            }
                <input
                    value={value}
                />
                <div
                    className='wrapper'
                    style={{'visibility' : display ? 'visible': 'hidden'}}
                    onClick={this.handlerClickWrapper.bind(this)}
                >
                    <img src='resource/image.png'/>
                </div>
            </div>
        )
    }
}
// export default App;

function mapStateToProps(initState) {
    const {todos} = initState;
    return {
        name: todos.name,
        value: todos.value
    };
};
export default connect(mapStateToProps)(App);

