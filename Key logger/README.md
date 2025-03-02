The file keylogger.py is a Python script for a keylogger application with a GUI using the tkinter library. Here's an explanation of its components:

Imports:

tkinter for creating the GUI.
pynput for capturing keyboard events.
json for handling JSON file operations


GUI Setup:
A tkinter window is created with a specific size, title, and background color.


Global Variables:

key_list to store key events.
x as a flag to differentiate between key press and hold.
key_strokes to accumulate all keystrokes.


Functions:

update_txt_file(key): Writes the accumulated keystrokes to log.txt.
update_json_file(key_list): Writes the key events to logs.json in JSON format.
on_press(key): Handles key press events, updates key_list, and writes to logs.json.
on_release(key): Handles key release events, updates key_list, accumulates keystrokes, and writes to logs.json and log.txt.
butaction(): Starts the keylogger listener and prints a running message.


GUI Elements:

Labels for spacing and a project title.
A button to start the keylogger.
The script initializes the GUI and starts the keylogger when the button is pressed. It logs keystrokes in both log.txt and logs.json files.
