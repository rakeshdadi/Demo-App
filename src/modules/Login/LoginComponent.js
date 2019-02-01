import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Page from '../../Layout/Page';
import { Form, Row, Col, Input, Button, Alert } from 'antd';

class LoginComponent extends React.Component {

    state = {
        loginError: false
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {

            let chackForUppercase = /[A-Z]/.test(values.password);
            let checkForSpclChar = /[~`!@#$%()\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(values.password);
            if (!err) {
                if (values.password.length > 8 && chackForUppercase && checkForSpclChar) {
                    this.setState({
                        loginError: false
                    })
                    this.props.history.push('/users');
                } else {
                    this.setState({
                        loginError: true
                    })
                }
            }
        });
    }
    render() {
        const { className, form } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Page pageHeaderText="Welcome">
                <div className={className}>
                    <div className="login-box">
                        <Row>
                            <Col xs={0} lg={7} />
                            <Col xs={24} lg={10}>
                                <Form onSubmit={this.onSubmitForm} className="login-form">
                                    <Form.Item>
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                        })(
                                            <Input placeholder="Username" />
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                        })(
                                            <Input type="password" placeholder="Password" />
                                        )}
                                    </Form.Item>
                                    {this.state.loginError && <Alert showIcon={false} type="error" message="Password must contain more than 8 characters, at least 1 upper case letter at least 1 special character" banner />}
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Log in
                                </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Page>
        )
    }
}

const StyledLoginComponent = styled(LoginComponent)`
.login-box {
    margin-top: 60px;
}
.login-form-button {
    background-color: #2373ef;
    border-color: #2373ef;
    width: 100%;
  }
`;

export default withRouter(Form.create()(StyledLoginComponent));