## Classes of IM Dichotomies

|                                                |                                                                                                                 Positions Democratic Information                                                                                                                 |                                                                                                             Does Not Position Democratic Information                                                                                                             |
| :--------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     **Positions Aristocratic Information**     |                   <span class="cell-vector"> $V$<br><br>Vector Dichotomy<br><span style="text-align:left; display:block;"><br>1. Valid / Null<br>2. Static / Dynamic<br>3. Descriptive / Prescriptive<br>4. Divergent / Convergent<br></span>                    | <span class="cell-aristocratic"> $A$<br><br>Aristocratic Dichotomy<br><span style="text-align:left; display:block;"><br>1. Imaginative / Concrete<br>2. Absorptive / Directive<br>3. Structuring / Expansive<br>4. Projective / Reflective<br></span><br></span> |
| **Does Not Position Aristocratic Information** | <span class="cell-democratic"> $D$<br><br>Democratic Dichotomy<br><span style="text-align:left; display:block;"><br>1. Conceptual / Experiential<br>2. Systemic / Pragmatic<br>3. Illustrative / Transformative<br>4. Formative / Emergent<br></span><br></span> |   <span class="cell-converse"> $C$<br><br>Converse Dichotomy<br><span style="text-align:left; display:block;"><br>1. Irrational / Rational<br>2. Extroverted / Introverted<br>3. Evolutive / Involutive<br>4. Constructive / Corrective<br></span><br></span>    |

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


### Central Set

$Z = \{V_{1}, V_{3}, C_{1}, C_{3}\}$


### Square / Dihedral Set

$S = \{ V_{2}, V_{4}, C_{2}, C_{4} \}$


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
X_{1} \quad \text{if } x = y, \\
X_{2} \quad \text{if } x = X_{1} \text{ and } y = X_{4}, \\
X_{3} \quad \text{if } x = X_{2} \text{ and } y = X_{4}, \\
X_{4} \quad \text{if } x = X_{2} \text{ and } y = X_{3}. 
\end{cases} $$

## Cayley Table for $\mathcal{D}_{14}$

|                 **$\times$**                 |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_4$</span>    | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_4$</span> |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_4$</span>  |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_4$</span>   |
| :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: | :------------------------------------------: |
|    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_4$</span>    | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_4$</span> |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_4$</span>  |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_4$</span>   |
|    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_3$</span>    | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_3$</span> |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_3$</span>  |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_3$</span>   |
|    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_2$</span>    | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_2$</span> |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_2$</span>  |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_2$</span>   |
|    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_1$</span>    | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_1$</span> |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_1$</span>  |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_1$</span>   |
| <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_4$</span> |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_4$</span>    |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_4$</span>   |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_4$</span>  |
| <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_3$</span> |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_3$</span>    |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_3$</span>   |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_3$</span>  |
| <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_2$</span> |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_2$</span>    |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_2$</span>   |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_2$</span>  |
| <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_1$</span> |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_1$</span>    |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_1$</span>   |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_1$</span>  |
|  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_4$</span>  |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_4$</span>   |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_4$</span>    | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_4$</span> |
|  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_3$</span>  |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_3$</span>   |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_3$</span>    | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_3$</span> |
|  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_2$</span>  |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_2$</span>   |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_2$</span>    | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_2$</span> |
|  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_1$</span>  |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_1$</span>   |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_1$</span>    | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_1$</span> |
|   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_4$</span>   |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_4$</span>  | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_4$</span> |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_4$</span>    |
|   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_3$</span>   |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_3$</span>  | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_3$</span> |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_3$</span>    |
|   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_1$</span>   |   <span class="cell-converse">$C_2$</span>   |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_1$</span>  |  <span class="cell-democratic">$D_2$</span>  | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_1$</span> | <span class="cell-aristocratic">$A_2$</span> |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_1$</span>    |    <span class="cell-vector">$V_2$</span>    |
|   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_4$</span>   |   <span class="cell-converse">$C_3$</span>   |   <span class="cell-converse">$C_2$</span>   |   <span class="cell-converse">$C_1$</span>   |  <span class="cell-democratic">$D_4$</span>  |  <span class="cell-democratic">$D_3$</span>  |  <span class="cell-democratic">$D_2$</span>  |  <span class="cell-democratic">$D_1$</span>  | <span class="cell-aristocratic">$A_4$</span> | <span class="cell-aristocratic">$A_3$</span> | <span class="cell-aristocratic">$A_2$</span> | <span class="cell-aristocratic">$A_1$</span> |    <span class="cell-vector">$V_4$</span>    |    <span class="cell-vector">$V_3$</span>    |    <span class="cell-vector">$V_2$</span>    |    <span class="cell-vector">$V_1$</span>    |


