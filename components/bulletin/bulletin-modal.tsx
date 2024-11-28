import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { useBulletinModal } from "@/store/use-bulletin-modal";
import Image from "next/image";

  export const BulletinModal = () => {

    const { isOpen, close } = useBulletinModal();

    
  const handleClose = () => {
    close();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="w-[500px]">
          <DialogHeader>
            <DialogTitle>ANNOUNCEMENT</DialogTitle>
          </DialogHeader>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
              <Image
                src="/pwd.jpg" 
                width={1000} 
                height={100} 
                alt="logo" 
              />

            </DialogDescription>
        </DialogContent>
      </Dialog>
      
    );
  };
