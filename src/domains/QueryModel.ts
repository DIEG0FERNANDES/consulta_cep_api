// import EmailValidator from 'email-validator'
import { Document, Schema, model } from 'mongoose'

export interface Query extends Document {
  cep: string
  tipoCep: string
}

const schema = new Schema<Query>({
  cep: { type: String, required: true },
  tipoCep: { type: String, requiered: true },
})

export const QueryModel = model<Query>('Query', schema)

export const validateQueryInputs = (queryObject: any) => {}

// lixo do antigo doador, nada importante a baixo
// export const validateQueryInputs = (queryObj: any) => {
//   const { cep, tipocep, subTipoCep, uf, cidade, bairro, endereco, complemento, codigoIBGE } = queryObj

//   const errorMessages: string[] = []

  // "99999-999"
  // if (!cep.match()) {
  //   errorMessages.push('Cep cannot be empty')
  // }
  // if (!uf) {
  //   errorMessages.push('uf cannot be empty')
  // }
  // if (!cidade) {
  //   errorMessages.push('Cidade cannot be empty')
  // }
  // if (!bairro) {
  //   errorMessages.push('Bairro cannot be empty')
  // }
  // if (!endereco) {
  //   errorMessages.push('Endereco cannot be empty')
  // }
  // if (!complemento) {
  //   errorMessages.push('Complemento cannot be empty')
  // }

  // if (!EmailValidator.validate(email)) {
  //   errorMessages.push('Invalid email')
  // }

  // // (99) 99999-9999
  // if (!phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
  //   errorMessages.push('Phone must have following pattern: (00) 00000-0000')
  // }

  // // yyyy-mm-dd
  // if (birthday.match(/^\d{4}-\d{2}-\d{2}$/)) {
  //   const birthdayObj = new Date(birthday)
  //   if (birthdayObj >= new Date()) {
  //     errorMessages.push('Birthday must be previous to today')
  //   }
  // } else {
  //   errorMessages.push('Invalid date format')
  // }
//   return errorMessages
// }