# IM Octads Index
## Disclaimer

Since $V_{1}$ is not a dichotomy (proper), the sets that are derived from it are not octadic, therefore containing no real octads of types. While a dichotomy (proper) entails equal partitioning, this set is tautologically defined by the criteria for TIM validity and thus does not constitute an even distribution of octadic sets.

## Notation

A dichotomy is a partition: $$\mathfrak{d} = \{ \mathfrak{d}_{0}, \mathfrak{d}_{1} \}, \quad \mathfrak{d}_{0} \sqcup \mathfrak{d}_{1} = T$$with the dichotomy function: $$ \mathfrak{d} : T \to \mathbb{Z}_{2} $$by
$$ \mathfrak{d}(t) := \begin{cases}
0, \quad \text{if } t \in \mathfrak{d}_{0}, \\
1, \quad \text{if } t \in \mathfrak{d}_{1}. 
\end{cases} $$

We fix the sociotype ILE as the reference element and identify it with the zero vector. Accordingly, for every dichotomy $\mathfrak{d}$, the assignment of values for $0$ and $1$ is chosen so that $\mathfrak{d}(\mathrm{ILE}) = 0$. All trait values and vector representations are therefore understood relative to this basepoint. Under this convention, every type $t \in T$ is represented by a binary vector encoding its deviation from the ILE across the fixed dichotomy system.

## Orbital / Ordinal Octads ($\mathcal{O}$)
> [!octad-v]
> ### Vector Octads ($V$)
> 
> #### Valid / Null ($V_{1}$)
> 
> $T = \{ \mathrm{ILE}, \mathrm{SEI}, \mathrm{ESE}, \mathrm{LII}, \mathrm{EIE}, \mathrm{LSI}, \mathrm{SLE}, \mathrm{IEI}, \mathrm{SEE}, \mathrm{ILI}, \mathrm{LIE}, \mathrm{ESI}, \mathrm{LSE}, \mathrm{EII}, \mathrm{IEE}, \mathrm{SLI} \}$
> $\mathcal{E} = \{ \mathrm{?Ne^+}, \mathrm{!Si^-}, \mathrm{!Fe^+}, \mathrm{?Ti^-}, \mathrm{?Fe^-}, \mathrm{!Ti^+}, \mathrm{!Se^-}, \mathrm{?Ni^+}, \mathrm{?Se^+}, \mathrm{!Ni^-}, \mathrm{!Te^+}, \mathrm{?Fi^-}, \mathrm{?Te^-}, \mathrm{!Fi^+}, \mathrm{!Ne^-}, \mathrm{?Si^+} \}$
> 
> #### Static / Dynamic ($V_{2}$)
> 
> $V_{2,0}^T = \{ \mathrm{ILE}, \mathrm{LII}, \mathrm{LSI}, \mathrm{SLE}, \mathrm{SEE}, \mathrm{ESI}, \mathrm{EII}, \mathrm{IEE} \}$
> $V_{2,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{?Ti^-}, \mathrm{!Ti^+}, \mathrm{!Se^-}, \mathrm{?Se^+}, \mathrm{?Fi^-}, \mathrm{!Fi^+}, \mathrm{!Ne^-} \}$
> 
> $V_{2,1}^T = \{ \mathrm{SEI}, \mathrm{ESE}, \mathrm{EIE}, \mathrm{IEI}, \mathrm{ILI}, \mathrm{LIE}, \mathrm{LSE}, \mathrm{SLI}  \}$
> $V_{2,1}^{\mathcal{E}} = \{ \mathrm{!Si^-}, \mathrm{!Fe^+}, \mathrm{?Fe^-}, \mathrm{?Ni^+}, \mathrm{!Ni^-}, \mathrm{!Te^-}, \mathrm{?Te^+}, \mathrm{?Si^+}  \}$
> 
> #### Descriptive / Prescriptive ($V_3$)
> 
> $V_{3,0}^T = \{ \mathrm{ILE}, \mathrm{SEI}, \mathrm{ESE}, \mathrm{LII}, \mathrm{SEE}, \mathrm{ILI}, \mathrm{LIE}, \mathrm{ESI} \}$
> $V_{3,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{!Si^-}, \mathrm{!Fe^+}, \mathrm{?Ti^-}, \mathrm{?Se^+}, \mathrm{!Ni^-}, \mathrm{!Te^+}, \mathrm{?Fi^-} \}$
> 
> $V_{3,1}^T = \{ \mathrm{EIE}, \mathrm{LSI}, \mathrm{SLE}, \mathrm{IEI}, \mathrm{LSE}, \mathrm{EII}, \mathrm{IEE}, \mathrm{SLI} \}$
> $V_{3,1}^{\mathcal{E}} = \{ \mathrm{?Fe^-}, \mathrm{!Ti^+}, \mathrm{!Se^-}, \mathrm{?Ni^+}, \mathrm{?Te^-}, \mathrm{!Fi^+}, \mathrm{!Ne^-}, \mathrm{?Si^+} \}$
> 
> #### Divergent / Convergent ($V_{4}$)
> 
> $V_{4,0}^{T} = \{ \mathrm{ILE}, \mathrm{LII}, \mathrm{EIE}, \mathrm{IEI}, \mathrm{SEE}, \mathrm{ESI}, \mathrm{LSE}, \mathrm{SLI} \}$
> $V_{4,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+},  \mathrm{?Ti^-}, \mathrm{?Fe^-}, \mathrm{?Ni^+}, \mathrm{?Se^+}, \mathrm{?Fi^-}, \mathrm{?Te^-}, \mathrm{?Si^+} \}$
> 
> $V_{4,1}^T = \{ \mathrm{SEI}, \mathrm{ESE}, \mathrm{LSI}, \mathrm{SLE}, \mathrm{ILI}, \mathrm{LIE}, \mathrm{EII}, \mathrm{IEE} \}$
> $V_{4,1}^{\mathcal{E}} = \{ \mathrm{!Si^-}, \mathrm{!Fe^+}, \mathrm{!Ti^+}, \mathrm{!Se^-}, \mathrm{!Ni^-}, \mathrm{!Te^+}, \mathrm{!Fi^+}, \mathrm{!Ne^-} \}$

