import React, { useRef, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TypeAnimation } from "react-type-animation";

const AnimatedBox = styled(Box)(({ theme }) => ({
  // Example animation styles
  opacity: 0,
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.enteringScreen,
  }),
  "&.fade-in": {
    opacity: 1,
  },
}));

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
    // Email sending logic to be changed
  };

  return (
    <Box sx={{ bgcolor: "primary.light" }}>
      <Container
        sx={{
          display: "flex",
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
              color: "black",
              fontFamily: "'Fraunces', serif",
              fontWeight: "bold",
            }}
            className="fade-in"
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
              style={{
                fontSize: "2em",
                display: "inline-block",
                fontFamily: "'Fraunces', serif",
              }}
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
                name="user_name"
                label="Your Name"
                variant="outlined"
                error={!!validationMessages.userName}
                helperText={validationMessages.userName}
              />
              <TextField
                fullWidth
                name="user_email"
                label="Your Email"
                variant="outlined"
                error={!!validationMessages.userEmail}
                helperText={validationMessages.userEmail}
              />
            </Box>
            <TextField
              fullWidth
              name="subject"
              label="Subject"
              variant="outlined"
              error={!!validationMessages.subject}
              helperText={validationMessages.subject}
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
            />
            <Button variant="contained" type="submit">
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;
