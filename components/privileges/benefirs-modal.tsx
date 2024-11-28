import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { useBenefitsModal } from "@/store/use-benefits-modal";

  export const BenefitsModal = () => {
    const { isOpen, close } = useBenefitsModal();

    const handleClose = () => {
      close();
      };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose} >
        <DialogContent className="w-[1000px] min-h-[400px] text-center " >
            <DialogHeader>
            <DialogTitle>
              <p className="w-full text-center">BENEFITS</p>
            </DialogTitle>
            </DialogHeader>
            <DialogDescription>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </DialogDescription>
        </DialogContent>
        </Dialog>
    );
  };