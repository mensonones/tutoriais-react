import React, { Component } from "react";

import '../styles/App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        fetch('//my-json-server.typicode.com/typicode/demo/posts')
            .then(res => res.json())
            .then(res => this.setState({data: res}));
    }

    handleChange(e) {
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <h1>My React App!</h1>
                    <select id="title" name="title" onChange={this.handleChange}>
                        {this.state.data.map((item, i) =>
                            <option key={i} value={item.title}>{item.title}</option>
                        )}
                    </select>
            </div>
        );
    }
}

export default App;