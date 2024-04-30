import { useRouter } from 'next/router';
import apiList from '../api-list.json';
import { useEffect, useState } from 'react';
import { RedocStandalone } from 'redoc';

const RedocIndex = () => {
  const router = useRouter();
  const [api, setApi] = useState();

  useEffect(() => {
    setApi((currentApi) => apiList.find((apiItem) => apiItem.slug === router.query.api));
  }, [router.query.api]);

  return (
    <RedocStandalone
      specUrl={api?.url}
      options={{
        nativeScrollbars: true,
        scrollYOffset: 60,
        theme: {
          colors: { primary: { main: '#32329f' } }
        }
      }}
    />
  );
};

export default RedocIndex;
