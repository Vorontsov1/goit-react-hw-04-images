import React, {Component} from 'react';
import style from './Modal.module.css';

export default class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render () {
        return(
            <div className={style.overlay}>
                <div className={style.content}>{this.props.children}</div>
            </div>
        );
    }
}