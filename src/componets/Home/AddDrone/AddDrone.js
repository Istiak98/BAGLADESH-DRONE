import axios from "axios";
import React from "react";
import "./AddDrone.css";
import { useForm } from "react-hook-form";
const AddDrone = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("https://tranquil-plains-35844.herokuapp.com/drones", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <div className="add-drone">
        <h2 className="text-center">Add New Drone</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("title", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <textarea {...register("description")} placeholder="Description" />
          <input type="number" {...register("price")} placeholder="price" />
          <input {...register("image")} placeholder="image url" />
          <input className="btn btn-dark" type="submit" />
        </form>
      </div>
    </div>
  );
};
export default AddDrone;
