import { Link } from 'react-router-dom';
import Button from './Button';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';


function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <header className="sticky flex flex-wrap bg-white sm:flex-col md:flex-row place-items-center justify-between mx-auto sm:w-[100%] md:w-[80%] md:rounded-[10px] min-h-[65px] top-0 left-0 border-b [border-bottom-style:solid] border-[#e5e8ea]">

      <div className="flex w-[95.34px] h-[65px] place-items-center">
        <div className="w-[20px] h-[16px] m-auto">
          <img className="w-[12px] h-[13px] m-auto " alt="Vector" src="./images/Logo.png" />
        </div>
        <div className="md:items-start sm:place-items-center self-stretch w-full m-auto">
          <Link to='/' className="relative w-fit mt-[-1.00px] font-bold text-variable-collection-secondary-2 align-middle text-[18px] tracking-[-0.27px] leading-[22.5px] ">
            FinTrackr
          </Link>
        </div>
      </div>

      {isAuthenticated === false ?
        <div className='flex flex-row content-center px-[20px] py-[10px] bg-blue-100 my-auto rounded-2xl '>
          <LoginButton />
        </div> : <Button text="Dashboard" link="/Dashboard"/>}

    </header>
  );
};

export default Header