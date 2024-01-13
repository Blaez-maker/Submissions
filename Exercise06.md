```mermaid
sequenceDiagram
Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Server-->>Browser: JSON file
Note right of Browser: loads new JSON file with added note

```
