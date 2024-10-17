import { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { sendDiscountRequest } from "../../redux/discountSlice";
import BackgroundDos from "../../assets/images/image.svg";
import {
  DiscountContainer,
  DiscountHeading,
  DiscountForm,
  DiscountInput,
  DiscountButton,
  DiscountMessage,
} from "../../assets/styles/StyledComponents";

function DiscountRequest() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = {
      name,
      phoneNumber,
      email,
      description: "discount request",
    };

    dispatch(sendDiscountRequest(data));
    setIsSubmitted(true);
  };

  const validateForm = () => {
    let isValid = true;
    let message = "";

    if (name.length < 2) {
      isValid = false;
      message = "Name must be at least 2 letters long";
    } else if (
      !phoneNumber.startsWith("+") ||
      !/^[+]*[0-9]*$/.test(phoneNumber)
    ) {
      isValid = false;
      message = "Please enter a valid phone number starting with +";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      message = "Please enter a valid email";
    }

    setErrorMessage(message);
    return isValid;
  };

  return (
    <DiscountContainer>
      <DiscountHeading>5% off on the first order</DiscountHeading>
      <Grid container spacing={4} alignItems="center" width="100%">
        <Grid item xs={12} md={6} width="100%">
          <div
            style={{
              display: "flex",
              alignItems: "end",
              width: "100%",
              justifyContent: "space-between",
              gap: "15%",
            }}
          >
            <img
              src={BackgroundDos}
              alt="Pets"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <DiscountForm onSubmit={handleSubmit}>
              <DiscountInput
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <DiscountInput
                label="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <DiscountInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <DiscountButton type="submit">Get a discount</DiscountButton>
              {errorMessage && (
                <DiscountMessage>{errorMessage}</DiscountMessage>
              )}
              {isSubmitted && (
                <DiscountMessage>We will get in touch soon</DiscountMessage>
              )}
            </DiscountForm>
          </div>
        </Grid>
      </Grid>
    </DiscountContainer>
  );
}

export default DiscountRequest;
