import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Game Engine',
  items: [
    {
      title: 'CocosCreator',
      level: 3,
    },
    {
      title: 'Cocos2d-x',
      level: 3,
    },
    {
      title: 'Cocos2d-js',
      level: 3,
    },
    {
      title: 'Unity',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Rendering Library',
  items: [
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

const frontend: ISkill.Skill = {
  category: 'Server-side',
  items: [
    {
      title: 'Node.js',
      level: 2,
    },
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'MYSQL',
      level: 2,
    },
    {
      title: 'PostgreSQL',
      level: 1,
    },
    // {
    //   title: 'HTML/CSS',
    //   level: 1,
    // }
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Linux(Ubuntu)',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Slack',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
