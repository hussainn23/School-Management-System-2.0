import { useState, useEffect } from 'react';
import { Modal } from '../common/Modal';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { addClass, updateClass } from '@/services/classService';
import { DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { useQueryClient, useMutation } from 'react-query';

interface ClassData {
  id: string;
  name: string;
  description: string;
}

interface ClassFormModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  classData?: ClassData | null;
}

const ClassFormModal = ({
  isModalOpen,
  closeModal,
  classData,
}: ClassFormModalProps) => {
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const queryClient = useQueryClient();

  const addMutation = useMutation(addClass, {
    onSuccess: () => {
      queryClient.invalidateQueries(['classes']);
      toast.success('Class added successfully!');
      closeModal();
    },
    onError: (error) => {
      setError('Error adding class. Please try again later.');
      console.error(error);
      toast.error('Error adding class');
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const updateMutation = useMutation(
    (data: { id: string; classData: Omit<ClassData, 'id'> }) =>
      updateClass(data.id, data.classData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['classes']);
        toast.success('Class updated successfully!');
        closeModal();
      },
      onError: (error) => {
        setError('Error updating class. Please try again later.');
        console.error(error);
        toast.error('Error updating class');
      },
      onSettled: () => {
        setIsSubmitting(false);
      },
    }
  );

  useEffect(() => {
    if (classData) {
      setClassName(classData.name);
      setDescription(classData.description);
    } else {
      setClassName('');
      setDescription('');
    }
  }, [classData]);

  const handleClassNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassName(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = {
      name: className,
      description,
    };

    if (classData) {
      updateMutation.mutate({ id: classData.id, classData: formData });
    } else {
      addMutation.mutate(formData);
    }
  };

  return (
    <Modal
      title={classData ? 'Edit Class' : 'Add New Class'}
      isOpen={isModalOpen}
      closeModal={closeModal}
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="classname" className="text-sm text-muted-foreground">
            Class Name
          </label>
          <Input
            name="name"
            placeholder="Enter classname"
            value={className}
            onChange={handleClassNameChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm text-muted-foreground"
          >
            Description
          </label>
          <Textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>

        <DialogFooter className="flex justify-between w-full mt-5">
          <Button
            type="button"
            variant="outline"
            onClick={closeModal}
            className="w-full"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant={'theme'}
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : classData ? 'Update' : 'Add'}
          </Button>
        </DialogFooter>

        {error && <div className="text-red-500 text-sm">{error}</div>}
      </form>
    </Modal>
  );
};

export default ClassFormModal;
