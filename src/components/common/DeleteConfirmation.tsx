import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';

interface DeleteConfirmationProps {
  isModalOpen: boolean;
  closeModal: () => void;
  doSomething: () => void;
}

const DeleteConfirmation = ({
  isModalOpen,
  closeModal,
  doSomething,
}: DeleteConfirmationProps) => {
  return (
    <AlertDialog open={isModalOpen} onOpenChange={closeModal}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm</AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to delete this?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-end items-end gap-2">
          <AlertDialogCancel asChild>
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="default" onClick={doSomething}>
              Proceed
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmation;
