
export type Card = {
  name: string
  action?: string
  type: "merged" | "character" | "component"
  cost: number
  url?: string
}

export type PlayerState = {
  health: number
  balance?: number
  shop?: {
    cards: Card[]
  }
  hand?: Card[]
  selected_cards?: Card[]
  merged_card?: Card
}

export type Lobby = {
  player_0: PlayerState
  player_1: PlayerState
  fight: Fight[]
}

export type Fight = {
  winner?: "0" | "1"
  reason?: string
}
