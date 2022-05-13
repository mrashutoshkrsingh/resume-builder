import Link from 'next/link';
import Image from 'next/image';
import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import FeatureCard from './components/FeatureCard';
import PersonCard from './components/PersonCard';
import { Button } from '@mui/material';
import 'animate.css';
import { useEffect } from 'react';

const HomeLayout = () => {
  useEffect(() => {
    const element = document.querySelector('#resume-3d')!;

    element.addEventListener('mouseenter', function () {
      element.classList.remove('animate__animated');
      element.classList.remove('animate__headShake');
      element.classList.remove('animate__delay-1s');

      setTimeout(() => {
        element.classList.add('animate__animated');
        element.classList.add('animate__headShake');
      }, 100);
    });
  }, []);

  return (
    <div className="scroll-smooth">
      <div style={{ background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%);' }}>
        <nav className="h-14 w-full bg-resume-800 relative flex py-2.5 px-4 xl:px-60 items-center">
          <a href="/" className="flex items-center">
            <Image src={'/icons/resume-icon.png'} alt="logo" height={'36px'} width={'36px'} />
          </a>
          <div className="flex-auto flex justify-between items-center ml-5">
            <NavBarActions>
              <Link href="/builder" passHref={true}>
                <StyledButton variant="text">Editor</StyledButton>
              </Link>
            </NavBarActions>
            <NavBarActions>
              <Link href="#contribute" passHref={true}>
                <StyledButton variant="text">Contribute</StyledButton>
              </Link>
              <Link href="#about-us" passHref={true}>
                <StyledButton variant="text">About us</StyledButton>
              </Link>
              {/* <StyledButton variant="outlined">Export as PDF</StyledButton> */}
            </NavBarActions>
          </div>
        </nav>

        <div className="mx-6 md:mx-40 xl:mx-60 my-6">
          <div className="grid grid-cols-12 mt-12 md:mt-24">
            <div className="col-span-12 sm:col-span-4">
              <img
                id="resume-3d"
                src={'/resume.png'}
                alt="resume-3d"
                className="animate__animated animate__headShake animate__delay-1s w-6/12 sm:w-9/12"
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h3
                className="text-xl md:text-2xl mb-2 text-resume-400"
                style={{ fontFamily: "'Roboto Condensed', serif" }}
              >
                SIMPLEST WAY TO BUILD A
              </h3>
              <h1
                className="text-5xl mb-12 text-resume-800"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Professional Resume
              </h1>

              <div className="flex mb-10">
                <div
                  style={{
                    backgroundColor: '#2E4052',
                    width: '3px',
                    padding: '1px',
                    borderRadius: '8px',
                  }}
                ></div>
                <p
                  className="text-lg ml-3 text-resume-800"
                  style={{ fontFamily: "'Kalam', serif" }}
                >
                  &ldquo;The secret to getting ahead is getting started&rdquo;
                  <br />
                  —Mark Twain
                </p>
              </div>
              <Link href="/builder" passHref={true}>
                <Button variant="contained" className="bg-resume-800 mb-2">
                  BUILD YOUR RESUME
                </Button>
              </Link>
              <p
                className="xl:invisible text-resume-800"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Desktop screen recommended
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-6 md:mx-40 xl:mx-60 my-32 w-75"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* These cards are written in JSX because I do not know Typescript */}
          <FeatureCard number={1} />
          <FeatureCard number={2} />
          <FeatureCard number={3} />
          <FeatureCard number={4} />
        </div>
      </div>

      <div
        id="contribute"
        className="mx-6 md:mx-40 xl:mx-60 my-32"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <div className="grid grid-cols-12 items-center text-center">
          <div className="col-span-12 lg:col-span-4 mb-4 lg:mb-0">
            <Image src={'/icons/palette.svg'} alt="logo" height={'48px'} width={'48px'} />
            <p className="text-resume-800 text-xl mt-2">
              Do you want to make your own <strong>template?</strong>
            </p>
          </div>
          <div className="col-span-12 lg:col-span-1 mb-4 lg:mb-0 text-resume-800 text-4xl">
            <p>+</p>
          </div>
          <div className="col-span-12 lg:col-span-2 flex-col">
            <Image src={'/icons/terminal.svg'} alt="logo" height={'48px'} width={'48px'} />
            <p className="text-resume-800 text-xl mt-2">
              Do you write <strong>React</strong> code?
            </p>
          </div>
          <div className="invisible lg:visible lg:col-span-2 text-resume-800 text-4xl mx-6">
            <p>=</p>
          </div>
          <div className="col-span-12 lg:col-span-3 flex-col mx-auto">
            <Image src={'/icons/wave.svg'} alt="logo" height={'48px'} width={'48px'} />
            <a
              href="https://github.com/sadanandpai/resume-builder"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="contained" className="block bg-resume-800 mt-2 lg:mt-5 mb-3">
                CONTRIBUTE
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div
        id="about-us"
        className="mx-6 md:mx-40 xl:mx-60 my-32"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <h2 className="text-3xl mb-2 text-center lg:text-left">About us</h2>
        <p className="text-resume-400 mb-8 text-center lg:text-left">
          A bunch of developers and designers — who love to build open source projects and learn
          along!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <PersonCard number={1} />
          <PersonCard number={2} />
          <PersonCard number={3} />
          <PersonCard number={4} />
          <PersonCard number={5} />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
