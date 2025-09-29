
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model PayRun
 * 
 */
export type PayRun = $Result.DefaultSelection<Prisma.$PayRunPayload>
/**
 * Model Payslip
 * 
 */
export type Payslip = $Result.DefaultSelection<Prisma.$PayslipPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TypeContrat: {
  JOURNALIER: 'JOURNALIER',
  FIXE: 'FIXE',
  HONORAIRE: 'HONORAIRE'
};

export type TypeContrat = (typeof TypeContrat)[keyof typeof TypeContrat]


export const ModePaiement: {
  ESPECES: 'ESPECES',
  VIREMENT_BANCAIRE: 'VIREMENT_BANCAIRE',
  ORANGE_MONEY: 'ORANGE_MONEY',
  WAVE: 'WAVE'
};

export type ModePaiement = (typeof ModePaiement)[keyof typeof ModePaiement]


export const StatusPayRun: {
  BROUILLON: 'BROUILLON',
  APPROUVE: 'APPROUVE',
  CLOTURE: 'CLOTURE'
};

export type StatusPayRun = (typeof StatusPayRun)[keyof typeof StatusPayRun]


export const StatusPayslip: {
  PAYE: 'PAYE',
  PARTIEL: 'PARTIEL',
  EN_ATTENTE: 'EN_ATTENTE'
};

export type StatusPayslip = (typeof StatusPayslip)[keyof typeof StatusPayslip]

}

export type TypeContrat = $Enums.TypeContrat

export const TypeContrat: typeof $Enums.TypeContrat

export type ModePaiement = $Enums.ModePaiement

export const ModePaiement: typeof $Enums.ModePaiement

export type StatusPayRun = $Enums.StatusPayRun

export const StatusPayRun: typeof $Enums.StatusPayRun

export type StatusPayslip = $Enums.StatusPayslip

