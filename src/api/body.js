import { Buffer } from "buffer"

const handler = async (req, res) => {
  res.status(200).json({ bytes: Buffer.byteLength(req.body, "utf-8") })
}

export default handler
