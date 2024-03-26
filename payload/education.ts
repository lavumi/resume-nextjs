import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [

    {
      title: '평생교육진흥원 컴퓨터 과학',
      subTitle: 'Completion',
      startedAt: '2017-08',
      endedAt: '2018-02',
    },
    {
      title: 'SGA 온라인 게임 통합과정',
      subTitle: 'Completion',
      startedAt: '2017-06',
      endedAt: '2018-02'
    },
    {
      title: '한양대학교 의학과',
      subTitle: 'Drop out',
      startedAt: '2005-03',
      endedAt: '2013-02',
    },
    {
      title: '세화 고등학교',
      subTitle: 'Graduated',
      startedAt: '2003-03',
      endedAt: '2005-02',
    },
  ],
};

export default education;
