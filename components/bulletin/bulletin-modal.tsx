// bulletin-modal.tsx

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBulletinModal } from "@/store/use-bulletin-modal";
import { format } from 'date-fns';
import { Button } from "../ui/button";

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
          <div>
          <Button
          variant="signin"
          size="lg"
          onClick={close}
        >
          Okay
        </Button>
        {notificationData && (
          <p>{notificationData.timestamp ? format(notificationData.timestamp, 'MMMM dd, yyyy hh:mm a') : 'No timestamp available'}</p>
        )}
        </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};