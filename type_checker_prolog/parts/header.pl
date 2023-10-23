# Header
type(int).
type(int(List)) :- is_int_list(List).

is_int_list([]).
is_int_list([H|T]) :- 
    integer(H),
    is_int_list(T).

