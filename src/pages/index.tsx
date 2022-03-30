import React from "react";
import { Navigate, Route, Routes } from "react-router";

const TasksListPage = React.lazy(() => import("./tasksList"));
const TaskDetailsPage = React.lazy(() => import("./taskDetails"));


export const Routing = () => (
    <Routes>
        <Route path="/" element={<TasksListPage />} />
        <Route path="/:taskId" element={<TaskDetailsPage />} />
    </Routes>
)
