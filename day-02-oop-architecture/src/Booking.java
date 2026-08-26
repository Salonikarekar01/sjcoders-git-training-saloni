public class Booking {
    private int bookingId;
    private Customer customer;
    private Service service;
    private String status;

    public Booking(int bookingId, Customer customer, Service service) {
        this.bookingId = bookingId;
        this.customer = customer;
        this.service = service;
        this.status = "CREATED";
    }

    public int getBookingId() {
        return bookingId;
    }

    public Customer getCustomer() {
        return customer;
    }

    public Service getService() {
        return service;
    }

    public String getStatus() {
        return status;
    }

    public void confirm() {
        this.status = "CONFIRMED";
    }

    @Override
    public String toString() {
        return "Booking{id=" + bookingId +
               ", customer=" + customer.getName() +
               ", service=" + service.getName() +
               ", status=" + status + "}";
    }
}