// bulletin-modal.tsx

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBulletinModal } from "@/store/use-bulletin-modal";

export const BulletinModal = () => {
  const { isOpen, close, notificationData } = useBulletinModal(); // Use notificationData to display dynamic content

  const handleClose = () => {
    close();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[500px] min-h-[400px]">
        <DialogHeader>
          <DialogTitle  className="text-center">{notificationData?.title}</DialogTitle> {/* Display title dynamically */}
        </DialogHeader>
        <DialogDescription className="text-center flex flex-col justify-between">
          <p>{notificationData?.message}</p> {/* Display message dynamically */}
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white h-[50px] font-bold py-2 px-4 rounded "
          onClick={close}
        >
          Okay
        </button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
