const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	edgeStationId: Number,
	name: String,
	latitude: String,
	longitude: String,
	city: String,
	country: String,
	address: String,
	userEmail: String
});

module.exports = mongoose.model('EdgeStation', userSchema);