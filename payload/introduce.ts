import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    // '게임 클라이언트 개발자로 시작하여, 렌더링, 실시간 게임 서버, 웹서버 등 다양한 분야들을 시도해보고 있는 호기심 많은 개발자입니다.',
    // '주된 업무로 게임 클라이언트 개발을 하고 있으며, 최근 신규 프로젝트에서는 클라이언트 뿐만 아니라, 빌드 머신 세팅, 테스트 서버, 라이브 서버 같은 게임 서버 인프라 구축도 해보았습니다.',
    // '그 외 개인 서버를 운영하면서 서버 인프라에 대한 다양한 시도를 해보고 있습니다.',
    '서버 개발자로서 게임 클라이언트 개발을 시작으로 렌더링, 실시간 게임 서버, 웹 서버 등 다양한 분야에 도전하며 끊임없이 성장해온 호기심 많은 개발자입니다.',
    'Golang과 Rust와 같은 최신 언어에 깊은 관심을 가지고 있으며, 업무 외 시간에도 다양한 개인 프로젝트를 통해 새로운 기술을 탐구하고 있습니다. ',
    '이러한 경험을 바탕으로 확장 가능하고 안정적인 고성능 시스템을 구축하는 데 주력하고 있으며, 최적화된 코드와 효율적인 서버 아키텍처 설계를 통해 높은 수준의 품질을 추구하고 있습니다.',
    '지속적인 학습과 도전을 통해 기술적 역량을 강화하고, 팀과 함께 혁신적인 솔루션을 만들어 나가는 데 기여하고자 합니다.',
  ],
  sign: 'Lavumi',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
