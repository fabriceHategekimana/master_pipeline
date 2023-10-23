all:start

start: clear
	echo "Hello world!"

to_js_grammar: clear
	/home/fabrice/sh/my_ebnf -t grammar.txt > parser_tree_sitter/parts/grammar.txt

parser: to_js_grammar 
	cat parser_tree_sitter/parts/header.txt parser_tree_sitter/parts/grammar.txt parser_tree_sitter/parts/base_type_grammar.txt parser_tree_sitter/parts/footer.txt > parser_tree_sitter/grammar.js

move_test: clear
	cp -f test.txt parser_tree_sitter/test.txt

test: move_test parser
	(cd parser_tree_sitter/; tree-sitter generate; tree-sitter parse test.txt)

clear: FORCE
	clear

FORCE:
