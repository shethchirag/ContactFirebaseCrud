import Model from "./Model";
import { Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

const AddAndUpdateContact = ({ isOpen, isCloseHandler, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      isCloseHandler();
      toast.success("Contact added successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      isCloseHandler();
      toast.success("Contact updated successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Model isOpen={isOpen} isCloseHandler={isCloseHandler}>
      <Formik
        initialValues={
          isUpdate
            ? {
                name: contact.name,
                email: contact.email,
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          isUpdate ? updateContact(values, contact.id) : addContact(values);
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
            {isUpdate ? "Update Contact" : "Add Contact"}
          </button>
        </Form>
      </Formik>
    </Model>
  );
};

export default AddAndUpdateContact;
