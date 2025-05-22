const { format } = require('date-fns');

const mapProfile = profile => ({
  id: profile.id,
  profileUserId: profile.user_id,
  photo: profile.photo,
  surname: profile.surname,
  firstName: profile.first_name,
  lastName: profile.last_name,
  phone: profile.phone,
  address: profile.address,
});

module.exports = mapProfile;
