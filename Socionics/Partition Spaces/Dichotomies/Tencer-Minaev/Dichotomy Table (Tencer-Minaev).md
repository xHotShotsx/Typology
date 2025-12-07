## Classes of IM Dichotomies

|                                                |                                                                                                                  Positions Democratic Information                                                                                                                  |                                                                                                               Does Not Position Democratic Information                                                                                                               |
| :--------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     **Positions Aristocratic Information**     |                 <span class="cell-vector"> $V$<br><br>Vector Dichotomy<br><span style="text-align:left; display:block;"><br>1. Valid / Null<br>2. Static / Dynamic<br>3. Democratic / Aristocratic<br>4. Asking / Declaring<br></span><br></span>                  | <span class="cell-aristocratic"> $A$<br><br>Aristocratic Dichotomy<br><span style="text-align:left; display:block;"><br>1. 1st-Internal / 1st-External<br>2. 1st-Delta / 1st-Beta<br>3. 2nd-External / 2nd-Internal<br>4. 2nd-Beta / 2nd-Delta<br></span><br></span> |
| **Does Not Position Aristocratic Information** | <span class="cell-democratic"> $D$<br><br>Democratic Dichotomy<br><span style="text-align:left; display:block;"><br>1. 1st-Abstract / 1st-Involved<br>2. 1st-Alpha / 1st-Gamma<br>3. 2nd-Abstract / 2nd-Involved<br>4. 2nd-Alpha / 2nd-Gamma<br></span><br></span> |         <span class="cell-converse"> $C$<br><br>Converse Dichotomy<br><span style="text-align:left; display:block;"><br>1. Irrational / Rational<br>2. Extroverted / Introverted<br>3. Process / Result<br>4. Positivist / Negativist<br></span><br></span>          |

## Sets

### Vector Set

$V = \{V_{1}, V_{2}, V_{3}, V_{4}\}$


### Aristocratic Set

$A = \{A_{1}, A_{2}, A_{3}, A_{4}\}$


### Democratic Set

$D = \{D_{1}, D_{2}, D_{3}, D_{4}\}$


### Converse Set

$C = \{C_{1}, C_{2}, C_{3}, C_{4}\}$


### General Set

$G = \{V_{1}, V_{2}, C_{1}, C_{2}\}$


### Supralocal Set

$U = \{V_{3}, V_{4}, C_{3}, C_{4}\}$


### Accepting Set

$I = \{A_{1}, A_{2}, D_{1}, D_{2}\}$


### Producing Set

$R = \{A_{3}, A_{4}, D_{3}, D_{4}\}$


### Faculty Set

$F = \{A_{1}, A_{3}, D_{1}, D_{3}\}$


### Axis Set ($Q$ = Quadra)

$Q = \{A_{2}, A_{4}, D_{2}, D_{4}\}$


### Central Group / Set

$Z = \{V_{1}, V_{3}, C_{1}, C_{3}\}$


### Orbital / Ordinal Set - $(V \cup C) \in \mathcal{O}$

$\mathcal{O} = \{V_{1}, V_{2}, V_{3}, V_{4}, C_{1}, C_{2}, C_{3}, C_{4}\}$


### Non-Orbital / Cardinal / Wall Set - $(A \cup D) \in W_{14}$

$W_{14} = \{A_{1}, A_{2}, A_{3}, A_{4}, D_{1}, D_{2}, D_{3}, D_{4}\}$


### Level One Set

$X_{1} = \{V_{1}, A_{1}, D_{1}, C_{1}\}$


### Level Two Set

$X_{2} = \{V_{2}, A_{2}, D_{2}, C_{2}\}$


### Level Three Set

$X_{3} = \{V_{3}, A_{3}, D_{3}, C_{3}\}$


### Level Four Set

$X_{4} = \{V_{4}, A_{4}, D_{4}, C_{4}\}$


### Universal Set

$\mathbb{U} = \{ V_{i}, A_{i}, D_{i}, C_{i} \mid i = 1,2,3,4 \}$


## Mathematical Correspondences
### Alphabetic Correspondences

Let: $$\begin{matrix}
\mathcal{A} := \mathbb{U} \\ \mathcal{A} = V \sqcup A \sqcup D \sqcup C
\end{matrix}$$
We introduce a binary operation: $$ \star : \mathcal{A} \times \mathcal{A} \longrightarrow \mathcal{A}. $$
Complement map: $$\kappa : \mathcal{A} \longrightarrow \mathcal{A}, \quad \kappa^2 = \text{identity},$$such that: $$\kappa(V_{i}) = C_{i}, \quad \kappa(C_{i}) = V_{i}, \quad \kappa(A_{i}) = D_{i}, \quad \kappa(D_{i}) = A_{i}.$$
This is an involution: $$\kappa(\kappa(x)) = x$$and it respects indices.

#### Axioms Written as an Operation

$$x \star y = \begin{cases}
V_{i} \quad \text{if } x = y, \\
x \quad \text{if } y = V_{i}, \\
C_{i} \quad \text{if } x = \kappa(y), \\
\kappa(x) \quad \text{if } y = C_{i}. 
\end{cases} $$

### Numeric Correspondences

Let: $$\begin{matrix}
\mathcal{N} := \mathbb{U} \\ \mathcal{N} = X_{1} \sqcup X_{2} \sqcup X_{3} \sqcup X_{4}
\end{matrix}$$
The binary operation: $$ \star : \mathcal{N} \times \mathcal{N} \longrightarrow \mathcal{N}. $$

#### Axioms Written as an Operation

