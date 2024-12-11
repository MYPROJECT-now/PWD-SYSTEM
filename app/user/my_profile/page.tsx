// accountsPage.tsx
import { getUserData } from "@/actions/todoAction";
import { Dashboard_header_user } from "@/components/header/header_user";

const AccountsPage = async () => {
  // Get the current user's data based on Clerk authentication
  const userData = await getUserData();

  return (
    <div className="min-h-full p-3 w-full">
      <div className="bg-gray-400 h-full rounded-2xl py-2 ">
        <Dashboard_header_user />
        <div className="mt-4 mx-auto sm:mx-16 bg-white h-full w-[330px] sm:w-[800px] xl:w-[1100px]">
          <div className="bg-dash font-bold text-white text-lg py-5 pl-5">
            Account Details
          </div>
          <div className="px-5 py-4 flex flex-col gap-8">
            <div className="bg-green-400 text-green-900 text-[7px] sm:text-sm lg:text-lg p-2 w-[200px] sm:w-[400px] rounded-md">
              <p>*Read-only</p>
              <p>*Direct to the office for changing any Information</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
            
              <div>
                <p>Pwd number</p>
                <p className="w-[300px] sm:w-[200px] xl:w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.pwdNo}</p>
              </div>

              <div>
                <p>Issuance Date</p>
                <p className="w-[300px] sm:w-[200px] xl:w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.issueDate}</p>
              </div>

              <div>
                <p>Expiry Date</p>
                <p className="w-[300px] sm:w-[200px] xl:w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.expiryDate}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <div>
                <p>Last Name</p>
                <p className="w-[300px] sm:w-[200px] xl:w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.surname}</p>
              </div>

              <div>
                <p>First Name</p>
                <p className="w-[300px] sm:w-[200px] xl:w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.name}</p>
              </div>

              <div>
                <p>Middle Name</p>
                <p className="w-[300px] sm:w-[200px] xl:w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.middleName}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <div>
                <p>Address</p>
                <p className="w-[300px] sm:w-[200px] xl:w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.Purok}</p>
              </div>

              <div>
                <p>Date of Birth</p>
                <p className="w-[300px] sm:w-[200px] xl:w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.dateOfBirth}</p>
              </div>

              <div>
                <p>Gender</p>
                <p className="w-[300px] sm:w-[200px] xl:w-[300px] bg-neutral-300 rounded-sm border-2 border-neutral-400 text-neutral-500 p-1">{userData.gender}</p>
              </div>
            </div>


          </div>
        </div>
    </div>
    </div>
  );
};

export default AccountsPage;
