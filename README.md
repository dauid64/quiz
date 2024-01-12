# Quiz

![GitHub repo size](https://img.shields.io/github/repo-size/dauid64/quiz?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/dauid64/quiz?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/dauid64/quiz?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/dauid64/quiz?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/dauid64/quiz?style=for-the-badge)

<p align="center">
    <img src="https://github.com/dauid64/porta_premiada/assets/94979678/f216fb7a-589c-405a-9c72-2bde1866327c" alt="Next.js logo">
</p>


> Projeto realizado para colocar em prática os meus conhecimentos em Next.js, criando um sistema de perguntas e respostas.

## 📍 Deploy

Link do projeto: https://quiz-xi-gules.vercel.app/

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `< Node >`

## 🚀 Instalando Quiz

Para rodar o Quiz é necessário instalar dependências de bibliotecas, siga então as seguintes etapas:

* crie um arquivo no diretório raiz do projeto chamada .env.local e coloque a seguinte variável NEXT_PUBLIC_BASE_URL="http://localhost:3000". Com isso basta executar os comandos a seguir.

```
npm i
npm run dev
```

## ☕ Usando Quiz

Para usar o Quiz, siga estas etapas:

* Ao entrar na URL raiz você já começara sua rodada com 6 segundos para responder as perguntas. Caso responda antes do tempo, basta clicar em "Próxima".

![Página inicial](public/readme/pagina_inicial.png)

* Ao responder ele revela qual era a resposta certa

![Revelando Resposta](public/readme/revelando_resposta.png)

* Ao terminar as perguntas o sistema retornará suas estatísticas

![Página resultado](public/readme/resultado.png)