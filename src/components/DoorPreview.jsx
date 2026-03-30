import { calcDerived, DOOR_VIS_W, DOOR_VIS_H } from '../utils/calculations'
import styles from './DoorPreview.module.css'

export default function DoorPreview({ config }) {
  const { doorW, doorH, panelW, topH, botH, margin } = config
  const d = calcDerived({ doorW, doorH, panelW, topH, botH, margin })

  return (
    <div className={styles.wrap}>
      <span className={styles.label}>Preview (scaled)</span>
      <div className={styles.frame}>
        <div className={styles.door} style={{ width: DOOR_VIS_W, height: DOOR_VIS_H }}>
          {/* Top panel zone */}
          <div className={styles.panelZone} style={{ paddingTop: d.visMargin }}>
            <div className={styles.panel} style={{ width: d.visPanelW, height: d.visTopH }} />
          </div>

          {/* Gap indicator */}
          <div className={styles.gapZone}>
            <span className={styles.gapLabel}>
              {d.isOverflow ? '⚠ overflow' : `${Math.round(d.gapMM)}mm gap${d.isTight ? ' ⚠' : ''}`}
            </span>
          </div>

          {/* Bottom panel zone */}
          <div className={styles.panelZone} style={{ paddingBottom: d.visMargin }}>
            <div className={styles.panel} style={{ width: d.visPanelW, height: d.visBotH }} />
          </div>

          <div className={styles.knob} />
        </div>
      </div>
    </div>
  )
}
