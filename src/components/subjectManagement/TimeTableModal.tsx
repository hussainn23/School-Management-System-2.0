import { Input } from '../ui/input';
import React from 'react';
import { Modal } from '../common/Modal';

interface TimeTableModalProps {
  isOpen: boolean;
  closeModal: () => void;
  subjectName?: string;
}

const TimeTableModal: React.FC<TimeTableModalProps> = ({ isOpen, closeModal }) => {
  return (
    <Modal title="Time Table" isOpen={isOpen} closeModal={closeModal}>
        <form className="flex flex-col gap-4">
      
        <div className="flex flex-col gap-1">
          <label htmlFor="period" className="text-sm">Period</label>
          <Input name="period" placeholder="Period" />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="startingTime" className="text-sm">Starting Time</label>
          <Input className="w-full block" type="date" name="startingTime" placeholder="Select" />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="endingTime" className="text-sm">Ending Time</label>
          <Input className="w-full block" type="date" name="endingTime" placeholder="Select" />
        </div>

        {/* Other form fields for Teacher, Period, etc. */}
      </form>
    </Modal>
  );
};

export default TimeTableModal;
