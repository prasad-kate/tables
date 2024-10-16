import withRootLayout from "../../HOCs/withRootLayout";
import BasicTable from "./components/BasicTableMrt";
import ColumnOrderingTable from "./components/ColumnOrderingMrt";
import ExportToCsvTable from "./components/ExcelExportTypeMrt";
import ExportToPdfTable from "./components/PdfExportTypeMrt";
import RowDraggingTable from "./components/RowDraggingMrt";
import RowOrderingTable from "./components/RowOrderingMrt";

function MaterialReactTable() {
  return (
    <div>
      <BasicTable />
      <ExportToCsvTable />
      <ExportToPdfTable />
      <ColumnOrderingTable />
      <RowOrderingTable />
      <RowDraggingTable />
    </div>
  );
}

export default withRootLayout({
  component: MaterialReactTable,
});
