sequenceDiagram
    participant browser
    participant server

    Note left of browser: The browser appends the text to the list before sending it to the server.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa Body[{content: "test", date: "2024-04-03T13:03:09.774Z"}]
    activate server
    server-->>browser: {"message":"note created"}
    deactivate server