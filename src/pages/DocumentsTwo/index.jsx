import React, { useState } from "react";


import { Button, Img, Line, List, Text } from "components";
import AddStudentGeneralColumn from "components/AddStudentGeneralColumn";
import SelectedStudentGeneralColumnvisolearn from "components/SelectedStudentGeneralColumnvisolearn";
import Sidebar1 from "components/Sidebar1";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

const DocumentsTwoPage = () => {

  

  const navigate = useNavigate();
  const [data,setData]=useState({})
  const [olSubjects,setOLSubjects]=useState([])
  const [alSubjects,setALSubjects]=useState([])


  function handleChange(e){
    console.log(e)
    const newData={...data}
    newData[e.target.id?e.target.id:e.target.name]=e.target.value?e.target.value:e.target.name
    setData(newData)
    console.log(newData)
   
  }

  function addOLSubjects(){ 

    const newOLSubjects=[...olSubjects]
    newOLSubjects.push(data.olSubject)
    setOLSubjects(newOLSubjects)
    console.log(newOLSubjects)
    const subject={}
    subject[data.olSubject]=''
    let newData={}
    if(data.olSubjects){
         newData={...data,olSubjects:{...data.olSubjects,...subject}}

    }else{
         newData={...data,olSubjects:{...subject}}
    }
    setData(newData)

    console.log(newData)
  }

  function handleChangeOLSubjects(e){
    console.log(e)
    const newData={...data}
    newData.olSubjects[e.target.id?e.target.id:e.target.name]=e.target.value?e.target.value:e.target.name
    setData(newData)
    console.log(newData)
   
  }


  function addALSubjects(){ 
      
      const newALSubjects=[...alSubjects]
      newALSubjects.push(data.alSubject)
      setALSubjects(newALSubjects)
      console.log(newALSubjects)
      const subject={}
      subject[data.alSubject]=''
      let newData={}
      if(data.alSubjects){
          newData={...data,alSubjects:{...data.alSubjects,...subject}}
  
      }else{
          newData={...data,alSubjects:{...subject}}
      }
      setData(newData)
  
      console.log(newData)

    
  }

  function handleChangeALSubjects(e){
    console.log(e)
    const newData={...data}
    newData.alSubjects[e.target.id?e.target.id:e.target.name]=e.target.value?e.target.value:e.target.name
    setData(newData)
    console.log(newData)
   
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }


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
                    <Line className="bg-gray-900 h-1 mb-auto ml-[99px] mt-[-2px] w-[6%] z-[1]" />
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
                  <div className="flex sm:flex-col flex-row gap-[19px] items-end justify-start mt-16 w-[43%] md:w-full">
                    <div className="font-inter md:h-10 h-[47px] relative w-[76%] sm:w-full">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">O/L Subjects </InputLabel>
                        <Select
                          labelId="OL Subjects"
                          id="olSubject"
                          name="olSubject"
                          value={data.olSubject}
                          label="O/L Subjects"
                          onChange={handleChange}
                        >
                          <MenuItem value={"Art"}>Art</MenuItem>
                          <MenuItem value={"Astronomy"}>Astronomy</MenuItem>
                          <MenuItem value={"Biology"}>Biology</MenuItem>
                          <MenuItem value={"Business Studies"}>Business Studies</MenuItem>
                          <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
                          <MenuItem value={"Christaninity"}>Christaninity</MenuItem>
                          <MenuItem value={"Communications"}>Communications</MenuItem>
                          <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
                          <MenuItem value={"Dance"}>Dance</MenuItem>
                          <MenuItem value={"Drama"}>Drama</MenuItem>
                          <MenuItem value={"Economics"}>Economics</MenuItem>
                          <MenuItem value={"Engineering"}>Engineering</MenuItem>
                          <MenuItem value={"English"}>English</MenuItem>
                          <MenuItem value={"Environmental Science"}>Environmental Science</MenuItem>
                          <MenuItem value={"Foreign Language"}>Foreign Language</MenuItem>
                          <MenuItem value={"Geography"}>Geography</MenuItem>
                          <MenuItem value={"Hinduism"}>Hinduism</MenuItem>
                          <MenuItem value={"History"}>History</MenuItem>
                          <MenuItem value={"Islam"}>Islam</MenuItem>
                          <MenuItem value={"Law"}>Law</MenuItem>
                          <MenuItem value={"Mathematics"}>Mathematics</MenuItem>
                          <MenuItem value={"Medicine"}>Medicine</MenuItem>
                          <MenuItem value={"Music"}>Music</MenuItem>
                          <MenuItem value={"Philosophy"}>Philosophy</MenuItem>
                          <MenuItem value={"Physical Education"}>Physical Education</MenuItem>
                          <MenuItem value={"Physics"}>Physics</MenuItem>
                          <MenuItem value={"Political Science"}>Political Science</MenuItem>
                          <MenuItem value={"Psychology"}>Psychology</MenuItem>
                          <MenuItem value={"Sinhala"}>Sinhala</MenuItem>
                          <MenuItem value={"Sociology"}>Sociology</MenuItem>
                          <MenuItem value={"Tamil"}>Tamil</MenuItem>



                        </Select>
                      </FormControl>
                    </div>
                    <Button
                      className="cursor-pointer font-ibmplexsans font-semibold h-[42px] leading-[normal] min-w-[91px] sm:mt-0 mt-1.5 text-center text-sm"
                      shape="round"
                      color="gray_900"
                      size="md"
                      variant="fill"
                      onClick={addOLSubjects}
                    >
                      Add
                    </Button>
                  </div>
                { olSubjects.length!=0? <div className="bg-gray-900 flex md:flex-col flex-row font-ibmplexsans md:gap-5 items-start justify-start mt-[30px] p-3 rounded-tl-[12px] rounded-tr-[12px] w-[67%] md:w-full">
                    <Text
                      className="ml-7 md:ml-[0] md:mt-0 my-0.5 text-blue_gray-100_01 text-sm"
                      size="txtIBMPlexSansMedium14"
                      style={{ marginLeft: '50px' }}

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
                      style={{ marginLeft: '100px' }}
                    >
                      Subject
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[180px] md:mt-0 my-0.5 text-blue_gray-100_01 text-sm"
                      size="txtIBMPlexSansMedium14"
                    >
                      Results
                    </Text>
                  </div>:null}





                  {olSubjects.map((subject, index) => {
                    return (

                      <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-col font-ibmplexsans items-center justify-start p-[9px] w-[67%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                          <TextField sx={{ m: 1, marginLeft: '0px', maxWidth: 100, outlineColor: 'white', backgroundColor: 'white' }} size="small"


                          >
                            5235226246
                          </TextField>
                          <TextField sx={{ m: 1, marginLeft: '40px', maxWidth: 100, outlineColor: 'white', backgroundColor: 'white' }} size="small"


                          >
                            5235226246
                          </TextField>
                          <Text
                            className="bg-indigo-50 h-[29px] justify-center md:ml-[0] ml-[77px] pl-1 pr-2 py-1 rounded-[3px] text-gray-900 text-sm"
                            size="txtIBMPlexSansRegular14Gray900"
                            style={{ width: '150px', marginLeft: '70px' }}
                          >
                            {subject}
                          </Text>
                          <FormControl sx={{ m: 1, minWidth: 100, marginLeft: 10, outlineColor: 'white', backgroundColor: 'white' }} size="small" >

                            <Select
                              labelId="OL Subjects"
                              id="olSubject"
                              name={subject}
                              value={data.olSubject[subject]}
                              label=""
                              onChange={handleChangeOLSubjects}
                            >
                              <MenuItem value={"A"}>A</MenuItem>
                              <MenuItem value={"B"}>B</MenuItem>
                              <MenuItem value={"C"}>C</MenuItem>
                              <MenuItem value={"D"}>D</MenuItem>
                              <MenuItem value={"F"}>F</MenuItem>

                            </Select>
                          </FormControl>
                        </div>
                      </div>

                      ) 
                    })}
                  

                   <div className="flex sm:flex-col flex-row gap-[19px] items-end justify-start mt-16 w-[43%] md:w-full">
                    <div className="font-inter md:h-10 h-[47px] relative w-[76%] sm:w-full">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">A/L Subjects </InputLabel>
                        <Select
                          labelId="alSubject"
                          id="alSubject"
                          name="alSubject"
                          value={data.olSubject}
                          label="A/L Subjects"
                          onChange={handleChange}
                        >
                          <MenuItem value={"Art"}>Art</MenuItem>
                          <MenuItem value={"Astronomy"}>Astronomy</MenuItem>
                          <MenuItem value={"Biology"}>Biology</MenuItem>
                          <MenuItem value={"Business Studies"}>Business Studies</MenuItem>
                          <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
                          <MenuItem value={"Christaninity"}>Christaninity</MenuItem>
                          <MenuItem value={"Communications"}>Communications</MenuItem>
                          <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
                          <MenuItem value={"Dance"}>Dance</MenuItem>
                          <MenuItem value={"Drama"}>Drama</MenuItem>
                          <MenuItem value={"Economics"}>Economics</MenuItem>
                          <MenuItem value={"Engineering"}>Engineering</MenuItem>
                          <MenuItem value={"English"}>English</MenuItem>
                          <MenuItem value={"Environmental Science"}>Environmental Science</MenuItem>
                          <MenuItem value={"Foreign Language"}>Foreign Language</MenuItem>
                          <MenuItem value={"Geography"}>Geography</MenuItem>
                          <MenuItem value={"Hinduism"}>Hinduism</MenuItem>
                          <MenuItem value={"History"}>History</MenuItem>
                          <MenuItem value={"Islam"}>Islam</MenuItem>
                          <MenuItem value={"Law"}>Law</MenuItem>
                          <MenuItem value={"Mathematics"}>Mathematics</MenuItem>
                          <MenuItem value={"Medicine"}>Medicine</MenuItem>
                          <MenuItem value={"Music"}>Music</MenuItem>
                          <MenuItem value={"Philosophy"}>Philosophy</MenuItem>
                          <MenuItem value={"Physical Education"}>Physical Education</MenuItem>
                          <MenuItem value={"Physics"}>Physics</MenuItem>
                          <MenuItem value={"Political Science"}>Political Science</MenuItem>
                          <MenuItem value={"Psychology"}>Psychology</MenuItem>
                          <MenuItem value={"Sinhala"}>Sinhala</MenuItem>
                          <MenuItem value={"Sociology"}>Sociology</MenuItem>
                          <MenuItem value={"Tamil"}>Tamil</MenuItem>



                        </Select>
                      </FormControl>
                    </div>
                    <Button
                      className="cursor-pointer font-ibmplexsans font-semibold h-[42px] leading-[normal] min-w-[91px] sm:mt-0 mt-1.5 text-center text-sm"
                      shape="round"
                      color="gray_900"
                      size="md"
                      variant="fill"
                      onClick={addALSubjects}
                    >
                      Add
                    </Button>
                  </div>
                  {alSubjects.length!=0? < div className="bg-gray-900 flex md:flex-col flex-row font-ibmplexsans md:gap-5 items-start justify-start mt-[30px] p-3 rounded-tl-[12px] rounded-tr-[12px] w-[67%] md:w-full">
                    <Text
                      className="ml-7 md:ml-[0] md:mt-0 my-0.5 text-blue_gray-100_01 text-sm"
                      size="txtIBMPlexSansMedium14"
                      style={{ marginLeft: '50px' }}

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
                      style={{ marginLeft: '100px' }}
                    >
                      Subject
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[180px] md:mt-0 my-0.5 text-blue_gray-100_01 text-sm"
                      size="txtIBMPlexSansMedium14"
                    >
                      Results
                    </Text>
                  </div>:null
}




                  {alSubjects.map((subject, index) => {
                    return (

                      <div className="bg-indigo-50 border-b border-gray-300_01 border-solid flex flex-col font-ibmplexsans items-center justify-start p-[9px] w-[67%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                          <TextField sx={{ m: 1, marginLeft: '0px', maxWidth: 100, outlineColor: 'white', backgroundColor: 'white' }} size="small"


                          >
                            5235226246
                          </TextField>
                          <TextField sx={{ m: 1, marginLeft: '40px', maxWidth: 100, outlineColor: 'white', backgroundColor: 'white' }} size="small"


                          >
                            5235226246
                          </TextField>
                          <Text
                            className="bg-indigo-50 h-[29px] justify-center md:ml-[0] ml-[77px] pl-1 pr-2 py-1 rounded-[3px] text-gray-900 text-sm"
                            size="txtIBMPlexSansRegular14Gray900"
                            style={{ width: '150px', marginLeft: '70px' }}
                          >
                            {subject}
                          </Text>
                          <FormControl sx={{ m: 1, minWidth: 100, marginLeft: 10, outlineColor: 'white', backgroundColor: 'white' }} size="small" >

                            <Select
                              labelId="OL Subjects"
                              id="olSubject"
                              name={subject}
                              value={data.alSubjects[subject]}
                              label=""
                              onChange={handleChangeALSubjects}
                            >
                              <MenuItem value={"A"}>A</MenuItem>
                              <MenuItem value={"B"}>B</MenuItem>
                              <MenuItem value={"C"}>C</MenuItem>
                              <MenuItem value={"D"}>D</MenuItem>
                              <MenuItem value={"F"}>F</MenuItem>

                            </Select>
                          </FormControl>
                        </div>
                      </div>

                      ) 
                    })}
                   
                 
           
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
