---
title: Test
author: Author Name
header-includes: |
    \usepackage{proof}
abstract: This is a pandoc test . . . 
...

# Syntaxe

TODO : add key word "var" pour une différence entre instanciation et mutation
TODO : Recherche sur les dependent type (ou type) sur les matrice

Value ::= ...   
Type ::= logical | integer | float | complex | character  
Term ::= Variable : Type | Varialbe : Type = Value  
Context ::= ^Context, Term : T  

# Typing rules
 
## Default types

$$
\infer{\Gamma \vdash Value : logical}{%
    Value \in Logical
}
$$

$$
\infer{\Gamma \vdash Value : integer}{%
    Value \in Integer
}
$$

$$
\infer{\Gamma \vdash Value : float}{%
    Value \in Float
}
$$

$$
\infer{\Gamma \vdash Value : complex}{%
    Value \in Complex
}
$$

$$
\infer{\Gamma \vdash Value : character}{%
    Value \in Character
}
$$

## Typing of a variable

$$
\infer{\Gamma \vdash Variable }{%
    Variable : Type \in \Gamma
}
$$

## Typing of a variable declaration

$$
\infer{\Gamma \vdash Variable : Type -> \Gamma Variable : Type \vdash \perp
}{%
}
$$

## Typing of an assignation
$$
\infer{\Gamma \vdash Variable : Type = Value -> \Gamma Variable : Type \vdash \perp
}{%
Value \in Type
}
$$

