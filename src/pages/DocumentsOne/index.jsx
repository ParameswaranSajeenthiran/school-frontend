import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import AddStudentGeneralColumn from "components/AddStudentGeneralColumn";
import Sidebar1 from "components/Sidebar1";
import { FormControl, InputLabel, Select, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

const DocumentsOnePage = () => {
  const navigate = useNavigate();
  const [data,setData]=useState({})

  function handleChange(e){
    console.log(e)
    const newData={...data}
    newData[e.target.id?e.target.id:e.target.name]=e.target.value?e.target.value:e.target.name
    setData(newData)
    console.log(newData)
   
  }

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-alfaslabone items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar1 className="!sticky !w-[267px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex md:flex-1 flex-col font-ibmplexsans gap-[23px] items-center justify-start md:px-5 w-[87%] md:w-full">
            <div className="bg-gray-900 h-[72px] w-full"></div>
            <div className="bg-gray-100 flex flex-col items-center justify-start py-7 rounded-[20px] w-[97%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-6 w-full">
                <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[67%] md:w-full">
                    
                    <div style={{cursor:'pointer'}}>
                    <Text
                        onClick={() => navigate("/addstudentgeneral")}
                        className="md:ml-[0] ml-[41px] text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >                    

                      General
                    </Text>
                    </div>
                    <div style={{cursor:"pointer"}}> 

                    <Text
                        onClick={() => navigate("/document")}
                        className="md:ml-[0] ml-[41px] text-base text-gray-900"
                      size="txtIBMPlexSansMedium16"
                    >
                      Documents
                    </Text>
                    </div>
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
                    <Line className="bg-gray-900 h-1 mb-auto ml-[99px] mt-[-2px] w-[8%] z-[1]" />
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-[18px] items-center justify-start mt-[26px] w-[67%] md:w-full">
                    <div className="md:h-[42px] h-[49px] relative w-[49%] md:w-full">
                    <TextField 
                     required
                     onChange={handleChange}
                     fullWidth={true}
                     label={"Birth Certificate Number"}
                     id='birthCertificateNumber'
                     value={data.residentialAddress}
                     />
                    </div>
                    <div className="font-ibmplexsans h-12 md:h-[42px] relative w-[49%] md:w-full">
                     
                    <TextField 
                     required
                     onChange={handleChange}
                     fullWidth={true}
                     label={"Birth Registry Office"}
                     id='birthregistryOffice'
                     value={data.birthC}
                     />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-ibmplexsans gap-[18px] items-start justify-start mt-[60px] w-[67%] md:w-full">
                    <div className="h-12 md:h-[42px] md:mt-0 mt-0.5 relative w-[49%] md:w-full">
                    <TextField 
                     required
                     onChange={handleChange}
                     fullWidth={true}
                     label={"Index NO of Grade 5 Scholarship"}
                     id='indexNoOIfGrade5Scholarship'
                     value={data.indexNoOIfGrade5Scholarship}
                     />
                    </div>
                    <div className="md:h-[42px] h-[50px] relative w-[49%] md:w-full">
                    <TextField 
                     required
                     onChange={handleChange}
                     fullWidth={true}
                     label={"Achieved Marks"}
                     id='achievedMarks+'
                     value={data.indexNoOIfGrade5Scholarship}
                     />
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-[65px] mt-16 w-[43%]"
                    orientation="vertical"
                  >
                    <div className="flex sm:flex-col flex-row gap-[19px] items-end justify-between w-full">
                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">O/L Subjects </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.olSubjects}
          label="O/L Subjects"
          onChange={handleChange}
        >
          <MenuItem value={10}>Mathematics</MenuItem>
          <MenuItem value={20}>Tamil</MenuItem>
          <MenuItem value={30}>Hinduism</MenuItem>
        </Select>
      </FormControl>
                      <Button
                        className="common-pointer cursor-pointer font-ibmplexsans font-semibold h-[42px] leading-[normal] min-w-[91px] sm:mt-0 mt-1.5 text-center text-sm"
                        onClick={() => navigate("/documentstwo")}
                        shape="round"
                        color="gray_900"
                        size="md"
                        variant="fill"
                      >
                        Add
                      </Button>
                    </div>

                    
                    <div className="flex sm:flex-col flex-row gap-[19px] items-end justify-between w-full">
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

export default DocumentsOnePage;
