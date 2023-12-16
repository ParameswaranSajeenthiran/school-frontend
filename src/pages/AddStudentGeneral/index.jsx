import React, { useEffect, useState } from "react";
import axios from 'axios'
// import { MenuItem, Sidebar } from "react-pro-sidebar";
import MenuItem from '@mui/material/MenuItem';


import { Button, Img, Input, Line, List, Text } from "components";
import AddStudentGeneralColumn from "components/AddStudentGeneralColumn";
import SelectedStudentGeneralColumnvisolearn from "components/SelectedStudentGeneralColumnvisolearn";
import Sidebar1 from "components/Sidebar1";
import { Navigate, useNavigate } from "react-router-dom";
import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, Select, TextField } from "@mui/material";
import { getStudentId } from "utils/utiils";

const AddStudentGeneralPage = () => {
  const studentData = {
    nameWithInitials: null,
    nameIdentifiedByInitials: null,
    fullName: null,
    gender: null,
    dob: null,
    admissionNo: null,
    religion: null,
    grade: null,
    email: null,
    telephone: null,
    mobileNumber: null,
    whatsapp: null,
    parentIsDivorced: null,
    birthCertificateNo: null,
    birthregistryOffice: null,
    noOfSibilings: null,
    noOfSibilingWhoStudy: null,
    siblingsStudentId: null,
    withWhom: null,
    fatherId: null,
    motherId: null,
    guardianId: null,
    Image: null,
    medicalId: null,
    previousSchool: null,
    homeId: null,
    transportId: null,
    scholarshipId: null,
    admissionDate: null,
    permenantAdress: null,
    GSName: null,
    divisionNo: null,
    divisionalSecretariat: null,
    residentialAdress: null,
    viberNumber: null,
    isFartherAlive: null,
    isMotherAlive: null
  };
  const [data, setData] = useState({})

  const [isEdit, setIsEdit] = useState(false)
  const navigate = useNavigate();

  function handleChange(e) {
    console.log(e)
    const newData = { ...data }
    newData[e.target.id ? e.target.id : e.target.name] = e.target.value
    setData(newData)
    console.log(newData)
    console.log(process.env)

  }

  function saveData() {

    if(JSON.parse(localStorage.getItem("studentId"))){
      updateStudent()
    }else{
    axios.post(process.env.REACT_APP_BASE_URL + "/student/", {

      studentData: data

    }
    ).then((res) => {
      console.log(res)
      localStorage.setItem("studentId", res.data)
      navigate("/documentstwo")
    })

  }
  }

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("isEdit")))

    setIsEdit(JSON.parse(localStorage.getItem("isEdit")))





  }
    , [])

  function getStudent() {
    axios.get(process.env.REACT_APP_BASE_URL + "/student/" + localStorage.getItem("studentId")).then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }

  useEffect(() => {
    console.log(data)
    if (JSON.parse(localStorage.getItem("studentId") != null)) {
      getStudent()
    }else{
      setData(studentData)
    }
  }
    , [])