> [!octad-c]
> ### Converse Octads ($C$)
>
>#### Irrational / Rational ($C_1$)
>
>$C_{1,0}^T = \{ \mathrm{ILE}, \mathrm{SEI}, \mathrm{SLE}, \mathrm{IEI}, \mathrm{SEE}, \mathrm{ILI}, \mathrm{IEE}, \mathrm{SLI} \}$
>$C_{1,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{!Si^-}, \mathrm{!Se^-}, \mathrm{?Ni^+}, \mathrm{?Se^+}, \mathrm{!Ni^-}, \mathrm{!Ne^-}, \mathrm{?Si^+} \}$
>
>$C_{1,1}^T = \{ \mathrm{ESE}, \mathrm{LII}, \mathrm{EIE}, \mathrm{LSI}, \mathrm{LIE}, \mathrm{ESI}, \mathrm{LSE}, \mathrm{EII} \}$
>$C_{1,1}^{\mathcal{E}} = \{ \mathrm{!Fe^+}, \mathrm{?Ti^-}, \mathrm{?Fe^-}, \mathrm{!Ti^+}, \mathrm{!Te^+}, \mathrm{?Fi^-}, \mathrm{?Te^-}, \mathrm{!Fi^+} \}$
>
> #### Extroversion / Introversion ($C_{2}$)
> 
> $C_{2,0}^T = \{ \mathrm{ILE}, \mathrm{ESE}, \mathrm{EIE}, \mathrm{SLE}, \mathrm{SEE}, \mathrm{LIE}, \mathrm{LSE}, \mathrm{IEE} \}$
> $C_{2,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{!Fe^+}, \mathrm{?Fe^-}, \mathrm{!Se^-}, \mathrm{?Se^+}, \mathrm{!Te^+}, \mathrm{?Te^-}, \mathrm{!Ne^-} \}$
> 
> $C_{2,1}^T = \{ \mathrm{SEI}, \mathrm{LII}, \mathrm{LSI}, \mathrm{IEI}, \mathrm{ILI}, \mathrm{ESI}, \mathrm{EII}, \mathrm{SLI}  \}$
> $C_{2,1}^{\mathcal{E}} = \{ \mathrm{!Si^-}, \mathrm{?Ti^-}, \mathrm{!Ti^+}, \mathrm{?Ni^+}, \mathrm{!Ni^-}, \mathrm{?Fi^-}, \mathrm{!Fi^+}, \mathrm{?Si^+}  \}$
> 
> #### Evolutive / Involutive ($C_3$)
> 
> $C_{3,0}^T = \{ \mathrm{ILE}, \mathrm{SEI}, \mathrm{EIE}, \mathrm{LSI}, \mathrm{SEE}, \mathrm{ILI}, \mathrm{LSE}, \mathrm{EII} \}$
> $C_{3,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{!Si^-}, \mathrm{?Fe^-}, \mathrm{!Ti^+}, \mathrm{?Se^+}, \mathrm{!Ni^-}, \mathrm{?Te^-}, \mathrm{!Fi^+} \}$
> 
> $C_{3,1}^T = \{ \mathrm{ESE}, \mathrm{LII}, \mathrm{SLE}, \mathrm{IEI}, \mathrm{LIE}, \mathrm{ESI}, \mathrm{IEE}, \mathrm{SLI} \}$
> $C_{3,1}^{\mathcal{E}} = \{ \mathrm{!Fe^+}, \mathrm{?Ti^-}, \mathrm{!Se^-}, \mathrm{?Ni^+}, \mathrm{!Te^+}, \mathrm{?Fi^-}, \mathrm{!Ne^-}, \mathrm{?Si^+} \}$
> 
> #### Constructive / Corrective ($C_{4}$)
> 
> $C_{4,0}^{T} = \{ \mathrm{ILE}, \mathrm{ESE}, \mathrm{LSI}, \mathrm{IEI}, \mathrm{SEE}, \mathrm{LIE}, \mathrm{EII}, \mathrm{SLI} \}$
> $C_{4,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+},  \mathrm{!Fe^+}, \mathrm{!Ti^+}, \mathrm{?Ni^+}, \mathrm{?Se^+}, \mathrm{!Te^+}, \mathrm{!Fi^+}, \mathrm{?Si^+} \}$
> 
> $V_{4,1}^T = \{ \mathrm{SEI}, \mathrm{LII}, \mathrm{EIE}, \mathrm{SLE}, \mathrm{ILI}, \mathrm{ESI}, \mathrm{LSE}, \mathrm{IEE} \}$
> $V_{4,1}^{\mathcal{E}} = \{ \mathrm{!Si^-}, \mathrm{?Ti^-}, \mathrm{?Fe^-}, \mathrm{!Se^-}, \mathrm{!Ni^-}, \mathrm{?Fi^-}, \mathrm{?Te^-}, \mathrm{!Ne^-} \}$

