import mongoose, { Schema } from "mongoose";
const {Scheme, model} = mongoose;

const PaymentSchema = new Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    amount: {type: Number, required: true},
    to_user: {type: String, required: true},
    to_project: {type: String, required: true},
    oID: {type: String, required: true},
    givenAt: {type: Date, default: Date.now},
    done: {type: Boolean, default: false},
    email: {type: String, required: true},
})

const Payment = mongoose.models.Payment || model("Payment", PaymentSchema);
export default Payment;