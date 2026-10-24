export type Locale = 'zh' | 'en';

export const locales: Locale[] = ['zh', 'en'];
export const defaultLocale: Locale = 'zh';

export const site = {
  name: 'chemmy',
  domain: 'linslive.com',
  email: '1526685254@qq.com',
  github: 'https://github.com/chemmy-11',
  githubHandle: 'chemmy-11',
  /** 把 PDF 放进 public/resume.pdf 后改成 '/resume.pdf'；留空则不渲染简历入口 */
  resumeHref: '',
};
