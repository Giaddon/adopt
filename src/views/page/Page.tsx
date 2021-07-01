import React from 'react';
import { PageProps } from '../../utils/types';

const Page = ({title, text}: PageProps) => {

  let paragraphs = [];
  for (let p of text) {
    paragraphs.push(<p className="summary shadowed-text">{p}</p>)
  }
  
  return (
    <div className="page">
      <h1 className="title shadowed-text">{title}</h1>
      <div className="seperator"></div>
      {paragraphs}
    </div>
  )
}

export default Page;