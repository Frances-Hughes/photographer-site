import React, { useRef, useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import "../App.css"; // Ensure your CSS is correctly defined here

const ContactMe = () => {
  const form = useRef();
  const [validationMessages, setValidationMessages] = useState({
    userName: "",
    userEmail: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;
    let newValidationMessages = {
      userName: "",
      userEmail: "",
      subject: "",
      message: "",
    };

    const formData = new FormData(form.current);
    const userName = formData.get("user_name"); // Ensure these match your EmailJS template parameters
    const userEmail = formData.get("user_email"); // Ensure these match your EmailJS template parameters
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!userName) {
      newValidationMessages.userName = "*Required field";
      isValid = false;
    }
    if (!userEmail) {
      newValidationMessages.userEmail = "*Required field";
      isValid = false;
    } else if (!emailRegex.test(userEmail)) {
      newValidationMessages.userEmail = "*Please enter a valid email address";
      isValid = false;
    }
    if (!subject) {
      newValidationMessages.subject = "*Required field";
      isValid = false;
    }
    if (!message) {
      newValidationMessages.message = "*Required field";
      isValid = false;
    }

    setValidationMessages(newValidationMessages);

    if (!isValid) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your email has been sent!");
          form.current.reset();
          setValidationMessages({
            userName: "",
            userEmail: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 700 }}>
          <Typography variant="h5" sx={{ mb: 12, fontWeight: "bold" }}>
            <TypeAnimation
              sequence={[
                "Need a photographer?",
                1000,
                "Flick me a message:",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
          </Typography>

          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            noValidate
            sx={{ display: "flex", flexDirection: "column", gap: 5 }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                name="user_name" // Adjusted to match EmailJS template variables
                label="Your Name"
                variant="outlined"
                error={!!validationMessages.userName}
                helperText={validationMessages.userName}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white" },
                  notchedOutline: { borderColor: "white" },
                }}
                sx={{
                  "& label.Mui-focused": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
              />
              <TextField
                fullWidth
                name="user_email" // Adjusted to match EmailJS template variables
                label="Your Email"
                variant="outlined"
                error={!!validationMessages.userEmail}
                helperText={validationMessages.userEmail}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white" },
                  notchedOutline: { borderColor: "white" },
                }}
                sx={{
                  "& label.Mui-focused": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
              />
            </Box>
            <TextField
              fullWidth
              name="subject"
              label="Subject"
              variant="outlined"
              error={!!validationMessages.subject}
              helperText={validationMessages.subject}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white" },
                notchedOutline: { borderColor: "white" },
              }}
              sx={{
                "& label.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
            />
            <TextField
              fullWidth
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              error={!!validationMessages.message}
              helperText={validationMessages.message}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white" },
                notchedOutline: { borderColor: "white" },
              }}
              sx={{
                "& label.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
            />
            <Box
              component="button"
              type="submit"
              className="button type--C"
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text">SEND</span>
              <div className="button__drow1"></div>
              <div className="button__drow2"></div>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;
