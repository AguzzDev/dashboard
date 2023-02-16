export const statusColor = (status: string) => {
  const colors = {
    red: "#f75959",
    green: "#46f4c0",
    blue: "#5da3f7",
  }
  return status === "Aprobado"
    ? colors.green
    : status === "Rechazado"
    ? colors.red
    : status === "Pendiente"
    ? colors.blue
    : ""
}
export const formatDate = (data: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }

  return data.toLocaleDateString("es-AR", options)
}
export const formatMoney = (money: number): string => {
  return Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(money)
}
