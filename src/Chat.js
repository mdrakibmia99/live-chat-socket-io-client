import React, { useEffect, useState } from 'react';

const Chat = ({ socket, userName, roomId }) => {
    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageList((list)=>[...list,data]);
        })
    }, [socket])
    const [message, setMessage] = useState("");
    const [messageList,setMessageList]=useState([])
    const handleSendMessage = async () => {
        if (message !== "") {
            const messageInfo = {
                userName: userName,
                roomId: roomId,
                message: message,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            await socket.emit('send_message', messageInfo)
            setMessageList((list)=>[...list,messageInfo]);
            
        }
    }


    return (
        <div>
            <div className='chat-section'>
                <div className='chat-header'>
                    <p>live Chat</p>
                </div>
                <div className='chat-body'>
                    {
                        messageList?.map((messageContent,index)=>{
                        return <div  key={index}>
                            <p>{messageContent.message}</p>
                        </div>

                        })
                    }
                </div>
                <div className='chat-footer'>
                    <input
                        type="text"
                        placeholder='hey...'
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    <button onClick={handleSendMessage}> send </button>
                </div>
            </div>

        </div>
    );
};

export default Chat;