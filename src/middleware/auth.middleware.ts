import { RequestHandler } from 'express';

const authMiddleWare: RequestHandler = (req, res, next) => {
  if (req.method !== 'GET') {
    res.status(401).json({
      message: `Unauthorized, API is just in read-only mode, 
           database is maintained by dev, so if you got a new
           info and wish to include it here, please submit an
           improvement jira issue`,
    });
  } else {
    next();
  }
};

export default authMiddleWare;
