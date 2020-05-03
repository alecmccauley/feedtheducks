import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
   __typename?: 'Query';
  Feeding?: Maybe<Feeding>;
  Feedings: Array<Feeding>;
  RecurringFeedings: Array<RecurringFeeding>;
};


export type QueryFeedingArgs = {
  id: Scalars['String'];
};

export type Feeding = {
   __typename?: 'Feeding';
  id: Scalars['ID'];
  numberOfDucks: Scalars['Float'];
  dateTime: Scalars['DateTime'];
  location: Geo;
  howMuchFood: Scalars['Float'];
  name: Scalars['String'];
  typeOfFood: Scalars['String'];
};


export type Geo = {
   __typename?: 'Geo';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type RecurringFeeding = {
   __typename?: 'RecurringFeeding';
  id: Scalars['ID'];
  numberOfDucks: Scalars['Float'];
  dateTime: Scalars['DateTime'];
  location: Geo;
  howMuchFood: Scalars['Float'];
  name: Scalars['String'];
  typeOfFood: Scalars['String'];
  active: Scalars['Boolean'];
};

export type Mutation = {
   __typename?: 'Mutation';
  addFeeding: Feeding;
  ToggleRecurringFeedingActive: Scalars['Boolean'];
};


export type MutationAddFeedingArgs = {
  data: AddFeedingInput;
};


export type MutationToggleRecurringFeedingActiveArgs = {
  id: Scalars['String'];
};

/** New feeding data */
export type AddFeedingInput = {
  name: Scalars['String'];
  numberOfDucks: Scalars['Float'];
  dateTime: Scalars['DateTime'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  howMuchFood: Scalars['Float'];
  typeOfFood: Scalars['String'];
  recurring: Scalars['Boolean'];
};

export type AddFeedingMutationVariables = {
  data: AddFeedingInput;
};


export type AddFeedingMutation = (
  { __typename?: 'Mutation' }
  & { addFeeding: (
    { __typename?: 'Feeding' }
    & Pick<Feeding, 'id' | 'numberOfDucks' | 'name'>
    & { location: (
      { __typename?: 'Geo' }
      & Pick<Geo, 'lat' | 'lng'>
    ) }
  ) }
);

export type GetFeedingsQueryVariables = {};


export type GetFeedingsQuery = (
  { __typename?: 'Query' }
  & { Feedings: Array<(
    { __typename?: 'Feeding' }
    & Pick<Feeding, 'id' | 'dateTime' | 'name' | 'howMuchFood' | 'typeOfFood' | 'numberOfDucks'>
    & { location: (
      { __typename?: 'Geo' }
      & Pick<Geo, 'lat' | 'lng'>
    ) }
  )> }
);

export type GetRecurringQueryVariables = {};


export type GetRecurringQuery = (
  { __typename?: 'Query' }
  & { RecurringFeedings: Array<(
    { __typename?: 'RecurringFeeding' }
    & Pick<RecurringFeeding, 'id' | 'active' | 'name' | 'numberOfDucks'>
    & { location: (
      { __typename?: 'Geo' }
      & Pick<Geo, 'lat' | 'lng'>
    ) }
  )> }
);

export type ToggleFeedingMutationVariables = {
  id: Scalars['String'];
};


export type ToggleFeedingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ToggleRecurringFeedingActive'>
);


export const AddFeedingDocument = gql`
    mutation AddFeeding($data: AddFeedingInput!) {
  addFeeding(data: $data) {
    id
    numberOfDucks
    location {
      lat
      lng
    }
    name
  }
}
    `;
export type AddFeedingMutationFn = ApolloReactCommon.MutationFunction<AddFeedingMutation, AddFeedingMutationVariables>;
export type AddFeedingComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddFeedingMutation, AddFeedingMutationVariables>, 'mutation'>;

    export const AddFeedingComponent = (props: AddFeedingComponentProps) => (
      <ApolloReactComponents.Mutation<AddFeedingMutation, AddFeedingMutationVariables> mutation={AddFeedingDocument} {...props} />
    );
    
export type AddFeedingProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddFeedingMutation, AddFeedingMutationVariables>
    } & TChildProps;
export function withAddFeeding<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddFeedingMutation,
  AddFeedingMutationVariables,
  AddFeedingProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddFeedingMutation, AddFeedingMutationVariables, AddFeedingProps<TChildProps, TDataName>>(AddFeedingDocument, {
      alias: 'addFeeding',
      ...operationOptions
    });
};

