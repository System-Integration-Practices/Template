import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import TestUIStules from "./pages/TestUIStyles";
import TestUIStyles from "./pages/TestUIStyles";
import Sidebar from "./components/Sidebar";
import Main from "./layouts/Main";
import Analysis from "./pages/Analysis";
import CreateWord from "./pages/CreateWord";
import ManageWord from "./pages/ManageWord";
import DetailWord from "./pages/DetailWord";
import EditWord from "./pages/EditWord";

function App() {
  return (
    <Routes>
      <Route element={<Main></Main>}>
        <Route path="/" element={<Analysis></Analysis>}></Route>
        <Route path="/create-word" element={<CreateWord></CreateWord>}></Route>
        <Route
          path="/detail-word/:id"
          element={<DetailWord></DetailWord>}
        ></Route>
        <Route path="/edit-word/:id" element={<EditWord></EditWord>}></Route>
        <Route path="/manage-word" element={<ManageWord></ManageWord>}></Route>
        <Route
          path="/test-ui-styles"
          element={<TestUIStyles></TestUIStyles>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
