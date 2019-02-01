import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

class SwipeItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            left: 0,
            originalOffset: 0,
            velocity: 0,
            timeOfLastDragEvent: 0,
            touchStartX: 0,
            prevTouchX: 0,
            beingTouched: false,
            height: 0,
            intervalId: null,
            delLeft: 100,
        };
    }

    componentDidMount() {
        window.setTimeout(() => this.setState({ height: 65 }), 50);
    }

    animateSlidingToZero() {
        let { left, velocity, beingTouched } = this.state;
        if (!beingTouched && left < -0.01) {
            velocity += 10 * 0.033;
            left += velocity;
            if (left < -350) {
                window.clearInterval(this.state.intervalId);
            }
            this.setState({ left, velocity });
        } else if (!beingTouched) {
            left = 0;
            velocity = 0;
            window.clearInterval(this.state.intervalId);
            this.setState({
                delLeft: 100
            });
            this.setState({ left, velocity, intervalId: null, originalOffset: 0 });
        }
    }

    handleStart(clientX) {
        if (this.state.intervalId !== null) {
            window.clearInterval(this.state.intervalId);
        }
        this.setState({
            originalOffset: this.state.left,
            velocity: 0,
            timeOfLastDragEvent: Date.now(),
            touchStartX: clientX,
            beingTouched: true,
            intervalId: null
        });
    }

    handleMove(clientX) {
        if (this.state.beingTouched) {
            const touchX = clientX;
            const currTime = Date.now();
            const elapsed = currTime - this.state.timeOfLastDragEvent;
            const velocity = 20 * (touchX - this.state.prevTouchX) / elapsed;

            this.setState({
                left: -150,
                velocity,
                timeOfLastDragEvent: currTime,
                prevTouchX: touchX,
                delLeft: 75
            });
        }
    }

    handleMotionStart(clientX) {
        if (this.state.intervalId !== null) {
            window.clearInterval(this.state.intervalId);
        }
        this.setState({
            originalOffset: this.state.left,
            velocity: 0,
            timeOfLastDragEvent: Date.now(),
            touchStartX: clientX,
            beingTouched: true,
            intervalId: null
        });
    }

    handleEnd() {
        this.setState({
            velocity: this.state.velocity,
            touchStartX: 0,
            beingTouched: false,
            intervalId: window.setInterval(this.animateSlidingToZero.bind(this), 75)
        });
    }

    handleTouchStart(touchStartEvent) {
        this.handleMotionStart(touchStartEvent.targetTouches[0].clientX);
    }

    handleTouchMove(touchMoveEvent) {
        this.handleMove(touchMoveEvent.targetTouches[0].clientX);
    }

    handleTouchEnd() {
        this.handleEnd();
    }

    handleMouseDown(mouseDownEvent) {
        mouseDownEvent.preventDefault();
        this.handleStart(mouseDownEvent.clientX);
    }

    handleMouseMove(mouseMoveEvent) {
        this.handleMove(mouseMoveEvent.clientX);
    }

    handleMouseUp() {
        this.handleEnd();
    }

    handleMouseLeave() {
        this.handleMouseUp();
    }

    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <li
                    className="swipeItem"
                    style={{ height: this.state.height + 'px', transition: 'height 250ms ease-in-out' }}
                    onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
                    onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
                    onTouchEnd={() => this.handleTouchEnd()}
                    // The following event handlers are for mouse compatibility:
                    onMouseDown={mouseDownEvent => this.handleMouseDown(mouseDownEvent)}
                    onMouseMove={mouseMoveEvent => this.handleMouseMove(mouseMoveEvent)}
                    onMouseUp={() => this.handleMouseUp()}
                    onMouseLeave={() => this.handleMouseLeave()}
                >
                    <div
                        className="swipeItem-content"
                    >
                        {this.props.children}
                    </div>
                    <div className="delete-button" style={{ left: this.state.delLeft + '%', transition: 'height 50ms ease-in-out' }} onClick={() => this.props.onRemoval()}>
                        <span><Icon type="delete" /></span><br />
                        <span>Delete</span>
                    </div>
                </li>
            </div>
        );
    }
}
const StyledSwipeItem = styled(SwipeItem)`
  .swipeItem {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .swipeItem-content {
    position: absolute;
    width: 100%;
    height: 100%;
    border-bottom: 1px black solid;
    padding: 10px 0px;
  }
  .delete-button{
    position: absolute;
    background-color: #f70404;
    color: #fff;
    width: 25%;
    text-align: center;
    padding : 11px 0px;
  }`
export default StyledSwipeItem;