import { jsPDF } from 'jspdf'
import { calcDerived, DOOR_VIS_W, DOOR_VIS_H } from './calculations'

export function exportPDF(door) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const { doorW, doorH, panelW, topH, botH, margin, name } = door
  const d = calcDerived({ doorW, doorH, panelW, topH, botH, margin })

  const pageW = 210
  const margin_page = 20
  let y = margin_page

  // Title
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text('Door Panel Spec Sheet', margin_page, y)
  y += 8

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(120, 106, 82)
  doc.text(`${name}  ·  Generated ${new Date().toLocaleDateString()}`, margin_page, y)
  y += 10

  // Divider
  doc.setDrawColor(180, 160, 130)
  doc.line(margin_page, y, pageW - margin_page, y)
  y += 8

  // Dimension table
  doc.setTextColor(44, 36, 22)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.text('Dimensions', margin_page, y)
  y += 6

  const rows = [
    ['Door width',      `${doorW} mm`],
    ['Door height',     `${doorH} mm`],
    ['Panel width',     `${panelW} mm  (${d.pWidthPct}% of width)`],
    ['Top panel height',    `${topH} mm  (${d.topPct}% of height)`],
    ['Bottom panel height', `${botH} mm  (${d.botPct}% of height)`],
    ['Edge margin',     `${margin} mm each  (${d.marginPct}% of height)`],
    ['Gap between panels',  d.isOverflow ? 'OVERFLOW' : `${Math.round(d.gapMM)} mm${d.isTight ? '  ⚠ tight' : ''}`],
    ['Panel coverage',  `${d.totalCoverage}%`],
  ]

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  rows.forEach(([label, value]) => {
    doc.setTextColor(122, 106, 82)
    doc.text(label, margin_page + 2, y)
    doc.setTextColor(44, 36, 22)
    doc.text(value, margin_page + 60, y)
    y += 6
  })

  y += 6

  // Scaled door diagram
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(44, 36, 22)
  doc.text('Panel Layout (scaled)', margin_page, y)
  y += 6

  const scale = Math.min(80 / DOOR_VIS_W, 120 / DOOR_VIS_H)
  const dw = DOOR_VIS_W * scale
  const dh = DOOR_VIS_H * scale
  const dx = margin_page

  // Door background
  doc.setFillColor(201, 169, 110)
  doc.rect(dx, y, dw, dh, 'F')

  // Top panel
  const pxW = d.visPanelW * scale
  const pxH = d.visTopH * scale
  const panelX = dx + (dw - pxW) / 2
  const topY = y + d.visMargin * scale
  doc.setFillColor(255, 255, 255, 0.6)
  doc.setDrawColor(220, 200, 170)
  doc.rect(panelX, topY, pxW, pxH, 'FD')

  // Bottom panel
  const botH_px = d.visBotH * scale
  const botY = y + dh - d.visMargin * scale - botH_px
  doc.rect(panelX, botY, pxW, botH_px, 'FD')

  // Door knob
  doc.setFillColor(200, 160, 40)
  doc.circle(dx + dw + 2, y + dh / 2, 2, 'F')

  // Door border
  doc.setDrawColor(139, 105, 20)
  doc.setLineWidth(0.5)
  doc.rect(dx, y, dw, dh)

  doc.save(`${name.replace(/\s+/g, '-').toLowerCase()}-spec.pdf`)
}
