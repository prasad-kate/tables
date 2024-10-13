import withRootLayout from "../HOCs/withRootLayout";

function Home() {
  return <div className="font-semibold">Home Page</div>;
}

export default withRootLayout({
  component: Home,
});
