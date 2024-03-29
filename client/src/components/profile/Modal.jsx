import React from "react";
import { IoClose } from "react-icons/io5";

function Modal({ closeModal }) {
  return (
    <div className="fixed top-0 w-full h-full  bg-gray-200">
      <div className=""></div>
      <div className="">
        {/* modal button */}
        <div className=" flex justify-end">
          <button
            onClick={() => closeModal()}
            className="text-xl sm:text-3xl p-1 rounded-md border-2 border-red-400 hover:border-red-700 bg-red-300 text-red-800"
          >
            <IoClose />
          </button>
        </div>
        {/* modal text */}
        <div className="mb-10">
          <p>
            one impedit itaque error explicabo excepturi quo modi veritatis eos
            iure deserunt nulla tenetur ducimus nam ex repudiandae! Nulla
            laborum aliquam necessitatibus sit repellendus consectetur. Nemo
            esse pariatur, vero quod aut veniam perspiciatis corrupti, at
            nostrum id omnis repellat enim fugit eum eaque optio, voluptates
            itaque magnam ea. Odit maxime, facere eaque ducimus dolores sequi,
            eos culpa rem, dignissimos magni tempora aut! Fugiat, atque.
            Exercitationem consequuntur, modi perferendis excepturi optio illum,
            esse autem sint ullam repudiandae nulla similique expedita eum
            praesentium recusandae, ratione molestiae. Harum consectetur cum
            tempore, provident velit quis est sequi veniam in maiores! Numquam
            quaerat consequuntur labore qui adipisci, accusantium quasi
            sapiente, molestiae totam aliquam nulla culpa fuga. Fugiat qui
            sapiente amet officia, commodi minus error vel alias facilis
            consequuntur ab eligendi delectus porro. Labore dolores illo a error
            nemo, dolor quibusdam tempore maiores aspernatur quas possimus ea
            architecto similique beatae perferendis recusandae expedita quo
            illum.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Modal;
