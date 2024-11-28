import {
    Dialog,
    DialogContent,
    DialogTitle,
} from '../ui/dialog';

interface ModalProps {
    children: React.ReactNode;
    title: string;
    isOpen: boolean;
    closeModal: () => void;
}

export const Modal = ({ children, title, isOpen, closeModal }: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent className='max-w-[500px] overflow-y-auto'>
                <DialogTitle className="text-lg font-semibold">
                    {title}
                </DialogTitle>
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    );
};
