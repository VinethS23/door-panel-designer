import styles from './DoorList.module.css'

let nextId = 1
export function newDoor(name) {
  return {
    id: nextId++,
    name: name || `Door ${nextId - 1}`,
    doorW: 762,
    doorH: 1981,
    panelW: 533,
    topH: 555,
    botH: 832,
    margin: 100
  }
}

export default function DoorList({ doors, activeId, onSelect, onAdd, onRemove, onRename }) {
  return (
    <div className={styles.list}>
      {doors.map(door => (
        <div
          key={door.id}
          className={`${styles.tab} ${door.id === activeId ? styles.active : ''}`}
          onClick={() => onSelect(door.id)}
        >
          <span
            className={styles.name}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => onRename(door.id, e.target.textContent.trim() || door.name)}
            onClick={e => e.stopPropagation()}
          >
            {door.name}
          </span>
          {doors.length > 1 && (
            <button
              className={styles.remove}
              onClick={e => { e.stopPropagation(); onRemove(door.id) }}
              title="Remove"
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button className={styles.add} onClick={onAdd} title="Add door">
        + Add door
      </button>
    </div>
  )
}
