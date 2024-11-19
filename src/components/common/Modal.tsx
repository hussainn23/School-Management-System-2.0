import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTitle,
} from '../ui/dialog';

interface ModalProps {
    children: React.ReactNode;
    title: string;
    isOpen: boolean;
    closeModal: () => void;
    doSomething: ()=> void;
}

export const Modal = ({ children, title, isOpen, closeModal,doSomething }: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            {/* <DialogContent className='w-[300px] h-[500px] overflow-y-auto md:w-[600px] md:h-[500px]'> */}
            <DialogContent className='w-[350px] md:w-[500px] overflow-y-auto  max-h-[500px]'>
                <DialogTitle className="text-lg font-semibold">
                    {title}
                </DialogTitle>
                <div>{children}</div>
                <DialogFooter className="flex gap-2">
                    <Button variant={'default2'} onClick={doSomething}>
                        Save 
                    </Button>
                    <Button variant="outline" onClick={closeModal}>
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
