import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-indigo-50 flex flex-col items-center justify-center mx-auto p-[138px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-100 flex flex-col items-start justify-start max-w-[1164px] mx-auto my-3.5 md:px-5 rounded-[20px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[91px] items-start justify-start w-[93%] md:w-full">
            <Img
              className="h-[720px] sm:h-auto object-cover rounded-bl-[20px] rounded-tl-[20px] w-[61%] md:w-full"
              src="images/Rectangle 26.png"
              alt="rectangleTwentySix"
            />
            <div className="flex flex-col md:gap-10 gap-[181px] items-center justify-start md:mt-0 mt-[123px] w-[32%] md:w-full">
              <div className="flex flex-col font-ibmplexsans items-center justify-start w-full">
                <div className="flex flex-col gap-[34px] items-center justify-start w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtIBMPlexSansRegular36"
                  >
                    Welcome
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtIBMPlexSansRegular16Black900"
                    >
                      Email
                    </Text>
                    <Input
                      name="rectangleTwentySeven"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-12 w-full"
                      shape="round"
                      color="indigo_50"
                      variant="fill"
                      type="email"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start mt-3 w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtIBMPlexSansRegular16Black900"
                  >
                    Password
                  </Text>
                  <Input
                    name="rectangleTwentyEight"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-12 w-full"
                    shape="round"
                    color="indigo_50"
                    variant="fill"
                    type="password"
                  ></Input>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-medium h-14 leading-[normal] mt-9 rounded-[12px] text-center text-xl w-[335px]"
                  onClick={() => navigate("/dashboard")}
                  color="gray_900"
                  size="lg"
                  variant="fill"
                >
                  Login
                </Button>
              </div>
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900_af sm:text-xl"
                size="txtAlfaSlabOneRegular24"
              >
                Viso Learn
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
