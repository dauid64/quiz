import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'
import RespostaModel from "../../../model/resposta"

type Questao = {
  id: number
  enunciado: string
  respostas: {
    valor: string
    certa: boolean
    revelada: boolean
  }[]
  acertou: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Questao>
) {
  const id = req.query.id === undefined ? -1 : +req.query.id

  const questao = questoes.filter(questao => questao.id === id)

  if(questao.length === 1) {
    const questaoSelecionada = questao[0].embaralharRespostas()
    res.status(200).json(questaoSelecionada.toObject())
  } else {
    res.status(204).end()
  }
}
