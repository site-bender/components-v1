import * as crypto from "crypto"

const BASE58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
const len = BigInt(BASE58.length)

function convertBigIntToBase58 (bigInt: bigint, out = ""): string {
	return bigInt > 0
		? convertBigIntToBase58(
			bigInt / len,
			BASE58[parseInt((bigInt % len).toString(), 10)] + out,
		)
		: out
}

function convertUUIDToBase58 (uuid: string): string {
	const bigInt = BigInt("0x" + uuid.replace(/-/g, ""))

	return convertBigIntToBase58(bigInt)
}

export default function generateShortId(
	uuid = crypto.randomUUID(),
	minChars = 12,
): string {
	const out = convertUUIDToBase58(uuid)

	return out.length > minChars ? out : generateShortId()
}
