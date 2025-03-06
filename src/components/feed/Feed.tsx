
import React from "react";
import FeedCard from "./FeedCard";

const POSTS = [
  {
    id: "1",
    user: {
      name: "Ana Silva",
      avatar: "https://i.pravatar.cc/150?img=1",
      handle: "anasilva"
    },
    content: "Acabei de terminar de ler 'Sapiens: Uma Breve História da Humanidade'. É simplesmente incrível como Yuval Noah Harari consegue sintetizar milhares de anos de história humana em um livro tão acessível. Alguém mais já leu? O que acharam da teoria dele sobre a revolução cognitiva?",
    topic: "Livros",
    likes: 24,
    comments: 5,
    time: "2h atrás",
    isLiked: true
  },
  {
    id: "2",
    user: {
      name: "Pedro Mendes",
      avatar: "https://i.pravatar.cc/150?img=11",
      handle: "pmendes"
    },
    content: "Alguém mais impressionado com o último episódio de 'Succession'? A dinâmica entre os irmãos Roy está cada vez mais intensa!",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2574&auto=format&fit=crop",
    topic: "Séries",
    likes: 42,
    comments: 12,
    time: "5h atrás"
  },
  {
    id: "3",
    user: {
      name: "Carla Duarte",
      avatar: "https://i.pravatar.cc/150?img=5",
      handle: "carladuarte"
    },
    content: "Estou montando um grupo de estudos para discutir literatura brasileira contemporânea. Começaremos com 'Torto Arado' de Itamar Vieira Junior. Quem tiver interesse, deixe um comentário!",
    topic: "Grupos de Estudo",
    likes: 18,
    comments: 8,
    time: "1d atrás"
  },
  {
    id: "4",
    user: {
      name: "Lucas Oliveira",
      avatar: "https://i.pravatar.cc/150?img=12",
      handle: "luluoliv"
    },
    content: "Acabei de assistir 'Oppenheimer' e estou fascinado pela forma como Nolan retratou a complexidade moral por trás do Projeto Manhattan. A atuação de Cillian Murphy é simplesmente extraordinária.",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9wcGVuaGVpbWVyfGVufDB8fDB8fHww",
    topic: "Filmes",
    likes: 56,
    comments: 15,
    time: "12h atrás"
  }
];

export default function Feed() {
  return (
    <div className="space-y-6">
      {POSTS.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </div>
  );
}
