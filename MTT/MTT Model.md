
# List of Permutations for the MTT Model (Notation is based on 'Passive Indexing')

We will be using Model A function notation for the sake of my own sanity, but may revise whenever I feel like it.

1. ILE/NTC = ()
2. SEE/SFC = (13)(24)(57)(68)
3. ILI/NTB = (17)(28)(35)(46)
4. SEI/SFB = (15)(26)(37)(48)
5. LII/TNC = (12)(34)(56)(78)
6. ESI/FSC = (14)(23)(58)(67)
7. LIE/TNB = (18)(27)(36)(45)
8. ESE/FSB = (16)(25)(38)(47)
9. IEE/NFC = (24)(68)
10. SLE/STC = (13)(57)
11. IEI/NFB = (17)(26)(35)(48)
12. SLI/STB = (15)(28)(37)(46)
13. LSI/TSC = (1234)(5678)
14. EII/FNC = (1432)(5876)
15. EIE/FNB = (1638)(2745)
16. LSE/TSB = (1836)(2547)

17. NFP = (26)(48)
18. STS = (15)(37)
19. STP = (13)(28)(46)(57)
20. NFS = (17)(24)(35)(68)
21. NTP = (28)(46)
22. SFP = (13)(26)(48)(57)
23. NTS = (17)(35)
24. SFS = (15)(24)(37)(68)
25. FSP = (1674)(2385)
26. FSS = (1476)(2583)
27. TNS = (1278)(3456)
28. TNP = (1872)(3654)
29. TSP = (1854)(2367)
30. FNS = (1458)(2763)
31. TSS = (1256)(3478)
32. FNP = (1652)(3874)

For ITRs between 'information' and 'energy' types, we will use the corresponding Greek letter that would apply permutation #21 from the identity, which would preserve club but will change quadra. This will be the case for all elements with order 2. For the new relationships of order 4 the 'information' types will be used as the reference, and the inverse of the first chosen permutation will be referred to as the inverse of that relationship (using the superscript $-1$), just as the supervisee, is the inverse of the supervisor, as applying one after the other gets you to the type you started out with. For simplicity's sake, we will use the conjugate 'jumped' to describe relationships between the information and energy types. The column on the right is the permutation number described in the list above.

# Elements of $\mathbb{M}$:

$e \quad$ identity, or identical $\quad 1$
$d \quad$  dual  $\quad \text{4}$
$a \quad$ activator $\quad 8$
$m \quad$ mirror  $\quad 5$
$g \quad$ superego $\quad 2$
$c \quad$ conflict  $\quad 6$
$q \quad$ quasi-identical $\quad 7$
$x \quad$ extinguishment, or contrary $\quad 3$  
$S \quad$ supervisor  $\quad 14$
$B \quad$ benefactor  $\quad 16$
$k \quad$ kindred  $\quad 9$
$h \quad$ semidual, or half-dual $\quad 12$  
$s \quad$ supervisee  $\quad 13$
$b \quad$ beneficiary  $\quad 15$
$l \quad$ business, or lookalike  $\quad 10$
$i \quad$ mirage, or illusory  $\quad 11$
$\epsilon \quad$ identity-jumped $\quad 21$
$\kappa \quad$ kindred-jumped $\quad 17$
$\eta \quad$ semidual-jumped $\quad 18$
$\lambda \quad$ lookalike-jumped   $\quad 19$
$\iota \quad$ illusory-jumped $\quad 20$
$\gamma \quad$ superego-jumped  $\quad 22$
$\chi \quad$ extinguishment-jumped $\quad 23$
$\delta \quad$ dual-jumped $\quad 24$
$\alpha \quad$ activator-jumped $\quad 25$
$\alpha^{-1} \quad$ conflict-jumped $\quad 26$
$\mu \quad$ mirror-jumped $\quad 27$
$\mu^{-1} \quad$ quasi-identical-jumped $\quad 28$
$\Sigma^{-1} \quad$ benefactor-jumped $\quad 29$
$\Sigma \quad$ supervisor-jumped $\quad 30$
$\sigma \quad$ supervisee-jumped $\quad 31$
$\sigma^{-1} \quad$ beneficiary-jumped $\quad 32$

Elements of order 1: $\{ e \}$

