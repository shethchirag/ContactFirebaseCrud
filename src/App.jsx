import { FiSearch } from "react-icons/fi";
import Navbar from "./components/Navbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddandUpdateContact";
import useDisclose from "./hooks/useDisclose";
import NotFoundContact from "./components/NotFoundContact";
export default function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, isOpenHandler, isCloseHandler } = useDisclose();

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactRef = collection(db, "contacts");
        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactRef = collection(db, "contacts");
    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContent = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContent);
      return filteredContent;
    });
  };

  return (
    <div>
      <div className="mx-auto max-w-[400px] px-4  ">
        <Navbar />
        <div className="flex gap-2 ">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="absolute ml-2 text-3xl text-white" />
            <input
              onChange={filterContacts}
              className="text-white pl-10 flex-grow h-10 rounded-md border border-white bg-transparent"
              type="text"
              name=""
              id=""
            />
          </div>
          <AiFillPlusCircle
            onClick={isOpenHandler}
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => {
              return <ContactCard key={contact.id} contact={contact} />;
            })
          )}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} isCloseHandler={isCloseHandler} />
      <ToastContainer position="bottom-center" />
    </div>
  );
}
