import { Code } from 'bright';
import CopyButton from './CopyButton';

import githubDark from '@/lib/theme.json';

type CodeBlockProps = {
  code: string;
  lang: string;
  title?: string;
};

Code.theme = githubDark as unknown as Record<string, string>;

const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang, title }) => {
  return (
    <div className='relative rounded-md border border-neutral-900'>
      {title && (
        <div className='absolute left-4 top-4'>
          <span className='text-sm text-neutral-400'>{title}</span>
        </div>
      )}
      <div className='absolute right-4 top-4 z-10'>
        <CopyButton code={code} />
      </div>
      <div className='relative overflow-x-auto pt-0 mb-[-10px] px-6'>
        <Code code={code} lang={lang} />
      </div>
    </div>
  );
};

export default CodeBlock;
