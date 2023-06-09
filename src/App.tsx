import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Auth/login";
import PrivateRoutes from "./components/Auth/privateRoutes";
import { AppContextProvider } from "./components/Context/index";
import ErrorPage from "./components/ErrorPage/index";
import Layout from "./components/Layout/index";
import AddNewSupplyItemForm from "./components/SupplyChainItems/addNewSupplyItem";
import SupplyChainContainer from "./components/SupplyChainItems/index";
import ItemDetailsPage from "./components/SupplyChainItems/itemDetailsPage";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppContextProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route
              path="/"
              element={
                <Layout>
                  <SupplyChainContainer />
                </Layout>
              }
            />

            <Route
              path="/add-item"
              element={
                <Layout>
                  <AddNewSupplyItemForm />
                </Layout>
              }
            />
            <Route
              path="/:id/item-details"
              element={
                <Layout>
                  <ItemDetailsPage />
                </Layout>
              }
            />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<ErrorPage />} path="/*" />
        </Routes>
      </AppContextProvider>
    </React.Fragment>
  );
};

export default App;
