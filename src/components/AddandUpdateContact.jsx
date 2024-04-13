import Model from "./Model";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import { object, string } from "yup";

const ContactSchema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
});

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
        validationSchema={ContactSchema}
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
            <Field
              className="h-10 border rounded-md pl-2"
              name="name"
              placeholder="Enter Name"
            />
            <div>
              <p className="text-red-500 text-xs">
                <ErrorMessage name="name" />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field
              className="h-10 border rounded-md pl-2"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            <div>
              <p className="text-red-500 text-xs">
                <ErrorMessage name="email" />
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="self-end border bg-orange px-5 py-1.5 my-3 rounded-lg"
          >
            {isUpdate ? "Update Contact" : "Add Contact"}
          </button>
        </Form>
      </Formik>
    </Model>
  );
};

export default AddAndUpdateContact;
