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
      role: 'Aluno @arthurneves'
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
      avatarUrl: 'https://images.unsplash.com/photo-1664575603992-0f17b771dd91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Jade Neves',
      role: 'Aluno @jadeneves'
    },
    content: [
      { type: 'paragraph', content: 'Meu nome é Jade!' },
      { type: 'paragraph', content: 'Acabei de ingressar na carreira dev!!!' },
      { type: 'link', content: '#PrimeiraPublicação' },
    ],
    publishedAt: new Date('2022-04-22 10:44:00'),
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
