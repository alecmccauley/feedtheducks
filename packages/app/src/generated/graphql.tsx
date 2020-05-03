import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
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
};

export type Query = {
   __typename?: 'Query';
  Feeding?: Maybe<Feeding>;
  Feedings: Array<Feeding>;
};


export type QueryFeedingArgs = {
  id: Scalars['Int'];
};

export type Feeding = {
   __typename?: 'Feeding';
  id: Scalars['ID'];
  numberOfDucks: Scalars['Float'];
};

export type Mutation = {
   __typename?: 'Mutation';
  addFeeding: Feeding;
};

export type GetFeedingsQueryVariables = {};


export type GetFeedingsQuery = (
  { __typename?: 'Query' }
  & { Feedings: Array<(
    { __typename?: 'Feeding' }
    & Pick<Feeding, 'id' | 'numberOfDucks'>
  )> }
);


export const GetFeedingsDocument = gql`
    query GetFeedings {
  Feedings {
    id
    numberOfDucks
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