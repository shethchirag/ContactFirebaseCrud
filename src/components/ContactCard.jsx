import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="flex items-center justify-between  rounded-lg bg-yellow p-2"
      key={contact.id}
    >
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-4xl text-orange" />
        <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-3xl">
        <RiEditCircleLine />
        <IoMdTrash
          onClick={() => deleteContact(contact.id)}
          className="text-orange cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ContactCard;
