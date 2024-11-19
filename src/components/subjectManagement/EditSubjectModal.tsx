import React from 'react';
import { Modal } from '../common/Modal'; 
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select';
import { Input } from '../ui/input';

interface EditSubjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  doSomething: () => void;
  subjectName: string; 
}

const EditSubjectModal: React.FC<EditSubjectModalProps> = ({ isOpen, closeModal, doSomething, subjectName }) => {
  return (
    <Modal title="Edit Subject" isOpen={isOpen} closeModal={closeModal} doSomething={doSomething}>
      <form className="flex flex-col gap-4">

        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex flex-col gap-1 flex-1">
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

          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="section" className="text-sm">Section</label>
            <Select>
              <SelectTrigger className="text-muted-foreground">
                <SelectValue placeholder="Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="subject" className="text-sm">Subject Name</label>
            <Input name="subject" placeholder="Subject Name" defaultValue={subjectName} />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="teacher" className="text-sm">Teacher</label>
            <Select>
              <SelectTrigger className="text-muted-foreground">
                <SelectValue placeholder="Teacher Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="periods" className="text-sm">Number of periods</label>
          <Input name="periods" placeholder="01" />
        </div>

        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="startingTime" className="text-sm">Starting Time</label>
            <Input className="w-full block" type="date" name="startingTime" placeholder="Select" />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="endingTime" className="text-sm">Ending Time</label>
            <Input className="w-full block" type="date" name="endingTime" placeholder="Select" />
          </div>
        </div>

      </form>
    </Modal>
  );
};

export default EditSubjectModal;

