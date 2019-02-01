import React from 'react';
import SwipeItem from './SwipeItem';
import styled from 'styled-components';
import { Avatar } from 'antd';
import { USER_DATA } from '../../constants';

class SwipeList extends React.Component {
    state = {
        users: USER_DATA
    }
    removeItem = (keyOfItemToRemove) => {
        this.setState({
            users: this.state.users.filter(item => item.name !== keyOfItemToRemove)
        })
    }

    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <ul className="swipeList">
                    {this.state.users.map((itemKey, index) =>
                        <SwipeItem key={`swipeItem-${itemKey.id}`} onRemoval={() => this.removeItem(itemKey.name)}>
                            <div><Avatar shape="square" size="large" icon="user" /><span className="item-name">{itemKey.name}</span></div>
                        </SwipeItem>
                    )}
                </ul>
            </div>
        );
    }
}

const StyledSwipeList = styled(SwipeList)`
  .swipeList {
    list-style-type: none;
    padding:0px;
  }
  .item-name{
      padding: 0px 5px;
  }
  `

export default StyledSwipeList;