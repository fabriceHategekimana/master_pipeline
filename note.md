Les types:


n in N -- type(n) = int

type([...]) = int[type(...)]

## Addition & Soustraction

type(e1) = int[A1] /\ type(e2) = int[A2] /\ A1 = A2 = A -- type(e1 + e2) = type[A]
type(e1) = int[A1] /\ type(e2) = int[A2] /\ A1 = A2 = A -- type(e1 - e2) = type[A]
type(e1) = int[A1] /\ type(e2) = int[A2] /\ A1 = A2 = A -- type(e1 * e2) = type[A]
type(e1) = int[A1] /\ type(e2) = int[A2] /\ A1 = A2 = A -- type(e1 / e2) = type[A]


