import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, ButtonGroup, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
import * as actions from './actions';

class BoardControls extends React.Component {
  constructor() {
    super();
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
    this.handleChangeWidth = this.handleChangeWidth.bind(this);
  }

  handleChangeHeight(e) {
    this.props.setHeight(e.target.value);
  }

  handleChangeWidth(e) {
    this.props.setWidth(e.target.value);
  }

  render() {
    return (
      <div className="board-control">
        <Form inline>
          <FormGroup controlId="width" className="board-control-group">
            <ControlLabel>width:</ControlLabel>
            {' '}
            <FormControl
              type="text"
              size={1}
              value={this.props.width}
              onChange={this.handleChangeWidth}
            />
          </FormGroup>
          <FormGroup controlId="height" className="board-control-group">
            <ControlLabel>height:</ControlLabel>
            {' '}
            <FormControl
              type="text"
              size={1}
              value={this.props.height}
              onChange={this.handleChangeHeight} />
          </FormGroup>
          <FormGroup className="board-control-group">
            <ButtonGroup>
              <Button onClick={this.props.clearBoard}>Clear</Button>
              <Button onClick={this.props.randomizeBoard}>Randomize</Button>
              <Button onClick={this.props.stepBoardForward}>Forward</Button>
              <Button onClick={this.props.stepBoardBackward}>Back</Button>
            </ButtonGroup>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  height: state.board.height,
  width: state.board.width,
  board: state.board.tiles,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BoardControls);
