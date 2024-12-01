// accountsPage.tsx
import { getUserData } from "@/actions/todoAction";

const AccountsPage = async () => {
  // Get the current user's data based on Clerk authentication
  const userData = await getUserData();

  return (
    <div className="h-full p-3 w-full">
      <div className="bg-gray-400 h-full rounded-2xl pt-2">
        <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
          Account Management
        </div>
        <div className="mt-4 mx-16 bg-white h-[600px]">
          <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
            Account Details
          </div>
          <div className="px-5 py-4">
            <h3 className="text-lg font-semibold">User Information</h3>
            <div className="mt-2">
              <p><strong>Full Name:</strong> {userData.name} {userData.middleName} {userData.surname}</p>
              <p><strong>Age:</strong> {userData.age}</p>
              <p><strong>Purok:</strong> {userData.Purok}</p>
              <p><strong>Contact:</strong> {userData.contactNo}</p>
              <p><strong>Disability Type:</strong> {userData.typeOfDisability}</p>
              <p><strong>Status:</strong> {userData.status}</p>
              <p><strong>Issue Date:</strong> {userData.issueDate}</p>
              <p><strong>Expiry Date:</strong> {userData.expiryDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
