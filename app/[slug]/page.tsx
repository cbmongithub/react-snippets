import { promisify } from 'node:util';
import fs from 'node:fs';
import path from 'node:path';
import CodeBlock from '@/components/app/CodeBlock';
import { COMPONENTS } from '@/data/components';
import ComponentPlayground from '@/components/app/ComponentPlayground';
import BackButton from '@/components/app/BackButton';

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);
  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    'utf8',
  );

  return fileContent;
}

export async function generateStaticParams() {
  return COMPONENTS.map(({ slug }) => ({
    slug: slug,
  }));
}

export const dynamicParams = false;

// https://stackoverflow.com/questions/79124951/type-error-in-next-js-route-type-params-id-string-does-not-satis

const ComponentPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const param = await params;
  const comp = COMPONENTS.find(
    ({ slug }) => slug === param.slug,
  );

  if (!comp) {
    return <div>Component not found</div>;
  }

  const filePath = `./components/lab/${
    comp?.type
    }/${comp?.name.replace(/\s+/g, '')}.tsx`;

  const code = await readFilePath(filePath);
  const css = JSON.stringify(comp?.css, null, 2);
  return (
    <div className='space-y-16 px-6'>
      <div className='flex flex-row justify-between items-center'>
        <BackButton />
        <h1 className='text-md font-light text-neutral-400'>
          {comp.name}
      </h1>
      </div>
      <div className='w-full'>
        <ComponentPlayground isCentered>
          <comp.component />
        </ComponentPlayground>
        <div className='mt-8'>
          <CodeBlock code={code} lang='tsx' />
        </div>
        {css && (
          <div className='mt-8'>
            <CodeBlock
              code={JSON.parse(css)}
              lang='css'
              title='globals.css'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentPage;
