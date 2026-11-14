import CryptoJS from "crypto-js";

// Encryption
export const encryptData = (data) => {

  const secretKey = "MySecretKey123";

  return CryptoJS.AES.encrypt(
    data,
    secretKey
  ).toString();

};

// Decryption
export const decryptData = (encryptedData) => {

  const secretKey = "MySecretKey123";

  const bytes = CryptoJS.AES.decrypt(
    encryptedData,
    secretKey
  );

  return bytes.toString(CryptoJS.enc.Utf8);

};