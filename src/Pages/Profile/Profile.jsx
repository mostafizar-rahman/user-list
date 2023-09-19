import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { USER_CONTEXT } from "../../ContextAPI/UserProvider";
import Title from "../../Components/Common/Title/Title";
const Profile = () => {
  const { user } = useContext(USER_CONTEXT);
  const {
    image,
    firstName,
    madenName,
    lastName,
    email,
    age,
    phone,
    address,
    company,
    gender,
    birthDate,
    bloodGroup,
    university,
  } = user;
  return (
    <div className="max-w-3xl md:mx-auto mt-10 mx-5">
      <Title title={"User Details"} />
      <div className="  rounded-md shadow-main  ">
        <div className="grid sm:grid-cols-[35%_auto] grid-cols-1 gap-4 ">
          <div className="bg-primary px-3 py-4 text-center rounded-l-md">
            <img
              src={image}
              alt="profile"
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="mt-3">
              <h4 className="text-white sm:text-xl text-lg font-medium">
                {firstName} {lastName} {madenName}
              </h4>
              <i className="text-white text-sm">{company.title}</i>
              <ul className="flex justify-center space-x-3 mt-4">
                <li>
                  <a
                    href=""
                    className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-base"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-base"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-base"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white px-2 rounded-r-md">
            <h2 className="sm:text-2xl text-xl font-medium py-2 border-b ">
              INFORMATION
            </h2>
            <div className="grid grid-cols-2 gap-5 mt-2">
              <div>
                <h4 className="text-base font-medium ">Email</h4>
                <p className="text-gray-600 text-sm">{email}</p>
              </div>
              <div>
                <h4 className="text-base font-medium ">Phone</h4>
                <p className="text-gray-600 text-sm">{phone}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3">
              <div>
                <h4 className="text-base font-medium ">Age</h4>
                <p className="text-gray-600 text-sm">{age}</p>
              </div>
              <div>
                <h4 className="text-base font-medium ">Gender</h4>
                <p className="text-gray-600 text-sm">{gender}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3">
              <div>
                <h4 className="text-base font-medium ">BloodGroup</h4>
                <p className="text-gray-600 text-sm">{bloodGroup}</p>
              </div>
              <div>
                <h4 className="text-base font-medium ">Date Of Barth</h4>
                <p className="text-gray-600 text-sm">{birthDate}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3">
              <div>
                <h4 className="text-base font-medium ">University</h4>
                <p className="text-gray-600 text-sm">{university}</p>
              </div>
              <div>
                <h4 className="text-base font-medium ">Address</h4>
                <p className="text-gray-600 text-sm">
                  {address.address}, {address.city}, {address.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
