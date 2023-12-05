import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import AddStudentGeneralColumn from "components/AddStudentGeneralColumn";
import Sidebar1 from "components/Sidebar1";

const FamilyFivePage = () => {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-ibmplexsans gap-[23px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-start py-7 rounded-[20px] w-[97%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-3 w-full">
                <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
                  <div className="flex md:flex-col flex-row font-ibmplexsans md:gap-5 items-start justify-start w-[66%] md:w-full">
                    <Text
                      className="text-base text-gray-600"
                      size="txtIBMPlexSansRegular16"
                    >
                      General
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[41px] text-base text-gray-600"
                      size="txtIBMPlexSansRegular16"
                    >
                      Documents
                    </Text>
                    <Text
                      className="ml-10 md:ml-[0] text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Family
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[38px] text-base text-gray-600"
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
                  <div className="flex flex-col mt-[9px] relative w-[99%] md:w-full">
                    <Line className="bg-gray-400 h-0.5 mx-auto w-full" />
                    <Line className="bg-gray-900 h-1 mb-auto ml-[220px] mt-[-2px] w-[4%] z-[1]" />
                  </div>
                  <div className="flex sm:flex-col flex-row font-ibmplexsans gap-[30px] items-center justify-start mt-11 w-2/5 md:w-full">
                    <Button
                      className="cursor-pointer h-9 leading-[normal] text-base text-center w-[120px]"
                      shape="round"
                      color="gray_500_01"
                      size="sm"
                      variant="outline"
                    >
                      Father
                    </Button>
                    <Button
                      className="cursor-pointer h-9 leading-[normal] text-base text-center w-[120px]"
                      shape="round"
                      color="gray_500_01"
                      size="sm"
                      variant="outline"
                    >
                      Mother
                    </Button>
                    <Button
                      className="cursor-pointer h-9 leading-[normal] text-base text-center w-[120px]"
                      shape="round"
                      color="gray_900"
                      size="sm"
                      variant="fill"
                    >
                      Siblings
                    </Button>
                  </div>
                  <Text
                    className="mt-[69px] text-gray-700_02 text-xl"
                    size="txtInterSemiBold20"
                  >
                    Details of siblings who ore studing at this school
                  </Text>
                  <List
                    className="sm:flex-col flex-row font-inter gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-6 w-full"
                    orientation="horizontal"
                  >
                    <div className="md:h-[42px] h-[49px] relative w-full">
                      <Img
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Name 01
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[42px] h-[49px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Gender{" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-10 h-[49px] relative w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[42px] inset-x-[0] items-end justify-end mx-auto p-3.5 rounded-[3px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group23.svg')",
                        }}
                      >
                        <Img
                          className="h-[5px] mr-3.5 mt-[7px]"
                          src="images/img_arrowdown_blue_gray_400_01.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Grade
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                  </List>
                  <div className="flex md:flex-col flex-row font-inter gap-6 items-center justify-start mt-9 w-[66%] md:w-full">
                    <div className="md:h-[42px] h-[49px] relative w-[49%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Admission Nol
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[42px] h-[47px] relative w-[49%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour_One"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Attending school / University
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row font-inter gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[53px] w-full"
                    orientation="horizontal"
                  >
                    <div className="md:h-[42px] h-[49px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Name 02{" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[42px] h-[49px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Gender{" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-10 h-[49px] relative w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[42px] inset-x-[0] items-end justify-end mx-auto p-3.5 rounded-[3px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group23.svg')",
                        }}
                      >
                        <Img
                          className="h-[5px] mr-3.5 mt-[7px]"
                          src="images/img_arrowdown_blue_gray_400_01.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Grade
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                  </List>
                  <div className="flex md:flex-col flex-row font-inter gap-6 items-center justify-start mt-9 w-[66%] md:w-full">
                    <div className="md:h-[42px] h-[49px] relative w-[49%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour_Two"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Admission Nol
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[42px] h-[47px] relative w-[49%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour_Three"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Attending school / University
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[69px] text-gray-700_02 text-xl"
                    size="txtInterSemiBold20"
                  >
                    Details of other siblings
                  </Text>
                  <List
                    className="sm:flex-col flex-row font-inter gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-6 w-full"
                    orientation="horizontal"
                  >
                    <div className="md:h-[43px] h-[51px] relative w-full">
                      <div className="absolute bottom-[0] h-11 md:h-[43px] inset-x-[0] mx-auto w-full">
                        <Text
                          className="ml-[15px] my-auto text-blue_gray-900 text-sm"
                          size="txtInterRegular14"
                        >
                          Enter Name
                        </Text>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[19px] rounded-[3px] w-full"
                          style={{
                            backgroundImage: "url('images/img_group115.svg')",
                          }}
                        >
                          <Img
                            className="h-[5px] mr-[3px]"
                            src="images/img_arrowdown_blue_gray_400_01.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Name
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[43px] h-[51px] relative w-full">
                      <div className="absolute bottom-[0] h-11 md:h-[43px] inset-x-[0] mx-auto w-full">
                        <Text
                          className="ml-[15px] my-auto text-blue_gray-900 text-sm"
                          size="txtInterRegular14"
                        >
                          Select
                        </Text>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[19px] rounded-[3px] w-full"
                          style={{
                            backgroundImage: "url('images/img_group115.svg')",
                          }}
                        >
                          <Img
                            className="h-[5px] mr-[3px]"
                            src="images/img_arrowdown_blue_gray_400_01.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          School attended
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-11 h-[50px] relative w-full">
                      <div className="absolute bottom-[0] h-11 inset-x-[0] mx-auto w-full">
                        <Text
                          className="ml-[15px] my-auto text-blue_gray-900 text-sm"
                          size="txtInterRegular14"
                        >
                          Enter Name
                        </Text>
                        <Img
                          className="absolute h-11 inset-[0] justify-center m-auto rounded-[3px]"
                          src="images/img_group115.svg"
                          alt="rectangleFour"
                        />
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Attending school / University
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                  </List>
                  <div className="flex md:flex-col flex-row font-inter gap-6 items-center justify-start mt-[33px] w-[66%] md:w-full">
                    <div className="md:h-11 h-[50px] relative w-[49%] md:w-full">
                      <div className="absolute bottom-[0] flex h-11 inset-x-[0] justify-end mx-auto w-full">
                        <Text
                          className="mb-3 ml-[15px] mt-auto text-blue_gray-900 text-sm"
                          size="txtInterRegular14"
                        >
                          Enter Occupation
                        </Text>
                        <Img
                          className="absolute h-11 inset-[0] justify-center m-auto rounded-[3px]"
                          src="images/img_group115.svg"
                          alt="rectangleFour_Four"
                        />
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Occupation
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[43px] h-[51px] relative w-[49%] md:w-full">
                      <div className="absolute bottom-[0] h-11 md:h-[43px] inset-x-[0] mx-auto w-full">
                        <Text
                          className="ml-[15px] my-auto text-blue_gray-900 text-sm"
                          size="txtInterRegular14"
                        >
                          Select
                        </Text>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[19px] rounded-[3px] w-full"
                          style={{
                            backgroundImage: "url('images/img_group115.svg')",
                          }}
                        >
                          <Img
                            className="h-[5px] mr-[3px]"
                            src="images/img_arrowdown_blue_gray_400_01.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtInterSemiBold14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          Is he/she married?
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                  </div>
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

export default FamilyFivePage;
