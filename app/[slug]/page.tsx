import { promisify } from 'node:util';
import fs from 'node:fs';
import path from 'node:path';
import CodeBlock from '@/components/app/CodeBlock';
import { COMPONENTS } from '@/data/components';
import ComponentPlayground from '@/components/app/ComponentPlayground';


async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);
  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    'utf8'
  );

  return fileContent;
}

export async function generateStaticParams() {
  const componentSlugs = COMPONENTS.map((component) => ({
    slug: component.slug,
  }));

  return componentSlugs;
}

export const dynamicParams = false;

// https://stackoverflow.com/questions/79124951/type-error-in-next-js-route-type-params-id-string-does-not-satis

const ComponentPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const param = await params;
  const currentComponentData = COMPONENTS.find(
    (component) => component.slug === param.slug
  );

  if (!currentComponentData) {
    return <div>Component not found</div>;
  }

  const filePath = `./components/lab/${
    currentComponentData?.type
  }/${currentComponentData?.name.replace(/\s+/g, '')}.tsx`;

  const code = await readFilePath(filePath);
  const twConfig = JSON.stringify(currentComponentData?.twConfig, null, 2);

  return (
    <div className='mt-10 pb-32'>
      <h1 className='text-md mb-2 font-light text-gray-400'>
        {currentComponentData.name}
      </h1>
      <div className='w-full'>
        <ComponentPlayground isCentered>
          <currentComponentData.component />
        </ComponentPlayground>
        <div className='mt-8'>
          <CodeBlock code={code} lang='tsx' />
        </div>
        {twConfig && (
          <div className='mt-8'>
            <CodeBlock
              code={twConfig}
              lang='tsx'
              fileName='tailwind.config.js'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentPage;
