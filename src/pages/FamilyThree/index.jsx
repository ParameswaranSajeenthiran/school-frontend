import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import SelectedStudentGeneralColumnvisolearn from "components/SelectedStudentGeneralColumnvisolearn";
import Sidebar1 from "components/Sidebar1";

const FamilyThreePage = () => {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex md:flex-1 flex-col font-ibmplexsans gap-[23px] items-center justify-start md:px-5 w-[87%] md:w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-end p-[21px] sm:px-5 rounded-[20px] w-[97%] md:w-full">
              <div className="flex flex-col gap-[39px] items-start justify-start mt-1.5 w-[97%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[67%] md:w-full">
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
                  <div className="flex flex-col mt-[9px] relative w-full">
                    <Line className="bg-gray-400 h-0.5 mx-auto w-full" />
                    <Line className="bg-gray-900 h-1 mb-auto ml-[220px] mt-[-2px] w-[4%] z-[1]" />
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
                  <div className="flex flex-row items-center justify-between mt-[63px] w-[43%] md:w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        <>Father&#39;s Full name</>
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
                        size="txtInterRegular14Gray800"
                      >
                        Date of birth
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start mt-[55px]">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Education Qualification{" "}
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-[41px] mt-[55px] w-4/5"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start mt-0.5">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtInterRegular14Gray800"
                        >
                          Telephone Number
                        </Text>
                        <Text
                          className="text-base text-gray-900"
                          size="txtIBMPlexSansMedium16"
                        >
                          Test
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start mt-0.5">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtInterRegular14Gray800"
                        >
                          Whatsapp number
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
                          size="txtInterRegular14Gray800"
                        >
                          Viber number
                        </Text>
                        <Text
                          className="text-base text-gray-900"
                          size="txtIBMPlexSansMedium16"
                        >
                          Test
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtInterRegular14Gray800"
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
                      <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[331px]">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtInterRegular14Gray800"
                        >
                          Occupation
                        </Text>
                        <Text
                          className="text-base text-gray-900"
                          size="txtIBMPlexSansMedium16"
                        >
                          Test
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[289px]">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtInterRegular14Gray800"
                        >
                          Monthly income
                        </Text>
                        <Text
                          className="text-base text-gray-900"
                          size="txtIBMPlexSansMedium16"
                        >
                          Test
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-row items-center justify-between mt-[38px] w-[43%] md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Address of work place
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
                        size="txtInterRegular14Gray800"
                      >
                        <span className="text-gray-800 font-inter text-left font-normal">
                          NIC number
                        </span>
                        <span className="text-gray-800 font-inter text-left font-semibold">
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
                </div>
                <div className="flex flex-col gap-2 items-start justify-start">
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtInterRegular14Gray800"
                  >
                    <>
                      If you are unable to mention father&#39;s NIC no mention
                      the reason
                    </>
                  </Text>
                  <Text
                    className="text-base text-gray-900"
                    size="txtIBMPlexSansMedium16"
                  >
                    Test
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyThreePage;
