from banker import banker_menu
from customer import customer_menu

def main_menu():
    while True:
        print("\n--- Welcome to Bank Management System ---")
        print("1. Banker")
        print("2. Customer")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            banker_menu()
        elif choice == '2':
            customer_menu()
        elif choice == '3':
            print("Thank you for using the system!")
            break
        else:
            print("Invalid input. Please try again.")

if __name__ == "__main__":
    main_menu()
