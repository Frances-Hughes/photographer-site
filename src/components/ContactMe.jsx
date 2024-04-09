import React, { useRef, useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import "../App.css"; // Assuming your custom CSS for the button is correctly defined here

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
    // Placeholder for email sending logic
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
          <Typography
            variant="h5"
            sx={{
              mb: 12,
              fontWeight: "bold",
            }}
          >
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
                name="userName"
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
                name="userEmail"
                label="Your Email"
                variant="outlined"
                error={!!validationMessages.userEmail}
                helperText={validationMessages.userEmail}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white" },
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
            {/* Custom SEND button */}
            <Box
              component="a"
              href="#"
              className="button type--C"
              onClick={sendEmail} // Replace this with your actual send email logic
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                textDecoration: "none",
              }}
            >
              {/* The content of your button */}
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
