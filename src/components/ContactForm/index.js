import React from 'react';
import {useState} from 'react'
import {
  Form, FormItem, FormLabel, FormInput, FormBody, FormTextArea, FormButton
} from './FormElements';
import axios from 'axios';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const saveMessage = async (e) => {
    e.preventDefault();
    document.querySelector("#name").value = "";
    document.querySelector("#subject").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
    console.log("masukk");
    await axios.post('http://localhost:5000/message', {
        name: name,
        email: email,
        subject: subject,
        message: message
    });
  }

  return (
    <FormBody>
      <Form  onSubmit={saveMessage} id="form">
        <FormItem>
          <FormLabel for="name">Name</FormLabel>
          <FormInput id='name' placeholder='Input your name' type="text" value={name} onChange={(e) => setName(e.target.value)}></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel for="email">Email</FormLabel>
          <FormInput id='email' placeholder='Input your email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel for="subject">Subject</FormLabel>
          <FormInput id='subject' placeholder='Input subject' type="text" value={subject} onChange={(e) => setSubject(e.target.value)}></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel for="message">Message</FormLabel>
          <FormTextArea id='message' placeholder='Input message' rows="12" value={message} onChange={(e) => setMessage(e.target.value)}></FormTextArea>
        </FormItem>
        <FormButton className='submitButton'>Next</FormButton>
      </Form>
    </FormBody>
  );
};

export default ContactForm;
