import { ISkill } from '../component/skill/ISkill';

const GameEngine: ISkill.Skill = {
  category: 'Client Framework',
  items: [
    {
      title: 'CocosCreator',
      level: 3,
    },
    {
      title: 'Cocos2d-x, Cocos2d-js',
      level: 3,
    },
    {
      title: 'React-native',
      level: 2,
    },
    {
      title: 'Unity',
      level: 2,
    },
  ],
};

const Rendering: ISkill.Skill = {
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

const Server: ISkill.Skill = {
  category: 'Server-side',
  items: [
    {
      title: 'C# (.Net Core)',
      level: 3,
    },
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'Java (Spring)',
      level: 2,
    },
    {
      title: 'Mysql',
      level: 2,
    },
    // {
    //   title: 'HTML/CSS',
    //   level: 1,
    // }
  ],
};

const etc: ISkill.Skill = {
  category: 'Infra',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'Linux(Ubuntu)',
    },
    { title: 'Docker' },
    { title: 'Nginx' },
    {
      title: 'Jenkins',
    },
    { title: 'Redmine' },
    { title: 'Wikijs' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [Server, GameEngine, Rendering, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
