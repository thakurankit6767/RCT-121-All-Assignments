import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EmployeeD = () => {
  const { id } = useParams();

  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8080/employee/${id}`,
    })
      .then((result) => {
        setSingleData(result.singleData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <h4>Name : {singleData.name}</h4>
        <h4>Id : {singleData.id}</h4>
        <h4>Company Name: {singleData.company}</h4>
        <h4>salary : {singleData.salary} rs</h4>
        <h4>CTC : {singleData.ctc} LPA</h4>
        <h4>email : {singleData.email}</h4>
        <h4>contact : {singleData.phone}</h4>
      </div>
    </div>
  );
};
export default EmployeeD;
