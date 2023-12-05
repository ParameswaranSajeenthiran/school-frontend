import React from "react";

import {
  CheckBox,
  Img,
  Input,
  Line,
  Radio,
  RadioGroup,
  Text,
} from "components";
import SelectedStudentGeneralColumnvisolearn from "components/SelectedStudentGeneralColumnvisolearn";
import Sidebar1 from "components/Sidebar1";

const FamilySevenPage = () => {
  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex md:flex-1 flex-col font-ibmplexsans gap-[23px] items-center justify-start md:px-5 w-[93%] md:w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-start p-7 sm:px-5 rounded-[20px] w-[97%] md:w-full">
              <div className="flex flex-col gap-10 items-start justify-start mb-44 w-[98%] md:w-full">
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
                      className="ml-10 md:ml-[0] text-base text-gray-600"
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
                      className="ml-10 md:ml-[0] text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Guardian
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[38px] text-base text-gray-600"
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
                    <Line className="bg-gray-900 h-1 mb-auto ml-[459px] mt-[-2px] w-[5%] z-[1]" />
                  </div>
                  <div className="flex flex-row gap-[46px] items-start justify-start mt-[43px] w-[34%] md:w-full">
                    <RadioGroup
                      className="flex w-[59%]"
                      name="radiogroupfather"
                    >
                      <Radio
                        value="Father"
                        className="leading-[normal] text-base text-gray-600 text-left"
                        inputClassName="border border-gray-600 border-solid h-4 mr-[5px] w-4"
                        checked={false}
                        name="radiogroupfather"
                        label="Father"
                        id="Father"
                      ></Radio>
                      <Radio
                        value="Mother"
                        className="leading-[normal] ml-[47px] text-base text-gray-600 text-left"
                        inputClassName="border border-gray-600 border-solid h-4 mr-[5px] w-4"
                        checked={false}
                        name="radiogroupfather"
                        label="Mother"
                        id="Mother"
                      ></Radio>
                    </RadioGroup>
                    <CheckBox
                      className="leading-[normal] text-base text-left"
                      inputClassName="h-4 mr-[5px] w-4"
                      name="anyother"
                      id="anyother"
                      label="Any Other"
                    ></CheckBox>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[77px] w-[43%] md:w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="text-gray-800 text-sm"
                        size="txtInterRegular14Gray800"
                      >
                        <>Guardian&#39;s Full name</>
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
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[55px] w-[78%] md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start md:mt-0 mt-0.5">
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
                    <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[239px] md:mt-0 mt-0.5">
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
                    <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[243px]">
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
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[41px] w-4/5 md:w-full">
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
                      If you are unable to mention guardian&#39;s NIC no mention
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

export default FamilySevenPage;
