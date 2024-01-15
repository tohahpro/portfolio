

// const ContactMe = () => {
//     return (
//         <div className="h-[200px] flex items-center">


//             <div>
//                 <div className="w-72">

//                     <input type="text" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactMe;


import { Input } from "@material-tailwind/react";

export function InputDefault() {
    return (
        <div className="w-72">
            <Input label="Username" />
        </div>
    );
}