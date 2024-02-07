/* eslint-disable node/no-extraneous-import */
import {Request} from 'express';

interface Request extends Request {
  user: {
    id: string;
  };
}
