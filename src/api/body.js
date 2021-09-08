import { Buffer } from "buffer"

const handler = async (req, res) => {
  let body = JSON.stringify(req.body)
  try {
    res
      .status(200)
      .json({ bytes: Buffer.byteLength(body, "utf-8"), string: body })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}

export default handler
