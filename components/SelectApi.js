import Select from 'react-select';
import apiList from '../api-list.json';
import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SelectApi = ({ autoFocus }) => {
  const router = useRouter();

  const [api, setApi] = useState();

  useEffect(() => {
    setApi(() => apiList.find((apiItem) => apiItem.slug === router.query.api));
  }, [router.query.api]);

  const changeApi = useCallback((val) => {
    router.push(val.slug);
    setApi(() => apiList.find((apiItem) => apiItem.url === val.url));
  }, []);

  return (
    <Select
      className="select__api"
      autoFocus={autoFocus}
      onChange={changeApi}
      options={apiList}
      value={api}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.url}
      noOptionsMessage={() => 'No api found'}
      placeholder={'Search Api...'}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: '#32329f'
        }
      })}
    />
  );
};

export default SelectApi;
