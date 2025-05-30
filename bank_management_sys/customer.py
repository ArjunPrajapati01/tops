from database import load_data, save_data, log_transaction

def customer_menu():
    while True:
        print("\n--- Customer Menu ---")
        print("1. Deposit")
        print("2. Withdraw")
        print("3. View Balance")
        print("4. Back to Main Menu")
        choice = input("Enter choice: ")

        if choice == '1':
            deposit()
        elif choice == '2':
            withdraw()
        elif choice == '3':
            view_balance()
        elif choice == '4':
            break
        else:
            print("Invalid input. Try again.")

def deposit():
    data = load_data()
    cid = input("Enter your ID: ")
    if cid in data:
        amt = float(input("Enter amount to deposit: "))
        data[cid]['balance'] += amt
        save_data(data)
        log_transaction(f"{cid} deposited ₹{amt}")
        print("Amount deposited.")
    else:
        print("Customer ID not found.")

def withdraw():
    data = load_data()
    cid = input("Enter your ID: ")
    if cid in data:
        amt = float(input("Enter amount to withdraw: "))
        if amt <= data[cid]['balance']:
            data[cid]['balance'] -= amt
            save_data(data)
            log_transaction(f"{cid} withdrew ₹{amt}")
            print("Amount withdrawn.")
        else:
            print("Insufficient balance.")
    else:
        print("Customer ID not found.")

def view_balance():
    data = load_data()
    cid = input("Enter your ID: ")
    if cid in data:
        print(f"Your balance: ₹{data[cid]['balance']}")
    else:
        print("Customer ID not found.")
