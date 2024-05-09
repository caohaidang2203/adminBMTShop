import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AdminDashboardPage,
  AdminAddProductPage,
  AdminProductsPage,
  AdminOrdersPage,
  AdminCustomersPage,
  AdminAddNewsPage,
  AdminAddBranchPage,
  AdminBranchesPage,
  AdminMessagesPage,
  AdminOrderDetailPage,
} from "./routes/AdminRoutes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/add-product" element={<AdminAddProductPage />} />
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
        <Route path="/admin/customers" element={<AdminCustomersPage />} />
        <Route path="/admin/add-news" element={<AdminAddNewsPage />} />
        <Route path="/admin/add-branch" element={<AdminAddBranchPage />} />
        <Route path="/admin/branches" element={<AdminBranchesPage />} />
        <Route path="/admin/messages" element={<AdminMessagesPage />} />
        <Route path="/admin/messages" element={<AdminMessagesPage />} />
        <Route path="/admin/orderDetail" element={<AdminOrderDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
