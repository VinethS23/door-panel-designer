export const DOOR_VIS_W = 160
export const DOOR_VIS_H = 340

export function calcDerived({ doorW, doorH, panelW, topH, botH, margin }) {
  const gapMM = doorH - topH - botH - margin * 2
  const totalCoverage = Math.round((topH + botH) / doorH * 100)

  const pWidthPct  = Math.round(panelW / doorW * 100)
  const topPct     = Math.round(topH   / doorH * 100)
  const botPct     = Math.round(botH   / doorH * 100)
  const marginPct  = Math.round(margin / doorH * 100)

  const visMargin  = margin / doorH * DOOR_VIS_H
  const visPanelW  = panelW / doorW * DOOR_VIS_W
  const visTopH    = topH   / doorH * DOOR_VIS_H
  const visBotH    = botH   / doorH * DOOR_VIS_H

  return {
    gapMM,
    totalCoverage,
    pWidthPct,
    topPct,
    botPct,
    marginPct,
    visMargin,
    visPanelW,
    visTopH,
    visBotH,
    isOverflow: gapMM <= 0,
    isTight: gapMM > 0 && gapMM < 50
  }
}