## Wall / Cardinal / Non-Orbital Octads ($W_{14}$)
> [!octad-a]
> Aristocratic Octads ($A$)
> 
> #### Imaginative / Concrete ($A_1$)
>
> $A_{1,0}^T = \{ \mathrm{ILE}, \mathrm{ESE}, \mathrm{EIE}, \mathrm{IEI}, \mathrm{ILI}, \mathrm{ESI}, \mathrm{EII}, \mathrm{IEE} \}$
> $A_{1,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{!Fe^+}, \mathrm{?Fe^+}, \mathrm{?Ni^+}, \mathrm{!Ni^-}, \mathrm{?Fi^-}, \mathrm{!Fi^+}, \mathrm{!Ne^-} \}$
>
>$A_{1,1}^T = \{ \mathrm{SEI}, \mathrm{ESE}, \mathrm{EIE}, \mathrm{SLE}, \mathrm{SEE}, \mathrm{ESI}, \mathrm{EII}, \mathrm{SLI} \}$
>$A_{1,1}^{\mathcal{E}} = \{ \mathrm{!Si^-}, \mathrm{?Ti^-}, \mathrm{!Ti^+}, \mathrm{!Se^-}, \mathrm{?Se^+}, \mathrm{!Te^+}, \mathrm{?Te^-}, \mathrm{?Si^+} \}$
>
> #### Absorptive / Directive ($A_{2}$)
> 
> $A_{2,0}^T = \{ \mathrm{ILE}, \mathrm{SEI}, \mathrm{LIE}, \mathrm{ESI}, \mathrm{LSE}, \mathrm{EII}, \mathrm{IEE}, \mathrm{SLI} \}$
> $A_{2,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{!Si^-}, \mathrm{!Te^+}, \mathrm{?Fi^-}, \mathrm{?Te^-}, \mathrm{!Fi^+}, \mathrm{-Ne^-}, \mathrm{?Si^+} \}$
> 
> $A_{2,1}^T = \{ \mathrm{ESE}, \mathrm{LII}, \mathrm{EIE}, \mathrm{LSI}, \mathrm{SLE}, \mathrm{IEI}, \mathrm{SEE}, \mathrm{ILI}  \}$
> $A_{2,1}^{\mathcal{E}} = \{ \mathrm{!Fe^+}, \mathrm{?Ti^-}, \mathrm{?Fe^-}, \mathrm{!Ti^+}, \mathrm{!Se^-}, \mathrm{?Ni^+}, \mathrm{?Se^+}, \mathrm{!Ni^-}  \}$
> 
> #### Structuring / Expansive ($A_{3}$)
> 
> $A_{3,0}^T = \{ \mathrm{ILE}, \mathrm{ESE}, \mathrm{LSI}, \mathrm{SLE}, \mathrm{ILI}, \mathrm{ESI}, \mathrm{LSE}, \mathrm{SLI} \}$
> $A_{3,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{!Fe^+}, \mathrm{!Ti^+}, \mathrm{!Se^-}, \mathrm{!Ni^-}, \mathrm{?Fi^-}, \mathrm{?Te^-}, \mathrm{?Si^+} \}$
> 
> $A_{3,1}^T = \{ \mathrm{SEI}, \mathrm{LII}, \mathrm{EIE}, \mathrm{IEI}, \mathrm{SEE}, \mathrm{LIE}, \mathrm{EII}, \mathrm{IEE} \}$
> $A_{3,1}^{\mathcal{E}} = \{ \mathrm{?Si^-}, \mathrm{?Ti^-}, \mathrm{?Fe^-}, \mathrm{?Ni^+}, \mathrm{?Se^+}, \mathrm{!Te^+}, \mathrm{!Fi^+}, \mathrm{!Ne^-} \}$
> 
> #### Projective / Reflective ($A_{4}$)
> 
> $A_{4,0}^{T} = \{ \mathrm{ILE}, \mathrm{SEI}, \mathrm{EIE}, \mathrm{LSI}, \mathrm{SLE}, \mathrm{IEI}, \mathrm{LIE}, \mathrm{ESI} \}$
> $A_{4,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+},  \mathrm{!Si^-}, \mathrm{?Fe^-}, \mathrm{!Ti^+}, \mathrm{!Se^-}, \mathrm{?Ni^+}, \mathrm{!Te^+}, \mathrm{?Fi^-} \}$
> 
> $A_{4,1}^T = \{ \mathrm{ESE}, \mathrm{LII}, \mathrm{SEE}, \mathrm{ILI}, \mathrm{LSE}, \mathrm{EII}, \mathrm{IEE}, \mathrm{SLI} \}$
> $A_{4,1}^{\mathcal{E}} = \{ \mathrm{!Fe^+}, \mathrm{?Ti^-}, \mathrm{?Se^+}, \mathrm{!Ni^-}, \mathrm{?Te^-}, \mathrm{!Fi^+}, \mathrm{!Ne^-}, \mathrm{?Si^+} \}$

