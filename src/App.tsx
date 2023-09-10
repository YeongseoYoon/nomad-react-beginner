import { Outlet } from "react-router-dom";

import { Layout, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
