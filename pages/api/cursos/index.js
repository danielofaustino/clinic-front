const { cursos } = require('./data.json');
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(cursos);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
