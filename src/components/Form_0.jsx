import React from "react";

// import hook form
import { useForm } from "react-hook-form";

// import image
import Img from "../assets/view-new-york-city-night-time-min.webp";

const Form_0 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log("Errors:", errors);

  return (
    <div className="h-fit xl:h-[90vh] flex flex-col md:flex-row">
      {/* form */}
      <div className="flex-[70%] md:flex-1 order-2 md:order-1 p-4 flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-4 items-center">
          <h2 className="title">Contact Us</h2>
          <p className="text-center text-slate-600 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-lg lg:shadow-xl bg-slate-200 p-4 flex flex-col gap-y-4"
        >
          {/* name */}
          <div className="flex flex-col">
            <label className="label">Name *</label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 20 })}
              className="input"
            />
            {errors.name && (
              <p className="error">
                {errors.name.type === "required" && "Name is required"}
                {errors.name.type === "maxLength" &&
                  "Max length of name is 20 char"}
              </p>
            )}
          </div>

          {/* email */}
          <div className="flex flex-col">
            <label className="label">Email *</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className="input"
            />
            {errors.email && (
              <p className="error">
                {errors.email.type === "required" && "Email is required"}
                {errors.email.type === "pattern" && "Invalid email address"}
              </p>
            )}
          </div>

          {/* phone */}
          <div className="flex flex-col">
            <label className="label">Phone number(+01234567890)</label>
            <input
              type="tel"
              placeholder="Phone number"
              {...register("phoneNumber", {
                required: true,
                pattern:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              })}
              className="input"
            />
            {errors.phoneNumber && (
              <p className="error">Invalid phone number</p>
            )}
          </div>

          {/* submit */}
          <div>
            <input type="submit" value="Send message" className="submit" />
          </div>
        </form>
      </div>

      {/* image */}
      <div className="flex-[30%] md:flex-1 order-1 md:order-2">
        <img src={Img} alt="city" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Form_0;
