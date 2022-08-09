/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import { services } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ services });
};
