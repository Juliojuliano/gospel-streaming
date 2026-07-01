# 🎵 Gospel Streaming

Um aplicativo moderno e responsivo para streaming de música gospel, desenvolvido em React. Explore artistas, crie playlists e desfrute de uma experiência de áudio fluida.

![React](https://img.shields.io/badge/React-19.2.7-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-14+-green?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 Funcionalidades

- ✅ **Catálogo de Artistas**: Explore artistas gospel com imagens e informações
- ✅ **Player de Áudio**: Reproduza faixas com controles de play/pause, volume e progressão
- ✅ **Playlists**: Crie e reproduza playlists personalizadas
- ✅ **Fila de Reprodução**: Navegue entre músicas com botões próximo/anterior
- ✅ **Busca Avançada**: Pesquise por artista, gênero ou música
- ✅ **Biblioteca**: Gerenciador de músicas favoritas
- ✅ **Badges em Tempo Real**: Veja qual música está tocando
- ✅ **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Acessibilidade**: Suporte a navegação por teclado e leitores de tela

## 🎯 Em Desenvolvimento

- 📱 PWA (Progressive Web App) com offline support
- 🎨 Temas personalizáveis
- 🔐 Autenticação de usuário
- ☁️ Sincronização em nuvem

## 🧱 Arquitetura do Projeto

```
gospel-stream/
├── src/
│   ├── App.js                          # Componente principal, roteamento e lógica de player
│   ├── App.css                         # Estilos globais e responsive
│   ├── index.js                        # Ponto de entrada
│   ├── componentes/
│   │   ├── header.js                   # Cabeçalho com navegação
│   │   ├── sidebar.js                  # Barra lateral com links
│   │   ├── Busca.js                    # Componente de busca
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

- **Frontend**: React 19.2.7 with Hooks
- **Roteamento**: React Router DOM 7.17.0
- **HTTP Client**: Axios 1.17.0
- **Build Tool**: Create React App 5.0.1
- **Testes**: Jest + React Testing Library
- **Deploy**: GitHub Pages

## 📦 Pré-requisitos

- Node.js 14+
- npm 6+ ou yarn

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/Juliojuliano/gospel-streaming.git
cd gospel-stream
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em desenvolvimento

```bash
npm start
```

O app abrirá automaticamente em `http://localhost:3000`

### 4. Build para produção

```bash
npm run build
```

Cria uma versão otimizada em `build/`

## 🌐 Deploy

### GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages.

```bash
npm run deploy
```

Acesse em: [https://juliojuliano.github.io/gospel-streaming/](https://juliojuliano.github.io/gospel-streaming/)

## 📖 Como Usar

1. **Home**: Visualize os artistas principais e playlists em destaque
2. **Clique no artista**: Abra o perfil completo com todas as músicas
3. **Selecione uma música**: Inicie a reprodução imediatamente
4. **Crie uma playlist**: Selecione múltiplas faixas para ouvir em sequência
5. **Use a Busca**: Encontre artistas, gêneros ou títulos específicos
6. **Biblioteca**: Acesse suas músicas favoritas salvas

## 🎨 Componentes Principais

### `App.js`
Gerencia o estado global da aplicação, roteamento e lógica do player.

**Responsabilidades:**
- Controle de página (Home, Artista, Biblioteca, Busca)
- Gerenciar fila de reprodução
- Estado de música em toque
- Navegação entre faixas

### `player.js`
Componente de áudio com controles interativos.

**Funcionalidades:**
- Play/Pause
- Progresso de reprodução
- Volume
- Duração da faixa
- Autoplay da próxima faixa

### `home.js`
Página inicial com artistas e playlists.

### `Busca.js`
Sistema de filtro e busca com resultados dinâmicos.

### `Biblioteca.js`
Gerenciador de músicas favoritas e histórico.

## 🔌 API de Dados

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

## 📱 Responsividade

O app é totalmente responsivo:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout adaptado com menu suspenso
- **Mobile**: Versão otimizada com navegação inferior

## ♿ Acessibilidade

- Navegação por teclado (Tab, Enter, Espaço)
- Contraste adequado (WCAG AA)
- Labels semânticas e ARIA
- Suporte a leitores de tela

## 🐛 Troubleshooting

**"Porta 3000 já está em uso"**
```bash
npm start -- --port 3001
```

**Erro de áudio**
- Verifique se as URLs de áudio estão acessíveis
- Alguns navegadores bloqueiam áudio automático (use click do usuário)

**Build falha**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 👨‍💻 Autor

Desenvolvido por [Júlio Juliano](https://github.com/Juliojuliano)

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para reportar bugs ou sugerir features:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

- GitHub: [@Juliojuliano](https://github.com/Juliojuliano)
- Email: seu-email@example.com

## 🙏 Agradecimentos

- Ícones: [Font Awesome](https://fontawesome.com)
- Imagens: [Picsum Photos](https://picsum.photos)
- Áudio: [SoundHelix](https://www.soundhelix.com)

---

**Desenvolvido com ❤️ para a comunidade gospel**
