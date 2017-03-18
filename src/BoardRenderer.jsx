import React from 'react';
import { connect } from 'react-redux';
import { Alert, Col, Row } from 'react-bootstrap';
import { toggleCell } from './actions';

class BoardRenderer extends React.Component {

  renderCell(cell, rowIndex, colIndex) {
    return (
      <div className={cell ? 'cell alive' : 'cell dead'}
        onClick={this.props.toggleCell.bind(this.props.tiles, rowIndex, colIndex)}
      />);
  }

  renderRow(row, rowIndex) {
    return row.map((cell, i) => (
      <Col md={1} key={i}
        className={cell ? 'cell alive' : 'cell dead'}
        onClick={this.props.toggleCell.bind(this.props.tiles, rowIndex, i)}
      />));
  }

  renderBoard() {
    try {
      if (this.props.tiles.length > 0 && this.props.tiles[0].length > 0) {
        return this.props.tiles.map((row, index) =>
          <Row key={index}>{this.renderRow(row, index)}</Row>);
      }
      return <Alert bsStyle="danger">Error rendering tiles.</Alert>;
    } catch (err) {
      return <Alert bsStyle="danger">{err.message}</Alert>;
    }
  }

  render() {
    return (
      <div className="board-renderer">
        {this.renderBoard()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ tiles: state.board.tiles });
export default connect(mapStateToProps, { toggleCell })(BoardRenderer);
