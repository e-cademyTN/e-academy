const blackList = [];

const signOutList = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    blackList.push(token);
  }
  next();
};

const verifySession = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    if (blackList.includes(token)) {
      return res.status(405).send("You Are Signed Out");
    }
  }
  next();
};

module.exports = { signOutList, verifySession };
