import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/52045799?v=4',
      name: 'Arthur Neves',
      role: 'Aluno @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Olá! Meu nome é Arthur!' },
      { type: 'paragraph', content: 'Sou bacharel em Engenharia da Computação pela Universidade Federal do Pará.' },
      { type: 'link', content: '#PrimeiraPublicação' },
    ],
    publishedAt: new Date('2022-05-11 08:36:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/52045799?v=4',
      name: 'Jade Neves',
      role: 'Aluno @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Olá! Meu nome é Arthur!' },
      { type: 'paragraph', content: 'Sou bacharel em Engenharia da Computação pela Universidade Federal do Pará.' },
      { type: 'link', content: '#PrimeiraPublicação' },
    ],
    publishedAt: new Date('2022-05-11 08:36:00'),
  }
]

export const App = () => {
  return <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        })}
      </main>
    </div>
  </div>
}
