import withRootLayout from "../../HOCs/withRootLayout";
import BasicTable from "./components/BasicTableMrt";
import ExportToCsvTable from "./components/ExcelExportTypeMrt";
import ExportToPdfTable from "./components/PdfExportTypeMrt";

function MaterialReactTable() {
  return (
    <div>
      <BasicTable />
      <ExportToCsvTable />
      <ExportToPdfTable />
    </div>
  );
}

export default withRootLayout({
  component: MaterialReactTable,
});
