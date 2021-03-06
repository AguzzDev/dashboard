export const IconsXs = ({ Icon, props }) => {
  return <Icon className={`w-5 h-5 ${props}`} />
}

export const IconsSm = ({ Icon, props }) => {
  return <Icon className={`h-7 w-7 ${props}`} />
}

export const IconCustom = ({ Icon, props }) => {
  return <Icon className={props} />
}
