import { Code as code } from './code';
import { Heading as heading } from './heading';
import { HorizontalRule as thematicBreak } from './horizontal-rule';
import { Link as link } from './link';
import { List as list } from './list';
import { Paragraph as paragraph } from './paragraph';
import { Strong as strong } from './strong';
import { Table as table } from './table';
import { TableBody as tableBody } from './table-body';
import { TableCell as tableCell } from './table-cell';
import { TableHead as tableHead } from './table-head';
import { TableRow as tableRow } from './table-row';

/** All React Markdown renderers */
export const markdownRenderers = {
  code,
  heading,
  inlineCode: code,
  link,
  list,
  paragraph,
  strong,
  table,
  tableBody,
  tableCell,
  tableHead,
  tableRow,
  thematicBreak,
};
