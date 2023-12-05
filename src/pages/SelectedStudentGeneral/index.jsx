import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import SelectedStudentGeneralColumnvisolearn from "components/SelectedStudentGeneralColumnvisolearn";
import Sidebar1 from "components/Sidebar1";

const SelectedStudentGeneralPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-ibmplexsans gap-[17px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-start p-[34px] sm:px-5 rounded-[20px] w-[97%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[63px] w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-[67%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtIBMPlexSansMedium16"
                  >
                    General
                  </Text>
                  <Text
                    className="text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Documents
                  </Text>
                  <Text
                    className="text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Family
                  </Text>
                  <Text
                    className="text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Extra Curricular
                  </Text>
                  <Text
                    className="text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Guardian
                  </Text>
                  <Text
                    className="text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Marks
                  </Text>
                  <Text
                    className="text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Medical
                  </Text>
                </div>
                <div className="h-1 md:h-[13px] mt-[9px] relative w-full">
                  <Line className="absolute bg-gray-400 h-0.5 inset-x-[0] mx-auto top-[0] w-full" />
                  <Line className="absolute bg-gray-900 h-1 inset-y-[0] left-[0] my-auto w-[6%]" />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[26px] w-full">
                  <Img
                    className="h-[100px] md:h-auto object-cover rounded-[5px] w-[100px]"
                    src="images/img_rectangle41.png"
                    alt="rectangleFortyOne"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                      <Text
                        className="sm:mt-0 mt-[21px] text-gray-800 text-sm"
                        size="txtIBMPlexSansRegular14Gray800"
                      >
                        Admission Number
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[79px] sm:mt-0 mt-[21px] text-gray-800 text-sm"
                        size="txtIBMPlexSansRegular14Gray800"
                      >
                        Grade - Class
                      </Text>
                      <Button
                        className="common-pointer cursor-pointer leading-[normal] mb-1 min-w-[150px] sm:ml-[0] ml-[466px] rounded-[18px] text-center text-xs"
                        onClick={() => navigate("/addstudentgeneral")}
                        color="gray_400"
                        size="md"
                        variant="outline"
                      >
                        Edit Student
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[28%] md:w-full">
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        623GHDF45
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        08 - A
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[39px] w-[74%] md:w-full">
                  <Text
                    className="mb-1 text-gray-800 text-sm"
                    size="txtIBMPlexSansRegular14Gray800"
                  >
                    Name With Initials
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[242px] md:mt-0 mt-1 text-gray-800 text-sm"
                    size="txtIBMPlexSansRegular14Gray800"
                  >
                    Name Identified By Initials
                  </Text>
                  <Text
                    className="mb-1 md:ml-[0] ml-[190px] text-gray-800 text-sm"
                    size="txtIBMPlexSansRegular14Gray800"
                  >
                    Full Name{" "}
                  </Text>
                </div>
                <div className="md:gap-10 gap-[328px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between mt-[5px] w-[71%] md:w-full">
                  <Text
                    className="mb-[3px] text-base text-gray-900 w-full"
                    size="txtIBMPlexSansMedium16"
                  >
                    Test
                  </Text>
                  <Text
                    className="mt-[3px] text-base text-gray-900 w-full"
                    size="txtIBMPlexSansMedium16"
                  >
                    Test
                  </Text>
                  <Text
                    className="mb-[3px] text-base text-gray-900 w-full"
                    size="txtIBMPlexSansMedium16"
                  >
                    Test
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[58px] w-[78%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      Permanent Address
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[234px]">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      Name of Grama Niladhari’s Division
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[138px]">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      Division Number
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-[35px] w-[46%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      Divisional Secretariat
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      Residential Address
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[60px] w-4/5 md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      Email
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[323px]">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                        Mobile Number
                      </span>
                      <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                        {" "}
                      </span>
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[262px]">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      Telephone Number{" "}
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-9 w-[46%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      Viber Number
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                        WhatsApp Number
                      </span>
                      <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                        {" "}
                      </span>
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[67px] w-[85%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Is father alive
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Yes
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[270px]">
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Is mother alive
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      yes
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[259px]">
                    <Text
                      className="text-blue_gray-900 text-sm"
                      size="txtInterRegular14"
                    >
                      Father or mother devoiced
                    </Text>
                    <Text
                      className="h-[21px] text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      No
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row sm:gap-10 items-center justify-between mt-[62px] w-1/2 md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      No of Siblings
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      3
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Studying In Same School{" "}
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      2
                    </Text>
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

export default SelectedStudentGeneralPage;
