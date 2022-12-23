import {useState, useEffect} from 'react';
import axios from 'axios';
import {
  BodyContainer,
  BodyHeader,
  InnerContainer,
  MessageItem,
  MessageSubjectContainer,
  MessageSubject,
  MessageInfo,
  MessageBody,
  Top,
} from './MessageElements';
import {BtnDeleteSmall} from '../SmallElement/Button';

const Message = () => {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    const response = await axios.get('http://localhost:5000/message');
    setMessage(response.data);
  };

  const deleteMessage = async (id) => {
    await axios.delete(`http://localhost:5000/message/${id}`);
    getMessage();
  };

  return (
    <BodyContainer>
      <BodyHeader>User Messages</BodyHeader>
      <InnerContainer>
        {messages.map((item, index) => (
          <MessageItem key={index}>
            <Top>
              <MessageSubjectContainer>
                <MessageSubject>{item.subject}</MessageSubject>
                <BtnDeleteSmall onClick={(e) => deleteMessage(item.id)}>
                  Delete
                </BtnDeleteSmall>
              </MessageSubjectContainer>
              <MessageInfo>Name: {item.name}</MessageInfo>
              <MessageInfo>Email: {item.email}</MessageInfo>
            </Top>
            <MessageBody>{item.message}</MessageBody>
          </MessageItem>
        ))}
      </InnerContainer>
    </BodyContainer>
  );
};

export default Message;
