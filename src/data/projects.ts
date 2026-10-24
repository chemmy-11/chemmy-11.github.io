import type { Locale } from './site';

export interface L {
  zh: string;
  en: string;
}

export type Status = 'prototype' | 'building' | 'released';

export interface Spec {
  k: string;
  v: L;
}

export interface Project {
  id: string;
  index: string;
  title: L;
  tagline: L;
  role: L;
  repo: string;
  url: string;
  status: Status;
  updated: string;
  specs: Spec[];
  narrative: { problem: L; decision: L; result: L };
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'eif',
    index: '2.1',
    title: { zh: 'EIF · Edge Interconnect Fabric', en: 'EIF · Edge Interconnect Fabric' },
    tagline: {
      zh: '面向边缘多节点协作的 FPGA 高速互联平台——从物理链路到帧队列，通路整条自己搭。',
      en: 'An FPGA interconnect fabric for edge multi-node collaboration: link to frame queue, built by hand.',
    },
    role: { zh: '独立完成架构与实现', en: 'Sole architect & implementer' },
    repo: 'chemmy-11/EIF',
    url: 'https://github.com/chemmy-11/EIF',
    status: 'prototype',
    updated: '2026-10-24',
    specs: [
      { k: 'platform', v: { zh: 'Kintex UltraScale KU060', en: 'Kintex UltraScale KU060' } },
      { k: 'link', v: { zh: 'Aurora 10G · 两条链路已验证', en: 'Aurora 10G · two links validated' } },
      { k: 'buffer', v: { zh: 'DDR4 帧队列吸收突发', en: 'DDR4 frame queue for bursts' } },
      { k: 'softcore', v: { zh: 'MicroBlaze + AXI DMA 搬运', en: 'MicroBlaze + AXI DMA' } },
      {
        k: 'toolchain',
        v: {
          zh: 'Vivado 流程 · dsh-vivado（32 工具 MCP 聚合）',
          en: 'Vivado flow · dsh-vivado (32-tool MCP bundle)',
        },
      },
    ],
    narrative: {
      problem: {
        zh: '边缘节点之间要么走普通以太网，延迟与抖动不可控；要么依赖整机方案，代价高且黑盒。缺一条自己能完全掌握的高速通道。',
        en: 'Between edge nodes, plain Ethernet gives uncontrollable latency and jitter, while turnkey solutions are costly and opaque. Nothing gave me a high-speed path I fully owned.',
      },
      decision: {
        zh: '直接在 KU060 上自建：Aurora 10G 管链路与对齐，DDR4 帧队列吸收突发，MicroBlaze 经 AXI DMA 搬运，每一级的计数都可读。',
        en: 'Build it on the KU060: Aurora 10G for the link and alignment, a DDR4 frame queue to absorb bursts, MicroBlaze moving data over AXI DMA, with counters readable at every stage.',
      },
      result: {
        zh: '两条链路已完成验证，帧队列与路由仍在对比取舍，架构尚未定型——这是一份进行中的工程记录，不是成果展示。',
        en: 'Two links are validated; the frame-queue and routing choices are still being compared and the architecture is not final. A work log, not a victory lap.',
      },
    },
    tags: ['VHDL', 'Vivado', 'Aurora 10G', 'DDR4', 'AXI DMA', 'MicroBlaze'],
  },
  {
    id: 'dsh-nautilus',
    index: '2.2',
    title: { zh: 'dsh-nautilus · 库观测插件', en: 'dsh-nautilus · Vault Observability Plugin' },
    tagline: {
      zh: '给 Agent 宿主加一层"看得见"：把知识库的元数据与编辑行为变成可查询的观测面板。',
      en: 'A visible layer on the agent host: vault metadata and edit activity turned into a queryable panel.',
    },
    role: { zh: '独立设计与开发', en: 'Independent design & development' },
    repo: 'chemmy-11/dsh-nautilus',
    url: 'https://github.com/chemmy-11/dsh-nautilus',
    status: 'building',
    updated: '2026-09-29',
    specs: [
      { k: 'host', v: { zh: 'DeepSeek Harness 插件体系', en: 'DeepSeek Harness plugin host' } },
      { k: 'lang', v: { zh: 'TypeScript', en: 'TypeScript' } },
      { k: 'feed', v: { zh: 'Vault 元数据快照', en: 'Vault metadata snapshot' } },
      { k: 'metrics', v: { zh: '编辑统计', en: 'Edit statistics' } },
      { k: 'signals', v: { zh: '1 ★ · 5 个 open issue 在收', en: '1 ★ · 5 open issues in progress' } },
    ],
    narrative: {
      problem: {
        zh: 'Agent 在本地知识库上读写，人很难判断它究竟改了什么、多久改一次，排查只能翻日志。',
        en: 'An agent reads and writes a local vault, and it is hard to tell what it actually changed or how often — debugging meant reading logs.',
      },
      decision: {
        zh: '做成宿主内的插件而不是外挂脚本：优先低成本可观测，快照 + 统计先进面板，不做全量索引。',
        en: 'Ship it as a plugin inside the host rather than an external script: cheap observability first — snapshot and stats in the panel, no full-text index.',
      },
      result: {
        zh: '插件已可用并在持续迭代，open issue 逐个收口。观测面越薄越准，是当前最主要的判断。',
        en: 'The plugin works and is iterating; open issues are being closed one by one. The thinner the observability surface, the sharper it gets — that is the current lesson.',
      },
    },
    tags: ['TypeScript', 'MCP', 'Agent Runtime', 'Obsidian', 'Plugin'],
  },
];

export const toolkit: { group: L; items: string[] }[] = [
  {
    group: { zh: '硬件与互连', en: 'Hardware & interconnect' },
    items: ['VHDL', 'Verilog', 'AXI / AXI DMA', 'Aurora 10G', 'DDR4', 'MicroBlaze', 'Kintex UltraScale'],
  },
  {
    group: { zh: '流程与工具链', en: 'Flow & toolchain' },
    items: ['Vivado', 'Vitis', 'Tcl', '仿真 / 时序收敛', 'Git + Actions'],
  },
  {
    group: { zh: '软件与运行时', en: 'Software & runtime' },
    items: ['TypeScript', 'JavaScript', 'Node', 'Linux', 'REST / SSE'],
  },
  {
    group: { zh: 'Agent 基础设施', en: 'Agent infrastructure' },
    items: ['MCP', 'DeepSeek Harness 插件', '工具编排', '可观测性'],
  },
];

export function pick(field: L, locale: Locale): string {
  return field[locale];
}
