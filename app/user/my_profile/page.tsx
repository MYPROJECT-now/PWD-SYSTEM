// accountsPage.tsx
import { getUserData } from "@/actions/todoAction";
import { Dashboard_header } from "@/components/header";

const AccountsPage = async () => {
  // Get the current user's data based on Clerk authentication
  const userData = await getUserData();

  return (
    <div className="h-full p-3 w-full">
      <div className="bg-gray-400 h-full rounded-2xl pt-2">
        <Dashboard_header />
        <div className="mt-4 mx-16 bg-white h-[600px]">
          <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
            Account Details
          </div>
          <div className="px-5 py-4 flex flex-col gap-8">
            <div className="bg-green-400 text-green-900 p-2 w-[400px] rounded-md">
              <p>*Read-only</p>
              <p>*Direct to the office for changing any Information</p>
            </div>

            <div className="flex flex-row gap-5">
            
              <div>
                <p>Pwd number</p>
                <p className="w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.pwdNo}</p>
              </div>

              <div>
                <p>Issuance Date</p>
                <p className="w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.issueDate}</p>
              </div>

              <div>
                <p>Expiry Date</p>
                <p className="w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.expiryDate}</p>
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <div>
                <p>Last Name</p>
                <p className="w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.surname}</p>
              </div>

              <div>
                <p>First Name</p>
                <p className="w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.name}</p>
              </div>

              <div>
                <p>Middle Name</p>
                <p className="w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.middleName}</p>
              </div>
            </div>

            <div className="">
              <div>
                <p>Address</p>
                <p className="w-[600px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.Purok}</p>
              </div>
            </div>

            <div className="">
              <div>
                <p>Contact Information</p>
                <p className="w-[200px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.contactNo}</p>
              </div>
            </div>

          </div>
        </div>
    </div>
    </div>
  );
};

export default AccountsPage;
