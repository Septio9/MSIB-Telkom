import React from 'react';

function Message({ sender, text }) {
  return (
    <div className={`message ${sender.toLowerCase()}`}>
      <strong>{sender}:</strong> {text}
    </div>
  );
}

export default Message;
