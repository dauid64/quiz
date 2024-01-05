import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'
import QuestaoModel from '@/model/questao'

type Data = QuestaoModel

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = req.query.id === undefined ? -1 : +req.query.id

  res.status(200).json(questoes[0])
}
