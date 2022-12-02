import  {Component} from 'react';
import './Modal.module.css';

export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');
    }

    render () {
        return(
            <div className='Modal-backdrop'>
                <div className='Modal-content'>{this.props.children}</div>
            </div>
        );
    }
}