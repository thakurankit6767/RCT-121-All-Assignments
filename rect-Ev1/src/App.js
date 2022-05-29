import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";
// import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [load, SetLoad] = useState(false);
  const [pagelist, setPageList] = useState(1);
  const [title, setTitle] = useState("Sort by Descending Salary");
  const [orderlist, setOrderList] = useState("ASC");

  const getUser = async () => {
    try {
      SetLoad(true);
      let response = await fetch(
        `https://json-server-mocker-masai.herokuapp.com/candidates?_sort=salary&_order=${orderlist}&_page=${pagelist}&_limit=5`
      );
      let data = await response.json();
      setData(data);
      SetLoad(false);
    } catch (err) {
      alert("Something Went Wrong");
    }
  };

  useEffect(() => {
    getUser();
  }, [pagelist, orderlist]);

  const handleOrderName = () => {
    if (orderlist === "ASC") {
      setOrderList("DESC");
      setTitle("Sort by Ascending Salary");
    } else {
      setOrderList("ASC");
      setTitle("Sort by Descending Salary");
    }
  };

  const handlePrevios = () => {
    if (pagelist > 1) setPageList(pagelist - 1);
  };

  const handleNext = () => {
    setPageList(pagelist + 1);
  };

  return (
    <div className="App">
      <div>
        {load ? <div id="loading-container">...Loading</div> : ""}
        <Button
          id="SORT_BUTTON"
          title={title}
          onClick={() => handleOrderName()}
        />
        <Button title="PREV" id="PREV" onClick={() => handlePrevios()} />
        <Button id="NEXT" title="NEXT" onClick={() => handleNext()} />
      </div>
      {data.map((item) => {
        return <CandidateCard item={item} key={item.id} />;
      })}
    </div>
  );
}
