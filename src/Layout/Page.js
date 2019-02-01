import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';
import AppLayout from './AppLayout'

const Page = ({ children, pageHeaderText }) => (
    <AppLayout pageHeaderText={pageHeaderText}>
        <Col>
            <div className="main-content">{children}</div>
        </Col>
    </AppLayout>
);

const StyledPage = styled(Page)`
  position: relative;
  margin-bottom: 2.4rem;
  max-width: 140rem;
  .job-list-heading {
    height: 3rem;
  }
`;

export default (StyledPage);
