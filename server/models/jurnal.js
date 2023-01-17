import mongoose from 'mongoose';

const jurnalSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  exercises: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: false,
    default: null
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

export default mongoose.model('Jurnal', jurnalSchema);
