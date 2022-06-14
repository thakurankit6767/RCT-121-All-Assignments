import { useEffect, useState } from "react";
import { companydata } from "../redux/company/companyaction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

 const CompanyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(companydata());
  }, []);

  const dataload = useSelector((store) => store.company.loading);

  const data = useSelector((store) => store.company.data);

  const [name, setName] = useState("");

  const dataaddcompany = (name) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/company",
      data: {
        name: name,
      },
    })
      .then((res) => {
        dispatch(companydata());
      })
      .catch((element) => {
        console.log(element);
      });
  };

  return (
    <div>
      <div>
      
      {data.map((com) => (
          <div key={com.id}>{com.name}</div>
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter your CompanyPage Name"
          onChange={(element) => {
            setName(element.target.value);
          }}
        />
        <button
          onClick={() => {
            dataaddcompany(name);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CompanyPage;