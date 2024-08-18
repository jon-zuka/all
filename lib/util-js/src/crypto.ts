import { randomBytes, createCipheriv, createDecipheriv } from "node:crypto";

const encryp = (secret: string, plaintext: string) => {
  const iv = randomBytes(16);
  const key = Buffer.from(secret, "hex");
  const cipher = createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(plaintext, "utf8", "hex");
  encrypted += cipher.final("hex");
  return `${iv.toString("hex")}:${encrypted}`;
};

const decrypt = (secret: string, ciphertext: string) => {
  const [ivHex, encrypted] = ciphertext.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const key = Buffer.from(secret, "hex");
  const decipher = createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

export const useCipher = (secret: string) => ({
  encryp(plaintext: string) {
    return encryp(secret, plaintext);
  },
  decrypt(ciphertext: string) {
    return decrypt(secret, ciphertext);
  },
});
