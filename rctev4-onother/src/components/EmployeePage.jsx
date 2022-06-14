import axios from "axios";
import { useEffect, useState } from "react";
import { getemplyeedata } from "../redux/employee/employeeaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EmployeePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getemplyeedata(dispatch);
  }, []);

  const data = useSelector((store) => store.employee.employeedata);
  const [employ, setEmploy] = useState("");
  const [emname, setEmname] = useState("");
  const [comp, setComp] = useState("");
  const [salary, setSalaty] = useState(0);
  const [ctcc, setCc] = useState(0);
  const [compp, setCompp] = useState("");

  const addingEmplyoee = (emname, employ, compp, ctcc, comp, salary) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/employee",
      data: {
        name: emname,
        company: compp,
        ctc: ctcc,
        salary: salary,
        email: employ,
        phone: comp,
      },
    })
      .then((result) => {
        getemplyeedata(dispatch);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div>
        <div></div>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>EmployeePage Name</th>
              <th>Company Name</th>
              <th>CTC</th>
              <th>View</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <Employeee data={data} />
          </tbody>
        </table>
      </div>

      <div>
        <div></div>

        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setEmname(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmploy(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your company"
            onChange={(e) => {
              setCompp(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your  CTC"
            onChange={(e) => {
              setCc(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Contact"
            onChange={(e) => {
              setComp(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your  Salary"
            onChange={(e) => {
              setSalaty(e.target.value);
            }}
          />
        </div>
        <br />
        <button
          onClick={() => {
            addingEmplyoee(emname, employ, compp, ctcc, comp, salary);
          }}
        >
          ADD Data
        </button>
      </div>
    </div>
  );
};

const Employeee = ({ data }) => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const delt = (id) => {
    axios({
      method: "DELETE",
      url: `http://localhost:8080/employee/${id}`,
    }).then((result) => {
      getemplyeedata(dispatch);
    });
  };

  return (
    <>
      {data.map((el) => (
        <tr key={el.id}>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.company}</td>
          <td>{el.ctc}</td>
          <td>
            {" "}
            <button
              onClick={() => {
                naviagte(`/employee/${el.id}`);
              }}
            >
              view
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                delt(el.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default EmployeePage;
