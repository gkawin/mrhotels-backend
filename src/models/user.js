import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  hashed_password: { type: String, required: true },
  salt: { type: String, required: true },
  create_at: Date,
  update_at: Date,
  first_name: String,
  last_name: String
})

export default mongoose.model('users', userSchema)