/**
 * __useAddFeedingMutation__
 *
 * To run a mutation, you first call `useAddFeedingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFeedingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFeedingMutation, { data, loading, error }] = useAddFeedingMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddFeedingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFeedingMutation, AddFeedingMutationVariables>) {
        return ApolloReactHooks.useMutation<AddFeedingMutation, AddFeedingMutationVariables>(AddFeedingDocument, baseOptions);
      }
export type AddFeedingMutationHookResult = ReturnType<typeof useAddFeedingMutation>;
export type AddFeedingMutationResult = ApolloReactCommon.MutationResult<AddFeedingMutation>;
export type AddFeedingMutationOptions = ApolloReactCommon.BaseMutationOptions<AddFeedingMutation, AddFeedingMutationVariables>;
export const GetFeedingsDocument = gql`
    query GetFeedings {
  Feedings {
    id
    dateTime
    name
    howMuchFood
    typeOfFood
    numberOfDucks
    location {
      lat
      lng
    }
  }
}
    `;
export type GetFeedingsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetFeedingsQuery, GetFeedingsQueryVariables>, 'query'>;

    export const GetFeedingsComponent = (props: GetFeedingsComponentProps) => (
      <ApolloReactComponents.Query<GetFeedingsQuery, GetFeedingsQueryVariables> query={GetFeedingsDocument} {...props} />
    );
    
export type GetFeedingsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetFeedingsQuery, GetFeedingsQueryVariables>
    } & TChildProps;
export function withGetFeedings<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetFeedingsQuery,
  GetFeedingsQueryVariables,
  GetFeedingsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetFeedingsQuery, GetFeedingsQueryVariables, GetFeedingsProps<TChildProps, TDataName>>(GetFeedingsDocument, {
      alias: 'getFeedings',
      ...operationOptions
    });
};

/**
 * __useGetFeedingsQuery__
 *
 * To run a query within a React component, call `useGetFeedingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeedingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeedingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeedingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFeedingsQuery, GetFeedingsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFeedingsQuery, GetFeedingsQueryVariables>(GetFeedingsDocument, baseOptions);
      }
export function useGetFeedingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFeedingsQuery, GetFeedingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFeedingsQuery, GetFeedingsQueryVariables>(GetFeedingsDocument, baseOptions);
        }
export type GetFeedingsQueryHookResult = ReturnType<typeof useGetFeedingsQuery>;
export type GetFeedingsLazyQueryHookResult = ReturnType<typeof useGetFeedingsLazyQuery>;
export type GetFeedingsQueryResult = ApolloReactCommon.QueryResult<GetFeedingsQuery, GetFeedingsQueryVariables>;
export const GetRecurringDocument = gql`
    query GetRecurring {
  RecurringFeedings {
    id
    active
    name
    location {
      lat
      lng
    }
    numberOfDucks
  }
}
    `;
export type GetRecurringComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetRecurringQuery, GetRecurringQueryVariables>, 'query'>;

    export const GetRecurringComponent = (props: GetRecurringComponentProps) => (
      <ApolloReactComponents.Query<GetRecurringQuery, GetRecurringQueryVariables> query={GetRecurringDocument} {...props} />
    );
    
export type GetRecurringProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetRecurringQuery, GetRecurringQueryVariables>
    } & TChildProps;
export function withGetRecurring<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetRecurringQuery,
  GetRecurringQueryVariables,
  GetRecurringProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetRecurringQuery, GetRecurringQueryVariables, GetRecurringProps<TChildProps, TDataName>>(GetRecurringDocument, {
      alias: 'getRecurring',
      ...operationOptions
    });
};

/**
 * __useGetRecurringQuery__
 *
 * To run a query within a React component, call `useGetRecurringQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecurringQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecurringQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecurringQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRecurringQuery, GetRecurringQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRecurringQuery, GetRecurringQueryVariables>(GetRecurringDocument, baseOptions);
      }
export function useGetRecurringLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRecurringQuery, GetRecurringQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRecurringQuery, GetRecurringQueryVariables>(GetRecurringDocument, baseOptions);
        }
export type GetRecurringQueryHookResult = ReturnType<typeof useGetRecurringQuery>;
export type GetRecurringLazyQueryHookResult = ReturnType<typeof useGetRecurringLazyQuery>;
export type GetRecurringQueryResult = ApolloReactCommon.QueryResult<GetRecurringQuery, GetRecurringQueryVariables>;
export const ToggleFeedingDocument = gql`
    mutation ToggleFeeding($id: String!) {
  ToggleRecurringFeedingActive(id: $id)
}
    `;
export type ToggleFeedingMutationFn = ApolloReactCommon.MutationFunction<ToggleFeedingMutation, ToggleFeedingMutationVariables>;
export type ToggleFeedingComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ToggleFeedingMutation, ToggleFeedingMutationVariables>, 'mutation'>;

    export const ToggleFeedingComponent = (props: ToggleFeedingComponentProps) => (
      <ApolloReactComponents.Mutation<ToggleFeedingMutation, ToggleFeedingMutationVariables> mutation={ToggleFeedingDocument} {...props} />
    );
    
export type ToggleFeedingProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ToggleFeedingMutation, ToggleFeedingMutationVariables>
    } & TChildProps;
export function withToggleFeeding<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ToggleFeedingMutation,
  ToggleFeedingMutationVariables,
  ToggleFeedingProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ToggleFeedingMutation, ToggleFeedingMutationVariables, ToggleFeedingProps<TChildProps, TDataName>>(ToggleFeedingDocument, {
      alias: 'toggleFeeding',
      ...operationOptions
    });
};

/**
 * __useToggleFeedingMutation__
 *
 * To run a mutation, you first call `useToggleFeedingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFeedingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFeedingMutation, { data, loading, error }] = useToggleFeedingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleFeedingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleFeedingMutation, ToggleFeedingMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleFeedingMutation, ToggleFeedingMutationVariables>(ToggleFeedingDocument, baseOptions);
      }
export type ToggleFeedingMutationHookResult = ReturnType<typeof useToggleFeedingMutation>;
export type ToggleFeedingMutationResult = ApolloReactCommon.MutationResult<ToggleFeedingMutation>;
export type ToggleFeedingMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleFeedingMutation, ToggleFeedingMutationVariables>;