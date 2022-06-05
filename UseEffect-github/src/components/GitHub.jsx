import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Github() {
  const [repo, setRepo] = useState([]);
  const [searchE, setSearchE] = useState("");
  const [page, setPage] = useState(1);
  const [Val, setVal] = useState("abc");
  const [sort, setSort] = useState("");
  const sortP = ["id", "repo", "total"];
  
  async function getData() {
    return await axios
      .get(`http://localhost:8080/Repo?_page=${page}&_limit=12`)
      .then((res) => setRepo(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);

  const searchHandle = async () => {
    console.log(searchE);
    return await axios
      .get(`http://localhost:8080/Repo?q=${Val}`)
      .then((res) => {
        setRepo(res.data);
        console.log("filtered Data", repo);
      })
      .catch((err) => console.log(err));
  };

  console.log(repo);

  const handleSort = async (e) => {
    let Val = e.target.Val;
    setSort(Val);
    return await axios
      .get(`http://localhost:8080/Repo?_sort=${Val}&_order=asc`)
      .then((res) => {
        setRepo(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search repo Here.."
        onChange={(e) => {
          setVal(e.target.Val);
          console.log(Val);
        }}
      />
      <button onClick={searchHandle}>Search</button>

      <select
        style={{ width: "50%", borderRadius: "2px", height: "35px" }}
        name=""
        id=""
        onChange={handleSort}
        Val={sort}
      >
        <option Val="">Select Value</option>
        {sortP.map((item, index) => (
          <option key={index} Val={item}>
            {item}
          </option>
        ))}
      </select>

      {repo.map((e) => (
        <div
          style={{
            margin: "auto",
            alignItems: "center",
            paddingLeft: "4%",
            width: "60%",
          }}
        >
          <h3>
            {e.id} - {e.repo} total: {e.total}
          </h3>
        </div>
      ))}

      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
