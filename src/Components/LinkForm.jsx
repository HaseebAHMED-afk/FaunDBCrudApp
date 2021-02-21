import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const LinkForm = ({refreshLinks}) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setName("");
    setUrl("");
    setDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {name , url , description}

    try {
        // eslint-disable-next-line
        const res = await fetch('/api/createLink' , {
            method: 'POST',
            body: JSON.stringify(body)
        })
        
        resetForm()
        refreshLinks()
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label">
          ID:{" "}
          <input
            className="text-field"
            type="text"
            placeholder="Use ID for updating only"
          />
        </label>
        <br />
        <br />
        <label className="label">
          Name:{" "}
          <input
            className="text-field"
            type="text"
            placeholder="Enter a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label className="label">
          URL:{" "}
          <input
            className="text-field"
            value={url}
            type="text"
            placeholder="Enter a URL"
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label className="label">
          Desription:{" "}
          <input
            className="text-field"
            value={description}
            type="text"
            placeholder="Give a small description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LinkForm;
