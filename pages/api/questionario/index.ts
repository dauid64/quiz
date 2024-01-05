import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'

type Questionario = number[]

export default (req: NextApiRequest, res: NextApiResponse<Questionario>) => {
    const questionarioIDs = questoes.map(questao => questao.id)

    res.status(200).json(questionarioIDs)
}