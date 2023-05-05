// import EmailValidator from 'email-validator'
import { Document, Schema, model } from 'mongoose'

export interface Query extends Document {
  cep: string
  tipoCep: string
}
const schema = new Schema<Query>({
  cep: { type: String, required: true, unique: true },
  tipoCep: { type: String, requiered: true, unique: true }
});

export const QueryModel = model<Query>('Query', schema)