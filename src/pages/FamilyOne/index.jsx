import React from "react";

import { Button, Img, Line, Text } from "components";
import AddStudentGeneralColumn from "components/AddStudentGeneralColumn";
import Sidebar1 from "components/Sidebar1";

const FamilyOnePage = () => {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-ibmplexsans gap-[23px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-start py-7 rounded-[20px] w-[97%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[61px] items-center justify-start mb-[22px] w-full">
                <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[66%] md:w-full">
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
                    <Line className="bg-gray-900 h-1 mb-auto ml-[220px] mt-[-2px] w-[5%] z-[1]" />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start mt-11 w-2/5 md:w-full">
                    <Button
                      className="cursor-pointer h-9 leading-[normal] text-base text-center w-[120px]"
                      shape="round"
                      color="gray_900"
                      size="sm"
                      variant="fill"
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
                      color="gray_500_01"
                      size="sm"
                      variant="outline"
                    >
                      Siblings
                    </Button>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-6 items-center justify-start mt-[60px] w-[66%] md:w-full">
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
                          <>Father&#39;s Full name</>
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[42px] h-[49px] relative w-[49%] md:w-full">
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
                          Date of birth{" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="font-inter h-[199px] md:h-[228px] mt-9 relative w-full">
                    <Img
                      className="absolute h-48 inset-[0] justify-center m-auto rounded-[3px]"
                      src="images/img_group23.svg"
                      alt="rectangleFour_Two"
                    />
                    <Text
                      className="absolute left-[1%] text-gray-800 text-sm top-[0]"
                      size="txtInterSemiBold14Gray800"
                    >
                      <span className="text-gray-800 font-inter text-left font-normal">
                        Education Qualification{" "}
                      </span>
                      <span className="text-red-400 font-inter text-left font-semibold">
                        *
                      </span>
                    </Text>
                  </div>
                  <div className="font-inter md:gap-5 gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[33px] w-full">
                    <div className="md:h-[42px] h-[47px] relative w-full">
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
                          Telephone Number
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[42px] h-[47px] relative w-full">
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
                          Whatsup number{" "}
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
                          Viber number
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
                          Email
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[42px] h-[47px] relative w-full">
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
                    <div className="md:h-[42px] h-[47px] relative w-full">
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
                          Monthly income
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-red-400 font-inter text-left font-semibold">
                          *
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-[42px] h-[47px] relative w-full">
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
                          Address of work place{" "}
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
                          NIC number
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
                  <div className="font-inter md:h-[130px] h-[99px] mt-[37px] relative w-[66%] md:w-full">
                    <Img
                      className="absolute bottom-[0] h-[93px] inset-x-[0] mx-auto rounded-[3px]"
                      src="images/img_group23.svg"
                      alt="rectangleFour_Three"
                    />
                    <Text
                      className="absolute left-[2%] text-gray-800 text-sm top-[0]"
                      size="txtInterSemiBold14Gray800"
                    >
                      <span className="text-gray-800 font-inter text-left font-normal">
                        <>
                          If you are unable to mention father&#39;s NIC no
                          mention the reason{" "}
                        </>
                      </span>
                      <span className="text-red-400 font-inter text-left font-semibold">
                        *
                      </span>
                    </Text>
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

export default FamilyOnePage;
