import type { Locale } from '../data/site';
import type { L, Status } from '../data/projects';

interface Copy {
  meta_title: string;
  meta_desc: string;
  skip_link: string;
  nav: { work: string; toolkit: string; contact: string };
  hero_prompt: string;
  hero_line1: string;
  hero_line2: string;
  hero_sub: string;
  facts: { k: string; v: string }[];
  about: { kicker: string; title: string; body: string };
  work: { kicker: string; title: string; index_label: string };
  toolkit: { kicker: string; title: string };
  contact: { kicker: string; title: string };
  narrative: { problem: string; decision: string; result: string };
  labels: { mail: string; repo: string; site: string; role: string; status: string; updated: string; resume: string };
  status: Record<Status, string>;
  lang_label: string;
  lang_other: string;
  theme_label: string;
  theme_light: string;
  theme_dark: string;
  theme_system: string;
  footer_note: string;
  notfound_title: string;
  notfound_body: string;
  notfound_back: string;
}

export const copy: Record<Locale, Copy> = {
  zh: {
    meta_title: 'chemmy · AI 基础设施',
    meta_desc: 'FPGA 高速互联与 Agent 运行时观测——从硬件到运行时的独立开发者。',
    skip_link: '跳到正文',
    nav: { work: '作品', toolkit: '技术栈', contact: '联系' },
    hero_prompt: 'chemmy@linslive ~ whoami --field role',
    hero_line1: 'AI 基础设施',
    hero_line2: '从互连到运行时',
    hero_sub: '把模型与硬件之间的每一跳，做成可测量的东西。',
    facts: [
      { k: 'target', v: 'AI Infrastructure 岗位' },
      { k: 'focus', v: '互连 · 数据通路 · 运行时可观测' },
      { k: 'writes', v: 'VHDL / TypeScript' },
      { k: 'git', v: 'github.com/chemmy-11' },
    ],
    about: {
      kicker: '01 — PROFILE',
      title: '关于',
      body: '硬件出身，自己做完整条链路：从 FPGA 上的高速互连与 DMA 通路，到 Agent 宿主的观测插件。写 VHDL 也写 TypeScript，关心的始终是同一件事——数据怎样流过系统，以及怎么把它测出来。',
    },
    work: { kicker: '02 — SELECTED WORK', title: '精选作品', index_label: '作品' },
    toolkit: { kicker: '03 — TOOLKIT', title: '技术栈' },
    contact: { kicker: '04 — CONTACT', title: '联系' },
    narrative: { problem: '问题', decision: '取舍', result: '结果' },
    labels: {
      mail: '邮箱',
      repo: '代码',
      site: '站点',
      role: '角色',
      status: '状态',
      updated: '更新',
      resume: '简历',
    },
    status: { prototype: '原型', building: '推进中', released: '已上线' },
    lang_label: '语言',
    lang_other: 'English',
    theme_label: '主题',
    theme_light: '浅色',
    theme_dark: '深色',
    theme_system: '跟随系统',
    footer_note: '© 2026 chemmy · linslive.com · 用 Astro 手工搭建',
    notfound_title: '页面不存在',
    notfound_body: '这个路径下没有东西。',
    notfound_back: '回首页',
  },
  en: {
    meta_title: 'chemmy · AI Infrastructure',
    meta_desc: 'FPGA high-speed interconnect and agent-runtime observability — an independent developer from hardware up.',
    skip_link: 'Skip to content',
    nav: { work: 'Work', toolkit: 'Toolkit', contact: 'Contact' },
    hero_prompt: 'chemmy@linslive ~ whoami --field role',
    hero_line1: 'AI infrastructure,',
    hero_line2: 'from interconnect to runtime',
    hero_sub: 'Making every hop between the model and the hardware measurable.',
    facts: [
      { k: 'target', v: 'AI Infrastructure roles' },
      { k: 'focus', v: 'Interconnect · data paths · runtime observability' },
      { k: 'writes', v: 'VHDL / TypeScript' },
      { k: 'git', v: 'github.com/chemmy-11' },
    ],
    about: {
      kicker: '01 — PROFILE',
      title: 'Profile',
      body: 'Hardware-first, shipping end to end: high-speed interconnect and DMA paths on an FPGA, and an observability plugin inside an agent host. I write VHDL and TypeScript, and keep asking one question — how data moves through a system, and how it gets measured.',
    },
    work: { kicker: '02 — SELECTED WORK', title: 'Selected work', index_label: 'Work' },
    toolkit: { kicker: '03 — TOOLKIT', title: 'Toolkit' },
    contact: { kicker: '04 — CONTACT', title: 'Contact' },
    narrative: { problem: 'Problem', decision: 'Trade-off', result: 'Result' },
    labels: {
      mail: 'Email',
      repo: 'Code',
      site: 'Site',
      role: 'Role',
      status: 'Status',
      updated: 'Updated',
      resume: 'Résumé',
    },
    status: { prototype: 'prototype', building: 'building', released: 'released' },
    lang_label: 'Language',
    lang_other: '中文',
    theme_label: 'Theme',
    theme_light: 'Light',
    theme_dark: 'Dark',
    theme_system: 'System',
    footer_note: '© 2026 chemmy · linslive.com · hand-built with Astro',
    notfound_title: 'Not found',
    notfound_body: 'Nothing lives at this path.',
    notfound_back: 'Back home',
  },
};

export const statusLed: Record<Status, 'ok' | 'warn'> = {
  prototype: 'warn',
  building: 'warn',
  released: 'ok',
};

export function t(locale: Locale, field: L): string {
  return field[locale];
}
