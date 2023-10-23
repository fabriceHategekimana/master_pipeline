const PREC = {
  COMMENT: -1,
  LOW: 0,
  WHILE: 0,
  FOR: 0,
  REPEAT: 0,
  IF: 1,
  ELSE: 2,
  HELP: 3,
  EQ_ASSIGN: 4,
  LEFT_ASSIGN: 5,
  RIGHT_ASSIGN: 6,
  TILDE: 7,
  OR: 8,
  AND: 9,
  NOT: 10,
  REL: 11,
  PLUS: 12,
  TIMES: 13,
  SPECIAL: 14,
  PIPE: 14,
  PIPEBIND: 15,
  COLON: 16,
  UPLUS: 17,
  EXP: 18,
  SUBSET: 19,
  DOLLAR: 20,
  NS_GET: 21,
  CALL: 22,
  CALL_PIPE: 23,
  FLOAT: 24
}

newline = '\n',
terminator = choice(newline, ';'),

module.exports = grammar({
  name: 'type_r',

  rules: {
expression : $ => 'wow',
      identifier: $ => /[A-Za-z][A-Za-z0-9]*/,
	  number : $ => /-?\d+(\.\d+)?/,
	  type: $ => choice("int", "bool"),

      integer: $ => token(prec(PREC.FLOAT + 1,
        seq(
          choice(
            seq(
              choice('0x', '0X'),
              /[A-Fa-f0-9]+/
            ),
            /\d+/
          ),
          'L'
        ))),


    float: $ => {
      const digits = repeat1(/[0-9]/);
      const exponent = seq(/[eE][\+-]?/, digits)

      return token(prec.left(PREC.FLOAT,
        choice(
          seq(digits, optional('.'), optional(digits), optional(exponent)),
          seq(optional(digits), '.', digits, optional(exponent)),
          seq(digits, exponent),
          seq(
            choice('0x', '0X'),
            /[A-Fa-f0-9]+/
          )
        )
      ))
    },

    complex: $ => seq($.float, 'i'),

    string: $ => choice(
      seq(
        '"',
        repeat(choice(
          /[^"\\\n]+|\\\r?\n/,
          $.escape_sequence
        )),
        '"'
      ),
      seq(
        "'",
        repeat(choice(
          /[^'\\\n]+|\\\r?\n/,
          $.escape_sequence
        )),
        "'"
      )
    ),
    comment: $ => token(prec(PREC.COMMENT, seq('#', /.*/))),
    escape_sequence: $ => token.immediate(seq(
      '\\',
      choice(
        /[^xu0-7]/,
        /[0-7]{1,3}/,
        /x[0-9a-fA-F]{2}/,
        /u[0-9a-fA-F]{4}/,
        /u{[0-9a-fA-F]+}/
      )
    )),
  }
});

function commaSep1(rule) {
  return seq(rule, repeat(seq(',', rule)));
}
