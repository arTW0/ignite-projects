import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export const Sidebar = () => {
  return <aside className={styles.sidebar}>
    <img
      className={styles.cover}
      src="https://images.unsplash.com/photo-1647815134799-33efaaf537dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
    />
    <div className={styles.profile}>
      <img
        src="https://avatars.githubusercontent.com/u/52045799?v=4"
      />
      <strong>Arthur Neves</strong>
      <span>@arthurneves</span>
    </div>
    <footer>
      <a href="#">
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
}