export const StatusPayslip: typeof $Enums.StatusPayslip

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payRun`: Exposes CRUD operations for the **PayRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayRuns
    * const payRuns = await prisma.payRun.findMany()
    * ```
    */
  get payRun(): Prisma.PayRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payslip`: Exposes CRUD operations for the **Payslip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payslips
    * const payslips = await prisma.payslip.findMany()
    * ```
    */
  get payslip(): Prisma.PayslipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Employee: 'Employee',
    PayRun: 'PayRun',
    Payslip: 'Payslip',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    tenant?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "employee" | "payRun" | "payslip" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      PayRun: {
        payload: Prisma.$PayRunPayload<ExtArgs>
        fields: Prisma.PayRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          findFirst: {
            args: Prisma.PayRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          findMany: {
            args: Prisma.PayRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>[]
          }
          create: {
            args: Prisma.PayRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          createMany: {
            args: Prisma.PayRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PayRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          update: {
            args: Prisma.PayRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          deleteMany: {
            args: Prisma.PayRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayRunPayload>
          }
          aggregate: {
            args: Prisma.PayRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayRun>
          }
          groupBy: {
            args: Prisma.PayRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayRunCountArgs<ExtArgs>
            result: $Utils.Optional<PayRunCountAggregateOutputType> | number
          }
        }
      }
      Payslip: {
        payload: Prisma.$PayslipPayload<ExtArgs>
        fields: Prisma.PayslipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayslipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayslipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          findFirst: {
            args: Prisma.PayslipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayslipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          findMany: {
            args: Prisma.PayslipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>[]
          }
          create: {
            args: Prisma.PayslipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          createMany: {
            args: Prisma.PayslipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PayslipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          update: {
            args: Prisma.PayslipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          deleteMany: {
            args: Prisma.PayslipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayslipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayslipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayslipPayload>
          }
          aggregate: {
            args: Prisma.PayslipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayslip>
          }
          groupBy: {
            args: Prisma.PayslipGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayslipGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayslipCountArgs<ExtArgs>
            result: $Utils.Optional<PayslipCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    employee?: EmployeeOmit
    payRun?: PayRunOmit
    payslip?: PayslipOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    payslips: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payslips?: boolean | EmployeeCountOutputTypeCountPayslipsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPayslipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayslipWhereInput
  }


  /**
   * Count Type PayRunCountOutputType
   */

  export type PayRunCountOutputType = {
    payslips: number
  }

  export type PayRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payslips?: boolean | PayRunCountOutputTypeCountPayslipsArgs
  }

  // Custom InputTypes
  /**
   * PayRunCountOutputType without action
   */
  export type PayRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRunCountOutputType
     */
    select?: PayRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayRunCountOutputType without action
   */
  export type PayRunCountOutputTypeCountPayslipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayslipWhereInput
  }


  /**
   * Count Type PayslipCountOutputType
   */

  export type PayslipCountOutputType = {
    payments: number
  }

  export type PayslipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | PayslipCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * PayslipCountOutputType without action
   */
  export type PayslipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayslipCountOutputType
     */
    select?: PayslipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayslipCountOutputType without action
   */
  export type PayslipCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    tauxSalaire: Decimal | null
    joursTravailles: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    tauxSalaire: Decimal | null
    joursTravailles: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    nom: string | null
    poste: string | null
    typeContrat: $Enums.TypeContrat | null
    tauxSalaire: Decimal | null
    joursTravailles: number | null
    coordonneesBancaires: string | null
    actif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    poste: string | null
    typeContrat: $Enums.TypeContrat | null
    tauxSalaire: Decimal | null
    joursTravailles: number | null
    coordonneesBancaires: string | null
    actif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    nom: number
    poste: number
    typeContrat: number
    tauxSalaire: number
    joursTravailles: number
    coordonneesBancaires: number
    actif: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    tauxSalaire?: true
    joursTravailles?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    tauxSalaire?: true
    joursTravailles?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    nom?: true
    poste?: true
    typeContrat?: true
    tauxSalaire?: true
    joursTravailles?: true
    coordonneesBancaires?: true
    actif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    nom?: true
    poste?: true
    typeContrat?: true
    tauxSalaire?: true
    joursTravailles?: true
    coordonneesBancaires?: true
    actif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    nom?: true
    poste?: true
    typeContrat?: true
    tauxSalaire?: true
    joursTravailles?: true
    coordonneesBancaires?: true
    actif?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    nom: string
    poste: string
    typeContrat: $Enums.TypeContrat
    tauxSalaire: Decimal
    joursTravailles: number | null
    coordonneesBancaires: string | null
    actif: boolean
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    poste?: boolean
    typeContrat?: boolean
    tauxSalaire?: boolean
    joursTravailles?: boolean
    coordonneesBancaires?: boolean
    actif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payslips?: boolean | Employee$payslipsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    id?: boolean
    nom?: boolean
    poste?: boolean
    typeContrat?: boolean
    tauxSalaire?: boolean
    joursTravailles?: boolean
    coordonneesBancaires?: boolean
    actif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "poste" | "typeContrat" | "tauxSalaire" | "joursTravailles" | "coordonneesBancaires" | "actif" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payslips?: boolean | Employee$payslipsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      payslips: Prisma.$PayslipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      poste: string
      typeContrat: $Enums.TypeContrat
      tauxSalaire: Prisma.Decimal
      joursTravailles: number | null
      coordonneesBancaires: string | null
      actif: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payslips<T extends Employee$payslipsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$payslipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly nom: FieldRef<"Employee", 'String'>
    readonly poste: FieldRef<"Employee", 'String'>
    readonly typeContrat: FieldRef<"Employee", 'TypeContrat'>
    readonly tauxSalaire: FieldRef<"Employee", 'Decimal'>
    readonly joursTravailles: FieldRef<"Employee", 'Int'>
    readonly coordonneesBancaires: FieldRef<"Employee", 'String'>
    readonly actif: FieldRef<"Employee", 'Boolean'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.payslips
   */
  export type Employee$payslipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    where?: PayslipWhereInput
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    cursor?: PayslipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model PayRun
   */

  export type AggregatePayRun = {
    _count: PayRunCountAggregateOutputType | null
    _avg: PayRunAvgAggregateOutputType | null
    _sum: PayRunSumAggregateOutputType | null
    _min: PayRunMinAggregateOutputType | null
    _max: PayRunMaxAggregateOutputType | null
  }

  export type PayRunAvgAggregateOutputType = {
    id: number | null
  }

  export type PayRunSumAggregateOutputType = {
    id: number | null
  }

  export type PayRunMinAggregateOutputType = {
    id: number | null
    periode: Date | null
    type: string | null
    status: $Enums.StatusPayRun | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayRunMaxAggregateOutputType = {
    id: number | null
    periode: Date | null
    type: string | null
    status: $Enums.StatusPayRun | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayRunCountAggregateOutputType = {
    id: number
    periode: number
    type: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayRunAvgAggregateInputType = {
    id?: true
  }

  export type PayRunSumAggregateInputType = {
    id?: true
  }

  export type PayRunMinAggregateInputType = {
    id?: true
    periode?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayRunMaxAggregateInputType = {
    id?: true
    periode?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayRunCountAggregateInputType = {
    id?: true
    periode?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayRun to aggregate.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayRuns
    **/
    _count?: true | PayRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayRunMaxAggregateInputType
  }

  export type GetPayRunAggregateType<T extends PayRunAggregateArgs> = {
        [P in keyof T & keyof AggregatePayRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayRun[P]>
      : GetScalarType<T[P], AggregatePayRun[P]>
  }




  export type PayRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayRunWhereInput
    orderBy?: PayRunOrderByWithAggregationInput | PayRunOrderByWithAggregationInput[]
    by: PayRunScalarFieldEnum[] | PayRunScalarFieldEnum
    having?: PayRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayRunCountAggregateInputType | true
    _avg?: PayRunAvgAggregateInputType
    _sum?: PayRunSumAggregateInputType
    _min?: PayRunMinAggregateInputType
    _max?: PayRunMaxAggregateInputType
  }

  export type PayRunGroupByOutputType = {
    id: number
    periode: Date
    type: string
    status: $Enums.StatusPayRun
    createdAt: Date
    updatedAt: Date
    _count: PayRunCountAggregateOutputType | null
    _avg: PayRunAvgAggregateOutputType | null
    _sum: PayRunSumAggregateOutputType | null
    _min: PayRunMinAggregateOutputType | null
    _max: PayRunMaxAggregateOutputType | null
  }

  type GetPayRunGroupByPayload<T extends PayRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayRunGroupByOutputType[P]>
            : GetScalarType<T[P], PayRunGroupByOutputType[P]>
        }
      >
    >


  export type PayRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periode?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payslips?: boolean | PayRun$payslipsArgs<ExtArgs>
    _count?: boolean | PayRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payRun"]>



  export type PayRunSelectScalar = {
    id?: boolean
    periode?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "periode" | "type" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payRun"]>
  export type PayRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payslips?: boolean | PayRun$payslipsArgs<ExtArgs>
    _count?: boolean | PayRunCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PayRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayRun"
    objects: {
      payslips: Prisma.$PayslipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      periode: Date
      type: string
      status: $Enums.StatusPayRun
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payRun"]>
    composites: {}
  }

  type PayRunGetPayload<S extends boolean | null | undefined | PayRunDefaultArgs> = $Result.GetResult<Prisma.$PayRunPayload, S>

  type PayRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayRunCountAggregateInputType | true
    }

  export interface PayRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayRun'], meta: { name: 'PayRun' } }
    /**
     * Find zero or one PayRun that matches the filter.
     * @param {PayRunFindUniqueArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayRunFindUniqueArgs>(args: SelectSubset<T, PayRunFindUniqueArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayRunFindUniqueOrThrowArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayRunFindUniqueOrThrowArgs>(args: SelectSubset<T, PayRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunFindFirstArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayRunFindFirstArgs>(args?: SelectSubset<T, PayRunFindFirstArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunFindFirstOrThrowArgs} args - Arguments to find a PayRun
     * @example
     * // Get one PayRun
     * const payRun = await prisma.payRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayRunFindFirstOrThrowArgs>(args?: SelectSubset<T, PayRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayRuns
     * const payRuns = await prisma.payRun.findMany()
     * 
     * // Get first 10 PayRuns
     * const payRuns = await prisma.payRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payRunWithIdOnly = await prisma.payRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayRunFindManyArgs>(args?: SelectSubset<T, PayRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayRun.
     * @param {PayRunCreateArgs} args - Arguments to create a PayRun.
     * @example
     * // Create one PayRun
     * const PayRun = await prisma.payRun.create({
     *   data: {
     *     // ... data to create a PayRun
     *   }
     * })
     * 
     */
    create<T extends PayRunCreateArgs>(args: SelectSubset<T, PayRunCreateArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayRuns.
     * @param {PayRunCreateManyArgs} args - Arguments to create many PayRuns.
     * @example
     * // Create many PayRuns
     * const payRun = await prisma.payRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayRunCreateManyArgs>(args?: SelectSubset<T, PayRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PayRun.
     * @param {PayRunDeleteArgs} args - Arguments to delete one PayRun.
     * @example
     * // Delete one PayRun
     * const PayRun = await prisma.payRun.delete({
     *   where: {
     *     // ... filter to delete one PayRun
     *   }
     * })
     * 
     */
    delete<T extends PayRunDeleteArgs>(args: SelectSubset<T, PayRunDeleteArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayRun.
     * @param {PayRunUpdateArgs} args - Arguments to update one PayRun.
     * @example
     * // Update one PayRun
     * const payRun = await prisma.payRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayRunUpdateArgs>(args: SelectSubset<T, PayRunUpdateArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayRuns.
     * @param {PayRunDeleteManyArgs} args - Arguments to filter PayRuns to delete.
     * @example
     * // Delete a few PayRuns
     * const { count } = await prisma.payRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayRunDeleteManyArgs>(args?: SelectSubset<T, PayRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayRuns
     * const payRun = await prisma.payRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayRunUpdateManyArgs>(args: SelectSubset<T, PayRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PayRun.
     * @param {PayRunUpsertArgs} args - Arguments to update or create a PayRun.
     * @example
     * // Update or create a PayRun
     * const payRun = await prisma.payRun.upsert({
     *   create: {
     *     // ... data to create a PayRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayRun we want to update
     *   }
     * })
     */
    upsert<T extends PayRunUpsertArgs>(args: SelectSubset<T, PayRunUpsertArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunCountArgs} args - Arguments to filter PayRuns to count.
     * @example
     * // Count the number of PayRuns
     * const count = await prisma.payRun.count({
     *   where: {
     *     // ... the filter for the PayRuns we want to count
     *   }
     * })
    **/
    count<T extends PayRunCountArgs>(
      args?: Subset<T, PayRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayRunAggregateArgs>(args: Subset<T, PayRunAggregateArgs>): Prisma.PrismaPromise<GetPayRunAggregateType<T>>

    /**
     * Group by PayRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayRunGroupByArgs} args - Group by arguments.
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
      T extends PayRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayRunGroupByArgs['orderBy'] }
        : { orderBy?: PayRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayRun model
   */
  readonly fields: PayRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payslips<T extends PayRun$payslipsArgs<ExtArgs> = {}>(args?: Subset<T, PayRun$payslipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayRun model
   */
  interface PayRunFieldRefs {
    readonly id: FieldRef<"PayRun", 'Int'>
    readonly periode: FieldRef<"PayRun", 'DateTime'>
    readonly type: FieldRef<"PayRun", 'String'>
    readonly status: FieldRef<"PayRun", 'StatusPayRun'>
    readonly createdAt: FieldRef<"PayRun", 'DateTime'>
    readonly updatedAt: FieldRef<"PayRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayRun findUnique
   */
  export type PayRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun findUniqueOrThrow
   */
  export type PayRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun findFirst
   */
  export type PayRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayRuns.
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayRuns.
     */
    distinct?: PayRunScalarFieldEnum | PayRunScalarFieldEnum[]
  }

  /**
   * PayRun findFirstOrThrow
   */
  export type PayRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRun to fetch.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayRuns.
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayRuns.
     */
    distinct?: PayRunScalarFieldEnum | PayRunScalarFieldEnum[]
  }

  /**
   * PayRun findMany
   */
  export type PayRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter, which PayRuns to fetch.
     */
    where?: PayRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayRuns to fetch.
     */
    orderBy?: PayRunOrderByWithRelationInput | PayRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayRuns.
     */
    cursor?: PayRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayRuns.
     */
    skip?: number
    distinct?: PayRunScalarFieldEnum | PayRunScalarFieldEnum[]
  }

  /**
   * PayRun create
   */
  export type PayRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * The data needed to create a PayRun.
     */
    data: XOR<PayRunCreateInput, PayRunUncheckedCreateInput>
  }

  /**
   * PayRun createMany
   */
  export type PayRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayRuns.
     */
    data: PayRunCreateManyInput | PayRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayRun update
   */
  export type PayRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * The data needed to update a PayRun.
     */
    data: XOR<PayRunUpdateInput, PayRunUncheckedUpdateInput>
    /**
     * Choose, which PayRun to update.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun updateMany
   */
  export type PayRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayRuns.
     */
    data: XOR<PayRunUpdateManyMutationInput, PayRunUncheckedUpdateManyInput>
    /**
     * Filter which PayRuns to update
     */
    where?: PayRunWhereInput
    /**
     * Limit how many PayRuns to update.
     */
    limit?: number
  }

  /**
   * PayRun upsert
   */
  export type PayRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * The filter to search for the PayRun to update in case it exists.
     */
    where: PayRunWhereUniqueInput
    /**
     * In case the PayRun found by the `where` argument doesn't exist, create a new PayRun with this data.
     */
    create: XOR<PayRunCreateInput, PayRunUncheckedCreateInput>
    /**
     * In case the PayRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayRunUpdateInput, PayRunUncheckedUpdateInput>
  }

  /**
   * PayRun delete
   */
  export type PayRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
    /**
     * Filter which PayRun to delete.
     */
    where: PayRunWhereUniqueInput
  }

  /**
   * PayRun deleteMany
   */
  export type PayRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayRuns to delete
     */
    where?: PayRunWhereInput
    /**
     * Limit how many PayRuns to delete.
     */
    limit?: number
  }

  /**
   * PayRun.payslips
   */
  export type PayRun$payslipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    where?: PayslipWhereInput
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    cursor?: PayslipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * PayRun without action
   */
  export type PayRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayRun
     */
    select?: PayRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayRun
     */
    omit?: PayRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayRunInclude<ExtArgs> | null
  }


  /**
   * Model Payslip
   */

  export type AggregatePayslip = {
    _count: PayslipCountAggregateOutputType | null
    _avg: PayslipAvgAggregateOutputType | null
    _sum: PayslipSumAggregateOutputType | null
    _min: PayslipMinAggregateOutputType | null
    _max: PayslipMaxAggregateOutputType | null
  }

  export type PayslipAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
    payRunId: number | null
    brut: Decimal | null
    deductions: Decimal | null
    net: Decimal | null
  }

  export type PayslipSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
    payRunId: number | null
    brut: Decimal | null
    deductions: Decimal | null
    net: Decimal | null
  }

  export type PayslipMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    payRunId: number | null
    brut: Decimal | null
    deductions: Decimal | null
    net: Decimal | null
    status: $Enums.StatusPayslip | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayslipMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    payRunId: number | null
    brut: Decimal | null
    deductions: Decimal | null
    net: Decimal | null
    status: $Enums.StatusPayslip | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayslipCountAggregateOutputType = {
    id: number
    employeeId: number
    payRunId: number
    brut: number
    deductions: number
    net: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayslipAvgAggregateInputType = {
    id?: true
    employeeId?: true
    payRunId?: true
    brut?: true
    deductions?: true
    net?: true
  }

  export type PayslipSumAggregateInputType = {
    id?: true
    employeeId?: true
    payRunId?: true
    brut?: true
    deductions?: true
    net?: true
  }

  export type PayslipMinAggregateInputType = {
    id?: true
    employeeId?: true
    payRunId?: true
    brut?: true
    deductions?: true
    net?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayslipMaxAggregateInputType = {
    id?: true
    employeeId?: true
    payRunId?: true
    brut?: true
    deductions?: true
    net?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayslipCountAggregateInputType = {
    id?: true
    employeeId?: true
    payRunId?: true
    brut?: true
    deductions?: true
    net?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayslipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payslip to aggregate.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payslips
    **/
    _count?: true | PayslipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayslipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayslipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayslipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayslipMaxAggregateInputType
  }

  export type GetPayslipAggregateType<T extends PayslipAggregateArgs> = {
        [P in keyof T & keyof AggregatePayslip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayslip[P]>
      : GetScalarType<T[P], AggregatePayslip[P]>
  }




  export type PayslipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayslipWhereInput
    orderBy?: PayslipOrderByWithAggregationInput | PayslipOrderByWithAggregationInput[]
    by: PayslipScalarFieldEnum[] | PayslipScalarFieldEnum
    having?: PayslipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayslipCountAggregateInputType | true
    _avg?: PayslipAvgAggregateInputType
    _sum?: PayslipSumAggregateInputType
    _min?: PayslipMinAggregateInputType
    _max?: PayslipMaxAggregateInputType
  }

  export type PayslipGroupByOutputType = {
    id: number
    employeeId: number
    payRunId: number
    brut: Decimal
    deductions: Decimal
    net: Decimal
    status: $Enums.StatusPayslip
    createdAt: Date
    updatedAt: Date
    _count: PayslipCountAggregateOutputType | null
    _avg: PayslipAvgAggregateOutputType | null
    _sum: PayslipSumAggregateOutputType | null
    _min: PayslipMinAggregateOutputType | null
    _max: PayslipMaxAggregateOutputType | null
  }

  type GetPayslipGroupByPayload<T extends PayslipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayslipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayslipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayslipGroupByOutputType[P]>
            : GetScalarType<T[P], PayslipGroupByOutputType[P]>
        }
      >
    >


  export type PayslipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    payRunId?: boolean
    brut?: boolean
    deductions?: boolean
    net?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payRun?: boolean | PayRunDefaultArgs<ExtArgs>
    payments?: boolean | Payslip$paymentsArgs<ExtArgs>
    _count?: boolean | PayslipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payslip"]>



  export type PayslipSelectScalar = {
    id?: boolean
    employeeId?: boolean
    payRunId?: boolean
    brut?: boolean
    deductions?: boolean
    net?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayslipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "payRunId" | "brut" | "deductions" | "net" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payslip"]>
  export type PayslipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payRun?: boolean | PayRunDefaultArgs<ExtArgs>
    payments?: boolean | Payslip$paymentsArgs<ExtArgs>
    _count?: boolean | PayslipCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PayslipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payslip"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      payRun: Prisma.$PayRunPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      payRunId: number
      brut: Prisma.Decimal
      deductions: Prisma.Decimal
      net: Prisma.Decimal
      status: $Enums.StatusPayslip
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payslip"]>
    composites: {}
  }

  type PayslipGetPayload<S extends boolean | null | undefined | PayslipDefaultArgs> = $Result.GetResult<Prisma.$PayslipPayload, S>

  type PayslipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayslipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayslipCountAggregateInputType | true
    }

  export interface PayslipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payslip'], meta: { name: 'Payslip' } }
    /**
     * Find zero or one Payslip that matches the filter.
     * @param {PayslipFindUniqueArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayslipFindUniqueArgs>(args: SelectSubset<T, PayslipFindUniqueArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payslip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayslipFindUniqueOrThrowArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayslipFindUniqueOrThrowArgs>(args: SelectSubset<T, PayslipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payslip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipFindFirstArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayslipFindFirstArgs>(args?: SelectSubset<T, PayslipFindFirstArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payslip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipFindFirstOrThrowArgs} args - Arguments to find a Payslip
     * @example
     * // Get one Payslip
     * const payslip = await prisma.payslip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayslipFindFirstOrThrowArgs>(args?: SelectSubset<T, PayslipFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payslips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payslips
     * const payslips = await prisma.payslip.findMany()
     * 
     * // Get first 10 Payslips
     * const payslips = await prisma.payslip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payslipWithIdOnly = await prisma.payslip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayslipFindManyArgs>(args?: SelectSubset<T, PayslipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payslip.
     * @param {PayslipCreateArgs} args - Arguments to create a Payslip.
     * @example
     * // Create one Payslip
     * const Payslip = await prisma.payslip.create({
     *   data: {
     *     // ... data to create a Payslip
     *   }
     * })
     * 
     */
    create<T extends PayslipCreateArgs>(args: SelectSubset<T, PayslipCreateArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payslips.
     * @param {PayslipCreateManyArgs} args - Arguments to create many Payslips.
     * @example
     * // Create many Payslips
     * const payslip = await prisma.payslip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayslipCreateManyArgs>(args?: SelectSubset<T, PayslipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payslip.
     * @param {PayslipDeleteArgs} args - Arguments to delete one Payslip.
     * @example
     * // Delete one Payslip
     * const Payslip = await prisma.payslip.delete({
     *   where: {
     *     // ... filter to delete one Payslip
     *   }
     * })
     * 
     */
    delete<T extends PayslipDeleteArgs>(args: SelectSubset<T, PayslipDeleteArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payslip.
     * @param {PayslipUpdateArgs} args - Arguments to update one Payslip.
     * @example
     * // Update one Payslip
     * const payslip = await prisma.payslip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayslipUpdateArgs>(args: SelectSubset<T, PayslipUpdateArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payslips.
     * @param {PayslipDeleteManyArgs} args - Arguments to filter Payslips to delete.
     * @example
     * // Delete a few Payslips
     * const { count } = await prisma.payslip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayslipDeleteManyArgs>(args?: SelectSubset<T, PayslipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payslips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payslips
     * const payslip = await prisma.payslip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayslipUpdateManyArgs>(args: SelectSubset<T, PayslipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payslip.
     * @param {PayslipUpsertArgs} args - Arguments to update or create a Payslip.
     * @example
     * // Update or create a Payslip
     * const payslip = await prisma.payslip.upsert({
     *   create: {
     *     // ... data to create a Payslip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payslip we want to update
     *   }
     * })
     */
    upsert<T extends PayslipUpsertArgs>(args: SelectSubset<T, PayslipUpsertArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payslips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipCountArgs} args - Arguments to filter Payslips to count.
     * @example
     * // Count the number of Payslips
     * const count = await prisma.payslip.count({
     *   where: {
     *     // ... the filter for the Payslips we want to count
     *   }
     * })
    **/
    count<T extends PayslipCountArgs>(
      args?: Subset<T, PayslipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayslipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payslip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayslipAggregateArgs>(args: Subset<T, PayslipAggregateArgs>): Prisma.PrismaPromise<GetPayslipAggregateType<T>>

    /**
     * Group by Payslip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayslipGroupByArgs} args - Group by arguments.
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
      T extends PayslipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayslipGroupByArgs['orderBy'] }
        : { orderBy?: PayslipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayslipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayslipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payslip model
   */
  readonly fields: PayslipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payslip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayslipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payRun<T extends PayRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayRunDefaultArgs<ExtArgs>>): Prisma__PayRunClient<$Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Payslip$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Payslip$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payslip model
   */
  interface PayslipFieldRefs {
    readonly id: FieldRef<"Payslip", 'Int'>
    readonly employeeId: FieldRef<"Payslip", 'Int'>
    readonly payRunId: FieldRef<"Payslip", 'Int'>
    readonly brut: FieldRef<"Payslip", 'Decimal'>
    readonly deductions: FieldRef<"Payslip", 'Decimal'>
    readonly net: FieldRef<"Payslip", 'Decimal'>
    readonly status: FieldRef<"Payslip", 'StatusPayslip'>
    readonly createdAt: FieldRef<"Payslip", 'DateTime'>
    readonly updatedAt: FieldRef<"Payslip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payslip findUnique
   */
  export type PayslipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip findUniqueOrThrow
   */
  export type PayslipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip findFirst
   */
  export type PayslipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payslips.
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payslips.
     */
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Payslip findFirstOrThrow
   */
  export type PayslipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslip to fetch.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payslips.
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payslips.
     */
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Payslip findMany
   */
  export type PayslipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter, which Payslips to fetch.
     */
    where?: PayslipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payslips to fetch.
     */
    orderBy?: PayslipOrderByWithRelationInput | PayslipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payslips.
     */
    cursor?: PayslipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payslips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payslips.
     */
    skip?: number
    distinct?: PayslipScalarFieldEnum | PayslipScalarFieldEnum[]
  }

  /**
   * Payslip create
   */
  export type PayslipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * The data needed to create a Payslip.
     */
    data: XOR<PayslipCreateInput, PayslipUncheckedCreateInput>
  }

  /**
   * Payslip createMany
   */
  export type PayslipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payslips.
     */
    data: PayslipCreateManyInput | PayslipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payslip update
   */
  export type PayslipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * The data needed to update a Payslip.
     */
    data: XOR<PayslipUpdateInput, PayslipUncheckedUpdateInput>
    /**
     * Choose, which Payslip to update.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip updateMany
   */
  export type PayslipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payslips.
     */
    data: XOR<PayslipUpdateManyMutationInput, PayslipUncheckedUpdateManyInput>
    /**
     * Filter which Payslips to update
     */
    where?: PayslipWhereInput
    /**
     * Limit how many Payslips to update.
     */
    limit?: number
  }

  /**
   * Payslip upsert
   */
  export type PayslipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * The filter to search for the Payslip to update in case it exists.
     */
    where: PayslipWhereUniqueInput
    /**
     * In case the Payslip found by the `where` argument doesn't exist, create a new Payslip with this data.
     */
    create: XOR<PayslipCreateInput, PayslipUncheckedCreateInput>
    /**
     * In case the Payslip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayslipUpdateInput, PayslipUncheckedUpdateInput>
  }

  /**
   * Payslip delete
   */
  export type PayslipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
    /**
     * Filter which Payslip to delete.
     */
    where: PayslipWhereUniqueInput
  }

  /**
   * Payslip deleteMany
   */
  export type PayslipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payslips to delete
     */
    where?: PayslipWhereInput
    /**
     * Limit how many Payslips to delete.
     */
    limit?: number
  }

  /**
   * Payslip.payments
   */
  export type Payslip$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payslip without action
   */
  export type PayslipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payslip
     */
    select?: PayslipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payslip
     */
    omit?: PayslipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayslipInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    payslipId: number | null
    montant: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    payslipId: number | null
    montant: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    payslipId: number | null
    montant: Decimal | null
    mode: $Enums.ModePaiement | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    payslipId: number | null
    montant: Decimal | null
    mode: $Enums.ModePaiement | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    payslipId: number
    montant: number
    mode: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    payslipId?: true
    montant?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    payslipId?: true
    montant?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    payslipId?: true
    montant?: true
    mode?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    payslipId?: true
    montant?: true
    mode?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    payslipId?: true
    montant?: true
    mode?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    payslipId: number
    montant: Decimal
    mode: $Enums.ModePaiement
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payslipId?: boolean
    montant?: boolean
    mode?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payslip?: boolean | PayslipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    payslipId?: boolean
    montant?: boolean
    mode?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payslipId" | "montant" | "mode" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payslip?: boolean | PayslipDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      payslip: Prisma.$PayslipPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      payslipId: number
      montant: Prisma.Decimal
      mode: $Enums.ModePaiement
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payslip<T extends PayslipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayslipDefaultArgs<ExtArgs>>): Prisma__PayslipClient<$Result.GetResult<Prisma.$PayslipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly payslipId: FieldRef<"Payment", 'Int'>
    readonly montant: FieldRef<"Payment", 'Decimal'>
    readonly mode: FieldRef<"Payment", 'ModePaiement'>
    readonly date: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    poste: 'poste',
    typeContrat: 'typeContrat',
    tauxSalaire: 'tauxSalaire',
    joursTravailles: 'joursTravailles',
    coordonneesBancaires: 'coordonneesBancaires',
    actif: 'actif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const PayRunScalarFieldEnum: {
    id: 'id',
    periode: 'periode',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayRunScalarFieldEnum = (typeof PayRunScalarFieldEnum)[keyof typeof PayRunScalarFieldEnum]


  export const PayslipScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    payRunId: 'payRunId',
    brut: 'brut',
    deductions: 'deductions',
    net: 'net',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayslipScalarFieldEnum = (typeof PayslipScalarFieldEnum)[keyof typeof PayslipScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    payslipId: 'payslipId',
    montant: 'montant',
    mode: 'mode',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EmployeeOrderByRelevanceFieldEnum: {
    nom: 'nom',
    poste: 'poste',
    coordonneesBancaires: 'coordonneesBancaires'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


  export const PayRunOrderByRelevanceFieldEnum: {
    type: 'type'
  };

  export type PayRunOrderByRelevanceFieldEnum = (typeof PayRunOrderByRelevanceFieldEnum)[keyof typeof PayRunOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'TypeContrat'
   */
  export type EnumTypeContratFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeContrat'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'StatusPayRun'
   */
  export type EnumStatusPayRunFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPayRun'>
    


  /**
   * Reference to a field of type 'StatusPayslip'
   */
  export type EnumStatusPayslipFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPayslip'>
    


  /**
   * Reference to a field of type 'ModePaiement'
   */
  export type EnumModePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModePaiement'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    nom?: StringFilter<"Employee"> | string
    poste?: StringFilter<"Employee"> | string
    typeContrat?: EnumTypeContratFilter<"Employee"> | $Enums.TypeContrat
    tauxSalaire?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    joursTravailles?: IntNullableFilter<"Employee"> | number | null
    coordonneesBancaires?: StringNullableFilter<"Employee"> | string | null
    actif?: BoolFilter<"Employee"> | boolean
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    payslips?: PayslipListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    typeContrat?: SortOrder
    tauxSalaire?: SortOrder
    joursTravailles?: SortOrderInput | SortOrder
    coordonneesBancaires?: SortOrderInput | SortOrder
    actif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payslips?: PayslipOrderByRelationAggregateInput
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    nom?: StringFilter<"Employee"> | string
    poste?: StringFilter<"Employee"> | string
    typeContrat?: EnumTypeContratFilter<"Employee"> | $Enums.TypeContrat
    tauxSalaire?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    joursTravailles?: IntNullableFilter<"Employee"> | number | null
    coordonneesBancaires?: StringNullableFilter<"Employee"> | string | null
    actif?: BoolFilter<"Employee"> | boolean
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    payslips?: PayslipListRelationFilter
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    typeContrat?: SortOrder
    tauxSalaire?: SortOrder
    joursTravailles?: SortOrderInput | SortOrder
    coordonneesBancaires?: SortOrderInput | SortOrder
    actif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    nom?: StringWithAggregatesFilter<"Employee"> | string
    poste?: StringWithAggregatesFilter<"Employee"> | string
    typeContrat?: EnumTypeContratWithAggregatesFilter<"Employee"> | $Enums.TypeContrat
    tauxSalaire?: DecimalWithAggregatesFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    joursTravailles?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    coordonneesBancaires?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    actif?: BoolWithAggregatesFilter<"Employee"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type PayRunWhereInput = {
    AND?: PayRunWhereInput | PayRunWhereInput[]
    OR?: PayRunWhereInput[]
    NOT?: PayRunWhereInput | PayRunWhereInput[]
    id?: IntFilter<"PayRun"> | number
    periode?: DateTimeFilter<"PayRun"> | Date | string
    type?: StringFilter<"PayRun"> | string
    status?: EnumStatusPayRunFilter<"PayRun"> | $Enums.StatusPayRun
    createdAt?: DateTimeFilter<"PayRun"> | Date | string
    updatedAt?: DateTimeFilter<"PayRun"> | Date | string
    payslips?: PayslipListRelationFilter
  }

  export type PayRunOrderByWithRelationInput = {
    id?: SortOrder
    periode?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payslips?: PayslipOrderByRelationAggregateInput
    _relevance?: PayRunOrderByRelevanceInput
  }

  export type PayRunWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PayRunWhereInput | PayRunWhereInput[]
    OR?: PayRunWhereInput[]
    NOT?: PayRunWhereInput | PayRunWhereInput[]
    periode?: DateTimeFilter<"PayRun"> | Date | string
    type?: StringFilter<"PayRun"> | string
    status?: EnumStatusPayRunFilter<"PayRun"> | $Enums.StatusPayRun
    createdAt?: DateTimeFilter<"PayRun"> | Date | string
    updatedAt?: DateTimeFilter<"PayRun"> | Date | string
    payslips?: PayslipListRelationFilter
  }, "id">

  export type PayRunOrderByWithAggregationInput = {
    id?: SortOrder
    periode?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayRunCountOrderByAggregateInput
    _avg?: PayRunAvgOrderByAggregateInput
    _max?: PayRunMaxOrderByAggregateInput
    _min?: PayRunMinOrderByAggregateInput
    _sum?: PayRunSumOrderByAggregateInput
  }

  export type PayRunScalarWhereWithAggregatesInput = {
    AND?: PayRunScalarWhereWithAggregatesInput | PayRunScalarWhereWithAggregatesInput[]
    OR?: PayRunScalarWhereWithAggregatesInput[]
    NOT?: PayRunScalarWhereWithAggregatesInput | PayRunScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PayRun"> | number
    periode?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
    type?: StringWithAggregatesFilter<"PayRun"> | string
    status?: EnumStatusPayRunWithAggregatesFilter<"PayRun"> | $Enums.StatusPayRun
    createdAt?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayRun"> | Date | string
  }

  export type PayslipWhereInput = {
    AND?: PayslipWhereInput | PayslipWhereInput[]
    OR?: PayslipWhereInput[]
    NOT?: PayslipWhereInput | PayslipWhereInput[]
    id?: IntFilter<"Payslip"> | number
    employeeId?: IntFilter<"Payslip"> | number
    payRunId?: IntFilter<"Payslip"> | number
    brut?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    net?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFilter<"Payslip"> | $Enums.StatusPayslip
    createdAt?: DateTimeFilter<"Payslip"> | Date | string
    updatedAt?: DateTimeFilter<"Payslip"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    payRun?: XOR<PayRunScalarRelationFilter, PayRunWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type PayslipOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    brut?: SortOrder
    deductions?: SortOrder
    net?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    payRun?: PayRunOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type PayslipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PayslipWhereInput | PayslipWhereInput[]
    OR?: PayslipWhereInput[]
    NOT?: PayslipWhereInput | PayslipWhereInput[]
    employeeId?: IntFilter<"Payslip"> | number
    payRunId?: IntFilter<"Payslip"> | number
    brut?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    net?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFilter<"Payslip"> | $Enums.StatusPayslip
    createdAt?: DateTimeFilter<"Payslip"> | Date | string
    updatedAt?: DateTimeFilter<"Payslip"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    payRun?: XOR<PayRunScalarRelationFilter, PayRunWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type PayslipOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    brut?: SortOrder
    deductions?: SortOrder
    net?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayslipCountOrderByAggregateInput
    _avg?: PayslipAvgOrderByAggregateInput
    _max?: PayslipMaxOrderByAggregateInput
    _min?: PayslipMinOrderByAggregateInput
    _sum?: PayslipSumOrderByAggregateInput
  }

  export type PayslipScalarWhereWithAggregatesInput = {
    AND?: PayslipScalarWhereWithAggregatesInput | PayslipScalarWhereWithAggregatesInput[]
    OR?: PayslipScalarWhereWithAggregatesInput[]
    NOT?: PayslipScalarWhereWithAggregatesInput | PayslipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payslip"> | number
    employeeId?: IntWithAggregatesFilter<"Payslip"> | number
    payRunId?: IntWithAggregatesFilter<"Payslip"> | number
    brut?: DecimalWithAggregatesFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    deductions?: DecimalWithAggregatesFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    net?: DecimalWithAggregatesFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipWithAggregatesFilter<"Payslip"> | $Enums.StatusPayslip
    createdAt?: DateTimeWithAggregatesFilter<"Payslip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payslip"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    payslipId?: IntFilter<"Payment"> | number
    montant?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFilter<"Payment"> | $Enums.ModePaiement
    date?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    payslip?: XOR<PayslipScalarRelationFilter, PayslipWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    payslipId?: SortOrder
    montant?: SortOrder
    mode?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payslip?: PayslipOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    payslipId?: IntFilter<"Payment"> | number
    montant?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFilter<"Payment"> | $Enums.ModePaiement
    date?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    payslip?: XOR<PayslipScalarRelationFilter, PayslipWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    payslipId?: SortOrder
    montant?: SortOrder
    mode?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    payslipId?: IntWithAggregatesFilter<"Payment"> | number
    montant?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementWithAggregatesFilter<"Payment"> | $Enums.ModePaiement
    date?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type EmployeeCreateInput = {
    nom: string
    poste: string
    typeContrat: $Enums.TypeContrat
    tauxSalaire: Decimal | DecimalJsLike | number | string
    joursTravailles?: number | null
    coordonneesBancaires?: string | null
    actif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payslips?: PayslipCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    nom: string
    poste: string
    typeContrat: $Enums.TypeContrat
    tauxSalaire: Decimal | DecimalJsLike | number | string
    joursTravailles?: number | null
    coordonneesBancaires?: string | null
    actif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payslips?: PayslipUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    tauxSalaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    coordonneesBancaires?: NullableStringFieldUpdateOperationsInput | string | null
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslips?: PayslipUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    tauxSalaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    coordonneesBancaires?: NullableStringFieldUpdateOperationsInput | string | null
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslips?: PayslipUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    nom: string
    poste: string
    typeContrat: $Enums.TypeContrat
    tauxSalaire: Decimal | DecimalJsLike | number | string
    joursTravailles?: number | null
    coordonneesBancaires?: string | null
    actif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    tauxSalaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    coordonneesBancaires?: NullableStringFieldUpdateOperationsInput | string | null
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    tauxSalaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    coordonneesBancaires?: NullableStringFieldUpdateOperationsInput | string | null
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRunCreateInput = {
    periode: Date | string
    type: string
    status?: $Enums.StatusPayRun
    createdAt?: Date | string
    updatedAt?: Date | string
    payslips?: PayslipCreateNestedManyWithoutPayRunInput
  }

  export type PayRunUncheckedCreateInput = {
    id?: number
    periode: Date | string
    type: string
    status?: $Enums.StatusPayRun
    createdAt?: Date | string
    updatedAt?: Date | string
    payslips?: PayslipUncheckedCreateNestedManyWithoutPayRunInput
  }

  export type PayRunUpdateInput = {
    periode?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPayRunFieldUpdateOperationsInput | $Enums.StatusPayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslips?: PayslipUpdateManyWithoutPayRunNestedInput
  }

  export type PayRunUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    periode?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPayRunFieldUpdateOperationsInput | $Enums.StatusPayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslips?: PayslipUncheckedUpdateManyWithoutPayRunNestedInput
  }

  export type PayRunCreateManyInput = {
    id?: number
    periode: Date | string
    type: string
    status?: $Enums.StatusPayRun
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayRunUpdateManyMutationInput = {
    periode?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPayRunFieldUpdateOperationsInput | $Enums.StatusPayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRunUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    periode?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPayRunFieldUpdateOperationsInput | $Enums.StatusPayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayslipCreateInput = {
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPayslipsInput
    payRun: PayRunCreateNestedOneWithoutPayslipsInput
    payments?: PaymentCreateNestedManyWithoutPayslipInput
  }

  export type PayslipUncheckedCreateInput = {
    id?: number
    employeeId: number
    payRunId: number
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPayslipInput
  }

  export type PayslipUpdateInput = {
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPayslipsNestedInput
    payRun?: PayRunUpdateOneRequiredWithoutPayslipsNestedInput
    payments?: PaymentUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    payRunId?: IntFieldUpdateOperationsInput | number
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipCreateManyInput = {
    id?: number
    employeeId: number
    payRunId: number
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayslipUpdateManyMutationInput = {
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayslipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    payRunId?: IntFieldUpdateOperationsInput | number
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payslip: PayslipCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    payslipId: number
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payslip?: PayslipUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    payslipId?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    payslipId: number
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    payslipId?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTypeContratFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContrat | EnumTypeContratFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContrat[]
    notIn?: $Enums.TypeContrat[]
    not?: NestedEnumTypeContratFilter<$PrismaModel> | $Enums.TypeContrat
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PayslipListRelationFilter = {
    every?: PayslipWhereInput
    some?: PayslipWhereInput
    none?: PayslipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PayslipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    typeContrat?: SortOrder
    tauxSalaire?: SortOrder
    joursTravailles?: SortOrder
    coordonneesBancaires?: SortOrder
    actif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    tauxSalaire?: SortOrder
    joursTravailles?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    typeContrat?: SortOrder
    tauxSalaire?: SortOrder
    joursTravailles?: SortOrder
    coordonneesBancaires?: SortOrder
    actif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    poste?: SortOrder
    typeContrat?: SortOrder
    tauxSalaire?: SortOrder
    joursTravailles?: SortOrder
    coordonneesBancaires?: SortOrder
    actif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    tauxSalaire?: SortOrder
    joursTravailles?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTypeContratWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContrat | EnumTypeContratFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContrat[]
    notIn?: $Enums.TypeContrat[]
    not?: NestedEnumTypeContratWithAggregatesFilter<$PrismaModel> | $Enums.TypeContrat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeContratFilter<$PrismaModel>
    _max?: NestedEnumTypeContratFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusPayRunFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayRun | EnumStatusPayRunFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayRun[]
    notIn?: $Enums.StatusPayRun[]
    not?: NestedEnumStatusPayRunFilter<$PrismaModel> | $Enums.StatusPayRun
  }

  export type PayRunOrderByRelevanceInput = {
    fields: PayRunOrderByRelevanceFieldEnum | PayRunOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PayRunCountOrderByAggregateInput = {
    id?: SortOrder
    periode?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayRunAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PayRunMaxOrderByAggregateInput = {
    id?: SortOrder
    periode?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayRunMinOrderByAggregateInput = {
    id?: SortOrder
    periode?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayRunSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusPayRunWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayRun | EnumStatusPayRunFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayRun[]
    notIn?: $Enums.StatusPayRun[]
    not?: NestedEnumStatusPayRunWithAggregatesFilter<$PrismaModel> | $Enums.StatusPayRun
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPayRunFilter<$PrismaModel>
    _max?: NestedEnumStatusPayRunFilter<$PrismaModel>
  }

  export type EnumStatusPayslipFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayslip | EnumStatusPayslipFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayslip[]
    notIn?: $Enums.StatusPayslip[]
    not?: NestedEnumStatusPayslipFilter<$PrismaModel> | $Enums.StatusPayslip
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type PayRunScalarRelationFilter = {
    is?: PayRunWhereInput
    isNot?: PayRunWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayslipCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    brut?: SortOrder
    deductions?: SortOrder
    net?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayslipAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    brut?: SortOrder
    deductions?: SortOrder
    net?: SortOrder
  }

  export type PayslipMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    brut?: SortOrder
    deductions?: SortOrder
    net?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayslipMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    brut?: SortOrder
    deductions?: SortOrder
    net?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayslipSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    payRunId?: SortOrder
    brut?: SortOrder
    deductions?: SortOrder
    net?: SortOrder
  }

  export type EnumStatusPayslipWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayslip | EnumStatusPayslipFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayslip[]
    notIn?: $Enums.StatusPayslip[]
    not?: NestedEnumStatusPayslipWithAggregatesFilter<$PrismaModel> | $Enums.StatusPayslip
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPayslipFilter<$PrismaModel>
    _max?: NestedEnumStatusPayslipFilter<$PrismaModel>
  }

  export type EnumModePaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[]
    notIn?: $Enums.ModePaiement[]
    not?: NestedEnumModePaiementFilter<$PrismaModel> | $Enums.ModePaiement
  }

  export type PayslipScalarRelationFilter = {
    is?: PayslipWhereInput
    isNot?: PayslipWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    payslipId?: SortOrder
    montant?: SortOrder
    mode?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    payslipId?: SortOrder
    montant?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    payslipId?: SortOrder
    montant?: SortOrder
    mode?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    payslipId?: SortOrder
    montant?: SortOrder
    mode?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    payslipId?: SortOrder
    montant?: SortOrder
  }

  export type EnumModePaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[]
    notIn?: $Enums.ModePaiement[]
    not?: NestedEnumModePaiementWithAggregatesFilter<$PrismaModel> | $Enums.ModePaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModePaiementFilter<$PrismaModel>
    _max?: NestedEnumModePaiementFilter<$PrismaModel>
  }

  export type PayslipCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput> | PayslipCreateWithoutEmployeeInput[] | PayslipUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutEmployeeInput | PayslipCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayslipCreateManyEmployeeInputEnvelope
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
  }

  export type PayslipUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput> | PayslipCreateWithoutEmployeeInput[] | PayslipUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutEmployeeInput | PayslipCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayslipCreateManyEmployeeInputEnvelope
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTypeContratFieldUpdateOperationsInput = {
    set?: $Enums.TypeContrat
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PayslipUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput> | PayslipCreateWithoutEmployeeInput[] | PayslipUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutEmployeeInput | PayslipCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayslipUpsertWithWhereUniqueWithoutEmployeeInput | PayslipUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayslipCreateManyEmployeeInputEnvelope
    set?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    disconnect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    delete?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    update?: PayslipUpdateWithWhereUniqueWithoutEmployeeInput | PayslipUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayslipUpdateManyWithWhereWithoutEmployeeInput | PayslipUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PayslipUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput> | PayslipCreateWithoutEmployeeInput[] | PayslipUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutEmployeeInput | PayslipCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayslipUpsertWithWhereUniqueWithoutEmployeeInput | PayslipUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayslipCreateManyEmployeeInputEnvelope
    set?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    disconnect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    delete?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    update?: PayslipUpdateWithWhereUniqueWithoutEmployeeInput | PayslipUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayslipUpdateManyWithWhereWithoutEmployeeInput | PayslipUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
  }

  export type PayslipCreateNestedManyWithoutPayRunInput = {
    create?: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput> | PayslipCreateWithoutPayRunInput[] | PayslipUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutPayRunInput | PayslipCreateOrConnectWithoutPayRunInput[]
    createMany?: PayslipCreateManyPayRunInputEnvelope
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
  }

  export type PayslipUncheckedCreateNestedManyWithoutPayRunInput = {
    create?: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput> | PayslipCreateWithoutPayRunInput[] | PayslipUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutPayRunInput | PayslipCreateOrConnectWithoutPayRunInput[]
    createMany?: PayslipCreateManyPayRunInputEnvelope
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
  }

  export type EnumStatusPayRunFieldUpdateOperationsInput = {
    set?: $Enums.StatusPayRun
  }

  export type PayslipUpdateManyWithoutPayRunNestedInput = {
    create?: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput> | PayslipCreateWithoutPayRunInput[] | PayslipUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutPayRunInput | PayslipCreateOrConnectWithoutPayRunInput[]
    upsert?: PayslipUpsertWithWhereUniqueWithoutPayRunInput | PayslipUpsertWithWhereUniqueWithoutPayRunInput[]
    createMany?: PayslipCreateManyPayRunInputEnvelope
    set?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    disconnect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    delete?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    update?: PayslipUpdateWithWhereUniqueWithoutPayRunInput | PayslipUpdateWithWhereUniqueWithoutPayRunInput[]
    updateMany?: PayslipUpdateManyWithWhereWithoutPayRunInput | PayslipUpdateManyWithWhereWithoutPayRunInput[]
    deleteMany?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
  }

  export type PayslipUncheckedUpdateManyWithoutPayRunNestedInput = {
    create?: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput> | PayslipCreateWithoutPayRunInput[] | PayslipUncheckedCreateWithoutPayRunInput[]
    connectOrCreate?: PayslipCreateOrConnectWithoutPayRunInput | PayslipCreateOrConnectWithoutPayRunInput[]
    upsert?: PayslipUpsertWithWhereUniqueWithoutPayRunInput | PayslipUpsertWithWhereUniqueWithoutPayRunInput[]
    createMany?: PayslipCreateManyPayRunInputEnvelope
    set?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    disconnect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    delete?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    connect?: PayslipWhereUniqueInput | PayslipWhereUniqueInput[]
    update?: PayslipUpdateWithWhereUniqueWithoutPayRunInput | PayslipUpdateWithWhereUniqueWithoutPayRunInput[]
    updateMany?: PayslipUpdateManyWithWhereWithoutPayRunInput | PayslipUpdateManyWithWhereWithoutPayRunInput[]
    deleteMany?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutPayslipsInput = {
    create?: XOR<EmployeeCreateWithoutPayslipsInput, EmployeeUncheckedCreateWithoutPayslipsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayslipsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PayRunCreateNestedOneWithoutPayslipsInput = {
    create?: XOR<PayRunCreateWithoutPayslipsInput, PayRunUncheckedCreateWithoutPayslipsInput>
    connectOrCreate?: PayRunCreateOrConnectWithoutPayslipsInput
    connect?: PayRunWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutPayslipInput = {
    create?: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput> | PaymentCreateWithoutPayslipInput[] | PaymentUncheckedCreateWithoutPayslipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayslipInput | PaymentCreateOrConnectWithoutPayslipInput[]
    createMany?: PaymentCreateManyPayslipInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPayslipInput = {
    create?: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput> | PaymentCreateWithoutPayslipInput[] | PaymentUncheckedCreateWithoutPayslipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayslipInput | PaymentCreateOrConnectWithoutPayslipInput[]
    createMany?: PaymentCreateManyPayslipInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumStatusPayslipFieldUpdateOperationsInput = {
    set?: $Enums.StatusPayslip
  }

  export type EmployeeUpdateOneRequiredWithoutPayslipsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPayslipsInput, EmployeeUncheckedCreateWithoutPayslipsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayslipsInput
    upsert?: EmployeeUpsertWithoutPayslipsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPayslipsInput, EmployeeUpdateWithoutPayslipsInput>, EmployeeUncheckedUpdateWithoutPayslipsInput>
  }

  export type PayRunUpdateOneRequiredWithoutPayslipsNestedInput = {
    create?: XOR<PayRunCreateWithoutPayslipsInput, PayRunUncheckedCreateWithoutPayslipsInput>
    connectOrCreate?: PayRunCreateOrConnectWithoutPayslipsInput
    upsert?: PayRunUpsertWithoutPayslipsInput
    connect?: PayRunWhereUniqueInput
    update?: XOR<XOR<PayRunUpdateToOneWithWhereWithoutPayslipsInput, PayRunUpdateWithoutPayslipsInput>, PayRunUncheckedUpdateWithoutPayslipsInput>
  }

  export type PaymentUpdateManyWithoutPayslipNestedInput = {
    create?: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput> | PaymentCreateWithoutPayslipInput[] | PaymentUncheckedCreateWithoutPayslipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayslipInput | PaymentCreateOrConnectWithoutPayslipInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPayslipInput | PaymentUpsertWithWhereUniqueWithoutPayslipInput[]
    createMany?: PaymentCreateManyPayslipInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPayslipInput | PaymentUpdateWithWhereUniqueWithoutPayslipInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPayslipInput | PaymentUpdateManyWithWhereWithoutPayslipInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPayslipNestedInput = {
    create?: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput> | PaymentCreateWithoutPayslipInput[] | PaymentUncheckedCreateWithoutPayslipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayslipInput | PaymentCreateOrConnectWithoutPayslipInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPayslipInput | PaymentUpsertWithWhereUniqueWithoutPayslipInput[]
    createMany?: PaymentCreateManyPayslipInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPayslipInput | PaymentUpdateWithWhereUniqueWithoutPayslipInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPayslipInput | PaymentUpdateManyWithWhereWithoutPayslipInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PayslipCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PayslipCreateWithoutPaymentsInput, PayslipUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PayslipCreateOrConnectWithoutPaymentsInput
    connect?: PayslipWhereUniqueInput
  }

  export type EnumModePaiementFieldUpdateOperationsInput = {
    set?: $Enums.ModePaiement
  }

  export type PayslipUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PayslipCreateWithoutPaymentsInput, PayslipUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PayslipCreateOrConnectWithoutPaymentsInput
    upsert?: PayslipUpsertWithoutPaymentsInput
    connect?: PayslipWhereUniqueInput
    update?: XOR<XOR<PayslipUpdateToOneWithWhereWithoutPaymentsInput, PayslipUpdateWithoutPaymentsInput>, PayslipUncheckedUpdateWithoutPaymentsInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTypeContratFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContrat | EnumTypeContratFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContrat[]
    notIn?: $Enums.TypeContrat[]
    not?: NestedEnumTypeContratFilter<$PrismaModel> | $Enums.TypeContrat
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumTypeContratWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContrat | EnumTypeContratFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContrat[]
    notIn?: $Enums.TypeContrat[]
    not?: NestedEnumTypeContratWithAggregatesFilter<$PrismaModel> | $Enums.TypeContrat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeContratFilter<$PrismaModel>
    _max?: NestedEnumTypeContratFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusPayRunFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayRun | EnumStatusPayRunFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayRun[]
    notIn?: $Enums.StatusPayRun[]
    not?: NestedEnumStatusPayRunFilter<$PrismaModel> | $Enums.StatusPayRun
  }

  export type NestedEnumStatusPayRunWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayRun | EnumStatusPayRunFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayRun[]
    notIn?: $Enums.StatusPayRun[]
    not?: NestedEnumStatusPayRunWithAggregatesFilter<$PrismaModel> | $Enums.StatusPayRun
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPayRunFilter<$PrismaModel>
    _max?: NestedEnumStatusPayRunFilter<$PrismaModel>
  }

  export type NestedEnumStatusPayslipFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayslip | EnumStatusPayslipFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayslip[]
    notIn?: $Enums.StatusPayslip[]
    not?: NestedEnumStatusPayslipFilter<$PrismaModel> | $Enums.StatusPayslip
  }

  export type NestedEnumStatusPayslipWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPayslip | EnumStatusPayslipFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPayslip[]
    notIn?: $Enums.StatusPayslip[]
    not?: NestedEnumStatusPayslipWithAggregatesFilter<$PrismaModel> | $Enums.StatusPayslip
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPayslipFilter<$PrismaModel>
    _max?: NestedEnumStatusPayslipFilter<$PrismaModel>
  }

  export type NestedEnumModePaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[]
    notIn?: $Enums.ModePaiement[]
    not?: NestedEnumModePaiementFilter<$PrismaModel> | $Enums.ModePaiement
  }

  export type NestedEnumModePaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[]
    notIn?: $Enums.ModePaiement[]
    not?: NestedEnumModePaiementWithAggregatesFilter<$PrismaModel> | $Enums.ModePaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModePaiementFilter<$PrismaModel>
    _max?: NestedEnumModePaiementFilter<$PrismaModel>
  }

  export type PayslipCreateWithoutEmployeeInput = {
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
    payRun: PayRunCreateNestedOneWithoutPayslipsInput
    payments?: PaymentCreateNestedManyWithoutPayslipInput
  }

  export type PayslipUncheckedCreateWithoutEmployeeInput = {
    id?: number
    payRunId: number
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPayslipInput
  }

  export type PayslipCreateOrConnectWithoutEmployeeInput = {
    where: PayslipWhereUniqueInput
    create: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput>
  }

  export type PayslipCreateManyEmployeeInputEnvelope = {
    data: PayslipCreateManyEmployeeInput | PayslipCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PayslipUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PayslipWhereUniqueInput
    update: XOR<PayslipUpdateWithoutEmployeeInput, PayslipUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PayslipCreateWithoutEmployeeInput, PayslipUncheckedCreateWithoutEmployeeInput>
  }

  export type PayslipUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PayslipWhereUniqueInput
    data: XOR<PayslipUpdateWithoutEmployeeInput, PayslipUncheckedUpdateWithoutEmployeeInput>
  }

  export type PayslipUpdateManyWithWhereWithoutEmployeeInput = {
    where: PayslipScalarWhereInput
    data: XOR<PayslipUpdateManyMutationInput, PayslipUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PayslipScalarWhereInput = {
    AND?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
    OR?: PayslipScalarWhereInput[]
    NOT?: PayslipScalarWhereInput | PayslipScalarWhereInput[]
    id?: IntFilter<"Payslip"> | number
    employeeId?: IntFilter<"Payslip"> | number
    payRunId?: IntFilter<"Payslip"> | number
    brut?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    net?: DecimalFilter<"Payslip"> | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFilter<"Payslip"> | $Enums.StatusPayslip
    createdAt?: DateTimeFilter<"Payslip"> | Date | string
    updatedAt?: DateTimeFilter<"Payslip"> | Date | string
  }

  export type PayslipCreateWithoutPayRunInput = {
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPayslipsInput
    payments?: PaymentCreateNestedManyWithoutPayslipInput
  }

  export type PayslipUncheckedCreateWithoutPayRunInput = {
    id?: number
    employeeId: number
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPayslipInput
  }

  export type PayslipCreateOrConnectWithoutPayRunInput = {
    where: PayslipWhereUniqueInput
    create: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput>
  }

  export type PayslipCreateManyPayRunInputEnvelope = {
    data: PayslipCreateManyPayRunInput | PayslipCreateManyPayRunInput[]
    skipDuplicates?: boolean
  }

  export type PayslipUpsertWithWhereUniqueWithoutPayRunInput = {
    where: PayslipWhereUniqueInput
    update: XOR<PayslipUpdateWithoutPayRunInput, PayslipUncheckedUpdateWithoutPayRunInput>
    create: XOR<PayslipCreateWithoutPayRunInput, PayslipUncheckedCreateWithoutPayRunInput>
  }

  export type PayslipUpdateWithWhereUniqueWithoutPayRunInput = {
    where: PayslipWhereUniqueInput
    data: XOR<PayslipUpdateWithoutPayRunInput, PayslipUncheckedUpdateWithoutPayRunInput>
  }

  export type PayslipUpdateManyWithWhereWithoutPayRunInput = {
    where: PayslipScalarWhereInput
    data: XOR<PayslipUpdateManyMutationInput, PayslipUncheckedUpdateManyWithoutPayRunInput>
  }

  export type EmployeeCreateWithoutPayslipsInput = {
    nom: string
    poste: string
    typeContrat: $Enums.TypeContrat
    tauxSalaire: Decimal | DecimalJsLike | number | string
    joursTravailles?: number | null
    coordonneesBancaires?: string | null
    actif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUncheckedCreateWithoutPayslipsInput = {
    id?: number
    nom: string
    poste: string
    typeContrat: $Enums.TypeContrat
    tauxSalaire: Decimal | DecimalJsLike | number | string
    joursTravailles?: number | null
    coordonneesBancaires?: string | null
    actif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutPayslipsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPayslipsInput, EmployeeUncheckedCreateWithoutPayslipsInput>
  }

  export type PayRunCreateWithoutPayslipsInput = {
    periode: Date | string
    type: string
    status?: $Enums.StatusPayRun
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayRunUncheckedCreateWithoutPayslipsInput = {
    id?: number
    periode: Date | string
    type: string
    status?: $Enums.StatusPayRun
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayRunCreateOrConnectWithoutPayslipsInput = {
    where: PayRunWhereUniqueInput
    create: XOR<PayRunCreateWithoutPayslipsInput, PayRunUncheckedCreateWithoutPayslipsInput>
  }

  export type PaymentCreateWithoutPayslipInput = {
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutPayslipInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPayslipInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput>
  }

  export type PaymentCreateManyPayslipInputEnvelope = {
    data: PaymentCreateManyPayslipInput | PaymentCreateManyPayslipInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutPayslipsInput = {
    update: XOR<EmployeeUpdateWithoutPayslipsInput, EmployeeUncheckedUpdateWithoutPayslipsInput>
    create: XOR<EmployeeCreateWithoutPayslipsInput, EmployeeUncheckedCreateWithoutPayslipsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPayslipsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPayslipsInput, EmployeeUncheckedUpdateWithoutPayslipsInput>
  }

  export type EmployeeUpdateWithoutPayslipsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    tauxSalaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    coordonneesBancaires?: NullableStringFieldUpdateOperationsInput | string | null
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateWithoutPayslipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    typeContrat?: EnumTypeContratFieldUpdateOperationsInput | $Enums.TypeContrat
    tauxSalaire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    joursTravailles?: NullableIntFieldUpdateOperationsInput | number | null
    coordonneesBancaires?: NullableStringFieldUpdateOperationsInput | string | null
    actif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRunUpsertWithoutPayslipsInput = {
    update: XOR<PayRunUpdateWithoutPayslipsInput, PayRunUncheckedUpdateWithoutPayslipsInput>
    create: XOR<PayRunCreateWithoutPayslipsInput, PayRunUncheckedCreateWithoutPayslipsInput>
    where?: PayRunWhereInput
  }

  export type PayRunUpdateToOneWithWhereWithoutPayslipsInput = {
    where?: PayRunWhereInput
    data: XOR<PayRunUpdateWithoutPayslipsInput, PayRunUncheckedUpdateWithoutPayslipsInput>
  }

  export type PayRunUpdateWithoutPayslipsInput = {
    periode?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPayRunFieldUpdateOperationsInput | $Enums.StatusPayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayRunUncheckedUpdateWithoutPayslipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    periode?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPayRunFieldUpdateOperationsInput | $Enums.StatusPayRun
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutPayslipInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPayslipInput, PaymentUncheckedUpdateWithoutPayslipInput>
    create: XOR<PaymentCreateWithoutPayslipInput, PaymentUncheckedCreateWithoutPayslipInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPayslipInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPayslipInput, PaymentUncheckedUpdateWithoutPayslipInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPayslipInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPayslipInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    payslipId?: IntFilter<"Payment"> | number
    montant?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFilter<"Payment"> | $Enums.ModePaiement
    date?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PayslipCreateWithoutPaymentsInput = {
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutPayslipsInput
    payRun: PayRunCreateNestedOneWithoutPayslipsInput
  }

  export type PayslipUncheckedCreateWithoutPaymentsInput = {
    id?: number
    employeeId: number
    payRunId: number
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayslipCreateOrConnectWithoutPaymentsInput = {
    where: PayslipWhereUniqueInput
    create: XOR<PayslipCreateWithoutPaymentsInput, PayslipUncheckedCreateWithoutPaymentsInput>
  }

  export type PayslipUpsertWithoutPaymentsInput = {
    update: XOR<PayslipUpdateWithoutPaymentsInput, PayslipUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PayslipCreateWithoutPaymentsInput, PayslipUncheckedCreateWithoutPaymentsInput>
    where?: PayslipWhereInput
  }

  export type PayslipUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PayslipWhereInput
    data: XOR<PayslipUpdateWithoutPaymentsInput, PayslipUncheckedUpdateWithoutPaymentsInput>
  }

  export type PayslipUpdateWithoutPaymentsInput = {
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPayslipsNestedInput
    payRun?: PayRunUpdateOneRequiredWithoutPayslipsNestedInput
  }

  export type PayslipUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    payRunId?: IntFieldUpdateOperationsInput | number
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayslipCreateManyEmployeeInput = {
    id?: number
    payRunId: number
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayslipUpdateWithoutEmployeeInput = {
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payRun?: PayRunUpdateOneRequiredWithoutPayslipsNestedInput
    payments?: PaymentUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    payRunId?: IntFieldUpdateOperationsInput | number
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    payRunId?: IntFieldUpdateOperationsInput | number
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayslipCreateManyPayRunInput = {
    id?: number
    employeeId: number
    brut: Decimal | DecimalJsLike | number | string
    deductions?: Decimal | DecimalJsLike | number | string
    net: Decimal | DecimalJsLike | number | string
    status?: $Enums.StatusPayslip
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayslipUpdateWithoutPayRunInput = {
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutPayslipsNestedInput
    payments?: PaymentUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipUncheckedUpdateWithoutPayRunInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPayslipNestedInput
  }

  export type PayslipUncheckedUpdateManyWithoutPayRunInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    brut?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    net?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumStatusPayslipFieldUpdateOperationsInput | $Enums.StatusPayslip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyPayslipInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    mode: $Enums.ModePaiement
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutPayslipInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutPayslipInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutPayslipInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mode?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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