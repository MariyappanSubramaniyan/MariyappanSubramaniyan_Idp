export interface User {
  id: number
  name: string
  age:number
}

export interface InputFieldProps {
  label: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  type?: string
}

export interface UserFormProps {
  selected: User | null
  onSubmit: (data: Omit<User, 'id'>, id?: number) => void
  onCancel: () => void
}