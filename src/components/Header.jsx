import React from 'react';

const Header = ({ category, title }) => (
  <div className=" mb-10">
    <p className="text-lg text-pink-500">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-600">
      {title}
    </p>
  </div>
);

export default Header;
