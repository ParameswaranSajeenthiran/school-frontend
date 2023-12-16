import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="flex flex-col items-center justify-start mt-[26px] mx-auto">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                size="txtAlfaSlabOneRegular28"
              >
                Viso Learn
              </Text>
            </div>
            <div className="flex flex-col font-ibmplexsans items-center justify-start md:ml-[0] ml-[62px] mr-[71px] mt-[23px] w-[49%]">
              <Img
                className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                src="images/img_ellipse1.png"
                alt="ellipseOne"
              />
              <Text
                className="mt-[7px] text-gray-300 text-xl"
                size="txtIBMPlexSansBold20"
              >
                School Name
              </Text>
              <Text
                className="text-base text-gray-300"
                size="txtIBMPlexSansSemiBold16"
              >
                Colombo
              </Text>
            </div>
            <div className="flex flex-col font-ibmplexsans items-center justify-start mb-[406px] mt-6 w-full">
              <div className="h-[60px] relative w-full">
                <div className="bg-gray-100 h-[37px] ml-auto mr-[21px] my-auto rounded-br-[20px] rounded-tr-[20px] w-[74%] mt-[12px]"></div>
                <div className="absolute h-[60px] inset-[0] justify-center m-auto w-full">
                  <div className="flex flex-row gap-[11px] h-full items-center justify-center ml-[27px] my-auto w-1/2">
                    <div className="bg-gray-100 h-9 rounded-[50%] w-9"></div>
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtIBMPlexSansMedium16Gray90001"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="absolute border border-gray-900 border-solid flex flex-row gap-[30px] h-full inset-[0] items-center justify-center m-auto md:pr-10 sm:pr-5 pr-[202px] w-full">
                    <Line className="bg-gray-100 h-[60px] w-[5px]" />
                    <Img
                      className="h-5 w-5"
                      src="images/img_grid_black_900_01.svg"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[60px] relative w-full">
                <div className="bg-gray-900 h-[37px] ml-auto mr-[21px] my-auto rounded-br-[20px] rounded-tr-[20px] w-[74%]"></div>
                <div className="absolute h-[60px] inset-[0] justify-center m-auto w-full">
                  <div className="flex flex-row gap-[11px] h-full items-center justify-start ml-[27px] my-auto w-[65%]">
                    <div className="bg-gray-900_01 h-9 rounded-[50%] w-9"></div>
                    <Text
                      className="text-base text-blue_gray-100_b2"
                      size="txtIBMPlexSansRegular16Bluegray100b2"
                    >
                      Students Details
                    </Text>
                  </div>
                  <div
                    className="common-pointer absolute border border-gray-900 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 w-full"
                    onClick={() => navigate("/studentdetails")}
                  >
                    <Img
                      className="h-5 md:ml-[0] ml-[15px] w-5"
                      src="images/img_phstudentfill_blue_gray_100.svg"
                      alt="phstudentfill"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[60px] relative w-full">
                <div className="bg-gray-900 h-[37px] ml-auto mr-[21px] my-auto rounded-br-[20px] rounded-tr-[20px] w-[74%]"></div>
                <div className="absolute h-[60px] inset-[0] justify-center m-auto w-full">
                  <div className="flex flex-row gap-[11px] h-full items-center justify-center ml-[27px] my-auto w-[53%]">
                    <div className="bg-gray-900_01 h-9 rounded-[50%] w-9"></div>
                    <Text
                      className="text-base text-blue_gray-100_b2"
                      size="txtIBMPlexSansRegular16Bluegray100b2"
                    >
                      Staff Details
                    </Text>
                  </div>
                  <div  onClick={() => navigate("/studentdetails")}className="absolute border border-gray-900 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 w-full">
                    <Img
                      className="h-5 md:ml-[0] ml-[15px] w-5"
                      src="images/img_tdesignuser.svg"
                      alt="tdesignuser"
                    />
                  </div>
                </div>
              </div>
              <div className="md:h-[57px] h-[60px] relative w-full">
                <div className="bg-gray-900 h-[37px] ml-auto mr-[21px] my-auto rounded-br-[20px] rounded-tr-[20px] w-[74%]"></div>
                <div className="absolute md:h-[57px] h-[60px] inset-[0] justify-center m-auto w-full">
                  <div className="flex flex-row gap-[11px] h-full items-center justify-center ml-[27px] my-auto w-[55%]">
                    <div className="bg-gray-900_01 h-9 rounded-[50%] w-9"></div>
                    <Text
                      className="text-base text-blue_gray-100_b2"
                      size="txtIBMPlexSansRegular16Bluegray100b2"
                    >
                      Class Details
                    </Text>
                  </div>
                  <div className="absolute border border-gray-900 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 w-full">
                    <div className="flex flex-col h-5 items-center justify-start md:ml-[0] ml-[15px] p-0.5 w-5">
                      <Img
                        className="h-[13px]"
                        src="images/img_grid.svg"
                        alt="grid_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[60px] relative w-full mr-[32px]">
                <div className="bg-gray-900 h-[37px] ml-auto mr-[21px] my-auto rounded-br-[20px] rounded-tr-[20px] w-[74%]"></div>
                <div className="absolute border border-gray-900 border-solid flex flex-row gap-[11px] h-full inset-[0] items-center justify-center m-auto p-3 w-full">
                  <div className="bg-gray-900_01 flex flex-col h-9 items-center justify-start ml-[15px] p-2 rounded-[50%] w-9">
                    <Img
                      className="h-5 w-5"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                  </div>
                  <Text
                    className="text-base text-blue_gray-100_b2"
                    size="txtIBMPlexSansRegular16Bluegray100b2"
                  >
                    Income & Expense
                  </Text>
                </div>
              </div>
              <div className="h-[60px] relative w-full">
                <div className="bg-gray-900 h-[37px] ml-auto mr-[21px] my-auto rounded-br-[20px] rounded-tr-[20px] w-[74%]"></div>
                <div className="absolute h-[60px] inset-[0] justify-center m-auto w-full">
                  <div className="flex flex-row gap-[11px] h-full items-center justify-center ml-[27px] my-auto w-[42%]">
                    <div className="bg-gray-900_01 h-9 rounded-[50%] w-9"></div>
                    <Text
                      className="text-base text-blue_gray-100_b2"
                      size="txtIBMPlexSansRegular16Bluegray100b2"
                    >
                      Settings
                    </Text>
                  </div>
                  <div className="absolute border border-gray-900 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 w-full">
                    <Img
                      className="h-5 md:ml-[0] ml-[15px] w-5"
                      src="images/img_epsetting.svg"
                      alt="epsetting"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[17px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 h-[893px] rounded-[20px] w-[97%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
