import { describe, it, expect } from 'vitest'
import { calcDerived } from '../calculations'

const base = { doorW: 762, doorH: 1981, panelW: 533, topH: 555, botH: 832, margin: 100 }

describe('calcDerived', () => {
  it('calculates gap correctly', () => {
    const d = calcDerived(base)
    // gapMM = 1981 - 555 - 832 - 200 = 394
    expect(d.gapMM).toBe(394)
  })

  it('flags overflow when panels exceed door height', () => {
    const d = calcDerived({ ...base, topH: 1000, botH: 1000 })
    expect(d.isOverflow).toBe(true)
  })

  it('flags tight when gap < 50mm', () => {
    const d = calcDerived({ ...base, topH: 900, botH: 730 })
    expect(d.isTight).toBe(true)
    expect(d.isOverflow).toBe(false)
  })

  it('calculates coverage percentage', () => {
    const d = calcDerived(base)
    expect(d.totalCoverage).toBe(Math.round((555 + 832) / 1981 * 100))
  })
})
