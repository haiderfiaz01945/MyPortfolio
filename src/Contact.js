import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import './Services.css';  
import { ColorModeContext } from "./ToggleColorMode";
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
         console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const { mode } = useContext(ColorModeContext);  
  return (
    <div className="min-h-screen p-8 gradient-motion">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <header className="text-center mb-12 bg-transparent">
          <motion.h1
            className={`text-4xl font-bold mt-4 section-transition ${
              mode === "dark" ? "text-white" : "text-black"
            } `}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Me
          </motion.h1>
          <motion.p
            className={`mt-4 section-transition ${
              mode === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Feel free to reach out to me for any inquiries or questions.
          </motion.p>
        </header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg shadow-md p-8 mb-12 section-transition"
          style={{ backgroundColor: mode === 'dark' ? '#333' : '#f9f9f9', color: mode === 'dark' ? 'white' : 'black' }}
        >
          <Typography variant="h5" component="h2" className="font-semibold mb-4">
            Get in Touch
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: mode === 'dark' ? '#555' : '#f0f0f0',
              p: 3,
              borderRadius: 2,
            }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <TextField
                required
                label="First Name"
                fullWidth
                variant="outlined"
                margin="normal"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: mode === 'dark' ? 'white' : 'black' }
                }}
                InputProps={{
                  style: {
                    color: mode === 'dark' ? 'white' : 'black',
                    backgroundColor: mode === 'dark' ? '#666' : 'white'
                  }
                }}
              />
              <TextField
                required
                label="Last Name"
                fullWidth
                variant="outlined"
                margin="normal"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: mode === 'dark' ? 'white' : 'black' }
                }}
                InputProps={{
                  style: {
                    color: mode === 'dark' ? 'white' : 'black',
                    backgroundColor: mode === 'dark' ? '#666' : 'white'
                  }
                }}
              />
            </div>
            <TextField
              required
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: mode === 'dark' ? 'white' : 'black' }
              }}
              InputProps={{
                style: {
                  color: mode === 'dark' ? 'white' : 'black',
                  backgroundColor: mode === 'dark' ? '#666' : 'white'
                }
              }}
            />
            <TextField
              required
              label="Subject"
              fullWidth
              variant="outlined"
              margin="normal"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: mode === 'dark' ? 'white' : 'black' }
              }}
              InputProps={{
                style: {
                  color: mode === 'dark' ? 'white' : 'black',
                  backgroundColor: mode === 'dark' ? '#666' : 'white'
                }
              }}
            />
            <TextField
              required
              label="Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              name="message"
              value={formData.message}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: mode === 'dark' ? 'white' : 'black' }
              }}
              InputProps={{
                style: {
                  color: mode === 'dark' ? 'white' : 'black',
                  backgroundColor: mode === 'dark' ? '#666' : 'white'
                }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-4"
            >
              Send Message
            </Button>
          </Box>
        </motion.section>

        <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="rounded-lg shadow-md p-8 section-transition"
  style={{ backgroundColor: mode === 'dark' ? '#333' : '#f9f9f9', color: mode === 'dark' ? 'white' : 'black' }}
>
  <Typography variant="h5" component="h2" className="font-semibold mb-4">
    Contact Information
  </Typography>
  <ul className={`list-none leading-7 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
    <li>Email: <a href="mailto:haiderfiaz@example.com" className="text-blue-600 hover:underline">haiderfiaz@example.com</a></li>
    <li>LinkedIn: <a href="https://linkedin.com/in/haiderfiaz" className="text-blue-600 hover:underline">linkedin.com/in/haiderfiaz</a></li>
    <li>GitHub: <a href="https://github.com/haiderfiaz" className="text-blue-600 hover:underline">github.com/haiderfiaz</a></li>
  </ul>
</motion.section>

      </motion.div>
    </div>
  );
}
