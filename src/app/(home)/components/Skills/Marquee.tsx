// components/Marquee.tsx

'use client';

import { memo } from 'react';

import { useMarqueeAnimation } from './Marquee.anime';
import styles from './Skills.module.scss';

interface MarqueeProps {
  review: Array<Array<{ text: string; image: string }>>;
}

const Marquee = memo(function Marquee({ review }: MarqueeProps) {
  const ref = useMarqueeAnimation();

  return (
    <div className={styles.marquee} ref={ref}>
      {review.map((reviewRow, i) => (
        <h3 key={i} aria-hidden='true'>
          <SkillRow row={reviewRow} />
        </h3>
      ))}
    </div>
  );
});

interface SkillRowProps {
  row: Array<{ text: string; image: string }>;
}

const SkillRow = memo(function SkillRow({ row }: SkillRowProps) {
  return [...row, ...row].map((item, index) => (
    <span key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
      <img src={item.image} alt={`Reviewer ${index + 1}`} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
      {item.text}
    </span>
  ));
});

export default Marquee;