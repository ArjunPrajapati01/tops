import json
from database import load_data, save_data, log_transaction

def banker_menu():
    while True:
        print("\n--- Banker Menu ---")
        print("1. Add Customer")
        print("2. View Customer")
        print("3. Search Customer")
        print("4. View All Customers")
        print("5. Total Bank Balance")
        print("6. Back to Main Menu")
        choice = input("Enter choice: ")

        if choice == '1':
            add_customer()
        elif choice == '2':
            view_customer()
        elif choice == '3':
            search_customer()
        elif choice == '4':
            view_all_customers()
        elif choice == '5':
            total_amount()
        elif choice == '6':
            break
        else:
            print("Invalid input. Try again.")

def add_customer():
    data = load_data()
    cid = input("Enter customer ID: ")
    if cid in data:
        print("Customer already exists.")
        return
    name = input("Enter name: ")
    balance = float(input("Enter initial deposit: "))
    data[cid] = {"name": name, "balance": balance}
    save_data(data)
    log_transaction(f"Added customer {cid} - {name} with balance ₹{balance}")
    print("Customer added successfully.")

def view_customer():
    data = load_data()
    cid = input("Enter customer ID: ")
    customer = data.get(cid)
    if customer:
        print(f"ID: {cid} | Name: {customer['name']} | Balance: ₹{customer['balance']}")
    else:
        print("Customer not found.")

def search_customer():
    data = load_data()
    name = input("Enter name to search: ").lower()
    found = False
    for cid, customer in data.items():
        if name in customer['name'].lower():
            print(f"ID: {cid} | Name: {customer['name']} | Balance: ₹{customer['balance']}")
            found = True
    if not found:
        print("No matching customer found.")

def view_all_customers():
    data = load_data()
    if not data:
        print("No customers found.")
        return
    for cid, customer in data.items():
        print(f"ID: {cid} | Name: {customer['name']} | Balance: ₹{customer['balance']}")

def total_amount():
    data = load_data()
    total = sum(customer["balance"] for customer in data.values())
    print(f"Total amount in bank: ₹{total}")
