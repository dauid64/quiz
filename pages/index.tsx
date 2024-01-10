import Questao from '@/components/Questao'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'
import { useEffect, useRef, useState } from 'react'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)
  const questaoRef = useRef<QuestaoModel>()

  useEffect(() => {
    questaoRef.current = questao
  }, [questao])

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if (questaoRef.current) {
      if(questaoRef.current.naoRespondida) {
        setQuestao(questaoRef.current.responderCom(-1))
      }
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao tempoPraResposta={10} valor={questao} respostaFornecida={respostaFornecida} tempoEsgotado={tempoEsgotado}/>
    </div>
  )
}
