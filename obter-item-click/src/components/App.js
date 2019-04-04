import React, { Component } from "react";

import '../styles/App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            data: []
        }

        this.getItem = this.getItem.bind(this);
    }

    componentDidMount(){
        fetch('https://my-json-server.typicode.com/typicode/demo/posts')
        .then(res => res.json())
        .then(res => this.setState({data: res}));
    }

    getItem(e, item){
        e.preventDefault();
        console.log(item)
    }

    render() {
        return (
            <div>
                <h1>My React App!</h1>
                {this.state.data.map((item, i) =>
                <ol key={i}>
                    <li onClick={((e) => this.getItem(e, item))}>{item.title}</li>
                </ol>
                )}
            </div>
        );
    }
}

export default App;