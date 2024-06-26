import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../../Components/Text";
import Button from "react-bootstrap/Button";
import { exportComponentAsJPEG } from "react-component-export-image";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  const navigate = useNavigate();
  //   console.log(params.get("url"));

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div style={{ width: "700px", border: "1px solid" }} ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} width="250px" alt="" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      &nbsp;&nbsp;
      <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)}>
        Save
      </Button>
      &nbsp;&nbsp;
      <Button variant="dark" onClick={(e) => navigate("/")}>
        New Meme
      </Button>
    </div>
  );
};

export default Edit;
