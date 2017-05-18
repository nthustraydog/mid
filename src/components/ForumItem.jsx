import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import 'utilities/Dog.css';
import './ForumItem.css';

class ForumItem extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {barkerId, responses, title} = this.props;
        return (
            <div className='forum-item'>
                <div className='d-flex flex-row'>
                    <div className="sticker mr-5">
                        <div className={`dog dog-${barkerId}`}></div>
                        <div className="num-res">{responses.length}</div>
                    </div>
                    <div className="ml-5 title align-self-center">{title}</div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
}))(ForumItem);
