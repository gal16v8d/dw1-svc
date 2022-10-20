import { RequestHandler } from 'express';

class HealthController {
  public check: RequestHandler = (req, res) => {
    res.status(200).json();
  };
}

export default new HealthController();
