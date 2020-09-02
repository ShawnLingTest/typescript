type SomeType = string;
type MyConditionType = SomeType extends string ? string : null;

// type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

/*
  'a' extedns 'a' | 'b' ? never : 'a' => never
  'b' entedns 'a' | 'b' ? never : 'b' => never
  'c' enteds 'a' | 'b' ? never : 'c' => 'c'
*/

type InferSomething<T> = T extends infer U ? U : any;
type Inferred = InferSomething<'I am a string'>


// type InferSomething2<T> = T extends { a: inter A; b: inter B} ? A & B : any;