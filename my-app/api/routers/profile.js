const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const router = require('express').Router();

// ユーザープロフィール
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    const profile = await prisma.profile.findUnique({
      where: { userId: parseInt(userId) },
      select: {
        bio: true,
        profileImageUrl: true,
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });

    if (!profile) {
      res.status(404).json({ message: 'プロフィールが見つかりませんでした' });
    }

    // パスワードを除外
    const { user, ...rest } = profile;
    const { password, ...userWithoutPassword } = user;

    res.status(200).json({
      ...rest,
      user: userWithoutPassword,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

// APIのエンドポイントと取得する情報を作成する
// server.jsにて、expressでapp.useする
