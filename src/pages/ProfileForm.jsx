import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const initialValues = {
  // Define your form fields and their initial values here
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address1: "",
  address2: "",
};

const validationSchema = Yup.object({
  // Define validation rules using Yup
  firstName: Yup.string().required("Fist name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number must be at most 10 digits")
    .required("Phone number is required"),
  address1: Yup.string().required("Address1 is required"),
  address2: Yup.string().required("Address2 is required"),
});

const ProfileForm = () => {
  return (
    <div className="w-full mt-5">
      <Typography variant="h6" component="h6" className="text-white uppercase">
        Create user
      </Typography>
      <p className="text-[#16a37f] text-xs">Create a New User Profile</p>
      <div className="pt-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            if (
              values.firstName &&
              values.lastName &&
              values.email &&
              values.phoneNumber &&
              values.address1 &&
              values.address2
            ) {
              toast.success("Successfully created");
              resetForm();
            }
            // Handle form submission here, e.g., make an API request
            console.log(values);
          }}
        >
          <Form>
            <div className="w-full grid grid-cols-2 gap-4 mb-4">
              <div className="">
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  autoComplete="off"
                  // onFocus={Formik.handleFocus}
                  className="w-full h-[38px] bg-slate-800 text-white border-none outline-none pl-4 rounded-sm text-sm focus:border focus:border-red-600"
                />

                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-xs text-red-400"
                />
              </div>
              <div className="">
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  autoComplete="off"
                  className="w-full h-[38px] bg-slate-800 text-white border-none outline-none pl-4 rounded-sm text-sm"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-xs text-red-400"
                />
              </div>
            </div>

            <div className="w-full mb-4">
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                className="w-full h-[38px] bg-slate-800 text-white border-none outline-none pl-4 rounded-sm text-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-xs text-red-400"
              />
            </div>
            <div className="w-full mb-4">
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                autoComplete="off"
                className="w-full h-[38px] bg-slate-800 text-white border-none outline-none pl-4 rounded-sm text-sm"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-xs text-red-400"
              />
            </div>
            <div className="w-full mb-4">
              <Field
                type="text"
                id="address1"
                name="address1"
                placeholder="Address 1"
                autoComplete="off"
                className="w-full h-[38px] bg-slate-800 text-white border-none outline-none pl-4 rounded-sm text-sm"
              />
              <ErrorMessage
                name="address1"
                component="div"
                className="text-xs text-red-400"
              />
            </div>
            <div className="w-full mb-4">
              <Field
                type="text"
                id="address2"
                name="address2"
                placeholder="Address 2"
                autoComplete="off"
                className="w-full h-[38px] bg-slate-800 text-white border-none outline-none pl-4 rounded-sm text-sm"
              />
              <ErrorMessage
                name="address2"
                component="div"
                className="text-xs text-red-400"
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-[#16a37f] py-[5px] px-[25px] shadow-lg rounded-sm uppercase text-sm hover:bg-[#5aaf9c] hover:transition-all ease-in-out duration-300"
              >
                create new user
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <Toaster />
    </div>
  );
};

export default ProfileForm;
