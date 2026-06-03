export function MascaraCpf(value:string){
  const apenasnumeros = value.replace(/\D/g, '')
  return apenasnumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
}