import withRootLayout from "../../HOCs/withRootLayout";
import BasicTable from "./components/BasicTableMrt";
import ColumnOrderingTable from "./components/ColumnOrderingMrt";
import ExportToCsvTable from "./components/ExcelExportTypeMrt";
import InlineCellEditTypeTable from "./components/InlineCellEditMrt";
import InlineRowEditTypeTable from "./components/InlineRowEditMrt";
import InlineTableEditTypeTable from "./components/InlineTableEditMrt";
import ModalExportTypeTable from "./components/ModalEditingTypeMrt";
import ExportToPdfTable from "./components/PdfExportTypeMrt";
import RowDraggingTable from "./components/RowDraggingMrt";
import RowOrderingTable from "./components/RowOrderingMrt";
import TreeEditingTypeTable from "./components/TreeEditingMrt";

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
      <InlineTableEditTypeTable />
      <TreeEditingTypeTable />
    </div>
  );
}

export default withRootLayout({
  component: MaterialReactTable,
});
