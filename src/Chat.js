import React, { useEffect, useState } from 'react';

const Chat = ({ socket, userName, roomId }) => {
    useEffect(() => {
        socket.on('receive_message', (data) => {
            console.log(data);
        })
    }, [socket])
    const [message, setMessage] = useState("");
    const handleSendMessage = async () => {
        if (message !== "") {
            const messageInfo = {
                userName: userName,
                roomId: roomId,
                message: message,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            await socket.emit('send_message', messageInfo)
        }
    }


    return (
        <div>
            <div>
                <div className='chat-header'>
                    <p>live Chat</p>
                </div>
                <div className='chat-body'>

                </div>
                <div className='chat-footer'>
                    <input
                        type="text"
                        placeholder='hey...'
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    <button onClick={handleSendMessage}> &#9658; </button>
                </div>
            </div>

        </div>
    );
};

export default Chat;