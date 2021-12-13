import favicon from '../asset/favicon.ico';
import previewImage from '../asset/profile.png';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Kim Do Young Resume Page';
const description = '김도영의 이력서';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '김',
        lastName: '도영',
        username: 'Lavumi',
        gender: 'male',
      },
    },
  },
};
