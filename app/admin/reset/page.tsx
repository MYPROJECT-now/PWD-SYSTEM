"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dashboard_header } from "@/components/header/header";
import AdminClientComponent from "../admin_validate";

const ChangePassword = () => {
    const [pwdNo, setPwdNo] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handlePasswordReset = async () => {
        setIsButtonDisabled(true); // Disable the button when clicked
        try {
            const response = await fetch('/api/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pwdNo }),
            });
    
            const data = await response.json();
    
           
            if (response.ok) {
                alert('The password has been changed and sent to the users email.');
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch  {
            alert(`An unexpected error occurred`);
        } finally {
            setIsButtonDisabled(false); // Re-enable the button after processing

            //clear the input field

            setPwdNo('');
        }
    };
    

    return (
        <div className="h-full p-3 w-full">
            <AdminClientComponent>
                <div className="flex flex-col w-full h-full bg-gray-300 rounded-2xl pt-2">
                    <Dashboard_header />
                    <div className="mt-4 mx-16 h-[520px]">
                        <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
                            Reset PWD Password
                        </div>
                        <div className="flex flex-col w-full h-full items-center justify-center bg-white rounded-2xl pt-2">
                            <div className="h-[625px] flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center bg-gray-500 text-white  h-[300px] w-[500px] rounded-lg">
                                    <h1 className="text-2xl font-bold mb-4">Reset User Password</h1>
                                    <input
                                        type="text"
                                        placeholder="Enter PWD No."
                                        value={pwdNo}
                                        onChange={(e) => setPwdNo(e.target.value)}
                                        className="mt-4 p-2 border rounded text-black"
                                    />
                                    <Button
                                        onClick={handlePasswordReset}
                                        variant="signin"
                                        size="lg"
                                        className="mt-5 text-black"
                                        disabled={isButtonDisabled} // Disable button when state is true
                                    >
                                        Reset Password
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminClientComponent>
        </div>
    );
};

export default ChangePassword;
