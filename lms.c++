#include <iostream>
#include <string>
using namespace std;

// Class to represent details of a single lecture
class Lecture {
private:
    // Data Members
    string lecturerName;
    string subjectName;
    string courseName;
    int numberOfLectures;

public:
    // Default Constructor to initialize values
    Lecture() {
        lecturerName = "";
        subjectName = "";
        courseName = "";
        numberOfLectures = 0;
    }

    // Method to assign initial values (used to add lecture details)
    void addLectureDetails() {
        cout << "Enter Lecturer's Name       : ";
        getline(cin, lecturerName);
        cout << "Enter Subject Name          : ";
        getline(cin, subjectName);
        cout << "Enter Course Name           : ";
        getline(cin, courseName);
        cout << "Enter Number of Lectures    : ";
        cin >> numberOfLectures;
        cin.ignore(); // Clear newline character from buffer
        cout << "--------------------------------------------------" << endl;
    }

    // Method to display lecture details
    void displayLectureDetails() const {
        cout << "Lecturer Name      : " << lecturerName << endl;
        cout << "Subject Name       : " << subjectName << endl;
        cout << "Course Name        : " << courseName << endl;
        cout << "Number of Lectures : " << numberOfLectures << endl;
        cout << "--------------------------------------------------" << endl;
    }
};

// Main function with interactive menu
int main() {
    const int totalLectures = 5; // Program handles 5 lecturers
    Lecture lectures[totalLectures];

    cout << "\n======= Welcome to Lecture Management System =======\n\n";

    // Input details for each lecture
    for (int i = 0; i < totalLectures; i++) {
        cout << "Enter Details for Lecture " << (i + 1) << ":" << endl;
        lectures[i].addLectureDetails();
    }

    // Display all lecture details
    cout << "\n=============== Displaying Lecture Details ===============\n\n";
    for (int i = 0; i < totalLectures; i++) {
        cout << "Lecture " << (i + 1) << ":" << endl;
        lectures[i].displayLectureDetails();
    }

    cout << "\n================== Program Completed ==================\n";
    return 0;
}
