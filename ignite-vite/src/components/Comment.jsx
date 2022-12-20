import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Comment.module.css'

export const Comment = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0)

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1
    })
  }

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  return <div className={styles.comment}>
    <img src="https://avatars.githubusercontent.com/u/52045799?v=4" />
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Atrhur Neves</strong>
            <time
              title="11 de Maio às 08:36"
              dateTime="2022-05-11 08:36:00"
            >
              Cerca de 1h atrás
            </time>
          </div>

          <button
            onClick={handleDeleteComment}
            title="Deletar comentário">
            <Trash size={24} />
          </button>
        </header>

        <p>{content}</p>
      </div>

      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp size={20} />
          Aplaudir
          <span>
            {likeCount}
          </span>
        </button>
      </footer>
    </div>
  </div>
}