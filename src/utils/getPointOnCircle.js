export default (angle, radius = 1) => {
  const x = Math.cos(2 * Math.PI * angle / 360) * radius
  const y = Math.sin(2 * Math.PI * angle / 360) * radius

  return { x, y }
}
