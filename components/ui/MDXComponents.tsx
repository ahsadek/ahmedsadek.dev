import Pre from 'pliny/ui/Pre';
import TOCInline from 'pliny/ui/TOCInline';
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm';
import type { MDXComponents } from 'mdx/types';

import { Link, TableWrapper, Twemoji } from '@/components/ui';

import Image from '@/components/ui/Image';

const components: MDXComponents = {
  Image,
  TOCInline,
  Twemoji,
  a: Link,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
};

export default components;
