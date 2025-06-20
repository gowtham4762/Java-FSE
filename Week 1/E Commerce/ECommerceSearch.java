import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return productId + " - " + productName + " (" + category + ")";
    }
}

public class ECommerceSearch {
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(targetName);
            if (cmp == 0) return products[mid];
            else if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Book", "Education"),
                new Product(104, "Phone", "Electronics"),
                new Product(105, "Watch", "Accessories")
        };

        System.out.println("Linear Search: Looking for 'Book'");
        Product result1 = linearSearch(products, "Book");
        System.out.println(result1 != null ? result1 : "Product not found.");

        Arrays.sort(products, Comparator.comparing(p -> p.productName));
        System.out.println("Binary Search: Looking for 'Phone'");
        Product result2 = binarySearch(products, "Phone");
        System.out.println(result2 != null ? result2 : "Product not found.");
    }
}
