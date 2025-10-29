// import React from "react";
// import { FaTimes } from "react-icons/fa";

// const CartSidebar = ({ open, onClose }) => {
//   return (
//     <div
//       className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 z-[9999] ${
//         open ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <div className="flex justify-between items-center p-4 border-b">
//         <h2 className="text-xl font-semibold text-[#85D200]">Your Cart</h2>
//         <button onClick={onClose} className="text-gray-500 hover:text-[#85D200]">
//           <FaTimes className="text-xl" />
//         </button>
//       </div>

//       <div className="p-4 text-gray-700">
//         <p className="text-sm text-gray-500">Your selected trips will appear here.</p>
//         <div className="mt-4 flex flex-col gap-4">
//           {/* Example item */}
//           <div className="flex items-center justify-between border p-3 rounded-lg bg-blue-50">
//             <span>Paris Getaway</span>
//             <span className="font-medium">$1299</span>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 w-full p-4 border-t">
//         <button className="w-full bg-[#85D200] text-white py-3 rounded-lg font-medium hover:bg-[#75b400] transition">
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartSidebar;
