import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";
import Title from "../../../components/Title";
import { data, type Person } from "../data/MrtTableData";

const ColumnOrderingTable = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      //column definitions...
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      //end
      {
        accessorKey: "state",
        enableColumnOrdering: false, //disable column ordering for this column,
        header: "State",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true,
  });

  return (
    <div className="table-container">
      <Title title="Column Ordering Table" />
      <MaterialReactTable table={table} />
    </div>
  );
};

export default ColumnOrderingTable;
