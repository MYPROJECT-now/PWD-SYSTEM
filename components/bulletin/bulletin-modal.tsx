// bulletin-modal.tsx

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBulletinModal } from "@/store/use-bulletin-modal";
import Image from "next/image";

export const BulletinModal = () => {
  const { isOpen, close, notificationData } = useBulletinModal(); // Use notificationData to display dynamic content

  const handleClose = () => {
    close();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[500px]">
        <DialogHeader>
          <DialogTitle>{notificationData?.title}</DialogTitle> {/* Display title dynamically */}
        </DialogHeader>
        <DialogDescription>
          <div>
            <p>{notificationData?.message}</p> {/* Display message dynamically */}
            <Image
              src="/pwd.jpg"
              width={1000}
              height={100}
              alt="logo"
            />
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
