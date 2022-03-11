import {useState, useEffect} from 'react';
import axios from 'axios';
import {BodyContainer, BodyHeader, InnerContainer, MessageItem, MessageSubjectContainer, MessageSubject, MessageInfo, MessageBody, Top, DeleteBtn} from './MessageElements';

const Message = () => {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    getMessage();
  }, [])

  const getMessage = async () => {
    const response = await axios.get('http://localhost:5000/message');
    setMessage(response.data);
  }

  const deleteMessage = async (id) => {
    await axios.delete(`http://localhost:5000/message/${id}`);
    getMessage();
  }

  return (
    <BodyContainer>
      <BodyHeader>User Messages</BodyHeader>
      <InnerContainer>
        {messages.map((item, index) => (
          <MessageItem>
            <Top>
              <MessageSubjectContainer>
                <MessageSubject>{item.subject}</MessageSubject>
                <DeleteBtn onClick={(e) => deleteMessage(item.id)}>Delete</DeleteBtn>
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