Elements of order 2: $\{ d, a, m, g, c, q, x, k, h, l, i, \epsilon, \kappa, \eta, \iota, \gamma, \chi, \delta \}$

Elements of order 4: $\{ s, S, b, B, \sigma, \sigma^{-1}, \Sigma, \Sigma^{-1}, \mu, \mu^{-1}, \alpha, \alpha^{-1} \}$

**Notes:** $\mathbb{M}$ is a group with order 32 acting transitively on a set with degree 8. This group contains the identity element (order 1 = trivial), 19 elements of order 2, and 12 elements of order 4 (with 6 different 4-cycles). From the permutations and formulation above, we can check to see and prove that this group is indeed isomorphic to $\mathbb{Z}^{2}_{2} \wr \mathbb{Z}_{2}$. This group also has a regular action on the set of types, $T$. This is known as an $\mathbb{M}$-torsor.

**Addendum.** If we think about 180 rotations around the square and the central elements of $\mathbb{S}$, then the 4-cycles can be broken down into $g$-orbits, $x$-orbits, and $d$-orbits. Two cycles (the benefit and supervision rings) are considered $g$-orbits. 4-cycles which contain $\alpha$ or $\mu$ are $x$-orbits, and finally 4-cycles which contain $\sigma$ or $\Sigma$ are $d$-orbits. This is because applying the correspondent order 4 relationship twice yields in either one of these elements $\{ g,x,d \}$ and another two times gives you the identity again. Also, $Z(\mathbb{M}) = Z(\mathbb{S})$ since $Z(\mathbb{Z}_2^2 \wr \mathbb{Z}_2) \cong \mathbb{Z}_2^2$ and $\{e,g,x,d\}$ is the only subgroup $\cong \mathbb{Z}_2^2$ that does not fail to commute with every other element in $\mathbb{M}$. So in fact every order 4 element squares into $Z(\mathbb{M})$. The three non identity central elements each pair with exactly two order 4 rings sharing that element as their $r^2$.

# Subgroups of $\mathbb{M}$

First we'll divide the centre $Z(\mathbb{M})$ by its cosets. This will be useful to calculate whether the list of subgroups a well as determining whether or not they are normal for later on. They will also help us build quotient groups. The cosets of the centre are:

$egxd$
$bBsS$
$mcqa$
$klih$
$\epsilon \gamma \chi \delta$
$\kappa \lambda \iota \eta$
$\alpha^{-1} \alpha \mu^{-1} \mu$
$\sigma^{-1} \sigma \Sigma^{-1} \Sigma$

## List of Subgroups

Other than the trivial subgroup and the whole group itself, $\mathbb{Z}^{2}_{2} \wr \mathbb{Z}_{2}$ has 19 subgroups of order 2 $\cong \mathbb{Z}_{2}$, 47 subgroups of order 4 (6 of them isomorphic to $\mathbb{Z}_{4}$ and 41 isomorphic to $\mathbb{Z}^{2}_{2}$), 31 subgroups of order 8 (16 $\cong \mathbb{Z}_{2}^3$, 12 $\cong D_{4}$, and 3 $\cong \mathbb{Z}_{2} \times \mathbb{Z}_{4}$), and 7 subgroups of order 16 (3 $\cong (\mathbb{Z}_{2} \times \mathbb{Z}_{4}) \rtimes \mathbb{Z}_{2} \cong D_{4} \times \mathbb{Z}_{2}$, 1 $\cong \mathbb{Z}^4_{2}$, and 3 $\cong D_{4} \times \mathbb{Z}_{2}$). Total: 106 subgroups across 65 different conjugacy classes.

I will identify all of the subgroups of $\mathbb{M}$, other than the trivial subgroup $\{ e \}$ and the whole group itself. By invoking Lagrange's Theorem, subgroup orders must divide $|\mathbb{M}|$. Subgroups are typically represented using commas and braces, but when no ambiguity results, they will be removed.

### Order 2 

There are 19 subgroups of order 2.

