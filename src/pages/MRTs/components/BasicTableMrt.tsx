import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import Title from "../../../components/Title";

// Define your data type
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
};

// Sample data
const data: Person[] = [
  { firstName: "John", lastName: "Doe", age: 30, address: "123 Main St" },
  { firstName: "Jane", lastName: "Smith", age: 25, address: "456 Oak St" },
  { firstName: "Tom", lastName: "Brown", age: 35, address: "789 Pine St" },
];

// Define your columns
const columns: MRT_ColumnDef<Person>[] = [
  { header: "First Name", accessorKey: "firstName" },
  { header: "Last Name", accessorKey: "lastName" },
  { header: "Age", accessorKey: "age" },
  { header: "Address", accessorKey: "address" },
];

const BasicTable = () => {
  return (
    <>
      <Title title="Basic Table" />
      <MaterialReactTable columns={columns} data={data} />;
    </>
  );
};

export default BasicTable;
