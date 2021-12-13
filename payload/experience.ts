import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '플라이셔 (Flysher)',
      position: '클라이언트 개발자',
      startedAt: '2018-08',
      endedAt: '2021-11',
      descriptions: [
        '모바일 게임 개발',
        '라이브 서비스 게임 개발 및 유지 보수',
        '실시간 MO Action 게임 Nopickles 개발',
      ],
      skillKeywords: ['Node.js', 'TypeScript', 'Cocos2d-x', 'javascript', 'Cocos Creator'],
    },
    {
      startedAt: '2016-05',
      endedAt: '2018-05',
      descriptions: [
        '독학사 컴퓨터 과학 학사 취득',
        'DirectX 를 사용하여 렌더링 공부, 개발',
        'SGA 온라인게임 통합과정 수료',
      ],
      skillKeywords: ['C++', 'DirectX'],
    },
    {
      title: '토키 스튜디오(Talki Studio)',
      position: '인턴',
      startedAt: '2015-12',
      endedAt: '2016-04',
      descriptions: ['Unity 3D Game 클라이언트 개발'],
      skillKeywords: ['Unity3d', 'C#'],
    },
  ],
};

export default experience;

// import { IExperience } from '../component/experience/IExperience';

// const experience: IExperience.Payload = {
//   disable: false,
//   list: [
//     {
//       title: 'Flysher',
//       position: 'Client Developer',
//       startedAt: '2018-08',
//       descriptions: [
//         'Web html to Mobile Porting',
//         'Social casino game maintanance',
//         'RealTime MO Action game Developing',
//       ],
//       skillKeywords: ['Node.js', 'TypeScript', 'Cocos2d-x', 'javascript'],
//     },
//     {
//       title: 'Talki Studio',
//       position: 'Developer Intern',
//       startedAt: '2015-12',
//       endedAt: '2016-04',
//       descriptions: [
//         '3D Run game client programmer',
//         'Curve map, curve movement and map tool for it',
//         'Network Synchronization',
//       ],
//       skillKeywords: ['Unity3d', 'C#'],
//     },
//   ],
// };

// export default experience;
