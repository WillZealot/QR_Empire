SELECT qrlink.id, qrlink.description, qrlink.date_created, qrlink.user_id, user.name
FROM qrlink
INNER JOIN user ON qrlink.user_id = user.id;