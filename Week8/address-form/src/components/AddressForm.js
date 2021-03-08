import _ from "lodash";
import React, { useState } from "react";
import ErrorList from "./ErrorList";

const AddressForm = (props) => {
  const [errors, setErrors] = useState({});
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  });

  const clearForm = (event) => {
    event.preventDefault();
    setShippingInfo({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      email: "",
    });
    setErrors({});
  };

  const handleInputChange = (event) => {
    setShippingInfo({
      ...shippingInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "address",
      "city",
      "state",
      "zipCode",
      "phoneNumber",
      "email",
    ];
    requiredFields.forEach((field) => {
      if (shippingInfo[field].trim() === "") {
        submitErrors = {
          [field]: "is blank",
        };
      }
    });

    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onInfoSubmitted(shippingInfo);
    console.log(shippingInfo);
  };

  return (
    <form
      className="callout secondary"
      id="shipping-address-form"
      onSubmit={onSubmitHandler}
    >
      <ErrorList errors={errors} />
      <h1>Shipping Address</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={handleInputChange}
          value={shippingInfo.firstName}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleInputChange}
          value={shippingInfo.lastName}
        />
      </div>

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        name="address"
        onChange={handleInputChange}
        value={shippingInfo.address}
      />

      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          onChange={handleInputChange}
          value={shippingInfo.city}
        />
      </div>

      <div>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          name="state"
          onChange={handleInputChange}
          value={shippingInfo.state}
        />
      </div>

      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          name="zipCode"
          onChange={handleInputChange}
          value={shippingInfo.zipCode}
        />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          onChange={handleInputChange}
          value={shippingInfo.phoneNumber}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          onChange={handleInputChange}
          value={shippingInfo.email}
        />
      </div>

      <input type="submit" className="button" value="Submit " />
    </form>
  );
};

export default AddressForm;
