
-- DROP TABLES IF EXIST
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Accounts';
    EXECUTE IMMEDIATE 'DROP TABLE Employees';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

-- 1. CREATE TABLES

-- Savings Accounts Table
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER(10, 2)
);

-- Employees Table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER(10, 2)
);

-- 2. INSERT SAMPLE DATA

-- Accounts
INSERT INTO Accounts VALUES (1, 101, 'Savings', 5000.00);
INSERT INTO Accounts VALUES (2, 102, 'Savings', 8000.00);
INSERT INTO Accounts VALUES (3, 103, 'Checking', 4000.00);
INSERT INTO Accounts VALUES (4, 101, 'Savings', 10000.00);

-- Employees
INSERT INTO Employees VALUES (1, 'Alice', 'Sales', 40000.00);
INSERT INTO Employees VALUES (2, 'Bob', 'HR', 35000.00);
INSERT INTO Employees VALUES (3, 'Charlie', 'Sales', 45000.00);
INSERT INTO Employees VALUES (4, 'David', 'IT', 50000.00);

COMMIT;

-- 3. PROCEDURE: ProcessMonthlyInterest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;
END;
/

-- 4. PROCEDURE: UpdateEmployeeBonus
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_Department IN VARCHAR2,
    p_BonusPercent IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_BonusPercent / 100))
    WHERE Department = p_Department;

    COMMIT;
END;
/

-- 5. PROCEDURE: TransferFunds
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_FromAccountID IN NUMBER,
    p_ToAccountID IN NUMBER,
    p_Amount IN NUMBER
) AS
    v_FromBalance NUMBER;
BEGIN
    -- Check source balance
    SELECT Balance INTO v_FromBalance FROM Accounts WHERE AccountID = p_FromAccountID FOR UPDATE;

    IF v_FromBalance < p_Amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance for transfer.');
    END IF;

    -- Deduct from source
    UPDATE Accounts
    SET Balance = Balance - p_Amount
    WHERE AccountID = p_FromAccountID;

    -- Add to destination
    UPDATE Accounts
    SET Balance = Balance + p_Amount
    WHERE AccountID = p_ToAccountID;

    COMMIT;
END;
/
