import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const FamilyFourPage = () => {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-[23px] items-center justify-start md:px-5 w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-start p-7 sm:px-5 rounded-[20px] w-[97%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[25px] w-[99%] md:w-full">
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
                  className="flex flex-col gap-[14.5px] mt-7 w-[82%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[88%] md:w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Name 01
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[308px]">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Gender
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[316px]">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Grade
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray-300_03 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Admission No
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[274px]">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Attending school / University
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[174px]">
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
                  </div>
                  <Line className="self-center h-px bg-gray-300_03 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[88%] md:w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Name 01
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[308px]">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Gender
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[316px]">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Grade
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray-300_03 w-full" />
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Admission No
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[274px]">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        Attending school / University
                      </Text>
                      <Text
                        className="text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Test
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[174px]">
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
                  </div>
                </List>
                <Text
                  className="mt-[91px] text-gray-700_02 text-xl"
                  size="txtInterSemiBold20"
                >
                  Details of other siblings
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[27px] w-[86%] md:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Name 01
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[308px]">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      School attended
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start ml-64 md:ml-[0]">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Attending school / University
                    </Text>
                    <Text
                      className="text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Test
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-[29px] w-[32%] md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start">
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
                  <div className="flex flex-col gap-[9px] items-start justify-start">
                    <Text
                      className="text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Is he/she married?
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
      </div>
    </>
  );
};

export default FamilyFourPage;
