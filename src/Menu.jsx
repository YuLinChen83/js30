import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="flex flex-col m-8">
    <p className="mb-8">想寫點什麼但沒靈感所以從 js30 開始吧(?</p>
    <Link to="/1" className="hover:text-indigo-900">
      01 - JavaScript Drum Kit
    </Link>
  </div>
);

export default Menu;
