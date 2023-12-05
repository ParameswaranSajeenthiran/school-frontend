import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import AddStudentGeneralColumn from "components/AddStudentGeneralColumn";
import SelectedStudentGeneralColumnvisolearn from "components/SelectedStudentGeneralColumnvisolearn";
import Sidebar1 from "components/Sidebar1";

const AddStudentGeneralPage = () => {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-ibmplexsans gap-[17px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-start py-[34px] rounded-[20px] w-[97%] md:w-full">
              <div className="flex flex-col gap-[52px] items-center justify-start mb-[17px] w-full">
                <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
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
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[31px] w-full">
                    <div className="bg-indigo-50 flex flex-col h-[100px] items-center justify-start p-5 rounded-[5px] w-[100px]">
                      <Img
                        className="h-[60px] w-[60px]"
                        src="images/img_phuserthin.svg"
                        alt="phuserthin"
                      />
                    </div>
                    <div className="md:h-[42px] h-[49px] relative w-[21%] md:w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[42px] inset-x-[0] items-end justify-start mx-auto p-[11px] rounded-[3px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group23.svg')",
                        }}
                      >
                        <Img
                          className="h-5 mr-2.5 w-5"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      </div>
                      <Text
                        className="absolute left-[7%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansRegular14Gray800"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Image{" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[17px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="md:h-[42px] h-[50px] relative w-full">
                        <Img
                          className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                          src="images/img_group23.svg"
                          alt="rectangleFour"
                        />
                        <Text
                          className="absolute left-[4%] text-blue_gray-600 text-sm top-[0]"
                          size="txtIBMPlexSansRegular14Bluegray600"
                        >
                          <span className="text-blue_gray-600 font-ibmplexsans text-left font-normal">
                            Admission Number{" "}
                          </span>
                          <span className="text-red-400 font-ibmplexsans text-left font-normal">
                            *
                          </span>
                        </Text>
                      </div>
                      <div className="md:h-[42px] h-[50px] relative w-full">
                        <Img
                          className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                          src="images/img_group23.svg"
                          alt="rectangleFour"
                        />
                        <Text
                          className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                          size="txtIBMPlexSansRegular14Gray800"
                        >
                          <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                            Grade - Class{" "}
                          </span>
                          <span className="text-red-400 font-ibmplexsans text-left font-normal">
                            *
                          </span>
                        </Text>
                      </div>
                    </List>
                  </div>
                  <div className="font-inter md:gap-5 gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[34px] w-full">
                    <div className="md:h-[42px] h-[49px] relative w-full">
                      <div className="absolute bottom-[0] flex h-[42px] inset-x-[0] justify-end mx-auto w-full">
                        <Text
                          className="mb-2.5 ml-[15px] mt-auto text-blue_gray-900 text-sm"
                          size="txtInterRegular14"
                        >
                          |
                        </Text>
                        <Img
                          className="absolute h-[42px] inset-[0] justify-center m-auto rounded-[3px]"
                          src="images/img_rectangle4.svg"
                          alt="rectangleFour"
                        />
                      </div>
                      <Text
                        className="absolute left-[4%] text-gray-500_02 text-sm top-[0]"
                        size="txtInterSemiBold14"
                      >
                        <span className="text-indigo-A400 font-ibmplexsans text-left font-semibold">
                          Name With Initials
                        </span>
                        <span className="text-gray-500_02 font-ibmplexsans text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans h-12 md:h-[42px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansSemiBold14"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Name Identified By Initials{" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansSemiBold14"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Full Name{" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansRegular14Gray800"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Permanent Address
                        </span>
                        <span className="text-gray-800 font-ibmplexsans text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-bold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansSemiBold14"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Name of Grama Niladhari’s Division{" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansSemiBold14"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Division Number{" "}
                        </span>
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansRegular14Gray800"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Divisional Secretariat
                        </span>
                        <span className="text-gray-800 font-ibmplexsans text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-bold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansSemiBold14"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Residential Address{" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansRegular14Gray800"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Email
                        </span>
                        <span className="text-gray-800 font-ibmplexsans text-left font-bold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-bold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansSemiBold14"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          Mobile Number
                        </span>
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          {" "}
                        </span>
                        <span className="text-red-400 font-ibmplexsans text-left font-normal">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="font-ibmplexsans h-12 md:h-[42px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansRegular14Gray800"
                      >
                        Telephone Number{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-ibmplexsans gap-[18px] items-center justify-start mt-8 w-[67%] md:w-full">
                    <div className="md:h-[42px] h-[50px] relative w-[49%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansRegular14Gray800"
                      >
                        Viber Number
                      </Text>
                    </div>
                    <div className="h-12 md:h-[42px] relative w-[49%] md:w-full">
                      <Img
                        className="absolute bottom-[0] h-[42px] inset-x-[0] mx-auto rounded-[3px]"
                        src="images/img_group23.svg"
                        alt="rectangleFour_One"
                      />
                      <Text
                        className="absolute left-[4%] text-gray-800 text-sm top-[0]"
                        size="txtIBMPlexSansSemiBold14"
                      >
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          WhatsApp Number
                        </span>
                        <span className="text-gray-800 font-ibmplexsans text-left font-normal">
                          {" "}
                        </span>
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row font-inter gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[70px] w-full"
                    orientation="horizontal"
                  >
                    <div className="flex md:h-10 h-[42px] justify-end relative w-full">
                      <Text
                        className="mb-2.5 ml-[15px] mt-auto text-blue_gray-900 text-sm"
                        size="txtInterRegular14"
                      >
                        Is father alive
                      </Text>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[5px] rounded-[3px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group24.svg')",
                        }}
                      >
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_akariconsbox.svg"
                          alt="akariconsbox"
                        />
                      </div>
                    </div>
                    <div className="flex md:h-10 h-[42px] justify-end relative w-full">
                      <Text
                        className="mb-2.5 ml-[15px] mt-auto text-blue_gray-900 text-sm"
                        size="txtInterRegular14"
                      >
                        Is mother alive
                      </Text>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[5px] rounded-[3px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group24.svg')",
                        }}
                      >
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_akariconsbox.svg"
                          alt="akariconsbox"
                        />
                      </div>
                    </div>
                    <div className="flex md:h-10 h-[42px] justify-end relative w-full">
                      <Text
                        className="mb-2.5 ml-[15px] mt-auto text-blue_gray-900 text-sm"
                        size="txtInterRegular14"
                      >
                        Father or mother devoiced
                      </Text>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[5px] rounded-[3px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group24.svg')",
                        }}
                      >
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_akariconsbox.svg"
                          alt="akariconsbox"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="flex md:flex-col flex-row font-inter gap-[18px] items-center justify-start mt-[71px] w-[67%] md:w-full">
                    <div className="md:h-10 h-[47px] relative w-[49%] md:w-full">
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
                          No of Siblings
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-10 h-[47px] relative w-[49%] md:w-full">
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
                          Studying In Same School{" "}
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

export default AddStudentGeneralPage;
