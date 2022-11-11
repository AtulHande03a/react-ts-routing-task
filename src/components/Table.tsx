import { TableHTMLAttributes } from "react";
import { Column, DataTable } from "../model";
// import { TableList } from "./TableList";

interface Props {
  data: DataTable[];
  column: Column;
}

// interface HeadProps {
//   item: Column;
// }

type ColumnItem = {
  heading: string;
  value: string;
};

type TableHeadProps = {
  item: ColumnItem;
};

type TableRowProps = {
  item: DataTable;
  column: Column;
};

export const Table: React.FC<Props> = ({ data, column }) => {
  return (
    <>
      <main className="table_container">
        <h3 className="table-heading">Grid Table</h3>
        <table>
          <thead>
            <tr>
              {column.map((item, index) => (
                <TableHeadItem item={item} key={index} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow item={item} column={column} key={index} />
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

const TableHeadItem: React.FC<TableHeadProps> = ({ item }) => (
  <th>{item.heading}</th>
);

const TableRow: React.FC<TableRowProps> = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split("."); //['address', 'city']
        return <td key={index}>{item[itemSplit[0]][itemSplit[1]]}</td>;
      }

      return <td key={index}>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);
