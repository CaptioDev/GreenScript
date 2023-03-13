import Lexer from "./lexer";

interface TokenData {
  value: string;
  id: string;
  line: number;
  column: number;
  length: number;
}
export default class Token implements TokenData {
  public value: string;
  public id: string;
  public line: number;
  public column: number;
  public length: number;
  private lexer: Lexer;

  public constructor(params: TokenData, ctx: Lexer) {
    this.lexer = ctx;
    this.set(params, false);
  }
  public setValue(newValue: string, update = true) {}
  public moveTo(line?: number, column?: number, update = true) {}
  public moveBy(line?: number, column?: number, update = true) {}
  public set(params: Partial<TokenData>, update = true) {}
  public remove() {}
}