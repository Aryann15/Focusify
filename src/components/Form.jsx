import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import * as $ from 'jquery';


const Form = ({setTimeLeft,setIsPaused}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = data =>{
console.log(data.minutes)
$('#focusify-form').trigger("reset");
setTimeLeft(data.minutes*60)
setIsPaused(false)

}
  return (<>
    <div className="center">
      <p>Minutes:</p>
      <form noValidate onSubmit={handleSubmit(onSubmit)} id="focusify-form">
        <input
        id="minutes-input"
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
                "You really wanna concentrate less than a milliesecond, COME ON! min limit: 0.001",
            },
            max: {
              value: 180,
              message: "Whoa! slow down there zuck, try taking breaks!, max limit: 180 minutes",
            },
          })}
        />
        <input type="submit" />
      </form>
      
    </div>
    <div className="messages">{errors.minutes && <p>{errors.minutes.message}</p>}
    </div>
    </>
  );
};

export default Form;
