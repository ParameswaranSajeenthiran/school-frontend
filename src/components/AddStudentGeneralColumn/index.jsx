import React from "react";
import axios from "axios";
import { Button, Line } from "components";

const AddStudentGeneralColumn = (props) => {

  // function saveData() {
  //   console.log("saveData");
  //   console.log(props);
  //   // axios.post("/student/",{
    
  //   //   studentData :props.data
      
  //   // }
  //   //   ).then((res)=>{
  //   //     console.log(res)
  //   //   })
  // }
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[47px] justify-start w-full">
          <Line className="bg-gray-300_02 h-px w-full" />
          <div className="flex md:flex-col flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[42px] w-[62%] md:w-full">
            <Button
              className="cursor-pointer font-ibmplexsans leading-[normal] min-w-[341px] text-center text-xs"
              shape="round"
              color="gray_400"
              size="lg"
              variant="outline"
            >
              {props?.discardaction}
            </Button>
            <Button
              className="cursor-pointer font-ibmplexsans font-medium leading-[normal] min-w-[341px] text-center text-xs"
              shape="round"
              color="gray_900"
              size="lg"
              variant="fill"
              onClick={props.saveData}
            >
              {props?.addstudentaction}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AddStudentGeneralColumn.defaultProps = {
  discardaction: "Discard",
  addstudentaction: "Add Student",
};

export default AddStudentGeneralColumn;
