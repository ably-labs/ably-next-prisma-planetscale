import prisma from "../../lib/prisma";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return handleGET(req, res);
    case "POST":
      return handlePOST(req, res);
    case "OPTIONS":
      return res.status(200).send("ok");
    default:
      return res.status(405).end();
  }
}

// GET /api/comment - retrieves all the comments
async function handleGET(req, res) {
  try {
    const comments = await prisma.comment.findMany();
    res.json(comments);
    res.status(200).end();
  } catch (err) {
    res.status(err).json({});
  }
}

// POST /api/comment - creates a new comment
async function handlePOST(req, res) {
  try {
    const comment = await prisma.comment.create({
      data: {
        ...req.body,
      },
    });
    res.json(comment);
    res.status(200).end();
  } catch (err) {
    res.status(err).json({});
  }
}
