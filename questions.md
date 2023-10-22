## Est-ce que type[] == type[0] == type[1]


|            | lignes | colonnes | profodeur |
|------------|--------|----------|-----------|
| type[1]    | 1      | 1        | 1         |
| type[1, 1] | 1      | 1        | 1         |
| type[1, 2] | 1      | 2        | 1         |
| type[0, 0] | 0      | 0        | 1         |

Un `scalaire` est représenté par `type[1,...,1]`.
Une matrice de taille `quelconque` est représentée par `type[]`.
On ne peut pas mettre de 0 dans les types dépendants.

## Que fait la transposée sur un tenseur ?


