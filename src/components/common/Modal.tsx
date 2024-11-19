import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '../ui/dialog';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  doSomething: () => void;
  description?: string;
}

export const Modal = ({
  children,
  title,
  isOpen,
  closeModal,
  doSomething,
  description,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="w-[350px] md:w-[500px]">
        <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
        <div>{children}</div>
        <DialogFooter className="flex gap-2">
          
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
              <Button onClick={doSomething}>Add</Button>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
