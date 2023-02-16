import { IconProps } from "interfaces"

const IconsXs = ({ Icon, props }: IconProps) => {
  return <Icon className={`h-5 w-5 ${props}`} />
}

const IconsSm = ({ Icon, props }: IconProps) => {
  return <Icon className={`h-7 w-7 ${props}`} />
}

const IconCustom = ({ Icon, props }: IconProps) => {
  return <Icon className={`${props}`} />
}

export { IconsXs, IconsSm, IconCustom }
