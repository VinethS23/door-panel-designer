import { calcDerived } from '../utils/calculations'
import styles from './ControlPanel.module.css'

function SliderRow({ label, id, min, max, step, value, onChange, displayValue }) {
  return (
    <div className={styles.row}>
      <label htmlFor={id}>{label}</label>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
      <span className={styles.val} dangerouslySetInnerHTML={{ __html: displayValue }} />
    </div>
  )
}

export default function ControlPanel({ config, onChange }) {
  const { doorW, doorH, panelW, topH, botH, margin } = config
  const d = calcDerived({ doorW, doorH, panelW, topH, botH, margin })

  const clampedPanelW = Math.min(panelW, doorW)

  function set(key) {
    return val => onChange({ ...config, [key]: val })
  }

  return (
    <div className={styles.controls}>
      <section className={styles.section}>
        <span className={styles.sectionLabel}>Door dimensions</span>
        <SliderRow label="Width"  id="doorW" min={600} max={900}  step={10} value={doorW} onChange={set('doorW')} displayValue={`${doorW}mm`} />
        <SliderRow label="Height" id="doorH" min={1800} max={2200} step={10} value={doorH} onChange={set('doorH')} displayValue={`${doorH}mm`} />
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Panel width (both)</span>
        <SliderRow
          label="Width" id="pWidth" min={300} max={doorW} step={5}
          value={clampedPanelW} onChange={set('panelW')}
          displayValue={`${clampedPanelW}mm<span class="${styles.pct}">${d.pWidthPct}% of width</span>`}
        />
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Top panel height</span>
        <SliderRow
          label="Height" id="topH" min={100} max={1000} step={5}
          value={topH} onChange={set('topH')}
          displayValue={`${topH}mm<span class="${styles.pct}">${d.topPct}% of height</span>`}
        />
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Bottom panel height</span>
        <SliderRow
          label="Height" id="botH" min={100} max={1000} step={5}
          value={botH} onChange={set('botH')}
          displayValue={`${botH}mm<span class="${styles.pct}">${d.botPct}% of height</span>`}
        />
      </section>

      <div className={styles.divider} />

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Edge margin (top/bottom)</span>
        <SliderRow
          label="Margin" id="margin" min={20} max={200} step={5}
          value={margin} onChange={set('margin')}
          displayValue={`${margin}mm<span class="${styles.pct}">${d.marginPct}% of height</span>`}
        />
      </section>
    </div>
  )
}
