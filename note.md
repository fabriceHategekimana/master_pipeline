Les types:


n in N -- type(n) = int

# Tenseurs (Shape compatibility)
type([...]) = int[type(...)]

## Opérations de base

type(e1) = int[A1], type(e2) = int[A2], A1 = A2 = A -- type(e1 + e2) = type[A]
type(e1) = int[A1], type(e2) = int[A2], A1 = A2 = A -- type(e1 - e2) = type[A]
type(e1) = int[A1], type(e2) = int[A2], A1 = A2 = A -- type(e1 * e2) = type[A]
type(e1) = int[A1], type(e2) = int[A2], A1 = A2 = A -- type(e1 / e2) = type[A]

## Produit matriciel
type(e1 %*% e2) = type[]

type[3,3] dot type[3,3] = type[3,3]
type[2,3] dot type[3,2] = type[2,2] 
type[3,2] dot type[2,3] = type[3,3]

type[N,M]  dot type[M,N] = type[N,N]

Plus généralement:
type[N1,M]  dot type[M,N2] = type[N1,N2]

## Produit tensoriel
type[3,3,3] dot type[3,3,3] = type[3,3,3]

## De ma notation à Prolog: 

Je n'ai pas pu définir 100% ma notation mais je pense que j'emprunterai de Prolog pour bien faire.
```
[conditions and] -- [réponse =]
```
En prolog:
```
imply(réponse) :- [conditions ,]
```

Cette définition:
```
type(e1) = int[A1], type(e2) = int[A2], A1 = A2 = A -- type(e1 + e2) = type[A]
```

Devient:
```
imply(type(e1 + e2), type[A]) :- type(e1) = int(A1), type(e2) = int(A2), A1 = A2 = A
```

Cela demande de créer une règle:
int(A1)

