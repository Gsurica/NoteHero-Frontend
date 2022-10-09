import { useState } from "react";
import { Layout } from "../../shared/layout/Layout"
import { TaskRender } from "./components/TaskRender"


export const Task = () => {
  return (
    <Layout phrase="task view!" >
      <div>
        <TaskRender />
      </div>
    </Layout>
  )
}
