// @mui
import Stack from '@mui/material/Stack';

// @project
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import Simulator from '@/components/Simulator';
import SimulatorTypeset from '@/components/SimulatorTypeset';
import { PRIVIEW_PATH, SECTION_PATH } from '@/path';
import { FIGMA_LINK } from '@/utils/constant';

/***************************  NAVBAR - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Components', to: SECTION_PATH },
  { title: 'Navbar' }
];

/***************************  NAVBAR - DATA  ***************************/

const caption =
  'Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.';

const sectionsData = [
  {
    typeset: { heading: 'Default navbar section 10', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar10 },
    src: PRIVIEW_PATH.navbar.navbar10
  },
];

/***************************  SECTIONS - NAVBAR  ***************************/

export default function Navbar() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Navbar Section`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          {sectionsData.map((item, index) => (
            <Stack key={index} sx={{ gap: { xs: 1.5, md: 2.5 } }}>
              <SimulatorTypeset {...item.typeset} />
              <Simulator src={item.src} defaultHeight={320} />
            </Stack>
          ))}
        </Stack>
      </ContainerWrapper>
    </>
  );
}
