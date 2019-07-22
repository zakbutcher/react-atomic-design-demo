import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types';
import { Row } from 'layouts';

export type TRowColumn = [number, number];

export interface IGridProps extends IDefaultProps {
  /**
   * [required] Grid size [rows, columns]
   */
  grid: TRowColumn;
  /**
   * [required] Callback responsible for returning a valid JSX Element based
   * on current row/column position
   */
  renderCell: (row: number, column: number) => JSX.Element;
}

export const Grid: FunctionComponent<IGridProps> = props => {
  const rows = new Array(props.grid[0]).fill(0);
  const columns = new Array(props.grid[1]).fill(0);
  return (
    <>
      {rows.map((_, rIndex) => (
        <Row key={`row-${rIndex}`}>
          {columns.map((_, cIndex) => props.renderCell(rIndex, cIndex))}
        </Row>
      ))}
    </>
  );
};
