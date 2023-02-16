import { ForwardRefExoticComponent, ReactElement, SVGProps } from "react"

export interface IconProps {
  Icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
  props?: any
}
export interface CustomTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
}
export interface ChildrenProps {
  children: JSX.Element[] | JSX.Element
}
export interface LayoutChartProps {
  title: string
  children: ReactElement
}
export interface NavItemProps {
  path: string
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
  title: string
}
export interface TripleTableStatsProps {
  title: string
  value: string
  number: string
  desc: string
}
export interface ChartProps {
  title: string
  type: string
  data: Array<{ name: string; value: number }>
  dataKeyX: string
  dataKeyY: string
}
export interface TableProps {
  columns: ColumnTypes[]
  data: any
  hooks?: (hooks: string[]) => void
  addRow?: (row: Object) => void
  type: string
}
export interface AddOrEditModalProps {
  row?: {
    values: RowTypes
  }
  addRow?: (row: RowTypes) => void
  editRow?: (row: RowTypes) => void
  type: string
  option: string
}
export interface FieldInputProps {
  label?: string
  name?: string
  placeholder?: string
  value?: string
  type?: string
  as?: string
  children?: JSX.Element[] | JSX.Element
}
export interface TitleProps {
  title: string
}
interface RowTypes {
  category?: string
  description?: string
  id: number
  price?: string
  title?: string
  image?: string
  gen?: string
  name?: string
  email?: string
}
interface ColumnTypes {
  Header: string
  accessor: string
}
