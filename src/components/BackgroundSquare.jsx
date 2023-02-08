export function BackgroundSquare({ position, width, color, zindex }) {

  return (
      <div
        className="absolute
        aspect-square
        "
        style={{
          backgroundColor: color,
          top: position.top,
          left: position.left,
          width: width,
          zIndex: `${zindex ? zindex : 'unset'}` 
        }}
      >
      </div>
  )
}
