import Head from '../Helper/Head';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { STATS_GET } from '../../Api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import UserStatsGraphs from './UserStatsGraphs/UserStatsGraphs';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title='Estatísticas' />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
