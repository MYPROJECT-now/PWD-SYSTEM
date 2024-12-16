"use client";
import { ChangeEvent, FC, useState, useEffect } from "react";
import moment from "moment";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAddModal } from "@/store/use-add-modal";
import { Button } from "./ui/button";

interface Props {
  createTodo: (
    pwdNo: string,
    surname: string,
    name: string,
    middleName: string,
    Purok: string,
    age: number,
    dateOfBirth: string,
    gender: string,
    issueDate: string,
    expiryDate: string,
    typeOfDisability: string,
    status: string
  ) => void;
}

export const AddTodo: FC<Props> = ({ createTodo }) => {
  const [pwdNo, setPwdNo] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [Purok, setPurok] = useState("");
  const [age, setAge] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [typeOfDisability, setTypeOfDisability] = useState("");
  const [status, setStatus] = useState("Active");

  const { isOpen, close } = useAddModal();

  const handleClose = () => {
    close();
    window.location.reload();
  };

  const validateName = (name: string) => /^[a-zA-Z\s'-]+$/.test(name);

  const handleInputChange =
    (setter: (value: string) => void, validator?: (value: string) => boolean) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { value } = e.target;
      if (!validator || value === "" || validator(value)) {
        setter(value);
      }
    };

  // Calculate age based on dateOfBirth
  useEffect(() => {
    if (dateOfBirth) {
      const birthDate = moment(dateOfBirth);
      const age = moment().diff(birthDate, 'years');
      setAge(age.toString());
    }
  }, [dateOfBirth]);

  const handleAdd = async () => {
    if (
      !pwdNo ||
      !surname ||
      !name ||
      !Purok ||
      !age ||
      !dateOfBirth ||
      !gender ||
      !issueDate ||
      !expiryDate ||
      !typeOfDisability
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (
      !moment(issueDate, "YYYY-MM-DD", true).isValid() ||
      !moment(expiryDate, "YYYY-MM-DD", true).isValid() ||
      !moment(dateOfBirth, "YYYY-MM-DD", true).isValid()
    ) {
      alert("Invalid date format. Please use YYYY-MM-DD.");
      return;
    }

    // Check if the Date of Birth is not after today's date
    if (moment(dateOfBirth).isAfter(moment())) {
      alert("The child has not been born yet.");
      return;
    }

    if (moment(expiryDate).isBefore(moment(issueDate))) {
      alert("Expiry date cannot be before issue date.");
      return;
    }

    if (age && (Number(age) < 0 || Number(age) > 59)) {
      alert("Invalid age. Please enter a valid age.");
      return;
    }

    createTodo(
      pwdNo,
      surname,
      name,
      middleName,
      Purok,
      Number(age),
      dateOfBirth,
      gender,
      issueDate,
      expiryDate,
      typeOfDisability,
      status
    );
    setPwdNo("");
    setSurname("");
    setName("");
    setMiddleName("");
    setPurok("");
    setAge("");
    setDateOfBirth("");
    setGender("");
    setIssueDate("");
    setExpiryDate("");
    setTypeOfDisability("");
    setStatus("Active");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-center text-white text-xl pt-3 bg-green-800 w-[513px] h-[50px] -mt-[25px] -ml-[26px] rounded-t-lg">
            ADD PWD MEMBER
          </DialogTitle>
          <DialogDescription className="text-center text-xl py-5">
            <div className="w-full flex flex-col gap-0 mt-2">
              {/* pwdNo */}
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="PwdNo">PwdNo:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    type="number"
                    placeholder="25"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setPwdNo)}
                    value={pwdNo}
                  />
                </div>
              </div>

              {/* Surname input */}
              <div className="flex flex-row gap-9 ">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="Surname">Surname:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    placeholder="Recierdo"
                    type="text"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setSurname, validateName)}
                    value={surname}
                  />
                </div>
              </div>
              {/* Name input */}
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="Name">Name:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    type="text"
                    placeholder="Angela"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setName, validateName)}
                    value={name}
                  />
                </div>
              </div>
              {/* Middle Name input */}
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="MiddleName">MiddleName:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    type="text"
                    placeholder="Mae"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setMiddleName, validateName)}
                    value={middleName}
                  />
                </div>
              </div>
              {/* Purok input */}
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="Purok">Purok:</label>
                </div>
                <div className="w-[320px] text-black">
                  <select
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setPurok)}
                    value={Purok}
                  >
                    <option value="">Select Purok</option>
                    <option value="Purok 1">Purok 1</option>
                    <option value="Purok 2">Purok 2</option>
                    <option value="Purok 3">Purok 3</option>
                    <option value="Purok 4">Purok 4</option>
                    <option value="Purok 5">Purok 5</option>
                    <option value="Purok 6">Purok 6</option>
                    <option value="Purok 7">Purok 7</option>
                  </select>
                </div>
              </div>

              {/* Date of Birth input */}
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="DateOfBirth">Date of Birth:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    type="date"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setDateOfBirth)}
                    value={dateOfBirth}
                  />
                </div>
              </div>

              {/* Age input */}
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="Age">Age:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    type="number"
                    placeholder="25"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setAge)}
                    value={age}
                    disabled
                  />
                </div>
              </div>

              {/* Other fields */}
              {/* Gender, Issue Date, Expiry Date, Type of Disability */}
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="Gender">Gender:</label>
                </div>
                <div className="w-[320px] text-black">
                  <select
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setGender)}
                    value={gender}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              {/* Issue Date */}
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="IssueDate">Issue Date:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    type="date"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setIssueDate)}
                    value={issueDate}
                  />
                </div>
              </div>
              {/* Expiry Date */}
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="ExpiryDate">Expiry Date:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    type="date"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setExpiryDate)}
                    value={expiryDate}
                  />
                </div>
              </div>
              {/* Type of Disability */}
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="TypeOfDisability">TypeOfDisability:</label>
                </div>
                <div className="w-[320px] text-black">
                  <select
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleInputChange(setTypeOfDisability)}
                    value={typeOfDisability}
                  >
                    <option value="">Select Disability</option>
                    <option value="Deaf/Hard of Hearing">Deaf/Hard of Hearing</option>
                    <option value="Intellectual Disability">Intellectual Disability</option>
                    <option value="Learning Disability">Learning Disability</option>
                    <option value="Mental Disability">Mental Disability</option>
                    <option value="Physical Disability">Physical Disability</option>
                    <option value="Psychological Disability">Psychological Disability</option>
                    <option value="Speech and Language Impairment">Speech and Language Impairment</option>
                    <option value="Visual Disability">Visual Disability</option>
                    <option value="Cancer">Cancer (RA11215)</option>
                    <option value="Rare Disease">Rare Disease</option>
                  </select>
                </div>
              </div>

              {/* Add button */}
              <div className="mt-4 text-center">
                <Button onClick={handleAdd}>Add</Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