> [!octad-d]
> Democratic Octads ($D$)
> 
> #### Conceptual / Experiential ($D_1$)
>
> $D_{1,0}^T = \{ \mathrm{ILE}, \mathrm{LII}, \mathrm{LSI}, \mathrm{IEI}, \mathrm{ILI}, \mathrm{LIE}, \mathrm{LSE}, \mathrm{IEE} \}$
> $D_{1,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{?Ti^-}, \mathrm{!Ti^+}, \mathrm{?Ni^+}, \mathrm{!Ni^-}, \mathrm{!Te^+}, \mathrm{?Te^-}, \mathrm{!Ne^-} \}$
>
>$D_{1,1}^T = \{ \mathrm{SEI}, \mathrm{ESE}, \mathrm{EIE}, \mathrm{SLE}, \mathrm{SEE}, \mathrm{ESI}, \mathrm{EII}, \mathrm{SLI} \}$
>$D_{1,1}^{\mathcal{E}} = \{ \mathrm{!Si^-}, \mathrm{!Fe^+}, \mathrm{?Fe^-}, \mathrm{!Se^-}, \mathrm{?Se^+}, \mathrm{?Fi^-}, \mathrm{!Fi^+}, \mathrm{?Si^+} \}$
>
> #### Systemic / Pragmatic ($D_{2}$)
> 
> $D_{2,0}^T = \{ \mathrm{ILE}, \mathrm{SEI}, \mathrm{ESE}, \mathrm{LII}, \mathrm{EIE}, \mathrm{LSI}, \mathrm{IEE}, \mathrm{SLI} \}$
> $D_{2,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{!Si^-}, \mathrm{!Fe^+}, \mathrm{?Ti^-}, \mathrm{?Fe^-}, \mathrm{!Ti^+}, \mathrm{-Ne^-}, \mathrm{?Si^+} \}$
> 
> $D_{2,1}^T = \{ \mathrm{SLE}, \mathrm{IEI}, \mathrm{SEE}, \mathrm{ILI}, \mathrm{LIE}, \mathrm{ESI}, \mathrm{LSE}, \mathrm{EII}  \}$
> $D_{2,1}^{\mathcal{E}} = \{ \mathrm{!Se^-}, \mathrm{?Ni^+}, \mathrm{?Se^+}, \mathrm{!Ni^-}, \mathrm{!Te^+}, \mathrm{?Fi^-}, \mathrm{?Te^-}, \mathrm{!Fi^+}  \}$
> 
> #### Illustrative / Transformative ($D_{3}$)
> 
> $D_{3,0}^T = \{ \mathrm{ILE}, \mathrm{LII}, \mathrm{EIE}, \mathrm{SLE}, \mathrm{ILI}, \mathrm{LIE}, \mathrm{EII}, \mathrm{SLI} \}$
> $D_{3,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+}, \mathrm{?Ti^-}, \mathrm{?Fe^-}, \mathrm{!Se^-}, \mathrm{!Ni^-}, \mathrm{!Te^+}, \mathrm{!Fi^+}, \mathrm{?Si^+} \}$
> 
> $D_{3,1}^T = \{ \mathrm{SEI}, \mathrm{ESE}, \mathrm{EIE}, \mathrm{IEI}, \mathrm{SEE}, \mathrm{LIE}, \mathrm{EII}, \mathrm{IEE} \}$
> $D_{3,1}^{\mathcal{E}} = \{ \mathrm{?Si^-}, \mathrm{!Fe^+}, \mathrm{!Ti^+}, \mathrm{?Ni^+}, \mathrm{?Se^+}, \mathrm{?Fi^-}, \mathrm{?Te^-}, \mathrm{!Ne^-} \}$
> 
> #### Formative / Emergent ($D_{4}$)
> 
> $D_{4,0}^{T} = \{ \mathrm{ILE}, \mathrm{SEI}, \mathrm{ESE}, \mathrm{LII}, \mathrm{SLE}, \mathrm{IEI}, \mathrm{LSE}, \mathrm{EII} \}$
> $D_{4,0}^{\mathcal{E}} = \{ \mathrm{?Ne^+},  \mathrm{!Si^-}, \mathrm{!Fe^+}, \mathrm{?Ti^-}, \mathrm{!Se^-}, \mathrm{?Ni^+}, \mathrm{?Te^-}, \mathrm{!Fi^+} \}$
> 
> $D_{4,1}^T = \{ \mathrm{EIE}, \mathrm{LSI}, \mathrm{SEE}, \mathrm{ILI}, \mathrm{LIE}, \mathrm{ESI}, \mathrm{IEE}, \mathrm{SLI} \}$
> $D_{4,1}^{\mathcal{E}} = \{ \mathrm{?Fe^-}, \mathrm{!Ti^+}, \mathrm{?Se^+}, \mathrm{!Ni^-}, \mathrm{!Te^+}, \mathrm{?Fi^-}, \mathrm{!Ne^-}, \mathrm{?Si^+} \}$


# Classes of Tetrachotomies
## Orbital Class $\mathcal{O}$

**#3:** $V_{2} \cap V_{3} \cap V_{4} = V$ = "Vector" Tetrachotomy
**#4:** $V_{4} \cap C_{1} \cap C_{2}$
**#7:** $V_{4} \cap C_{2} \cap C_{3}$
**#21:** $V_{3} \cap C_{1} \cap C_{3} = Z$ = "Central" Tetrachotomy 
**#22:** $V_{3} \cap C_{2} \cap C_{4}$
**#30:**
**#31:**


# Additional Note

- Also check out the modern dichotomy classifications table for the Reinin space Kimani White and Andrew Joynton have mapped out: https://docs.google.com/document/d/1xcek3L5mTOrljxb24NXyxyqnhG8tFx7TInfAQ0H_pdc/edit?tab=t.0#heading=h.1vmsoe7mj6yf.
- And for an alternate arrangement of the Tencer-Minaev (TM) Table, check out Kimani White's iteration of the table, accessible here: https://docs.google.com/document/d/1YTDf0oXVmxGEDrOLUyqZZz2lOIDw76yuWAA3ppjHMH0/edit?tab=t.0#heading=h.100owmjgo0e.