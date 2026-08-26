public class Customer extends User {
    private String email;

    public Customer(int id, String name, String email) {
        super(id, name);
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String toString() {
        return "Customer{id=" + getId() + ", name=" + getName() + ", email=" + email + "}";
    }
}