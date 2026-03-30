import { useState } from 'react'
import DoorPreview from './components/DoorPreview'
import ControlPanel from './components/ControlPanel'
import DoorStats from './components/DoorStats'
import DoorList, { newDoor } from './components/DoorList'
import styles from './App.module.css'

export default function App() {
  const [doors, setDoors] = useState([newDoor('Door 1')])
  const [activeId, setActiveId] = useState(doors[0].id)

  const activeDoor = doors.find(d => d.id === activeId) || doors[0]

  function updateActiveDoor(updated) {
    setDoors(doors.map(d => d.id === updated.id ? updated : d))
  }

  function addDoor() {
    const door = newDoor(`Door ${doors.length + 1}`)
    setDoors([...doors, door])
    setActiveId(door.id)
  }

  function removeDoor(id) {
    const remaining = doors.filter(d => d.id !== id)
    setDoors(remaining)
    if (activeId === id) setActiveId(remaining[remaining.length - 1].id)
  }

  function renameDoor(id, name) {
    setDoors(doors.map(d => d.id === id ? { ...d, name } : d))
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Door Panel Designer</h1>

      <DoorList
        doors={doors}
        activeId={activeId}
        onSelect={setActiveId}
        onAdd={addDoor}
        onRemove={removeDoor}
        onRename={renameDoor}
      />

      <div className={styles.layout}>
        <DoorPreview config={activeDoor} />

        <div className={styles.right}>
          <ControlPanel config={activeDoor} onChange={updateActiveDoor} />
          <DoorStats config={activeDoor} />
        </div>
      </div>
    </div>
  )
}
