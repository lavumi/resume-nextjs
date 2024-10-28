import { ISkill } from '../component/skill/ISkill';

const Rendering: ISkill.Skill = {
  category: 'Rendering',
  items: [
    {
      title: 'wgpu (Vulkan)',
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
  category: 'Backend',
  items: [
    {
      title: 'C# (.Net Core)',
      level: 3,
    },
    {
      title: 'Javascript (Express)',
      level: 3,
    },
    {
      title: 'Go (Gin)',
      level: 3,
    },
    {
      title: 'Java (Spring Boot)',
      level: 2,
    },
    {
      title: 'Python (Fast API)',
      level: 2,
    },
    {
      title: 'Rust',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const Front: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'Typescript (Next.js)',
      level: 2,
    },
    {
      title: 'Bootstrap',
      level: 2,
    },
    {
      title: 'HTML, CSS, Pure JS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Infra',
  items: [
    { title: 'AWS' },
    { title: 'Linux(Ubuntu)' },
    { title: 'Docker' },
    { title: 'Nginx' },
    { title: 'Jenkins' },
    { title: 'Redmine' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [Server, Front, Rendering, etc],
  tooltip:
    '1: 기본 문법 이해 (취미 수준)\n2: 기존 프레임워크 기반 개발 가능\n3: 프로젝트 설계 및 리드 가능',
};

export default skill;
