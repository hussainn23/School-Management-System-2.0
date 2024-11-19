import { Modal } from '../common/Modal';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface AddSectionProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const AddSection = ({ isModalOpen, closeModal }: AddSectionProps) => {
  return (
    <Modal
      title="Add New Section"
      isOpen={isModalOpen}
      closeModal={closeModal}
      doSomething={() => {
        console.log('Modal action!');
        closeModal();
      }}
    >
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="classname" className="text-sm text-muted-foreground">
            Class Name
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a class" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Class 1</SelectItem>
                <SelectItem value="banana">Class 2</SelectItem>
                <SelectItem value="blueberry">Class 3</SelectItem>
                <SelectItem value="grapes">Class 4</SelectItem>
                <SelectItem value="pineapple">Class 5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="medium" className="text-sm text-muted-foreground">
            Medium
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">English </SelectItem>
                <SelectItem value="banana">Urdu</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="teacher" className="text-sm text-muted-foreground">
            Teacher Incharge
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Teacher 1</SelectItem>
                <SelectItem value="banana">Teacher 2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="section" className="text-sm text-muted-foreground">
            Section Name
          </label>
          <Input placeholder="Section name" />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="description"
            className="text-sm text-muted-foreground"
          >
            Description
          </label>
          <Textarea placeholder="Description..." />
        </div>
      </form>
    </Modal>
  );
};

export default AddSection;
