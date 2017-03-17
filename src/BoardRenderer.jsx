import React from 'react';
import { connect } from 'react-redux';
import { Alert, Col, Row } from 'react-bootstrap';

const renderRow = row =>
  row.map((cell, i) => <Col sm={1} key={i} className={cell ? 'cell alive' : 'cell dead'} />);

const renderBoard = tiles =>
  tiles.map((row, index) => <Row key={index}>{renderRow(row)}</Row>);

const BoardRenderer = ({ tiles }) => {
  try {
    return <div className="board-renderer">{tiles ? renderBoard(tiles) : ''}</div>;
  } catch (err) {
    return <div><Alert bsStyle="danger">{err.message}</Alert></div>;
  }
};

const mapStateToProps = state => ({ tiles: state.board.tiles });
export default connect(mapStateToProps)(BoardRenderer);
