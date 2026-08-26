import java.util.ArrayList;
import java.util.HashSet;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Create some customers and services
        Customer c1 = new Customer(1, "Aarav", "aarav@mail.com");
        Customer c2 = new Customer(2, "Priya", "priya@mail.com");
        Customer c3 = new Customer(3, "Rohan", "rohan@mail.com");

        Service s1 = new Service(101, "Consultation", 500.0);
        Service s2 = new Service(102, "Lab Test", 300.0);

        // ArrayList: ordered list of bookings, duplicates allowed
        ArrayList<Booking> bookings = new ArrayList<>();
        bookings.add(new Booking(5001, c1, s1));
        bookings.add(new Booking(5002, c2, s2));
        bookings.add(new Booking(5003, c3, s1));

        // HashSet: unique service category names, no duplicates
        HashSet<String> categories = new HashSet<>();
        categories.add(s1.getName());
        categories.add(s2.getName());
        categories.add(s1.getName()); // duplicate, will be ignored

        // HashMap: fast lookup of a Booking by its bookingId
        HashMap<Integer, Booking> bookingById = new HashMap<>();
        for (Booking b : bookings) {
            bookingById.put(b.getBookingId(), b);
        }

        // Use the NotificationService abstraction
        NotificationService notifier = new EmailNotification();
        notifier.notify("Booking created for " + c1.getName());

        // Print all bookings
        System.out.println("All bookings:");
        for (Booking b : bookings) {
            System.out.println(b);
        }

        // Print unique categories
        System.out.println("\nUnique service categories: " + categories);

        // Retrieve one booking by ID
        System.out.println("\nLooking up booking 5002:");
        System.out.println(bookingById.get(5002));
    }
}