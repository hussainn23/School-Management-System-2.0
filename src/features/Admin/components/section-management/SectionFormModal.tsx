import { useState, useEffect } from 'react';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { addSection, updateSection } from '@/services/sectionService';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useQueryClient, useMutation } from 'react-query';

interface SectionData {
  id: string;
  section_name: string;
  description: string;
  class_id: string;
  medium: string;
  teacher_id: string;
}

interface SectionFormModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  sectionData?: SectionData | null;
  classes: { id: string; name: string }[];
  teachers: { id: string; name: string }[];
}

const SectionFormModal = ({
  isModalOpen,
  closeModal,
  sectionData,
  classes,
  teachers,
}: SectionFormModalProps) => {
  const [sectionName, setSectionName] = useState('');
  const [description, setDescription] = useState('');
  const [classId, setClassId] = useState('');
  const [medium, setMedium] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const queryClient = useQueryClient();

  const addMutation = useMutation(addSection, {
    onSuccess: () => {
      queryClient.invalidateQueries(['sections']);
      toast.success('Section added successfully!');
      closeModal();
    },
    onError: (error) => {
      setError('Error adding section. Please try again later.');
      console.error(error);
      toast.error('Error adding section');
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const updateMutation = useMutation(
    (data: { id: string; sectionData: Omit<SectionData, 'id'> }) =>
      updateSection(data.id, data.sectionData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['sections']);
        toast.success('Section updated successfully!');
        closeModal();
      },
      onError: (error) => {
        setError('Error updating section. Please try again later.');
        console.error(error);
        toast.error('Error updating section');
      },
      onSettled: () => {
        setIsSubmitting(false);
      },
    }
  );

  useEffect(() => {
    if (sectionData) {
      setSectionName(sectionData.section_name);
      setDescription(sectionData.description);
      setClassId(sectionData.class_id);
      setMedium(sectionData.medium);
      setTeacherId(sectionData.teacher_id);
    } else {
      setSectionName('');
      setDescription('');
      setClassId('');
      setMedium('');
      setTeacherId('');
    }
  }, [sectionData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData: Omit<SectionData, 'id'> = {
      section_name: sectionName,
      description,
      class_id: classId,
      medium,
      teacher_id: teacherId,
    };

    if (sectionData) {
      updateMutation.mutate({ id: sectionData.id, sectionData: formData });
    } else {
      addMutation.mutate(formData);
    }
  };

  return (
    <Modal
      title={sectionData ? 'Edit Section' : 'Add New Section'}
      isOpen={isModalOpen}
      closeModal={closeModal}
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="classname" className="text-sm text-muted-foreground">
            Class Name
          </label>
          <select
            id="classname"
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            className="w-full px-3 py-2 bg-background rounded-md border text-sm"
            required
          >
            <option value="">Select a class</option>
            {classes?.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="medium" className="text-sm text-muted-foreground">
            Medium
          </label>
          <select
            id="medium"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            className="w-full px-3 py-2 bg-background rounded-md border text-sm"
            required
          >
            <option value="">Select a medium</option>
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="teacher" className="text-sm text-muted-foreground">
            Teacher Incharge
          </label>
          <select
            id="teacher"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
            className="w-full px-3 py-2 bg-background rounded-md border text-sm"
            required
          >
            <option value="">Select a teacher</option>
            {teachers?.map((teacher: any) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher?.user?.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="section" className="text-sm text-muted-foreground">
            Section Name
          </label>
          <Input
            id="section"
            placeholder="Section name"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="description"
            className="text-sm text-muted-foreground"
          >
            Description
          </label>
          <Textarea
            id="description"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            variant="default"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : sectionData ? 'Update' : 'Add'}
          </Button>
        </DialogFooter>

        {error && <div className="text-red-500 text-sm">{error}</div>}
      </form>
    </Modal>
  );
};

export default SectionFormModal;
