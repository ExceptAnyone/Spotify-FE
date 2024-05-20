import type { SVGProps } from 'react';
const SvgIcArtist2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 43 42'
    {...props}
  >
    <circle cx={21.121} cy={21} r={21} fill='url(#ic_artist2_svg__a)' />
    <defs>
      <pattern
        id='ic_artist2_svg__a'
        width={1}
        height={1}
        patternContentUnits='objectBoundingBox'
      >
        <use xlinkHref='#ic_artist2_svg__b' transform='scale(.00083)' />
      </pattern>
      <image
        id='ic_artist2_svg__b'
        width={1200}
        height={1200}
      />
    </defs>
  </svg>
);
export default SvgIcArtist2;