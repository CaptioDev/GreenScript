import { GrammarStruct } from "./lexer";

const grammar: GrammarStruct[] = [
  // Comments
  {
    id: "single_line_comment_begin",
    match: ">>>"
  },
  {
    id: "multi_line_comment_begin",
    match: ">>"
  },
  {
    id: "multi_line_comment_end",
    match: "<<"
  }
  // ...
]

export default grammar;