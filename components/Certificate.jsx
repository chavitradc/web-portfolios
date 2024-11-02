import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const CertficateCard = ({ title, imagePath }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-xl  "
      onClick={toggleModal}
    >
      <div>
        <Image
          src={imagePath}
          alt={title}
          width={600}
          height={400}
          className="cursor-pointer"
        />
      </div>
      <div className="px-6 py-4 cursor-pointer">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>

      {showModal && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="modal bg-primary p-8 rounded-lg">
            <Image
              src={imagePath}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white h3">{title}</p>
              <Button
                className="bg-blue-600 text-white rounded-lg mt-4"
                onClick={toggleModal}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertficateCard;