function updateStudent(){
  axios.put(process.env.REACT_APP_BASE_URL + "/student/"+ getStudentId(), {
      studentData: data
    }
    ).then((res) => {
      console.log(res)
      // localStorage.setItem("studentId", res.data)
      navigate("/documentstwo")
    })

}



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
                    <div style={{ cursor: "pointer" }}>
                      <Text

                        onClick={() => navigate("/documentstwo")}
                        className="md:ml-[0] ml-[41px] text-base text-gray-900"
                        size="txtIBMPlexSansMedium16"
                      >
                        Documents
                      </Text>
                    </div>
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
                      <image
                        className="h-[60px] w-[60px]"
                        src={data.image ? data.image : "images/img_phuserthin.svg"}
                        alt="phuserthin"
                      />
                    </div>
                    {isEdit ? <div className="md:h-[42px] h-[49px] relative w-[21%] md:w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[42px] inset-x-[0] items-end justify-start mx-auto p-[11px] rounded-[3px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group23.svg')",
                        }}
                      >

                        <label><Img
                          className="h-5 mr-2.5 w-5"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                          <input type="file" style={{ display: "none" }} name="image" id="image" onChange={handleChange} accept="image/png, image/gif, image/jpeg" />
                        </label>
                      </div>
                    </div> : null}
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[17px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="md:h-[42px] h-[50px] relative w-full">
                        <TextField
                          disabled={!isEdit}
                          required
                          variant={isEdit ? "outlined" : "standard"}

                          fullWidth={true}
                          onChange={handleChange}
                          label={"Admission No"}
                          id='admissionNo'
                          value={data.admissionNo}
                        />
                      </div>
                      <div className="md:h-[42px] h-[50px] relative w-full">
                        <TextField
                          disabled={!isEdit}
                          variant={isEdit ? "outlined" : "standard"}

                          required
                          fullWidth={true}
                          onChange={handleChange}
                          label={"Grade "}
                          id='grade'
                          value={data.grade}
                        />
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

                      </div>
                      <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                        <TextField
                          disabled={!isEdit}
                          variant={isEdit ? "outlined" : "standard"}

                          required
                          fullWidth={true}
                          onChange={handleChange}
                          label={"Name With Initials"}
                          id='nameWithInitials'
                          value={data.nameWithInitials}
                        />

                      </div>
                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        disabled={!isEdit}
                        variant={isEdit ? "outlined" : "standard"}

                        required
                        fullWidth={true}

                        onChange={handleChange}
                        label={"Name Identified By Initials"}
                        id='nameIdentifiedByInitials'
                        value={data.nameIdentifiedByInitials}
                      />

                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}
                        style={{ color: 'black' }}
                        required={isEdit} disabled={!isEdit}

                        fullWidth={true}

                        onChange={handleChange}
                        label={"Full Name"}
                        id='fullName'
                        value={data.fullName}
                      />

                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        disabled={!isEdit}
                        variant={isEdit ? "outlined" : "standard"}


                        required
                        onChange={handleChange}
                        fullWidth={true}

                        label={"Permanent Adress"}
                        id='permenantAdress'
                        value={data.permenantAdress}
                      />

                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        required
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        onChange={handleChange}
                        fullWidth={true}

                        label={"Name of Grama Niladhari’s Division "}
                        id='GSName'
                        value={data.GSName}
                      />

                    </div> <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        required
                        onChange={handleChange}
                        fullWidth={true}

                        label={"Division Number"}
                        id='divisionNo'
                        value={data.divisionNo}
                      />

                    </div> <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        required
                        onChange={handleChange}
                        fullWidth={true}

                        label={"Divisional Secretariat"}
                        id='divisionalSecretariat'
                        value={data.divisionalSecretariat}
                      />

                    </div> <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        required
                        disabled={!isEdit}

                        onChange={handleChange}
                        fullWidth={true}
                        label={"Residential Address "}
                        id='residentialAdress'
                        value={data.residentialAdress}
                      />

                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        onChange={handleChange}
                        fullWidth={true}
                        label={"Email"}
                        id='email'
                        value={data.email}
                      />

                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        onChange={handleChange}
                        fullWidth={true}
                        label={"Mobile Number"}
                        id='mobileNumber'
                        value={data.permanentAdress}
                      />

                    </div>  <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        onChange={handleChange}
                        fullWidth={true}
                        label={"Telephone Number"}
                        id='telephone'
                        value={data.telephone}
                      />

                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        onChange={handleChange}
                        fullWidth={true}
                        label={"Viber Number"}
                        id='viberNumber'
                        value={data.viberNumber}
                      />

                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        onChange={handleChange}
                        fullWidth={true}
                        label={"Whatsapp Number"}
                        id='whatsappNumber'
                        value={data.whatsappNumber}
                      />

                    </div>
                 {!isEdit ? <>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                  <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        onChange={handleChange}
                        fullWidth={true}
                        label={"Is Farther Alive"}
                        id='whatsappNumber'
                        value={data.isFartherAlive=="on"?"yes":"no"}
                      />

                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        onChange={handleChange}
                        fullWidth={true}
                        label={"Is Mother Alive"}
                        id='whatsappNumber'
                        value={data.isMotherAlive=="on"?"yes":"no"}
                      />

                    </div>
                    <div className="font-ibmplexsans md:h-[42px] h-[50px] relative w-full">

                      <TextField
                        variant={isEdit ? "outlined" : "standard"}

                        disabled={!isEdit}

                        onChange={handleChange}
                        fullWidth={true}
                        label={"Is Farther and Mother divorced"}
                        id='whatsappNumber'
                        value={data.parentIsDivorced=="on"?"yes":"no"}
                      />

                    </div>
                    
                    </>:null}
                  </div>

               
                  <List
                    className="sm:flex-col flex-row font-inter gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[70px] w-full"
                    orientation="horizontal"
                  >   {isEdit ? <>
                    <div className="flex md:h-10 h-[42px] justify-end relative w-full">
                      <FormGroup>
                        <FormControlLabel labelPlacement="start" fullWidth={true} control={<Checkbox checked={data.isFartherAlive=="on"?true:false}  onChange={handleChange} id="isFartherAlive" />} label="Is Farther Alive" />

                      </FormGroup>
                    </div>
                    <div className="flex md:h-10 h-[42px] justify-end relative w-full">
                      <FormGroup>
                        <FormControlLabel labelPlacement="start" fullWidth={true} control={<Checkbox checked={data.isFartherAlive=="on"?true:false}   onChange={handleChange} id="isMotherAlive" />} label="Is Mother  Alive" />

                      </FormGroup>
                    </div>
                    <div className="flex md:h-10 h-[42px] justify-end relative w-full">
                      <div className="flex md:h-10 h-[42px] justify-end relative w-full">
                        <FormGroup>
                          <FormControlLabel labelPlacement="start" fullWidth={true} control={<Checkbox  checked={data.isFartherAlive=="on"?true:false}   onChange={handleChange} id="parentIsDivorced" />} label="Is Farther and Mother divorced" />

                        </FormGroup>
                      </div>
                    </div>
                    </>:null}
                  </List>
                  <div className="flex md:flex-col flex-row font-inter gap-[18px] items-center justify-start mt-[71px] w-[67%] md:w-full">
                    <FormControl  fullWidth>
                      <InputLabel id="demo-simple-select-label">No of Sibllings</InputLabel>
                      <Select
                      defaultChecked={data.noOfSibilings}
                        labelId="no-of-sibllings"
                        id="noOfSibilings"
                        name="noOfSibilings"

                        value={data.noOfSibllings}
                        label="No of Sibllings"
                        onChange={handleChange}
                      >
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                      </Select>
                    </FormControl>
                    <div className="md:h-10 h-[47px] relative w-[49%] md:w-full">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">No of Sibllings studying in same school</InputLabel>
                        <Select
                          labelId="no-of-sibllings"
                          id="noOfSibilingWhoStudy"
                          name="noOfSibilingWhoStudy"

                          value={data.noOfSibllings}
                          label="noOfSibilingWhoStudy"
                          onChange={handleChange}
                        >
                          <MenuItem id="noOfSibilingWhoStudy"
                            value={"1"}>1</MenuItem>
                          <MenuItem id="noOfSibilingWhoStudy"
                            value={"2"}>2</MenuItem>
                          <MenuItem id="noOfSibilingWhoStudy"
                            value={"3"}>3</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                 
                </div>
                
             {isEdit?   <AddStudentGeneralColumn saveData={saveData} data={data} className="flex flex-col items-center justify-start w-full" />:null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudentGeneralPage;
