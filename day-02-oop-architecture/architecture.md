# Architecture: From Console App to Web Application

This console program models Users, Customers, Services, and Bookings
in memory. Here is how it would become a real web application.

## Flow: Frontend -> REST API -> Backend -> Database -> Response

**Frontend:** The customer enters their name and email, and selects a
service from a list. The service's price is already known once
selected, so it doesn't need to be typed separately.

**API endpoint:** The frontend would call `POST /api/bookings` with a
JSON body like `{"customerName": "Aarav", "email": "aarav@mail.com",
"serviceId": 101}`.

**Backend validation:** Check that the name and email fields are not
empty, that the email is in a valid format, and that the given
serviceId actually exists before creating a booking.

**Database:** Customer records (id, name, email), Service records (id,
name, price), and Booking records (bookingId, customer, service,
status) would be stored permanently in tables, instead of living only
in an ArrayList in memory.

**Response:** The backend would return the created booking's details
as JSON, e.g. `{"bookingId": 5001, "customer": "Aarav", "service":
"Consultation", "status": "CREATED"}`, which the frontend uses to show
a confirmation to the user.