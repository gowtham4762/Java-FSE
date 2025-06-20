public class FinancialForecasting {

    public static double forecast(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return (1 + rate) * forecast(presentValue, rate, years - 1);
    }

    public static void main(String[] args) {
        double pv = 10000;
        double rate = 0.05;
        int years = 5;

        double futureValue = forecast(pv, rate, years);
        System.out.printf("Future value after %d years: %.2f\n", years, futureValue);
    }
}
