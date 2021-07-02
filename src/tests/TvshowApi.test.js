import axios from 'axios';

import {getAllShows , getTvShows, getSingleShow} from '../service/TvshowsApi'

jest.mock('axios');

test('should fetch all Tv shows api ', () => {
  const showName = [{name: 'war'}];
  const resp = {data: showName};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return getAllShows().then(data => expect(data).toEqual(showName));

});


test('should have search related shows', () => {
    const search = [{name: 'war'}];
    const resp = {data: search};
    axios.get.mockResolvedValue(resp);
  
    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
  
    return getTvShows().then(data => expect(data).toEqual(search));
  });

  test('should have single show details ', () => {
    const clickShow = [{name: 'war'}];
    const resp = {data: clickShow};
    axios.get.mockResolvedValue(resp);
  
    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
  
    return getSingleShow().then(data => expect(data).toEqual(clickShow));
  });