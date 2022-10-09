import { Button } from "../../shared/components/Button/Button";
import { Layout } from "../../shared/layout/Layout";
import { CollabList } from "../collabs/components/CollabList";
import { CollabModal } from "../../shared/components/modal/collabModal/CollabModal";
import { useState } from "react";
import { useAppContext } from "../../contexts/hooks/useAppContext";

export const Collab: React.FC = () => {

  const { state, ShowModal, CloseModal } = useAppContext();


  return (
      <>
        <div>
        { state.modal && (
            <CollabModal closeModal={CloseModal} modalTitle="Register your new collab!">
              <div className="flex items-center justify-center text-orange-300">
                <h1>Register your collaborator!</h1>
              </div>
            </CollabModal>
        ) }
        </div>
        <Layout phrase="Hello! Welcome to the Note Hero!">
          <div className="flex items-center justify-center p-6">
            <Button onClick={() => ShowModal()}  name="register a collab" />
          </div>
          <div>
            <CollabList />
          </div>
        </Layout>
      </>
  )
}