import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import SelectedStudentGeneralColumnvisolearn from "components/SelectedStudentGeneralColumnvisolearn";
import Sidebar1 from "components/Sidebar1";

const DocumentsPage = () => {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-ibmplexsans gap-[23px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-start p-7 sm:px-5 rounded-[20px] w-[97%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-2.5 w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[67%] md:w-full">
                  <Text
                    className="text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    General
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[41px] text-base text-gray-900"
                    size="txtIBMPlexSansMedium16"
                  >
                    Documents
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[39px] text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Family
                  </Text>
                  <Text
                    className="ml-10 md:ml-[0] text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Extra Curricular
                  </Text>
                  <Text
                    className="ml-10 md:ml-[0] text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Guardian
                  </Text>
                  <Text
                    className="ml-10 md:ml-[0] text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Marks
                  </Text>
                  <Text
                    className="ml-10 md:ml-[0] text-base text-gray-600"
                    size="txtIBMPlexSansRegular16"
                  >
                    Medical
                  </Text>
                </div>
                <div className="flex flex-col mt-[9px] relative w-full">
                  <Line className="bg-gray-400 h-0.5 mx-auto w-full" />
                  <Line className="bg-gray-900 h-1 mb-auto ml-[99px] mt-[-2px] w-[6%] z-[1]" />
                </div>
                <div className="flex flex-row items-center justify-between mt-8 w-[32%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      Birth Certificate Number
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
                      Birth Registry Office
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[93px] items-center justify-start mt-[59px] w-[44%] md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtIBMPlexSansRegular14Gray800"
                    >
                      <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                        Index Of{" "}
                      </span>
                      <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                        Grade 5 Scholorship Examination
                      </span>
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
                      Achieved marks
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-inter items-center justify-start mt-[74px]">
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtInterRegular14Gray800"
                  >
                    O/L Subjects
                  </Text>
                </div>
                <div className="bg-gray-900 flex md:flex-col flex-row font-ibmplexsans md:gap-5 items-start justify-start mt-3 p-3 rounded-tl-[12px] rounded-tr-[12px] w-[46.5%] md:w-full">
                  <Text
                    className="ml-7 md:ml-[0] md:mt-0 my-0.5 text-blue_gray-100_01 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    Year
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[97px] md:mt-0 my-0.5 text-blue_gray-100_01 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    Index Number
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[98px] md:mt-0 mt-1 text-blue_gray-100_01 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    Subject
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[180px] md:mt-0 my-0.5 text-blue_gray-100_01 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    Results
                  </Text>
                </div>
                <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-col font-ibmplexsans items-center justify-start p-[9px] w-[46.5%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full mr-[20px]">
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[57px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      2015
                    </Button>
                    <Text
                      className="bg-gray-100 h-[29px] justify-center md:ml-[0] ml-[77px] pl-1 pr-2 py-1 rounded-[3px] text-gray-900 text-sm w-24"
                      size="txtIBMPlexSansRegular14Gray900"
                    >
                      5235226246
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[99px] text-gray-900 text-sm"
                      size="txtIBMPlexSansRegular14Gray900"
                    >
                      Sinhala
                    </Text>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[57px] md:ml-[0] ml-[182px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      A
                    </Button>
                  </div>
                </div>
                <List
                  className="flex flex-col font-ibmplexsans gap-px w-[46.5%]"
                  orientation="vertical"
                >
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-row sm:gap-10 gap-[202px] items-center justify-end p-[9px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[29px] mr-[46px] rounded-[3px] w-[9%]"></div>
                  </div>
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-row sm:gap-10 gap-[202px] items-center justify-end p-[9px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[29px] mr-[46px] rounded-[3px] w-[9%]"></div>
                  </div>
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-row sm:gap-10 gap-[202px] items-center justify-end p-[9px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[29px] mr-[46px] rounded-[3px] w-[9%]"></div>
                  </div>
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-row sm:gap-10 gap-[202px] items-center justify-end p-[9px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[29px] mr-[46px] rounded-[3px] w-[9%]"></div>
                  </div>
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-row sm:gap-10 gap-[202px] items-center justify-end p-[9px] rounded-bl-[12px] rounded-br-[12px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[29px] mr-[46px] rounded-[3px] w-[9%]"></div>
                  </div>
                </List>
                <div className="flex flex-col font-inter items-center justify-start mt-[38px]">
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtInterRegular14Gray800"
                  >
                    A/L Subjects
                  </Text>
                </div>
                <div className="bg-gray-900 flex md:flex-col flex-row font-ibmplexsans md:gap-5 items-start justify-start mt-[18px] p-3 rounded-tl-[12px] rounded-tr-[12px] w-[46.5%] md:w-full">
                  <Text
                    className="ml-7 md:ml-[0] md:mt-0 my-0.5 text-blue_gray-100_01 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    Year
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[97px] md:mt-0 my-0.5 text-blue_gray-100_01 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    Index Number
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[98px] md:mt-0 mt-1 text-blue_gray-100_01 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    Subject
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[180px] md:mt-0 my-0.5 text-blue_gray-100_01 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    Results
                  </Text>
                </div>
                <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-col font-ibmplexsans items-center justify-start p-[9px] w-[46.5%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full mr-[20px]">
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[57px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      2015
                    </Button>
                    <Text
                      className="bg-gray-100 h-[29px] justify-center md:ml-[0] ml-[77px] pl-1 pr-2 py-1 rounded-[3px] text-gray-900 text-sm w-24"
                      size="txtIBMPlexSansRegular14Gray900"
                    >
                      5235226246
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[99px] text-gray-900 text-sm"
                      size="txtIBMPlexSansRegular14Gray900"
                    >
                      Sinhala
                    </Text>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[57px] md:ml-[0] ml-[182px] text-center text-sm"
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    >
                      A
                    </Button>
                  </div>
                </div>
                <List
                  className="flex flex-col font-ibmplexsans gap-px w-[46.5%]"
                  orientation="vertical"
                >
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-row sm:gap-10 gap-[202px] items-center justify-end p-[9px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[29px] mr-[46px] rounded-[3px] w-[9%]"></div>
                  </div>
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-row sm:gap-10 gap-[202px] items-center justify-end p-[9px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[29px] mr-[46px] rounded-[3px] w-[9%]"></div>
                  </div>
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-row sm:gap-10 gap-[202px] items-center justify-end p-[9px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[29px] mr-[46px] rounded-[3px] w-[9%]"></div>
                  </div>
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-row sm:gap-10 gap-[202px] items-center justify-end p-[9px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[29px] mr-[46px] rounded-[3px] w-[9%]"></div>
                  </div>
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-row sm:gap-10 gap-[202px] items-center justify-end p-[9px] rounded-bl-[12px] rounded-br-[12px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtIBMPlexSansRegular14Gray900"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="bg-gray-100 h-[29px] mr-[46px] rounded-[3px] w-[9%]"></div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentsPage;
