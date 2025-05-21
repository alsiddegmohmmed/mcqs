// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { PAGE_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Prepare Smarter,
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Score Higher
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/celebration.svg"
              sx={{ width: 16, height: 16 }}
              alt="celebration"
              loading="lazy"
            />
          }
        />
      </>
    )
  },
  headLine: 'Master MCQ Exams with Smart Practice & Real Progress.',
  captionLine: 'Take placement tests, practice smarter, and track your results.',
  primaryBtn: { children: 'Take a Free Placement Test', href: PAGE_PATH.placementTest},
  // videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/saasable-intro.mp4',
  videoThumbnail: '/assets/images/headingHome/MCQ.png',   
  listData: [
    // { image: '/assets/images/shared/react.svg', title: 'React 19' },
    // { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    // { image: '/assets/images/shared/material-ui.svg', title: 'Material UI v7' },
    // { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    // { image: '/assets/images/shared/javascript.svg', title: 'JavaScript' },
    // { image: '/assets/images/shared/m3.svg', title: 'Material 3' },
    // { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
