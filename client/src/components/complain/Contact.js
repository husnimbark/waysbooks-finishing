import React from "react";

import default_profile from "../../assets/blank-profile.jpeg";

export default function Contact({ dataContact, clickContact, contact }) {
  return (
    <>
      {dataContact.length > 0 && (
        <>
          {dataContact.map((item) => (
            <div
              key={item.id}
              className={`contact py-5 ${
                contact?.id === item?.id && "contact-active text-white"
              }`}
              onClick={() => {
                clickContact(item);
              }}
            >
              <div className="d-flex row-1">
                <div className="col">
                  <img
                    src={item.profile?.image || default_profile}
                    className="rounded-circle w-50 ms-4 text-white"
                    alt="user avatar"
                  />
                </div>

                <div className="col me-3">
                  <p className="fw-bold">{item.name}</p>
                  <p className="text-contact-chat">{item.message}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
