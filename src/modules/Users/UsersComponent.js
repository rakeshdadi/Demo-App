import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Page from '../../Layout/Page';
import SwipeList from './SwipeList';


class UsersComponent extends React.Component {
    render() {
        const { className } = this.props;

        return (
            <Page pageHeaderText="List View" >
                <div className={className}>
                    <SwipeList />
                </div>
            </Page>
        )
    }
}

const StyledUsersComponent = styled(UsersComponent)``;

export default withRouter(StyledUsersComponent);