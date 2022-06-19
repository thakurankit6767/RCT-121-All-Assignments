import { useState } from "react";
import useCollapse from "react-collapsed";

const data = [
  {
    id: 1,
    name: "iighn",
    email: "asd@gmail.com",
    phone: "9876543210",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vJ1C-O19HtDi8qZLrFEljmQQEWhBLyujMRCnq4hvk0Rj_hNMq0cpSmrSXgPrGNMdiAg&usqp=CAU",
  },
  {
    id: 2,
    name: "auuusd",
    email: "asd@gmail.com",
    phone: "9876543210",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vJ1C-O19HtDi8qZLrFEljmQQEWhBLyujMRCnq4hvk0Rj_hNMq0cpSmrSXgPrGNMdiAg&usqp=CAU",
  },
  {
    id: 3,
    name: "adfbsd",
    email: "asd@gmail.com",
    phone: "9876543210",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vJ1C-O19HtDi8qZLrFEljmQQEWhBLyujMRCnq4hvk0Rj_hNMq0cpSmrSXgPrGNMdiAg&usqp=CAU",
  },
  {
    id: 4,
    name: "fb",
    email: "asd@gmail.com",
    phone: "9876543210",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vJ1C-O19HtDi8qZLrFEljmQQEWhBLyujMRCnq4hvk0Rj_hNMq0cpSmrSXgPrGNMdiAg&usqp=CAU",
  },
];

export const Contact = () => {
  const [cont, setcont] = useState(data);
  const [dis, setdis] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse(dis);

  const handledata = () => {
    if (dis === false) {
      setdis(true);
    } else {
      setdis(false);
    }
  };
  const handleRemove = (id) => {
    setcont(cont.filter((elem) => elem.id !== id));
  };
  return (
    <div>
      {cont.map((elem) => (
        <div
          key={elem.id}
          {...getToggleProps({ onClick: handledata })}
          style={{
            display: "flex",
            width: "400px",
            marginLeft: "52px",
            border: "3px solid red",
            padding: "21px",
          }}
        >
          <img
            style={{ width: "70px", height: "60x", borderRadius: "40px" }}
            src={elem.url}
            alt=""
          />
          {elem.name}
          <br />
          <br />
          {elem.email}
          <div {...getCollapseProps()}>{elem.phone}</div>

          <button onClick={() => handleRemove(elem.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
