// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//   } from "@/components/ui/dialog"
// import { useBulletinModal } from "@/store/use-bulletin-modal";
// import Image from "next/image";

// //   export const BulletinModal = () => {

// //     const { isOpen, close } = useBulletinModal();

    
// //   const handleClose = () => {
// //     close();
// //     };

// //     return (
// //         <Dialog open={isOpen} onOpenChange={handleClose}>
// //         <DialogContent className="w-[500px]">
// //           <DialogHeader>
// //             <DialogTitle>title</DialogTitle>
// //           </DialogHeader>
// //             <DialogDescription>
// //              message
// //               <Image
// //                 src="/pwd.jpg" 
// //                 width={1000} 
// //                 height={100} 
// //                 alt="logo" 
// //               />

// //             </DialogDescription>
// //         </DialogContent>
// //       </Dialog>
      
// //     );
// //   };




// export const BulletinModal = () => {
//   const { isOpen, title, message, close } = useBulletinModal();

//   if (!isOpen) return null;

//   return (
// <Dialog open={isOpen} onOpenChange={close}>
//      <DialogContent className="w-[500px]">
//        <DialogHeader>
//          <DialogTitle>{title}</DialogTitle>
//          </DialogHeader>
//            <DialogDescription>
//            {message}
//              <Image
//                 src="/pwd.jpg" 
//                 width={1000} 
//                 height={100} 
//                 alt="logo" 
//               />

//             </DialogDescription>
//         </DialogContent>
//       </Dialog>
 
//   );
// };



//       //    <div className="modal">
//       //    <div className="modal-content">
//       //      <h2>{title}</h2>
//       //      <p>{message}</p>
//       //      <button onClick={close}>Close</button>
//       //    </div>
//       //  </div>
   