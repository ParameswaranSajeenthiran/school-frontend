import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import AddStudentGeneralColumn from "components/AddStudentGeneralColumn";
import SelectedStudentGeneralColumnvisolearn from "components/SelectedStudentGeneralColumnvisolearn";
import Sidebar1 from "components/Sidebar1";

const DocumentsTwoPage = () => {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-ibmplexsans gap-[23px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-start py-7 rounded-[20px] w-[97%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-[15px] w-full">
                <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
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
                  <div className="flex md:flex-col flex-row font-inter gap-[18px] items-center justify-start mt-[26px] w-[67%] md:w-full">
                    <div className="md:h-[42px] h-[49px] relative w-[49%] md:w-full">
                      <div className="absolute bottom-[0] flex h-[42px] inset-x-[0] justify-end mx-auto w-full">
                        <Text
                          className="mb-2.5 ml-[15px] mt-auto text-blue_gray-900 text-sm"
                          size="txtInterRegular14"
                        >
                          |
                        </Text>
                        <Img
                          className="absolute h-[42px] inset-[0] justify-center m-auto rounded-[3px] ml-[50px]"
                          src="images/img_rectangle4.svg"
                          alt="rectangleFour"
                        />
                      </div>
                      <Text
                        className="absolute left-[12%] text-gray-500_02 text-sm top-[0]"
                        size="txtInterSemiBold14"
                      >
                        <span className="text-indigo-A400 font-ibmplexsans text-left font-semibold">
                          Birth Certificate Number
                        </span>
                        <span className="text-gray-500_02 font-ibmplexsans text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans h-12 md:h-[42px] relative w-[49%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour_One"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansRegular14Gray800"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Birth Registry Office{" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-ibmplexsans gap-[18px] items-start justify-start mt-[60px] w-[67%] md:w-full">
                    <div className="h-12 md:h-[42px] md:mt-0 mt-0.5 relative w-[49%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour_Two"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansRegular14Gray800"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Index Of{" "}
                        </span>
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Grade 5 Scholorship Examination
                        </span>
                        <span className="text-gray-800 font-ibmplexsans text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-bold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[42px] h-[50px] relative w-[49%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour_Three"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansSemiBold14"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Achieved marks
                        </span>
                        <span className="text-gray-800 font-ibmplexsans text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[19px] items-end justify-start mt-16 w-[43%] md:w-full">
                    <div className="font-inter md:h-10 h-[47px] relative w-[76%] sm:w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[42px] inset-x-[0] items-end justify-start mx-auto p-2.5 rounded-[3px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group23.svg')",
                        }}
                      >
                        <Img
                          className="h-5 mr-3 w-5"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          O/L Subjects
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-ibmplexsans font-semibold h-[42px] leading-[normal] min-w-[91px] sm:mt-0 mt-1.5 text-center text-sm"
                      shape="round"
                      color="gray_900"
                      size="md"
                      variant="fill"
                    >
                      Add
                    </Button>
                  </div>
                  <div className="bg-gray-900 flex md:flex-col flex-row font-ibmplexsans md:gap-5 items-start justify-start mt-[30px] p-3 rounded-tl-[12px] rounded-tr-[12px] w-[67%] md:w-full">
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
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-col font-ibmplexsans items-center justify-start p-[9px] w-[67%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
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
                    className="flex flex-col font-ibmplexsans gap-px w-[67%]"
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
                  <div className="flex sm:flex-col flex-row gap-[19px] items-end justify-start mt-[63px] w-[43%] md:w-full">
                    <div className="font-inter md:h-10 h-[47px] relative w-[76%] sm:w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[42px] inset-x-[0] items-end justify-start mx-auto p-2.5 rounded-[3px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group23.svg')",
                        }}
                      >
                        <Img
                          className="h-5 mr-3 w-5"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_One"
                        />
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          A/L Subjects
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-ibmplexsans font-semibold h-[42px] leading-[normal] min-w-[91px] sm:mt-0 mt-1.5 text-center text-sm"
                      shape="round"
                      color="gray_900"
                      size="md"
                      variant="fill"
                    >
                      Add
                    </Button>
                  </div>
                  <div className="bg-gray-900 flex md:flex-col flex-row font-ibmplexsans md:gap-5 items-start justify-start mt-[30px] p-3 rounded-tl-[12px] rounded-tr-[12px] w-[67%] md:w-full">
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
                  <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-col font-ibmplexsans items-center justify-start p-[9px] w-[67%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
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
                    className="flex flex-col font-ibmplexsans gap-px w-[67%]"
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
                <AddStudentGeneralColumn className="flex flex-col items-center justify-start w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentsTwoPage;
