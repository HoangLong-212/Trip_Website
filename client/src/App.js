import React from "react";
import { Fragment } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publishRoutes } from "./routes";
import { DefaultLayout } from "@/components/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {publishRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
