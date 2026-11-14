import { useState } from "react";
import { encryptData, decryptData } from "../Utils/encryption";

function EncryptionDemo() {

  const [message, setMessage] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");

  const handleEncrypt = () => {
    setEncrypted(encryptData(message));
    setDecrypted("");
  };

  const handleDecrypt = () => {
    setDecrypted(decryptData(encrypted));
  };

  return (
    <div className="dashboard">

      <h1>AES Encryption Demo</h1>

      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleEncrypt}>
        Encrypt Message
      </button>

      <h3>Encrypted Message</h3>
      <p>{encrypted}</p>

      <button
        onClick={handleDecrypt}
        disabled={!encrypted}
      >
        Decrypt Message
      </button>

      <h3>Decrypted Message</h3>
      <p>{decrypted}</p>

    </div>
  );
}

export default EncryptionDemo;