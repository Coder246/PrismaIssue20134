
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type TestPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Test"
  objects: {
    testcon: testconPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    g: number
    h: number
    i: number
    j: number
    k: number
    l: number
    m: number
    n: number
    o: number
    p: number
    q: number
    r: number
    s: number
    t: number
    u: number
    v: number
    w: number
    x: number
    y: number
    z: number
    testconId: string
  }, ExtArgs["result"]["test"]>
  composites: {}
}

/**
 * Model Test
 * 
 */
export type Test = runtime.Types.DefaultSelection<TestPayload>
export type testconPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "testcon"
  objects: {
    Test: TestPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: string
  }, ExtArgs["result"]["testcon"]>
  composites: {}
}

/**
 * Model testcon
 * 
 */
export type testcon = runtime.Types.DefaultSelection<testconPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tests
 * const tests = await prisma.test.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tests
   * const tests = await prisma.test.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs>;

  /**
   * `prisma.testcon`: Exposes CRUD operations for the **testcon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testcons
    * const testcons = await prisma.testcon.findMany()
    * ```
    */
  get testcon(): Prisma.testconDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 5.0.0
   * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Test: 'Test',
    testcon: 'testcon'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'test' | 'testcon'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Test: {
        payload: TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestPayload>
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>,
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      testcon: {
        payload: testconPayload<ExtArgs>
        fields: Prisma.testconFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testconFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<testconPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testconFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<testconPayload>
          }
          findFirst: {
            args: Prisma.testconFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<testconPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testconFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<testconPayload>
          }
          findMany: {
            args: Prisma.testconFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<testconPayload>[]
          }
          create: {
            args: Prisma.testconCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<testconPayload>
          }
          delete: {
            args: Prisma.testconDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<testconPayload>
          }
          update: {
            args: Prisma.testconUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<testconPayload>
          }
          deleteMany: {
            args: Prisma.testconDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.testconUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.testconUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<testconPayload>
          }
          aggregate: {
            args: Prisma.TestconAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTestcon>
          }
          groupBy: {
            args: Prisma.testconGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TestconGroupByOutputType>[]
          }
          count: {
            args: Prisma.testconCountArgs<ExtArgs>,
            result: $Utils.Optional<TestconCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Test
   */


  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    a: number | null
    b: number | null
    c: number | null
    d: number | null
    e: number | null
    f: number | null
    g: number | null
    h: number | null
    i: number | null
    j: number | null
    k: number | null
    l: number | null
    m: number | null
    n: number | null
    o: number | null
    p: number | null
    q: number | null
    r: number | null
    s: number | null
    t: number | null
    u: number | null
    v: number | null
    w: number | null
    x: number | null
    y: number | null
    z: number | null
  }

  export type TestSumAggregateOutputType = {
    a: number | null
    b: number | null
    c: number | null
    d: number | null
    e: number | null
    f: number | null
    g: number | null
    h: number | null
    i: number | null
    j: number | null
    k: number | null
    l: number | null
    m: number | null
    n: number | null
    o: number | null
    p: number | null
    q: number | null
    r: number | null
    s: number | null
    t: number | null
    u: number | null
    v: number | null
    w: number | null
    x: number | null
    y: number | null
    z: number | null
  }

  export type TestMinAggregateOutputType = {
    id: string | null
    a: number | null
    b: number | null
    c: number | null
    d: number | null
    e: number | null
    f: number | null
    g: number | null
    h: number | null
    i: number | null
    j: number | null
    k: number | null
    l: number | null
    m: number | null
    n: number | null
    o: number | null
    p: number | null
    q: number | null
    r: number | null
    s: number | null
    t: number | null
    u: number | null
    v: number | null
    w: number | null
    x: number | null
    y: number | null
    z: number | null
    testconId: string | null
  }

  export type TestMaxAggregateOutputType = {
    id: string | null
    a: number | null
    b: number | null
    c: number | null
    d: number | null
    e: number | null
    f: number | null
    g: number | null
    h: number | null
    i: number | null
    j: number | null
    k: number | null
    l: number | null
    m: number | null
    n: number | null
    o: number | null
    p: number | null
    q: number | null
    r: number | null
    s: number | null
    t: number | null
    u: number | null
    v: number | null
    w: number | null
    x: number | null
    y: number | null
    z: number | null
    testconId: string | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    g: number
    h: number
    i: number
    j: number
    k: number
    l: number
    m: number
    n: number
    o: number
    p: number
    q: number
    r: number
    s: number
    t: number
    u: number
    v: number
    w: number
    x: number
    y: number
    z: number
    testconId: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    a?: true
    b?: true
    c?: true
    d?: true
    e?: true
    f?: true
    g?: true
    h?: true
    i?: true
    j?: true
    k?: true
    l?: true
    m?: true
    n?: true
    o?: true
    p?: true
    q?: true
    r?: true
    s?: true
    t?: true
    u?: true
    v?: true
    w?: true
    x?: true
    y?: true
    z?: true
  }

  export type TestSumAggregateInputType = {
    a?: true
    b?: true
    c?: true
    d?: true
    e?: true
    f?: true
    g?: true
    h?: true
    i?: true
    j?: true
    k?: true
    l?: true
    m?: true
    n?: true
    o?: true
    p?: true
    q?: true
    r?: true
    s?: true
    t?: true
    u?: true
    v?: true
    w?: true
    x?: true
    y?: true
    z?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    a?: true
    b?: true
    c?: true
    d?: true
    e?: true
    f?: true
    g?: true
    h?: true
    i?: true
    j?: true
    k?: true
    l?: true
    m?: true
    n?: true
    o?: true
    p?: true
    q?: true
    r?: true
    s?: true
    t?: true
    u?: true
    v?: true
    w?: true
    x?: true
    y?: true
    z?: true
    testconId?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    a?: true
    b?: true
    c?: true
    d?: true
    e?: true
    f?: true
    g?: true
    h?: true
    i?: true
    j?: true
    k?: true
    l?: true
    m?: true
    n?: true
    o?: true
    p?: true
    q?: true
    r?: true
    s?: true
    t?: true
    u?: true
    v?: true
    w?: true
    x?: true
    y?: true
    z?: true
    testconId?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    a?: true
    b?: true
    c?: true
    d?: true
    e?: true
    f?: true
    g?: true
    h?: true
    i?: true
    j?: true
    k?: true
    l?: true
    m?: true
    n?: true
    o?: true
    p?: true
    q?: true
    r?: true
    s?: true
    t?: true
    u?: true
    v?: true
    w?: true
    x?: true
    y?: true
    z?: true
    testconId?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }


  export type TestGroupByOutputType = {
    id: string
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    g: number
    h: number
    i: number
    j: number
    k: number
    l: number
    m: number
    n: number
    o: number
    p: number
    q: number
    r: number
    s: number
    t: number
    u: number
    v: number
    w: number
    x: number
    y: number
    z: number
    testconId: string
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    a?: boolean
    b?: boolean
    c?: boolean
    d?: boolean
    e?: boolean
    f?: boolean
    g?: boolean
    h?: boolean
    i?: boolean
    j?: boolean
    k?: boolean
    l?: boolean
    m?: boolean
    n?: boolean
    o?: boolean
    p?: boolean
    q?: boolean
    r?: boolean
    s?: boolean
    t?: boolean
    u?: boolean
    v?: boolean
    w?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    testconId?: boolean
    testcon?: boolean | testconArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    a?: boolean
    b?: boolean
    c?: boolean
    d?: boolean
    e?: boolean
    f?: boolean
    g?: boolean
    h?: boolean
    i?: boolean
    j?: boolean
    k?: boolean
    l?: boolean
    m?: boolean
    n?: boolean
    o?: boolean
    p?: boolean
    q?: boolean
    r?: boolean
    s?: boolean
    t?: boolean
    u?: boolean
    v?: boolean
    w?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    testconId?: boolean
  }

  export type TestInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    testcon?: boolean | testconArgs<ExtArgs>
  }


  type TestGetPayload<S extends boolean | null | undefined | TestArgs> = $Types.GetResult<TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TestFindManyArgs, 'select' | 'include'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>
    ): Prisma__TestClient<$Types.GetResult<TestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Test that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TestClient<$Types.GetResult<TestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>
    ): Prisma__TestClient<$Types.GetResult<TestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TestClient<$Types.GetResult<TestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
    **/
    create<T extends TestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TestCreateArgs<ExtArgs>>
    ): Prisma__TestClient<$Types.GetResult<TestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
    **/
    delete<T extends TestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TestDeleteArgs<ExtArgs>>
    ): Prisma__TestClient<$Types.GetResult<TestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpdateArgs<ExtArgs>>
    ): Prisma__TestClient<$Types.GetResult<TestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
    **/
    upsert<T extends TestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpsertArgs<ExtArgs>>
    ): Prisma__TestClient<$Types.GetResult<TestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    testcon<T extends testconArgs<ExtArgs> = {}>(args?: Subset<T, testconArgs<ExtArgs>>): Prisma__testconClient<$Types.GetResult<testconPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Test model
   */ 
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'String'>
    readonly a: FieldRef<"Test", 'Int'>
    readonly b: FieldRef<"Test", 'Int'>
    readonly c: FieldRef<"Test", 'Int'>
    readonly d: FieldRef<"Test", 'Int'>
    readonly e: FieldRef<"Test", 'Int'>
    readonly f: FieldRef<"Test", 'Int'>
    readonly g: FieldRef<"Test", 'Int'>
    readonly h: FieldRef<"Test", 'Int'>
    readonly i: FieldRef<"Test", 'Int'>
    readonly j: FieldRef<"Test", 'Int'>
    readonly k: FieldRef<"Test", 'Int'>
    readonly l: FieldRef<"Test", 'Int'>
    readonly m: FieldRef<"Test", 'Int'>
    readonly n: FieldRef<"Test", 'Int'>
    readonly o: FieldRef<"Test", 'Int'>
    readonly p: FieldRef<"Test", 'Int'>
    readonly q: FieldRef<"Test", 'Int'>
    readonly r: FieldRef<"Test", 'Int'>
    readonly s: FieldRef<"Test", 'Int'>
    readonly t: FieldRef<"Test", 'Int'>
    readonly u: FieldRef<"Test", 'Int'>
    readonly v: FieldRef<"Test", 'Int'>
    readonly w: FieldRef<"Test", 'Int'>
    readonly x: FieldRef<"Test", 'Int'>
    readonly y: FieldRef<"Test", 'Int'>
    readonly z: FieldRef<"Test", 'Int'>
    readonly testconId: FieldRef<"Test", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }


  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }


  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }


  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }


  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
  }


  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }


  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
  }


  /**
   * Test without action
   */
  export type TestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
  }



  /**
   * Model testcon
   */


  export type AggregateTestcon = {
    _count: TestconCountAggregateOutputType | null
    _min: TestconMinAggregateOutputType | null
    _max: TestconMaxAggregateOutputType | null
  }

  export type TestconMinAggregateOutputType = {
    id: string | null
  }

  export type TestconMaxAggregateOutputType = {
    id: string | null
  }

  export type TestconCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type TestconMinAggregateInputType = {
    id?: true
  }

  export type TestconMaxAggregateInputType = {
    id?: true
  }

  export type TestconCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type TestconAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which testcon to aggregate.
     */
    where?: testconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcons to fetch.
     */
    orderBy?: testconOrderByWithRelationInput | testconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testcons
    **/
    _count?: true | TestconCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestconMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestconMaxAggregateInputType
  }

  export type GetTestconAggregateType<T extends TestconAggregateArgs> = {
        [P in keyof T & keyof AggregateTestcon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestcon[P]>
      : GetScalarType<T[P], AggregateTestcon[P]>
  }




  export type testconGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: testconWhereInput
    orderBy?: testconOrderByWithAggregationInput | testconOrderByWithAggregationInput[]
    by: TestconScalarFieldEnum[] | TestconScalarFieldEnum
    having?: testconScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestconCountAggregateInputType | true
    _min?: TestconMinAggregateInputType
    _max?: TestconMaxAggregateInputType
  }


  export type TestconGroupByOutputType = {
    id: string
    _count: TestconCountAggregateOutputType | null
    _min: TestconMinAggregateOutputType | null
    _max: TestconMaxAggregateOutputType | null
  }

  type GetTestconGroupByPayload<T extends testconGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestconGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestconGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestconGroupByOutputType[P]>
            : GetScalarType<T[P], TestconGroupByOutputType[P]>
        }
      >
    >


  export type testconSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Test?: boolean | testcon$TestArgs<ExtArgs>
  }, ExtArgs["result"]["testcon"]>

  export type testconSelectScalar = {
    id?: boolean
  }

  export type testconInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Test?: boolean | testcon$TestArgs<ExtArgs>
  }


  type testconGetPayload<S extends boolean | null | undefined | testconArgs> = $Types.GetResult<testconPayload, S>

  type testconCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<testconFindManyArgs, 'select' | 'include'> & {
      select?: TestconCountAggregateInputType | true
    }

  export interface testconDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testcon'], meta: { name: 'testcon' } }
    /**
     * Find zero or one Testcon that matches the filter.
     * @param {testconFindUniqueArgs} args - Arguments to find a Testcon
     * @example
     * // Get one Testcon
     * const testcon = await prisma.testcon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends testconFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, testconFindUniqueArgs<ExtArgs>>
    ): Prisma__testconClient<$Types.GetResult<testconPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Testcon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {testconFindUniqueOrThrowArgs} args - Arguments to find a Testcon
     * @example
     * // Get one Testcon
     * const testcon = await prisma.testcon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends testconFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, testconFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__testconClient<$Types.GetResult<testconPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Testcon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testconFindFirstArgs} args - Arguments to find a Testcon
     * @example
     * // Get one Testcon
     * const testcon = await prisma.testcon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends testconFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, testconFindFirstArgs<ExtArgs>>
    ): Prisma__testconClient<$Types.GetResult<testconPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Testcon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testconFindFirstOrThrowArgs} args - Arguments to find a Testcon
     * @example
     * // Get one Testcon
     * const testcon = await prisma.testcon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends testconFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, testconFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__testconClient<$Types.GetResult<testconPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Testcons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testconFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testcons
     * const testcons = await prisma.testcon.findMany()
     * 
     * // Get first 10 Testcons
     * const testcons = await prisma.testcon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testconWithIdOnly = await prisma.testcon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends testconFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testconFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<testconPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Testcon.
     * @param {testconCreateArgs} args - Arguments to create a Testcon.
     * @example
     * // Create one Testcon
     * const Testcon = await prisma.testcon.create({
     *   data: {
     *     // ... data to create a Testcon
     *   }
     * })
     * 
    **/
    create<T extends testconCreateArgs<ExtArgs>>(
      args: SelectSubset<T, testconCreateArgs<ExtArgs>>
    ): Prisma__testconClient<$Types.GetResult<testconPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Testcon.
     * @param {testconDeleteArgs} args - Arguments to delete one Testcon.
     * @example
     * // Delete one Testcon
     * const Testcon = await prisma.testcon.delete({
     *   where: {
     *     // ... filter to delete one Testcon
     *   }
     * })
     * 
    **/
    delete<T extends testconDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, testconDeleteArgs<ExtArgs>>
    ): Prisma__testconClient<$Types.GetResult<testconPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Testcon.
     * @param {testconUpdateArgs} args - Arguments to update one Testcon.
     * @example
     * // Update one Testcon
     * const testcon = await prisma.testcon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends testconUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, testconUpdateArgs<ExtArgs>>
    ): Prisma__testconClient<$Types.GetResult<testconPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Testcons.
     * @param {testconDeleteManyArgs} args - Arguments to filter Testcons to delete.
     * @example
     * // Delete a few Testcons
     * const { count } = await prisma.testcon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends testconDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testconDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testcons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testconUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testcons
     * const testcon = await prisma.testcon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends testconUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, testconUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testcon.
     * @param {testconUpsertArgs} args - Arguments to update or create a Testcon.
     * @example
     * // Update or create a Testcon
     * const testcon = await prisma.testcon.upsert({
     *   create: {
     *     // ... data to create a Testcon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testcon we want to update
     *   }
     * })
    **/
    upsert<T extends testconUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, testconUpsertArgs<ExtArgs>>
    ): Prisma__testconClient<$Types.GetResult<testconPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Testcons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testconCountArgs} args - Arguments to filter Testcons to count.
     * @example
     * // Count the number of Testcons
     * const count = await prisma.testcon.count({
     *   where: {
     *     // ... the filter for the Testcons we want to count
     *   }
     * })
    **/
    count<T extends testconCountArgs>(
      args?: Subset<T, testconCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestconCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testcon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestconAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestconAggregateArgs>(args: Subset<T, TestconAggregateArgs>): Prisma.PrismaPromise<GetTestconAggregateType<T>>

    /**
     * Group by Testcon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testconGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends testconGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testconGroupByArgs['orderBy'] }
        : { orderBy?: testconGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, testconGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestconGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testcon model
   */
  readonly fields: testconFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testcon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__testconClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Test<T extends testcon$TestArgs<ExtArgs> = {}>(args?: Subset<T, testcon$TestArgs<ExtArgs>>): Prisma__TestClient<$Types.GetResult<TestPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the testcon model
   */ 
  interface testconFieldRefs {
    readonly id: FieldRef<"testcon", 'String'>
  }
    

  // Custom InputTypes

  /**
   * testcon findUnique
   */
  export type testconFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcon
     */
    select?: testconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testconInclude<ExtArgs> | null
    /**
     * Filter, which testcon to fetch.
     */
    where: testconWhereUniqueInput
  }


  /**
   * testcon findUniqueOrThrow
   */
  export type testconFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcon
     */
    select?: testconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testconInclude<ExtArgs> | null
    /**
     * Filter, which testcon to fetch.
     */
    where: testconWhereUniqueInput
  }


  /**
   * testcon findFirst
   */
  export type testconFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcon
     */
    select?: testconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testconInclude<ExtArgs> | null
    /**
     * Filter, which testcon to fetch.
     */
    where?: testconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcons to fetch.
     */
    orderBy?: testconOrderByWithRelationInput | testconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testcons.
     */
    cursor?: testconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testcons.
     */
    distinct?: TestconScalarFieldEnum | TestconScalarFieldEnum[]
  }


  /**
   * testcon findFirstOrThrow
   */
  export type testconFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcon
     */
    select?: testconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testconInclude<ExtArgs> | null
    /**
     * Filter, which testcon to fetch.
     */
    where?: testconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcons to fetch.
     */
    orderBy?: testconOrderByWithRelationInput | testconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testcons.
     */
    cursor?: testconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testcons.
     */
    distinct?: TestconScalarFieldEnum | TestconScalarFieldEnum[]
  }


  /**
   * testcon findMany
   */
  export type testconFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcon
     */
    select?: testconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testconInclude<ExtArgs> | null
    /**
     * Filter, which testcons to fetch.
     */
    where?: testconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcons to fetch.
     */
    orderBy?: testconOrderByWithRelationInput | testconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testcons.
     */
    cursor?: testconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcons.
     */
    skip?: number
    distinct?: TestconScalarFieldEnum | TestconScalarFieldEnum[]
  }


  /**
   * testcon create
   */
  export type testconCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcon
     */
    select?: testconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testconInclude<ExtArgs> | null
    /**
     * The data needed to create a testcon.
     */
    data?: XOR<testconCreateInput, testconUncheckedCreateInput>
  }


  /**
   * testcon update
   */
  export type testconUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcon
     */
    select?: testconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testconInclude<ExtArgs> | null
    /**
     * The data needed to update a testcon.
     */
    data: XOR<testconUpdateInput, testconUncheckedUpdateInput>
    /**
     * Choose, which testcon to update.
     */
    where: testconWhereUniqueInput
  }


  /**
   * testcon updateMany
   */
  export type testconUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testcons.
     */
    data: XOR<testconUpdateManyMutationInput, testconUncheckedUpdateManyInput>
    /**
     * Filter which testcons to update
     */
    where?: testconWhereInput
  }


  /**
   * testcon upsert
   */
  export type testconUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcon
     */
    select?: testconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testconInclude<ExtArgs> | null
    /**
     * The filter to search for the testcon to update in case it exists.
     */
    where: testconWhereUniqueInput
    /**
     * In case the testcon found by the `where` argument doesn't exist, create a new testcon with this data.
     */
    create: XOR<testconCreateInput, testconUncheckedCreateInput>
    /**
     * In case the testcon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testconUpdateInput, testconUncheckedUpdateInput>
  }


  /**
   * testcon delete
   */
  export type testconDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcon
     */
    select?: testconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testconInclude<ExtArgs> | null
    /**
     * Filter which testcon to delete.
     */
    where: testconWhereUniqueInput
  }


  /**
   * testcon deleteMany
   */
  export type testconDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which testcons to delete
     */
    where?: testconWhereInput
  }


  /**
   * testcon.Test
   */
  export type testcon$TestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
  }


  /**
   * testcon without action
   */
  export type testconArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcon
     */
    select?: testconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: testconInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TestScalarFieldEnum: {
    id: 'id',
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
    g: 'g',
    h: 'h',
    i: 'i',
    j: 'j',
    k: 'k',
    l: 'l',
    m: 'm',
    n: 'n',
    o: 'o',
    p: 'p',
    q: 'q',
    r: 'r',
    s: 's',
    t: 't',
    u: 'u',
    v: 'v',
    w: 'w',
    x: 'x',
    y: 'y',
    z: 'z',
    testconId: 'testconId'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const TestconScalarFieldEnum: {
    id: 'id'
  };

  export type TestconScalarFieldEnum = (typeof TestconScalarFieldEnum)[keyof typeof TestconScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: StringFilter<"Test"> | string
    a?: IntFilter<"Test"> | number
    b?: IntFilter<"Test"> | number
    c?: IntFilter<"Test"> | number
    d?: IntFilter<"Test"> | number
    e?: IntFilter<"Test"> | number
    f?: IntFilter<"Test"> | number
    g?: IntFilter<"Test"> | number
    h?: IntFilter<"Test"> | number
    i?: IntFilter<"Test"> | number
    j?: IntFilter<"Test"> | number
    k?: IntFilter<"Test"> | number
    l?: IntFilter<"Test"> | number
    m?: IntFilter<"Test"> | number
    n?: IntFilter<"Test"> | number
    o?: IntFilter<"Test"> | number
    p?: IntFilter<"Test"> | number
    q?: IntFilter<"Test"> | number
    r?: IntFilter<"Test"> | number
    s?: IntFilter<"Test"> | number
    t?: IntFilter<"Test"> | number
    u?: IntFilter<"Test"> | number
    v?: IntFilter<"Test"> | number
    w?: IntFilter<"Test"> | number
    x?: IntFilter<"Test"> | number
    y?: IntFilter<"Test"> | number
    z?: IntFilter<"Test"> | number
    testconId?: StringFilter<"Test"> | string
    testcon?: XOR<TestconRelationFilter, testconWhereInput>
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    c?: SortOrder
    d?: SortOrder
    e?: SortOrder
    f?: SortOrder
    g?: SortOrder
    h?: SortOrder
    i?: SortOrder
    j?: SortOrder
    k?: SortOrder
    l?: SortOrder
    m?: SortOrder
    n?: SortOrder
    o?: SortOrder
    p?: SortOrder
    q?: SortOrder
    r?: SortOrder
    s?: SortOrder
    t?: SortOrder
    u?: SortOrder
    v?: SortOrder
    w?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    testconId?: SortOrder
    testcon?: testconOrderByWithRelationInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    testconId?: string
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    a?: IntFilter<"Test"> | number
    b?: IntFilter<"Test"> | number
    c?: IntFilter<"Test"> | number
    d?: IntFilter<"Test"> | number
    e?: IntFilter<"Test"> | number
    f?: IntFilter<"Test"> | number
    g?: IntFilter<"Test"> | number
    h?: IntFilter<"Test"> | number
    i?: IntFilter<"Test"> | number
    j?: IntFilter<"Test"> | number
    k?: IntFilter<"Test"> | number
    l?: IntFilter<"Test"> | number
    m?: IntFilter<"Test"> | number
    n?: IntFilter<"Test"> | number
    o?: IntFilter<"Test"> | number
    p?: IntFilter<"Test"> | number
    q?: IntFilter<"Test"> | number
    r?: IntFilter<"Test"> | number
    s?: IntFilter<"Test"> | number
    t?: IntFilter<"Test"> | number
    u?: IntFilter<"Test"> | number
    v?: IntFilter<"Test"> | number
    w?: IntFilter<"Test"> | number
    x?: IntFilter<"Test"> | number
    y?: IntFilter<"Test"> | number
    z?: IntFilter<"Test"> | number
    testcon?: XOR<TestconRelationFilter, testconWhereInput>
  }, "id" | "id" | "testconId">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    c?: SortOrder
    d?: SortOrder
    e?: SortOrder
    f?: SortOrder
    g?: SortOrder
    h?: SortOrder
    i?: SortOrder
    j?: SortOrder
    k?: SortOrder
    l?: SortOrder
    m?: SortOrder
    n?: SortOrder
    o?: SortOrder
    p?: SortOrder
    q?: SortOrder
    r?: SortOrder
    s?: SortOrder
    t?: SortOrder
    u?: SortOrder
    v?: SortOrder
    w?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    testconId?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Test"> | string
    a?: IntWithAggregatesFilter<"Test"> | number
    b?: IntWithAggregatesFilter<"Test"> | number
    c?: IntWithAggregatesFilter<"Test"> | number
    d?: IntWithAggregatesFilter<"Test"> | number
    e?: IntWithAggregatesFilter<"Test"> | number
    f?: IntWithAggregatesFilter<"Test"> | number
    g?: IntWithAggregatesFilter<"Test"> | number
    h?: IntWithAggregatesFilter<"Test"> | number
    i?: IntWithAggregatesFilter<"Test"> | number
    j?: IntWithAggregatesFilter<"Test"> | number
    k?: IntWithAggregatesFilter<"Test"> | number
    l?: IntWithAggregatesFilter<"Test"> | number
    m?: IntWithAggregatesFilter<"Test"> | number
    n?: IntWithAggregatesFilter<"Test"> | number
    o?: IntWithAggregatesFilter<"Test"> | number
    p?: IntWithAggregatesFilter<"Test"> | number
    q?: IntWithAggregatesFilter<"Test"> | number
    r?: IntWithAggregatesFilter<"Test"> | number
    s?: IntWithAggregatesFilter<"Test"> | number
    t?: IntWithAggregatesFilter<"Test"> | number
    u?: IntWithAggregatesFilter<"Test"> | number
    v?: IntWithAggregatesFilter<"Test"> | number
    w?: IntWithAggregatesFilter<"Test"> | number
    x?: IntWithAggregatesFilter<"Test"> | number
    y?: IntWithAggregatesFilter<"Test"> | number
    z?: IntWithAggregatesFilter<"Test"> | number
    testconId?: StringWithAggregatesFilter<"Test"> | string
  }

  export type testconWhereInput = {
    AND?: testconWhereInput | testconWhereInput[]
    OR?: testconWhereInput[]
    NOT?: testconWhereInput | testconWhereInput[]
    id?: StringFilter<"testcon"> | string
    Test?: XOR<TestNullableRelationFilter, TestWhereInput> | null
  }

  export type testconOrderByWithRelationInput = {
    id?: SortOrder
    Test?: TestOrderByWithRelationInput
  }

  export type testconWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: testconWhereInput | testconWhereInput[]
    OR?: testconWhereInput[]
    NOT?: testconWhereInput | testconWhereInput[]
    Test?: XOR<TestNullableRelationFilter, TestWhereInput> | null
  }, "id" | "id">

  export type testconOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: testconCountOrderByAggregateInput
    _max?: testconMaxOrderByAggregateInput
    _min?: testconMinOrderByAggregateInput
  }

  export type testconScalarWhereWithAggregatesInput = {
    AND?: testconScalarWhereWithAggregatesInput | testconScalarWhereWithAggregatesInput[]
    OR?: testconScalarWhereWithAggregatesInput[]
    NOT?: testconScalarWhereWithAggregatesInput | testconScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"testcon"> | string
  }

  export type TestCreateInput = {
    id?: string
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    g: number
    h: number
    i: number
    j: number
    k: number
    l: number
    m: number
    n: number
    o: number
    p: number
    q: number
    r: number
    s: number
    t: number
    u: number
    v: number
    w: number
    x: number
    y: number
    z: number
    testcon: testconCreateNestedOneWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    id?: string
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    g: number
    h: number
    i: number
    j: number
    k: number
    l: number
    m: number
    n: number
    o: number
    p: number
    q: number
    r: number
    s: number
    t: number
    u: number
    v: number
    w: number
    x: number
    y: number
    z: number
    testconId: string
  }

  export type TestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    a?: IntFieldUpdateOperationsInput | number
    b?: IntFieldUpdateOperationsInput | number
    c?: IntFieldUpdateOperationsInput | number
    d?: IntFieldUpdateOperationsInput | number
    e?: IntFieldUpdateOperationsInput | number
    f?: IntFieldUpdateOperationsInput | number
    g?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: IntFieldUpdateOperationsInput | number
    j?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    l?: IntFieldUpdateOperationsInput | number
    m?: IntFieldUpdateOperationsInput | number
    n?: IntFieldUpdateOperationsInput | number
    o?: IntFieldUpdateOperationsInput | number
    p?: IntFieldUpdateOperationsInput | number
    q?: IntFieldUpdateOperationsInput | number
    r?: IntFieldUpdateOperationsInput | number
    s?: IntFieldUpdateOperationsInput | number
    t?: IntFieldUpdateOperationsInput | number
    u?: IntFieldUpdateOperationsInput | number
    v?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    z?: IntFieldUpdateOperationsInput | number
    testcon?: testconUpdateOneRequiredWithoutTestNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    a?: IntFieldUpdateOperationsInput | number
    b?: IntFieldUpdateOperationsInput | number
    c?: IntFieldUpdateOperationsInput | number
    d?: IntFieldUpdateOperationsInput | number
    e?: IntFieldUpdateOperationsInput | number
    f?: IntFieldUpdateOperationsInput | number
    g?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: IntFieldUpdateOperationsInput | number
    j?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    l?: IntFieldUpdateOperationsInput | number
    m?: IntFieldUpdateOperationsInput | number
    n?: IntFieldUpdateOperationsInput | number
    o?: IntFieldUpdateOperationsInput | number
    p?: IntFieldUpdateOperationsInput | number
    q?: IntFieldUpdateOperationsInput | number
    r?: IntFieldUpdateOperationsInput | number
    s?: IntFieldUpdateOperationsInput | number
    t?: IntFieldUpdateOperationsInput | number
    u?: IntFieldUpdateOperationsInput | number
    v?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    z?: IntFieldUpdateOperationsInput | number
    testconId?: StringFieldUpdateOperationsInput | string
  }

  export type TestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    a?: IntFieldUpdateOperationsInput | number
    b?: IntFieldUpdateOperationsInput | number
    c?: IntFieldUpdateOperationsInput | number
    d?: IntFieldUpdateOperationsInput | number
    e?: IntFieldUpdateOperationsInput | number
    f?: IntFieldUpdateOperationsInput | number
    g?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: IntFieldUpdateOperationsInput | number
    j?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    l?: IntFieldUpdateOperationsInput | number
    m?: IntFieldUpdateOperationsInput | number
    n?: IntFieldUpdateOperationsInput | number
    o?: IntFieldUpdateOperationsInput | number
    p?: IntFieldUpdateOperationsInput | number
    q?: IntFieldUpdateOperationsInput | number
    r?: IntFieldUpdateOperationsInput | number
    s?: IntFieldUpdateOperationsInput | number
    t?: IntFieldUpdateOperationsInput | number
    u?: IntFieldUpdateOperationsInput | number
    v?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    z?: IntFieldUpdateOperationsInput | number
  }

  export type TestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    a?: IntFieldUpdateOperationsInput | number
    b?: IntFieldUpdateOperationsInput | number
    c?: IntFieldUpdateOperationsInput | number
    d?: IntFieldUpdateOperationsInput | number
    e?: IntFieldUpdateOperationsInput | number
    f?: IntFieldUpdateOperationsInput | number
    g?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: IntFieldUpdateOperationsInput | number
    j?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    l?: IntFieldUpdateOperationsInput | number
    m?: IntFieldUpdateOperationsInput | number
    n?: IntFieldUpdateOperationsInput | number
    o?: IntFieldUpdateOperationsInput | number
    p?: IntFieldUpdateOperationsInput | number
    q?: IntFieldUpdateOperationsInput | number
    r?: IntFieldUpdateOperationsInput | number
    s?: IntFieldUpdateOperationsInput | number
    t?: IntFieldUpdateOperationsInput | number
    u?: IntFieldUpdateOperationsInput | number
    v?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    z?: IntFieldUpdateOperationsInput | number
    testconId?: StringFieldUpdateOperationsInput | string
  }

  export type testconCreateInput = {
    id?: string
    Test?: TestCreateNestedOneWithoutTestconInput
  }

  export type testconUncheckedCreateInput = {
    id?: string
    Test?: TestUncheckedCreateNestedOneWithoutTestconInput
  }

  export type testconUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Test?: TestUpdateOneWithoutTestconNestedInput
  }

  export type testconUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Test?: TestUncheckedUpdateOneWithoutTestconNestedInput
  }

  export type testconUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type testconUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TestconRelationFilter = {
    is?: testconWhereInput
    isNot?: testconWhereInput
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    c?: SortOrder
    d?: SortOrder
    e?: SortOrder
    f?: SortOrder
    g?: SortOrder
    h?: SortOrder
    i?: SortOrder
    j?: SortOrder
    k?: SortOrder
    l?: SortOrder
    m?: SortOrder
    n?: SortOrder
    o?: SortOrder
    p?: SortOrder
    q?: SortOrder
    r?: SortOrder
    s?: SortOrder
    t?: SortOrder
    u?: SortOrder
    v?: SortOrder
    w?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    testconId?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    a?: SortOrder
    b?: SortOrder
    c?: SortOrder
    d?: SortOrder
    e?: SortOrder
    f?: SortOrder
    g?: SortOrder
    h?: SortOrder
    i?: SortOrder
    j?: SortOrder
    k?: SortOrder
    l?: SortOrder
    m?: SortOrder
    n?: SortOrder
    o?: SortOrder
    p?: SortOrder
    q?: SortOrder
    r?: SortOrder
    s?: SortOrder
    t?: SortOrder
    u?: SortOrder
    v?: SortOrder
    w?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    c?: SortOrder
    d?: SortOrder
    e?: SortOrder
    f?: SortOrder
    g?: SortOrder
    h?: SortOrder
    i?: SortOrder
    j?: SortOrder
    k?: SortOrder
    l?: SortOrder
    m?: SortOrder
    n?: SortOrder
    o?: SortOrder
    p?: SortOrder
    q?: SortOrder
    r?: SortOrder
    s?: SortOrder
    t?: SortOrder
    u?: SortOrder
    v?: SortOrder
    w?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    testconId?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    a?: SortOrder
    b?: SortOrder
    c?: SortOrder
    d?: SortOrder
    e?: SortOrder
    f?: SortOrder
    g?: SortOrder
    h?: SortOrder
    i?: SortOrder
    j?: SortOrder
    k?: SortOrder
    l?: SortOrder
    m?: SortOrder
    n?: SortOrder
    o?: SortOrder
    p?: SortOrder
    q?: SortOrder
    r?: SortOrder
    s?: SortOrder
    t?: SortOrder
    u?: SortOrder
    v?: SortOrder
    w?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    testconId?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    a?: SortOrder
    b?: SortOrder
    c?: SortOrder
    d?: SortOrder
    e?: SortOrder
    f?: SortOrder
    g?: SortOrder
    h?: SortOrder
    i?: SortOrder
    j?: SortOrder
    k?: SortOrder
    l?: SortOrder
    m?: SortOrder
    n?: SortOrder
    o?: SortOrder
    p?: SortOrder
    q?: SortOrder
    r?: SortOrder
    s?: SortOrder
    t?: SortOrder
    u?: SortOrder
    v?: SortOrder
    w?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TestNullableRelationFilter = {
    is?: TestWhereInput | null
    isNot?: TestWhereInput | null
  }

  export type testconCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type testconMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type testconMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type testconCreateNestedOneWithoutTestInput = {
    create?: XOR<testconCreateWithoutTestInput, testconUncheckedCreateWithoutTestInput>
    connectOrCreate?: testconCreateOrConnectWithoutTestInput
    connect?: testconWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type testconUpdateOneRequiredWithoutTestNestedInput = {
    create?: XOR<testconCreateWithoutTestInput, testconUncheckedCreateWithoutTestInput>
    connectOrCreate?: testconCreateOrConnectWithoutTestInput
    upsert?: testconUpsertWithoutTestInput
    connect?: testconWhereUniqueInput
    update?: XOR<XOR<testconUpdateToOneWithWhereWithoutTestInput, testconUpdateWithoutTestInput>, testconUncheckedUpdateWithoutTestInput>
  }

  export type TestCreateNestedOneWithoutTestconInput = {
    create?: XOR<TestCreateWithoutTestconInput, TestUncheckedCreateWithoutTestconInput>
    connectOrCreate?: TestCreateOrConnectWithoutTestconInput
    connect?: TestWhereUniqueInput
  }

  export type TestUncheckedCreateNestedOneWithoutTestconInput = {
    create?: XOR<TestCreateWithoutTestconInput, TestUncheckedCreateWithoutTestconInput>
    connectOrCreate?: TestCreateOrConnectWithoutTestconInput
    connect?: TestWhereUniqueInput
  }

  export type TestUpdateOneWithoutTestconNestedInput = {
    create?: XOR<TestCreateWithoutTestconInput, TestUncheckedCreateWithoutTestconInput>
    connectOrCreate?: TestCreateOrConnectWithoutTestconInput
    upsert?: TestUpsertWithoutTestconInput
    disconnect?: TestWhereInput | boolean
    delete?: TestWhereInput | boolean
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutTestconInput, TestUpdateWithoutTestconInput>, TestUncheckedUpdateWithoutTestconInput>
  }

  export type TestUncheckedUpdateOneWithoutTestconNestedInput = {
    create?: XOR<TestCreateWithoutTestconInput, TestUncheckedCreateWithoutTestconInput>
    connectOrCreate?: TestCreateOrConnectWithoutTestconInput
    upsert?: TestUpsertWithoutTestconInput
    disconnect?: TestWhereInput | boolean
    delete?: TestWhereInput | boolean
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutTestconInput, TestUpdateWithoutTestconInput>, TestUncheckedUpdateWithoutTestconInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type testconCreateWithoutTestInput = {
    id?: string
  }

  export type testconUncheckedCreateWithoutTestInput = {
    id?: string
  }

  export type testconCreateOrConnectWithoutTestInput = {
    where: testconWhereUniqueInput
    create: XOR<testconCreateWithoutTestInput, testconUncheckedCreateWithoutTestInput>
  }

  export type testconUpsertWithoutTestInput = {
    update: XOR<testconUpdateWithoutTestInput, testconUncheckedUpdateWithoutTestInput>
    create: XOR<testconCreateWithoutTestInput, testconUncheckedCreateWithoutTestInput>
    where?: testconWhereInput
  }

  export type testconUpdateToOneWithWhereWithoutTestInput = {
    where?: testconWhereInput
    data: XOR<testconUpdateWithoutTestInput, testconUncheckedUpdateWithoutTestInput>
  }

  export type testconUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type testconUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TestCreateWithoutTestconInput = {
    id?: string
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    g: number
    h: number
    i: number
    j: number
    k: number
    l: number
    m: number
    n: number
    o: number
    p: number
    q: number
    r: number
    s: number
    t: number
    u: number
    v: number
    w: number
    x: number
    y: number
    z: number
  }

  export type TestUncheckedCreateWithoutTestconInput = {
    id?: string
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    g: number
    h: number
    i: number
    j: number
    k: number
    l: number
    m: number
    n: number
    o: number
    p: number
    q: number
    r: number
    s: number
    t: number
    u: number
    v: number
    w: number
    x: number
    y: number
    z: number
  }

  export type TestCreateOrConnectWithoutTestconInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutTestconInput, TestUncheckedCreateWithoutTestconInput>
  }

  export type TestUpsertWithoutTestconInput = {
    update: XOR<TestUpdateWithoutTestconInput, TestUncheckedUpdateWithoutTestconInput>
    create: XOR<TestCreateWithoutTestconInput, TestUncheckedCreateWithoutTestconInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutTestconInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutTestconInput, TestUncheckedUpdateWithoutTestconInput>
  }

  export type TestUpdateWithoutTestconInput = {
    id?: StringFieldUpdateOperationsInput | string
    a?: IntFieldUpdateOperationsInput | number
    b?: IntFieldUpdateOperationsInput | number
    c?: IntFieldUpdateOperationsInput | number
    d?: IntFieldUpdateOperationsInput | number
    e?: IntFieldUpdateOperationsInput | number
    f?: IntFieldUpdateOperationsInput | number
    g?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: IntFieldUpdateOperationsInput | number
    j?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    l?: IntFieldUpdateOperationsInput | number
    m?: IntFieldUpdateOperationsInput | number
    n?: IntFieldUpdateOperationsInput | number
    o?: IntFieldUpdateOperationsInput | number
    p?: IntFieldUpdateOperationsInput | number
    q?: IntFieldUpdateOperationsInput | number
    r?: IntFieldUpdateOperationsInput | number
    s?: IntFieldUpdateOperationsInput | number
    t?: IntFieldUpdateOperationsInput | number
    u?: IntFieldUpdateOperationsInput | number
    v?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    z?: IntFieldUpdateOperationsInput | number
  }

  export type TestUncheckedUpdateWithoutTestconInput = {
    id?: StringFieldUpdateOperationsInput | string
    a?: IntFieldUpdateOperationsInput | number
    b?: IntFieldUpdateOperationsInput | number
    c?: IntFieldUpdateOperationsInput | number
    d?: IntFieldUpdateOperationsInput | number
    e?: IntFieldUpdateOperationsInput | number
    f?: IntFieldUpdateOperationsInput | number
    g?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: IntFieldUpdateOperationsInput | number
    j?: IntFieldUpdateOperationsInput | number
    k?: IntFieldUpdateOperationsInput | number
    l?: IntFieldUpdateOperationsInput | number
    m?: IntFieldUpdateOperationsInput | number
    n?: IntFieldUpdateOperationsInput | number
    o?: IntFieldUpdateOperationsInput | number
    p?: IntFieldUpdateOperationsInput | number
    q?: IntFieldUpdateOperationsInput | number
    r?: IntFieldUpdateOperationsInput | number
    s?: IntFieldUpdateOperationsInput | number
    t?: IntFieldUpdateOperationsInput | number
    u?: IntFieldUpdateOperationsInput | number
    v?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    z?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}