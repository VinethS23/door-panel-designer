import { calcDerived } from '../utils/calculations'
import { exportPDF } from '../utils/pdfExport'
import styles from './DoorStats.module.css'

export default function DoorStats({ config }) {
  const { doorW, doorH, panelW, topH, botH, margin } = config
  const d = calcDerived({ doorW, doorH, panelW, topH, botH, margin })

  return (
    <div className={styles.stats}>
      <div className={styles.rows}>
        <Row label="Panel width"        value={`${panelW}mm`} />
        <Row label="Top panel"          value={`${panelW} × ${topH}mm`} />
        <Row label="Bottom panel"       value={`${panelW} × ${botH}mm`} />
        <Row label="Edge margin"        value={`${margin}mm each`} />
        <Row
          label="Gap between"
          value={d.isOverflow
            ? <span className={styles.overflow}>overflow!</span>
            : `${Math.round(d.gapMM)}mm${d.isTight ? ' ⚠ tight' : ''}`
          }
        />
        <Row label="Coverage"           value={`${d.totalCoverage}% of height`} />
      </div>
      <div className={styles.bar}>
        <div className={styles.barFill} style={{ width: `${Math.min(d.totalCoverage, 100)}%` }} />
      </div>
      <button className={styles.pdfBtn} onClick={() => exportPDF(config)}>
        Export PDF spec sheet
      </button>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}
