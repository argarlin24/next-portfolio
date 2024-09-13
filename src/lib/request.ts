import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { request as graphqlRequest, Variables } from 'graphql-request';
import { RequestDocument } from 'graphql-request';

export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
) {
  return graphqlRequest<TDocument, Variables>('https://graphql.datocms.com/', document, variables, {
    Authorization: process.env.DATO_CMS_TOKEN as string,
  });
}
