"use client";
import axios from "axios";
import React, { useState } from "react";

function TestUpload() {
  const [image, setImage] = useState(null);

  const fumm = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/product/insartProduct`,
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res);
    console.log('res print hare...');
  };
  return (
    <div>
      <form
      // action="http://localhost:8000/product/insartProduct"
      // method="post"
      // encType="multipart/form-data"
      >
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit" onClick={fumm}>
          submit
        </button>
      </form>
    </div>
  );
}

export default TestUpload;
