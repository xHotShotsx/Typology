# Table of Models

|         Model          |                  Acting Group                  | Transitive?  | Permutation Group Code |                       Orbits (Cosets of …)?                        |   Regular?   |     Basepoint Stabiliser     |
| :--------------------: | :--------------------------------------------: | :----------: | :--------------------: | :----------------------------------------------------------------: | :----------: | :--------------------------: |
| **Model A (Standard)** | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ | $\checkmark$ |        $8T_{9}$        |           $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$           |   $\times$   |         $\{ e, k \}$         |
| **Model V (Standard)** | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ | $\checkmark$ |        $8T_{9}$        |           $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$           |   $\times$   |         $\{ e, m \}$         |
|     **Model A/U1**     | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ |   $\times$   |        **N/A**         |      $\text{Democratic/Aristocratic} \cong \mathbb{Z}_{2}^3$       |   $\times$   |           **N/A**            |
|     **Model A/U2**     | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ |   $\times$   |        **N/A**         |               $\text{Asking/Declaring} \cong D_{4}$                |   $\times$   |           **N/A**            |
|     **Model A/U3**     | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ |   $\times$   |        **N/A**         | $\text{Process/Result} \cong \mathbb{Z}_{2} \times \mathbb{Z}_{4}$ |   $\times$   |           **N/A**            |
|     **Model A/U4**     | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ |   $\times$   |        **N/A**         |             $\text{Positivist/Negativist} \cong D_{4}$             |   $\times$   |           **N/A**            |
|      **Model G**       | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ |   $\times$   |        **N/A**         | $\text{Process/Result} \cong \mathbb{Z}_{2} \times \mathbb{Z}_{4}$ |   $\times$   |           **N/A**            |
|     **Model V/C1**     | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ |   $\times$   |        **N/A**         |        $\text{Irrational/Rational} \cong \mathbb{Z}_{2}^3$         |   $\times$   |           **N/A**            |
|     **Model V/C2**     | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ |   $\times$   |        **N/A**         |            $\text{Extroverted/Introverted} \cong D_{4}$            |   $\times$   |           **N/A**            |
|     **Model V/C3**     | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ |   $\times$   |        **N/A**         | $\text{Process/Result} \cong \mathbb{Z}_{2} \times \mathbb{Z}_{4}$ |   $\times$   |           **N/A**            |
|     **Model V/C4**     | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ |   $\times$   |        **N/A**         |             $\text{Positivist/Negativist} \cong D_{4}$             |   $\times$   |           **N/A**            |
| **Macro Element Loop** |          $H \cong D_{4} < \mathbb{S}$          | $\checkmark$ |        $4T_{3}$        |                    $H \cong D_{4} < \mathbb{S}$                    |   $\times$   | $\{ \{ e,x \}, \{ k,i \} \}$ |
|    **Quadra Loop**     |          $H \cong D_{4} < \mathbb{S}$          | $\checkmark$ |        $4T_{3}$        |                    $H \cong D_{4} < \mathbb{S}$                    |   $\times$   | $\{ \{ e,d \}, \{ m,a \} \}$ |
|      **Model Ch**      | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ | $\checkmark$ |       $16T_{9}$        |           $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$           | $\checkmark$ |          $\{ e \}$           |
|      **Model B**       | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ | $\checkmark$ |       $16T_{9}$        |           $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$           | $\checkmark$ |          $\{ e \}$           |
|      **Model A2**      | $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$ | $\checkmark$ |       $16T_{9}$        |           $\mathbb{S} \cong D_{4} \times \mathbb{Z}_{2}$           | $\checkmark$ |          $\{ e \}$           |
|      **Model L**       |    $\mathbf{V}_{15} \cong \mathbb{Z}^4_{2}$    | $\checkmark$ |       $16T_{3}$        |              $\mathbf{V}_{15} \cong \mathbb{Z}^4_{2}$              | $\checkmark$ |        $\{ A_{1} \}$         |
|      **Model W**       |    $\mathbf{V}_{14} \cong \mathbb{Z}^4_{2}$    | $\checkmark$ |       $16T_{3}$        |              $\mathbf{V}_{14} \cong \mathbb{Z}^4_{2}$              | $\checkmark$ |        $\{ A_{1} \}$         |

# Footnotes

- $8T_{n}$ refers to the nth transitive subgroup of $S_{8}$ in the GAP classification scheme.
- $16T_{n}$ refers to the nth transitive subgroup of $S_{16}$ in the GAP classification scheme.
- **Technical Note:** Systems of injections (charge models with only 8 functions) are best viewed as **orbit models**. Any compatible index-2 subgroup $H$ acts transitively on a single orbit of size 8 (hence an $8T_{k}$ label applies). The full charge construction $F \times \{ A,B \}$ is an intransitive $H$-set with two orbits; it is not itself an $nT_{k}$ object unless extended by a sheet-swapping element, yielding a transitive $16T_{\mathscr{l}}$ action.

# Further Reading

- https://people.maths.bris.ac.uk/~matyd/GroupNames/T31.html
- [[Mathematical Descriptions of Models A and G]]
- [[Intertype Relations/A Representation-Theoretic Framework for Intertype Relations in Socionics]]
- https://drive.google.com/file/d/1ISFXjLIVkWtsh6nj0hswnDy6V-q59MDF/view
- [[Models/Model-W/Model-W|Model-W]]
- [[A Mathematical Description of Model V]]
- www.sedecology.com/articles/17-Contrary-Elements-in-Model-A2
- https://docs.google.com/document/d/1gtsDlSjzixyVsrJtm-_rvIQrSvqYqcAW/edit#heading=h.w7szc0dzkxgg
- [https://drive.google.com/file/d/1qbUsbxJyXBlsOIIcm96fJA9xfOorDA_4/view?usp=drivesdk](https://drive.google.com/file/d/1qbUsbxJyXBlsOIIcm96fJA9xfOorDA_4/view?usp=drivesdk "https://drive.google.com/file/d/1qbUsbxJyXBlsOIIcm96fJA9xfOorDA_4/view?usp=drivesdk")
- https://www.sedecology.com/articles/21/The-Essence-of-the-Quadras
- [[content/Machine Translations/Books/Semyon Churyumov/Smile of the Cheshire Cat/Chapter 4]]
- [[16-Component Model of the TIM and the Socion]]