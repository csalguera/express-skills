import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillSchema = new Schema({
  skill: String,
  category: String,
  learned: Boolean,
  isPlural: Boolean
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}