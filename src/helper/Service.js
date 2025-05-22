const { format } = require('date-fns');

const mapService = service => ({
  id: service.id,
  userId: service.user_id,
  title: service.title,
  description: service.description,
  price: parseFloat(service.price),
  userEmail: service.user_email,
  address: service.address,
  createdAtService: format(new Date(service.created_at), 'dd.MM.yyyy'),
  photo: service.photo,
});

module.exports = mapService;
