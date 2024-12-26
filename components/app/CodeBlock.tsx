import { Code } from 'bright';
import CopyCode from './CopyCode';

import githubDark from '@/lib/theme.json';

type CodeBlockProps = {
  code: string;
  lang: string;
  title?: string;
};

Code.theme = githubDark as unknown as Record<string, string>;

const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang, title }) => {
  return (
    <div className='relative rounded-md border border-gray-900 bg-black'>
      {title ? (
        <div className='absolute left-4 top-4'>
          <span className='text-sm text-gray-400'>{title}</span>
        </div>
      ) : null}
      <div className='absolute right-4 top-4 z-10'>
        <CopyCode code={code} />
      </div>
      <div className='relative overflow-x-auto pt-10'>
        <Code code={code} lang={lang} />
      </div>
    </div>
  );
};

export default CodeBlock;
