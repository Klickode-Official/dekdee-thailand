import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { School } from '@/lib/data'

interface CompareStore {
  schools: School[]
  addSchool: (school: School) => void
  removeSchool: (id: string) => void
  clearSchools: () => void
}

export const useCompareStore = create<CompareStore>()(
  persist(
    (set) => ({
      schools: [],
      addSchool: (school) =>
        set((state) => {
          if (state.schools.length >= 3) return state // Max 3 schools
          if (state.schools.some((s) => s.id === school.id)) return state // Prevent duplicates
          return { schools: [...state.schools, school] }
        }),
      removeSchool: (id) =>
        set((state) => ({
          schools: state.schools.filter((s) => s.id !== id),
        })),
      clearSchools: () => set({ schools: [] }),
    }),
    {
      name: 'compare-storage', // name of item in the storage (must be unique)
    }
  )
)
