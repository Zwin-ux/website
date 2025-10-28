/**
 * Canvas and cell configuration for The Wall
 * 2000x2000 canvas with 200x200 cells = 10x10 grid = 100 total slots
 */
export const CANVAS_CONFIG = {
  WIDTH: 2000,
  HEIGHT: 2000,
  CELL_SIZE: 200, // Each mark takes a 200x200 cell
} as const

/**
 * Represents a coordinate pair on the canvas
 */
export interface Coordinate {
  x: number
  y: number
}

/**
 * Calculates the total number of available cells on the canvas
 */
export function getTotalCells(): number {
  const cols = Math.floor(CANVAS_CONFIG.WIDTH / CANVAS_CONFIG.CELL_SIZE)
  const rows = Math.floor(CANVAS_CONFIG.HEIGHT / CANVAS_CONFIG.CELL_SIZE)
  return cols * rows
}

/**
 * Converts a cell index to x,y coordinates
 * Cell indices are numbered left-to-right, top-to-bottom
 *
 * @param cellIndex - The linear cell index (0 to totalCells-1)
 * @returns Coordinate pair (top-left corner of the cell)
 */
export function cellIndexToCoordinate(cellIndex: number): Coordinate {
  const cols = Math.floor(CANVAS_CONFIG.WIDTH / CANVAS_CONFIG.CELL_SIZE)

  const col = cellIndex % cols
  const row = Math.floor(cellIndex / cols)

  return {
    x: col * CANVAS_CONFIG.CELL_SIZE,
    y: row * CANVAS_CONFIG.CELL_SIZE,
  }
}

/**
 * Converts x,y coordinates to a cell index
 *
 * @param coord - The coordinate pair
 * @returns The linear cell index
 */
export function coordinateToCellIndex(coord: Coordinate): number {
  const cols = Math.floor(CANVAS_CONFIG.WIDTH / CANVAS_CONFIG.CELL_SIZE)

  const col = Math.floor(coord.x / CANVAS_CONFIG.CELL_SIZE)
  const row = Math.floor(coord.y / CANVAS_CONFIG.CELL_SIZE)

  return row * cols + col
}

/**
 * Assigns a random free coordinate from available cells
 *
 * @param occupiedCoordinates - Array of already occupied coordinates
 * @returns A free coordinate, or null if no cells are available
 */
export function assignRandomFreeCoordinate(
  occupiedCoordinates: Coordinate[]
): Coordinate | null {
  const totalCells = getTotalCells()

  // Create a Set of occupied cell indices for fast lookup
  const occupiedIndices = new Set(
    occupiedCoordinates.map(coord => coordinateToCellIndex(coord))
  )

  // Find all free cell indices
  const freeCellIndices: number[] = []
  for (let i = 0; i < totalCells; i++) {
    if (!occupiedIndices.has(i)) {
      freeCellIndices.push(i)
    }
  }

  // No free cells available
  if (freeCellIndices.length === 0) {
    return null
  }

  // Pick a random free cell
  const randomIndex = Math.floor(Math.random() * freeCellIndices.length)
  const chosenCellIndex = freeCellIndices[randomIndex]

  return cellIndexToCoordinate(chosenCellIndex)
}
