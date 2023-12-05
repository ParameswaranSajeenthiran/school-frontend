import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";
import { useRef, useMemo, useState } from "react";

import { Button, Img, Line, ReactTable, Text, Input } from "components";
import Sidebar1 from "components/Sidebar1";

const StudentsDetailsPage = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [activeFrame, setActiveFrame] = useState(null);
  const [checkboxState, setCheckboxState] = useState({
    frame3Option1: false,
    frame4Option1: false,
    // ... other checkboxes
  });

  const handleButtonClick = () => {
    setShowPopup(!showPopup);
  };

  const handleOptionClick = (frameNumber) => {
    setActiveFrame(frameNumber);
  };

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxState({
      ...checkboxState,
      [checkboxName]: !checkboxState[checkboxName],
    });
  };

  const tableData = React.useRef([
    {
      no: "01",
      fullname: "Full Name",
      admissionnumberOne: "Admission Number",
      gradeclass: "Grade - Class",
      emergencycontacOne: "Emergency Contact",
    },
    {
      no: "02",
      fullname: "Full Name",
      admissionnumberOne: "Admission Number",
      gradeclass: "Grade - Class",
      emergencycontacOne: "Emergency Contact",
    },
    {
      no: "01",
      fullname: "Full Name",
      admissionnumberOne: "Admission Number",
      gradeclass: "Grade - Class",
      emergencycontacOne: "Emergency Contact",
    },
    {
      no: "01",
      fullname: "Full Name",
      admissionnumberOne: "Admission Number",
      gradeclass: "Grade - Class",
      emergencycontacOne: "Emergency Contact",
    },
    {
      no: "01",
      fullname: "Full Name",
      admissionnumberOne: "Admission Number",
      gradeclass: "Grade - Class",
      emergencycontacOne: "Emergency Contact",
    },
    {
      no: "01",
      fullname: "Full Name",
      admissionnumberOne: "Admission Number",
      gradeclass: "Grade - Class",
      emergencycontacOne: "Emergency Contact",
    },
    {
      no: "01",
      fullname: "Full Name",
      admissionnumberOne: "Admission Number",
      gradeclass: "Grade - Class",
      emergencycontacOne: "Emergency Contact",
    },
    {
      no: "01",
      fullname: "Full Name",
      admissionnumberOne: "Admission Number",
      gradeclass: "Grade - Class",
      emergencycontacOne: "Emergency Contact",
    },
    {
      no: "01",
      fullname: "Full Name",
      admissionnumberOne: "Admission Number",
      gradeclass: "Grade - Class",
      emergencycontacOne: "Emergency Contact",
    },
    {
      no: "01",
      fullname: "Full Name",
      admissionnumberOne: "Admission Number",
      gradeclass: "Grade - Class",
      emergencycontacOne: "Emergency Contact",
    },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("no", {
        cell: (info) => (
          <Text
            className="pb-[7px] sm:pl-5 pl-[35px] pt-3.5 text-gray-900 text-sm"
            size="txtIBMPlexSansRegular14Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[198px] sm:pl-5 pl-[35px] py-3.5 text-blue_gray-100_01 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            No
          </Text>
        ),
      }),
      tableColumnHelper.accessor("fullname", {
        cell: (info) => (
          <Text
            className="pb-2 pt-3.5 text-gray-900 text-sm"
            size="txtIBMPlexSansRegular14Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[203px] py-3.5 text-blue_gray-100_01 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            Full Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("admissionnumberOne", {
        cell: (info) => (
          <Text
            className="pb-2 pt-3.5 text-gray-900 text-sm"
            size="txtIBMPlexSansRegular14Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[259px] py-3.5 text-blue_gray-100_01 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            Admission Number
          </Text>
        ),
      }),
      tableColumnHelper.accessor("gradeclass", {
        cell: (info) => (
          <Text
            className="pb-2 pt-3.5 text-gray-900 text-sm"
            size="txtIBMPlexSansRegular14Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[223px] py-3.5 text-blue_gray-100_01 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            Grade - Class
          </Text>
        ),
      }),
      tableColumnHelper.accessor("emergencycontacOne", {
        cell: (info) => (
          <Text
            className="pb-1.5 pt-4 text-gray-900 text-sm"
            size="txtIBMPlexSansRegular14Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[177px] pb-[11px] pt-[17px] text-blue_gray-100_01 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            Emergency Contact
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-ibmplexsans gap-[17px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-end p-[17px] rounded-tl-[20px] rounded-tr-[20px] w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start mt-[17px] w-[96%] md:w-full">
                <div className="flex flex-col items-start justify-start pb-12 w-full">
                  <div className="flex flex-row gap-[30px] items-center justify-start w-[23%] md:w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      All Students
                    </Text>
                    <Text
                      className="text-base text-gray-600"
                      size="txtIBMPlexSansRegular16"
                    >
                      Students Details
                    </Text>
                  </div>
                  <div className="h-1 md:h-[15px] mt-[11px] relative w-full">
                    <Line className="absolute bg-gray-400 h-0.5 inset-x-[0] mx-auto top-[0] w-full" />
                    <Line className="absolute bg-gray-900 h-1 inset-y-[0] left-[0] my-auto w-[6.5%]" />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[26px] w-full">
                    <div className="h-9 relative w-[37%] md:w-full">
                      <Input
                        className="ml-10 my-auto text-gray-600 text-sm"
                        size="txtIBMPlexSansRegular14"
                        placeholder="Search student"
                      >
                        Search student
                      </Input>
                      <div className="absolute border border-gray-400 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-2.5 rounded-[18px] w-full">
                        <Img
                          className="h-4 ml-1 md:ml-[0] w-4"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      </div>
                    </div>
                    {showPopup && (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-md">
      <button onClick={() => handleOptionClick(3)} className="px-4 py-2 m-2 bg-blue-500 text-white rounded-md">
        Grade
      </button>
      {activeFrame === 3 && (
        <div className="p-4 m-2 border rounded-md">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={checkboxState.frame3Option1}
              onChange={() => handleCheckboxChange('frame3Option1')}
              className="mr-2"
            />
            <label>Option 1</label>
          </div>
          {/*... other checkboxes*/}
        </div>
      )}
      <button onClick={() => handleOptionClick(4)} className="px-4 py-2 m-2 bg-blue-500 text-white rounded-md">
        Medium
      </button>
      {activeFrame === 4 && (
        <div className="p-4 m-2 border rounded-md">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={checkboxState.frame4Option1}
              onChange={() => handleCheckboxChange('frame4Option1')}
              className="mr-2"
            />
            <label>Option 1</label>
          </div>
          {/*... other checkboxes*/}
        </div>
      )}
      {/*... other frames*/}
    </div>
  </div>
)}

                    <Button
                      className="flex h-9 items-center justify-center md:ml-[0] ml-[23px] w-9"
                      shape="circle"
                      color="indigo_50"
                      size="xs"
                      variant="fill"
                      onClick={handleButtonClick}
                    >
                      <Img
                        className="h-[26px]"
                        src="images/img_ionfilter.svg"
                        alt="ionfilter"
                      />
                    </Button>
                    <Text
                      className="ml-5 md:ml-[0] text-gray-600 text-sm"
                      size="txtIBMPlexSansRegular14"
                    >
                      104 results
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer leading-[normal] min-w-[150px] md:ml-[0] ml-[567px] rounded-[18px] text-center text-xs"
                      onClick={() => navigate("/addstudentgeneral")}
                      color="gray_400"
                      size="md"
                      variant="outline"
                    >
                      Add New Student
                    </Button>
                  </div>
                  <div className="overflow-auto mt-[30px] w-full">
                    <ReactTable
                      columns={tableColumns}
                      data={tableData.current}
                      rowClass={""}
                      headerClass="bg-gray-900"
                    />
                  </div>
                  <div className="h-[95px] relative w-full">
                    <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-col items-center justify-end mb-[-1px] mx-auto p-3 w-full z-[1]">
                      <div className="h-5 w-[94%]"></div>
                    </div>
                    <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-col items-center justify-end mt-auto mx-auto p-3 w-full">
                      <div className="h-5 w-[94%]"></div>
                    </div>
                  </div>
                  <div className="h-[95px] mt-72 relative w-full">
                    <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-col items-center justify-end mb-[-1px] mx-auto p-3 w-full z-[1]">
                      <div className="h-5 w-[94%]"></div>
                    </div>
                    <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-col items-center justify-end mt-auto mx-auto p-3 w-full">
                      <div className="h-5 w-[94%]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:h-5 sm:h-[255px] h-[37px] relative w-full">
                    {/* <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto w-[91%]">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        01
                      </Text>
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Full Name
                      </Text>
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Admission Number
                      </Text>
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Grade - Class
                      </Text>
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Emergency Contact
                      </Text>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsDetailsPage;
