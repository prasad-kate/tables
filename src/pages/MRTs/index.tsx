import withRootLayout from "../../HOCs/withRootLayout";
import BasicTable from "./components/BasicTableMrt";
import ColumnOrderingTable from "./components/ColumnOrderingMrt";
import ExportToCsvTable from "./components/ExcelExportTypeMrt";
import InlineCellEditTypeTable from "./components/InlineCellEditMrt";
import InlineRowEditTypeTable from "./components/InlineRowEditMrt";
import ModalExportTypeTable from "./components/ModalEditingTypeMrt";
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
      <ModalExportTypeTable />
      <InlineRowEditTypeTable />
      <InlineCellEditTypeTable />
    </div>
  );
}

export default withRootLayout({
  component: MaterialReactTable,
});
