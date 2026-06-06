# Gospel Streaming

Aplicativo React de música gospel com playlists, artistas e player funcional.

## 🚀 Funcionalidades

- Mostra artistas com imagens e louvores
- Reproduz faixas individuais e playlists completas
- Exibe badge `Tocando` na playlist ativa
- Mostra os dois primeiros louvores dos artistas em `Home`, `Busca` e `Biblioteca`
- Gerencia fila de reprodução e navegação entre músicas

## 🧱 Estrutura do Projeto

- `src/App.js`: controle de roteamento, estado do player, fila e playback
- `src/data/artistas/index.js`: dados dos artistas, músicas e playlists
- `src/componentes/player.js`: componente de áudio com play/pause, seek e controles
- `src/componentes/pages/Artitsta.js`: página de perfil do artista com lista de músicas
- `src/componentes/pages/home.js`: página principal com artistas e playlists
- `src/componentes/pages/Biblioteca.js`: biblioteca do usuário
- `src/componentes/Busca.js`: busca por artista, gênero e música

## 📦 Requisitos

- Node.js 14+ ou superior
- npm 6+ ou superior

## Instalação

```bash
cd gospel-stream
npm install
```

## Execução em desenvolvimento

```bash
npm start
```

Abra o navegador em `http://localhost:3000` (ou outra porta se o 3000 estiver ocupado).

## Build de produção

```bash
npm run build
```

## Publicação no GitHub

O código já foi enviado para:

`https://github.com/Juliojuliano/gospel-streaming.git`

## Como usar

1. Na página principal, clique no artista para abrir sua página.
2. Clique em um louvor para tocar a faixa.
3. Clique em uma playlist para iniciar a fila inteira.
4. Use os botões do player para pausar, avançar ou voltar.

## Observações

- Os arquivos de áudio usam URLs de amostra para reprodução.
- Se quiser, posso substituir por arquivos locais dentro de `public/audio/`.
