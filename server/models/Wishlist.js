const mongoose = require('mongoose');

const { Schema } = mongoose;

const wishlistSchema = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        {
            addedOn: {
                type: Date,
                default: Date.now
            },
            quantity: {
                type: Number,
                min: 1,
                default: 1
            }
        },
    ]
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;