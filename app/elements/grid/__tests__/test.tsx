import React, { FunctionComponent } from 'react';
import { render } from '@testing-library/react';
import { Grid, TRowColumn } from 'elements';

const getUniqueKey = (row: number, column: number) => `${row}-${column}`;

const gridSize: TRowColumn = [3, 3];
interface ICellProps {
  row: number;
  column: number;
}
const Cell: FunctionComponent<ICellProps> = ({ row, column }) => (
  <div data-testid={getUniqueKey(row, column)} />
);

describe('Grid', () => {
  it('Renders Grid with Component', () => {
    const renderCell = (row: number, column: number) => (
      <Cell key={getUniqueKey(row, column)} row={row} column={column} />
    );
    const { getByTestId } = render(<Grid grid={gridSize} renderCell={renderCell} />);
    for (let i = 0; i < gridSize[0]; i++) {
      for (let j = 0; j < gridSize[1]; j++) {
        expect(getByTestId(getUniqueKey(i, j))).toBeInTheDocument();
      }
    }
  });
});
