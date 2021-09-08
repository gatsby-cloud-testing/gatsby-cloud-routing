import { Buffer } from "buffer"

const handler = async (req, res) => {
  try {
    res
      .status(200)
      .json({ bytes: Buffer.byteLength(JSON.stringify(req.body), "utf-8") })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}

export default handler
