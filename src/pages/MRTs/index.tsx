import withRootLayout from "../../HOCs/withRootLayout";
import BasicTable from "./components/BasicTableMrt";
import ChartDetailsTypeTable from "./components/ChartDetailsMrt";
import ColumnOrderingTable from "./components/ColumnOrderingMrt";
import ExportToCsvTable from "./components/ExcelExportTypeMrt";
import ExpandingDetailsTypeTable from "./components/ExpandingDetailsPanelMrt";
import ExpandingSubRowsTypeTable from "./components/ExpandingSubRowsTypeMrt";
import FilterSwitchingTypeTable from "./components/FilterSwitchingMrt";
import FilterWithVariantsTypeTable from "./components/FilterVarianstMrt";
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
      <ExpandingSubRowsTypeTable />
      <ExpandingDetailsTypeTable />
      <ChartDetailsTypeTable />
      <FilterWithVariantsTypeTable />
      <FilterSwitchingTypeTable />
    </div>
  );
}

export default withRootLayout({
  component: MaterialReactTable,
});
