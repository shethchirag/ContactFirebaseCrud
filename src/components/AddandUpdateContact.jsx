import React from "react";
import Model from "./Model";
import { Field, Form, Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ isOpen, isCloseHandler }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Model isOpen={isOpen} isCloseHandler={isCloseHandler}>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values) => {
          addContact(values);
        }}
      >
        <Form className="flex flex-col">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" placeholder="Enter Name" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Name</label>
            <Field
              className="h-10 border"
              type="email"
              name="email"
              placeholder="Enter Name"
            />
          </div>
          <button
            type="submit"
            className="self-end border bg-orange px-3 py-1.5"
          >
            Add Contact
          </button>
        </Form>
      </Formik>
    </Model>
  );
};

export default AddAndUpdateContact;
