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
import { CldImage } from "next-cloudinary";

export const BulletinModal = () => {
  const { isOpen, close, notificationData } = useBulletinModal(); // Use notificationData to display dynamic content

  const handleClose = () => {
    close();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[500px] min-h-[400px] flex flex-col">
        <DialogHeader>
          <DialogTitle className=" text-center text-white text-xl pt-3 bg-dash w-[502px] h-[50px] -mt-[25px] -ml-[26px] rounded-t-lg">{notificationData?.title}</DialogTitle> {/* Display title dynamically */}
        </DialogHeader>
        <DialogDescription className="text-center flex flex-col justify-between">

            <div className="min-h-[300px]">
              <p>{notificationData?.message}</p> {/* Display message dynamically */}

              <div className="">
            <CldImage
                    width="300"
                    height="300"
                    src={notificationData?.imageSrc || ""}
                    alt={notificationData?.title || ""}
                    className="mx-auto w-[150px] h-[150px]"
                  />
            </div>
            </div>
        
          
          <div>
          <Button
          variant="signin"
          size="lg"
          className="mb-3"
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