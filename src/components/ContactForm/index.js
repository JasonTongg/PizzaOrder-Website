import React from 'react';
import {
  Form, FormItem, FormLabel, FormInput, FormBody, FormTextArea, FormButton, FormPopUp, FormPopUpItem, FormPopUpImage, FormPopUpHeader, FormPopUpText, FormPopUpParagraph, PopUpIcon
} from './FormElements';
import PopUpImage from '../../images/popup.png';

const ContactForm = () => {
  return (
    <FormBody>
      <Form>
        <FormItem>
          <FormLabel for="name">Name</FormLabel>
          <FormInput id='name' placeholder='Input your name' type="text"></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel for="nohp">Phone Number</FormLabel>
          <FormInput id='nohp' placeholder='Input your phone number' type="text"></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel for="email">Email</FormLabel>
          <FormInput id='email' placeholder='Input your email' type="email"></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel for="message">Message</FormLabel>
          <FormTextArea id='message' placeholder='Input message' rows="12"></FormTextArea>
        </FormItem>
        <FormButton className='submitButton'>Next</FormButton>
      </Form>
      <FormPopUp to="/" className="popup">
        <FormPopUpItem>
          <FormPopUpImage src={PopUpImage}></FormPopUpImage>
          <FormPopUpText>
            <PopUpIcon />
            <FormPopUpHeader>Your Message Successfully Delivered</FormPopUpHeader>
            <FormPopUpParagraph>Thank you for contacting us, we will immediately respond to you by email in maximum of 2x24 hours.</FormPopUpParagraph>
          </FormPopUpText>
        </FormPopUpItem>
      </FormPopUp>
    </FormBody>
  );
};

export default ContactForm;