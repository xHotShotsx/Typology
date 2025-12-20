flowchart TB
    C2["C2<br/>Integrating"]
    C4["C4<br/>Executing"]
    C1["C1<br/>Contesting"]
    C3["C3<br/>Configuring"]

    A1["A1<br/>Base"]
    A2["A2<br/>Reinforcing"]
    A3["A3<br/>Ignoring"]
    A4["A4<br/>Distorting"]

    D1["D1<br/>Role"]
    D2["D2<br/>Modulating"]
    D3["D3<br/>Suggestive"]
    D4["D4<br/>Calibrating"]

    B1["B1<br/>Disposing"]
    B2["B2<br/>Regulating"]
    B3["B3<br/>Channelling"]
    B4["B4<br/>Refracting"]

    C2 --- C4
    C1 --- C3
    C2 --- C1
    C4 --- C3

    C1 --- A1
    C1 --- A3
    C3 --- D1
    C3 --- D3

    A1 --- A2
    A3 --- A4
    D1 --- D2
    D3 --- D4

    A2 --- B1
    A4 --- B2
    D2 --- B3
    D4 --- B4
