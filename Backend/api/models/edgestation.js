const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	edgeStationId: Number,
	name: String,
	latitude: String,
	longitude: String,
	address: String,
	city: String,
	country: String,
	state: String,
	userEmail: String
});

module.exports = mongoose.model('EdgeStation', userSchema);