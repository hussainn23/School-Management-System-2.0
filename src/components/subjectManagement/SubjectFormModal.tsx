import React, { useEffect } from 'react';
import { Modal } from '../common/Modal';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMutation, useQueryClient } from 'react-query';
import { addSubject, updateSubject } from '@/services/subjectService';
import { toast } from 'sonner';

const subjectSchema = z.object({
  class_id: z
    .union([z.string(), z.number()])
    .refine((val) => val !== '', 'Class is required'),
  section_id: z
    .union([z.string(), z.number()])
    .refine((val) => val !== '', 'Section is required'),
  name: z.string().min(1, 'Subject name is required'),
  teacher_id: z
    .union([z.string(), z.number()])
    .refine((val) => val !== '', 'Teacher is required'),
  period_num: z
    .union([z.string(), z.number()])
    .refine((val) => val !== '', 'Number of periods is required'),
  starting_time: z.string().min(1, 'Starting time is required'),
  ending_time: z.string().min(1, 'Ending time is required'),
});

type SubjectFormData = z.infer<typeof subjectSchema>;

interface SubjectFormModalProps {
  isOpen: boolean;
  closeModal: () => void;
  subjectData?: (SubjectFormData & { id: string }) | null;
  classes: { id: string | number; name: string }[];
  sections: { id: string | number; section_name: string }[];
  teachers: { id: string | number; user: { name: string } }[];
}

const SubjectFormModal: React.FC<SubjectFormModalProps> = ({
  isOpen,
  closeModal,
  subjectData,
  classes,
  sections,
  teachers,
}) => {
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubjectFormData>({
    resolver: zodResolver(subjectSchema),
    defaultValues: subjectData || {
      class_id: '',
      section_id: '',
      name: '',
      teacher_id: '',
      period_num: '',
      starting_time: '',
      ending_time: '',
    },
  });

  useEffect(() => {
    if (subjectData) {
      reset(subjectData);
    }
  }, [subjectData, reset]);

  const addMutation = useMutation(addSubject, {
    onSuccess: () => {
      queryClient.invalidateQueries(['subjects']);
      toast.success('Subject added successfully');
      closeModal();
    },
    onError: () => {
      toast.error('Error adding subject');
    },
  });

  const updateMutation = useMutation(
    ({ id, data }: { id: string; data: SubjectFormData }) =>
      updateSubject(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['subjects']);
        toast.success('Subject updated successfully');
        closeModal();
      },
      onError: () => {
        toast.error('Error updating subject');
      },
    }
  );

  const onSubmit = (data: SubjectFormData) => {
    if (subjectData?.id) {
      updateMutation.mutate({ id: subjectData.id, data });
    } else {
      addMutation.mutate(data);
    }
  };

  return (
    <Modal
      title={subjectData ? 'Edit Subject' : 'Add Subject'}
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="class_id" className="text-sm">
              Class
            </label>
            <Controller
              name="class_id"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded-md bg-background text-sm"
                  value={field.value?.toString() || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <option value="">Select Class</option>
                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.id.toString()}>
                      {cls.name}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.class_id && (
              <p className="text-red-500 text-xs">{errors.class_id.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="section_id" className="text-sm">
              Section
            </label>
            <Controller
              name="section_id"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded-md bg-background text-sm"
                  value={field.value?.toString() || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <option value="">Select Section</option>
                  {sections.map((section) => (
                    <option key={section.id} value={section.id.toString()}>
                      {section.section_name}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.section_id && (
              <p className="text-red-500 text-xs">
                {errors.section_id.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name" className="text-sm">
              Subject Name
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Subject Name" />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="teacher_id" className="text-sm">
              Teacher
            </label>
            <Controller
              name="teacher_id"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded-md bg-background text-sm"
                  value={field.value?.toString() || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <option value="">Select Teacher</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id.toString()}>
                      {teacher.user.name}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.teacher_id && (
              <p className="text-red-500 text-xs">
                {errors.teacher_id.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="period_num" className="text-sm">
            Number of periods
          </label>
          <Controller
            name="period_num"
            control={control}
            render={({ field }) => <Input {...field} placeholder="01" />}
          />
          {errors.period_num && (
            <p className="text-red-500 text-xs">{errors.period_num.message}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="starting_time" className="text-sm">
              Starting Time
            </label>
            <Controller
              name="starting_time"
              control={control}
              render={({ field }) => (
                <Input {...field} type="time" className="w-full block" />
              )}
            />
            {errors.starting_time && (
              <p className="text-red-500 text-xs">
                {errors.starting_time.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="ending_time" className="text-sm">
              Ending Time
            </label>
            <Controller
              name="ending_time"
              control={control}
              render={({ field }) => (
                <Input {...field} type="time" className="w-full block" />
              )}
            />
            {errors.ending_time && (
              <p className="text-red-500 text-xs">
                {errors.ending_time.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit">
            {subjectData ? 'Update' : 'Add'} Subject
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SubjectFormModal;
