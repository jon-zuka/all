import {expect, test} from 'bun:test'
import {useCipher} from './crypto'

test("Should encrypt and decrypt cleartext", () => {
  const {decrypt, encryp} = useCipher("0abe6bbe830cd67f9e59c7d1b3cda445b90d2aac404b332ce643cb65335e2ed4")
  const cleartext = "Plain text"
  const encrypted = encryp(cleartext)
  expect(encrypted).not.toBe(cleartext)
  const decrypted = decrypt(encrypted)
  expect(decrypted).toBe(cleartext)
}) 