$$x \star y = \begin{cases}
X_{1_{i}} \quad \text{if } x = y, \\
X_{2_{i}} \quad \text{if } x = X_{1_{i}} \text{ and } y = X_{4_{i}}, \\
X_{3_{i}} \quad \text{if } x = X_{2_{i}} \text{ and } y = X_{4_{i}}, \\
X_{4_{i}} \quad \text{if } x = X_{2_{i}} \text{ and } y = X_{3_{i}}. 
\end{cases} $$

# Cayley Table for $\mathcal{D}_{14}$

| **$\times$** | $V_1$ |  $V_2$  | $V_3$ | $V_4$ | $A_1$ | $A_2$ | $A_3$ | $A_4$ | $D_1$ | $D_2$ | $D_3$ | $D_4$ | $C_1$ | $C_2$ | $C_3$ | $C_4$ |
| :----------: | :---: | :-----: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|    $V_1$     | $V_1$ |  $V_2$  | $V_3$ | $V_4$ | $A_1$ | $A_2$ | $A_3$ | $A_4$ | $D_1$ | $D_2$ | $D_3$ | $D_4$ | $C_1$ | $C_2$ | $C_3$ | $C_4$ |
|    $V_2$     | $V_2$ |  $V_1$  | $V_4$ | $V_3$ | $A_2$ | $A_1$ | $A_4$ | $A_3$ | $D_2$ | $D_1$ | $D_4$ | $D_3$ | $C_2$ | $C_1$ | $C_4$ | $C_3$ |
|    $V_3$     | $V_3$ |  $V_4$  | $V_1$ | $V_2$ | $A_3$ | $A_4$ | $A_1$ | $A_2$ | $D_3$ | $D_4$ | $D_1$ | $D_2$ | $C_3$ | $C_4$ | $C_1$ | $C_2$ |
|    $V_4$     | $V_4$ |  $V_3$  | $V_2$ | $V_1$ | $A_4$ | $A_3$ | $A_2$ | $A_1$ | $D_4$ | $D_3$ | $D_2$ | $D_1$ | $C_4$ | $C_3$ | $C_2$ | $C_1$ |
|    $A_1$     | $A_1$ |  $A_2$  | $A_3$ | $A_4$ | $V_1$ | $V_2$ | $V_3$ | $V_4$ | $C_1$ | $C_2$ | $C_3$ | $C_4$ | $D_1$ | $D_2$ | $D_3$ | $D_4$ |
|    $A_2$     | $A_2$ |  $A_1$  | $A_4$ | $A_3$ | $V_2$ | $V_1$ | $V_4$ | $V_3$ | $C_2$ | $C_1$ | $C_4$ | $C_3$ | $D_2$ | $D_1$ | $D_4$ | $D_3$ |
|    $A_3$     | $A_3$ | $A_{4}$ | $A_1$ | $A_2$ | $V_3$ | $V_4$ | $V_1$ | $V_2$ | $C_3$ | $C_4$ | $C_1$ | $C_2$ | $D_3$ | $D_4$ | $D_2$ | $D_1$ |
|    $A_4$     | $A_4$ |  $A_3$  | $A_2$ | $A_1$ | $V_4$ | $V_3$ | $V_2$ | $V_1$ | $C_4$ | $C_3$ | $C_2$ | $C_1$ | $D_4$ | $D_3$ | $D_2$ | $D_1$ |
|    $D_1$     | $D_1$ |  $D_2$  | $D_3$ | $D_4$ | $C_1$ | $C_2$ | $C_3$ | $C_4$ | $V_1$ | $V_2$ | $V_3$ | $V_4$ | $A_1$ | $A_2$ | $A_3$ | $A_4$ |
|    $D_2$     | $D_2$ |  $D_1$  | $D_4$ | $D_3$ | $C_2$ | $C_1$ | $C_4$ | $C_3$ | $V_2$ | $V_1$ | $V_4$ | $V_3$ | $A_2$ | $A_1$ | $A_4$ | $A_3$ |
|    $D_3$     | $D_3$ |  $D_4$  | $D_1$ | $D_2$ |       |       |       |       |       |       | $V_1$ |       |       |       |       |       |
|    $D_4$     | $D_4$ |         |       |       |       |       |       |       |       |       |       | $V_1$ |       |       |       |       |
|    $C_1$     | $C_1$ |         |       |       |       |       |       |       |       |       |       |       | $V_1$ |       |       |       |
|    $C_2$     | $C_2$ |         |       |       |       |       |       |       |       |       |       |       |       | $V_1$ |       |       |
|    $C_3$     | $C_3$ |         |       |       |       |       |       |       |       |       |       |       |       |       | $V_1$ |       |
|    $C_4$     | $C_4$ |         |       |       |       |       |       |       |       |       |       |       |       |       |       | $V_1$ |

# Additional Note

- Also check out the dichotomy table for the Reinin space Kimani White and Andrew Joynton have mapped out: https://docs.google.com/document/d/1Qn8X3vOp2TJAo-RSwtYsFhsKsE6ATPJrnHYHFt3ZZ6o/edit?tab=t.0.
- And for an alternate arrangement of the Tencer-Minaev (TM) Table, check out Kimani White's iteration of the table, accessible here: https://docs.google.com/document/d/1YTDf0oXVmxGEDrOLUyqZZz2lOIDw76yuWAA3ppjHMH0/edit?tab=t.0#heading=h.100owmjgo0e.
- For those wanting to know the octadic sets that are emergent from these dichotomy traits: https://docs.google.com/document/d/1twvmo5SmLomTsG7uQwQP5NJKOUhpcK-qQIv787K8Tjk/edit?tab=t.0.


