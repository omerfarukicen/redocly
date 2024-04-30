import SelectApi from '../components/SelectApi';

const UIDemoApp = ({ Component, pageProps }) => {
  return (
    <>
      <header>
        <SelectApi />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default UIDemoApp;
