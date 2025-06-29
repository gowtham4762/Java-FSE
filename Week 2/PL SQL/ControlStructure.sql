
-- DROP tables if they exist
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Loans';
    EXECUTE IMMEDIATE 'DROP TABLE Customers';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

-- 1. CREATE TABLES

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Age NUMBER,
    Balance NUMBER(10,2),
    IsVIP VARCHAR2(5) DEFAULT 'FALSE'
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- 2. INSERT SAMPLE DATA

INSERT INTO Customers VALUES (1, 'John Doe', 65, 12000.00, 'FALSE');
INSERT INTO Customers VALUES (2, 'Jane Smith', 45, 8000.00, 'FALSE');
INSERT INTO Customers VALUES (3, 'Alice Brown', 70, 15000.00, 'FALSE');
INSERT INTO Customers VALUES (4, 'Bob Lee', 30, 5000.00, 'FALSE');

INSERT INTO Loans VALUES (101, 1, 7.5, SYSDATE + 20);
INSERT INTO Loans VALUES (102, 2, 8.0, SYSDATE + 40);
INSERT INTO Loans VALUES (103, 3, 6.5, SYSDATE + 10);
INSERT INTO Loans VALUES (104, 4, 9.0, SYSDATE - 5);

COMMIT;

-- 3. PL/SQL BLOCK: Apply 1% Discount for Customers Over 60

BEGIN
    FOR customer_rec IN (SELECT CustomerID FROM Customers WHERE Age > 60) LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = customer_rec.CustomerID;
    END LOOP;
    COMMIT;
END;
/

-- 4. PL/SQL BLOCK: Promote Customers to VIP (Balance > 10000)

BEGIN
    FOR customer_rec IN (SELECT CustomerID FROM Customers WHERE Balance > 10000) LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = customer_rec.CustomerID;
    END LOOP;
    COMMIT;
END;
/

-- 5. PL/SQL BLOCK: Send Reminders for Loans Due in 30 Days

SET SERVEROUTPUT ON;

BEGIN
    FOR loan_rec IN (
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan_rec.LoanID ||
                             ' for Customer ID ' || loan_rec.CustomerID ||
                             ' is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY'));
    END LOOP;
END;
/
