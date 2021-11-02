const { cursos } = require('./data.json');
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (req, res) => {
  const curso = cursos.filter(
    (item) => item.nome === req.query.slug
  );
  if (req.method === 'GET') {
    res.status(200).json(curso);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
