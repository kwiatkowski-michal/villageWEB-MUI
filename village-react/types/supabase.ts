export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      documents: {
        Row: {
          card_media: string
          created_at: string | null
          description: string | null
          dl_link: string | null
          id: number
          title: string | null
        }
        Insert: {
          card_media?: string | null
          created_at?: string | null
          description?: string | null
          dl_link?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          card_media?: string | null
          created_at?: string | null
          description?: string | null
          dl_link?: string | null
          id?: number
          title?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
