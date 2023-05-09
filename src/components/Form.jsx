import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  return (
    <div className="center">
      <p>Minutes:</p>
      <form noValidate>
        <input
          type="number"
          {...register("minutes", {
            required: {
              value: true,
              message:
                "Enter the number of Minutes that you would like to FOCUS for Champ!",
            },
            min: {
              value: 0.001,
              message:
                "You really wanna concentrate less than a milliesecond, COME ON!",
            },
            max: {
              value: 180,
              message: "Whoa! slow down there zuck, try taking breaks!",
            },
          })}
        />
        <input type="submit" />
      </form>
      {errors.minutes && <p>{errors.minutes.message}</p>}
    </div>
  );
};

export default Form;
