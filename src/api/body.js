import { Buffer } from "buffer"

const handler = async (req, res) => {
  let body = JSON.stringify(req.body)
  let query = JSON.stringify(req.query)
  try {
    res
      .status(200)
      .json({ bytes: Buffer.byteLength(body, "utf-8"), body, query })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}

export default handler
