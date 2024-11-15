// src/components/modals/TimeTableModal.tsx

import React from 'react';
import { Modal } from '../common/Modal';

interface TimeTableModalProps {
  isOpen: boolean;
  closeModal: () => void;
  subjectName: string;
}

const TimeTableModal: React.FC<TimeTableModalProps> = ({ isOpen, closeModal, subjectName }) => {
  return (
    <Modal title="Time Table" isOpen={isOpen} closeModal={closeModal} doSomething={() => console.log('Time Table action')}>
      <div className="p-4">
        {/* Add your timetable display logic here */}
        <h3>Time Table for {subjectName}</h3>
        {/* Display the timetable details */}
      </div>
    </Modal>
  );
};

export default TimeTableModal;
