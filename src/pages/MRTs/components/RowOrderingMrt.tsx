import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
} from "material-react-table";
import { useMemo, useState } from "react";
import Title from "../../../components/Title";
import { data as initData, type Person } from "../data/MrtTableData";

const RowOrderingTable = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "city",
        header: "City",
      },
    ],
    []
    //end
  );

  const [data, setData] = useState(() => initData);

  const table = useMaterialReactTable({
    autoResetPageIndex: false,
    columns,
    data,
    enableRowOrdering: true,
    enableSorting: false,
    muiRowDragHandleProps: ({ table }) => ({
      onDragEnd: () => {
        const { draggingRow, hoveredRow } = table.getState();
        if (hoveredRow && draggingRow) {
          data.splice(
            (hoveredRow as MRT_Row<Person>).index,
            0,
            data.splice(draggingRow.index, 1)[0]
          );
          setData([...data]);
        }
      },
    }),
  });

  return (
    <div className="table-container">
      <Title title="Row Ordering Table" />
      <MaterialReactTable table={table} />
    </div>
  );
};

export default RowOrderingTable;
