import type { FC } from 'react';

import {
  AllTemplatePagesSlugsDocument,
  AllTemplatePagesSlugsQuery,
  TemplatePageDocument,
  TemplatePageQuery,
} from '../../graphql/generated';
import { request } from '../../lib/request';
import componentGenerator from '../../utils/componentGenerator';

interface PageProps {
  params: {
    slug: string[];
  };
}

export const generateStaticParams = async () => {
  const data: AllTemplatePagesSlugsQuery = await request<AllTemplatePagesSlugsQuery>(AllTemplatePagesSlugsDocument);

  const paths = data.allTemplatePages.map(page => ({
    params: {
      slug: [page?.slug],
    },
  }));

  return paths;
};

const Page: FC<PageProps> = async ({ params }) => {
  const slug = !params.slug ? 'homepage' : params.slug.join('/');

  const pageData: TemplatePageQuery = await request<TemplatePageQuery>(TemplatePageDocument, { slug });
  const components = pageData.templatePage?.components;

  return <main>{componentGenerator(components)}</main>;
};

export default Page;
