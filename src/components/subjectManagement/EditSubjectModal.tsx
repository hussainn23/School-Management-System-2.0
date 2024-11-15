// src/components/modals/EditSubjectModal.tsx

import React from 'react';
import { Modal } from '../common/Modal'; // Assuming Modal component is in common folder
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select';
import { Input } from '../ui/input';

interface EditSubjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  doSomething: () => void;
  subjectName: string; // Optional: for pre-filling form fields
}

const EditSubjectModal: React.FC<EditSubjectModalProps> = ({ isOpen, closeModal, doSomething, subjectName }) => {
  return (
    <Modal title="Edit Subject" isOpen={isOpen} closeModal={closeModal} doSomething={doSomething}>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="class" className="text-sm">Class</label>
          <Select>
            <SelectTrigger className="text-muted-foreground">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="B">B</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="text-sm">Subject Name</label>
          <Input name="subject" defaultValue={subjectName} placeholder="Subject Name" />
        </div>

        {/* Additional fields for Teacher, Periods, etc. */}
      </form>
    </Modal>
  );
};

export default EditSubjectModal;
