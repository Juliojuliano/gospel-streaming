# 🎵 Gospel Streaming

Um aplicativo moderno e responsivo para streaming de música gospel, desenvolvido em React. Explore artistas, crie playlists e desfrute de uma experiência de áudio fluida.

![React](https://img.shields.io/badge/React-19.2.7-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-14+-green?logo=node.js)

## 🚀 Funcionalidades

- ✅ **Catálogo de Artistas**: Explore artistas gospel com imagens e informações
- ✅ **Player de Áudio**: Reproduza faixas com controles de play/pause e progressão, com avanço automático para a próxima música
- ✅ **Playlists**: Crie e reproduza playlists personalizadas
- ✅ **Fila de Reprodução**: Navegue entre músicas com botões próximo/anterior
- ✅ **Busca**: Pesquise por artista, gênero ou música, com filtro por gênero
- ✅ **Biblioteca**: Gerenciador de músicas favoritas
- ✅ **Badge em Tempo Real**: Veja qual música e playlist estão tocando

## 🧱 Arquitetura do Projeto

```
gospel-streaming/
├── src/
│   ├── App.js                          # Componente principal, roteamento e lógica de player
│   ├── App.css                         # Estilos globais e responsive
│   ├── index.js                        # Ponto de entrada
│   ├── componentes/
│   │   ├── header.js                   # Cabeçalho com navegação e busca
│   │   ├── sidebar.js                  # Barra lateral com playlists
│   │   ├── Busca.js                    # Componente de busca e filtro por gênero
│   │   ├── player.js                   # Player de áudio com controles
│   │   └── pages/
│   │       ├── home.js                 # Página inicial com artistas e playlists
│   │       ├── Artitsta.js             # Perfil do artista com discografia
│   │       └── Biblioteca.js           # Biblioteca de músicas favoritas
│   └── data/
│       └── artistas/
│           └── index.js                # Base de dados: artistas, músicas e playlists
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── package.json
```

## 🛠️ Tecnologias

- **Frontend**: React 19.2.7 com Hooks
- **Roteamento**: React Router DOM 7.17.0
- **HTTP Client**: Axios 1.17.0
- **Build Tool**: Create React App 5.0.1
- **Testes**: Jest + React Testing Library
- **Deploy**: GitHub Pages (via `gh-pages`)

## 📦 Pré-requisitos

- Node.js 14+
- npm 6+ ou yarn

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/Juliojuliano/gospel-streaming.git
cd gospel-streaming
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em desenvolvimento

```bash
npm start
```

O app abre automaticamente em `http://localhost:3000`.

### 4. Build para produção

```bash
npm run build
```

Cria uma versão otimizada em `build/`.

## 🌐 Deploy

O projeto está configurado para deploy no GitHub Pages via `gh-pages`:

```bash
npm run deploy
```

## 📖 Como Usar

1. **Home**: veja os artistas principais e playlists em destaque
2. **Clique no artista**: abra o perfil completo com todas as músicas
3. **Selecione uma música**: inicie a reprodução imediatamente
4. **Crie uma playlist**: toque uma playlist inteira a partir da Home
5. **Use a Busca**: encontre artistas, gêneros ou títulos específicos
6. **Biblioteca**: acesse suas músicas favoritas salvas

## 🔌 Estrutura dos Dados

Os dados estão armazenados em `src/data/artistas/index.js`:

```javascript
export const artistas = [
  {
    id: 1,
    nome: "Gabriela Rocha",
    genero: "Adoração",
    seguidores: 1500000,
    imagem: "URL_DA_IMAGEM",
    video: "https://youtu.be/...",
    musicas: [
      { id: 101, titulo: "Lugar Secreto", duracao: "5:30", plays: 8500000, audio: "URL_DO_AUDIO" }
    ]
  }
];

export const playlists = [
  {
    id: 1,
    nome: "Adoração Profunda",
    descricao: "Músicas para momentos de intimidade",
    imagem: "URL_DA_IMAGEM",
    musicas: [101, 103, 401]
  }
];
```

## ⚙️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build otimizado para produção |
| `npm run deploy` | Deploy para GitHub Pages |
| `npm test` | Executa testes |
| `npm run eject` | Ejeta configurações (irreversível) |

## 🐛 Troubleshooting

**"Porta 3000 já está em uso"**
```bash
npm start -- --port 3001
```

**Erro de áudio**
- Verifique se as URLs de áudio estão acessíveis
- Alguns navegadores bloqueiam áudio automático (é necessário um clique do usuário)

**Build falha**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📝 Observações

Os arquivos de áudio usam URLs de amostra (SoundHelix) para reprodução.

## 👨‍💻 Autor

Desenvolvido por [Juliano Julio](https://github.com/Juliojuliano)
