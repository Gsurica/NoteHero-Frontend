import { TaskModal } from "../../shared/components/modal/TaskModal/TaskModal";
import { Layout } from "../../shared/layout/Layout";
import { TaskRender } from "./components/TaskRender";
import { useAppContext } from "../../contexts/hooks/useAppContext";
import { TimeTrackerModal } from "../../shared/components/modal/TimetrackersModal/TimeTrackersModal";

export const Task = () => {

  const { state, CloseModal} = useAppContext();

  return (
    <>
      { state.modal && (
      <TaskModal closeModal={() => CloseModal()} modalTitle="Edit your task!">
        <div className="flex items-center justify-center">
          <h1 className="tracking-widest font-bold">Edit your task!</h1>
        </div>
      </TaskModal>
      ) }
      {
        state.timetrackerModal && (
          <TimeTrackerModal modalTitle="Create your Time Tracker">
            <div className="flex items-center justify-center">
              <h1 className="tracking-widest font-bold">Create your time tracker!</h1>
            </div>
          </TimeTrackerModal>
        )
      }
      <Layout phrase="task view!" >
        <div>
          <TaskRender />
        </div>
      </Layout>
    </>
  )
}
