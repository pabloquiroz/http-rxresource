export interface MagicCard {
    id: string;
    name: string;
    type: string;
    setName: string;
  }
  
  export interface MagicCardResponse {
    cards: MagicCard[];
  }