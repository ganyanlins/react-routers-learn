import React, {Component} from 'react';
import './Web-Components.less';

class ContentLists extends Component {
    render() {
        return(
            <div className="nav-item">
                reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state ==>
                <a href="http://cn.redux.js.org/docs/basics/Reducers.html">[reducers 概念链接]</a>
            </div>
        )
    }
}

class WebComponents extends Component {
    render() {
        return(
            <div>
                <h2>Web Components</h2>
                <ContentLists />
            </div>
        )
    }
}

export default WebComponents;