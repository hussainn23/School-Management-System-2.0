import { Modal } from '../common/Modal';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface AddSubjectProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const AddSubject = ({ isModalOpen, closeModal }: AddSubjectProps) => {
  return (
    <Modal
      title="Add New Class"
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
          <Input name="classname" placeholder="Classname e.g: 9th,10th" />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="description"
            className="text-sm text-muted-foreground"
          >
            Description
          </label>
          <Textarea name="description" placeholder="Description" />
        </div>
      </form>
    </Modal>
  );
};

export default AddSubject;