$$\begin{matrix} 
\text{Elements} & \text{Description} & \text{Type} & \text{Normal?} & \text{Quotient} \\ \\
eg & \text{Superegos} & \mathbb{Z}_2 & \checkmark & D_{4} \times \mathbb{Z}_{2} \\
ex & \text{Extinguishers} & \mathbb{Z}_{2} & \checkmark & D_{4} \times \mathbb{Z}_{2} \\
ed & \text{Duals} & \mathbb{Z}_{2} & \checkmark & D_{4} \times \mathbb{Z}_{2} \\
em & \text{Mirrors} & \mathbb{Z}_{2} & \times & - \\
ec & \text{Conflictors} & \mathbb{Z}_{2} & \times & - \\
eq & \text{Quasi Identicals} & \mathbb{Z}_{2} & \times & - \\
ea & \text{Activators} & \mathbb{Z}_{2} & \times & - \\
ek & \text{Kindreds} & \mathbb{Z}_{2} & \times & - \\
el & \text{Lookalikes} & \mathbb{Z}_{2} & \times & - \\
ei & \text{Mirages} & \mathbb{Z}_{2} & \times & - \\
eh & \text{Semi Duals} & \mathbb{Z}_{2} & \times & - \\
e\epsilon & \text{Jumped Identicals} & \mathbb{Z}_{2} & \times & - \\
e\gamma & \text{Jumped Superegos} & \mathbb{Z}_{2} & \times & - \\
e\chi & \text{Jumped Extinguishers} & \mathbb{Z}_{2} & \times & - \\
e\delta & \text{Jumped Duals} & \mathbb{Z}_{2} & \times & - \\
e\kappa & \text{Jumped Kindreds} & \mathbb{Z}_{2} & \times & - \\
e\lambda & \text{Jumped Lookalikes} & \mathbb{Z}_{2} & \times & - \\
e\iota & \text{Jumped Mirages} & \mathbb{Z}_{2} & \times & - \\
e\eta & \text{Jumped Semi Duals} & \mathbb{Z}_{2} & \times & -
\end{matrix}$$

### Order 4

There are 47 subgroups of order 4.

$$
\begin{matrix}
\text{Elements} & \text{Description} & \text{Type} & \text{Normal?} & \text{Quotient} \\ \\
ebgB & \text{Benefit Ring} & \mathbb{Z}_{4} & \times & - \\
esgS & \text{Supervision Ring} & \mathbb{Z}_{4} & \times & - \\
 \\
e\alpha x\alpha^{-1} & \text{Tournament Ring} & \mathbb{Z}_{4} & \times & - \\
e\mu x\mu^{-1} & \text{Club Ring} & \mathbb{Z}_{4} & \times & - \\
 \\
 e\sigma d \sigma^{-1} & \text{Progress Ring} & \mathbb{Z}_{4} & \times & - \\
 e\Sigma d \Sigma^{-1} & \text{Flipped Progress Ring} & \mathbb{Z}_{4} & \times & - \\
  \\
 egxd & Z(\mathbb{M}) = \text{Centre} & \mathbb{Z}_{2}^{2} & \checkmark & \mathbb{Z}_{2}^3 \\
  \\
 egkl & \text{Temperament } \cap \text{ Info/Energy} & \mathbb{Z}^{2}_{2} & \checkmark & D_{4} \\
 egcm & \text{Challenge Response } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\
 egaq & \text{Positivity Group } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\
 egih & \text{Displacement } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^{2} & \checkmark & D_{4} \\
  \\
 eg\kappa\lambda & \text{Jumped Temperament} & \mathbb{Z}_{2}^2 & \times & - \\
 eg\iota\eta & \text{Jumped Displacement} & \mathbb{Z}_{2}^2 & \times & - \\
 eg\chi\delta & \text{Jumped }g\text{-Centre} & \mathbb{Z}_{2}^2 & \times & - \\
 eg\epsilon\gamma & \text{Temperament } \cap \text{ D/A (Club)} & \mathbb{Z}_{2}^2 & \times & - \\ \\
exac & \text{Array Group } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\
exqm & \text{Club } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\
exik & \text{Base Faculty } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\
exhl & \text{Creative Faculty } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\
\\
ex\epsilon\chi & \text{Club } \cap \text{ P/J} & \mathbb{Z}_{2}^{2} & \checkmark & D_{4} \\
ex\kappa\iota & \text{Jumped Base Faculty} & \mathbb{Z}_{2}^2 & \times & - \\
ex\eta\lambda & \text{Jumped Creative Faculty} & \mathbb{Z}_{2}^2 & \times & - \\
ex\gamma\delta & \text{Jumped }x\text{-Centre} & \mathbb{Z}_{2}^{2} & \checkmark & D_{4} \\
 \\
