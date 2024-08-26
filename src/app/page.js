'use client';

import React, { useEffect, useState } from 'react';

import Header from '@/components/header';
import CategoryMenu from '@/components/category-menu';
import LatestStory from '@/components/latest-story';
import RecentStories from '@/components/recent-stories';
import LoadMoreButton from '@/components/load-more-button';
import { fetchNewsByCategory } from '@/services/news-service';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('top-headlines');
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);
  const [latestStory, setLatestStory] = useState(null);

  useEffect(() => {
    const loadStories = async () => {
      setLoading(true);
      // const fetchedStories = await fetchNewsByCategory(selectedCategory, 1);

      const fetchedStories = [
        {
          source: {
            id: 'google-news',
            name: 'Google News',
          },
          author: 'Xataka',
          title:
            'Nuevo SUV de Xiaomi: fecha de lanzamiento, precio, modelos y todo lo que creemos saber sobre su próximo... - Xataka',
          description: null,
          url: 'https://news.google.com/rss/articles/CBMibkFVX3lxTFB4bTdQcDA5Q2tWd25FUWJpVnR1VGVsMTA2VEoxaTR0Rzl0S1BuSGQ5RmtNdFI3ckJJQnlzNTRZOWc2aHVXeFk5NlRSQjBSZVFVby02ektDSVNKUk4zWThvV1JZWDd1TVMyaTVXTzFn0gFzQVVfeXFMTlR1MnhRTHBCdUtLai0yc2EyRUZYMlB2eEd0M19haUk5c0tocnZ1ZnV0SzdPa0hYSk4zNk5lckpMU2Y0Y1VDZkNQd1RObnJzeHpjSEhJcy1CNnFiRlRVXzN0M3FsZHpvSHhMd0k2TjVKa3NUYw?oc=5',
          urlToImage: 'https://picsum.photos/seed/picsum/200/300',
          publishedAt: '2024-08-25T12:30:27Z',
          content: null,
        },
        {
          source: {
            id: 'google-news',
            name: 'Google News',
          },
          author: 'Brasil 247',
          title:
            'Possível aumento da Selic preocupa varejo e promete impacto negativo no Natal - Brasil 247',
          description: null,
          url: 'https://news.google.com/rss/articles/CBMisgFBVV95cUxNV0cya0kxeWhpSFJlUGpKb01BZHdTc3p5TjRjcHZteWFWekZ6ZVA4TFFiOEpwVkd2dzB0cmpDTDNHdFg0TlBhenhKTElMUlpuWExyRGNjY3hWWTJmV0REOHd3bkM5RFMwekhIdl9jamZUVHdZZ0JjY19sUzQxR0xEaVFXRmpqLWFaUTNnbF9mbU84ZlRBM1ctQkN3SHZjV3V0ZlJmdms5ZklMT1o5TlAxaVdn?oc=5',
          urlToImage: null,
          publishedAt: '2024-08-25T12:24:31Z',
          content: null,
        },
        {
          source: {
            id: 'google-news',
            name: 'Google News',
          },
          author: 'Infobae America',
          title:
            'El paro bajará en 63.500 personas en la segunda mitad del año, hasta mínimos de 2008, según Adecco - Infobae America',
          description: null,
          url: 'https://news.google.com/rss/articles/CBMi4gFBVV95cUxPb0Y3NG5DaU1pZFNJZzYycU8ydDRxTmI2US1QeVYtNmVCdkFtU3dfU25iRGlNbEV5V3pweFZvTkJHSjFGMThsWXR0VDBxRkpmN2JLMVFWZzBQZU0xejBMUXVqTTd3N3prdGJMM0hwWlJjZDZZX0dSVDNpd1VEd1ZwVkFBNGdSVGx0cWdScnFjRDN3SkdXOF9JV3pRdFVYWlIxZWN1SU1jdmx3VkFMalkwQ1pBSFJjek9fektoLXRZNnhoNUsxZU1TRlNYOHJjbkRMdGRjNDVoOXpUWXE1X1NhbkNn0gH8AUFVX3lxTE5WUzB1T09mMkNwUlJYVVRqVFFXV0czVDZ3VktHVDViNXk5OWNIcWNzMDBEbnZWUXFveW1ZMkRRRGdRYWdWOHdOTU51Q1UtUFM5OWNVWVZVSXBZQW9fMmFpNXFvc0VIems3d0hsZlF4Z2Q1QWlvVUQ4Uk11MGlXRUQwTm5jM0Q4OHN6eVlaNl9nZUtSeGloYTVUMlZlOVRvSUZxdjVLbDZ0M0FnSm9pd1Z1X19mekJ4VTc5WEktYkwteVUtVXZYeHJCSFFhVmNGTTIzZVJYSU4tUU91VVQya09tMlJfSVFVelVxSVZhTU1TWHFSbl93djJfNEtvVQ?oc=5',
          urlToImage: null,
          publishedAt: '2024-08-25T12:02:00Z',
          content: null,
        },
        {
          source: {
            id: 'google-news',
            name: 'Google News',
          },
          author: 'Andro4all',
          title:
            'El nuevo CEO de Starbucks prefiere viajar 1600 km a mudarse para ir 3 días por semana a la oficina - Andro4all',
          description: null,
          url: 'https://news.google.com/rss/articles/CBMi4gFBVV95cUxPVU1URlNfMGhkbVFlakl0ZlRzMklmNWo3WDlad0N6eHl3NFNVQkp5SExMVGhMcFJfbm9JSW4tMERLdl9kbEptb2NFQTM3d3k2eXRYNFU5NDVwdjBzS29ZdGZlT19ld2xaNmNCQXlUWVNlVUVuNThteFdRX19YampzUmp1Z1lGOGRGS2RqWFg4anUxLUgya3diUmVFanEyZlc4S215TElJZHR2TGtMSGNYekZpelpfQ2NYNlAtR3U0WUJrek92SUFQVVJrSVBweHBUR280SlU5RDlYOS0wOUFCRkZn?oc=5',
          urlToImage: null,
          publishedAt: '2024-08-25T12:01:55Z',
          content: null,
        },
        {
          source: {
            id: 'google-news',
            name: 'Google News',
          },
          author: 'Atalayar',
          title:
            'El presidente de la Reserva Federal, Jerome Powell, anuncia que ha llegado el momento de bajar los tipos de interés - Atalayar',
          description: null,
          url: 'https://news.google.com/rss/articles/CBMigAJBVV95cUxOVlZsTlN2VXhYdVcxdXVLWFJCeVhHVjhhS1lTZzNzMHFrTG00UmhjMUdiZGpDeGdkTzVpdElCcllZbi13dm9Kb3ZNN0dKUzNYaXEzbmdxUUNiZmlvM0NkVW0tQVVleG1kMXJRMXpJd1BsbkJCY2hkbXVaNjBSRzZ6RmZiY3BSQkJDVjcwQTRwMHVIdUYtZzVva1NsejZkeTBfbktnS2lsSG5vbmJXTENTSVhPUWhyNVI5QkdBYmdBVDBERjlYWW5SWEVxcHdhZHJSeHhyVnc5RnlQbjZqNV9KejRyVGZoSTFQeGxpWkZ3aHpWeERwM3dheENoeFNBd2lp0gGGAkFVX3lxTE1UdVdiT3pXRzhGbGkzX3UxU0xQOWxSdTNFeU9SQkxHMUlPMEduWTNLZDhlQWZXNFJSQzZlRVNjSXVqS3hHNFJOSGN0SHYyaFVfTnZkRm4xRGZ6cXFoVWJheGk5TlFRenUtTU5hZUQtbUpvWWpIdFJTdmVJbG5UU3cyM1pCM1JfempnaGx5WXpSU0hjTzZqSm5sNlZEWWtwRVRnWWVJNmtDUmU4QU1aazR4SWVWZjJ4X3M1SnU2b3k1VTcySGFNTk1pUDh1MTJrWFBQbXB5Z0pscm1UREFnZHVpTXQ0MVZfVHktZTZHY3NqeGp6UHV2RTNuVGNacnAyVkxhakZlWGc?oc=5',
          urlToImage: null,
          publishedAt: '2024-08-25T12:00:00Z',
          content: null,
        },
        {
          source: {
            id: 'google-news',
            name: 'Google News',
          },
          author: 'infobae',
          title:
            'No te dejes engañar: Crean estafa con IA que promete el mejor producto en tecnología y es mentira - infobae',
          description: null,
          url: 'https://news.google.com/rss/articles/CBMi1AFBVV95cUxPQzd3LXhoLVJBNlNYRWx1VXZ0bmw5b3I4TEU0dTRVRkstMnpVT3Z1Q3V6UXp1NWJac0ZFQmNZX2RZaGItNGw2YUp5T3JLaGd1YVBvTXozSDBSdGxVRV9XYnFlSm5VbFlDa0JxM0RXdUltTWIzYlNFaXZkSU5LSERVR0VaUWxabTBDOWdLVGhwYnlVa3NxNlZ0eXh3QWQ0RG42NVpfUDctMmhpZGpFNk5nbjFPcl8yTGtOOVFGWUNxbXJadktPTV9FMEwtSGZTcEdmZTJZTNIB7wFBVV95cUxQUFAzXzU1WmJ4TF85NTA0S012dU41cHNsaFdoS2s2X3VqU0FBOVpMOGd2bV90U21wTmgwZ2VuLTRiU054dmpNbzZXT0hWNHA5RE1ycjhxYTd5SUpPQ1dlS1pwSTNtMnY2V1hBYkxTUEsyY19pbFMwN2piS2ZOZzQzdXVYUXV3dFFWcXl5RTZxX20xWFJnNjIwVTF6YzNKX0NqMkpia2Q2Q1RyNy1IZ1dsMjlmUHhqZ21VeENqQllBb3IyaHdDSkxaaTdtZGhqcFlUUkNua0JzZF9RVUhEN3BRYU83R2NTMzloYzBwLW5nOA?oc=5',
          urlToImage: null,
          publishedAt: '2024-08-25T11:54:53Z',
          content: null,
        },
        {
          source: {
            id: 'google-news',
            name: 'Google News',
          },
          author: 'infobae',
          title:
            'Cuál es el precio de las principales criptomonedas este día - infobae',
          description: null,
          url: 'https://news.google.com/rss/articles/CBMiowFBVV95cUxPY1h3MUhLUVpsZlJ2UTIzWC1hWm9QVVdsUW85blFqYWlZVXJwS1NrdG9wVWxPUDB3dDJOaDhXSjFwS0s5ZE94OG9TcG1nVFZROG93b04tUjBJMmNuaFZkTmhBUnE5eWZjRXdMWUZBMzJMN2VFa1Fsd25QdG5mRmN5eXlZWkJrOU13alVVUTVQUWJWOGlPNUJxdF9wODdwS25yWElz0gG-AUFVX3lxTE9KMjhKc0wtOXNqTWhNejFBNW1DZUVpRnVUSHB4TGFlSWtkNTFzN2gwaHJUVFpDOGpHd2swTkhPQzNWM0pnZll5MkNBeS16YUhuVGR1VEtfVm9kcUtQMFhaRDVTM3dlYlYzeWJfNl9Tb19yZGxGOHY4c3VlR0ZNOUM4VV9ybWVVaU9DNlpCbjZpSVlVbmhqdU9tZ2pvNFRZNHE5Wk9RVGdYYklUTTU4bHNGQ2JXY3BobUlFMWx4UVE?oc=5',
          urlToImage: null,
          publishedAt: '2024-08-25T11:49:28Z',
          content: null,
        },
        {
          source: {
            id: 'google-news',
            name: 'Google News',
          },
          author: 'Infobae España',
          title:
            'Super Once: esta es la combinación ganadora del sorteo del 25 agosto - Infobae España',
          description: null,
          url: 'https://news.google.com/rss/articles/CBMirwFBVV95cUxPcmVKQXQ2UkVKNGpvVlZ0amdRN0pWRzNJYmRudXVkZ0pSOU1lYW8zclIxbzNqZTFmMVc5UkVKR0lTaUZHSzFUb0J0OVc4dVl1ZXBpaG5NSjg1NmtybUYtLTRacV9WeVozZUZSbWJfbnFGNnMzVW9TMTNaVnVlQVNuZjBJdXI5QW80UHM2cEIzLXRjNG5nUnYxOHNlR3lMSVNRMk1sS3o4V1dNVm5vZzMw0gHKAUFVX3lxTFA1RGRaUndIbk85ZFpLandwTFVYMWxiUUNQZl9icWRnQUpWbXBCWWJnazhpT1prRXZlRHhBTTdweS16S1hxQ3dMeTRXcjlXZUFOSkFGYmppSHd5M1NOM2lDQU03SllFMElDXzYzRmFBZFhwcmN1MXRjeUhKZEtvbUFMVlU5b0RhSzRwcm1tMXhuTUZva1pKM0otNGl3a1d6d1BhTUFvUkFWQXhpcFBmY0hiZy1UeEEtUkkwOFNFRHpHcUVrYlVhQk5QX2c?oc=5',
          urlToImage: null,
          publishedAt: '2024-08-25T11:45:00Z',
          content: null,
        },
        {
          source: {
            id: 'google-news',
            name: 'Google News',
          },
          author: 'news.cn',
          title: '李强参观调研2024世界机器人博览会 - news.cn',
          description: null,
          url: 'https://news.google.com/rss/articles/CBMidkFVX3lxTE1Mb0t1WUZrNkVlWkVXSzlaY3Vadm5CcmQ2aVIzMGY0ZzI0RTBhU01fWld4aXF5dEtRUTNXQ0lpeXVib2VHdUJZcWNmLWt4c1ZQTXVCQk5EbjBYR2JIdlVyRnh1R0pCb3NwTGhBcXFFQkwzRG02Rmc?oc=5',
          urlToImage: null,
          publishedAt: '2024-08-25T11:42:53Z',
          content: null,
        },
        {
          source: {
            id: 'google-news',
            name: 'Google News',
          },
          author: 'Infobae España',
          title:
            'Cuál es el precio de la luz en España para este 26 de agosto - Infobae España',
          description: null,
          url: 'https://news.google.com/rss/articles/CBMipgFBVV95cUxOc0J1SUsySUljMFI3YkpVQUZoUE5lUTVHblBZSWlYd1RnLXdjS3ExX3M3eW1lTklmeXNWRDhtaGE1RVBucFRDeUxDS0JPQkVVdmRMd05HZTA3aGpMbmtSNy1lREZpTXJJRzhnMDB6MUs0ZGFTQ0l3clNFQjYwSzlrREJyZkJFckx0R09HY1R2bVRqVnZ1RVh6ZnlEODY1Z1JPNE1SQ2NB0gHAAUFVX3lxTFBQb0c2cFZUX0tGNHJIdE5Gbi10cUhfSThzaVVDNTRXd3Z1MlhlTF9OMEtuc2o4el9UMnF6TXg4Q3hWdy1CUlpPbkRHUS0tUGZ6QlF4Tmhsak51dXdUNFE2MnI2Sm14YlhobW13emNPME1MWUZ3TWlWb211b3dzMmpJNkkwYTRDS1JSckFhYzhoRlROTUhLXzJKcjVEbUVra3VDQ3owdWRCSXBmcmthQkpCYnY1elFYRjhHUy1QRFBvVA?oc=5',
          urlToImage: null,
          publishedAt: '2024-08-25T11:42:43Z',
          content: null,
        },
      ];

      console.log(JSON.stringify(fetchedStories));
      setLoading(false);

      setLatestStory(fetchedStories[0]);
      setStories(fetchedStories.slice(1));
    };

    loadStories();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <Header />
      <CategoryMenu
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      {latestStory && <LatestStory story={latestStory} />}
      <RecentStories />
      <LoadMoreButton />
    </div>
  );
}
