```mermaid
stateDiagram
    [*] --> [Still](https://studies.cs.helsinki.fi/exampleapp/spa)
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```