edam & \text{Quadra } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\
edqc & \text{Occupation Group } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\
edil & \text{Producing Axis } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\
edhk & \text{Accepting Axis } \cap \text{ Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\
 \\
ed\epsilon\delta & \text{Jumped Accepting Axis} & \mathbb{Z}_{2}^2 & \times & - \\
ed\kappa\eta & \text{Double Axis Same} & \mathbb{Z}_{2}^{2} & \checkmark & D_{4} \\
ed\iota\lambda & \text{Jumped + P/J} \cap \text{ D/A (Quadra)} & \mathbb{Z}_{2}^{2} & \checkmark & D_{4} \\
ed\gamma\chi & \text{Jumped }d\text{-Centre} & \mathbb{Z}_{2}^2 & \times & - \\
 \\
ek\epsilon\kappa & \text{Base IME Same} & \mathbb{Z}_{2}^{2} & \times & - \\
ek\gamma\lambda & \text{Creative Temperament } \cap \text{ P/J} & \mathbb{Z}_{2}^{2} & \times & - \\
ek\chi\iota & \text{Base Faculty } \cap \text{ Creative Temperament} & \mathbb{Z}_{2}^{2} & \times & - \\
ek\eta\delta & \text{Accepting Axis } \cap \text{ Creative Temperament} & \mathbb{Z}_{2}^2 & \times & - \\ \\
el\epsilon\lambda & \text{Temperament } \cap \text{ Creative Faculty} & \mathbb{Z}_{2}^2 & \times & - \\
el\gamma\kappa & \text{Temperament } \cap \text{ Producing Axis} & \mathbb{Z}_{2}^{2} & \times & - \\
el\chi\eta & \text{Creative IME Same} & \mathbb{Z}_{2}^2 & \times & - \\
el\iota\delta & \text{Double Tempeament} & \mathbb{Z}_{2}^2 & \times & - \\ \\
ei\epsilon\iota & \text{XeY or XiZ Leading} & \mathbb{Z}_{2}^{2} & \times & - \\
ei\gamma\eta & \text{Producing Axis } \cap \text{ P/J} & \mathbb{Z}_{2}^{2} & \times & - \\
ei\chi\kappa & \text{Producing Axis } \cap \text{ P/J} & \mathbb{Z}_{2}^2 & \times & - \\
ei\delta\lambda & \text{Displacement Strictly with Base Faculty Preserving Info/Energy} & \mathbb{Z}_{2}^2 & \times & - \\ \\
eh\epsilon\eta & \text{Acceping Axis } \cap \text{ Creative Faculty} & \mathbb{Z}_{2}^{2} & \times & - \\
eh\gamma\iota & \text{Displacement Strictly with Accepting Axis Preserving Info/Energy} & \mathbb{Z}_{2}^{2} & \times & - \\
eh\chi\lambda & \text{Accepting Axis or Alt P/J Axis, with Creative Faculty} & \mathbb{Z}_{2}^{2} & \times & - \\
eh\delta\kappa & \text{Accepting Axis with Producing Axis shared for Leading IME} & \mathbb{Z}_{2}^{3} & \times & - \\
\end{matrix}
$$

### Order 8

There are 31 subgroups of order 8.

$$
\begin{matrix}
\text{Elements} & \text{Description} & \text{Type} & \text{Normal?} & \text{Quotient} \\ \\
egxdbBsS & \text{Superego Spin (P/R)} & \mathbb{Z}_2 \times \mathbb{Z}_4 & \checkmark & \mathbb{Z}_{2}^{2} \\
egxd\alpha\alpha^{-1}\mu\mu^{-1} & \text{Extinguishment Spin} & \mathbb{Z}_2 \times \mathbb{Z}_4 & \checkmark & \mathbb{Z}_{2}^{2} \\
egxd\sigma\sigma^{-1}\Sigma\Sigma^{-1} & \text{Duality Spin} & \mathbb{Z}_2 \times \mathbb{Z}_4 & \checkmark & \mathbb{Z}_{2}^{2} \\ \\
egxdmcaq & \text{D/A } \cap \text{ Info/Energy} & \mathbb{Z}_2^3 & \checkmark & \mathbb{Z}_{2}^{2} \\
egxdklih & \text{P/J } \cap \text{ Info/Energy} & \mathbb{Z}_2^3 & \checkmark & \mathbb{Z}_{2}^{2} \\
egxd\epsilon\gamma\chi\delta & \text{D/A (Club) } \cap \text{ P/J} & \mathbb{Z}_2^3 & \checkmark & \mathbb{Z}_{2}^{2} \\
egxd\kappa\lambda\iota\eta & \text{D/A (Quadra) } \cap \text{ P/J} & \mathbb{Z}_{2}^{3} & \checkmark & \mathbb{Z}_{2}^{2} \\ \\
egkl\kappa\lambda\epsilon\gamma & \text{Temperament} & \mathbb{Z}_{2}^3 & \times & - \\
egkl\eta\iota\chi\delta & \text{Creative Temperament} & \mathbb{Z}_{2}^3 & \times & - \\
egih\kappa\lambda\chi\delta & \text{Quadra-grouped Displacement} & \mathbb{Z}_{2}^3 & \times & - \\
egih\eta\iota\epsilon\gamma & \text{Club-grouped Displacement} & \mathbb{Z}_{2}^3 & \times & - \\
 \\
exki\kappa\iota\epsilon\chi & \text{Base Faculty} & \mathbb{Z}_{2}^3 & \times & - \\
exki\eta\lambda\gamma\delta & \text{Accepting Axis with Creative Function spanning P/J} & \mathbb{Z}_{2}^3 & \times & - \\
exlh\kappa\iota\gamma\delta & \text{Base Function with Producing Axis spanning P/J} & \mathbb{Z}_{2}^3 & \times & - \\
exlh\eta\lambda\epsilon\chi & \text{Creative Faculty} & \mathbb{Z}_{2}^3 & \times & - \\
 \\
edkh\kappa\eta\epsilon\delta & \text{Accepting Axis} & \mathbb{Z}_{2}^3 & \times & - \\
edkh\lambda\iota\gamma\chi & \text{Accepting Dual Axis for same Info/Energy spanning P/J} & \mathbb{Z}_{2}^3 & \times & - \\
edil\kappa\eta\gamma\chi & \text{Producing Axis} & \mathbb{Z}_{2}^3 & \times & - \\
edil\lambda\iota\epsilon\delta & \text{Producing Dual Axis for same Info/Energy spanning P/J} & \mathbb{Z}_{2}^{3} & \times & - \\ \\
egcmklsS & \text{Static/Dynamic } \cap \text{ Info/Energy} & D_{4} & \times & - \\
egcmihbB & \text{Asking/Declaring } \cap \text{ Info/Energy} & D_{4} & \times & - \\
egaqklbB & \text{Extroverted/Introverted } \cap \text{ Info/Energy} & D_{4} & \times & - \\
egaqihsS & \text{Positivist/Negativist } \cap \text{ Info/Energy} & D_{4} & \times & - \\
 \\
exmq\epsilon\chi\mu\mu^{-1} & \text{Club} & D_{4} & \times & - \\
exmq\gamma\delta\alpha\alpha^{-1} & \text{Club with Info/Energy or Opp Club across Info/Energy} & D_{4} & \times & - \\
exac\epsilon\chi\alpha\alpha^{-1} & \text{Inert Club} & D_{4} & \times & - \\
exac\gamma\delta\mu\mu^{-1} & \text{Inertness with Info/Energy or Opp Inertness across Info/Energy} & D_{4} & \times & - \\
 \\
edam\kappa\eta\sigma\sigma^{-1} & \text{Quadra} & D_{4} & \times & - \\
edam\lambda\iota\Sigma\Sigma^{-1} & \text{Quadra with Info/Energy or Opp Quadra across Info/Energy} & D_{4} & \times & - \\
edqc\kappa\eta\Sigma\Sigma^{-1} & \text{Evaluatory Quadra} & D_{4} & \times & - \\
edqc\lambda\iota\sigma\sigma^{-1} & \text{Eval with Info/Energy or Opp Eval across Info/Energy} & D_{4} & \times & - \\
\end{matrix}
$$

### Order 16

There are 7 subgroups of order 16.

$$
\begin{matrix}
\text{Elements} & \text{Description} & \text{Type} & \text{Normal?} & \text{Quotient} \\  \\  
egxdklih\kappa\eta\lambda\iota\eta\epsilon\gamma\chi\delta & \text{Irrational/Rational} & \mathbb{Z}_{2}^{4} & \checkmark & \mathbb{Z}_{2} \\
 \\
egxdmcaqklihsSbB & \mathbb{S} = \text{Information/Energy} & D_{4} \times \mathbb{Z}_{2} & \checkmark & \mathbb{Z}_{2} \\
egxdmcaq\epsilon\gamma\chi\delta\alpha\alpha^{-1}\mu\mu^{-1} & \text{Democratic/Aristocratic (Club-wise)} & D_{4} \times \mathbb{Z}_{2} & \checkmark & \mathbb{Z}_{2} \\
egxdmcaq\kappa\eta\lambda\iota\sigma\sigma^{-1}\Sigma\Sigma^{-1} & \text{Democratic/Aristocratic (Quadra-wise)} & D_{4} \times \mathbb{Z}_{2} & \checkmark & \mathbb{Z}_{2} \\
 \\
egxdklih\alpha\alpha^{-1}\mu\mu^{-1}\sigma\sigma^{-1}\Sigma\Sigma^{-1} & \text{P/J with P/R or across both} & (\mathbb{Z}_{2} \times \mathbb{Z}_{4}) \rtimes \mathbb{Z}_{2} & \checkmark & \mathbb{Z}_{2} \\
egxdsSbB\kappa\eta\lambda\iota\alpha\alpha^{-1}\mu\mu^{-1} & \text{Process/Result (Quadra-wise)} & (\mathbb{Z}_{2} \times \mathbb{Z}_{4}) \rtimes \mathbb{Z}_{2} & \checkmark & \mathbb{Z}_{2} \\
egxdsSbB\epsilon\gamma\chi\delta\sigma\sigma^{-1}\Sigma\Sigma^{-1} & \text{Process/Result (Club-wise)} & (\mathbb{Z}_{2} \times \mathbb{Z}_{4}) \rtimes \mathbb{Z}_{2} & \checkmark & \mathbb{Z}_{2} 
\end{matrix}
 $$


# Dichotomies

There are $2,147,483,648$ ways to divide the set of MTT types into two unique partitions. A dichotomy system is a set of dichotomies that forms a system that uniquely specifies each type, and they are individuated by their affine basis, and each type can be represented by a vector such as $(E, N, T, P, A)$ [(2025)](https://docs.google.com/document/d/1Hmu5UXYNd1gUfQCrWtgZUMyL1mzCgejJ2URPCaMOuog/edit?tab=t.0#heading=h.a1u2wiiv1yzw). What makes a dichotomy "good" is if it is respected by the relationships in some way. If a relationship $r \in \mathbb{M}$ preserves a dichotomy trait or flips it consistently for every type in MTT, then say $r$ respects $D$. From here on out, we will divert our attention to dichotomies that respect the centre since $\mathbb{M}$ can be generated by it.

NTC SFC SFB NTB
TNC FSC FSB TNB
FNB TSB TSC FNC
NFB STB STC NFC
NTP SFP SFS NTS
TNP FSP TNS FSS
FNP TSP TSS FNS
NFP STP STS NFS

Now we have the coset space $\mathbb{M}/Z(\mathbb{M})$. Since we have 8 elements of this space, there will be a total of $128$ dichotomies that will be respected by the centre of $\mathbb{M}$, call them the 'central dichotomies'.

We will divide the 'central dichotomies' into 4 categories. Since $\{ x,d \}$ is sufficient to generate $Z(\mathbb{M})$, we will define it by the preservation or flips of the relationships $x$ and $d$, respectively, with $0$ denoting preservation and $1$ denoting a flip.

$00$-dichotomies: they are the 128 dichotomies that define the centre. Call them the 'centre-preserving dichotomies' and each trait has a type $t$ with its corresponding extinguishment, dual as well as superego types: $gt$, $xt$, and $dt$. [[Centre-preserving Dichotomies]] for the complete index of them.  

$01$-dichotomies: ??? 

$10$-dichotomies: ???

$11$-dichotomies: ???