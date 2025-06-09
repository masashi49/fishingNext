const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const router = require('express').Router();

// つぶやき投稿用API
router.post('/post', async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: '投稿内容がありません' });
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        content,
        authorId: 1,
      },
    });
    res.status(201).json(newPost);
  } catch (erro) {
    console.error(err);
    return res.status(500).json({ message: 'サーバーエラーです' });
  }
});

// 最近呟き取得用API
router.get('/latestpost', async (req, res) => {
  try {
    const latestPosts = await prisma.post.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
    });
    return res.json(latestPosts);
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: 'サーバーエラーです' });
  }
});

module.exports = router;
