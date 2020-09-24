/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenRootTypes {
  Category: { // root type
    id: string; // ID!
    name: string; // String!
  }
  Mutation: {};
  Product: { // root type
    description: string; // String!
    id: string; // ID!
    name: string; // String!
    price: number; // Int!
    sku: string; // String!
  }
  Query: {};
  Review: { // root type
    body: string; // String!
    id: string; // ID!
    title: string; // String!
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
}

export interface NexusGenFieldTypes {
  Category: { // field return type
    id: string; // ID!
    name: string; // String!
    products: NexusGenRootTypes['Product'][]; // [Product!]!
  }
  Mutation: { // field return type
    categorizeProduct: NexusGenRootTypes['Product']; // Product!
    createCategory: NexusGenRootTypes['Category']; // Category!
    createProduct: NexusGenRootTypes['Product']; // Product!
    createReview: NexusGenRootTypes['Review']; // Review!
  }
  Product: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    description: string; // String!
    id: string; // ID!
    name: string; // String!
    price: number; // Int!
    reviews: NexusGenRootTypes['Review'][]; // [Review!]!
    sku: string; // String!
  }
  Query: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    reviews: NexusGenRootTypes['Review'][]; // [Review!]!
  }
  Review: { // field return type
    body: string; // String!
    id: string; // ID!
    title: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    categorizeProduct: { // args
      categoryId: string; // String!
      productId: string; // String!
    }
    createCategory: { // args
      name: string; // String!
    }
    createProduct: { // args
      description: string; // String!
      name: string; // String!
      price: number; // Int!
      sku: string; // String!
    }
    createReview: { // args
      body: string; // String!
      productId: string; // String!
      title: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Category" | "Mutation" | "Product" | "Query" | "Review";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}