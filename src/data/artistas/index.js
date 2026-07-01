export const artistas = [
  {
    id: 1,
    nome: "Gabriela Rocha",
    genero: "Adoração",
    seguidores: 1500000,
    imagem: "https://picsum.photos/seed/gabriela/200/200",
    video: "https://youtu.be/Ns_YqW_KbTI?si=0lgbpHAzbDhBUVlt",
    musicas: [
      { id: 101, titulo: "Lugar Secreto", duracao: "5:30", plays: 8500000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
      { id: 102, titulo: "Creio que Tu És a Cura", duracao: "4:45", plays: 6200000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
      { id: 103, titulo: "Ninguém Explica Deus", duracao: "5:10", plays: 9800000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
      { id: 104, titulo: "Águas Purificadoras", duracao: "6:20", plays: 4300000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" }
    ]
  },
  {
    id: 2,
    nome: "Aline Barros",
    genero: "Louvor",
    seguidores: 2100000,
    imagem: "https://picsum.photos/seed/aline/200/200",
    musicas: [
      { id: 201, titulo: "Ressuscita", duracao: "4:20", plays: 12000000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3" },
      { id: 202, titulo: "Jeová Jireh", duracao: "5:02", plays: 9500000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3" },
      { id: 203, titulo: "Sonda-me", duracao: "4:30", plays: 7800000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3" },
      { id: 204, titulo: "Casa do Pai", duracao: "4:15", plays: 5600000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3" }
    ]
  },
  {
    id: 3,
    nome: "Preto no Branco",
    genero: "Gospel Contemporâneo",
    seguidores: 890000,
    imagem: "https://picsum.photos/seed/preto/200/200",
    musicas: [
      { id: 301, titulo: "Ninguém Explica Deus", duracao: "5:05", plays: 15000000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3" },
      { id: 302, titulo: "Eu Creio", duracao: "4:40", plays: 6800000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3" },
      { id: 303, titulo: "Mais Que Vencedor", duracao: "4:55", plays: 5200000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3" }
    ]
  },
  {
    id: 4,
    nome: "Maria Marçal",
    genero: "Adoração",
    seguidores: 720000,
    imagem: "https://picsum.photos/seed/maria/200/200",
    musicas: [
      { id: 401, titulo: "Santo", duracao: "6:10", plays: 3400000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3" },
      { id: 402, titulo: "Vem Me Buscar", duracao: "5:30", plays: 2800000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3" },
      { id: 403, titulo: "Emanuel", duracao: "4:50", plays: 2100000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-26.mp3" }
    ]
  },
  {
    id: 5,
    nome: "Kemuel",
    genero: "Gospel Clássico",
    seguidores: 650000,
    imagem: "https://picsum.photos/seed/kemuel/200/200",
    musicas: [
      { id: 501, titulo: "Te Louvarei", duracao: "5:45", plays: 4900000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-27.mp3" },
      { id: 502, titulo: "Grande é o Senhor", duracao: "4:20", plays: 3600000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-28.mp3" },
      { id: 503, titulo: "Ao Único", duracao: "5:00", plays: 3100000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-29.mp3" }
    ]
  },
  {
    id: 6,
    nome: "Fernanda Brum",
    genero: "Louvor",
    seguidores: 1100000,
    imagem: "https://picsum.photos/seed/fernanda/200/200",
    musicas: [
      { id: 601, titulo: "Espírito Santo", duracao: "6:30", plays: 7200000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-30.mp3" },
      { id: 602, titulo: "Rasga os Céus", duracao: "4:50", plays: 5400000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-31.mp3" },
      { id: 603, titulo: "Cura-me", duracao: "5:15", plays: 4100000, audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-32.mp3" }
    ]
  }
];

export const playlists = [
  {
    id: 1,
    nome: "Adoração Profunda",
    descricao: "Músicas para momentos de intimidade com Deus",
    imagem: "https://picsum.photos/seed/adoracao/300/300",
    musicas: [101, 103, 401, 601]
  },
  {
    id: 2,
    nome: "Louvor Contagiante",
    descricao: "As melhores músicas para celebrar",
    imagem: "https://picsum.photos/seed/louvor/300/300",
    musicas: [201, 202, 301, 501]
  },
  {
    id: 3,
    nome: "Só Gospel Antigo",
    descricao: "Clássicos que marcaram gerações",
    imagem: "https://picsum.photos/seed/classico/300/300",
    musicas: [502, 503, 603, 204]
  }
];
