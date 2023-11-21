import { ISkill } from '../component/skill/ISkill';

const Rendering: ISkill.Skill = {
  category: 'Rendering Library',
  items: [
    {
      title: 'wgpu',
      level: 2,
    },
    {
      title: 'openGL',
      level: 2,
    },
    {
      title: 'WebGL',
      level: 2,
    },
    {
      title: 'DirectX',
      level: 2,
    },
    {
      title: 'WebAssembly',
      level: 1,
    },
  ],
};

const Server: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'C# (.Net Core)',
      level: 3,
    },
    {
      title: 'Javascript (Node.js)',
      level: 3,
    },
    {
      title: 'Go',
      level:2,
    },
    {
      title: 'Rust',
      level:2,
    },
    {
      title: 'HTML/CSS',
      level: 1,
    }
  ],
};

const etc: ISkill.Skill = {
  category: 'Infra',
  items: [
    {title: 'AWS',},
    {title: 'Linux(Ubuntu)',},
    { title: 'Docker' },
    { title: 'Nginx' },
    {title: 'Jenkins',},
    { title: 'Redmine' },
    // { title: 'Wikijs' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [Server, Rendering, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
