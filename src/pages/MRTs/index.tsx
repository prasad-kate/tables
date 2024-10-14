import withRootLayout from "../../HOCs/withRootLayout";
import BasicTable from "./components/BasicTableMrt";
import ExportToCsvTable from "./components/ExcelExportTypeMrt";

function MaterialReactTable() {
  return (
    <div>
      <BasicTable />
      <ExportToCsvTable />
    </div>
  );
}

export default withRootLayout({
  component: MaterialReactTable,
});
